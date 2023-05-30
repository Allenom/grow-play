<!DOCTYPE html>
<html lang="en">

<head>
    <script defer src="./script.js"></script> <!-- Ваш скрипт -->
    <script defer src="../header/script.js"></script> <!-- Скрипт хэдера -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Развитие ребенка и всесторонняя подготовка детей к школе.</title>
    <meta name="keywords" content="Раскраски с пунктиром, прописи скачать, лабиринты для детей, головоломки для детей, развивающие игры, раскраски скачать, вырезалки">
    <meta name="description" content="Большой выбор развивающих заданий и упражнений для детей на Расту играя. Раскраски, прописи, задачи по математике, головоломки, песни, загадки. Скачивайте и распечатывайте материалы бесплатно и без регистрации.">

    <link rel="stylesheet" href="./style.css"> <!-- Ваши стили -->
    <link rel="stylesheet" href="../header/style.css"> <!-- Стили хэдера -->
    <link rel="stylesheet" href="../footer/style.css"> <!-- Стили футера -->

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
        <p id="identifi-id"><?php echo $_GET['id'] ?></p>
        <p id="identifi-catalog1"><?php if (isset($_GET['catalog1id'])) echo $_GET['catalog1id'] ?></p>
        <p id="identifi-catalog2"><?php if (isset($_GET['catalog2id'])) echo $_GET['catalog2id'] ?></p>
        <p id="identifi-catalog3"><?php if (isset($_GET['catalog3id'])) echo $_GET['catalog3id'] ?></p>

        <div class="feedback feedback-scrollbar delete-elem" id="feedback">
            <img class="feedback-close-btn" id="feedback-close-btn" src="./img/feedback_close_btn.svg" alt="X">
            <p class="feedback-title">Отзыв</p>
            <div class="feedback-carddata-wrap">
                <div class="feedback-carddata-card">
                    <img src="./img/background_color(4).svg" alt="color_background">
                    <div class="white_background">
                        <img class="card-img" id="feedback-carddata-img">
                    </div>
                </div>
                <p class="feedback-carddata-title" id="feedback-carddata-title"></p>
            </div>
            <div class="feedback-stars-wrap">
                <img class="feedback-star" id="feedback-star1" src="./img/big_yellow_star.svg" alt="star">
                <img class="feedback-star" id="feedback-star2" src="./img/big_yellow_star.svg" alt="star">
                <img class="feedback-star" id="feedback-star3" src="./img/big_yellow_star.svg" alt="star">
                <img class="feedback-star" id="feedback-star4" src="./img/big_yellow_star.svg" alt="star">
                <img class="feedback-star" id="feedback-star5" src="./img/big_yellow_star.svg" alt="star">
            </div>
            <p class="feedback-comment-title">Общие впечатления</p>
            <textarea class="feedback-textarea feedback-scrollbar" id="feedback-textarea"></textarea>
            <div class="feedback-save-btn" id="feedback-save-btn">Сохранить</div>
        </div>

        <div class="path-wrap" id="path">
            <a class="path-back" href="../main">Главная ></a>
        </div>

        <section class="desk-wrap">
            <div class="desk-control-wrap delete-elem" id="desk-control-wrap">
                <div id="desk-control-img" contentEditable="true"></div>
                <div class="desk-control-delete" id="desk-control-delete">Удалить карточку</div>
            </div>
            <div class="desk-title-wrap">
                <h1 class="title1" id="title1"></h1>
                <img class="desk-title-favorite_btn" id="desk-title-favorite_btn" idCard="" src="./img/desk_card_like_btn.svg" alt="favorite">
            </div>
            <div class="desk-info-wrap">
                <div class="new-card-img delete-elem" id="new-card-img" contentEditable="true">picture.jpg</div>
                <div class="desk-img-wrap">
                    <img class="desk-img" id="desk-img" src="" alt="">
                </div>
                <div class="desk-btns-description-wrap">
                    <div class="desk-btns-wrap">
                        <div class="desk-btn" id="desk-btn-print">Распечатать</div>
                        <a href="#" download="" class="card-download-btn-link" id="desk-btn-download">
                            <div class="desk-btn">Сохранить</div>
                        </a>
                    </div>
                    <div class="desk-description-wrap" id="desk-description"></div>
                </div>
            </div>
            <div class="create-btn delete-elem" id="create-btn">СОЗДАТЬ</div>
            <section id="comments-wrap">
                <span class="comments-title">Отзывы</span>
                <span class="comments-count" id="comments-count"></span>
                <div class="comments-rating-wrap">
                    <div class="comments-rating-num-wrap">
                        <span class="comments-rating-num" id="comments-rating-num"></span>
                        <img id="comments-rating-stars" src="" alt="">
                    </div>
                    <div class="comments-rating-progress-wrap">
                        <ul class="comments-rating-progress-list">
                            <li class="comments-rating-progress-item">
                                <img class="comments-rating-progress-item-star" src="./img/yellow_star.svg" alt="star">
                                <p class="comments-rating-progress-item-num">5</p>
                                <progress max="100" value="" class="comments-rating-progress-item-progress" id="comments-rating-progress-5"></progress>
                                <p class="comments-rating-progress-item-count" id="comments-rating-count-5"></p>
                            </li>
                            <li class="comments-rating-progress-item">
                                <img class="comments-rating-progress-item-star" src="./img/yellow_star.svg" alt="star">
                                <p class="comments-rating-progress-item-num">4</p>
                                <progress max="100" value="" class="comments-rating-progress-item-progress" id="comments-rating-progress-4"></progress>
                                <p class="comments-rating-progress-item-count" id="comments-rating-count-4"></p>
                            </li>
                            <li class="comments-rating-progress-item">
                                <img class="comments-rating-progress-item-star" src="./img/yellow_star.svg" alt="star">
                                <p class="comments-rating-progress-item-num">3</p>
                                <progress max="100" value="" class="comments-rating-progress-item-progress" id="comments-rating-progress-3"></progress>
                                <p class="comments-rating-progress-item-count" id="comments-rating-count-3"></p>
                            </li>
                            <li class="comments-rating-progress-item">
                                <img class="comments-rating-progress-item-star" src="./img/yellow_star.svg" alt="star">
                                <p class="comments-rating-progress-item-num">2</p>
                                <progress max="100" value="" class="comments-rating-progress-item-progress" id="comments-rating-progress-2"></progress>
                                <p class="comments-rating-progress-item-count" id="comments-rating-count-2"></p>
                            </li>
                            <li class="comments-rating-progress-item">
                                <img class="comments-rating-progress-item-star" src="./img/yellow_star.svg" alt="star">
                                <p class="comments-rating-progress-item-num">1</p>
                                <progress max="100" value="" class="comments-rating-progress-item-progress" id="comments-rating-progress-1"></progress>
                                <p class="comments-rating-progress-item-count" id="comments-rating-count-1"></p>
                            </li>
                        </ul>
                    </div>
                    <div class="comments-btn" id="comments-btn">Оставить отзыв</div>
                </div>
                <div class="comment-cards-wrap" id="comment-cards-wrap">
            </section>
            <div class="view-all-comments" id="view-all-comments">Смотреть все отзывы</div>
        </section>

        <h2 class="title2" id="title2">Похожие</h2>

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