'use client'

import { FC, ReactNode } from 'react'

interface ButtonProps {
  onClick  : (e: React.MouseEvent) => void
  icon    ?: ReactNode
  children : ReactNode
}

const Button: FC<ButtonProps> = ({ children, onClick, icon }) => (
  <button
    onClick={onClick}
    className='flex items-center justify-center gap-2 border-2 border-gray-800 bg-gray-800 px-3 py-2 text-white hover:opacity-100 active:translate-y-0.5 rounded-md'
  >
    {icon && <span className='icon-container'>{icon}</span>}
    {children}
  </button>
)

export default Button
