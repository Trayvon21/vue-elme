<template>
  <div class="top">
    <div class="top-user">
      <img src="../../assets/images/position.svg" alt />
      <div v-if="address!==''" class="top-address" @click="update">{{address}}</div>
      <div v-else>获取当前定位</div>
      <div>
        <div @click="goTo" class="top-login" v-if="!name">登陆</div>
        <div @click="quit" class="top-login" v-else>退出</div>
      </div>
    </div>
    <div class="search-box">
      <input type="text" class="search" placeholder="搜索商店、商品" />
    </div>
    <div class="top-catalog">
      <div v-for="item in list" :key="item.id">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "辣鸭脖",
        "韩国炸鸡",
        "我是一只鸡",
        "脆皮鸡",
        "麦当劳",
        "老鸭粉丝",
        "牛排",
        "黄焖鸡"
      ]
    };
  },
  components: {},
  methods: {
    //更新地址
    update() {
      let flag=confirm('您确认更新地址吗？')
      flag?this.$store.dispatch("getCity"):"";
    },
    //跳转到登录界面
    goTo() {
      this.$router.push("/login");
    },
    //退出按钮
    quit() {
      let flag = confirm("您确定退出吗？");
      if (flag) {
        localStorage.removeItem("name");
        this.$store.commit("SET_USER", "");
      }
    }
  },
  mounted() {
    //当页面加载时进行axios请求
    this.$store.dispatch("getList");
  },
  watch: {},
  computed: {
    //获取地址与用户登录信息
    address() {
      return this.$store.state.address;
    },
    name() {
      return this.$store.state.user.name;
    }
  }
};
</script>

<style scoped lang='scss'>
.top {
  color: #fff;
  background: #0096ff;
  width: 100%;
  height: 120px;
  .top-user {
    padding: 10px;
    display: flex;
    position: relative;
    height: 20px;
    img {
      width: 18px;
    }
    .top-login {
      position: absolute;
      right: 15px;
    }
  }
  .search-box {
    height: 40px;
    .search {
      margin-left: 2%;
      outline: none;
      width: 95%;
      height: 30px;
      border-radius: 15px;
      text-align: center;
    }
  }
  .top-catalog {
    margin: 10px auto;
    width: 95%;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  }
  .slideshow {
    position: absolute;
    top: 120px;
  }
}
</style>