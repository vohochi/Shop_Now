import { User } from '@/types/user.type'
import { ResponseApi } from '@/types/util.type'

export type AuthResponse = ResponseApi<{
  access_token: string
  expires: string
  user: User
}>
