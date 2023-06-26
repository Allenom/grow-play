'use strict'
// это пробная строка, для фиксации изменений на GitHub
const directoryCardsImg = "../cardsimg/";
const cardsSum = 20; // Количество карточек, подгружаемых за один раз
const commentsSum = 3; // Количество отзывов, подгружаемых при открытии страницы

const elemIDid = document.querySelector('#identifi-id')
const elemNewCatalog1Id = document.querySelector('#identifi-catalog1')
const elemNewCatalog2Id = document.querySelector('#identifi-catalog2')
const elemNewCatalog3Id = document.querySelector('#identifi-catalog3')

const cardId = elemIDid.innerHTML;
const newCardCatalog1Id = elemNewCatalog1Id.innerHTML;
const newCardCatalog2Id = elemNewCatalog2Id.innerHTML;
const newCardCatalog3Id = elemNewCatalog3Id.innerHTML;

elemIDid.classList.add('delete-elem')
elemNewCatalog1Id.classList.add('delete-elem')
elemNewCatalog2Id.classList.add('delete-elem')
elemNewCatalog3Id.classList.add('delete-elem')

//

// console.log('----------------------------------')
// console.log(`ID карточки: ${cardId}`)
// console.log(`ID каталога 1: ${newCardCatalog1Id}`)
// console.log(`ID каталога 2: ${newCardCatalog2Id}`)
// console.log(`ID каталога 3: ${newCardCatalog3Id}`)
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

