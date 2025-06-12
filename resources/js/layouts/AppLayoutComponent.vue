<template>
    <header>
        <NavBarComponent></NavBarComponent>
    </header>
    <main></main>
    <footer></footer>
</template>

<script>
import NavBarComponent from '../components/NavBarComponent.vue';

export default {
    name: "AppLayoutComponent",

    components: {
        NavBarComponent
    }
}
</script>

<style lang="scss" scoped></style>
