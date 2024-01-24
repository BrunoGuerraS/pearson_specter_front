import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const AxiosInterceptor = () => {
    // console.log("AxiosInterceptor")
    const updateHeader = (request: AxiosRequestConfig) => {
        const token = '123123123131'
        const newHeaders = {
            Authorization: token,
            "Content-type": "application/json"
        }
        request.headers = newHeaders
        return request
    }
    axios.interceptors.request.use((request)=>{
        // console.log("starting request", request)
        if (request.url?.includes("assets")) return request
        return request 
    })
    axios.interceptors.response.use((response: AxiosResponse)=> {
        return response
    })
}