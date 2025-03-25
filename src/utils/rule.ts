import * as yup from 'yup'

// Định nghĩa các quy tắc validation riêng lẻ để tái sử dụng
const emailValidation = yup
  .string()
  .required('Email là bắt buộc')
  .min(5, 'Độ dài từ 5 - 160')
  .max(160, 'Độ dài từ 5 - 160')
  .email('Email không đúng định dạng')

const passwordValidation = yup
  .string()
  .required('Mật khẩu là bắt buộc')
  .min(6, 'Độ dài mật khẩu từ 6 - 50 ký tự')
  .max(50, 'Độ dài mật khẩu từ 6 - 50 ký tự')

// Schema cho Register
export const registerSchema = yup.object({
  email: emailValidation,
  password: passwordValidation,
  confirm_password: yup
    .string()
    .required('Xác nhận mật khẩu là bắt buộc')
    .min(6, 'Độ dài mật khẩu từ 6 - 50 ký tự')
    .max(50, 'Độ dài mật khẩu từ 6 - 50 ký tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp')
})

// Schema cho Login
export const loginSchema = yup.object({
  email: emailValidation,
  password: passwordValidation
})

// Định nghĩa type cho Register
export type RegisterSchema = yup.InferType<typeof registerSchema>

// Định nghĩa type cho Login
export type LoginSchema = yup.InferType<typeof loginSchema>
