<template>
    <aside class="buffer">
        <slot></slot>
    </aside>
</template>

<script>
    export default {
        name: "Buffer"
    }
</script>

<style lang="scss" scoped>
    .buffer {
        width: 37%;
        margin: map_get($grid-spacing, xl);
        margin-left: 0;
    }
</style>
