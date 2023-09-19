import React, { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<InputProps> = ({ label, ...rest }) => (
  <div className='flex flex-col gap-1'>
    <label htmlFor={rest.id} className='text-sm font-semibold text-gray-500'>
      {label}
    </label>
    <input
      {...rest}
      className='w-full rounded border border-transparent bg-gray-200 px-3 py-2 text-base text-gray-500 outline-none focus:border-black'
    />
  </div>
)

export default Input
