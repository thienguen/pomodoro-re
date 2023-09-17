'use client'

import { useContext } from 'react'
import { Context } from '@/util/context'

function LapseCounter() {
  const { state }: any = useContext(Context);

  const getActualLapse = () => {
    switch (state.type) {
      case 'pomodoro': 
        return 'Lapse: ' + state.lapse
      case 'short-break': 
        return 'Short Break'
      case 'long-break': 
        return 'Long Break'
    }
  }

  return (
    <>
      <div className='flex items-center justify-center text-center'>
        <p className='text-lg'>{getActualLapse()}</p>
      </div>
    </>
  )
}

export default LapseCounter
