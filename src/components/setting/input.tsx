import React, { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: FC<InputProps> = ({ label, ...rest }) => (
  <div className='flex flex-col gap-1'>
    
    {/* What is dis */}
    <label htmlFor={rest.id} className='text-sm font-semibold'>
      {label}
    </label>

    {/* Stuff */}
    <input
      {...rest}
      className='lg:w-24 md:w-20 w-16 rounded border border-transparent bg-gray-200 px-3 py-2 text-base outline-none focus:border-black'
    />
  </div>
)

export default Input
