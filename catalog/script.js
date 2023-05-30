'use strict'

const directoryCardsImg = "../cardsimg/";
const directoryCatalogsImg = "../catalogsimg/";
const cardsSum = 20; // Количество карточек, подгружаемых за один раз

const elemIDlevel = document.querySelector('#identifi-level')
const elemIDid = document.querySelector('#identifi-id')
const catalogLevel = elemIDlevel.innerHTML;
const catalogId = elemIDid.innerHTML;
elemIDlevel.classList.add('delete-elem')
elemIDid.classList.add('delete-elem')

// console.log('----------------------------------')
// console.log(`Уровень каталога: ${catalogLevel}`)
// console.log(`ID каталога: ${catalogId}`)
// console.log('----------------------------------')


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

// ---------------------------- Путь ----------------------------
async function getPath() {
    const response = await fetch(`../server.php?catalog=path&level=${catalogLevel}&id=${catalogId}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------- Список подкатегорий ----------------------
async function getCategories() {
    const response = await fetch(`../server.php?catalog=list&level=${catalogLevel}&id=${catalogId}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------- Список карточек ----------------------
async function getCards(cardsCount, cardsSum) {
    const response = await fetch(`../server.php?catalog=cards&level=${catalogLevel}&id=${catalogId}&cardscount=${cardsCount}&cardssum=${cardsSum}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ---------------- Добавление элементов каталога 2 и 3 уровня --------------------
async function createNewCategory(title, img) {
    const response = await fetch(`../server.php?catalog=new&level=${catalogLevel}&id=${catalogId}&title=${title}&img=${img}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// async function addNewCategoryImg(elemNewCategotyInputFile) {
//     var data = new FormData()
//     data.append('file', input.files[0])
//     data.append('user', 'hubot')
//     const response = await fetch(directoryCatalogsImg, {
//         method: 'POST',
//         body: data
//     })
// }

// ----------------------- Изменение названия каталога 2 и 3 уровня ----------------------------
async function changeCategoryTitle(id, title) {
    const response = await fetch(`../server.php?catalog=change&level=${Number(catalogLevel) + 1}&id=${id}&title=${title}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Изменение картинки каталога 2 и 3 уровня ---------------------------
async function changeCategoryImg(id, img) {
    const response = await fetch(`../server.php?catalog=change&level=${Number(catalogLevel) + 1}&id=${id}&img=${img}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Удаление элемента каталога 2 и 3 уровня ---------------------------
async function deleteCategory(id) {
    const response = await fetch(`../server.php?catalog=delete&level=${Number(catalogLevel) + 1}&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Увеличить популярность карточки ---------------------------
async function boostPopularity(id) {
    const response = await fetch(`../server.php?card=boost&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------- Добавить в избранные ------------------------------
async function addToFavorite(id) {
    const response = await fetch(`../server.php?favcards=add&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}



// ---------------- Список подкатегорий в слайдере ----------------------
function formCategories(numBackColorCategory, id, title, img, countOfStyles) {
    return `<div class="itc-slider__item ${countOfStyles}">
            <a href="../catalog?level=${Number(catalogLevel) + 1}&id=${id}" class="catalog-card-link">
                <div class="catalog-card-${numBackColorCategory} catalog-cards catalog-cards-transform">
                    <div class="catalog-card-background-white">
                        <img class="catalog-card-img" id="catalog-card-img" src=${directoryCatalogsImg}${img} alt="${title}">
                    </div>
                    <div class="catalog-card-title">${title}</div>
                </div>
            </a>
        </div>`
}

function formCategoriesIndic(i) {
    return `<li class="itc-slider__indicator" data-slide-to="${i}"></li>`
}

function formCategoriesForAdmin(numBackColorCategory, id, title, img, countOfStyles) {
    return `<div class="itc-slider__item ${countOfStyles}">
                <a href="#" class="catalog-card-link">
                    <div class="catalog-card-${numBackColorCategory} catalog-cards">
                        <div class="catalog-card-img-name" id="catalog-card-img-name" idCategory="${id}" contentEditable>${img}</div>
                        <img class="catalog-card-delete" id="catalog-card-delete" idCategory="${id}" src="./img/delete_catalog_item.svg" alt="X">
                        <a href="../catalog?level=${Number(catalogLevel) + 1}&id=${id}" class="catalog-card-link">
                            <div class="catalog-card-background-white">
                             <img class="catalog-card-img" id="catalog-card-img" idCategory="${id}" src=${directoryCatalogsImg}${img} alt="${title}">
                            </div>
                        </a>
                        <div class="catalog-card-title" id="catalog-card-title" idCategory="${id}" contentEditable>${title}</div>
                    </div>
                </a>
            </div>`
}


// let displayElem = "delete-elem"
// let changeElem = ""
// if (visitor.type == "Admin") {
//     displayElem = ""
//     changeElem = "contentEditable"
// }
// ------------------------- Новая категория ----------------------------

function formNewCategory(numBackColorCategory, countOfStyles) {
    return `<div class="itc-slider__item ${countOfStyles}">
        <div class="catalog-card-${numBackColorCategory} catalog-cards">
            <div class="catalog-card-background-white">
            <span>Введите полное имя изображения (с расширением) по адресу ${directoryCatalogsImg}</span>
            <input type="text" id="catalog-new-img-name">
            </div>
            <div class="catalog-card-new-title" id="catalog-new-title" contentEditable>НОВЫЙ РАЗДЕЛ</div>
            <div class="catalog-card-new-btn disable-elem" id="catalog-new-btn">создать</div>
        </div>
</div>`
}

/* <span>Выберите изображение формата JPEG, PNG, SVG или GIF. Размер до 5 МБ.</span>
<input type="file" id="catalog-new-input-file"> */


// ------------------------- Список карточек ----------------------------
let cardsCount = 0

function formCards(id, title, img, rating, numBackColor) {
    cardsCount++
    return `<div class="card-wrap">
        <a href="../card?id=${id}">
            <div class="card">
                <img src="./img/background_color(${numBackColor}).svg" alt="color_background">
                <div class="white_background">
                    <img class="card-img" src=${directoryCardsImg}${img} alt="${title}">
                </div>
            </div>
        </a>
        <div class="actions start">
            <a class="product_link" href="../card?id=${id}">${title}</a>
            <img class="favorite_btn" id="favorite-card-btn" idCard="${id}" src="./img/like_btn.svg" alt="favorite">
        </div>
        <div class="stars">
            <img src="./img/rating ${rating}.svg" alt="${rating} stars">
        </div>
        <div class="actions finish">
            <div class="print btn_finish"  id="card-print-btn" cardImg="${directoryCardsImg}${img}" idCard="${id}">Распечатать</div>
            <a href=${directoryCardsImg}${img} download="" class="card-download-btn-link">
                <div class="download btn_finish" id="card-download-btn" idCard="${id}">Сохранить</div>
            </a>
        </div>
    </div>`
}

// ------------------------- Пустая карточка ----------------------------

function formNewCard(catalog1id, catalog2id, catalog3id) {
    return `<div class="card-wrap">
    <a href="../card?id=new&catalog1id=${catalog1id}&catalog2id=${catalog2id}&catalog3id=${catalog3id}">
        <div class="card">
            <img src="./img/background_color(2).svg" alt="color_background">
            <div class="white_background">
                <img class="card-img" src="./img/add_new_card.svg" alt="+">
            </div>
        </div>
    </a>
    <div class="actions start">
        <a class="product_link" href="#">Новая карточка</a>
        <img class="favorite_btn disable-elem" src="./img/like_btn.svg" alt="favorite">
    </div>
    <div class="stars disable-elem">
        <img src="./img/rating 0.svg" alt="0 stars">
    </div>
    <div class="actions finish disable-elem">
        <div class="print btn_finish">Распечатать</div>
        <div class="download btn_finish">Сохранить</div>
    </div>
</div>`
}






getVisitor().then(visitor => {

    // ---------------------------- Путь ----------------------------
    const elemPath = document.querySelector('#path')
    const titleH1 = document.querySelector('#title1')

    getPath().then(paths => {
        if (visitor.type == "Admin") {
            let catalog1id = 0;
            let catalog2id = 0;
            let catalog3id = 0;
            if (paths[1]) { catalog1id = paths[1].id }
            if (paths[2]) { catalog2id = paths[2].id }
            if (paths[3]) { catalog3id = paths[3].id }
            elemCards.insertAdjacentHTML('afterbegin', formNewCard(catalog1id, catalog2id, catalog3id));
        }

        Object.entries(paths).forEach(([level, path]) => {
            if (level == Object.keys(paths).length) {
                titleH1.innerHTML = path.title;
                elemPath.insertAdjacentHTML('beforeend', `<spam>${path.title}<spam>`)
            }
            else { elemPath.insertAdjacentHTML('beforeend', `<a class="path-back" href="../catalog?level=${level}&id=${path.id}">${path.title} > </a>`); }
        })
    })
        .catch(console.error)

    // ------------------------- Список подкатегорий ----------------------------
    const elemSlider = document.querySelector('#slider-container')
    const elemSliderItems = document.querySelector('#itc-slider__items')
    const elemSliderIndicators = document.querySelector('#itc-slider__indicators')
    const elemCards = document.querySelector('#card-list')  // Список карточек

    if (catalogLevel < 3) {
        let numBackColorCategory = -1;
        getCategories().then(categories => {
            if (categories != "none") {
                let countOfStyles = ""
                switch (Object.keys(categories).length) {
                    case 1: countOfStyles = "itc-slider__item1"; break;
                    case 2: countOfStyles = "itc-slider__item1"; break;
                    case 3: countOfStyles = "itc-slider__item2"; break;
                    case 4: countOfStyles = "itc-slider__item3"; break;
                }

                let countOfCategories = 0;
                Object.entries(categories).forEach(([i, category]) => {
                    numBackColorCategory < 3 ? numBackColorCategory++ : numBackColorCategory = 0
                    if (visitor.type == "Admin") { elemSliderItems.insertAdjacentHTML('beforeend', formCategoriesForAdmin(numBackColorCategory, category.id, category.title, category.img, countOfStyles)); }
                    else { elemSliderItems.insertAdjacentHTML('beforeend', formCategories(numBackColorCategory, category.id, category.title, category.img, countOfStyles)); }
                    elemSliderIndicators.insertAdjacentHTML('beforeend', formCategoriesIndic(i));
                    countOfCategories++
                })

                if (visitor.type == "Admin") {
                    numBackColorCategory < 3 ? numBackColorCategory++ : numBackColorCategory = 0
                    elemSliderItems.insertAdjacentHTML('beforeend', formNewCategory(numBackColorCategory, countOfStyles));
                    elemSliderIndicators.insertAdjacentHTML('beforeend', formCategoriesIndic(countOfCategories));
                }
                if (visitor.type == "Admin" || Object.keys(categories).length > 1) {
                    const slider = ItcSlider.getOrCreateInstance('.itc-slider');
                }
            } else if (visitor.type == "Admin") {
                elemSliderItems.insertAdjacentHTML('beforeend', formNewCategory(0, "itc-slider__item1"));
                elemSliderIndicators.insertAdjacentHTML('beforeend', formCategoriesIndic(0));
                // const slider = ItcSlider.getOrCreateInstance('.itc-slider');
            }
            else elemSlider.classList.add('delete-elem')

            // ----------------------- Добавление элементов каталога 2 и 3 уровня ----------------------------
            if (visitor.type == "Admin") {
                const elemNewCategoryImg = document.querySelector('#catalog-new-img-name')
                const elemNewCategoryTitle = document.querySelector('#catalog-new-title')
                const elemNewCategoryBtn = document.querySelector('#catalog-new-btn')

                elemNewCategoryImg.addEventListener('change', () => {
                    if (elemNewCategoryImg.value.includes('.')) {
                        elemNewCategoryBtn.classList.remove("disable-elem")
                    }
                })

                elemNewCategoryBtn.addEventListener('click', () => {
                    if (elemNewCategoryImg.value.includes('.') && elemNewCategoryTitle.innerHTML != "") {
                        createNewCategory(elemNewCategoryTitle.innerHTML, elemNewCategoryImg.value)
                            .then(response => {
                                if (response == "OK") { location.reload() }
                                else if (response == "notExist") {
                                    alert(`Файл изображения не найден.\nЗагрузите файл в директорию ${directoryCatalogsImg}, а затем попробуйте ещё раз.`)
                                } else console.log(response)
                            })
                            .catch(console.error)
                    }
                })


                // const elemNewCategotyInputFile = document.querySelector('#catalog-new-input-file')
                // elemNewCategotyInputFile.addEventListener('change', (e) => {
                //     const fileType = e.target.files[0].type.split("/")[1]
                //     const fileSize = e.target.files[0].size

                //     if (fileSize <= 5242880 && (fileType == "jpeg" || fileType == "gif" || fileType == "png" || fileType == "svg" || fileType == "svg+xml")) {
                //         elemNewCategotyBtn.classList.remove("disable-elem")
                //     } else if (fileSize > 5242880) {
                //         elemNewCategotyInputFile.value = "";
                //         alert("Слишком большой вес файла.\nВыберите файл до 5 МБ.")
                //     }
                //     else {
                //         elemNewCategotyInputFile.value = "";
                //         alert("Неподдерживаемый тип файла.\nВыберите изображение с разрешением JPEG, PNG, SVG или GIF.")
                //     }
                // })

                //             elemNewCategotyBtn.addEventListener('click', () => {
                // // проверка на имя файла
                //             })


                // ----------------------- Изменение названия каталога 2 и 3 уровня ----------------------------

                let elemCatalogCardTitles = document.querySelectorAll('#catalog-card-title')
                elemCatalogCardTitles.forEach(function (elemCatalogCardTitle) {
                    let lastCatalogCardTitle
                    elemCatalogCardTitle.addEventListener('click', () => {
                        lastCatalogCardTitle = elemCatalogCardTitle.innerHTML
                    })
                    elemCatalogCardTitle.onblur = function () {
                        if (elemCatalogCardTitle.innerHTML != lastCatalogCardTitle && elemCatalogCardTitle.innerHTML.trim() != "")
                            changeCategoryTitle(elemCatalogCardTitle.getAttribute('idCategory'), elemCatalogCardTitle.innerHTML)
                                .then(response => {
                                    if (response == "OK") { location.reload() }
                                    else console.log(response)
                                })
                                .catch(console.error)
                    }
                })


                // ----------------------- Изменение картинки каталога 2 и 3 уровня ---------------------------

                let elemCatalogCardImgNames = document.querySelectorAll('#catalog-card-img-name')
                elemCatalogCardImgNames.forEach(function (elemCatalogCardImgName) {
                    let lastCatalogCardImgName
                    elemCatalogCardImgName.addEventListener('click', () => {
                        lastCatalogCardImgName = elemCatalogCardImgName.innerHTML
                    })
                    elemCatalogCardImgName.onblur = function () {
                        if (elemCatalogCardImgName.innerHTML != lastCatalogCardImgName && elemCatalogCardImgName.innerHTML.includes('.'))
                            changeCategoryImg(elemCatalogCardImgName.getAttribute('idCategory'), elemCatalogCardImgName.innerHTML)
                                .then(response => {
                                    if (response == "OK") { location.reload() }
                                    else if (response == "notExist") {
                                        alert(`Файл изображения не найден.\nЗагрузите файл в директорию ${directoryCatalogsImg}, а затем попробуйте ещё раз.`)
                                    } else console.log(response)
                                })
                                .catch(console.error)
                    }
                })


                // ----------------------- Удаление элемента каталога 2 и 3 уровня ---------------------------

                let elemCatalogCardDeleteBtns = document.querySelectorAll('#catalog-card-delete')
                elemCatalogCardDeleteBtns.forEach(function (elemCatalogCardDeleteBtn) {
                    elemCatalogCardDeleteBtn.addEventListener('click', () => {
                        if (confirm("Удаление раздела приведёт к удалению всех карточек и подразделов в нём!\nВы уверены, что хотите удалить раздел?")) {
                            deleteCategory(elemCatalogCardDeleteBtn.getAttribute('idCategory'))
                                .then(response => {
                                    alert(response)
                                    if (response == "Раздел удалён.") { location.reload() }
                                })
                                .catch(console.error)
                        }
                    })
                })
            }



        })
            .catch(console.error)
    } else { elemSlider.classList.add('delete-elem') }


    // ------------------------- Список карточек ----------------------------

    let numBackColor = 0

    getCards(cardsCount, cardsSum).then(сards => {
        if (сards != "none") {
            Object.entries(сards).forEach(([, card]) => {
                numBackColor < 10 ? numBackColor++ : numBackColor = 1
                elemCards.insertAdjacentHTML('beforeend', formCards(card.id, card.title, card.img, card.rating, numBackColor));
            })
            if (Object.keys(сards).length < cardsSum) { elemShowMoreBtn.classList.add('delete-elem') }
        } else if (visitor.type != 'Admin') { elemCards.classList.add('delete-elem') }
        letPrintCards()
    })
        .catch(console.error)

    // ----------------------------- Печать картинки -----------------------------------

    function letPrintCards() {
        let elemPrintBtns = document.querySelectorAll('#card-print-btn')
        elemPrintBtns.forEach(function (elemPrintBtn) {
            elemPrintBtn.addEventListener('click', () => {
                boostPopularity(elemPrintBtn.getAttribute('idCard'))
                    .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                    .catch(console.error)
                let cardImgLink = elemPrintBtn.getAttribute('cardImg')
                let win = window.open();
                win.document.write(`<img src="${cardImgLink}">`);
                win.print();
                win.close();
            });
        });

        // --------------- Увеличение популярности по кнопке "сохранить" -----------------
        let elemSaveBtns = document.querySelectorAll('#card-download-btn')
        elemSaveBtns.forEach(function (elemSaveBtn) {
            elemSaveBtn.addEventListener('click', () => {
                boostPopularity(elemSaveBtn.getAttribute('idCard'))
                    .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                    .catch(console.error)
            });
        });

        // ------------------------- Добавить в избранные ------------------------------
        const elemLoginWrap = document.querySelector('#header-login-wrap')
        const elemHeaderFavoritesCount = document.querySelector('#header-item-title-favorites')

        let elemFavBtns = document.querySelectorAll('#favorite-card-btn')

        elemFavBtns.forEach(function (elemFavBtn) {
            elemFavBtn.addEventListener('click', () => {
                if (visitor.type == 'Guest') {
                    elemLoginWrap.classList.remove('header-delete-elem')
                } else {
                    addToFavorite(elemFavBtn.getAttribute('idCard'))
                        .then(response => {
                            console.log(`Добавление карточки в избранное - ${response}`)
                            if (response == "OK") {
                                elemHeaderFavoritesCount.innerHTML = Number(elemHeaderFavoritesCount.innerHTML) + 1;
                            }
                        })
                        .catch(console.error)
                }
            });
        });
    }

    // ---------------------------- Показать ещё ---------------------------------

    const elemShowMoreBtn = document.querySelector('#show-more')

    elemShowMoreBtn.addEventListener('click', () => {
        getCards(cardsCount, cardsSum).then(cards => {
            if (cards == "none") { elemShowMoreBtn.classList.add('delete-elem') }
            else {
                Object.entries(cards).forEach(([, card]) => {
                    numBackColor < 10 ? numBackColor++ : numBackColor = 1
                    elemCards.insertAdjacentHTML('beforeend', formCards(card.id, card.title, card.img, card.rating, numBackColor));
                })
                if (Object.keys(cards).length < cardsSum) { elemShowMoreBtn.classList.add('delete-elem') }
            }
            letPrintCards()
        })
            .catch(console.error)
    })

})
    .catch(console.error)
