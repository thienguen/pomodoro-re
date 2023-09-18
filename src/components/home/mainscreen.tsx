'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '@/lib/util/context'
import { type Pomodoro } from '@/components/home/index'
import React from 'react'
import { useMediaWidth } from '@/hooks/useMediaWidth'

interface MainScreenProps {
  children: React.ReactNode
}

const MainScreen = ({ children }: MainScreenProps) => {
  // Initial state for the context
  const [state, setState] = useState<Pomodoro>({
    timeLeft: 1500, // for 25 minutes in seconds
    lapse: 0,
    type: 'pomodoro',
    mode: 'idle',
  })

  // Timer logic, since we shoot ourself in the foot by context
  // but I really don't want to deal w the hassle of redux, zustand ish
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

    // Cleanup on unmount
    return () => clearInterval(timer)
  }, [state.mode])

  // Use the hook to determine if we're in mobile view
  // Assuming 768px is the breakpoint for mobile
  const isMobileView = useMediaWidth('768px', true)
  const childArray = React.Children.toArray(children)

  // Mobile Layout
  const mobileLayout = (
    <>
      <div className='flex w-full justify-center pb-5'>
        {childArray[0]} {/* OptionsBar */}
      </div>
      <div className='mb-5 flex w-full flex-row items-center justify-center gap-y-2 px-10 pb-10'>
        {/* Left, Timer */}
        <div className='flex w-2/3 flex-col items-center justify-center mr-5'>
          {childArray[1]} {/* Timer */}
        </div>

        {/* Right, ControlButtons & LapseCounter */}
        <div className='flex w-1/3 flex-col items-center justify-center gap-y-3'>
          {childArray[2]} {/* ControlButtons */}
          {childArray[3]} {/* LapseCounter */}
        </div>
      </div>
    </>
  )

  // Desktop Layout
  const desktopLayout = (
    <>
      <div className='flex flex-col items-center justify-center space-y-4'>
        {childArray[0]}
        {childArray[1]}
        {childArray[2]}
      </div>
      <div className='mt-3 flex flex-col items-center justify-center'>{childArray[3]}</div>
    </>
  )

  return (
    <Context.Provider value={{ state, setState }}>
      <motion.div
        className='mx-auto mt-10 flex h-screen max-h-[60vh] max-w-xl select-none flex-col justify-center overflow-hidden px-10 text-center md:px-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='rounded-xl bg-slate-500 bg-opacity-10'>{isMobileView ? mobileLayout : desktopLayout}</div>
      </motion.div>
    </Context.Provider>
  )
}

export default MainScreen
