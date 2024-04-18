import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { notification } from 'antd'

class XMRequest {
    constructor (baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use(config => {
            return config
        }, err => {
            return Promise.reject(err)
        })

        this.instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            if(err && err.response) {
                // TODO 全局提示
                this.handleError(err)
            }
            return Promise.reject(err)
        })
    }

    handleError (err) {
        let message = '发生未知错误';

        switch(err.response.status) {
            case 400:
                message = '请求错误'
                break
            case 401:
                message = '未授权，请登录'
                break
            case 403:
                message = '拒绝访问'
                break
            case 404:
                message = '请求(地址/方法)出错'
                break
            default:
                message = '其他网络错误信息'
                break
        }

        notification.error({
            message: '请求错误',
            description: message
        })
    }

    request (config) {
        return this.instance.request(config)
    }

    get (config) {
        return this.request({...config, method: 'GET'})
    }

    post (config) {
        return this.request({...config, method: 'POST'})
    }
}

export const xmRequest = new XMRequest(BASE_URL, TIMEOUT)