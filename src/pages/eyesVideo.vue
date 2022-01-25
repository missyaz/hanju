<template>
<!--
    视频页
    DONE：
        显示视频图片以及信息，点击图片，跳转到播放页面

    TODO：
        数据不足分页，后续可以自己写后端搞数据
-->
    <div class="kaiyan_daily_video">
        <!--
            DONE:
                该部分为页面视频部分
                要求：
                    1、显示缩略图片，点击后跳转播放页面

            TODO：
                视频分类显示：
                    通过不同的分类显示不同的视频内容
                    如：旅游、广告等分类
        -->
        <!--开眼标题-->
        <div class="title">
            <span class="video-title" style="font-family: 蝉羽真颜金戈;font-size: 20px;">每日开眼视频</span>
            <!--面包屑-->
            <!--该部分应该为视频分类-->
            <el-breadcrumb separator="|">
                <el-breadcrumb-item class="breadcrumb-item">首页</el-breadcrumb-item>
                <el-breadcrumb-item class="breadcrumb-item">活动管理</el-breadcrumb-item>
                <el-breadcrumb-item class="breadcrumb-item">活动列表</el-breadcrumb-item>
                <el-breadcrumb-item class="breadcrumb-item">活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!--开眼视频-->
        <div class="video-item" v-for="item in videoList" :key="item.id"
             @mouseover="over(item)"
             @mouseleave="leave(item)"
        >
            <img :src="item.cover" :alt="item.description"
                 :style="item.imgStyle"
                 @click="playVideo(item)"
            >

            <!--仅第一次会渲染-->
            <!--<p :class="item.senn ? 'video-title-detail':'video-title'">{{item.title}}</p>-->
            <!--悬浮框的内容-->
            <div
                 class="hover_con"
            >
                <p class="video-title" v-show="!item.seen">{{item.title}}</p>
                <p class="video-title-detail" v-show="item.seen">{{item.title}}</p>
                <span v-if="item.seen">{{item.description}}</span>
            </div>
        </div>
        <!--分页器-->
        <div class="v-pg">
            <el-pagination
                    small
                    background
                    layout="prev, pager, next"
                    :page-count="20"
                    @current-change="currentChange"
                    @prev-click="prevClick"
                    @next-click="nextClick"
            >
            </el-pagination>
        </div>
        <!--对话框-->
        <div class="dg">
            <el-dialog
                    :visible.sync="centerDialogVisible"
                    destroy-on-close
            >
                <span class ="dg-title"
                      slot="title">{{dialogTitle}}</span>
                <video
                        width="100%"
                        height="100%"
                        :src="playUrl"
                        controls
                ></video>
            </el-dialog>
        </div>
    </div>
</template>

<script>

    import eyesApi from "@/api/eyesApi";

    export default {
        name: "eysVideo",
        data(){
            return{
                seen:false,
                videoList: [],
                centerDialogVisible: false,  //dialog是否可见
                dialogTitle: "",
                playUrl: ""
            }
        },
        computed:{

        },
        mounted() {
            this.getVideo()
        },
        methods:{
            //构建视频对象
            async getVideo(page = 1){
                let result = await eyesApi.getEyesVideo(page)
                let itemList = result.itemList
                for (let i = 0;i < itemList.length;i++){
                    let data = itemList[i].data
                    if (data.id){
                        let videoInfo = {
                            id:data.id,                     //视频id
                            title:data.title,               //视频名称
                            description:data.description,   //视频描述
                            cover:data.cover.feed,          //视频封面
                            playUrl:data.playUrl,           //视频播放网址
                            seen:false,                     //视频详情是否可见，默认为false
                            imgStyle:{height:"85%"}         //视频封面的样式
                        }
                        this.videoList.push(videoInfo)
                    }
                }
            },
            //鼠标悬浮事件
            over(item){
                item.seen = true
                item.imgStyle={height: "55%"}
            },
            //鼠标离开事件
            leave(item){
                item.seen = false
                item.imgStyle={height: "85%"}
            },
            //播放视频
            playVideo(item){
                this.dialogTitle = item.title
                this.playUrl = item.playUrl
                this.centerDialogVisible = true
            },
            //上一页
            prevClick(current){
                console.log(current)
            },
            //跳转页码
            currentChange(current){
                this.getVideo(current)
                console.log(current)
            },
            //下一页
            nextClick(current){
                console.log(current)
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/mixin.less";
.kaiyan_daily_video{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .title{
        width: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        margin-bottom: 5px;
        .video-title{
            margin-left: 10px;
            margin-right: 20px;
            padding-top: 10px;
        }
        .breadcrumb-item{
            padding-top: 10px;
        }
    }
    .video-item{
        flex: 1;
        width: 18%;
        height: 200px;
        min-width: 18%;
        max-width: 18%;
        align-items: center;
        text-align: center;
        margin-left: 10px;
        margin-bottom: 5px;
        img{
            width: 100%;
            border-radius: 5px;
        }
        .hover_con{
            .video-title{
                font-size: 18px;
                font-family: '方正四海行书简';
                margin-top: 0;
                width: 80%;
                padding-left: 20px;
                #single-line-overflow;
            }
            .video-title-detail{
                font-size: 18px;
                font-family: '方正四海行书简';
                margin-top: 0;
                width: 80%;
                padding-left: 20px;
                #multi-line-overflow;
            }
            span{
                font-family: '汉仪家书简';
                font-size: 15px;
                width: 80%;
                margin-top: -10px;
                padding-left: 20px;
                #multi-line-overflow;
            }
        }
    }
    .v-pg{
        width: 100%;
        align-items: center;
        text-align: center;
    }
    /*@media screen and(min-width: 300px) and (max-width: 640px){*/
    /*    .dg{*/
    /*        font-size: 10px;*/
    /*    }*/
    /*}*/

}
</style>