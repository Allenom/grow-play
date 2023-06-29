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
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="icon" href="../favicon.svg" type="image/x-icon">
</head>

<body>
    <?php include '../header/index.php'; ?>

   
    <div class="content-wrap">
        <section class="content">
            <div class="main">
                    <h2 class="heading">Ошибка 404</h2>
                  <div class="wrap">
                       <div class="img">
                            <img class="img-penguin"srcset="" src="./img/vecteezy_bird-3d-clipart_15693434_204.png" alt="картинка">
                           <img class="background-img"src="./img/фон.png" alt="фон">
                           <p class="text">Страницы по этому адресу нет. Проверьте адрес или перейдите на главную страницу.</p>

                        </div>
                          <button class="btn">
                               <p class="text-link"><a class="link" href="#" target="_blank">На главную</a></p>
                           </button>
                  </div>
            
        
              </div>
        </section>
    </div>

    <?php include '../footer/index.php'; ?>
</body>

</html>