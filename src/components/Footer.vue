<template>
    <section class="footer">
        <div class="footer__container">
            <section class="footer__primary-link">
                <UiLogo/>
                <a class="footer__link" :key="link" v-for="link in primaryLinks" href="#">{{link.name}}</a>
            </section>

            <section class="footer__main-links">
                <div class="footer__category-links">
                    <a class="footer__link" :key="link" v-for="link in newBuiling" href="#">{{link.name}}</a>
                </div>
                <div class="footer__category-links">
                    <a class="footer__link" :key="link" v-for="link in secondary" href="#">{{link.name}}</a>
                </div>
                <div class="footer__category-links">
                    <a class="footer__link" href="#">ЗЕМЛЯ</a>
                    <a class="footer__link" href="#">Участок земли</a>
                </div>
                <div class="footer__category-links">
                    <a class="footer__link" href="#">КОММЕРЧЕСКАЯ <br> НЕДВИЖИМОСТЬ</a>
                    <a class="footer__link" :key="link" v-for="link in commercial" href="#">{{link.name}}</a>
                </div>
                <div class="footer__category-links">
                    <a class="footer__link footer__link_primary" href="#">АНАЛИТИКА</a>
                </div>
                <div class="footer__category-links">
                    <p class="footer__link">КОНТАКТЫ</p>
                    <div class="footer__contacts" :key="data" v-for="data in contacts">
                        <img class="footer__icon" :src="data.img" :alt="data.alt">
                        <p class="footer__link">{{data.name}}</p>
                    </div>
                </div>
            </section>

            <section class="footer__about">
                <div class="footer__image">
                    <img src="../assets/images/property.png" alt="property"/>
                </div>
                <div class="footer__text-about">
                    <h6 class="footer__text">НЕДВИЖИМОСТЬ В УФЕ</h6>
                    <p class="footer__text">
                        Портал «Вся недвижимость» – крупнейший тематический Интернет-ресурс, посвященный рынку недвижимости в Уфе. Купить или продать квартиру, снять или сдать в аренду жилую площадь, получить консу  еской недвижимости и многом другом. Также на портале есть ряд полезных сервисов (ипотечный калькулятор, квартиры в Уфе от застройщика и др.).
                    </p>
                    <p class="footer__text">
                        Портал «Вся недвижимость» – крупнейший тематический Интернет-ресурс, посвященный рынку недвижимости в Уфе. Купить или продать квартиру, снять или сдать в аренду жилую площадь, получить консу  еской недвижимости и многом другом.
                    </p>
                </div>
                <p class="footer__text_sub">© ООО «Пронто-Уфа», 2006-2016</p>
            </section>
        </div>
    </section>
</template>

<script>
    import UiLogo from "@/ui-kit/Ui-Logo";

    export default {
        name: "Footer",
        components: {
            UiLogo,
        },
        data() {
            return {
                primaryLinks: [
                    {name: "ОБРАТНАЯ СВЯЗЬ"},
                    {name: "РЕКЛАМА НА САЙТЕ"},
                    {name: "ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ"},
                    {name: "ПОМОЩЬ"},
                ],
                newBuiling: [
                    {name: "НОВОСТРОЙКИ"},
                    {name: "Однокомнатные"},
                    {name: "Двухкомнатные"},
                    {name: "Трехкомнатные"},
                    {name: "Дом"},
                ],
                secondary: [
                    {name: "ВТОРИЧКА"},
                    {name: "Однокомнатные"},
                    {name: "Двухкомнатные"},
                    {name: "Трехкомнатные"},
                    {name: "Дом"},
                ],
                commercial: [
                {name: "Офис"},
                {name: "Магазины"},
                {name: "Склад"},
                {name: "Производство"},
                {name: "Участок земли"},
                ],
                contacts: [
                    {
                        img: require("../assets/images/geo_icon.svg"),
                        alt: "geo",
                        name: "г. Н. Новгород, пл. Лядова, 133",
                    },
                    {
                        img: require("../assets/images/phone_icon.svg"),
                        alt: "phone",
                        name: "8 800 333 33 33",
                    },
                    {
                        img: require("../assets/images/mail_icon.svg"),
                        alt: "mail",
                        name: "info@mail.ru",
                    },
                ],
            }
        }
    }

</script>

<style lang="scss" scoped>
    .footer {
        background-color: map_get($colors, backgroung-primary-inverted);
    }

    .footer__container {
        @include layout($padding: map_get($grid-spacing, lg));
        align-items: center;
        flex-direction: column;
    }

    .footer__primary-link, .footer__main-links{
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-bottom: map_get($grid-spacing, xl);
        border-bottom: 1px solid map_get($colors, separator-primary);
    }

    .footer__primary-link {
        margin-top: map_get($grid-spacing, md);
    }

    .footer__main-links {
        flex-direction: row;
        margin-top: map_get($grid-spacing, xxl);
    }

    .footer__link {
        @include TypographyBody1();
        color: map_get($colors, text-primary-inverted);
        text-decoration: none;
        padding-bottom: map_get($grid-spacing, md);
    }

    .footer__category-links {
        display: flex;
        flex-direction: column;
    }

    .footer__contacts {
        display: flex;
        align-items: end;
    }

    .footer__icon {
        margin-right: 10px;
    }

    .footer__about {
        width: 100%;
        margin-top: map_get($grid-spacing, xxl);
    }

    .footer__text-about {
        width: 50%;
        display: inline-block;
    }

    .footer__image {
        width: 45%;
        margin-right: 5%;
        display: inline-block;
    }

    .footer__image img {
        width: 100%;
    }

    .footer__text {
        @include TypographyBody1;
        color: map_get($colors, text-primary-inverted);
        padding-bottom: map_get($grid-spacing, sm);
    }

    .footer__text_sub {
        @include TypographyBodySmall;
        color: map_get($colors, text-secondory-inverted);
        margin-top: map_get($grid-spacing, lg);
    }

</style>
