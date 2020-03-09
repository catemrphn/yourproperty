<template>
    <header class="header">
        <div class="header__container">
            <UiLogo class="header__logo"/>
            <a class="header__city" href="#">Нижний Новгород</a>
            <div class="header__add-button-container">
                <UiAddButton/>
            </div>
            <Ui-Favorite favoriteCount="3"/>
            <span class="header__separator"></span>
            <UiUser username="Иван Иванов" notification="3"/>
        </div>
    </header>
</template>

<script>
    import UiAddButton from "@/ui-kit/Ui-add-button";
    import UiFavorite from "@/ui-kit/Ui-Favorite";
    import UiUser from "@/ui-kit/Ui-User";
    import UiLogo from "@/ui-kit/Ui-Logo";

    export default {
        name: "Header",
        components: {
            UiAddButton,
            UiFavorite,
            UiUser,
            UiLogo,
        },
    }

</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

    .header {
        background-color: map_get($colors, backgroung-primary-inverted);
    }

    .header__logo {
        margin-right: map_get($grid-spacing, xl);
    }

    .header__container {
        @include layout($padding: map_get($grid-spacing, lg));
        align-items: center;
    }

    .header__city {
        @include TypographyBody1;
        color: map_get($colors, text-primary-inverted);
        text-decoration: none;
        border-bottom: 1px solid;
        padding-bottom: map_get($grid-spacing, xs);
        margin-right: 20%;
    }

    .header__add-button-container {
        margin-right: map_get($grid-spacing, md);
    }

    .header__separator {
        background-color: map_get($colors, separator-primary);
        width: $grid-step * 9;
        height: 1px;
        transform: rotate(90deg);
    }

</style>
