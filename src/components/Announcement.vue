<template>
    <section class="announcement">
            <img src="../assets/images/photo_ad_1.png" alt="photo" class="announcement__image"/>
        <div>
            <img src="../assets/images/favorite_disable.svg" alt="favorite" class="announcement__fav" />
            <h3 class="announcement__title">3-комнатная квартира 78 м²</h3>
            <p class="announcement__address">Загорьевская улица, 23к1 Орехово,  41 мин. на транспорте</p>
            <h4 class="announcement__price">10 570 000 P</h4>
            <p class="announcement__size">60 000 P м²</p>
            <div class="announcement__cal">
                <img src="../assets/images/calendar_icon.svg" alt="calendar" />
                <p>22.10.15</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Announcement",
    }
</script>

<style lang="scss" scoped>
    .announcement {
        display: inline-block;
        padding: map_get($grid-spacing, sm);
        background-color: map_get($colors, background-secondary);
        color: map_get($colors, text-primary);
    }

    .announcement__fav {
        float: right;
    }
    .announcement__image {
        float: left;
        margin-right: map_get($grid-spacing, md);
        width: 30%;
    }

    .announcement__title {
       @include TypographyBody1;
        color: map_get($colors, text-secondary);
        padding-bottom: map_get($grid-spacing, xxs);
    }

    .announcement__address {
        @include TypographyBodySmall;
        padding-bottom: map_get($grid-spacing, xs);
    }

    .announcement__price {
        @include TypographyHeading2;
        color: map_get($colors, text-acсent);
        display: inline-block;
        padding-right: map_get($grid-spacing, xs);
        padding-bottom: map_get($grid-spacing, xxs);

    }

    .announcement__size {
        @include TypographyBody1;
        display: inline-block;
    }

    .announcement__cal p {
        @include TypographyBodySmall;
        display: inline-block;
    }

    .announcement__cal img {
        padding-right: map_get($grid-spacing, xs);
        vertical-align: middle;

    }

</style>
