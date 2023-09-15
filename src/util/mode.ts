export const POMODORO    = "pomodoro";
export const SHORT_BREAK = "short_break";
export const LONG_BREAK  = "long_break";

export type ModeType = {
  id   : string;
  label: string;
  time : number;
};

export const modes: Record<string, ModeType> = {
  [POMODORO]: {
    id   : POMODORO,
    label: "Pomodoro",
    time : 25,
  },
  [SHORT_BREAK]: {
    id   : SHORT_BREAK,
    label: "Short Break",
    time : 5,
  },
  [LONG_BREAK]: {
    id   : LONG_BREAK,
    label: "Long Break",
    time : 15,
  },
};
