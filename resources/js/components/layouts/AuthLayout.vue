<template>
    <NavbarComponent />
    <router-view />
</template>

<script>
import NavbarComponent from '../Base/NavbarComponent.vue';

export default {
    name: "AuthLayout",

    components: {
        NavbarComponent
    }
}
</script>

<style lang="scss" scoped></style>
