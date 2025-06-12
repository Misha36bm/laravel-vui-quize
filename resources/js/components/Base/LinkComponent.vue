<template>
    <a :href="linkData.route" class="hover:text-blue-600 transition duration-200">
        {{ linkData.text }}
    </a>
</template>

<script>
export default {
    name: "LinkComponent",

    props: {
        linkData: Object
    },

    // data() {
    //     return {
    //         linkData: null
    //     }
    // }
}
</script>

<style lang="scss" scoped></style>
