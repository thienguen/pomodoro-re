// Switch.tsx
import React, { FC } from 'react'

interface SwitchProps {
  onClick: () => void
  on: boolean
}

const Knob: FC<{ on: boolean }> = ({ on }) => (
  <div
    className='absolute h-7 w-7 rounded-full bg-white shadow-md'
    style={{
      top: '0.125rem',
      transition: 'transform 0.2s ease',
      transform: on ? 'translateX(1.875rem)' : 'translateX(0.125rem)',
    }}
  />
)

const Switch: FC<SwitchProps> = ({ onClick, on }) => (
  <button
    onClick={onClick}
    className={`duration-600 relative h-8 w-14 rounded-full bg-gray-300 transition-colors ${on ? 'bg-green-500' : ''}`}
  >
    <Knob on={on}/>
  </button>
)

export default Switch
