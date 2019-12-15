<template>
  <div class="main">
    <div class="top">
      <div class="top-link">
        <img src="../../assets/images/left.svg" @click="goto('/')" />我的
      </div>
      <div class="user">
        <div class="user-img">
          <img src="../../assets/images/icon.svg" v-if="!name" alt />
          <img src="../../assets/images/user.svg" v-else alt />
        </div>
        <div class="user-desc login" v-if="!name" @click="goto('login')">立即登录</div>
        <div class="user-desc" v-else @click="quit">
          <div class="user-name">{{name}}</div>
          <div class="user-tel">{{phone}}</div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="middle-desc">
        <div>
          <span v-if="!name">---</span>
          <span v-else>
            <span class="orange">0.00</span>元
          </span>
        </div>
        <div>余额</div>
      </div>
      <div class="middle-desc">
        <div>
          <span v-if="!name">---</span>
          <span v-else>
            <span class="red">3</span>个
          </span>
        </div>
        <div>优惠</div>
      </div>
      <div class="middle-desc">
        <div>
          <span v-if="!name">---</span>
          <span v-else>
            <span class="green">6250</span>分
          </span>
        </div>
        <div>积分</div>
      </div>
    </div>
    <div class="transition"></div>
    <div class="menu">
      <img src="../../assets/images/order.svg" alt />我的订单
    </div>
    <div class="menu">
      <img src="../../assets/images/total .svg" alt /> 积分商城
    </div>
    <div class="menu">
      <img src="../../assets/images/elmb.svg" alt /> 饿了么会员卡
    </div>
    <div class="transition"></div>
    <div class="menu">
      <img src="../../assets/images/service.svg" alt /> 服务中心
    </div>
    <div class="menu">
      <img src="../../assets/images/elmb.svg" alt /> 下载饿了么APP
    </div>
  </div>
</template>

<script>
import { SET_USER } from "../../store/mutation-types";
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    //跳转
    goto(val) {
      this.$router.push(val);
    },
    //退出按钮
    quit() {
      let flag = confirm("您确定退出吗？");
      if (flag) {
        localStorage.removeItem("name");
        this.$store.commit(SET_USER, "");
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {
    //从state中调取用户信息
    phone() {
      return this.$store.state.user.phone;
    },
    name() {
      return this.$store.state.user.name;
    }
  }
};
</script>

<style scoped lang='scss'>
.main {
  width: 100%;
  text-align: left;
  background: rgb(228, 226, 226);
  .top {
    background: #0096ff;
    color: white;
    .top-link {
      position: relative;
      text-align: center;
      padding-top: 5px;
      font-size: 24px;
      font-weight: 600;

      img {
        position: absolute;
        width: 20px;
        height: 20px;
        left: 10px;
        top: 10px;
      }
    }
    .user {
      padding: 30px 10px;
      display: flex;
      .user-img {
        width: 60px;
        height: 60px;
        margin: 10px;
      }
      .login {
        margin-top: 30px;
      }
      .user-desc {
        height: 90px;
        .user-name {
          margin-top: 10px;
          font-size: 30px;
        }
      }
      .quit {
        margin: 10px 20px;
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .middle {
    background: white;
    height: 70px;
    display: flex;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    justify-content: space-between;
    .middle-desc {
      width: 30%;
    }
  }
}
.transition {
  height: 10px;
  width: 100%;
}

.menu {
  height: 20px;
  background: white;
  margin: 2px 0;
  padding: 10px;
  font-size: 18px !important;
  line-height: 20px;
  text-indent: 30px;
  position: relative;
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
</style>