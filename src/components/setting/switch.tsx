import React, { FC } from 'react'

interface SwitchProps {
  onClick: () => void
  on: boolean
}

const Knob: FC = () => <div className='h-4 w-4 rounded-full bg-gray-300' />

const Switch: FC<SwitchProps> = ({ onClick, on }) => (
  <button className={`relative p-2 ${on ? 'bg-green-500' : 'bg-red-500'}`} onClick={onClick}>
    <Knob />
  </button>
)

export default Switch
