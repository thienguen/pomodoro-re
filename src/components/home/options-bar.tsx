'use client'

/* Frame */
import React, { useContext } from 'react'

/* Util */
import { cn } from '@/lib/util/cn'
import { Context } from '@/lib/util/context'
import { modes } from '@/lib/type/pomodoro.type'

/* Types */
import { type Pomodoro } from '@/components/home/index'
import { useMediaWidth } from '@/hooks/useMediaWidth'

type OptionButtonProps = {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}

/**
 * Whatever you choose in mode
 */
const OptionButton: React.FC<OptionButtonProps & { isMobile: boolean }> = ({ children, active, onClick, isMobile }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `btn btn-ghost h-8 transform rounded-lg px-3 py-0.5 text-lg font-medium normal-case opacity-80 transition-transform duration-100 ease-in-out`,
        `${active ? 'bg-opacity-15 -translate-y-2  underline underline-offset-4 font-semibold' : ''}`,
        isMobile ? 'px-2 text-sm' : ''
      )}
    >
      {children}
    </button>
  )
}

/**
 * OptionsBar
 */
function OptionsBar() {
  /* state of the timer */
  const { state, setState }: any = useContext(Context)

  /* Responsive stuff */
  const isMobile = useMediaWidth('480px', true)

  /* onClick on god */
  const handleModeChange = (type: string, timeLeft: number) => {
    setState((prevState: Pomodoro) => ({
      ...prevState,
      type: type,
      mode: 'idle',
      timeLeft: timeLeft,
    }))
  }

  return (
    <div className={cn('mt-9 flex items-center text-center', isMobile ? 'flex-row' : 'space-x-2')}>
      {modes.map(({ type, label, timeLeft }) => (
        <OptionButton
          key={type}
          isMobile={isMobile ?? false}
          active={state.type === type}
          onClick={() => handleModeChange(type, timeLeft)}
        >
          {label}
        </OptionButton>
      ))}
    </div>
  )
}

export default OptionsBar
