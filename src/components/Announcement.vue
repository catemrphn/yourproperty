<template>
    <aside class="buffer">
             <section :key="announcement" v-for="announcement in announcements"
                      :class="{ announcement_selected : announcement.selected, announcement: !announcement.selected }">
                 <img :src="announcement.photo" alt="photo" class="announcement__image"/>
                 <div>
                     <img v-if="!announcement.favorite" src="../assets/images/favorite_disable.svg" alt="favorite" class="announcement__fav" />
                     <img v-if="announcement.favorite" src="../assets/images/favorite_icon.svg" alt="favorite" class="announcement__fav" />
                     <h3 class="announcement__title">{{announcement.title}}</h3>
                     <p class="announcement__address">{{announcement.address}}</p>
                     <h4 class="announcement__price">{{announcement.price}} {{announcement.val}}</h4>
                     <p class="announcement__size">{{announcement.size}} {{announcement.val}} м²</p>
                     <div class="announcement__cal">
                         <img src="../assets/images/calendar_icon.svg" alt="calendar" />
                         <p>{{announcement.date}}</p>
                     </div>
                     <img v-if="announcement.vip" src="../assets/images/vip.svg" alt="vip" class="announcement__extra" />
                     <img v-if="announcement.premium" src="../assets/images/premium.svg" alt="premium" class="announcement__extra" />
                     <!--todo: fix pick up image-->
                     <img v-if="announcement.pickUp" src="../assets/images/pick_up.svg" alt="pick_up" class="announcement__extra" />
                     <img v-if="announcement.highlight" src="../assets/images/highlight.svg" alt="highlight" class="announcement__extra" />
                 </div>
             </section>
    </aside>
</template>

<script>


    export default {
        name: "Announcement",
        data() {
            return {
                announcements: [
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_1.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: false,
                        highlight: false,
                        vip: true,
                        selected: false,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_2.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: true,
                        pickUp: false,
                        highlight: false,
                        vip: false,
                        selected: true,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_3.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: true,
                        favorite: false,
                        pickUp: false,
                        highlight: false,
                        vip: false,
                        selected: false,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/no-photo-ad.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: false,
                        highlight: true,
                        vip: false,
                        selected: false,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_4.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: true,
                        highlight: false,
                        vip: false,
                        selected: false,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_5.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: false,
                        highlight: false,
                        vip: false,
                        selected: false,

                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/photo_ad_6.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: false,
                        highlight: false,
                        vip: false,
                        selected: false,
                    },
                    {
                        val: 'P',
                        photo: require("../assets/images/no-photo-ad.png"),
                        title:"3-комнатная квартира 78 м²",
                        address: "Загорьевская улица, 23к1 Орехово, 41 мин. на транспорте",
                        price: 10570000,
                        size: 60000,
                        date: '22.10.15',
                        premium: false,
                        favorite: false,
                        pickUp: false,
                        highlight: false,
                        vip: false,
                        selected: false,
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .buffer {
        width: 37%;
        margin-right: map_get($grid-spacing, xl);

    }

    .announcement, .announcement_selected {
        display: inline-block;
        padding: map_get($grid-spacing, sm);
        color: map_get($colors, text-primary);
        position: relative;
    }
    .announcement {
        background-color: map_get($colors, background-primary);
    }

    .announcement:hover {
        background-color: map_get($colors, background-hover);
    }

    .announcement_selected {
        background-color: map_get($colors, background-secondary);
    }

    .announcement_selected::after {
        content: '';
        position: absolute;
        left: 100%;
        top: 40%;
        border: 10px solid transparent;
        border-left: 10px solid map_get($colors, background-secondary);
    }

        .announcement__fav {
        float: right;
    }
    .announcement__image {
        float: left;
        margin-right: map_get($grid-spacing, md);
        width: 30%;
    }

    .announcement__title {
       @include TypographyBody1;
        color: map_get($colors, text-secondary);
        padding-bottom: map_get($grid-spacing, xxs);
    }

    .announcement__address {
        @include TypographyBodySmall;
        padding-bottom: map_get($grid-spacing, xs);
    }

    .announcement__price {
        @include TypographyHeading2;
        color: map_get($colors, text-acсent);
        display: inline-block;
        padding-right: map_get($grid-spacing, xs);
        padding-bottom: map_get($grid-spacing, xxs);

    }

    .announcement__size {
        @include TypographyBody1;
        display: inline-block;
    }

    .announcement__cal {
        display: inline-block;
    }

    .announcement__cal p {
        @include TypographyBodySmall;
        display: inline-block;
    }

    .announcement__cal img {
        padding-right: map_get($grid-spacing, xs);
        vertical-align: middle;
    }

    .announcement__extra {
        float: right;
    }

</style>
