import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions<any>
}

const Input = ({ name, register, type, className, errorMessage, placeholder, rules }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#ee4d2d] focus:border-[#ee4d2d]'
        // pattern='^\S+@\S+\.\S+$' // Thuộc tính HTML, kiểu string
      />
      <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

export default Input
