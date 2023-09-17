'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '@/util/context'
import { type Pomodoro } from '@/components/home/index'

interface BackgroundProps {
  children: React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {

  // Initial state for the context
  const [state, setState] = useState<Pomodoro>({
    timeLeft: 1500,         // for 25 minutes in seconds
    lapse   : 0,
    type    : 'pomodoro',
    mode    : 'idle',
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined;

    if (state.mode === 'running') {
      timer = setInterval(() => {
        setState(prevState => {
          if (prevState.timeLeft > 0) {
            return { ...prevState, timeLeft: prevState.timeLeft - 1 };
          } else {
            // Handle what happens when the timer reaches 0
            // For now, we'll just set it to 'idle'
            return { ...prevState, mode: 'idle' };
          }
        });
      }, 1000);
    } else if (state.mode === 'idle' || state.mode === 'paused') {
      clearInterval(timer);
    }
  
    return () => clearInterval(timer); // Cleanup on unmount
  }, [state.mode]);
  

  // const backgroundColor = state.theme === 'light' ? '#f9f9f9' : '#222'

  return (
    <Context.Provider value={{ state, setState }}>
      <motion.div
        style={{
          alignItems    : 'center',
          display       : 'flex',
          flexDirection : 'column',
          justifyContent: 'center',
          position      : 'fixed',
          height        : '50%',
          width         : '100%',
          // background: backgroundColor,
        }}
        initial={{ opacity: 0, marginTop: 10 }}
        animate={{ opacity: 1, marginTop: 0 }}
      >
        {children}
      </motion.div>
    </Context.Provider>
  )
}

export default Background
