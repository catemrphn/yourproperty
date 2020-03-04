<template>
        <input class="input-filter" type="number" :placeholder="placeholder">
</template>

<script>
    export default {
        name: "Ui-Input-filter",
        props: {
            placeholder: String,
        }
    }
</script>

<style lang="scss" scoped>
    .input-filter {
        overflow: hidden;
        padding: map_get($grid-spacing, md);
        width: 12%;
        border: none;
        border-right: 1px solid map_get($colors, separator-primary);
        color: map_get($colors, text-primary);
        font-size: map_get($font-size, md);
    }
</style>
