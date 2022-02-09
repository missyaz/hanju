<template>
    <!--播放页-->
    <div class="player">
        <!--播放器主要部分-->
        <div class="player-primary">
            <el-row>
                <el-col :span="18">
                    <!--播放器-->
                    <iframe class="embed-responsive-item"
                            src="//dp.tvn.cc/m3u8dp.php?url=https://vod8.wenshibaowenbei.com/20211006/NoZ4c7Nf/index.m3u8"
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
                            <p class="title">不可杀</p>
                            <span style="font-size: 12px">不可杀-第01集</span>
                        </div>
                        <div class="tips-wrap">
                            <span class="tips">温馨提示：切勿相信视频内任何网址信息</span>
                        </div>
                        <div class="series">
                            <span class="column active">第01集</span>
                            <span class="column">第02集</span>
                            <span class="column">第03集</span>
                            <span class="column">第04集</span>
                            <span class="column">第05集</span>
                            <span class="column">第06集</span>
                            <span class="column">第07集</span>
                            <span class="column">第08集</span>
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
                    <div class="recommend-item">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span style="font-weight: bold">太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span style="font-weight: bold">太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span style="font-weight: bold">太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span style="font-weight: bold">太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span style="font-weight: bold">太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item" title="太宗李明远">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span>太宗李明远</span>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                    <div class="recommend-item" title="太宗李明远">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <span>太宗李明远</span>
                            <p class="otherinfo">태종 이방원태종 이방원태종 이방원태종 이방원태종 이방원태종 이방원</p>
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
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                    <div class="widget-episode-item">
                        <div class="widget-episode">
                            <span title="雪滴花">雪滴花</span>
                        </div>
                        <em>16集全</em>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "play",
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
                height: 640px;
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