import request from "@/api/request";

export default {
    getBingImage(params){
        return request({
            url: `/bing/image`,
            method: "GET",
            params
        })
    }
}