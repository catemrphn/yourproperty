<template>
    <div class="contacts">
        <div class="contacts__container">
            <p class="contacts__name">Наталья, собственник</p>
            <p class="contacts__number">+7 925 569 XX XX</p>
        </div>
        <UiBigButton class="contacts__button" text="Показать номер"/>
    </div>
</template>

<script>
    import UiBigButton from "@/ui-kit/UiBigButton";

    export default {
        name: "Ui-Contact",
        components: {
            UiBigButton,
        },
    }
</script>

<style lang="scss" scoped>
    .contacts {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: map_get($grid-spacing, md);
        margin-bottom: map_get($grid-spacing, md);
        background-color: map_get($colors, background-primary);

    }

    .contacts__container {
        display: inline-block;
    }

    .contacts__name {
        @include TypographyBodyMid;
        color: map_get($colors, text-primary);
        padding-bottom: map_get($grid-spacing, sm);
    }

    .contacts__number {
        @include TypographyHeading1;
        color: map_get($colors, text-secondary);
        font-weight: map_get($font-weight, regular);
    }

    .contacts__button {
        float: right;
    }

</style>
