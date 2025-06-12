<template>
    <nav class="w-full bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <!-- Пустий блок для вирівнювання -->
            <div class="w-1/3"></div>

            <!-- Центроване меню -->
            <div class="w-1/3 flex justify-center space-x-10 text-gray-700 font-semibold text-base">
                <template v-for="linkData in links">
                    <LinkComponent v-bind:linkData="linkData"></LinkComponent>
                </template>
                <!-- <a href="#" class="hover:text-blue-600 transition duration-200">Home</a>
                <a href="#" class="hover:text-blue-600 transition duration-200">Quizzes</a>
                <a href="#" class="hover:text-blue-600 transition duration-200 whitespace-nowrap">Create my own
                    quize</a> -->
            </div>

            <!-- Auth button справа -->
            <div class="w-1/3 flex justify-end">
                <a href="#"
                    class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all duration-200 shadow-md">
                    Login / Registration
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import LinkComponent from './Base/LinkComponent.vue';
export default {
    name: "NavBarComponent",

    data() {
        return {
            links: [
                {
                    route: '/',
                    text: 'Home'
                },
                {
                    route: '/quizzes',
                    text: 'Quizzes'
                },
                {
                    route: '/create-quiz',
                    text: 'Create my own quize'
                }
            ]
        }
    },

    components: {
        LinkComponent
    }
}
</script>

<style lang="scss" scoped></style>
