export type PomodoroContextType = {
  state: Pomodoro
  setState: React.Dispatch<React.SetStateAction<Pomodoro>>
}

// Expanding on the Pomodoro type to include the possible modes and types
// This is excessive wtf
export type Mode = 'idle' | 'running' | 'paused' | 'finished'
export type TimerType = 'Pomodoro' | 'Short Break' | 'Long Break' | 'work'
export type MessageType = 'Time to focus!' | 'Time for a break!' | 'Time for a longer break!'

export type ModeType = {
  type    : TimerType
  timeLeft: number
  message : MessageType
}

/**
 * Typed it above, fill the value here
 * Whenever use, this fill in, this is where TS become annoyence of
 * type gymnastic. Excessive, but at the same time, really powerful to expand
 */
export const modes: ModeType[] = [
  {
    type    : 'Short Break',
    timeLeft: 5 * 60,             // 5 minutes in seconds
    message : 'Time to focus!',
  },
  {
    type    : 'Pomodoro',
    timeLeft: 25 * 60,               // 25 minutes in seconds
    message : 'Time for a break!',
  },
  {
    type    : 'Long Break',
    timeLeft: 15 * 60,                      // 15 minutes in seconds
    message : 'Time for a longer break!',
  },
]

/**
 * lapse   : breh
 * type    : pomodoro, short-break, long-break
 * timeLeft: time left in seconds
 * mode    : idle,     running,     paused, resume
 */
export type Pomodoro = {
  timeLeft : number
  lapse    : number
  autoBreak: boolean
  autoPomo : boolean

  mode   : Mode
  type   : TimerType
  message: MessageType
  modes  : ModeType[]
}
