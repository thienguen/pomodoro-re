'use client'

import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Context } from '@/util/context'

const Timer = () => {
  const { state }: any = useContext(Context)

  // Initialize with default values
  const [screenSize, getScreenSize] = useState({
    width : 800,   // Default width
    height: 600,   // Default height
  })

  useEffect(() => {
    // Update the state with actual window dimensions once the component is mounted
    getScreenSize({
      width : window.innerWidth,
      height: window.innerHeight,
    })

    window.addEventListener('resize', setScreenSize)
    return () => {
      window.removeEventListener('resize', setScreenSize)
    }
  }, [])

  const getTime = () => {
    var minutes = Math.floor((state.timeLeft % 3600) / 60)
    var seconds = Math.floor((state.timeLeft % 3600) % 60)

    return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
  }

  const getTextSize = () => {
    return screenSize.width / screenSize.height
  }

  const setScreenSize = () => {
    getScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  return (
    <div className='text-center'>
      <motion.h1
        initial={{ zoom: 0.7 }}
        animate={{ zoom: getTextSize() }}
        className='text-6xl font-medium'
      >
        {state.timeLeft >= 0 ? getTime() : '00:00'}
      </motion.h1>
    </div>
  )
}

export default Timer
