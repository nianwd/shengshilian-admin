<template>
  <goods-category-detail :is-edit="false" :is_self="is_self" />
</template>

<script>
import GoodsCategoryDetail from "../components/GoodsCategoryDetail";

export default {
  components: { GoodsCategoryDetail },
  data() {
    return {
      is_self: 1,
    };
  },
  created() {
    if(this.$route.query.is_self){
        this.is_self = Number(this.$route.query.is_self)
    }
  }
};
</script>

<style scoped>
</style>
