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
        font-family: 'BravoRG', sans-serif;
        display: flex;
        color: map_get($colors, text-primary-inverted);
        font-size: map_get($font-size, lg);

    em {
        color: map_get($colors, text-acсent);
    }
    }
</style>
