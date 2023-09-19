'use client'

import { usePomodoroContext } from '@/hooks/pomodoro/usePomodoroContext'

function LapseCounter() {
  const { state } = usePomodoroContext()!

  const getActualLapse = () => {
    let typeLabel = ''
    let additionalMessage = ''

    switch (state.type) {
      case 'Pomodoro':
        typeLabel = state.lapse.toString() 
        additionalMessage = state.message
        break
      case 'Short Break':
        typeLabel = 'Short Break'
        additionalMessage = 'Time for a break!'
        break
      case 'Long Break':
        typeLabel = 'Long Break'
        additionalMessage = 'Time for a longer break!'
        break
    }

    /* This is interesting about react, state wont render first mounted */
    /* If you try state.member <-- it will likely empty */
    return (
      <div className={`flex flex-col items-center`}>
        <p className='text-xl font-medium'>{typeLabel}</p>
        <p className='text-base'>{additionalMessage}</p>
      </div>
    )
  }

  return <div className='pb-5 pt-2'>{getActualLapse()}</div>
}

export default LapseCounter
