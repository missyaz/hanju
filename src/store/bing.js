import bingApi from "@/api/bingApi";

const state={
    bingImg:{}
}
const actions={
    async getBingImg(context,n){
        const params = {
            format:'js',      //格式为json
            idx:0,           //0表示当天，-1截止到明天，1截止到昨天
            n             //1-8表示返回数量，最多返回8张图片
        }
        let result = await bingApi.getBingImage(params)
        context.commit('GETBINGIMAGE',result.images[0])
    }
}
const mutations={
    GETBINGIMAGE(state,bingImg){
        state.bingImg = bingImg
    }
}

export default {
    state,
    actions,
    mutations
}