<template>
    <section class="search-filter">
        <section class="search-filter__options">
            <div class="search-filter__container">
                <a class="search-filter__text" href="#">НОВОСТРОЙКИ</a>
                <a class="search-filter__text" href="#">ВТОРИЧКА</a>
                <a class="search-filter__text" href="#">ЗЕМЛЯ</a>
                <a class="search-filter__text" href="#">КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</a>
                <a class="search-filter__text" href="#">АНАЛИТИКА</a>
                <a class="search-filter__text" href="#">КАТАЛОГ ФИРМ</a>
            </div>
        </section>
        <section class="search-filter__options">
            <div class="search-filter__container">
                <UiSelectFilter :options="BuySelect" />
                <UiSelectFilter :options="ApartamentSelect" />
                <UiSelectFilter :options="RoomsCountSelect" />
                <UiSelectFilter :options="DistrictSelect" />
                <UiInputFilter placeholder="От" />
                <UiInputFilter placeholder="До" />
                <UiInputFilter placeholder="P" />
            </div>
        </section>
    </section>
</template>

<script>
    import UiSelectFilter from "@/ui-kit/Ui-select-filter";
    import UiInputFilter from "@/ui-kit/Ui-Input-filter";

    export default {
        name: "SearchFilter",
        components: {
            UiInputFilter,
            UiSelectFilter,
        },
        data() {
            return {
                BuySelect: [
                    {name:"Купить"},
                    {name:"Купить"},
                    {name:"Купить"},
                    {name:"Купить"},
                ],
                ApartamentSelect: [
                    {name:"Квартиру"},
                    {name:"Квартиру"},
                    {name:"Квартиру"},
                    {name:"Квартиру"},
                ],
                RoomsCountSelect: [
                    {name:"Комнат"},
                    {name:"Комнат"},
                    {name:"Комнат"},
                    {name:"Комнат"},
                ],
                DistrictSelect: [
                    {name: "Район"},
                    {name: "Район"},
                    {name: "Район"},
                    {name: "Район"},
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .search-filter {
        background-color: map_get($colors, backgroung-secondary);
    }

    .search-filter__container {
        @include layout($padding: map_get($grid-spacing, sm));
        align-items: center;
        flex-direction: row;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .search-filter__options:last-child .search-filter__container {
        padding: 0;
        justify-content: normal;
    }

    .search-filter__options {
        border-bottom: 1px solid map_get($colors, separator-primary);
    }

    .search-filter__text {
        color: map_get($colors, text-secondary);
        font-size: map_get($font-size, sm);
        text-decoration: none;
        padding: map_get($grid-spacing, sm);
        padding-left: 0;
    }
</style>
