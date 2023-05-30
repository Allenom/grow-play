<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="../header/script.js"></script> <!-- Скрипт хэдера -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Расту, играя! 404</title>

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

    <div class="content-wrap">
        <section class="content">
            <div class="main">
                <div class="box">
                    <h2 class="header">Ошибка 404</h2>
                    <p class="text">Вы находитесь здесь, потому что запрашиваемая страница не существует или была перемещена по другому адресу.</p>
                </div>
                <div class="back__btn">
                    <a class="back_btn-link" href="./main/">
                        <div class="back_btn">На главную</div>
                    </a>
                </div>
            </div>
        </section>
    </div>
    <div class="finish"></div>

    <?php include '../footer/index.php'; ?>
</body>

</html>