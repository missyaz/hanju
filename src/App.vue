<template>
  <div id="app">
      <div class="background-image"
           :style="{
            background: `url(${imgUrl}) no-repeat center center`
       }"
      ></div>
      <!--布局-->
      <!--外层容器-->
      <el-container>
          <!--顶部-->
          <el-header class="header-wrap" :class="{'fixed':isFixed}">
            <Header></Header>
          </el-header>
          <el-main>
              <div class="content"
                   :style="contentStyle"
                   ref="scrollone">
                  <router-view></router-view>
              </div>
          </el-main>
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
          isFixed: false,
          contentStyle:{
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
      // 页面大小改变
      window.onresize = ()=>{
          let windowWidth = window.innerWidth
          if (windowWidth < this.minWidth){
              this.contentStyle = {}
          }else {
              this.contentStyle = {
                  width: "80%",
                  position: "relative",
                  left: "10%",
                  top: "0",
              }
          }
      }
      // 监听页面的滚动时间
      window.addEventListener("scroll",this.handleScroll)
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

      // 处理滚动
      handleScroll(){
          // 获取滚动时的高度
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

          let oneHeight = this.$refs.scrollone.offsetTop;
          console.log(oneHeight)
          this.isFixed = scrollTop > oneHeight ? true: false;
      }
  }
}
</script>

<style scoped lang="less">
    @import "~@/assets/less/variable.less";
    #app{
        .background-image{
            background-size: 100%;
            width: 100%;
            height: 100%;
            position: fixed;
        }
        .el-container{
            .header-wrap{
                /*background-color: white;*/
            }
            /*.header-wrap.fixed{*/
            /*    position: fixed;*/
            /*    top: 0;*/
            /*    width: 100%;*/
            /*    !*z-index: 999;*!*/
            /*}*/
        }
        .content{
            height: 100%;
            padding-top: 10px;
        }
    }
</style>
