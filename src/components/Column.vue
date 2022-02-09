<template>
    <!--栏目-->
    <div class="column">
        <!--标题-->
        <div class="item-title">
            <h2 style="font-weight: lighter">值得看{{name}}精选</h2>
            <i class="iconfont icon-cl-icon-right"></i>
            <ul class="tab">
                <li :class="active === 1? 'active':''" @click="changeContent(1)">最近更新</li>
                <li :class="active === 2? 'active':''" @click="changeContent(2)">大家在看</li>
                <span class="pull-right">
                    <!--跳转到相应的页面-->
                    <a href="/">{{name}}<i class="iconfont icon-more"></i></a>
                </span>
            </ul>
        </div>
        <!--内容-->
        <div class="item-content">
            <el-row class="row-content">
                <el-col :span="4">
                    <div class="listbox" title="太宗李明远">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span>太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="listbox">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col>
                <el-col :span="4">
                    <div class="listbox">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row class="row-content">
                <el-col :span="4">
                    <div class="listbox">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span>太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="listbox">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col><el-col :span="4">
                <div class="listbox">
                    <el-link :underline="false">
                        <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                        <span class="listbox-hover"></span>
                        <span class="listbox-remarks">第12集</span>
                        <span class="listbox-score">6.8</span>
                    </el-link>
                    <div class="list-title">
                        <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                        <p class="otherinfo">태종 이방원</p>
                    </div>
                </div>
            </el-col>
                <el-col :span="4">
                    <div class="listbox">
                        <el-link :underline="false">
                            <el-image src="//pic.tvn.cc/Uploads/vod/61b69f61280d5.jpg"></el-image>
                            <span class="listbox-hover"></span>
                            <span class="listbox-remarks">第12集</span>
                            <span class="listbox-score">6.8</span>
                        </el-link>
                        <div class="list-title">
                            <el-link><span style="font-weight: bold">太宗李明远</span></el-link>
                            <p class="otherinfo">태종 이방원</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Column",
        props:{
            name: String
        },
        data(){
            return{
                active: 1,
            }
        },
        mounted() {
            console.log(this.name)
        },
        methods:{
            //切换内容
            changeContent(value){
                if (value === 2){
                    //内容变为 “大家在看”

                    //改激活标签状态
                    this.active = 2
                }else {
                    this.active = 1
                }
            },
            //添加类名
            setClass(){
                return 'active';
            }
        }
    }
</script>

<style scoped lang="less">
    .column{
        .item-title{
            display: flex;
            align-items: center;
            margin-left: 5px;
            margin-bottom: -10px;
            i{
                font-size: 30px;
                position: relative;
                margin: 2px 5px 0 5px;
            }
            .tab{
                display: flex;
                list-style-type: none;
                align-items: center;
                cursor: pointer;
                li:first-of-type{
                    margin-left: -40px;
                }
                li{
                    margin-right: 20px;
                }
                .active{
                    color: blue;
                    border-bottom: solid 2px blue;
                }
                .pull-right{
                    position: absolute;
                    right: 10px;
                    a{
                        cursor: pointer;
                        &:hover{
                            color: #ff5f00;
                            border-bottom: solid 2px #ff5f00;
                        }
                    }
                    .icon-more{
                        font-size: 12px;
                    }
                }
            }
        }
        .item-content{
            margin: 5px 5px;
            .row-content{
                .listbox{
                    margin-right: 10px;
                    .listbox-hover{
                        position: absolute;
                        width: 38px;
                        height: 33px;
                        background: url("//i3.letvimg.com/lc07_live/201808/31/14/10/1535695858344new.png") -1000px -1000px no-repeat;
                        top: 0;
                        right: 6px;
                        z-index: 10
                    }
                    .listbox-remarks{
                        position: absolute;
                        left: 4px;
                        bottom: 4px;
                        padding: 0 4px;
                        background-color: rgba(17, 17, 17, .8);
                        font-size: 12px;
                        line-height: 20px;
                        color: #fff;
                    }
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
                        .otherinfo{
                            margin-top: 2px;
                            font-size: 12px;
                        }
                    }
                }
            }

        }
    }
</style>