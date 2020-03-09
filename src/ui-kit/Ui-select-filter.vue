<template>
    <div class="select-filter">
        <select>
            <option :key="option" v-for="option in options">{{option.name}}</option>
        </select>
        <div class="select-arrow">
            <span class="select-arrow__span"></span>
            <span class="select-arrow__span"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ui-select-filter",
        props: {
            options: Object,
        }
    }
</script>

<style lang="scss" scoped>
    .select-filter {
        border-right: 1px solid map_get($colors, separator-primary);
        overflow: hidden;
        padding: map_get($grid-spacing, md);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 12%;
    }

    .select-filter select {
        color: map_get($colors, text-primary);
        border-radius: 0;
        background: transparent;
        border: 0;
        @include TypographyBodyMid;
        -webkit-appearance: none;
    }

    .select-arrow {
        display: flex;
        position: relative;
    }

    .select-arrow__span {
        display: inline-block;
        width: $grid-step * 2;
        height:$grid-step / 2;
        background-color: map_get($colors, separator-primary);
        transform: rotate(-45deg);
    }

    .select-arrow__span:last-child {
        transform: rotate(45deg);
        position: absolute;
        left: - map_get($grid-spacing, xxs);
    }
</style>
