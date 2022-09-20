import { isFunction } from '../../utils/is'
import axios, { AxiosRequestConfig, Canceler } from 'axios'

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>()

// 序列化参数
const stringify = (data: any) => {
  // TODO: WIP
  let ret = ''
  for (const key in data) {
    ret += key + '=' + data[key] + '&'
  }
  return ret
}

// 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) =>
  [config.method, config.url, stringify(config.data), stringify(config.params)].join('&')

export class AxiosCanceler {
  /**
   * @description: 添加请求
   * @param {Object} config
   */
  addPending(config: AxiosRequestConfig) {
    // 在请求开始前, 对之前的请求做检查取消操作
    this.removePending(config)
    const url = getPendingUrl(config)
    console.log('url', url)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        // 如果 pending 中不存在当前请求, 则添加进去
        if (!pendingMap.has(url)) pendingMap.set(url, cancel)
      })
  }

  /**
   * @description: 移除请求
   * @param {Object} config
   */
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)
    // pending 中如果存在当前请求标识, 需要取消当前请求, 并且移除记录
    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && cancel()
      pendingMap.delete(url)
    }
  }

  /**
   * @description: 清空所有pending
   */
  removeAllPending(config: AxiosRequestConfig) {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }

  /**
   *
   * @description: 重置
   */
  reset() {
    pendingMap = new Map<string, Canceler>()
  }
}