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

/* Constants */
export const POMODORO    = "pomodoro";
export const SHORT_BREAK = "short_break";
export const LONG_BREAK  = "long_break";

export const modes = [
  {
    id: "pomodoro",
    label: "Pomodoro",
    timeLeft: 25 * 60, // 25 minutes in seconds
  },
  {
    id: "short_break",
    label: "Short Break",
    timeLeft: 5 * 60, // 5 minutes in seconds
  },
  {
    id: "long_break",
    label: "Long Break",
    timeLeft: 15 * 60, // 15 minutes in seconds
  },
];


/* Unused */
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
