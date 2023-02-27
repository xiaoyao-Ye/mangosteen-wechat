import { request } from '../index'
import {
  EmailSignInDto,
  SignInVo,
  WeChatSignInDto,
  TagListVo,
  TagDto,
  QueryBillsDto,
  QueryBillsVo,
  CreateBillDto,
} from './entity'

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

export class Tags {
  /** 标签列表-获取当前请求用户的所有标签 */
  static getAllTags() {
    return request<TagListVo>({
      url: `/api/v1/tags/getAll`,
      method: 'GET',
    })
  }

  /** 创建标签 */
  static createTag(data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags`,
      method: 'POST',
      data: data,
    })
  }

  /** 修改标签 */
  static updateTag(path: { id: number }, data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'PUT',
      data: data,
    })
  }

  /** 删除标签 */
  static deleteTag(path: { id: number }) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'DELETE',
    })
  }
}

export class Bill {
  /** 查询记账-查询当前用户账单记录 */
  static queryPageBills(data?: QueryBillsDto) {
    return request<QueryBillsVo>({
      url: `/api/v1/bill/queryPage`,
      method: 'POST',
      data: data,
    })
  }

  /** 创建记账-创建一个账单记录 */
  static createBill(data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill`,
      method: 'POST',
      data: data,
    })
  }

  /** 修改记账 */
  static updateBill(path: { id: number }, data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: 'PUT',
      data: data,
    })
  }

  /** 删除记账 */
  static deleteBill(path: { id: number }) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: 'DELETE',
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
