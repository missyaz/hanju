<template>
    <!--播放页-->
    <div class="player">
        <!--播放器主要部分-->
        <div class="player-primary">
            <el-row>
                <el-col :span="18">
                    <!--播放器-->
                    <iframe class="embed-responsive-item"
                            :src="`//dp.tvn.cc/m3u8dp.php?url=${video.playUrl}`"
                            scrolling="no"
                            allowfullscreen="true"
                            width="100%"
                            height="540px"
                            frameborder="0">
                    </iframe>
                </el-col>
                <el-col class="player-aside-r" :span="6">
                    <div class="series-wrap">
                        <div class="info">
                            <p class="title">{{video.name}}</p>
                            <span style="font-size: 12px">{{video.name}}-第{{NO}}集</span>
                        </div>
                        <div class="tips-wrap">
                            <span class="tips">温馨提示：切勿相信视频内任何网址信息</span>
                        </div>
                        <div class="series">
                            <!--<el-scrollbar-->
                            <!--        style="height: 217px"-->
                            <!--&gt;-->
                            <!--    <el-link class="column"-->
                            <!--             v-for="(noObj,index) in noObjList" :key="index"-->
                            <!--             :class="{'active':noObj.isActive}"-->
                            <!--             :href="`#${video.videoPath}${index+1}`"-->
                            <!--             :underline="false"-->
                            <!--    >第{{noObj.no}}集</el-link>-->
                            <!--</el-scrollbar>-->
                            <vuescroll :ops="ops" style="height: 400px">
                                <el-link class="column"
                                         v-for="(noObj,index) in noObjList" :key="index"
                                         :class="{'active':noObj.isActive}"
                                         :href="`#${video.videoPath}${index+1}`"
                                         :underline="false"
                                >第{{noObj.no}}集</el-link>
                            </vuescroll>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="content-warp">
            <!--猜你喜欢-->
            <div class="recommend">
                <div class="title-mip">
                    <h3>猜你喜欢</h3>
                </div>
                <div class="recommend-list">
                    <div class="recommend-item" v-for="(item,index) in favoriteList" :key="index" :title="item.name">
                        <!--<el-link :underline="false" :href="`/#${item.videoPath}1`">-->
                        <!--    <el-image :src="item.cover" style="height: 220px;width: 155px;"></el-image>-->
                        <!--    <span class="listbox-score">{{item.score}}</span>-->
                        <!--</el-link>-->
                        <router-link  :to="`${item.videoPath}1`">
                            <el-image :src="item.cover" style="height: 220px;width: 155px;"></el-image>
                            <span class="listbox-score">{{item.score}}</span>
                        </router-link>
                        <div class="list-title">
                            <span>{{item.name}}</span>
                            <p class="otherinfo">{{item.alias}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--今日值得看-->
            <div class="sildebar">
                <div class="title-mip">
                    <h3>今日值得看</h3>
                </div>
                <div class="widget-list">
                    <div @click="changePage(item)" class="widget-episode-item" v-for="(item,index) in todayList" :key="index">
                        <div class="widget-episode">
                            <span :title="item.name">{{item.name}}</span>
                        </div>
                        <em>{{item.count}}</em>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import hanjuApi from "@/api/hanjuApi";
    import vuescroll from 'vuescroll'
    export default {
        name: "play",
        components:{
          vuescroll
        },
        data(){
            return{
                ops:{
                    bar:{
                        disable:true
                    }
                },
                count: 1,                // 总集数
                noObjList:[],            // 集数
                video:{},                 // video对象
                category: this.$route.params.category,
                limit: 10,
                favoriteList:[],
                todayList:[]
            }
        },
        mounted() {
            this.getVideo()
            this.getFavorite()
            this.getToday()
        },
        computed:{
            NO(){
                if (this.$route.params.no>=100){
                    return this.$route.params.no
                }
                return ("0" + this.$route.params.no).slice(-2);
            }
        },
        methods:{
            // 获得视频
            async getVideo(){
                let teleplayName = this.$route.params.teleplayName
                let no = this.$route.params.no
                let response = await hanjuApi.getVideo(teleplayName,no)
                if (response.code === 20000){
                    this.video = response.data.data
                    this.count = this.video.videoCount
                    for (let i=1;i<this.count+1;i++){
                        let noObj = {
                            no:("0" + i).slice(-2),
                            isActive:false
                        }
                        if (i>=100){
                            noObj.no = i
                        }
                        if (parseInt(no) === i){
                            noObj.isActive=true
                        }
                        this.noObjList.push(noObj)
                    }
                }
            },
            // 猜你喜欢
            async getFavorite(){
                let res = await hanjuApi.getFavorite(this.category,this.limit)
                if (res.code === 20000){
                    this.favoriteList = res.data.data
                }
            },
            // 今日值得看
            async getToday(){
                let res = await hanjuApi.getFavorite(this.category,this.limit)
                if (res.code === 20000){
                    this.todayList = res.data.data
                }
            },
            // 跳转路由
            changePage(video){
                this.$router.push(video.videoPath)
                // console.log(video)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/mixin.less";
    .player{
        //播放部分
        .player-primary{
            background-color: black;
            .player-aside-r{
                height: 540px;
                .series-wrap{
                    .info{
                        color: white;
                        padding-left: 5px;
                        .title{
                            margin: auto;
                            font-size: 20px;
                        }
                    }
                    .tips-wrap{
                        border-left: solid coral 2px;
                        .tips{
                            color: pink;
                            font-size: 12px;
                            line-height: 12px;
                            padding-left: 5px;
                        }
                    }
                    .series{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        .column{
                            width: 20%;
                            color: white;
                            cursor: pointer;
                            margin: 5px 10px;
                            &:hover{
                                opacity: 0.7;
                            }
                        }
                        .active{
                            opacity: 0.7;
                        }
                    }
                }
            }
        }

        .content-warp{
            display: flex;
            //猜你喜欢
            .recommend{
                width: 70%;
                height: 580px;
                background: white;
                .title-mip{
                    h3{
                        position: relative;
                        padding-left: 20px;
                        font-weight: 700;
                        &:after{
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 3px;
                            width: 4px;
                            height: 20px;
                            background:red;

                        }
                    }
                }
                .recommend-list{
                    .recommend-item{
                        float: left;
                        display: block;
                        cursor: pointer;
                        padding-left: 10px;
                        margin-top: -10px;
                        width: calc((100% - 50px)/5);
                        height: 270px;
                        .listbox-score{
                            position: absolute;
                            right: 4px;
                            bottom: 4px;
                            width: 35px;
                            height: 28px;
                            text-align: center;
                            background-color: rgba(17, 17, 17, .8);
                            color: #f00;
                            font-size: 20px;
                            line-height: 28px;
                            font-weight: 400;
                            font-family: -webkit-pictograph
                        }
                        .list-title{
                            font-size: 14px;
                            .otherinfo{
                                padding-top: 5px;
                                margin-top: -5px;
                                font-size: 12px;
                                #single-line-overflow;
                            }
                        }
                    }
                }
            }
            //今日值得看
            .sildebar{
                float: left;
                /*margin-left: 20px;*/
                background: white;
                width: 340px;
                right: 0;
                height: 450px;
                position: absolute;
                .title-mip{
                    h3{
                        position: relative;
                        padding-left: 20px;
                        font-weight: 700;
                        &:after{
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 3px;
                            width: 4px;
                            height: 20px;
                            background:red;

                        }
                    }
                }
                .widget-list{
                    padding: 0 20px 0;
                    .widget-episode-item{
                        height: 36px;
                        line-height: 36px;
                        padding: 0 10px;
                        &:nth-child(2n+1){
                            background-color: #f4f4f4;
                        }
                        .widget-episode{
                            float: left;
                            font-size: 14px;
                            &:hover{
                                color: #FB807D;
                            }
                        }
                        em{
                            float: right;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>