<template>
        <section class="sortFilter">
            <figure class="sortFilter__figure">
            <figcaption class="sortFilter__title">Сортировать:</figcaption>
                <a class="sortFilter__link" href="#">по умолчанию</a>
                <a class="sortFilter__link" href="#">по цене</a>
                <a class="sortFilter__link" href="#">по дате добавления</a>
            </figure>
            <figure class="sortFilter__figure">
                <figcaption class="sortFilter__title">Показать:</figcaption>
                <a class="sortFilter__link" href="#">список</a>
                <a class="sortFilter__link" href="#">на карте</a>
            </figure>
        </section>
</template>

<script>
    export default {
        name: "SortFilter",
    }
</script>

<style lang="scss" scoped>
    .sortFilter {
        @include TypographyBody1;
        border-bottom: 1px solid map_get($colors, separator-primary);
        color: map_get($colors, text-primary);
        padding-bottom: map_get($grid-spacing, xl);
    }

    .sortFilter__figure {
        margin-right: map_get($grid-spacing, xxl);
        display: inline-block;
    }

    .sortFilter__title {
        display: inline-block;
        padding-right: map_get($grid-spacing, xl);
    }

    .sortFilter__link {
        color: map_get($colors, text-primary);
        text-decoration: none;
        margin-right:map_get($grid-spacing, xs);
        padding: map_get($grid-spacing, xs);
    }

    .sortFilter__link:hover {
        background-color: map_get($colors, background-hover-primary);
    }
</style>
