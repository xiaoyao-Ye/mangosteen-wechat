import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
// import router from '../router/index'
import { AxiosCanceler } from './helper/axiosCancel'
import { checkStatus } from './helper/checkStatus'
import { Method } from './helper/types'
// import { showFullScreenLoading, tryHideFullScreenLoading } from './helper/loading'
// import { ElMessage } from 'element-plus'
import settle from 'axios/lib/core/settle'
import buildURL from 'axios/lib/helpers/buildURL'
import { isDomain } from '../utils/is'

const axiosCanceler = new AxiosCanceler()

const config = {
  // 默认地址
  // baseURL: 'http://yeyaoyao.icu',
  baseURL: 'http://localhost:3000',
  // 设置请求超时时间
  timeout: 10000,
  // 跨域的时候允许携带凭证
  withCredentials: true,
  // 适配器
  adapter: (config: AxiosRequestConfig): AxiosPromise => {
    return new Promise((resolve, reject) => {
      // let settle = require('axios/lib/core/settle')
      // let buildURL = require('axios/lib/helpers/buildURL')
      let url = buildURL(config.url, config.params, config.paramsSerializer)
      if (!isDomain(config.url ?? '')) url = config.baseURL + url
      uni.request({
        url,
        method: (config.method?.toUpperCase() ?? 'GET') as Method,
        header: config.headers,
        data: config.data,
        // dataType: config.dataType,
        dataType: 'json',
        responseType: config.responseType,
        // sslVerify: config.sslVerify,
        // sslVerify: true,
        complete(response: any) {
          const result = {
            data: response?.data,
            status: response?.statusCode,
            statusText: response?.errMsg ?? 'request:ok',
            headers: response?.header,
            config,
          }
          settle(resolve, reject, result)
        },
      })
    })
  },
}

const service = axios.create(config)

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // showFullScreenLoading()
    // * 将当前请求添加到 pending 中
    axiosCanceler.addPending(config)
    const getToken = () => {}
    const token = getToken()
    return { ...config, headers: { Authorization: `Bearer ${token}` } }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, config } = response
    // * 在请求结束后，移除本次请求，并关闭请求 loading
    axiosCanceler.removePending(config)
    // tryHideFullScreenLoading()
    if (data.code === 401) {
      checkStatus(401)
      // TODO: reset Token
      // router.replace({ path: '/login' })
      return Promise.reject(data)
    }
    if (data.code !== 200) {
      // ElMessage.error(data.msg)
      // return Promise.reject(data)
      throw data
    }
    return data
  },
  (error: AxiosError) => {
    // tryHideFullScreenLoading()
    const { response } = error
    // 根据响应的错误状态码, 做不同的处理
    if (response) return checkStatus(response.status)
    // 服务器结果都没有返回(可能服务器错误可能客户端断网), 断网处理: 可以跳转到断网页面
    // if (!window.navigator.onLine) return router.replace({ path: '/500' })
    return Promise.reject(error)
  },
)

export default service
