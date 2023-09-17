'use client'

/* Utils */
import { useContext } from 'react'
import { Context } from '@/util/context'
import { motion } from 'framer-motion'

/* Icons */
import { BsPlay } from 'react-icons/bs'
import { AiOutlinePauseCircle } from 'react-icons/ai'
import { HiOutlineStop } from 'react-icons/hi'

/* Types */
import { type Pomodoro } from '@/components/home/index'

/* Hooks */
import useResponsiveSize from '@/hooks/useResponsiveSize' // Import the custom hook

const ControlButtons = () => {
  const { state, setState }: any = useContext(Context)
  const getScaleFactor = useResponsiveSize() // Use the custom hook
  const iconSize = 24 * getScaleFactor()

  // console.log('state', state)
  console.log("Scale Factor:", getScaleFactor());

  /* Eh, too tired */
  const buttonStyles = `flex items-center justify-center gap-1 p-3 text-xl rounded-lg transition-transform duration-100 ease-in-out hover:scale-105 transform scale-${getScaleFactor()}`

  const getButtonContext = () => {
    switch (state.mode) {
      case 'idle':
        /* Start */
        return (
          <motion.button
            className={`${buttonStyles} bg-teal-500 text-white`}
            initial={{ color: '#00000000' }}
            animate={{ color: '#fff', right: 0, width: 100 }}
            transition={{ type: 'spring', duration: 0.15 }}
            onClick={() => {
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Start <BsPlay size={iconSize} />
          </motion.button>
        )
      case 'paused':
        return (
          /* Resume after pause */
          <motion.button
            className={`${buttonStyles} bg-teal-500 text-white`}
            initial={{ color: '#00000000' }}
            animate={{ color: '#fff', right: 0, width: 120 }}
            transition={{ type: 'spring', duration: 0.15 }}
            onClick={() => {
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Resume <BsPlay size={iconSize} />
          </motion.button>
        )
      case 'running':
        return (
          <>
            {/* Paused */}
            <motion.button
              className={`${buttonStyles} mr-1 bg-teal-500 text-white`}
              aria-label='pause'
              initial={{ width: 100, left: 40, color: '#00000000' }}
              animate={{ width: 50, left: 0, color: '#fff' }}
              transition={{ type: 'spring', duration: 0.3 }}
              onClick={() => {
                setState((prevState: Pomodoro) => ({ ...prevState, mode: 'paused' }))
              }}
            >
              <AiOutlinePauseCircle size={iconSize} />
            </motion.button>

            {/* Stop */}
            <motion.button
              className={`${buttonStyles} ml-1 bg-red-500 text-white`}
              initial={{ opacity: 0, left: 10 }}
              animate={{ opacity: 1, left: 0 }}
              transition={{ type: 'spring', duration: 0.15, delay: 0.05 }}
              onClick={() => {
                setState((prevState: Pomodoro) => ({ ...prevState, mode: 'idle', timeLeft: 1500 }))
              }}
            >
              End <HiOutlineStop size={26} />
            </motion.button>
          </>
        )
      default:
        return <></>
    }
  }

  return (
    <div className='flex justify-center' style={{ transform: `scale(${getScaleFactor()})` }}>
      {getButtonContext()}
    </div>
  )
}

export default ControlButtons
