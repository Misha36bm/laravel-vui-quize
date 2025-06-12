<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-white" v-if="!this.$root.$data.isLoaderHidden">
        <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
    </div>
</template>

<script>
export default {
    name: 'AppLoader',
}
</script>

<style lang="scss" scoped></style>
