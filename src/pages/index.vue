<template>
    <!--首页显示的内容-->
    <div class="index">
        <Column name="韩剧"></Column>
        <Column name="日剧"></Column>
        <Column name="泰剧"></Column>
    </div>
</template>

<script>
    import Column from '@/components/Column'
    export default {
        name: "index",
        components:{
            Column
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/variable.less";
    .index{
        background-color: @color-background;
    }
</style>