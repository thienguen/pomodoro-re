'use client'

/* Framework */
import { motion } from 'framer-motion'
import { useContext } from 'react'

/* Utils */
import useTextSize from '@/hooks/useTextSize' // Import the custom hook
import { Context } from '@/util/context'

const Timer = () => {
  const { state }: any = useContext(Context)
  const getTextSize = useTextSize() // Use the custom hook

  const getTime = () => {
    var minutes = Math.floor((state.timeLeft % 3600) / 60)
    var seconds = Math.floor((state.timeLeft % 3600) % 60)

    return ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2)
  }

  return (
    <div className='text-center'>
      <motion.h1 initial={{ zoom: 0.7 }} animate={{ zoom: getTextSize() }} className='text-6xl font-medium'>
        {state.timeLeft >= 0 ? getTime() : '00:00'}
      </motion.h1>
    </div>
  )
}

export default Timer
