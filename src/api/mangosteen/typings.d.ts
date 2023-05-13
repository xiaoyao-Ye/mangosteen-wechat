/* eslint-disable */
// 此文件由 initAPI(https://github.com/xiaoyao-Ye/initapi) 自动生成。请不要手动修改此文件！

export interface EmailSignInDto {
  /** 身份类型 */
  identity_type?: IdentityType;
  /** 标识符 */
  identifier?: string;
  /** 凭证 */
  credential?: string;
}

export interface SignInVo {
  /** token */
  token?: string;
}

export interface WeChatSignInDto {
  /** 身份类型 */
  identity_type?: IdentityType;
  /** 昵称 */
  nickName?: string;
  /** 头像 */
  avatar?: string;
  /** 性别 */
  gender?: string;
  /** 微信用户登录凭证 */
  code?: string;
}

export interface TagItemsVo {
  /** id */
  id?: number;
  /** 创建时间 */
  created_at?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 软删除时间 */
  deleted_at?: string;
  /** 收支类型 */
  category?: Category;
  /** 标签名 */
  name?: string;
  /** 标签符号 */
  sign?: string;
}

export interface TagListVo {
  /** 列表 */
  items?: Array<TagItemsVo>;
}

export interface TagDto {
  /** 收支类型 */
  category?: Category;
  /** 标签名 */
  name?: string;
  /** 标签符号 */
  sign?: string;
  /** 用户Id */
  userId?: number;
}

export interface BalanceVo {
  /** 收入 */
  income?: number;
  /** 支出 */
  outcome?: number;
  /** 净收入 */
  netIncome?: number;
}

export interface QueryBillsDto {
  /** 分页 */
  pageNum?: number;
  /** 每页数量 */
  pageSize?: number;
  /** 起始时间 */
  startTime?: string;
  /** 结束时间 */
  endTime?: string;
  /** 用户ID */
  userId?: number;
}

export interface BillItemsVo {
  /** id */
  id?: number;
  /** 创建时间 */
  created_at?: string;
  /** 更新时间 */
  updated_at?: string;
  /** 软删除时间 */
  deleted_at?: string;
  /** 用户ID */
  userId?: number;
  /** 标签ID */
  tagId?: number;
  /** 金额 */
  amount?: number;
  /** 创建日期 */
  record_date?: string;
  /** 收支类型 */
  category?: string;
  /** 标签信息 */
  tag?: TagItemsVo;
}

export interface QueryBillsVo {
  /** 列表 */
  items?: Array<BillItemsVo>;
  /** 总数量 */
  total?: number;
}

export interface CreateBillDto {
  /** 金额 */
  amount?: number;
  /** 标签ID */
  tagId?: number;
  /** 记账日期 */
  record_date?: string;
  /** 收支类型 */
  category?: Category;
  /** 用户ID */
  userId?: number;
}

export type IdentityType = "邮箱" | "微信";

export type Category = "收入" | "支出";
