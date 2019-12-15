<template>
  <div class="main">
    <router-view />
    <div class="bottom-nav">
      <div class="b-link" @click="goto('/')" :class="{'active':active==='/'}">
        <div>
          <div>
            <van-icon class="icon" name="shopping-cart" />
          </div>
          <div class="title">外卖</div>
        </div>
      </div>
      <div class="b-link" @click="goto('/order')" :class="{'active':active==='/order'}">
        <div>
          <div>
            <van-icon class="icon" name="balance-list" />
          </div>
          <div class="title">订单</div>
        </div>
      </div>
      <div class="b-link" @click="goto('/my')" :class="{'active':active==='/my'}">
        <div>
          <div>
            <van-icon class="icon" name="friends" />
          </div>
          <div class="title">我的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "/"
    };
  },
  components: {},
  methods: {
    goto(path) {
      if (path !== this.$route.path) {
        this.$router.push(path);
        this.active = path;
      }
    },
    getJSON() {
      if (localStorage.getItem("name")) {
        let user = JSON.parse(localStorage.getItem("name"));
        this.$store.commit("SET_USER", user);
      }
    }
  },
  created() {},
  mounted() {
    this.getJSON();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  height: 667px;
  margin: 0 auto;
}
.bottom-nav {
  height: 50px;
  width: 100%;
  background: white;
  border-top: 1px solid rgb(207, 207, 207);
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
}

.b-link {
  width: 33%;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
}
.active {
  div {
    color: #0096ff !important;
  }

  i {
    color: #0096ff !important;
  }
}
.title {
  font-size: 12px;
  color: gray;
}
.icon {
  color: gray;
}
</style>