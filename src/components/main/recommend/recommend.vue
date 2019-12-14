<template>
  <div>
    <div class="title">推荐商家</div>

    <div v-if="shops.length>0">
      <rebox v-for="item in shops" :key="item.id" :shop="item">{{item}} ></rebox>
      <div style="height:50px;"></div>
    </div>
    <div class="other" v-else>正在获取中。。。</div>
  </div>
</template> 

<script>
import rebox from "./Recommend-box";
export default {
  data() {
    return {};
  },
  props: {},
  components: {
    rebox
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {
    //从state中调取商家信息的arr
    shops() {
      return this.$store.state.shops;
    }
  }
};
</script>

<style scoped lang='scss'>
.title {
  text-align: left;
  margin: 5px 10px;
}
.other {
  text-align: center;
  width: 300px;
  margin: 0 auto;
  font-size: 30px;
  color: rgb(173, 172, 172);
  margin-top: 50px;
}
</style>