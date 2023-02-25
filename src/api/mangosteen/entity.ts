export class EmailSignInDto {
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
  createdAt?: string
  /** 更新时间 */
  updatedAt?: string
  /** 软删除时间 */
  deletedAt?: string

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

export class TagVo {
  /** 列表 */
  items?: Array<TagItemsVo>
  /** 总数量 */
  total?: number
}

export class TagDto {
  category?: Category
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
}

export class BillDto {
  /** 金额 */
  amount?: number

  category?: Category
  /** 标签Id */
  tagId?: number
}

export enum IdentityType {
  '邮箱' = '邮箱',
  '微信' = '微信',
}

export enum Category {
  '收入' = '收入',
  '支出' = '支出',
}
