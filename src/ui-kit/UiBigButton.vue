<template>
    <button class="ui-big-button">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: "UiButton",
        props: {
            text: String,
        },
    }
</script>

<style lang="scss" scoped>
    .ui-big-button {
        @include TypographyBody1;
        background-color: map_get($colors, text-acсent);
        border: none;
        border-radius: map_get($border-radius, xxs);
        color: map_get($colors, text-primary-inverted);
        padding: map_get($grid-spacing, md) map_get($grid-spacing, xxl);
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
    }
</style>
