'use client'

import { useContext } from 'react'
import { Context } from '@/lib/util/context'

function LapseCounter() {
  const { state }: any = useContext(Context)

  const getActualLapse = () => {
    let lapseMessage = ''
    let additionalMessage = ''

    switch (state.type) {
      case 'pomodoro':
        lapseMessage = state.lapse
        additionalMessage = 'Time to focus!'
        break
      case 'short-break':
        lapseMessage = 'Short Break'
        additionalMessage = 'Time for a break!'
        break
      case 'long-break':
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
