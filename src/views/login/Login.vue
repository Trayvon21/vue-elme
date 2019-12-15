<template>
  <div class="main">
    <div class="title">登陆/注册</div>
    <van-cell-group class="input">
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('请输入用户名')"
        :error-message="checkUser"
        @blur="check('user')"
        @focus="clear('user')"
      />

      <van-field
        v-model="phone"
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入手机号"
        @click-right-icon="$toast('请输入您的手机号码')"
        :error-message="checkTel"
        @blur="check('tel')"
        @focus="clear('tel')"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        @focus="clear('passwd')"
        @blur="check('passwd')"
        :error-message="checkpasswd"
      />
    </van-cell-group>
    <div class="msg">温馨提醒：未注册饿了么账号登陆时将自动注册，且代表您已同意《用户服务协议》《隐私政策》</div>
    <div class="btn">
      <van-button @click="go('login')">登陆 / 注册</van-button>
      <van-button class="cancel" @click="go()">取消</van-button>
    </div>
  </div>
</template>

<script>
import { SET_USER } from "../../store/mutation-types";
export default {
  data() {
    return {
      checkTel: "",
      password: "",
      phone: "",
      checkpasswd: "",
      checkUser: "",
      username: ""
    };
  },
  components: {},
  methods: {
    //登录并跳转，将用户名和电话保存到state和localstorage
    go(val) {
      if (val === "login") {
        if (
          this.checkTel === "" &&
          this.password !== "" &&
          this.phone !== "" &&
          this.username !== ""
        ) {
          this.username.trim();
          let user = {
            name: this.username,
            phone: this.phone
          };
          this.$store.commit(SET_USER, user);
          localStorage.setItem("name", JSON.stringify(user));
          this.$router.push("/");
        } else {
          alert("输入有误，请重新输入");
        }
        if (this.phone === "") {
          this.checkTel = "手机号不能为空";
        }
        if (this.password === "") {
          this.checkpasswd = "密码不能为空";
        }
      } else {
        this.$router.push("/");
      }
    },
    //检测电话号码和密码是否合法，不合法的在失去焦点时提醒
    check(val) {
      if (val === "tel") {
        let count = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        let reg = new RegExp(count);
        let flag = reg.test(this.phone);
        flag ? (this.checkTel = "") : (this.checkTel = "手机号输入有误");
      }
      if (val === "passwd") {
        let count = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
        let reg = new RegExp(count);
        let flag = reg.test(this.password);
        flag
          ? (this.checkpasswd = "")
          : (this.checkpasswd = "密码长度要大于6位，由数字和字母组成");
      }
    },
    //获得焦点时取消提醒
    clear(val) {
      if (val === "tel") {
        this.checkTel = "";
      }
      if (val === "passwd") {
        this.checkpasswd = "";
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  position: relative;
}
.title {
  width: 100%;
  height: 150px;
  background: #0096ff;
  color: white;
  padding-top: 63px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: absolute;
}
.input {
  width: 100%;
  position: absolute;
  left: 50%;
  margin-left: -50%;
  top: 170px;
}
.msg {
  width: 80%;
  position: absolute;
  left: 50%;
  margin-left: -40%;
  top: 350px;
  text-indent: 2em;
}
.btn {
  button {
    color: white;
    width: 150px;
    background: #0096ff;
  }
  .cancel {
    background: gray;
  }
  margin-left: -150px;
  position: absolute;
  width: 300px;
  left: 50%;
  top: 430px;
  display: flex;
}
</style>