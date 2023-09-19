'use client'

import { usePomodoroContext } from '@/hooks/pomodoro/usePomodoroContext'

function LapseCounter() {
  const { state } = usePomodoroContext()!

  const getActualLapse = () => {
    let lapseMessage = ''
    let additionalMessage = ''

    switch (state.type) {
      case 'pomodoro':
        lapseMessage = state.lapse.toString() 
        additionalMessage = 'Time to focus!'
        break
      case 'shortBreak':
        lapseMessage = 'Short Break'
        additionalMessage = 'Time for a break!'
        break
      case 'longBreak':
        lapseMessage = 'Long Break'
        additionalMessage = 'Time for a longer break!'
        break
    }

    return (
      <div className={`flex flex-col items-center`}>
        <p className='text-xl font-medium'>{lapseMessage}</p>
        <p className='text-base'>{additionalMessage}</p>
      </div>
    )
  }

  return <div className='pb-5 pt-2'>{getActualLapse()}</div>
}

export default LapseCounter
