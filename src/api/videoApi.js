import request from "@/api/request";

export default {
    getVideoInfo(){
        return request({
            url: `/video/`,
            method: "GET"
        })
    }
}