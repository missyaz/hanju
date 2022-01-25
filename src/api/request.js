import axios from "axios";

const request = axios.create({
    baseURL: '/daily',
    timeout: 5000,
})

//请求拦截器
request.interceptors.request.use((config)=>{
    //请求前做些什么
    return config
})

//响应拦截器
request.interceptors.response.use((resp)=>{
    //对响应数据做点什么
    // console.log(resp)
    return resp.data;
})

export default request