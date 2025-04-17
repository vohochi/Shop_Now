import { AuthResponse } from '@/types/auth.type'
import http from '@/utils/http'

// register
export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/register', body)
}

// login
export const loginAccont = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/login', body)
}
