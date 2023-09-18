/**
 * lapse: breh
 * type: pomodoro, short-break, long-break
 * timeLeft: time left in seconds
 * mode: idle, running, paused, resume
 */
export type Pomodoro = {
  timeLeft: number;
  lapse   : number;
  mode    : string;
  type    : string;
}

export type PomodoroContextType = {
  state   : Pomodoro;
  setState: React.Dispatch<React.SetStateAction<Pomodoro>>;
}

export const modes = [
  {
    type: "pomodoro",
    label: "Pomodoro",
    timeLeft: 25 * 60, // 25 minutes in seconds
  },
  {
    type: "short-break",
    label: "Short Break",
    timeLeft: 5 * 60, // 5 minutes in seconds
  },
  {
    type: "long-break",
    label: "Long Break",
    timeLeft: 15 * 60, // 15 minutes in seconds
  },
];

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
