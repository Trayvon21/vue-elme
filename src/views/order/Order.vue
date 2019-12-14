<template>
  <div class="main">
    <div class="desc" v-if="!name">
      <img src="../../assets/images/order.gif" alt />
      <div>登录后查看外卖订单</div>
      <van-button type="primary" class="btn" @click="gotoLogin">立即登录</van-button>
    </div>
    <div class="desc" v-else>无法获取订单</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    //跳转到登录界面
    gotoLogin() {
      this.$router.push("/login");
    }
  },
  mounted() {},
  watch: {},
  computed: {
    //获取state中的登录状态
    name() {
      return this.$store.state.user.name;
    }
  }
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
}
.desc {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  padding-top: 150px;
  img {
    width: 200px;
  }
  .btn {
    line-height: 30px;
    height: 30px;
    margin-top: 10px;
  }
}
</style>