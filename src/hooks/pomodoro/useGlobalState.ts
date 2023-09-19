import { Pomodoro } from '@/lib/type/pomodoro.type'
import { useEffect, useState } from 'react'

const useGlobalState = () => {
  // const [breakTime, setBreakTime]         = useState(300)
  // const [longBreakTime, setLongBreakTime] = useState(900)
  // const [pomodoroTime, setPomodoroTime]   = useState(1500)
  // const [lapsesToLongBreak, setLapsesToLongBreak] = useState(4)

  // Initial state of the pomodoro
  const [state, setState] = useState<Pomodoro>({
    timeLeft: 1500,
    lapse: 0,
    autoBreak: false,
    autoPomo: false,

    type: 'Pomodoro',
    mode: 'idle',
    message: 'Time to focus!',
    modes: [
      {
        type: 'Short Break',
        timeLeft: 5 * 60, // 5 minutes in seconds
        message: 'Time to focus!',
      },
      {
        type: 'Pomodoro',
        timeLeft: 25 * 60, // 25 minutes in seconds
        message: 'Time for a break!',
      },
      {
        type: 'Long Break',
        timeLeft: 15 * 60, // 15 minutes in seconds
        message: 'Time for a longer break!',
      },
    ],
  })

  /* Timer logic */
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined

    if (state.mode === 'running') {
      timer = setInterval(() => {
        setState((prevState) => {
          if (prevState.timeLeft > 0) {
            return { ...prevState, timeLeft: prevState.timeLeft - 1 }
          } else {
            // Check for autoBreak
            if (prevState.autoBreak && prevState.type === 'Pomodoro') {
              return {
                ...prevState,
                type: 'Short Break',
                timeLeft: 5 * 60, // Reset to 5 minutes
                mode: 'running',
                lapse: prevState.lapse + 1,
              }
            }

            // Check for autoPomo
            if (prevState.autoPomo && prevState.type !== 'Pomodoro') {
              return {
                ...prevState,
                type: 'Pomodoro',
                timeLeft: 25 * 60, // Reset to 25 minutes
                mode: 'running',
                lapse: prevState.lapse + 1,
              }
            }

            // Default behavior
            return { ...prevState, mode: 'idle', lapse: prevState.lapse + 1 }
          }
        })
      }, 1000)
    } else if (state.mode === 'idle' || state.mode === 'paused') {
      clearInterval(timer)
    }

    // Cleanup on unmount
    return () => clearInterval(timer)
  }, [state.mode, state.autoBreak, state.autoPomo])

  return {
    state,
    setState,
    // ... other states and setters
  }
}

export default useGlobalState
