<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="./script.js"></script> <!-- Ваш скрипт -->
    <script defer src="../header/script.js"></script> <!-- Скрипт хэдера -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Расту, играя! Личный кабинет</title>

    <link rel="stylesheet" href="./style.css"> <!-- Ваши стили -->
    <link rel="stylesheet" href="../header/style.css"> <!-- Стили хэдера -->
    <link rel="stylesheet" href="../footer/style.css"> <!-- Стили футера -->

    <!-- Шрифты -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap" rel="stylesheet">

    <link rel="icon" href="../favicon.svg" type="image/x-icon">
</head>

<body>
    <?php include '../header/index.php'; ?>

    <div class="path-wrap-wrap">
        <section class="path-wrap" id="path">
            <a class="path-back" href="../main">Главная &gt</a>
            <span> Личный кабинет</span>
        </section>
    </div>

    <div class="main-background">
        <main class="main-wrap">
            <h1 class="title">Личные данные</h1>
            <section class="change-wrap">
                <div class="change-item">
                    <div class="change-textarea-wrap">
                        <div class="change-textarea" id="change-name-textarea" contenteditable="true"></div>
                    </div>
                    <img src="./img/background_ellipse.svg" alt="ellipse">
                    <img src="./img/pencil.svg" alt="/" class="change-pencil" id="change-name-pencil">
                </div>
                <div class="change-item">
                    <div class="change-textarea-wrap">
                        <div class="change-textarea" id="change-email-textarea" contenteditable="true"></div>
                    </div>
                    <img src="./img/background_ellipse.svg" alt="ellipse">
                    <img src="./img/pencil.svg" alt="/" class="change-pencil" id="change-email-pencil">
                </div>
            </section>
            <h2 class="logout" id="logout">Выйти из личного кабинета</h2>
        </main>
    </div>




    <?php include '../footer/index.php'; ?>
</body>

</html>