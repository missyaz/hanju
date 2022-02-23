<template>
    <div class="detail">
        <!--
            分析：
                三个栏目
                    第一个栏目分为左右结构，左边放图片，右边是详情
        -->
        <div class="tp-info">
            <!--图片-->
            <div class="tp-img">
                <el-image
                        style="width: 240px;height: 350px"
                        :src="detail.cover"></el-image>
                <em>{{detail.count}}</em>
            </div>
            <div class="tp-detail">
                <div class="tp-title">
                    <h3>{{detail.name}}</h3>
                    <div class="score">
                        <i>豆瓣</i>
                        <span class="text">{{detail.score}}</span>
                    </div>
                </div>
                <div class="tp-Desc">
                    <li class="alias">别名：{{detail.alias}}</li>
                    <li class="intro">导演：{{detail.director}}</li>
                    <li class="starring">主演：{{detail.actors}}</li>
                    <li>
                        <label >地区：{{detail.area}}</label>
                        <label >语言：{{detail.language}}</label>
                    </li>
                    <li>
                        <label >分类：{{detail.category}}</label>
                        <label >类型：{{detail.type}}</label>
                    </li>
                    <li>
                        <label >时间：{{detail.time}}</label>
                        <label >年代：{{detail.year}}</label>
                    </li>
                    <li class="intro">
                        剧情：<span class="detail-desc"

                    >{{detail.desc}}</span>
                    </li>
                </div>
                <div class="tp-btn">
                    <el-button class="play-now"
                               round
                               size="small"
                               style="height: 40px;width: 120px"
                               @click="play()"
                    >立即播放</el-button>
                </div>
            </div>
        </div>
        <div class="content-warp">
            <!--猜你喜欢-->
            <div class="recommend">
                <div class="title-mip">
                    <h3>猜你喜欢</h3>
                </div>
                <div class="recommend-list">
                    <div class="recommend-item" v-for="(item,index) in favoriteList" :key="index" :title="item.name">
                        <router-link  :to="`${item.videoPath}`">
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
    // import mockApi from "@/api/mockApi"
    import hanjuApi from "@/api/hanjuApi";
    export default {
        name: "detail",
        data(){
            return{
                detail:{},
                category: this.$route.params.category,
                limit: 10,
                todayList:[],
                favoriteList:[],
                video:{}
            }
        },
        mounted() {
            this.getFavorite()
            this.getToday()
            this.getDetail()
        },
        methods:{
            async getDetail(){
                let category = this.$route.params.category
                let name = this.$route.params.teleplayName
                let res = await hanjuApi.getDetail(category,name);
                if (res.code === 20000){
                    this.detail = res.data.data
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
            },
            // 播放
            play(){
                this.$router.push(this.$route.path+"1")
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/mixin";
    .detail{
        margin-top: 10px;
        .tp-info{
            display: flex;
            background-color: white;
            .tp-img{
                margin: 10px;
                em{
                    position: absolute;
                    color: #fff;
                    padding: 0 10px;
                    left: 10px;
                    background-color: #fd3838d4;
                    line-height: 24px;
                    top: 356px;
                    font-weight: bold;
                }
            }
            .tp-detail{
                margin: 10px 0 0 20px;
                width: 875px;
                float: right;
                .tp-title{
                    margin-top: -20px;
                    h3{
                        font-size: 30px;
                        display: inline-block;
                        line-height: 40px;
                        overflow: hidden;
                    }
                    .score{
                        float: right;
                        color: #ff6d3e;
                        border: 1px #2f8e44 solid;
                        border-radius: 4px;
                        position: relative;
                        line-height: 28px;
                        height: 28px;
                        top: 30px;
                        margin: 8px 0;
                        background: rgba(255,255,255,0.65);
                        cursor: default;
                        vertical-align: center;
                        i{
                            color: #e8b99f;
                            padding: 0 4px;
                            font-size: 14px;
                            background: #2f8e44;
                            vertical-align: top;
                            position: absolute;
                            line-height: 28px;
                            height: 28px;
                        }
                        .text{
                            display: inline-block;
                            font-size: 20px;
                            padding: 0 7px;
                            vertical-align: top;
                            margin-left: 30px;
                            font-weight: bold;
                            font-family: -webkit-pictograph;
                        }
                    }
                }
                .tp-Desc{
                    margin-top: -20px;
                    li{
                        list-style-type: none;
                        float: left;
                        display: inline;
                        width: 700px;
                        #single-line-overflow;
                        font-size: 14px;
                        line-height: 24px;
                        padding: 4px 0 5px 0;
                        label{
                            width: 44%;
                            overflow: hidden;
                            float: left;
                            display: inline;
                            margin-right: 4%;
                        }
                    }
                }
                .tp-btn{
                    position: absolute;
                    float: left;
                    font-size: 15px;
                    top: 340px;
                    .play-now{
                        background: #ff5f00;
                        color: #ffffff;
                        font-size: 14px;
                        line-height: 24px;
                    }
                }
            }
        }
        .content-warp{
            margin-top: 20px;
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
                            background:red
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