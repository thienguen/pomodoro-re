'use client'

import React from 'react'
import { modes } from '@/components/home/pomodoro.type' // Adjust the path as needed
import { cn } from '@/util/cn'

type OptionButtonProps = {
  children: React.ReactNode
  active  : boolean
  onClick : () => void
}

const OptionButton: React.FC<OptionButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center', // Added these classes
        'text-white transition-transform duration-100 ease-in-out',
        'h-8 rounded-md border border-white bg-transparent px-4 py-2 hover:bg-opacity-20',
        active && 'translate-y-0.5 transform bg-opacity-30'
      )}
    >
      {children}
    </button>
  )
}

const OptionsBar: React.FC = () => {
  return (
    <div className='mb-5 flex items-center space-x-4 text-center'>
      {modes.map(({ id, label }) => (
        <OptionButton
          key={id}
          active={false} // You can replace this with the logic to determine if the button is active
          onClick={() => {}}
        >
          {label}
        </OptionButton>
      ))}
    </div>
  )
}

export default OptionsBar
