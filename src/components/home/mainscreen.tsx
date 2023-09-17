'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '@/util/context'
import { type Pomodoro } from '@/components/home/index'

interface MainScreenProps {
  children: React.ReactNode
}

const MainScreen = ({ children }: MainScreenProps) => {
  // Initial state for the context
  const [state, setState] = useState<Pomodoro>({
    timeLeft: 1500,         // for 25 minutes in seconds
    lapse   : 0,
    type    : 'pomodoro',
    mode    : 'idle',
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined

    /* This thing is heinous, ...but */
    if (state.mode === 'running') {
      timer = setInterval(() => {
        setState((prevState) => {
          if (prevState.timeLeft > 0) {
            return { ...prevState, timeLeft: prevState.timeLeft - 1 }
          } else {
            return { ...prevState, mode: 'idle', lapse: prevState.lapse + 1 }
          }
        })
      }, 1000)
    } else if (state.mode === 'idle' || state.mode === 'paused') {
      clearInterval(timer)
    }

    return () => clearInterval(timer) // Cleanup on unmount
  }, [state.mode])

  return (
    <Context.Provider value={{ state, setState }}>
      <motion.div
        className='mx-auto mt-10 max-w-xl select-none text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='mb-5 flex h-1/2 w-full flex-col items-center justify-center rounded-md bg-white bg-opacity-10 py-5 pb-7 gap-y-2'>
          {children}
        </div>
      </motion.div>
    </Context.Provider>
  )
}

export default MainScreen
