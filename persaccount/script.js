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

// ------------------------ Смена имени --------------------------
async function сhangeName(name) {
    const response = await fetch(`../server.php?users=change&name=${name}`);
    if (response.ok) {
        const json = await response.json();
        return json
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// ------------------------ Смена Email ---------------------------
async function сhangeEmail(email) {
    const response = await fetch(`../server.php?users=change&email=${email}`);
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







getVisitor().then(visitor => {

    //---------------------------- Установка имени и Email ---------------------------
    const elemName = document.querySelector('#change-name-textarea')
    const elemEmail = document.querySelector('#change-email-textarea')

    elemName.innerHTML = visitor.name
    elemEmail.innerHTML = visitor.email

    //-------------------------------------- Выход ------------------------------------
    const elemLogoutBtn = document.querySelector('#logout')
    elemLogoutBtn.addEventListener('click', () => {
        logout()
            .then(response => { document.location.href = "../main" })
            .catch(console.error)
    })



    //---------------------------------- Смена имени ---------------------------------
    const elemNamePencil = document.querySelector('#change-name-pencil')

    elemNamePencil.addEventListener('click', () => {
        elemName.focus()
    })

    let lastName = ""
    elemName.onfocus = function () {
        lastName = elemName.innerHTML
    }
    elemName.onblur = function () {
        if (elemName.innerHTML.trim() == "") {
            elemName.innerHTML = lastName
        } else if (elemName.innerHTML.length > 20) {
            alert('Ограничение длины имени - 20 символов.\nВведите имя корректной длины, пожалуйста')
        }
        else if (elemName.innerHTML != lastName) {
            сhangeName(elemName.innerHTML)
                .then(response => { console.log(response) })
                .catch(console.error)
        }

    }

    //---------------------------------- Смена Email ---------------------------------
    const elemEmailPencil = document.querySelector('#change-email-pencil')
    elemEmailPencil.addEventListener('click', () => {
        elemEmail.focus()
    })

    let lastEmail = ""
    elemEmail.onfocus = function () {
        lastEmail = elemEmail.innerHTML
    }
    elemEmail.onblur = function () {
        if (elemEmail.innerHTML.trim() == "") {
            elemEmail.innerHTML = lastEmail
        } else if (elemEmail.innerHTML != lastEmail) {
            сhangeEmail(elemEmail.innerHTML)
                .then(response => { console.log(response) })
                .catch(console.error)
        }

    }
})
    .catch(console.error)




