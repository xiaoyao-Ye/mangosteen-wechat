import { request } from '../index'
import { EmailSignInDto, SignInVo, WeChatSignInDto, TagListVo, TagVo, TagDto, BillDto } from './entity'

export class Auth {
  /** 登录-邮箱登录 */
  static emailSignIn(data?: EmailSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/auth/emailSignIn`,
      method: 'POST',
      data: data,
    })
  }

  /** 登录-微信授权登录 */
  static weChatSignIn(data?: WeChatSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/auth/weChatSignIn`,
      method: 'POST',
      data: data,
    })
  }
}

export class User {
  static getTags() {
    return request<TagListVo>({
      url: `/api/v1/user/tags`,
      method: 'GET',
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
      method: 'PUT',
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

export class Email {
  /** 发送验证码-发送验证码到指定邮箱 */
  static sendEmail(data?: EmailSignInDto) {
    return request<void>({
      url: `/api/v1/email/signUp`,
      method: 'POST',
      data: data,
    })
  }
}
