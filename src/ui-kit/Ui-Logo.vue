<template>
    <h1 class="logo">
        <em>ВАША</em> НЕДВИЖИМОСТЬ</h1>
</template>

<script>
    export default {
        name: "Ui_logo",
    }
</script>

<style lang="scss" scoped>

    .logo {
        @include TypographyHeading1();
        display: flex;
        color: map_get($colors, text-primary-inverted);

        em {
            color: map_get($colors, text-acсent);
        }
    }
</style>
