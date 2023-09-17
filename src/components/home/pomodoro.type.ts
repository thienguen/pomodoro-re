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
