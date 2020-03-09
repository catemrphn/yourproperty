<template>
<div class="user">
    <div class="user__avatar">
        <img src="../assets/images/user_avatar.png" alt="user-avatar"/>
        <div class="user__notification">
            <p>{{notification}}</p>
        </div>
    </div>
    <p class="user__name">{{username}}</p>
</div>
</template>

<script>
    export default {
        name: "Ui-User",
        props: {
            username: String,
            notification: Number,
        }
    }
</script>

<style lang="scss" scoped>
    .user {
        display: flex;
        align-items: center;
        position: relative;
    }

    .user__avatar {
        margin-right: map_get($grid-spacing, md);
    }

    .user__notification {
        position: absolute;
        bottom: 65%;
        left: 20%;

        background-color: map_get($colors, text-acсent);
        border-radius: map_get($border-radius, sm);


        p {
            @include TypographyBodySmall;
            color: map_get($colors, text-primary-inverted);
            padding: map_get($grid-spacing, xxs) map_get($grid-spacing, xs);

        }
    }

    .user__name {
        @include TypographyBody1;
        color: map_get($colors, text-secondory-inverted);
    }

</style>
