import { request } from '../index'
import { UserDto, WeChatDto, WeChatVo, TagVo, TagDto, BillDto } from './entity'

export class Auth {
  static signIn(data?: UserDto) {
    return request<void>({
      url: `/api/v1/auth/signIn`,
      method: 'POST',
      data: data,
    })
  }

  static sendEmail(data?: UserDto) {
    return request<void>({
      url: `/api/v1/auth/signUp`,
      method: 'POST',
      data: data,
    })
  }

  /** 登录-微信授权登录 */
  static login(data?: WeChatDto) {
    return request<WeChatVo>({
      url: `/api/v1/auth/login`,
      method: 'POST',
      data: data,
    })
  }
}

export class Tags {
  static getTags(params?: { pageNum?: number; pageSize?: number }) {
    return request<TagVo>({
      url: `/api/v1/tags`,
      method: 'GET',
      params: params,
    })
  }

  static createTag(data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags`,
      method: 'POST',
      data: data,
    })
  }

  static updateTag(path: { id: number }, data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'PATCH',
      data: data,
    })
  }

  static deleteTag(path: { id: number }) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'DELETE',
    })
  }
}

export class Bill {
  static getBills(params?: { pageNum?: number; pageSize?: number }) {
    return request<void>({
      url: `/api/v1/bill`,
      method: 'GET',
      params: params,
    })
  }

  static createBill(data?: BillDto) {
    return request<void>({
      url: `/api/v1/bill`,
      method: 'POST',
      data: data,
    })
  }

  static getBillSummary(params?: { pageNum?: number; pageSize?: number }) {
    return request<void>({
      url: `/api/v1/bill/summary`,
      method: 'GET',
      params: params,
    })
  }
}
