export class EmailSignInDto {
  /** 身份类型 */
  identity_type?: IdentityType
  /** 标识符 */
  identifier?: string
  /** 凭证 */
  credential?: string
}

export class SignInVo {
  /** token */
  token?: string
}

export class WeChatSignInDto {
  /** 身份类型 */
  identity_type?: IdentityType
  /** 昵称 */
  nickName?: string
  /** 头像 */
  avatar?: string
  /** 性别 */
  gender?: string
  /** 微信用户登录凭证 */
  code?: string
}

export class TagItemsVo {
  /** id */
  id?: number
  /** 创建时间 */
  created_at?: string
  /** 更新时间 */
  updated_at?: string
  /** 软删除时间 */
  deleted_at?: string
  /** 收支类型 */
  category?: Category
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
}

export class TagListVo {
  /** 列表 */
  items?: Array<TagItemsVo>
}

export class TagDto {
  /** 收支类型 */
  category?: Category
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
  /** 用户Id */
  userId?: number
}

export class BalanceVo {
  /** 收入 */
  income?: number
  /** 支出 */
  outcome?: number
  /** 净收入 */
  netIncome?: number
}

export class QueryBillsDto {
  /** 分页 */
  pageNum?: number
  /** 每页数量 */
  pageSize?: number
  /** 起始时间 */
  startTime?: string
  /** 结束时间 */
  endTime?: string
  /** 用户ID */
  userId?: number
}

export class BillItemsVo {
  /** id */
  id?: number
  /** 创建时间 */
  created_at?: string
  /** 更新时间 */
  updated_at?: string
  /** 软删除时间 */
  deleted_at?: string
  /** 用户ID */
  userId?: number
  /** 标签ID */
  tagId?: number
  /** 金额 */
  amount?: number
  /** 创建日期 */
  record_date?: string
  /** 收支类型 */
  category?: string
  /** 标签信息 */
  tag?: TagItemsVo
}

export class QueryBillsVo {
  /** 列表 */
  items?: Array<BillItemsVo>
  /** 总数量 */
  total?: number
}

export class CreateBillDto {
  /** 金额 */
  amount?: number
  /** 标签ID */
  tagId?: number
  /** 记账日期 */
  record_date?: string
  /** 收支类型 */
  category?: Category
  /** 用户ID */
  userId?: number
}

export enum IdentityType {
  '邮箱' = '邮箱',
  '微信' = '微信',
}

export enum Category {
  '收入' = '收入',
  '支出' = '支出',
}
