<template>
    <goods-detail :is-edit="true" />
</template>

<script>
    import GoodsDetail from './components/GoodsDetail'

    export default {
        name: "edit",
        components: { GoodsDetail },
    }
</script>

<style scoped>

</style>
