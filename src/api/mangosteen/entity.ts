export class UserDto {
  /** 邮箱 */
  email?: string
  /** 验证码 */
  code?: string
}

export class TagDto {
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
