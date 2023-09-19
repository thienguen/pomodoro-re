'use client'

/* Utils */
import { motion } from 'framer-motion'
import useSound from 'use-sound'
import { usePomodoroContext } from '@/hooks/pomodoro/usePomodoroContext'

/* Icons */
import { HiOutlineStop } from 'react-icons/hi'
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai'

/* Types */
import { type Pomodoro } from '@/components/home/index'

/* Hooks */
import useResponsiveSize from '@/hooks/useResponsiveSize' // Import the custom hook

/**
 * Mode
 * - Idle
 *  - Show: Start
 * Running / Resume
 *  - Show: Pause, End
 * Paused
 *  - Show: Resume
 * 
 * ? If auto break is on, then after a pomodoro, it will automatically start a break
 * ? If auto Pomodoro is on, then after a break, it will automatically start a pomodoro
 */
const ControlButtons = () => {
  /* Use context to avoid props drilling, but useState update like crazy */
  const { state, setState } = usePomodoroContext()!

  /* Sound, peep, peep */
  const [ThemeSound] = useSound('/sounds/button-press.wav', { volume: 1 })

  /* Get the scale factor from the custom hook */
  const getScaleFactor = useResponsiveSize()
  const iconSize       = 24 * getScaleFactor()

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
              ThemeSound()
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Start <AiOutlinePlayCircle size={iconSize} />
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
              ThemeSound()
              setState((prevState: Pomodoro) => ({ ...prevState, mode: 'running' }))
            }}
          >
            Resume <AiOutlinePlayCircle size={iconSize} />
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
                ThemeSound()
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
                ThemeSound()
                setState((prevState: Pomodoro) => ({
                  ...prevState,
                  timeLeft: prevState.type === 'Pomodoro' ? 1500 : prevState.type === 'Short Break' ? 300 : 900,
                  mode    : 'idle',
                  lapse   : prevState.type === 'Pomodoro' ? prevState.lapse + 1 : prevState.lapse,
                }))
              }}
            >
              End <HiOutlineStop size={iconSize} />
            </motion.button>
          </>
        )
      default:
        return (
          <div className='mx-auto flex items-center justify-center text-7xl '>
            Something has gone wrong, please refresh the page, Thien is too lazy to fix this
          </div>
        )
    }
  }

  /*  */
  return (
    <div className='flex justify-center pt-2' style={{ transform: `scale(${getScaleFactor()})` }}>
      {getButtonContext()}
    </div>
  )
}

export default ControlButtons
