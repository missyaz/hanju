<template>
    <!--分类页-->
    <div class="category">
        <div class="carousel">
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category"
    }
</script>

<style scoped lang="less">
    .category{
        .carousel{
            position: fixed;
            left: 0;
            width: 100%;
            height: 300px;
            background-color: rgba(0,0,0,.65);
        }
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>