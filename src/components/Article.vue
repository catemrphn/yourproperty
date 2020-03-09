<template>
    <article class="article">
        <img v-if="!favorite" src="../assets/images/favorite_disable.svg" alt="favorite" class="article__fav"/>
        <img v-if="favorite" src="../assets/images/favorite_icon.svg" alt="favorite" class="article__fav"/>
        <h1 class="article__title">3-комнатная квартира 78 м²</h1>
        <h3 class="article__description">Загорьевская улица, 23к1</h3>
        <h2 class="article__title article__price">10 570 000 P</h2>
        <h3 class="article__description article__size">60 000 P м²</h3>
        <img src="../assets/images/map.png" alt="map" class="article__map">
        <UiContact/>
        <div class="article__gallery">
            <img src="../assets/images/article_photo_1.png" alt="photo"/>
            <img src="../assets/images/article_photo_2.png" alt="photo"/>
            <img src="../assets/images/article_photo_3.png" alt="photo"/>
            <img src="../assets/images/article_photo_4.png" alt="photo"/>
            <img src="../assets/images/article_photo_5.png" alt="photo"/>
        </div>
        <div class="article__about">
            <h3>Описание продавца</h3>
            <p>Портал «Вся недвижимость» – крупнейший тематический Интернет-ресурс, посвященный рынку недвижимости в
                Уфе. Купить или продать квартиру, снять или сдать в аренду жилую площадь, получить консу еской
                недвижимости и многом другом. Также на портале есть ряд полезных сервисов (ипотечный калькулятор,
                квартиры в Уфе от застройщика и др.).
            </p>
        </div>

        <div class="article__extra-data">
            <dl>
                <dt>78 м²</dt>
                <dd>Общая</dd>
            </dl>
            <dl>
                <dt>48 м²</dt>
                <dd>Жилая</dd>
            </dl>
            <dl>
                <dt>11 м²</dt>
                <dd>Кухня</dd>
            </dl>
            <dl>
                <dt>3</dt>
                <dd>Комнаты</dd>
            </dl>
            <dl>
                <dt>8 этаж</dt>
                <dd>Из 17</dd>
            </dl>
            <dl>
                <dt>2002</dt>
                <dd>Год постройки</dd>
            </dl>
        </div>

        <div class="article-information">
            <div>
                <p class="article-information__title">КВАРТИРА</p>
                <p class="article-information__desc">Раздельный санузел</p>
                <p class="article-information__desc">Балкон</p>
                <p class="article-information__desc">Ремонт хороший</p>
                <p class="article-information__desc">Вид из окон во двор</p>
            </div>
            <div>
                <p class="article-information__title">ДОМ</p>
                <p class="article-information__desc">Панель(П-3М)</p>
                <p class="article-information__desc">Лифт</p>
                <p class="article-information__desc">Мусоропровод</p>
            </div>
        </div>
        <UiContact/>
    </article>
</template>

<script>
    import UiContact from "@/ui-kit/Ui-Contact";
    export default {
        name: "Article",
        components: {UiContact},
        data() {
            return {
                favorite: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .article {
        width: 60%;
        padding: map_get($grid-spacing, xl);
        background-color: map_get($colors, background-secondary);
    }

    .article__fav {
        float: right;
    }

    .article__title {
        @include TypographyHeading3;
        color: map_get($colors, text-secondary);
        padding-bottom: map_get($grid-spacing, lg);
        display: inline-block;
        font-weight: map_get($font-weight, thin);
    }

    .article__price {
        font-weight: map_get($font-weight, semibold);
        padding-right: map_get($grid-spacing, xl);

    }

    .article__description {
        @include TypographyHeading2;
        color: map_get($colors, text-primary);
        padding-bottom: map_get($grid-spacing, lg);
        vertical-align: bottom;
    }

    .article__size {
        display: inline-block;
    }

    .article__map {
        width: 100%;
        padding-bottom: map_get($grid-spacing, lg);
    }

    .article__gallery {
        display: inline-block;
        padding-bottom: map_get($grid-spacing, xl);
    }

    .article__gallery img {
        width: 20%;
    }

    .article__about {
        margin-bottom: map_get($grid-spacing, xl);
    }

    .article__about h3 {
        @include TypographyHeading1;
        color: map_get($colors, text-secondary);
        padding-bottom: map_get($grid-spacing, md);
    }

    .article__about p {
        @include TypographyBody1;
        color: map_get($colors, text-primary);
    }

    .article__extra-data {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: map_get($colors, background-primary);
        padding: map_get($grid-spacing, md);
        margin-bottom: map_get($grid-spacing, xl);

        dt {
            @include TypographyHeading4;
            color: map_get($colors, text-secondary);
            padding-bottom: map_get($grid-spacing, md);
        }

        dd {
            @include TypographyBody1;
            color: map_get($colors, text-primary);
        }
    }

    .article-information {
            display: flex;
            align-items: flex-start;
            margin-bottom: map_get($grid-spacing, xxl);

        div:first-child {
            margin-right: map_get($grid-spacing, xxl);
        }

        p {
            padding-bottom: map_get($grid-spacing, xxs);
        }
    }

    .article-information__title {
        @include TypographyBodyMid;
        color: map_get($colors, text-secondary);
    }

    .article-information__desc {
        @include TypographyBody1;
        color: map_get($colors, text-primary);

    }
</style>
