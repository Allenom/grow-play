'use strict'

const directoryCardsImg = "../cardsimg/";
const directoryCatalogsImg = "../catalogsimg/";
const cardsSum = 20; // Количество карточек, подгружаемых за один раз


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

// ---------------- Популярные категории -----------------
async function getPopCategories() {
    const response = await fetch('../server.php?popcat');
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ---------------- Популярные карточки -----------------
async function getPopCards(cardsCount, cardsSum) {
    const response = await fetch(`../server.php?popcards=get&cardscount=${cardsCount}&cardssum=${cardsSum}`);
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

// ---------------- Популярные категории -----------------
const elemCatalogSlider = document.querySelector('#itc-slider__items')
getPopCategories().then(popCategories => {
    let numBackColorCategory = -1;
    Object.entries(popCategories).forEach(([, popCategory]) => {
        numBackColorCategory < 3 ? numBackColorCategory++ : numBackColorCategory = 0
        elemCatalogSlider.insertAdjacentHTML('beforeend', formPopCategories(numBackColorCategory, popCategory.id, popCategory.title, popCategory.img));
    })
    const slider = ItcSlider.getOrCreateInstance('.itc-slider');
})
    .catch(console.error)

function formPopCategories(numBackColorCategory, id, title, img) {
    return `<div class="itc-slider__item">
    <a href="../catalog?level=2&id=${id}" class="catalog-card-link">
        <div class="catalog-card-${numBackColorCategory} catalog-cards catalog-cards-transform">
            <div class="catalog-card-background-white">
                <img class="catalog-card-img" id="catalog-card-img" src=${directoryCatalogsImg}${img} alt="${title}">
            </div>
            <div class="catalog-card-title">${title}</div>
        </div>
    </a>
</div>`
}


// ---------------- Популярные карточки -----------------
let cardsCount = 0
function formPopCards(id, title, img, rating, numBackColor) {
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
    <div class="print btn_finish" id="card-print-btn" cardImg="${directoryCardsImg}${img}" idCard="${id}">Распечатать</div>
    <a href=${directoryCardsImg}${img} download="" class="card-download-btn-link">
        <div class="download btn_finish" id="card-download-btn" idCard="${id}">Сохранить</div>
    </a>
    </div>
</div>`
}




getVisitor().then(visitor => {

    // ---------------- Популярные карточки -----------------

    const elemPopCards = document.querySelector('#card-list')
    let numBackColor = 0;

    getPopCards(cardsCount, cardsSum).then(popCards => {
        Object.entries(popCards).forEach(([, popCard]) => {
            numBackColor < 10 ? numBackColor++ : numBackColor = 1
            elemPopCards.insertAdjacentHTML('beforeend', formPopCards(popCard.id, popCard.title, popCard.img, popCard.rating, numBackColor));
        })
        if (Object.keys(popCards).length < cardsSum) { elemShowMoreBtn.classList.add('delete-elem') }
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
                win.close()
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
        getPopCards(cardsCount, cardsSum).then(popCards => {
            if (popCards == "none") { elemShowMoreBtn.classList.add('delete-elem') }
            else {
                Object.entries(popCards).forEach(([, popCard]) => {
                    numBackColor < 10 ? numBackColor++ : numBackColor = 1
                    elemPopCards.insertAdjacentHTML('beforeend', formPopCards(popCard.id, popCard.title, popCard.img, popCard.rating, numBackColor));
                })
                if (Object.keys(popCards).length < cardsSum) { elemShowMoreBtn.classList.add('delete-elem') }
            }
            letPrintCards()
        })
            .catch(console.error)
    })
})
    .catch(console.error)
