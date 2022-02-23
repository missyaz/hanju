import request from "@/api/request";

export default {
    // 获得首页数据
    getIndex(){
        return request({
            url: `/teleplay/index`,
            method: "GET"
        })
    },
    // 获得视频
    getVideo(teleplay,no){
        return request({
            url: `/teleplay/play/${teleplay}/${no}`,
            method: "GET"
        })
    },
    // 猜你喜欢
    getFavorite(category,limit){
        return request({
            url:`/teleplay/favorite/${category}/${limit}`,
            method: "GET"
        })
    },
    // 今日值得看
    getToday(category,limit=10) {
        return request({
            url:`/teleplay/today/${category}/${limit}`,
            method: "GET"
        })
    },
    // 电视剧详情
    getDetail(category,name){
        return request({
            url:`/teleplay/detail/${category}/${name}`,
            method: "GET"
        })
    }

}