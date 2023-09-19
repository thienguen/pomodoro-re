// Expanding on the Pomodoro type to include the possible modes and types
// This is excessive wtf
export type Mode = 'idle' | 'running' | 'paused' | 'finished'
export type TimerType = 'pomodoro' | 'shortBreak' | 'longBreak' | 'work'

/**
 * lapse: breh
 * type: pomodoro, short-break, long-break
 * timeLeft: time left in seconds
 * mode: idle, running, paused, resume
 */
export type Pomodoro = {
  timeLeft: number
  lapse   : number
  mode    : Mode
  type    : TimerType
}

export type PomodoroContextType = {
  state   : Pomodoro
  setState: React.Dispatch<React.SetStateAction<Pomodoro>>
}

export const modes = [
  {
    type    : 'shortBreak',
    label   : 'Short Break',
    timeLeft: 5 * 60,          // 5 minutes in seconds
  },
  {
    type    : 'pomodoro',
    label   : 'Pomodoro',
    timeLeft: 25 * 60,        // 25 minutes in seconds
  },
  {
    type    : 'longBreak',
    label   : 'Long Break',
    timeLeft: 15 * 60,        // 15 minutes in seconds
  },
]

/* Unused */
// export const POMODORO    = "pomodoro";
// export const SHORT_BREAK = "short_break";
// export const LONG_BREAK  = "long_break";

// export type ModeType = {
//   id   : string;
//   label: string;
//   time : number;
// };

// export const modes: Record<string, ModeType> = {
//   [POMODORO]: {
//     id   : POMODORO,
//     label: "Pomodoro",
//     time : 25,
//   },
//   [SHORT_BREAK]: {
//     id   : SHORT_BREAK,
//     label: "Short Break",
//     time : 5,
//   },
//   [LONG_BREAK]: {
//     id   : LONG_BREAK,
//     label: "Long Break",
//     time : 15,
//   },
// };
