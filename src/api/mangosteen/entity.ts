export class UserDto {
  /** 邮箱 */
  email?: string
  /** 验证码 */
  code?: string
}

export class WeChatDto {
  /** 昵称 */
  nickName?: string
  /** 头像 */
  avatar?: string
  /** 性别 */
  gender?: string
  /** 用户登录凭证 */
  code?: string
}

export class WeChatVo {
  /** token */
  token?: string
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

  type?: TagType
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
}

export class TagVo {
  /** 列表 */
  items?: Array<TagItemsVo>
  /** 总数量 */
  total?: number
}

export class TagDto {
  type?: TagType
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
}

export class BillDto {
  /** 金额 */
  amount?: number
  /** 标签列表 */
  tagIds?: Array<string>
  /** 收支类型 */
  type?: string
}

export enum TagType {
  '收入' = '收入',
  '支出' = '支出',
}
