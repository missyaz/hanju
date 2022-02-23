import request from "@/api/request";

export default {
    getDetail(){
        return request({
            url: '/mock/detail',
            method: 'GET'
        })
    }
}