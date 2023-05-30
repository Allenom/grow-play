<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="./script.js"></script> <!-- Ваш скрипт -->
    <script defer src="../header/script.js"></script> <!-- Скрипт хэдера -->
    <script defer src="../itc-slider/itc-slider.min.js"></script> <!-- Скрипт слайдера -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Развивающие игры, занятия, задания и упражнения для детей бесплатно.</title>
    <meta name="keywords" content="Раскраски распечатать, раскраски для девочек, раскраски бесплатно, задачи по математике, прописи распечатать, загадки, развивающие задания">
    <meta name="description" content="Расту играя – большой выбор развивающих заданий и упражнений для детей. Раскраски, прописи, задачи по математике, головоломки, песни, загадки. Скачайте или распечатайте материалы с сайта бесплатно.">

    <link rel="stylesheet" href="./style.css"> <!-- Ваши стили -->
    <link rel="stylesheet" href="../header/style.css"> <!-- Стили хэдера -->
    <link rel="stylesheet" href="../footer/style.css"> <!-- Стили футера -->
    <link rel="stylesheet" href="../itc-slider/itc-slider.min.css"> <!-- Стили слайдера -->

    <!-- Шрифты -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap" rel="stylesheet">

    <link rel="icon" href="../favicon.svg" type="image/x-icon">

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
        (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
                (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                    return;
                }
            }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(92689920, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    </script>
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/92689920" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- /Yandex.Metrika counter -->

</head>

<body>

    <?php include '../header/index.php'; ?>
    <main class="main-wrap">
        <h2 class="titles">Популярные категории</h2>
        <section class="container">
            <div class="itc-slider" id="itc-slider" data-autoplay="true" data-interval="5000" data-loop="true">
                <div class="itc-slider__wrapper">
                    <div class="itc-slider__items" id="itc-slider__items"></div>
                    <div class="itc-slider__control-panel">
                        <button class="itc-slider__btn itc-slider__btn_prev"><img src="../itc-slider/btn_prev.svg" alt="<="></button>
                        <ol class="itc-slider__indicators">
                            <li class="itc-slider__indicator" data-slide-to="0"></li>
                            <li class="itc-slider__indicator" data-slide-to="1"></li>
                            <li class="itc-slider__indicator" data-slide-to="2"></li>
                            <li class="itc-slider__indicator" data-slide-to="3"></li>
                            <li class="itc-slider__indicator" data-slide-to="4"></li>
                            <li class="itc-slider__indicator" data-slide-to="5"></li>
                            <li class="itc-slider__indicator" data-slide-to="6"></li>
                            <li class="itc-slider__indicator" data-slide-to="7"></li>
                            <li class="itc-slider__indicator" data-slide-to="8"></li>
                            <li class="itc-slider__indicator" data-slide-to="9"></li>
                        </ol>
                        <button class="itc-slider__btn itc-slider__btn_next"><img src="../itc-slider/btn_next.svg" alt="<="></button>
                    </div>
                </div>
            </div>
        </section>
        <h2 class="titles">Возможно, вам понравятся</h2>

        <section class="card-list" id="card-list"></section>

        <div class="show-more" id="show-more"> Показать ещё</div>
        <section class="bottom-text">
            <p> &#34Расту, играя!&#34 – платформа с развивающими материалами для детей дошкольного и младшего школьного возраста. Представленные здесь печатные ресурсы помогут детям научиться различать цвета и формы, определять свойства и признаки предметов, познакомят с цифрами и буквами, сформируют знания об окружающем мире, его закономерностях и взаимосвязях.</p>
            <p> На сайте размещено более 2000 раскрасок, прописей, задач по математике, головоломок, также здесь вы найдете стихи и песни для детей, загадки, колыбельные, поздравления.</p>
            <p> Выполнение наших заданий – замечательный способ развить мелкую моторику, усидчивость, логическое мышление, внимание, память, речь, воображение, а разнообразие предложенных упражнений поддержит интерес к занятиям!</p>
        </section>

    </main>

    <?php include '../footer/index.php'; ?>
</body>

</html>