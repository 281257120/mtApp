<template>
  <div class="page-register">
    <div class="header">
      <header>
        <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-registerForm"
      >
        <el-form-item label="手机号" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
          <div class="pw-strength">
            <div :class="['bar',strengthClass ]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')" class="style">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
//注册页：
export default {
  data() {

    var validateUser = (rule, value, callback) => {
        if (value === "") {
            callback(new Error("请输入手机号"));
        } else if (value.length < 4 || value.length > 16) {
            callback(new Error("用户名必须为4-16位的数字、字母、下划线组成"));
        } else {
            callback();
        }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.rePassword !== "") {
          this.$refs.registerForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      strengthClass: "", //储存类名的强中弱；
      rules: {
        userName: [{validator: validateUser,trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
      }
    };
  },
  methods: {
    submitForm(formName) {  //点击提交：
        console.log(this.registerForm.password, this.registerForm.rePassword);
          this.$refs[formName].validate((valid) => {
          if (valid) {     //所有数据认证成功：调用接口传递参数；
            api.register({
                params: this.registerForm
            }).then(res => {
                console.log(res)
                if (res.data.status == 'success') {  //成功跳转登录页面：
                    this.$router.push({name: 'login'})
                } else {
                    alert(res.data.msg);
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    input() {    //根据密码规则动态改变class类名，实现动态渲染页面
        let regStr = /(\w)+/g;
        let regNum = /(\d)+/g;
        let reg = /_/g;
        let strongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regStr) && this.registerForm.password.match(regNum);
        if (this.registerForm.password.length > 20 || this.registerForm.password.length > 6 && strongth) {
            this.strengthClass = 'strong'
        } else if (this.registerForm.password.length < 6) {
            this.strengthClass = 'week';
        } else if (!this.registerForm.password) {
            this.strengthClass = '';
        } else{
            this.strengthClass = 'normal';
        }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>