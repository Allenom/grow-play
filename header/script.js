'use strict'

// ----------------------- GET-запросы --------------------------

// ------------------- Admin / User / Guest ---------------------
async function getVisitor() {
    const response = await fetch('../server.php?cookies=0');
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------------- Вход ------------------------------
async function login(email, pass) {
    const response = await fetch(`../server.php?cookies=1&email=${email}&pass=${pass}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------------- Выход ------------------------------
async function logout() {
    const response = await fetch(`../server.php?cookies=logout`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// --------------------- Подтверждение почты ---------------------
async function sendСodeToMail(email) {
    const response = await fetch(`../server.php?loginmail=${email}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------ Регистрация --------------------------
async function registration(name, email, pass) {
    const response = await fetch(`../server.php?users=2&name=${name}&email=${email}&pass=${pass}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------ Восстановление пароля ----------------------
async function sendСodeToMailForPass(email) {
    const response = await fetch(`../server.php?forgetpass=${email}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function setNewPass(email, pass) {
    const response = await fetch(`../server.php?users=change&oldemail=${email}&pass=${pass}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// -------------------------- Catalog ----------------------------
async function getCatalog() {
    const response = await fetch('../server.php?catalog=get');
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

//-------- изменение элементов каталога 1 уровня по карандашу -------
async function сhangeCatalog1Item(id, newTitle) {
    const response = await fetch(`../server.php?catalog1=change&id=${id}&newtitle=${newTitle}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------- удаление элементов каталога 1 уровня ------------
async function deleteCatalog1Item(id) {
    // const response = await fetch(`../server.php?catalog1=delete&id=${id}`);
    const response = await fetch(`../server.php?catalog=delete&level=1&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------- добавление элементов каталога 1 уровня ------------
async function createCatalog1Item(title) {
    const response = await fetch(`../server.php?catalog1=create&title=${title}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ---------------------

//-------------------------------------
function formCatalogPart1(catalog1Id, catalog1Title, adminBtnVisible) {
    return `<div class="header-catalog-item-wrap" catalog1IdWrap="${catalog1Id}">
    <a href="../catalog?level=1&id=${catalog1Id}" class="header-catalog-item-link">
        <div class="header-catalog-item" id="header-catalog1-item" type="text" catalog1Id="${catalog1Id}">${catalog1Title}</div>
    </a>
    <div class="header-catalog-admin-btn ${adminBtnVisible}">
        <img class="header-catalog-item-pencil" id="header-catalog-item-pencil" catalog1IdPen="${catalog1Id}" src="../header/img/pencil.svg" alt="/">
        <img class="header-catalog-item-delete" id="header-catalog-item-delete" catalog1IdDelete="${catalog1Id}" src="../header/img/delete_catalog_item.svg" alt="X">
    </div>
    </div>`
}

function addCatalogPart1Item() {
    return `<div class="header-catalog-item-wrap">
    <div class="header-catalog-item header-opacity" id="header-catalog1-item-new" contentEditable type="text" >+</div>
    </div>`
}

function formCatalogPart2(catalog2Id, catalog2Title) {
    return `<div class="header-catalog-item-wrap">
    <a href="../catalog?level=2&id=${catalog2Id}" class="header-catalog-item-link"><div class="header-catalog-item" id="header-catalog2-item" type="text" catalog2Id=${catalog2Id}>${catalog2Title}</div></a>
    </div>`
}

function formCatalogPart3(catalog3Id, catalog3Title) {
    return `<div class="header-catalog-item-wrap">
    <a href="../catalog?level=3&id=${catalog3Id}" class="header-catalog-item-link"><div class="header-catalog-item" id="header-catalog3-item" type="text" catalog3Id=${catalog3Id}>${catalog3Title}</div></a>
    </div>`
}

getVisitor().then(visitor => {

    // if (visitor.type == "Guest") { console.log('У нас гость') }
    // if (visitor.type == "User") { console.log('У нас зарегистрированный пользователь') }
    // if (visitor.type == "Admin") { console.log('У нас админ') }

    const elemHeaderNameText = document.querySelector('#header-item-title-name')
    const elemHeaderFavoritesText = document.querySelector('#header-item-title-favorites')
    elemHeaderNameText.innerText = visitor.name
    elemHeaderFavoritesText.innerText = visitor.countFavorites

    /* ------------------------------------------------------------------------------------- */
    /* ---------------------------------------- catalog ------------------------------------ */
    /* ------------------------------------------------------------------------------------- */

    // ---------------- Всплывающее окно-каталог открывается и закрывается -----------------

    const elemCatalogWrap = document.querySelector('#header-catalog-wrap')
    const elemCatalogBtn = document.querySelector('#header-catalog-btn')
    const elemCatalogCloseBtn = document.querySelector('#header-catalog-close-btn')
    const elemCatalogBackground = document.querySelector('#header-catalog-background')
    const elemCatalogPart1 = document.querySelector('#header-catalog-part1')
    const elemCatalogPart2 = document.querySelector('#header-catalog-part2')
    const elemCatalogPart3 = document.querySelector('#header-catalog-part3')



    elemCatalogBtn.addEventListener('click', () => {
        elemCatalogWrap.classList.remove('header-delete-elem')
        if (!elemCatalogPart1.innerHTML) {
            getCatalog().then(catalogList => {

                // ---------------- Формирование каталога 1 уровня -----------------
                elemCatalogPart1.innerHTML = ""
                elemCatalogPart2.innerHTML = ""
                elemCatalogPart3.innerHTML = ""
                Object.entries(catalogList).forEach(([catalog1Id, catalog1Structure]) => {
                    const catalog1Title = catalog1Structure.title
                    let adminBtnVisible
                    visitor.type == "Admin" ? adminBtnVisible = "" : adminBtnVisible = "header-delete-elem"
                    elemCatalogPart1.insertAdjacentHTML('beforeend', formCatalogPart1(catalog1Id, catalog1Title, adminBtnVisible))
                })

                // ------------- добавление элементов каталога 1 уровня ------------
                if (visitor.type == "Admin") {
                    elemCatalogPart1.insertAdjacentHTML('beforeend', addCatalogPart1Item())
                    let elemCatalog1New = document.querySelector('#header-catalog1-item-new')
                    elemCatalog1New.onfocus = function () {
                        elemCatalog1New.addEventListener('keydown', function (e) {
                            if (e.keyCode === 13) { elemCatalog1New.blur() }
                        });
                        elemCatalog1New.onblur = function () {
                            if (elemCatalog1New.innerHTML != "+") {
                                if (confirm("Создать новый раздел каталога?")) {
                                    createCatalog1Item(elemCatalog1New.innerHTML)
                                        .then(response => { alert(response) })
                                        .catch(console.error)
                                    elemCatalogPart1.innerHTML = ""
                                    elemCatalogPart2.innerHTML = ""
                                    elemCatalogPart3.innerHTML = ""
                                    elemCatalogWrap.classList.add('header-delete-elem')
                                }
                                else { elemCatalog1New.innerHTML = "+" }
                            }
                        }
                    }
                }

                //-------- изменение элементов каталога 1 уровня по карандашу -------
                let elemCatalogPencils = document.querySelectorAll('#header-catalog-item-pencil')
                elemCatalogPencils.forEach(function (elemCatalogPencil) {
                    elemCatalogPencil.addEventListener('click', () => {
                        if (visitor.type == "Admin") {
                            let elemCatalogChangeItem = document.querySelector(`[catalog1Id="${elemCatalogPencil.getAttribute('catalog1IdPen')}"]`)
                            elemCatalogChangeItem.setAttribute("contentEditable", "true")
                            elemCatalogChangeItem.focus()
                            elemCatalogChangeItem.onblur = function () {
                                сhangeCatalog1Item(elemCatalogChangeItem.getAttribute('catalog1Id'), elemCatalogChangeItem.textContent)
                                    .then(response => { alert(response) })
                                    .catch(console.error)
                            }
                        }
                    });
                });

                // ------------- удаление элементов каталога 1 уровня ------------
                let elemCatalogDeleteBtns = document.querySelectorAll('#header-catalog-item-delete')
                elemCatalogDeleteBtns.forEach(function (elemCatalogDeleteBtn) {
                    elemCatalogDeleteBtn.addEventListener('click', () => {
                        if (visitor.type == "Admin") {
                            if (confirm("Удаление раздела приведёт к удалению всех карточек и подразделов в нём!\nВы уверены, что хотите удалить раздел?")) {
                                let elemCatalogDeleteItem = document.querySelector(`[catalog1IdWrap="${elemCatalogDeleteBtn.getAttribute('catalog1IdDelete')}"]`)
                                elemCatalogDeleteItem.classList.add('header-delete-elem')
                                deleteCatalog1Item(elemCatalogDeleteBtn.getAttribute('catalog1IdDelete'))
                                    .then(response => {
                                        alert(response)
                                        if (response == "Раздел удалён.") { location.reload() }
                                    })
                                    .catch(console.error)
                                elemCatalogPart2.innerHTML = ""
                                elemCatalogPart3.innerHTML = ""
                            }
                        }
                    });
                });

                // ---------------- Формирование каталога 2 уровня -----------------
                let elemCatalog1Items = document.querySelectorAll('#header-catalog1-item')
                elemCatalog1Items.forEach(function (elemCatalog1Item) {
                    elemCatalog1Item.addEventListener('mouseover', () => {
                        elemCatalog1Item.getAttribute('catalog1Id')
                        elemCatalogPart2.innerHTML = ""
                        elemCatalogPart3.innerHTML = ""
                        elemCatalog1Items.forEach(function (elemCatalog1Item) { elemCatalog1Item.classList.remove("header-opacity") })
                        Object.entries(catalogList[elemCatalog1Item.getAttribute('catalog1Id')]['list']).forEach(([catalog2Id, catalog2Structure]) => {
                            elemCatalogPart2.insertAdjacentHTML('beforeend', formCatalogPart2(catalog2Id, catalog2Structure.title))
                            elemCatalog1Item.classList.add("header-opacity")
                        })

                        // ---------------- Формирование каталога 3 уровня -----------------
                        let elemCatalog2Items = document.querySelectorAll('#header-catalog2-item')
                        elemCatalog2Items.forEach(function (elemCatalog2Item) {
                            elemCatalog2Item.addEventListener('mouseover', () => {
                                elemCatalogPart3.innerHTML = ""
                                elemCatalog2Items.forEach(function (elemCatalog2Item) { elemCatalog2Item.classList.remove("header-opacity") })
                                Object.entries(catalogList[elemCatalog1Item.getAttribute('catalog1Id')]['list'][elemCatalog2Item.getAttribute('catalog2Id')]['list']).forEach(([catalog3Id, catalog3Title]) => {
                                    elemCatalogPart3.insertAdjacentHTML('beforeend', formCatalogPart3(catalog3Id, catalog3Title))
                                    elemCatalog2Item.classList.add("header-opacity")
                                })
                            });
                        });
                    });
                });
            })
                .catch(console.error)
        }
    })

    //------------------ Закрытие окна каталога ----------------------
    elemCatalogCloseBtn.addEventListener('click', () => {
        elemCatalogWrap.classList.add('header-delete-elem')
    })

    elemCatalogBackground.addEventListener('click', () => {
        elemCatalogWrap.classList.add('header-delete-elem')
    })

    window.addEventListener('scroll', () => {
        elemCatalogWrap.classList.add('header-delete-elem')
    })

    /* ------------------------------------------------------------------------------------- */
    /* ---------------------------------------- Войти -------------------------------------- */
    /* ------------------------------------------------------------------------------------- */

    // ---------------- Всплывающее окно-войти открывается и закрывается -----------------
    const elemLoginWrap = document.querySelector('#header-login-wrap')
    const elemLoginOpenBtn = document.querySelector('#header-login-name-btn')
    const elemLoginCloseBtn = document.querySelector('#header-login-close-btn')
    const elemLoginBackground = document.querySelector('#header-login-background')
    const elemLoginPassEye = document.querySelector('#header-login-pass-eye')
    const elemLoginInputPass = document.querySelector('#header-login-input-pass')


    elemLoginOpenBtn.addEventListener('click', () => {
        if (visitor.type == 'Guest') {
            elemLoginWrap.classList.remove('header-delete-elem')
        } else {
            document.location.href = "../persaccount"
        }
    })

    elemLoginCloseBtn.addEventListener('click', () => {
        elemLoginWrap.classList.add('header-delete-elem')
    })

    elemLoginBackground.addEventListener('click', () => {
        elemLoginWrap.classList.add('header-delete-elem')
    })

    elemLoginPassEye.addEventListener('click', () => {
        elemLoginInputPass.hasAttribute('type')
            ? elemLoginInputPass.removeAttribute('type')
            : elemLoginInputPass.setAttribute('type', 'password')
    })

    // ----------------------------------------- ВХОД -----------------------------------------

    const elemLoginBtn = document.querySelector('#header-login-btn')
    const elemLoginInputEmail = document.querySelector('#header-login-input-email')
    const elemLoginIncorrectEmailImg = document.querySelector('#header-login-incorrect-email-img')
    const elemLoginIncorrectEmailText = document.querySelector('#header-login-incorrect-email-text')
    const elemLoginIncorrectPassImg = document.querySelector('#header-login-incorrect-pass-img')
    const elemLoginIncorrectPassText = document.querySelector('#header-login-incorrect-pass-text')

    elemLoginBtn.addEventListener('click', () => {
        if (elemLoginInputEmail.value.trim() == "") {
            elemLoginIncorrectEmailImg.classList.remove('header-hide-elem')
        }
        else if (elemLoginInputPass.value == "") {
            elemLoginIncorrectPassImg.classList.remove('header-hide-elem')
            elemLoginPassEye.classList.add('header-hide-elem')
        }
        else {
            login(elemLoginInputEmail.value, elemLoginInputPass.value)
                .then(response => {
                    if (response == "incorrectEmail") {
                        elemLoginIncorrectEmailImg.classList.remove('header-hide-elem')
                        elemLoginIncorrectEmailText.classList.remove('header-hide-elem')
                    }
                    else if (response == "incorrectPass") {
                        elemLoginIncorrectPassImg.classList.remove('header-hide-elem')
                        elemLoginIncorrectPassText.classList.remove('header-hide-elem')
                        elemLoginPassEye.classList.add('header-hide-elem')
                    }
                    else if (response == "correct") { location.reload() }
                    else { console.log('На запрос о входе в систему пришёл неожиданный ответ.') }
                })
                .catch(console.error)
        }
    })

    elemLoginInputEmail.addEventListener('focus', () => {
        elemLoginIncorrectEmailImg.classList.add('header-hide-elem')
        elemLoginIncorrectEmailText.classList.add('header-hide-elem')
    })

    elemLoginInputPass.addEventListener('focus', () => {
        elemLoginIncorrectPassImg.classList.add('header-hide-elem')
        elemLoginIncorrectPassText.classList.add('header-hide-elem')
        elemLoginPassEye.classList.remove('header-hide-elem')
    })


    // ---------------- Всплывающее окно-зарегистрироваться открывается и закрывается -----------------

    const elemRegWrap = document.querySelector('#header-reg-wrap')
    const elemRegOpenBtn = document.querySelector('#header-login-registration-btn')
    const elemRegCloseBtn = document.querySelector('#header-reg-close-btn')
    const elemRegBackground = document.querySelector('#header-reg-background')
    const elemRegPassEye = document.querySelector('#header-reg-pass-eye')
    const elemRegInputPass = document.querySelector('#header-reg-input-pass')
    const elemLoginOpenBtn2 = document.querySelector('#header-reg-login-btn')


    elemRegOpenBtn.addEventListener('click', () => {
        elemLoginWrap.classList.add('header-delete-elem')
        elemRegWrap.classList.remove('header-delete-elem')
    })

    elemRegCloseBtn.addEventListener('click', () => {
        elemRegWrap.classList.add('header-delete-elem')
    })

    elemRegBackground.addEventListener('click', () => {
        elemRegWrap.classList.add('header-delete-elem')
    })

    elemRegPassEye.addEventListener('click', () => {
        elemRegInputPass.hasAttribute('type')
            ? elemRegInputPass.removeAttribute('type')
            : elemRegInputPass.setAttribute('type', 'password')
    })

    elemLoginOpenBtn2.addEventListener('click', () => {
        elemLoginWrap.classList.remove('header-delete-elem')
        elemRegWrap.classList.add('header-delete-elem')
    })

    // ------------------------------------- Подтверждение почты -----------------------------------------
    const elemRegInputName = document.querySelector('#header-reg-input-name')
    const elemRegInputEmail = document.querySelector('#header-reg-input-email')
    const elemRegConfirmEmailBtn = document.querySelector('#header-reg-confirmemail-btn')
    const elemRegIncorrectNameImg = document.querySelector('#header-reg-incorrect-name-img')
    const elemRegIncorrectEmailImg = document.querySelector('#header-reg-incorrect-email-img')
    const elemRegIncorrectPassImg = document.querySelector('#header-reg-incorrect-pass-img')
    const elemRegCaptionCode = document.querySelector('#header-reg-caption-code')
    const elemRegInputCode = document.querySelector('#header-reg-input-code')
    const elemRegBtn = document.querySelector('#header-reg-btn')
    let permissionToReg = false;
    let nameForReg = false;
    let emailForReg = false;
    let passForReg = false;


    elemRegConfirmEmailBtn.addEventListener('click', () => {
        if (elemRegInputName.value.trim() == "") {
            elemRegIncorrectNameImg.classList.remove('header-hide-elem')
        }
        else if (elemRegInputName.value.length > 20) {
            elemRegIncorrectNameImg.classList.remove('header-hide-elem')
            alert("Ограничение длины имени - 20 символов.\nПожалуйста, введите имя короче 20 символов.")
        }
        else if (!elemRegInputEmail.value.includes('@') || !elemRegInputEmail.value.includes('.')) {
            elemRegIncorrectEmailImg.classList.remove('header-hide-elem')
        }
        else if (elemRegInputPass.value.trim() == "" || elemRegInputPass.value.length < 6) {
            elemRegIncorrectPassImg.classList.remove('header-hide-elem')
            elemRegPassEye.classList.add('header-hide-elem')
        }
        else {
            sendСodeToMail(elemRegInputEmail.value)
                .then(response => {
                    if (response == "fail_mail_confirm") {
                        alert('Не удалось выслать код на указанную почту. Попробуйте другой почтовый ящик.')
                    }
                    else if (response == "already_have") {
                        alert('Данный пользователь уже зарегистрирован. Попробуйте другой E-mail или нажмите "Войти".')
                    }
                    else {
                        elemRegInputName.classList.add('header-disable-elem')
                        elemRegInputEmail.classList.add('header-disable-elem')
                        elemRegInputPass.classList.add('header-disable-elem')
                        nameForReg = elemRegInputName.value;
                        emailForReg = elemRegInputEmail.value;
                        passForReg = elemRegInputPass.value;

                        alert('Мы выслали код на Вашу почту.\nВведите его в поле "Код подтверждения".\nЕсли письма нет, проверьте папку "Спам".')
                        elemRegCaptionCode.classList.remove('header-disable-elem')
                        elemRegInputCode.classList.remove('header-disable-elem')
                        console.log(response)
                        elemRegInputCode.addEventListener('input', () => {
                            if (elemRegInputCode.value == response) {
                                elemRegBtn.classList.remove('header-disable-elem')
                                permissionToReg = true;
                                elemRegConfirmEmailBtn.classList.add('header-disable-elem')
                                elemRegInputCode.classList.add('header-disable-elem')
                            }
                        })
                    }
                })
                .catch(console.error)
        }
    })

    elemRegInputName.addEventListener('focus', () => {
        elemRegIncorrectNameImg.classList.add('header-hide-elem')
    })

    elemRegInputEmail.addEventListener('focus', () => {
        elemRegIncorrectEmailImg.classList.add('header-hide-elem')
    })

    elemRegInputPass.addEventListener('focus', () => {
        elemRegIncorrectPassImg.classList.add('header-hide-elem')
        elemRegPassEye.classList.remove('header-hide-elem')
    })

    // ------------------------------------- РЕГИСТРАЦИЯ -----------------------------------------

    elemRegBtn.addEventListener('click', () => {
        if (permissionToReg && nameForReg && emailForReg && passForReg) {
            registration(nameForReg, emailForReg, passForReg)
                .then(response => {
                    if (response == "fail_registration" || response == "already_have") {
                        alert('Не удалось зарегистрироваться.\nПопробуйте перезагрузить страницу, ввести другой E-mail или обратиться позже.')
                    }
                    else if (response == "successful_registration") { location.reload() }
                })
                .catch(console.error)
        }
        else alert('Разрешение на регистрацию не получено. Попробуйте перезагрузить страницу и ввести данные ещё раз.')
    })

    // --------------- Восстановление пароля. Первое окно открывается и закрывается ---------------------
    const elemRecoveryOpenBtn1 = document.querySelector('#header-login-forget')
    const elemRecoveryCloseBtn1 = document.querySelector('#header-recovery1-close-btn')
    const elemRecoveryBackground1 = document.querySelector('#header-recovery1-background')
    const elemRecoveryWrap1 = document.querySelector('#header-recovery1-wrap')
    const elemRecoveryBtn1 = document.querySelector('#header-recovery1-btn')
    const elemRecoveryInputEmail = document.querySelector('#header-recovery-input-email')
    const elemRecoveryIncorrectImg1 = document.querySelector('#header-recovery-incorrect-email-img')
    const elemRecoveryIncorrectText1 = document.querySelector('#header-recovery-incorrect-email-text')

    const elemRecoveryWrap2 = document.querySelector('#header-recovery2-wrap')


    elemRecoveryOpenBtn1.addEventListener('click', () => {
        elemLoginWrap.classList.add('header-delete-elem')
        elemRecoveryWrap1.classList.remove('header-delete-elem')
    })

    elemRecoveryCloseBtn1.addEventListener('click', () => {
        elemRecoveryWrap1.classList.add('header-delete-elem')
    })

    elemRecoveryBackground1.addEventListener('click', () => {
        elemRecoveryWrap1.classList.add('header-delete-elem')
    })

    elemRecoveryInputEmail.addEventListener('focus', () => {
        elemRecoveryIncorrectImg1.classList.add('header-hide-elem')
        elemRecoveryIncorrectText1.classList.add('header-hide-elem')
    })


    // --------------- Восстановление пароля. Отправка кода подтверждения на почту ---------------------

    let $codeForgetPass = -4;
    let $oldEmail = false;

    elemRecoveryBtn1.addEventListener('click', () => {
        if (elemRecoveryInputEmail.value.trim() == "" || !elemRecoveryInputEmail.value.includes('@') || !elemRecoveryInputEmail.value.includes('.')) {
            elemRecoveryIncorrectImg1.classList.remove('header-hide-elem')
        }
        else {
            sendСodeToMailForPass(elemRecoveryInputEmail.value)
                .then(response => {
                    if (response == "unknown_email") {
                        elemRecoveryIncorrectImg1.classList.remove('header-hide-elem')
                        elemRecoveryIncorrectText1.classList.remove('header-hide-elem')
                    }
                    else if (response == "fail_mail_forgetpass") {
                        alert('Не удалось выслать код на указанную почту.\nПопробуйте перезагрузить страницу, ввести другой E-mail или обратиться позже.')
                    }
                    else {
                        $codeForgetPass = response
                        $oldEmail = elemRecoveryInputEmail.value
                        // console.log($codeForgetPass)
                        elemRecoveryWrap1.classList.add('header-delete-elem')
                        elemRecoveryWrap2.classList.remove('header-delete-elem')
                    }
                })
                .catch(console.error)
        }

        // --------------- Восстановление пароля. Второе окно открывается и закрывается ---------------------
        const elemRecoveryCloseBtn2 = document.querySelector('#header-recovery2-close-btn')
        const elemRecoveryBackground2 = document.querySelector('#header-recovery2-background')
        const elemRecoveryBtn2 = document.querySelector('#header-recovery2-btn')
        const elemRecoveryInputCode = document.querySelector('#header-recovery-input-code')

        const elemRecoveryWrap3 = document.querySelector('#header-recovery3-wrap')

        elemRecoveryCloseBtn2.addEventListener('click', () => {
            elemRecoveryWrap2.classList.add('header-delete-elem')
        })

        elemRecoveryBackground2.addEventListener('click', () => {
            elemRecoveryWrap2.classList.add('header-delete-elem')
        })

        // --------------- Восстановление пароля. Проверка кода ---------------------

        elemRecoveryInputCode.addEventListener('input', () => {
            if (elemRecoveryInputCode.value == $codeForgetPass) {
                elemRecoveryBtn2.classList.remove('header-disable-elem')
            }
        })

        elemRecoveryBtn2.addEventListener('click', () => {
            if (elemRecoveryInputCode.value == $codeForgetPass) {
                elemRecoveryWrap2.classList.add('header-delete-elem')
                elemRecoveryWrap3.classList.remove('header-delete-elem')
            }
            else { elemRecoveryBtn2.classList.add('header-disable-elem') }
        })

        // --------------- Восстановление пароля. Третье окно открывается и закрывается ---------------------

        const elemRecoveryCloseBtn3 = document.querySelector('#header-recovery3-close-btn')
        const elemRecoveryBackground3 = document.querySelector('#header-recovery3-background')
        const elemRecoveryBtn3 = document.querySelector('#header-recovery3-btn')
        const elemRecoveryInputPass = document.querySelector('#header-recovery-input-pass')
        const elemRecoveryPassEye = document.querySelector('#header-recovery-pass-eye')

        elemRecoveryCloseBtn3.addEventListener('click', () => {
            elemRecoveryWrap3.classList.add('header-delete-elem')
        })

        elemRecoveryBackground3.addEventListener('click', () => {
            elemRecoveryWrap3.classList.add('header-delete-elem')
        })

        elemRecoveryPassEye.addEventListener('click', () => {
            elemRecoveryInputPass.hasAttribute('type')
                ? elemRecoveryInputPass.removeAttribute('type')
                : elemRecoveryInputPass.setAttribute('type', 'password')
        })

        // --------------- Восстановление пароля. Новый пароль ---------------------

        elemRecoveryInputPass.addEventListener('input', () => {
            if (elemRecoveryInputPass.value.trim() != "" && elemRecoveryInputPass.value.length > 5) {
                elemRecoveryBtn3.classList.remove('header-disable-elem')
                elemRecoveryBtn3.addEventListener('click', () => {
                    setNewPass($oldEmail, elemRecoveryInputPass.value)
                        .then(response => {
                            if (response == "unknown_email") {
                                alert('Неизвестный E-mail. Перезагрузите страницу и попробуйте ещё раз')
                            }
                            else if (response == "fail_change_pass") {
                                alert('Не удалось установить новый пароль. Перезагрузите страницу и попробуйте ещё раз')
                            }
                            else if (response == "successful_change_pass") { location.reload() }
                            else { console.log('На запрос о смене пароля пришёл неожиданный ответ.') }
                        })
                        .catch(console.error)
                })
            }
        })
    })

    // ---------------------------------- Избранные --------------------------------------
    const elemFavoritesBtn = document.querySelector('#header-login-favorites-btn')
    elemFavoritesBtn.addEventListener('click', () => {
        if (visitor.type == 'Guest') {
            elemLoginWrap.classList.remove('header-delete-elem')
        } else {
            document.location.href = "../favorites"
        }
    })



})
    .catch(console.error)




















