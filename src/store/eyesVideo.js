import eyesApi from "@/api/eyesApi";

const state={
    videoInfoList:[]
}
const actions={
    async getVideoInfo(context){
        eyesApi.getEyesVideo().then((response)=>{
            console.log(response);
        })
        let result = await eyesApi.getEyesVideo()
        context.commit("GETEYESVIDEO",result.itemList)
    }
}
const mutations={
    GETEYESVIDEO(state,itemList){
        state.videoInfoList = itemList
    }
}

export default {
    state,
    actions,
    mutations
}