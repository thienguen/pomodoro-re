'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '@/lib/util/unused/context'
import { type Pomodoro } from '@/components/home/index'
import React from 'react'
import { useMediaWidth } from '@/hooks/useMediaWidth'
import { PomodoroContextProvider } from '../provider/PomodoroContextProvider'

interface MainScreenProps {
  children: React.ReactNode
}

const MainScreen = ({ children }: MainScreenProps) => {
  // Use the hook to determine if we're in mobile view
  // Assuming 768px is the breakpoint for ipad view
  // 400px is when it get to phone view
  const isIpadView   = useMediaWidth('768px', true)
  const isMobileView = useMediaWidth('400px', true)
  const childArray   = React.Children.toArray(children)

  // Mobile Layout
  const mobileLayout = (
    <>
      <div className='flex w-full justify-center pb-5'>
        {childArray[0]} {/* OptionsBar */}
      </div>
      <div className='mb-5 flex w-full flex-row items-center justify-center gap-y-2 px-10 pb-10'>
        {/* Left, Timer */}
        <div className='mr-5 flex w-2/3 flex-col items-center justify-center'>
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
      <div className='flex flex-col items-center justify-center space-y-3'>
        {childArray[0]}
        {childArray[1]}
        {childArray[2]}
      </div>
      <div className='my-2 flex flex-col items-center justify-center'>
        {childArray[3]} {/* The Lapse counter, and messages */}
      </div>
    </>
  )

  return (
    <PomodoroContextProvider>
      <motion.div
        className='mx-auto flex h-screen max-h-[60vh] max-w-xl select-none flex-col justify-center overflow-hidden px-10 text-center md:px-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className='rounded-xl bg-slate-500 bg-opacity-10'>
          {isMobileView ? desktopLayout : isIpadView ? mobileLayout : desktopLayout}
        </div>
      </motion.div>
    </PomodoroContextProvider>
  )
}

export default MainScreen
