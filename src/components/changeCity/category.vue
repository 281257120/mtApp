<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl
      class="m-category-section"
      v-for="(item, index) in cityGroup"
      :key="index"
      :id="'city-' + index"
    >
      <dt>{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
      </dd>
    </dl> 
  </div>
</template>
<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: null
    };
  },
  created() {
    api.getCityList().then(res => {

      //将数据按照首字母归类：
      let obj = {};
      res.data.data.forEach((item, index) => {
        if (!obj[item.firstChar]) {
          obj[item.firstChar] = [];
        }
        obj[item.firstChar].push(item);
      });
      // console.log(obj)
      this.cityGroup = obj;
    });
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'})
    }
  }
  //   methods() {}
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>