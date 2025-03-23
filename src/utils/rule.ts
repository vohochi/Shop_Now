import type { RegisterOptions } from 'react-hook-form'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

type Rules = {
  [key in keyof FormData]: RegisterOptions<FormData, key>
}

export const rule: Rules = {
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Vui lòng nhập đúng định dạng email'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài lớn hơn 5 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập mật khẩu'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài lớn hơn 5 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Vui lòng nhập xác nhận mật khẩu'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài từ 5-160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài lớn hơn 5 ký tự'
    }
  }
}
