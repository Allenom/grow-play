<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="./script.js"></script> <!-- Ваш скрипт -->
    <script defer src="../header/script.js"></script> <!-- Скрипт хэдера -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Расту, играя! Избранные</title>

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

    <div class="title-wrap">
        <h1 class="title">Избранное</h1>
    </div>

    <section class="chooseall-wrap">
        <img class="chooseall-btn" id="chooseall" idEmpty="true" src="./img/empty_check_mark.svg" alt="0">
        <img class="chooseall-btn delete-elem" id="chooseall" idFill="true" src="./img/choose_check_mark.svg" alt="V">
        <span class="chooseall-text" id="chooseall">Выбрать все</span>
    </section>

    <div class="content-wrap">
        <main class="content" id="content">
            <div class="total">
                <div class="total-count">Итого: <span id="total-count">0</span></div>
                <div class="total-btn" id="total-print-btn">Распечатать</div>
                <div class="total-btn" id="total-download-btn">Сохранить</div>
            </div>
        </main>
    </div>

    <?php include '../footer/index.php'; ?>
</body>

</html>