// -------------------- Все данные карточки ---------------------
async function getCard() {
    const response = await fetch(`../server.php?card=get&id=${cardId}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------- Путь до новой карточки -------------------
async function getNewCardPath() {
    const response = await fetch(`../server.php?card=path&catalog1id=${newCardCatalog1Id}&catalog2id=${newCardCatalog2Id}&catalog3id=${newCardCatalog3Id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------- Список карточек ----------------------
async function getCards(catalogLevel, catalogId, cardsCount, cardsSum) {
    const response = await fetch(`../server.php?catalog=cards&level=${catalogLevel}&id=${catalogId}&cardscount=${cardsCount}&cardssum=${cardsSum}`);
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

// ----------------------- Список отзывов ---------------------------
async function getComments(sum) {
    const response = await fetch(`../server.php?comment=get&cardid=${cardId}&sum=${sum}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------- Лайкнуть/дизлайкнуть отзыв --------------------------
async function likeComment(id) {
    const response = await fetch(`../server.php?comment=like&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

async function dislikeComment(id) {
    const response = await fetch(`../server.php?comment=dislike&id=${id}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------- Оставить отзыв --------------------------
async function setFeedback(rating, text) {
    const response = await fetch(`../server.php?comment=set&cardid=${cardId}&rating=${rating}&text=${text}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Изменение изображение карточки ---------------------------
async function changeCardImg(img) {
    const response = await fetch(`../server.php?card=change&id=${cardId}&img=${img}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Изменение названия карточки ---------------------------
async function changeCardTitle(title) {
    const response = await fetch(`../server.php?card=change&id=${cardId}&title=${title}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Изменение описания карточки ---------------------------
async function changeCardDescription(description) {
    const response = await fetch(`../server.php?card=change&id=${cardId}&description=${description}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Удаление карточки ---------------------------
async function deleteCard() {
    const response = await fetch(`../server.php?card=delete&id=${cardId}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ----------------------- Создание карточки ---------------------------
async function createNewCard(title, description, img) {
    const response = await fetch(`../server.php?card=new&title=${title}&img=${img}&description=${description}&catalog1id=${newCardCatalog1Id}&catalog2id=${newCardCatalog2Id}&catalog3id=${newCardCatalog3Id}`);
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



// ------------------- Путь до карточки -------------------
const elemPath = document.querySelector('#path')
function addCardPath(level, id, title) {
    elemPath.insertAdjacentHTML('beforeend', `<a class="path-back" href="../catalog?level=${level}&id=${id}">${title} • </a>`);
}

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

// ------------------------- Карточки отзывов ----------------------------
function formCommentCards(id, username, date, rating, text, likecount, dislikecount) {
    return `<div class="comment-card">
        <img class="comment-card-finger-up-img" id="comment-card-finger-up" src="./img/finger_up.svg" alt="b" commentId="${id}">
        <img class="comment-card-finger-down-img" id="comment-card-finger-down" src="./img/finger_down.svg" alt="q" commentId="${id}">
        <p class="comment-card-finger-up-count" countLikeCommentId="${id}">${likecount}</p>
        <p class="comment-card-finger-down-count" countDislikeCommentId="${id}">${dislikecount}</p>
        <div class="comment-card-username-date-wrap">
            <p class="comment-card-username" id="comment-card-username">${username}</p>
            <p class="comment-card-date" id="comment-card-date">${date}</p>
        </div>
        <img src="./img/rating ${rating}.svg" alt="${rating} stars">
        <div class="comment-card-text" id="comment-card-text">${text}</div>
    </div>`
}


getVisitor().then(visitor => {

    const elemPath = document.querySelector('#path')
    const elemtitleH1 = document.querySelector('#title1')
    const elemDeskImg = document.querySelector('#desk-img')
    const elemNewImg = document.querySelector('#new-card-img')
    const elemDeskLikeBtn = document.querySelector('#desk-title-favorite_btn')
    const elemDeskPrintBtn = document.querySelector('#desk-btn-print')
    const elemDeskDownloadBtn = document.querySelector('#desk-btn-download')
    const elemDeskDescription = document.querySelector('#desk-description')
    const elemCreateBtn = document.querySelector('#create-btn')
    const elemCommentsWrap = document.querySelector('#comments-wrap')
    const elemCommentsRatingCount = document.querySelector('#comments-count')
    const elemCommentsRatingNum = document.querySelector('#comments-rating-num')
    const elemCommentsRatingStars = document.querySelector('#comments-rating-stars')
    const elemCommentsRatingProgress5 = document.querySelector('#comments-rating-progress-5')
    const elemCommentsRatingProgress4 = document.querySelector('#comments-rating-progress-4')
    const elemCommentsRatingProgress3 = document.querySelector('#comments-rating-progress-3')
    const elemCommentsRatingProgress2 = document.querySelector('#comments-rating-progress-2')
    const elemCommentsRatingProgress1 = document.querySelector('#comments-rating-progress-1')
    const elemCommentsRatingCount5 = document.querySelector('#comments-rating-count-5')
    const elemCommentsRatingCount4 = document.querySelector('#comments-rating-count-4')
    const elemCommentsRatingCount3 = document.querySelector('#comments-rating-count-3')
    const elemCommentsRatingCount2 = document.querySelector('#comments-rating-count-2')
    const elemCommentsRatingCount1 = document.querySelector('#comments-rating-count-1')
    const elemCommentCardsWrap = document.querySelector('#comment-cards-wrap')
    const elemViewAllCommentsBtn = document.querySelector('#view-all-comments')
    const elemtitleH2 = document.querySelector('#title2')
    const elemShowMoreBtn = document.querySelector('#show-more')

    // ---------------------------- Путь ----------------------------
    if (cardId == "new") {
        if (visitor.type == 'Admin') {
            getNewCardPath().then(path => {
                if (newCardCatalog1Id != 0 && path.catalog1Title != "") { addCardPath(1, newCardCatalog1Id, path.catalog1Title) }
                if (newCardCatalog2Id != 0 && path.catalog2Title != "") { addCardPath(2, newCardCatalog2Id, path.catalog2Title) }
                if (newCardCatalog3Id != 0 && path.catalog3Title != "") { addCardPath(3, newCardCatalog3Id, path.catalog3Title) }

                elemtitleH2.classList.add('delete-elem')
                elemShowMoreBtn.classList.add('delete-elem')
                elemCommentsWrap.classList.add('delete-elem')
                elemViewAllCommentsBtn.classList.add('delete-elem')
                elemDeskLikeBtn.classList.add('disable-elem')
                elemDeskPrintBtn.classList.add('disable-elem')
                elemDeskDownloadBtn.classList.add('disable-elem')

                elemtitleH1.innerHTML = "Новая карточка"
                elemtitleH1.setAttribute("contentEditable", "true")
                elemDeskDescription.innerHTML = "Описание новой карточки"
                elemDeskDescription.setAttribute("contentEditable", "true")
                elemNewImg.classList.remove('delete-elem')
                elemNewImg.setAttribute("contentEditable", "true")
                elemCreateBtn.classList.remove('delete-elem')

                elemCreateBtn.addEventListener('click', () => {
                    if (elemtitleH1.innerHTML != "" && elemDeskDescription.innerHTML != "" && elemNewImg.innerHTML.includes('.')) {
                        createNewCard(elemtitleH1.innerHTML, elemDeskDescription.innerHTML, elemNewImg.innerHTML)
                            .then(response => {
                                if (response == "OK") { document.location.href = "../main" }
                                else if (response == "notExist") {
                                    alert(`Файл изображения не найден.\nЗагрузите файл в директорию ${directoryCardsImg}, а затем попробуйте ещё раз.`)
                                } else console.log(response)
                            })
                            .catch(console.error)
                    } else { alert("Проверьте данные\nИмя и описание карточки не может быть пустым. Файл изображения должен быть указан с расширением.") }
                })

            })
                .catch(console.error)
        } else { document.location.href = "../main" }
    } else {
        // ---------------------------- Получить и вывести карточку ----------------------------
        getCard().then(card => {
            if (card == "none") {
                alert("Произошла ошибка. Такой карточки не существует.")
                document.location.href = "../main";
            } else {
                let catalogLevel = 0
                let catalogId = 0

                if (card.catalog1.id != 0) {
                    catalogLevel = 1
                    catalogId = card.catalog1.id
                    addCardPath(1, card.catalog1.id, card.catalog1.title)
                }
                if (card.catalog2.id != 0) {
                    catalogLevel = 2
                    catalogId = card.catalog2.id
                    addCardPath(2, card.catalog2.id, card.catalog2.title)
                }
                if (card.catalog3.id != 0) {
                    catalogLevel = 3
                    catalogId = card.catalog3.id
                    addCardPath(3, card.catalog3.id, card.catalog3.title)
                }
                elemPath.insertAdjacentHTML('beforeend', `<spam>${card.title}<spam>`)
                elemtitleH1.innerHTML = card.title
                elemDeskImg.setAttribute('src', `${directoryCardsImg}${card.img}`)
                elemDeskImg.setAttribute('alt', `${card.title}`)
                elemDeskDownloadBtn.setAttribute('href', `${directoryCardsImg}${card.img}`)
                elemDeskDescription.innerHTML = card.description

                // ----------------------------- Печать картинки -----------------------------------
                elemDeskPrintBtn.addEventListener('click', () => {
                    boostPopularity(cardId)
                        .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                        .catch(console.error)
                    let win = window.open();
                    win.document.write(`<img src="${directoryCardsImg}${card.img}">`);
                    win.print();
                    win.close();
                });

                // --------------- Увеличение популярности по кнопке "сохранить" -----------------
                elemDeskDownloadBtn.addEventListener('click', () => {
                    boostPopularity(cardId)
                        .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                        .catch(console.error)
                });

                // --------------- Progress отзывов -----------------

                elemCommentsRatingNum.innerHTML = 0;
                let starRating = 0;
                const rat1 = Number(card.rating1)
                const rat2 = Number(card.rating2)
                const rat3 = Number(card.rating3)
                const rat4 = Number(card.rating4)
                const rat5 = Number(card.rating5)
                elemCommentsRatingCount.innerHTML = `(${rat1 + rat2 + rat3 + rat4 + rat5})`
                if ((rat1 + rat2 + rat3 + rat4 + rat5) > 0) {
                    elemCommentsRatingNum.innerHTML = ((rat1 + rat2 * 2 + rat3 * 3 + rat4 * 4 + rat5 * 5) / (rat1 + rat2 + rat3 + rat4 + rat5)).toFixed(1)
                    starRating = ((rat1 + rat2 * 2 + rat3 * 3 + rat4 * 4 + rat5 * 5) / (rat1 + rat2 + rat3 + rat4 + rat5)).toFixed(0)
                    elemCommentsRatingProgress5.value = Math.round(rat5 / (rat1 + rat2 + rat3 + rat4 + rat5) * 100)
                    elemCommentsRatingProgress4.value = Math.round(rat4 / (rat1 + rat2 + rat3 + rat4 + rat5) * 100)
                    elemCommentsRatingProgress3.value = Math.round(rat3 / (rat1 + rat2 + rat3 + rat4 + rat5) * 100)
                    elemCommentsRatingProgress2.value = Math.round(rat2 / (rat1 + rat2 + rat3 + rat4 + rat5) * 100)
                    elemCommentsRatingProgress1.value = Math.round(rat1 / (rat1 + rat2 + rat3 + rat4 + rat5) * 100)
                }
                elemCommentsRatingStars.setAttribute('src', `./img/rating ${starRating}.svg`)
                elemCommentsRatingStars.setAttribute('alt', `${starRating} stars`)
                elemCommentsRatingCount5.innerHTML = rat5
                elemCommentsRatingCount4.innerHTML = rat4
                elemCommentsRatingCount3.innerHTML = rat3
                elemCommentsRatingCount2.innerHTML = rat2
                elemCommentsRatingCount1.innerHTML = rat1

                // ------------------------- Карточки отзывов --------------------------

                getComments(commentsSum).then(comments => {
                    if (comments != "none") {
                        Object.entries(comments).forEach(([, comment]) => {
                            elemCommentCardsWrap.insertAdjacentHTML('beforeend', formCommentCards(comment.id, comment.username, comment.date, comment.rating, comment.text, comment.likecount, comment.dislikecount));
                        })
                        if (Object.keys(comments).length < commentsSum) { elemViewAllCommentsBtn.classList.add('delete-elem') }
                    } else {
                        elemCommentCardsWrap.classList.add('delete-elem')
                        elemViewAllCommentsBtn.classList.add('delete-elem')
                    }
                    if (visitor.type != "Guest") letRateComments()
                })
                    .catch(console.error)


                // ------------------------- Смотреть все отзывы --------------------------
                elemViewAllCommentsBtn.addEventListener('click', () => {
                    getComments("all").then(comments => {
                        if (comments != "none") {
                            Object.entries(comments).forEach(([i, comment]) => {
                                if (i >= commentsSum) {
                                    elemCommentCardsWrap.insertAdjacentHTML('beforeend', formCommentCards(comment.id, comment.username, comment.date, comment.rating, comment.text, comment.likecount, comment.dislikecount));
                                }
                            })
                            elemViewAllCommentsBtn.classList.add('delete-elem')
                        } else {
                            elemCommentCardsWrap.classList.add('delete-elem')
                            elemViewAllCommentsBtn.classList.add('delete-elem')
                        }
                        if (visitor.type != "Guest") letRateComments()
                    })
                        .catch(console.error)
                })

                // ------------------------- Лайкнуть/дизлайкнуть отзыв --------------------------

                function letRateComments() {

                    let elemCommentFingersUp = document.querySelectorAll('#comment-card-finger-up')
                    elemCommentFingersUp.forEach(function (elemCommentFingerUp) {
                        elemCommentFingerUp.addEventListener('click', () => {
                            const elemCommentFingerUpCount = document.querySelector(`[countLikeCommentId="${elemCommentFingerUp.getAttribute('commentId')}"]`)
                            if (elemCommentFingerUpCount) {
                                elemCommentFingerUpCount.innerHTML = Number(elemCommentFingerUpCount.innerHTML) + 1;
                                elemCommentFingerUpCount.removeAttribute('countLikeCommentId')
                                likeComment(elemCommentFingerUp.getAttribute('commentId'))
                                    .then(response => { console.log(`Палец вверх комментарию - ${response}`) })
                                    .catch(console.error)
                            }
                        });
                    });

                    let elemCommentFingersDown = document.querySelectorAll('#comment-card-finger-down')
                    elemCommentFingersDown.forEach(function (elemCommentFingerDown) {
                        elemCommentFingerDown.addEventListener('click', () => {
                            const elemCommentFingerDownCount = document.querySelector(`[countDislikeCommentId="${elemCommentFingerDown.getAttribute('commentId')}"]`)
                            if (elemCommentFingerDownCount) {
                                elemCommentFingerDownCount.innerHTML = Number(elemCommentFingerDownCount.innerHTML) + 1;
                                elemCommentFingerDownCount.removeAttribute('countDislikeCommentId')
                                dislikeComment(elemCommentFingerDown.getAttribute('commentId'))
                                    .then(response => { console.log(`Палец вниз комментарию - ${response}`) })
                                    .catch(console.error)
                            }
                        });
                    });
                }


                // ------------------------- Список карточек ----------------------------

                const elemCards = document.querySelector('#card-list')
                let numBackColor = 0

                getCards(catalogLevel, catalogId, cardsCount, cardsSum).then(сards => {
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
                    getCards(catalogLevel, catalogId, cardsCount, cardsSum).then(cards => {
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


                // ---------------Оставить отзыв. Окно открывается и закрывается ---------------------
                const elemFeedback = document.querySelector('#feedback')
                const elemFeedbackCloseBtn = document.querySelector('#feedback-close-btn')
                const elemFeedbackOpenBtn = document.querySelector('#comments-btn')
                const elemLoginWrap = document.querySelector('#header-login-wrap')

                elemFeedbackCloseBtn.addEventListener('click', () => {
                    elemFeedback.classList.add('delete-elem')
                })

                elemFeedbackOpenBtn.addEventListener('click', () => {
                    if (visitor.type == "Guest") {
                        elemLoginWrap.classList.remove('header-delete-elem')
                    }
                    else {
                        // ------------------------- Оставить отзыв ----------------------------

                        const elemFeedbackCarddataTitle = document.querySelector('#feedback-carddata-title')
                        const elemFeedbackCarddataImg = document.querySelector('#feedback-carddata-img')
                        elemFeedbackCarddataTitle.innerHTML = card.title
                        elemFeedbackCarddataImg.setAttribute('src', `${directoryCardsImg}${card.img}`)
                        elemFeedbackCarddataImg.setAttribute('alt', `${card.title}`)

                        elemFeedback.classList.remove('delete-elem')
                        window.scrollTo({
                            top: 133,
                            left: 0,
                            behavior: 'smooth'
                        });

                        const elemFeedbackStar1 = document.querySelector('#feedback-star1')
                        const elemFeedbackStar2 = document.querySelector('#feedback-star2')
                        const elemFeedbackStar3 = document.querySelector('#feedback-star3')
                        const elemFeedbackStar4 = document.querySelector('#feedback-star4')
                        const elemFeedbackStar5 = document.querySelector('#feedback-star5')

                        let permissionForRating = true

                        elemFeedbackStar1.onmouseover = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar2.classList.add('elem-to-gray')
                                elemFeedbackStar3.classList.add('elem-to-gray')
                                elemFeedbackStar4.classList.add('elem-to-gray')
                                elemFeedbackStar5.classList.add('elem-to-gray')
                            }
                        }

                        elemFeedbackStar2.onmouseover = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar3.classList.add('elem-to-gray')
                                elemFeedbackStar4.classList.add('elem-to-gray')
                                elemFeedbackStar5.classList.add('elem-to-gray')
                            }
                        }

                        elemFeedbackStar3.onmouseover = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar4.classList.add('elem-to-gray')
                                elemFeedbackStar5.classList.add('elem-to-gray')
                            }
                        }

                        elemFeedbackStar4.onmouseover = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar5.classList.add('elem-to-gray')
                            }
                        }

                        elemFeedbackStar1.onmouseout = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar2.classList.remove('elem-to-gray')
                                elemFeedbackStar3.classList.remove('elem-to-gray')
                                elemFeedbackStar4.classList.remove('elem-to-gray')
                                elemFeedbackStar5.classList.remove('elem-to-gray')
                            }
                        }

                        elemFeedbackStar2.onmouseout = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar2.classList.remove('elem-to-gray')
                                elemFeedbackStar3.classList.remove('elem-to-gray')
                                elemFeedbackStar4.classList.remove('elem-to-gray')
                                elemFeedbackStar5.classList.remove('elem-to-gray')
                            }
                        }

                        elemFeedbackStar3.onmouseout = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar2.classList.remove('elem-to-gray')
                                elemFeedbackStar3.classList.remove('elem-to-gray')
                                elemFeedbackStar4.classList.remove('elem-to-gray')
                                elemFeedbackStar5.classList.remove('elem-to-gray')
                            }
                        }

                        elemFeedbackStar4.onmouseout = function (e) {
                            if (permissionForRating == true) {
                                elemFeedbackStar2.classList.remove('elem-to-gray')
                                elemFeedbackStar3.classList.remove('elem-to-gray')
                                elemFeedbackStar4.classList.remove('elem-to-gray')
                                elemFeedbackStar5.classList.remove('elem-to-gray')
                            }
                        }

                        let feedbackRating = 5

                        elemFeedbackStar1.addEventListener('click', () => {
                            permissionForRating = false
                            elemFeedbackStar2.classList.add('elem-to-gray')
                            elemFeedbackStar3.classList.add('elem-to-gray')
                            elemFeedbackStar4.classList.add('elem-to-gray')
                            elemFeedbackStar5.classList.add('elem-to-gray')
                            feedbackRating = 1
                        })

                        elemFeedbackStar2.addEventListener('click', () => {
                            permissionForRating = false
                            elemFeedbackStar2.classList.remove('elem-to-gray')
                            elemFeedbackStar3.classList.add('elem-to-gray')
                            elemFeedbackStar4.classList.add('elem-to-gray')
                            elemFeedbackStar5.classList.add('elem-to-gray')
                            feedbackRating = 2
                        })

                        elemFeedbackStar3.addEventListener('click', () => {
                            permissionForRating = false
                            elemFeedbackStar2.classList.remove('elem-to-gray')
                            elemFeedbackStar3.classList.remove('elem-to-gray')
                            elemFeedbackStar4.classList.add('elem-to-gray')
                            elemFeedbackStar5.classList.add('elem-to-gray')
                            feedbackRating = 3
                        })

                        elemFeedbackStar4.addEventListener('click', () => {
                            permissionForRating = false
                            elemFeedbackStar2.classList.remove('elem-to-gray')
                            elemFeedbackStar3.classList.remove('elem-to-gray')
                            elemFeedbackStar4.classList.remove('elem-to-gray')
                            elemFeedbackStar5.classList.add('elem-to-gray')
                            feedbackRating = 4
                        })

                        elemFeedbackStar5.addEventListener('click', () => {
                            permissionForRating = false
                            elemFeedbackStar2.classList.remove('elem-to-gray')
                            elemFeedbackStar3.classList.remove('elem-to-gray')
                            elemFeedbackStar4.classList.remove('elem-to-gray')
                            elemFeedbackStar5.classList.remove('elem-to-gray')
                            feedbackRating = 5
                        })

                        // ------------------------- Оставить отзыв - сохранить ----------------------------
                        const elemFeedbackSaveBtn = document.querySelector('#feedback-save-btn')
                        const elemFeedbackTextarea = document.querySelector('#feedback-textarea')

                        elemFeedbackTextarea.addEventListener('input', () => {
                            if (elemFeedbackTextarea.value.length > 999) {
                                elemFeedbackTextarea.setAttribute('readonly', 'true')
                                alert("Максимальное количество символов отзыва - 1000")
                            } else elemFeedbackTextarea.removeAttribute('readonly')
                        })

                        elemFeedbackTextarea.addEventListener('click', () => {
                            elemFeedbackTextarea.removeAttribute('readonly')
                        })

                        elemFeedbackSaveBtn.addEventListener('click', () => {
                            setFeedback(feedbackRating, elemFeedbackTextarea.value.substring(0, 1000))
                                .then(response => {
                                    if (response == "OK") {
                                        alert("Ваш отзыв успешно сохранён. После модерации он появится на сайте.")
                                    }
                                })
                                .catch(console.error)

                            elemFeedback.classList.add('delete-elem')
                            elemFeedbackTextarea.value = "";
                            permissionForRating = true
                        })
                    }
                })


                // ------------------------- Функции контроля для администратора ----------------------------
                if (visitor.type == 'Admin') {
                    const elemControlWrap = document.querySelector('#desk-control-wrap')
                    const elemControlImg = document.querySelector('#desk-control-img')

                    elemControlWrap.classList.remove('delete-elem')
                    elemControlImg.innerHTML = card.img

                    // ----------------------- Изменение изображения карточки ---------------------------
                    let lastCardImgName
                    elemControlImg.addEventListener('click', () => {
                        lastCardImgName = elemControlImg.innerHTML
                    })
                    elemControlImg.onblur = function () {
                        if (elemControlImg.innerHTML != lastCardImgName && elemControlImg.innerHTML.includes('.'))
                            changeCardImg(elemControlImg.innerHTML)
                                .then(response => {
                                    if (response == "OK") { location.reload() }
                                    else if (response == "notExist") {
                                        alert(`Файл изображения не найден.\nЗагрузите файл в директорию ${directoryCardsImg}, а затем попробуйте ещё раз.`)
                                    } else console.log(response)
                                })
                                .catch(console.error)
                    }

                    // ----------------------- Изменение названия карточки ---------------------------
                    elemtitleH1.setAttribute('contentEditable', 'true')
                    let lastCardName
                    elemtitleH1.addEventListener('click', () => {
                        lastCardName = elemtitleH1.innerHTML
                    })
                    elemtitleH1.onblur = function () {
                        if (elemtitleH1.innerHTML != lastCardName)
                            changeCardTitle(elemtitleH1.innerHTML)
                                .then(response => {
                                    if (response == "OK") { location.reload() }
                                    else console.log(response)
                                })
                                .catch(console.error)
                    }

                    // ----------------------- Изменение описания карточки ---------------------------
                    elemDeskDescription.setAttribute('contentEditable', 'true')
                    let lastCardDescription
                    elemDeskDescription.addEventListener('click', () => {
                        lastCardDescription = elemDeskDescription.innerHTML
                    })
                    elemDeskDescription.onblur = function () {
                        if (elemDeskDescription.innerHTML != lastCardDescription)
                            changeCardDescription(elemDeskDescription.innerHTML)
                                .then(response => {
                                    if (response == "OK") { location.reload() }
                                    else console.log(response)
                                })
                                .catch(console.error)
                    }

                    // ----------------------- Удаление карточки ---------------------------
                    const elemControlDelete = document.querySelector('#desk-control-delete')
                    elemControlDelete.addEventListener('click', () => {
                        if (confirm("Удаление карточки приведёт к удалению её картинки и всех отзывов к ней!\nВы уверены, что хотите удалить карточку?")) {
                            deleteCard()
                                .then(response => {
                                    alert(response)
                                    if (response == "Карточка удалена.") { document.location.href = "../main" }
                                })
                                .catch(console.error)
                        }
                    })
                }
            }
        })
            .catch(console.error)
    }








})
    .catch(console.error)