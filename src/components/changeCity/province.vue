<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市中文或拼音"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from '@/api/index.js'
export default {
  //省份选择
  data() {
    return {
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "青岛",
        "莱芜",
        "淄博",
        "济南",
        "烟台",
        "枣庄",
        "东营",
        "潍坊",
        "济宁",
        "泰安",
        "威海",
        "日照"],
        searchWord: '',
        loading: false,
        cityDisabled: true,
    };
  },
  created() {
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName
        return item
      })
    })
  },
  methods: {
    changeProvinceActive(flag) {   //加锁实现两个下拉框不能同时展示：
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince(value) {     //选择省份后，让城市可以被点击，同时cityList相应更改：
      this.province = value.name;
      this.cityDisabled = false;
      this.cityList = value.cityInfoList;
    },
    changeCity(value) {        //选择城市后，更改city并且跳转页面：
      this.city = value.name;
      this.$store.dispatch('setPosition', value);
      this.$router.push({name: 'index'})  //跳转到首页；

    },
    remoteMethod(val) {
        //请求后端接口
        // console.log(val)
    },

  },
  components: {
    MSelect
  }
};
</script>

