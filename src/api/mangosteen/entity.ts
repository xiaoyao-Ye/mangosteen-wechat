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

export class TagDto {
  /** id */
  id?: number
  /** 标签名 */
  name?: string
  /** 标签符号 */
  sign?: string
}

export class TagVo {
  /** 列表 */
  items?: Array<TagDto>
  /** 总数量 */
  total?: number
}

export class BillDto {
  /** 金额 */
  amount?: number
  /** 标签列表 */
  tagIds?: Array<string>
  /** 收支类型 */
  type?: string
}
