<template>
    <!--首页显示的内容-->
    <div class="index">
        <Column name="韩剧" :item-list="hanjuList"></Column>
        <Column name="日剧" :item-list="rijuList"></Column>
        <Column name="泰剧" :item-list="taijuList"></Column>
    </div>
</template>

<script>
    import Column from '@/components/Column'
    import hanjuApi from "@/api/hanjuApi";
    export default {
        name: "index",
        components:{
            Column
        },
        data(){
            return{
                hanjuList:[],
                rijuList:[],
                taijuList:[]
            }
        },

        mounted() {
            this.getItemList();
        },
        methods:{
            // 获得首页数据
            async getItemList(){
                let res = await hanjuApi.getIndex()
                let teleplayList = res.data.data
                for (let i = 0; i < teleplayList.length;i++){
                    let teleplay = teleplayList[i]
                    if (teleplay.category === 0){
                        this.hanjuList.push(teleplay)
                    }else if (teleplay.category === 1){
                        this.rijuList.push(teleplay)
                    }else {
                        this.taijuList.push(teleplay)
                    }
                }
            },
        }
    }
</script>

<style scoped lang="less">
    @import "~@/assets/less/variable.less";
    .index{
        background-color: @color-background;
    }
</style>