<div class="header-wrap">

    <section class="header-modal-wrap header-delete-elem" id="header-login-wrap">
        <div class="header-modal-background" id="header-login-background"></div>
        <div class="header-login header-modal-scrollbar">
            <img class="header-modal-close-btn" id="header-login-close-btn" src="../header/img/login_close_btn.svg" alt="X">
            <h3 class="header-modal-title">Войти</h3>

            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Электронная почта</span>
                <input type="email" class="header-login-input-email" id="header-login-input-email">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-login-incorrect-email-img" src="../header/img/login_incorrect_label.svg" alt="!!">
                <div class="header-modal-incorrect-data header-hide-elem" id="header-login-incorrect-email-text">Такой E-mail не зарегистрирован</div>
            </section>

            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Пароль</span>
                <input type="password" class="header-login-input-pass" id="header-login-input-pass">
                <img class="header-login-pass-eye" id="header-login-pass-eye" src="../header/img/login_pass_eye.svg" alt="O">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-login-incorrect-pass-img" src="../header/img/login_incorrect_label.svg" alt="!!">
                <div class="header-modal-incorrect-data header-hide-elem" id="header-login-incorrect-pass-text">Неправильный пароль</div>
            </section>

            <div class="header-modal-main-btn" id="header-login-btn">Войти</div>
            <span class="header-login-forget" id="header-login-forget">Забыли пароль?</span>
            <div class="header-modal-secondary-btn" id="header-login-registration-btn">Зарегистрироваться</div>
        </div>
    </section>

    <section class="header-modal-wrap header-delete-elem" id="header-reg-wrap">
        <div class="header-modal-background" id="header-reg-background"></div>
        <div class="header-reg header-modal-scrollbar">
            <img class="header-modal-close-btn" id="header-reg-close-btn" src="../header/img/login_close_btn.svg" alt="X">
            <h3 class="header-modal-title">Зарегистрироваться</h3>

            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Имя</span>
                <input type="text" class="header-reg-input" id="header-reg-input-name">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-reg-incorrect-name-img" src="../header/img/login_incorrect_label.svg" alt="!!">
            </section>

            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Электронная почта</span>
                <input type="email" class="header-reg-input" id="header-reg-input-email">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-reg-incorrect-email-img" src="../header/img/login_incorrect_label.svg" alt="!!">
            </section>

            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Придумайте пароль (минимум 6 символов)</span>
                <input type="password" class="header-reg-input" id="header-reg-input-pass">
                <img class="header-reg-pass-eye" id="header-reg-pass-eye" src="../header/img/login_pass_eye.svg" alt="O">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-reg-incorrect-pass-img" src="../header/img/login_incorrect_label.svg" alt="!!">
            </section>

            <div class="header-reg-confirmemail-btn" id="header-reg-confirmemail-btn">Подтвердить почту</div>

            <span class="header-modal-caption header-disable-elem" id="header-reg-caption-code">Код подтверждения</span>
            <input type="text" class="header-reg-input header-disable-elem" id="header-reg-input-code">

            <div class="header-modal-main-btn header-disable-elem" id="header-reg-btn">Зарегистрироваться</div>
            <div class="header-modal-secondary-btn" id="header-reg-login-btn">Войти</div>
        </div>
    </section>

    <section class="header-modal-wrap header-delete-elem" id="header-recovery1-wrap">
        <div class="header-modal-background" id="header-recovery1-background"></div>
        <div class="header-recovery header-modal-scrollbar">
            <img class="header-modal-close-btn" id="header-recovery1-close-btn" src="../header/img/login_close_btn.svg" alt="X">
            <h3 class="header-modal-title">Восстановление пароля</h3>
            <section class="header-modal-emailpass-wrap">
                <span class="header-modal-caption">Укажите E-mail, который Вы использовали при регистрации</span>
                <input type="email" class="header-recovery-input" id="header-recovery-input-email">
                <img class="header-modal-incorrect-img header-hide-elem" id="header-recovery-incorrect-email-img" src="../header/img/login_incorrect_label.svg" alt="!!">
                <div class="header-modal-incorrect-data header-hide-elem" id="header-recovery-incorrect-email-text">Такой E-mail не зарегистрирован</div>
            </section>
            <div class="header-modal-main-btn" id="header-recovery1-btn">Далее</div>
        </div>
    </section>

    <section class="header-modal-wrap header-delete-elem" id="header-recovery2-wrap">
        <div class="header-modal-background" id="header-recovery2-background"></div>
        <div class="header-recovery header-modal-scrollbar">
            <img class="header-modal-close-btn" id="header-recovery2-close-btn" src="../header/img/login_close_btn.svg" alt="X">
            <h3 class="header-modal-title">Восстановление пароля</h3>
            <span class="header-modal-caption">Введите код восстановления пароля</span>
            <span class="header-modal-caption">(письмо с кодом отправлено на указанный вами E-mail)</span>
            <input class="header-recovery-input" id="header-recovery-input-code">
            <div class="header-modal-main-btn header-disable-elem" id="header-recovery2-btn">Далее</div>
        </div>
    </section>

    <section class="header-modal-wrap header-delete-elem" id="header-recovery3-wrap">
        <div class="header-modal-background" id="header-recovery3-background"></div>
        <div class="header-recovery header-modal-scrollbar">
            <img class="header-modal-close-btn" id="header-recovery3-close-btn" src="../header/img/login_close_btn.svg" alt="X">
            <h3 class="header-modal-title">Восстановление пароля</h3>
            <span class="header-modal-caption">Придумайте новый пароль (минимум 6 символов)</span>
            <input type="password" class="header-recovery-input" id="header-recovery-input-pass">
            <img class="header-recovery-pass-eye" id="header-recovery-pass-eye" src="../header/img/login_pass_eye.svg" alt="O">
            <div class="header-modal-main-btn header-disable-elem" id="header-recovery3-btn">Сохранить пароль</div>
        </div>
    </section>

    <header class="header-content">
        <div class="header-logo">
            <div><a href="../main"><img src="../header/img/Logo_desktop_header.svg" alt="logo Расту, играя!"></a></div>
            <!-- <p>Раннее развитие малыша</p> -->
        </div>
        <div class="header-list">
        <div class="header-item" id="header-catalog-btn"><img src="../header/img/search(1).svg" alt="0" id="header-catalog-btn-img">
                <span class="header-item-title" id="header-catalog-btn-text"></span>
            </div>
            <div class="header-item header-delete-elem"><img src="../header/img/search.svg" alt="0">
                <span class="header-item-title"></span>
            </div>
            <div class="header-item" id="header-catalog-btn"><img src="../header/img/Frame 2647.svg" alt="0" id="header-catalog-btn-img">
                <span class="header-item-title" id="header-catalog-btn-text"></span>
            </div>
            <div class="header-item" id="header-login-name-btn"><img src="../header/img/Group.svg" alt="0">
                <span class="header-item-title" id="header-item-title-name"></span>
            </div>
            <div class="header-item" id="header-login-favorites-btn"><img src="../header/img/Vector (6).svg" alt="0">
                <span class="header-item-title" id="header-item-title-favorites"></span>
            </div>
        </div>
    </header>

    <section class="header-delete-elem" id="header-catalog-wrap">
        <div class="header-catalog-background" id="header-catalog-background"></div>
        <div class="header-catalog">
            <div class="header-catalog-part1" id="header-catalog-part1"></div>
            <div class="header-catalog-part2" id="header-catalog-part2"></div>
            <div class="header-catalog-part3" id="header-catalog-part3"></div>
            <img class="header-catalog-close-btn" id="header-catalog-close-btn" src="../header/img/catalog_close_btn.svg" alt="X">
        </div>
    </section>



    <!-- <div class="hren"></div> -->

</div>