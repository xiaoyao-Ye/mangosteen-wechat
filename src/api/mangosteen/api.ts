/* eslint-disable */
// 此文件由 initAPI(https://github.com/xiaoyao-Ye/initapi) 自动生成。请不要手动修改此文件！

import { request } from "../index";

import {
  EmailSignInDto,
  SignInVo,
  WeChatSignInDto,
  TagListVo,
  TagDto,
  StatisticVo,
  QueryBillsVo,
  CreateBillDto,
} from "./typings.d";

export class Common {
  static getHello() {
    return request<string>({
      url: `/api`,
      method: "GET",
    });
  }
}

export class Login {
  /** 发送验证码-发送验证码到指定邮箱 */
  static signUp(data?: EmailSignInDto) {
    return request<void>({
      url: `/api/v1/login/signUp`,
      method: "POST",
      data,
    });
  }

  /** 登录-邮箱登录 */
  static emailSignIn(data?: EmailSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/login/emailSignIn`,
      method: "POST",
      data,
    });
  }

  /** 登录-微信授权登录 */
  static weChatSignIn(data?: WeChatSignInDto) {
    return request<SignInVo>({
      url: `/api/v1/login/weChatSignIn`,
      method: "POST",
      data,
    });
  }
}

export class Tags {
  /** 标签列表-获取当前请求用户的所有标签 */
  static getAllTags() {
    return request<TagListVo>({
      url: `/api/v1/tags/all`,
      method: "GET",
    });
  }

  /** 创建标签 */
  static createTag(data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags`,
      method: "POST",
      data,
    });
  }

  /** 修改标签 */
  static updateTag(path: { id: number }, data?: TagDto) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: "PUT",
      data,
    });
  }

  /** 删除标签 */
  static deleteTag(path: { id: number }) {
    return request<void>({
      url: `/api/v1/tags/${path.id}`,
      method: "DELETE",
    });
  }
}

export class Bill {
  /** 统计信息 */
  static statistic(params?: { startTime?: string; endTime?: string }) {
    return request<StatisticVo>({
      url: `/api/v1/bill/statistic`,
      method: "GET",
      params,
    });
  }

  /** 查询记账-查询当前用户账单记录 */
  static queryPageBills(params?: { pageNum?: number; pageSize?: number; startTime?: string; endTime?: string; userId?: number }) {
    return request<QueryBillsVo>({
      url: `/api/v1/bill/queryPage`,
      method: "GET",
      params,
    });
  }

  /** 创建记账-创建一个账单记录 */
  static createBill(data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill`,
      method: "POST",
      data,
    });
  }

  /** 修改记账 */
  static updateBill(path: { id: number }, data?: CreateBillDto) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: "PUT",
      data,
    });
  }

  /** 删除记账 */
  static deleteBill(path: { id: number }) {
    return request<void>({
      url: `/api/v1/bill/${path.id}`,
      method: "DELETE",
    });
  }
}
