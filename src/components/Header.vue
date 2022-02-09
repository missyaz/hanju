<template>
    <!--
        页面头部部分
            包括LOGO，分类（韩剧、日剧、泰剧、国产剧等），一个分来源搜索框

        可能存在的：
            历史记录，用户登录等

        TODO:
            搜索表单提交，获得数据
    -->
    <div class="header">
        <!--logo部分-->
        <div class="logo">
            <img src="~@/assets/img/logo.png"
                 alt=""
                 width="128px"
                 height="66px"
            >
        </div>
        <!--导航部分-->
        <div class="menu">
            <!--<el-breadcrumb separator="">-->
            <!--    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <!--    <el-breadcrumb-item to="/">-->
            <!--        频道-->
            <!--        <i class="el-icon-menu"></i>-->
            <!--    </el-breadcrumb-item>-->
            <!--    <el-breadcrumb-item to="/video">开眼视频</el-breadcrumb-item>-->
            <!--</el-breadcrumb>-->
            <el-menu
                     class="c-menu"
                     mode="horizontal" style="background: 0"
                     router
            >
                <el-menu-item index="1" :route="{path:'/'}">首页</el-menu-item>
                <el-tooltip placement="bottom" effect="light">
                    <div slot="content">
                        <el-link :underline="false" @click="hanju">韩剧</el-link>
                        <el-link :underline="false" @click="hanju">日剧</el-link>
                        <el-link :underline="false" @click="hanju">泰剧</el-link>
                    </div>
                    <el-menu-item index="2" route="" >频道<i class="el-icon-menu"></i></el-menu-item>
                </el-tooltip>
                <!--<el-menu-item index="2" route="" >频道<i class="el-icon-menu"></i></el-menu-item>-->
            </el-menu>
        </div>
        <!--搜索框-->
        <div class="search">
            <form class="search-form" action="/" method="post" target="_blank">
                <input class="search-text" type="text" value="value">
                <a class="search-top" href="javascript:void(0)"></a>
                <el-button round class="search-btn" onclick="onsubmit">全网搜</el-button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{

            }
        },
        methods:{
            hanju(){
                this.$router.push("/hanju")
                console.log("韩剧")
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/variable.less";
    .header{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        float: left;
        left: 11%;
        .logo{
            margin-left: -30px;
            margin-right: 10px;
        }
        .menu{
            .el-menu .is-active{
                background: 0;
                border: 0;
            }
            .c-menu{
                border: none;
                padding-bottom: 10px;
                .el-menu-item:hover{
                    background: 0;
                    color: #ff5f00;
                    i{
                        color: #ff5f00;
                    }
                }
            }
        }
        .search{
            border: 2px solid #ff5f00;
            top: 13px;
            width: 510px;
            left: 300px;
            position: absolute;
            height: 40px;
            border-radius: 22px;
            .search-form{
                height: 100%;
                padding: 0 130px 0 15px;
                .search-text{
                    display: block;
                    width: 100%;
                    border: 0;
                    background: 0;
                    line-height: 40px;
                    height: 40px;
                    outline: 0;
                    color: coral;
                    color: blue\9;
                    /*color: #999;*/
                    /*color: #fff\9;*/
                    font-size: 14px;
                }
                .search-top{
                    position: absolute;
                    right: 92px;
                    top: 0;
                    display: block;
                    width: 40px;
                    height: 40px;
                    background: url(//img.mgtv.com/imgotv-channel/5.5.6/pcweb-header/search/search-top.png) no-repeat center center
                }
                .search-btn{
                    position: absolute;
                    right: 2px;
                    top: 2px;
                    width: 90px;
                    height: 36px;
                    border: 0;
                    background: #ff5f00;
                    border-radius: 20px;
                    color: #fff;
                    font-size: 16px;
                    outline: 0;
                    cursor: pointer
                }
            }
        }
    }
</style>