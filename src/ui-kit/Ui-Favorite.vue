<template>
    <div class="favorite">
        <img class="favorite__star" src="../assets/images/favorite_icon.svg" alt="favoriteIcon"/>
        <p class="favorite__number">{{favoriteCount}}</p>
    </div>
</template>

<script>
    export default {
        name: "Ui-Favorite",
        props: {
            favoriteCount: Number,
        }
    }
</script>

<style lang="scss" scoped>
    .favorite {
        display: flex;
        align-items: center;
    }

    .favorite__star {
        margin-right: map_get($grid-spacing, sm);
    }

    .favorite__number {
        color: map_get($colors, text-secondory-inverted);
        @include TypographyBody1;
    }
</style>

