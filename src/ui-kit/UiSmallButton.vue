<template>
    <button class="ui-small-button" v-bind:class="{ small_button_disable : !enable}">
        {{text}}
    </button>
</template>

<script>
    export default {
        name: "UiSmallButton",
        props: {
            text: String,
            enable: Boolean,
        },
    }
</script>

<style lang="scss" scoped>
    .ui-small-button {
        @include TypographyBody1;
        background-color: map_get($colors, text-acсent);
        border: none;
        border-radius: map_get($border-radius, xxs);
        color: map_get($colors, text-primary-inverted);
        padding: map_get($grid-spacing, xxs) map_get($grid-spacing, sm);
        text-align: center;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
    }

    .small_button_disable {
        background-color: map_get($colors, background-disabled);

    }
</style>
