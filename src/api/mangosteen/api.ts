/* eslint-disable */
// 此文件由 initAPI(https://github.com/xiaoyao-Ye/initapi) 自动生成。请不要手动修改此文件！

import { request } from '../index'
import {
  EmailSignInDto,
  SignInVo,
  WeChatSignInDto,
  TagListVo,
  TagDto,
  BalanceVo,
  QueryBillsDto,
  QueryBillsVo,
  CreateBillDto,
} from './typings.d'

export class Common {
  static async getHello() {
    return request<void>({
      url: `/api`,
      method: 'GET',
    })
  }
}

export class Auth {
  /** 登录-邮箱登录 */
  static async emailSignIn(data?: EmailSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/auth/emailSignIn`,
      method: 'POST',
      data: data,
    })
  }

  /** 登录-微信授权登录 */
  static async weChatSignIn(data?: WeChatSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/auth/weChatSignIn`,
      method: 'POST',
      data: data,
    })
  }
}

export class Tags {
  /** 标签列表-获取当前请求用户的所有标签 */
  static async getAllTags() {
    return request<TagListVo>({
      url: `/api/v1/tags/getAll`,
      method: 'GET',
    })
  }

  /** 创建标签 */
  static async createTag(data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags`,
      method: 'POST',
      data: data,
    })
  }

  /** 修改标签 */
  static async updateTag(path: { id: number }, data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'PUT',
      data: data,
    })
  }

  /** 删除标签 */
  static async deleteTag(path: { id: number }) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: 'DELETE',
    })
  }
}

export class Bill {
  /** 统计信息 */
  static async balance(params?: { startTime?: string; endTime?: string }) {
    return request<BalanceVo>({
      url: `/api/v1/bill/balance`,
      method: 'GET',
      params: params,
    })
  }

  /** 查询记账-查询当前用户账单记录 */
  static async queryPageBills(data?: QueryBillsDto) {
    return request<QueryBillsVo>({
      url: `/api/v1/bill/queryPage`,
      method: 'POST',
      data: data,
    })
  }

  /** 创建记账-创建一个账单记录 */
  static async createBill(data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill`,
      method: 'POST',
      data: data,
    })
  }

  /** 修改记账 */
  static async updateBill(path: { id: number }, data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: 'PUT',
      data: data,
    })
  }

  /** 删除记账 */
  static async deleteBill(path: { id: number }) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: 'DELETE',
    })
  }
}

export class Email {
  /** 发送验证码-发送验证码到指定邮箱 */
  static async sendEmail(data?: EmailSignInDto) {
    return request<void>({
      url: `/api/v1/email/signUp`,
      method: 'POST',
      data: data,
    })
  }
}
