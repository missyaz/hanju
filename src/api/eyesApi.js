import request from '@/api/request'

export default {
    getEyesVideo(page){
        return request({
            url: `/eyes/video`,
            method: "GET",
            params:  {
                page
            }
        })
    }
}