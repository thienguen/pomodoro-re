import { Pomodoro } from '@/lib/type/pomodoro.type'
import { useEffect, useState } from 'react'


const useGlobalState = () => {
  // const [breakTime, setBreakTime]         = useState(300)
  // const [longBreakTime, setLongBreakTime] = useState(900)
  // const [pomodoroTime, setPomodoroTime]   = useState(1500)
  // const [lapsesToLongBreak, setLapsesToLongBreak] = useState(4)

  // Initial state
  const [state, setState] = useState<Pomodoro>({
    timeLeft: 1500,         // for 25 minutes in seconds
    lapse   : 0,
    type    : 'Pomodoro',
    mode    : 'idle',
    message : 'Time to focus!',
  })

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined

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

  return {
    state,
    setState,
    // ... other states and setters
  }
}

export default useGlobalState
