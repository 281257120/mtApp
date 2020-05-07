<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />
      {{ $store.state.position.name }}
      <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>[
      <a href="#" v-for="(item, index) in nearCity" :key="index"> {{item.name}} </a>]
     
    </div>
    <div class="m-user" v-if="!$store.state.userName">
      <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
      <router-link class="register" :to="{name: 'register'}">注册</router-link>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  //导航条

  data() {
    return {
      nearCity: [],
    }
  },
  watch: { //监听位置信息放生改变后，描述也进行改变：
    "$store.state.position" : function () {
      this.nearCity = this.$store.state.position.nearCity;
    }
  },
  created() {  //组件创建时vuex来获取地理位置信息：
    api.getCruPosition().then(res => {
      // console.log(res)
      this.$store.dispatch('setPosition', res.data.data);
      this.nearCity = res.data.data.nearCity
    })
  }
}
</script>
