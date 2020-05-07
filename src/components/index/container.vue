<template>
  <div class="m-istyle">
    <dl>
      <dt>{{ nav_.title }}</dt>
      <dd class="active">{{ nav_.text }}</dd>
    </dl>
    <ul>
      <el-carousel height="297px" indicator-position="none">
        <el-carousel-item v-for="item in imgList" :key="item.img" class="picList">
          <li>
            <div class="data1">
              <img :src="item.img1" alt class="img" />
              <div>
                {{ item.num1}}
                <span>人想看</span>
                <p>{{ item.name1 }}</p>
              </div>
            </div>
            <div class="data2">
              <img :src="item.img2" alt class="img" />
              <div>
                {{ item.num2}}
                <span>人想看</span>
                <p>{{ item.name2 }}</p>
              </div>
            </div>
            <div class="data3">
              <img :src="item.img3" alt class="img" />
              <div>
                {{ item.num3}}
                <span>人想看</span>
                <p>{{ item.name3 }}</p>
              </div>
            </div>
            <div class="data4">
              <img :src="item.img4" alt class="img" />
              <div>
                {{ item.num4}}
                <span>人想看</span>
                <p>{{ item.name4 }}</p>
              </div>
            </div>
            <div class="data5">
              <img :src="item.img5" alt class="img" />
              <div>
                {{ item.num5}}
                <span>人想看</span>
                <p>{{ item.name5 }}</p>
              </div>
            </div>
          </li>
        </el-carousel-item>
      </el-carousel>
    </ul>

    <dl @mouseover="over" :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab }"
        :data-type="item.tab"
      >{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image" />
          <div class="product-info cbody">
            <p class="title">{{ item.title }}</p>
            <p class="sub-title">{{ item.sub_title }}</p>
            <p class="price-number numfont price">
              <span class="price-icon">￥</span>
              {{ item.price_info.current_price}}
            </p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'

export default {
  //电影、推荐模块
  data() {
    return {
      kind: "nj",
      resultsData: {},
      list: [
        {
          img:
            "https://img.meituan.net/phoenix/20d6c2ffba550d42fdc7c7ab3b3b71c82056992.jpg@740w_416h_1e_1c",
          title:
            "南站旁/漫乐城/省立儿童医院+密码入住+阳光曝晒床上4件套+独立公寓家具家电齐全",
          sub_title: "整套1居室·可住2人 | 宁国路工大美食一条街",
          price_info: {
            current_price: "124",
            old_price: ""
          }
        },
        {
          img:
            "https://img.meituan.net/phoenix/41219460cc42f54111fbdc06ab839c08333102.jpg@740w_416h_1e_1c",
          title: "夏花(投影房)-生若夏花般绚烂 投影幕布",
          sub_title: "整套1居室·可住3人 | 无锡太湖风景区",
          price_info: {
            current_price: "135",
            old_price: ""
          }
        },
        {
          img:
            "https://img.meituan.net/iphoenix/57eb3d5c9d94ddcedad2a92e44aaf81b139165.jpg@740w_416h_1e_1c",
          title:
            "HugeHouse/KAWS/潮牌同款/真•市中心/三阳广场/地铁口/高层夜景/落地窗/投影巨屏",
          sub_title: "整套1居室·可住2人 | 无锡火车站/崇安寺",
          price_info: {
            current_price: "228",
            old_price: ""
          }
        },
        {
          img:
            "http://p0.meituan.net/iphoenix/8184d1926be5bb72201d5fa4a8177b3b936507.jpg@740w_416h_1e_1c",
          title:
            " 【有舍】融创乐园太湖悦溪公寓-田园风-融创水世界、雪世界、海世界、融创茂、太湖秀、酒吧街、三国城、水浒城、鼋头渚",
          sub_title:
            "整套1居室·可住2人 | 无锡太湖风景区整套1居室·可住2人 | 宁国路工大美食一条街",
          price_info: {
            current_price: "208",
            old_price: ""
          }
        },
        {
          img:
            "https://img.meituan.net/phoenix/ff794573f95399281c24bf42955b47152319326.jpg@740w_416h_1e_1c",
          title: "万象-融创文旅城，雪世界，水世界，地铁一号线，江南大学",
          sub_title: "整套1居室·可住2人 | 无锡太湖风景区",
          price_info: {
            current_price: "128",
            old_price: ""
          }
        },
        {
          img:
            "https://img.meituan.net/phoenix/6d0405c76b53a9758d6b48bfb7c480581018057.jpg@740w_416h_1e_1c",
          title:
            "新吴区宝龙广场A栋#浪漫约会#少女心，近南长街火车站新区人才市场东亚风情街，投影大屏，繁华商场高层，密码锁自行入住",
          sub_title: "整套1居室·可住2人 | 无锡高新开发区",
          price_info: {
            current_price: "124",
            old_price: ""
          }
        }
      ],
      imgList: [
        {
          img1:
            "//p0.meituan.net/movie/fcabb91dbae511e8a32af1deeb0c1cec204154.jpg@214w_297h_1e_1c",
          num1: "32775",
          name1: "大红包",
          img2:
            "//p1.meituan.net/movie/51d3b0c39d082db32c3534cb68338b441447222.png@214w_297h_1e_1c",
          num2: "13759",
          name2: "灰烬重生",
          img3:
            "//p0.meituan.net/movie/a06c36755e3e4e902235e9904cc1551b4677926.jpg@214w_297h_1e_1c",
          num3: "10926",
          name3: "印度奇游",
          img4:
            "//p0.meituan.net/moviemachine/0c3f4cd8caf0f0848a54e3081349bdac22615677.jpg@214w_297h_1e_1c",
          num4: "10207",
          name4: "魔法学院",
          img5:
            "//p1.meituan.net/movie/b907eadfcafa0bd594b3d4e44952c9cc18752.jpg@214w_297h_1e_1c",
          num5: "8017",
          name5: "今生只为遇见你"
        },
        {
          img1:
            "//p1.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@214w_297h_1e_1c",
          num1: "6227",
          name1: "奇妙王国",
          img2:
            "//p0.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@214w_297h_1e_1c",
          num2: "5682",
          name2: "小公主艾薇",
          img3:
            "//p1.meituan.net/movie/174c45cf85694f065224ee38b29282903015976.jpg@214w_297h_1e_1c",
          num3: "1380",
          name3: "愤怒的心",
          img4:
            "//p1.meituan.net/moviemachine/e10ceb90d2c06d3524d01d573ccf88fb7514998.jpg@214w_297h_1e_1c",
          num4: "15411",
          name4: "金蝉降魔",
          img5:
            "//p0.meituan.net/movie/1907a5af889e44236fd80952980d36e13257090.jpg@214w_297h_1e_1c",
          num5: "3936",
          name5: "82号古宅"
        }
      ]
    };
  },
  props: ["nav", "nav_"],
  created() {
    api.resultsByKeywords().then(res => {
      // console.log(res)
      this.resultsData = res.data.data
    })
  },
  methods: {
    over(e) {
      // console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      // console.log(tagName);
      if (tagName !== "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取数据：ajax请求
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";

</style>