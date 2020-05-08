<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com">美团网</a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>账号登录</span>
          <el-input
            :class="{error: error && !userName}"
            v-model="userName"
            placeholder="手机号"
            prefix-icon="profile"
          ></el-input>
          <el-input
            :class="{error: error && !password}"
            placeholder="密码"
            v-model="password"
            show-password
            prefix-icon="password"
          ></el-input>
        </p>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button class="btn-login" @click="submit">登 录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer class="footer">
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2020 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
//登录页：
import api from '@/api/index.js'
// import axios from 'axios'
import axios from '@/axios.js' // 下载axios后引入；

export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {         //点击登录，将输入的账号密码与后端进行效验；
      if (!this.password && !this.userName) {
        this.error = "请输入账号和密码";
        return false;
      } else if (!this.userName) {
        this.error = "请输入账号";
        return false;
      } else if (!this.password) {
        this.error = "请输入密码";
        return false;
      }

      api.login( {
        params: {
          userName: this.userName,
          password: this.password,
        }
      }).then(res => {
        // console.log(res)
        if(res.data.status == 'success') {  //成功后跳转首，并且同步vuex中的userName数据：
          this.$router.push({name: 'index'});  //这里要在头部信息中判断是否需要登录；
          this.$store.commit('setUserName', this.userName)
        } else {
          this.error = res.data.msg;
        }
      })
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>