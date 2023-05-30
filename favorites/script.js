'use strict'

const directoryCardsImg = "../cardsimg/";


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


// ------------------- Избранные карточки ---------------------
async function getFavoritesCards() {
    const response = await fetch('../server.php?favcards=get');
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------- Удалить из избранных ------------------------------
async function removeFromFavorites(id) {
    const response = await fetch(`../server.php?favcards=remove&id=${id}`);
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

// ------------------- Избранные карточки ---------------------
function formFavoriteCards(id, title, img, numBackColor) {
    return `<div class="favorite-card" wrapIdCard="${id}">
<div class="favorite-card-part1">
    <div class="favorite-card-check-mark" id="favorite-card-check-mark" idCard="${id}">
        <img class="delete-elem" src="./img/choose_check_mark.svg" alt="V" id="favorite-card-check-mark-fill" checkMarkIdCard=${id} cardImg="${directoryCardsImg}${img}">
    </div>
    <div class="favorite-card-img">
        <img src="./img/background_color(${numBackColor}).svg" alt="color_background">
        <a href="../card?id=${id}">
            <div class="white_background">
            <img class="card-img" id="feedback-carddata-img" src=${directoryCardsImg}${img} alt="${title}">
            </div>
        </a>
    </div>
</div>
<div class="favorite-card-part2">
    <div class="favorite-card-title">${title}</div>
    <div class="favorite-card-count-bin">
        <div class="favorite-card-count">
            <div class="favorite-card-count-btn" id="favorite-card-count-btn-down" idCard=${id}>-</div>
            <div class="favorite-card-count-num" count=${id}>1</div>
            <div class="favorite-card-count-btn" id="favorite-card-count-btn-up" idCard=${id}>+</div>
        </div>
        <img class="favorite-card-bin" id="favorite-card-bin" idCard="${id}" src="./img/trash_can.svg" alt="U">
    </div>
</div>
</div>`
}


getFavoritesCards().then(favoriteCards => {
    let numBackColor = 0;
    const elemFavCards = document.querySelector('#content')
    Object.entries(favoriteCards).forEach(([, favoriteCard]) => {
        numBackColor < 10 ? numBackColor++ : numBackColor = 1
        elemFavCards.insertAdjacentHTML('beforeend', formFavoriteCards(favoriteCard.id, favoriteCard.title, favoriteCard.img, numBackColor));
    })

    // ------------------------- Удалить из избранных ------------------------------
    const elemHeaderFavoritesCount = document.querySelector('#header-item-title-favorites')

    let elemBins = document.querySelectorAll('#favorite-card-bin')
    elemBins.forEach(function (elemBin) {
        elemBin.addEventListener('click', () => {
            removeFromFavorites(elemBin.getAttribute('idCard'))
                .then(response => {
                    console.log(`Удаление карточки из избранных - ${response}`)
                    if (response == "OK") {
                        const elemDeletedCard = document.querySelector(`[wrapIdCard="${elemBin.getAttribute('idCard')}"]`)
                        elemDeletedCard.classList.add('delete-elem')
                        elemHeaderFavoritesCount.innerHTML = Number(elemHeaderFavoritesCount.innerHTML) - 1;
                    }
                })
                .catch(console.error)
        });
    });

    // ------------------------- Отметить для распечатки или скачивания ------------------------------
    const elemTotalCount = document.querySelector('#total-count')
    let elemCardCheckMarks = document.querySelectorAll('#favorite-card-check-mark')
    elemCardCheckMarks.forEach(function (elemCardCheckMark) {
        elemCardCheckMark.addEventListener('click', () => {
            if (document.querySelector(`[checkMarkIdCard="${elemCardCheckMark.getAttribute('idCard')}"]`).classList.contains("delete-elem")) {
                elemTotalCount.innerHTML = Number(elemTotalCount.innerHTML) + 1
            } else { elemTotalCount.innerHTML = Number(elemTotalCount.innerHTML) - 1 }
            document.querySelector(`[checkMarkIdCard="${elemCardCheckMark.getAttribute('idCard')}"]`).classList.toggle("delete-elem")
        });
    });

    // ------------------------------------- Выбрать все ---------------------------------------
    let elemChooseAllMarks = document.querySelectorAll('#chooseall')
    elemChooseAllMarks.forEach(function (elemChooseAllMark) {
        elemChooseAllMark.addEventListener('click', () => {
            if (document.querySelector(`[idFill="true"]`).classList.contains("delete-elem")) {
                document.querySelector(`[idEmpty="true"]`).classList.add("delete-elem")
                document.querySelector(`[idFill="true"]`).classList.remove("delete-elem")
                elemCardCheckMarks.forEach(function (elemCardCheckMark) {
                    document.querySelector(`[checkMarkIdCard="${elemCardCheckMark.getAttribute('idCard')}"]`).classList.remove("delete-elem")
                    elemTotalCount.innerHTML = Number(elemTotalCount.innerHTML) + 1
                });
            } else {
                document.querySelector(`[idEmpty="true"]`).classList.remove("delete-elem")
                document.querySelector(`[idFill="true"]`).classList.add("delete-elem")
                elemCardCheckMarks.forEach(function (elemCardCheckMark) {
                    document.querySelector(`[checkMarkIdCard="${elemCardCheckMark.getAttribute('idCard')}"]`).classList.add("delete-elem")
                    elemTotalCount.innerHTML = "0"
                });
            }
        });
    });

    // ------------------------------------- | -  1  + | ---------------------------------------
    let elemCardCountBtnsUp = document.querySelectorAll('#favorite-card-count-btn-up')
    elemCardCountBtnsUp.forEach(function (elemCardCountBtnUp) {
        elemCardCountBtnUp.addEventListener('click', () => {
            const elemCardCount = document.querySelector(`[count="${elemCardCountBtnUp.getAttribute('idCard')}"]`)
            elemCardCount.innerHTML = Number(elemCardCount.innerHTML) + 1
        });
    });
    let elemCardCountBtnsDown = document.querySelectorAll('#favorite-card-count-btn-down')
    elemCardCountBtnsDown.forEach(function (elemCardCountBtnDown) {
        elemCardCountBtnDown.addEventListener('click', () => {
            const elemCardCount = document.querySelector(`[count="${elemCardCountBtnDown.getAttribute('idCard')}"]`)
            if (Number(elemCardCount.innerHTML) > 1) { elemCardCount.innerHTML = Number(elemCardCount.innerHTML) - 1 }
        });
    });

    // ------------------------------------- Распечатать ---------------------------------------

    const elemPrintBtn = document.querySelector('#total-print-btn')

    elemPrintBtn.addEventListener('click', () => {
        if (Number(elemTotalCount.innerHTML) > 0) {
            let stringImg = ""
            let elemCardCheckMarksFill = document.querySelectorAll('#favorite-card-check-mark-fill')
            elemCardCheckMarksFill.forEach(function (elemCardCheckMarkFill) {
                if (!elemCardCheckMarkFill.classList.contains('delete-elem')) {
                    for (let i = 0; i < Number(document.querySelector(`[count="${elemCardCheckMarkFill.getAttribute('checkMarkIdCard')}"]`).innerHTML); i++) {
                        stringImg = stringImg + `<img src="${elemCardCheckMarkFill.getAttribute('cardImg')}">`
                    }
                    boostPopularity(elemCardCheckMarkFill.getAttribute('checkMarkIdCard'))
                        .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                        .catch(console.error)
                }
            });
            let win = window.open();
            win.document.write(stringImg);
            win.print();
            win.close()
        }
    });

    // ------------------------------------- Сохранить ---------------------------------------
    const elemDownloadBtn = document.querySelector('#total-download-btn')

    elemDownloadBtn.addEventListener('click', () => {
        if (Number(elemTotalCount.innerHTML) > 0) {
            // let stringImg = ""
            let elemCardCheckMarksFill = document.querySelectorAll('#favorite-card-check-mark-fill')
            elemCardCheckMarksFill.forEach(function (elemCardCheckMarkFill) {
                if (!elemCardCheckMarkFill.classList.contains('delete-elem')) {
                    const a = document.createElement("a");
                    a.href = elemCardCheckMarkFill.getAttribute('cardImg');
                    a.download = "";
                    a.click();

                    boostPopularity(elemCardCheckMarkFill.getAttribute('checkMarkIdCard'))
                        .then(response => { console.log(`Увеличение популярности карточки - ${response}`) })
                        .catch(console.error)
                }
            });
        }
    });

})
    .catch(console.error)

