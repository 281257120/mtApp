
// axios拦截:(使域名、appkey值不用每次都输入)

import axios from 'axios'
axios.defaults.baseURL = 'https://api.duyiedu.com' // 基础域名每次获取数据时会在后面自动拼接；
axios.interceptors.request.use(function (config) {
  // 发送请求之前做什么：
  // console.log(config);
  config.params = {
    ...config.params, // 解构赋值;
    appkey: '281257120l__1586344407679'
  }
  return config
}, function (error) {
  // 队请求错误做什么：
  return Promise.reject(error)
})
export default axios
