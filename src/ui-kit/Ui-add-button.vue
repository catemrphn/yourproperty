<template>
    <div class="add-button">
        <div class="add-button__plus">
            <span></span>
            <span></span>
        </div>
        <a href="#">Новое объявление</a>
    </div>
</template>

<script>
    export default {
        name: "Ui-add-button"
    }
</script>

<style lang="scss" scoped>
    .add-button {
        color: map_get($colors, text-primary-inverted);
        text-decoration: none;
        position: relative;
        border: 1px solid white;
        border-radius: map_get($border-radius, xxs);
        padding: map_get($grid-spacing, xs) map_get($grid-spacing, sm);
        display: flex;
        align-items: center;

        a {
            color: map_get($colors, text-primary-inverted);
            text-decoration: none;
            @include TypographyBodySmall;
        }
    }

    .add-button__plus {
        display: flex;
        padding-right: map_get($grid-spacing, xs);

        span {
            background-color: map_get($colors, text-primary-inverted);
            width: $grid-step * 2.5;
            height: $grid-step / 2;
            display: inline-block;
        }

        span:first-child {
            transform: rotate(90deg);
            position: absolute;
        }
    }

</style>
