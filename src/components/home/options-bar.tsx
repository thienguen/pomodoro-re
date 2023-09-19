'use client'

/* Frame */
import React from 'react'

/* Util */
import { usePomodoroContext } from '@/hooks/pomodoro/usePomodoroContext'
import { type TimerType, type MessageType } from '@/lib/type/pomodoro.type'
import { cn } from '@/lib/util/cn'

/* Types */
import { type Pomodoro } from '@/components/home/index'
import { useMediaWidth } from '@/hooks/useMediaWidth'
import { updateFavicon, updateTitle } from '@/lib/util/updateFavicon'

type OptionButtonProps = {
  children: React.ReactNode
  active  : boolean
  onClick : () => void
}

/**
 * Whatever you choose in mode, pomodoro, short break, long break
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
 * OptionsBar, the bar that map all the possible mode value
 */
function OptionsBar() {
  /* state of the timer */
  const { state, setState } = usePomodoroContext()! // <-- see this !, it's not null :>

  /* Responsive stuff */
  const isMobile = useMediaWidth('480px', true)

  /* onClick on god */
  const handleModeChange = (type: TimerType, timeLeft: number, message: MessageType) => {
    /* Optional */
    updateFavicon(type)
    updateTitle(timeLeft, type)
    
    /* Actual state update */
    setState((prevState: Pomodoro) => ({
      ...prevState,
      type    : type,
      mode    : 'idle', // back to beginning
      message : message,
      timeLeft: timeLeft,
    }))
  }

  return (
    <div className={cn('mt-9 flex items-center text-center', isMobile ? 'flex-row' : 'space-x-2')}>
      {state.modes.map(({ type, timeLeft, message }) => (
        <OptionButton
          key={type}
          isMobile={isMobile ?? false}
          active={state.type === type}
          onClick={() => handleModeChange(type as TimerType, timeLeft, message as MessageType)}
        >
          {type}
        </OptionButton>
      ))}
    </div>
  )
}

export default OptionsBar
