'use client'

/* Frame */
import React, { useContext } from 'react'

/* Util */
import { Context }  from '@/lib/util/context'
import { modes }    from '@/lib/type/pomodoro.type'; 

/* Types */
import { type Pomodoro } from '@/components/home/index'


type OptionButtonProps = {
  children: React.ReactNode
  active  : boolean
  onClick : () => void
}

/**
 * Whatever you choose in mode
 */
const OptionButton: React.FC<OptionButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-7 px-3 py-0.5 text-base font-medium text-white transition-transform duration-100 ease-in-out rounded-lg ${
        active ? 'bg-opacity-15 -translate-y-0.5 transform bg-black' : 'bg-gray-400'
      }`}
    >
      {children}
    </button>
  )
}

/**
 * OptionsBar
 */
function OptionsBar() {
  const { state, setState }: any = useContext(Context)

  const handleModeChange = (type: string, timeLeft: number) => {
    setState((prevState: Pomodoro) => ({
      ...prevState,
      type    : type,
      mode    : 'idle',
      timeLeft: timeLeft,
    }))
  }

  console.log(state)

  return (
    <div className='mt-6 flex items-center space-x-1 text-center'>
      {modes.map(({ type, label, timeLeft }) => (
        <OptionButton key={type} active={state.type === type} onClick={() => handleModeChange(type, timeLeft)}>
          {label}
        </OptionButton>
      ))}
    </div>
  )
}

export default OptionsBar
