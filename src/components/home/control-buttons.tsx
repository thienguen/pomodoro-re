'use client'

import { useContext, useEffect, useState } from 'react'
import { Context } from '@/util/context'
import { motion } from 'framer-motion'
import { BsPlay } from 'react-icons/bs'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { HiOutlineStop } from 'react-icons/hi'
import { type Pomodoro } from '@/components/home/index'

const ControlButtons = () => {
  const { state, setState }: any = useContext(Context)
  const [colorMode, setColorMode] = useState('#fff') // default to light mode

  useEffect(() => {
    // Set the color mode once the component has mounted
    const mode = document.body.classList.contains('dark') ? '#222' : '#fff'
    setColorMode(mode)
  }, [])

  console.log('state', state)
  console.log('colorMode', colorMode)

  const getButtonsState = () => {
    switch (state.mode) {
      case 'idle':
        return (
          <motion.button
            initial={{
              color: '#00000000',
            }}
            animate={{
              color: colorMode,
              right: 0,
              width: 80,
            }}
            transition={{ type: 'spring', duration: 0.15 }}
            className='flex items-center bg-teal-500 text-white'
            onClick={() => {
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Start <BsPlay className='ml-2' />
          </motion.button>
        )
      case 'paused':
        return (
          <motion.button
            initial={{
              color: '#00000000',
            }}
            animate={{
              color: colorMode,
              right: 0,
              width: 100,
            }}
            transition={{ type: 'spring', duration: 0.15 }}
            className='flex items-center bg-teal-500 text-white'
            onClick={() => {
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Resume <BsPlay className='ml-2' />
          </motion.button>
        )
      case 'running':
        return (
          <>
            <motion.button
              aria-label='pause'
              initial={{
                width: 90,
                left: 40,
                color: '#00000000',
              }}
              animate={{
                width: 20,
                left: 0,
                color: colorMode,
              }}
              transition={{ type: 'spring', duration: 0.3 }}
              className='mr-1 bg-teal-500 text-white'
              onClick={() => {
                setState((prevState: Pomodoro) => ({ ...prevState, mode: 'paused' }))
              }}
            >
              <AiOutlinePauseCircle />
            </motion.button>
            <motion.button
              initial={{
                opacity: 0,
                left: 10,
              }}
              animate={{
                opacity: 1,
                left: 0,
              }}
              transition={{ type: 'spring', duration: 0.15, delay: 0.05 }}
              className='ml-1 flex items-center bg-red-500 text-white'
              onClick={() => {
                setState((prevState: Pomodoro) => ({ ...prevState, mode: 'idle' }))
              }}
            >
              Stop <HiOutlineStop className='ml-2' />
            </motion.button>
          </>
        )
      default:
        return <></>
    }
  }

  return <div className='flex justify-center'>{getButtonsState()}</div>
}

export default ControlButtons
