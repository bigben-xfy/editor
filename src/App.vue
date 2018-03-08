<template>
    <transition name="router-fade" mode="out-in">
        <div class="route-container">
            <router-view></router-view>
        </div>
    </transition>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>


    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }

    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }

    .route-container {
        width: 100%;
    }

</style>

















