<template>
  <div id="app">
      <div class="background-image"
           :style="{
            background: `url(${imgUrl}) no-repeat center center`
       }"
      ></div>
      <!--布局-->
      <!--外层容器-->
      <el-container
              class="container"
              :style="containerStyle"
      >
        <!--顶部-->
        <el-header>
            <Header></Header>
        </el-header>

      <div class="content">
          <router-view></router-view>
      </div>

        <!--底部-->
        <el-footer>
            <Footer></Footer>
        </el-footer>
      </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bingApi from "@/api/bingApi"
// import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
      Footer,
      Header
  },
  data(){
      return{
          n:1,     //返回背景图数量
          imgUrl:'',
          minWidth: "1250px",
          containerStyle:{
              width: "80%",
              position: "relative",
              left: "10%",
              top: "0",
          }
      }
  },
  created() {
      this.getBingImage(this.n)
  },
  mounted() {
      window.onresize = ()=>{
          let windowWidth = window.innerWidth
          if (windowWidth < this.minWidth){
              this.containerStyle = {}
          }else {
              this.containerStyle = {
                  width: "80%",
                  position: "relative",
                  left: "10%",
                  top: "0",
              }
          }
      }
  },
  computed:{

  },
  methods:{
      //获得必应每日壁纸
      async getBingImage(n){
          const params = {
              format:'js',      //格式为json
              idx:0,           //0表示当天，-1截止到明天，1截止到昨天
              n             //1-8表示返回数量，最多返回8张图片
          }
          let result = await bingApi.getBingImage(params)
          let imgUrl = result.images[0].url
          const bingUrl = "http://cn.bing.com"
          this.imgUrl = bingUrl + imgUrl
      },
  }
}
</script>

<style scoped lang="less">
    /*#app{*/
    /*    min-width: 1250px;*/
    /*}*/
    .background-image{
      /*background: url("https://api.ixiaowai.cn/mcapi/mcapi.php") no-repeat center center;*/
      background-size: 100%;
      width: 100%;
      height: 100%;
      position: fixed;
    }
    .content{
        height: 100%;
        background: rgba(255,255,255,.58);
    }

</style>
