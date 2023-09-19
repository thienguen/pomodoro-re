'use client'

import React, { createContext } from 'react';
import { Pomodoro } from '@/lib/type/pomodoro.type';
import useGlobalState from '@/hooks/pomodoro/useGlobalState';

export const PomodoroContext = createContext<PomodoroStore | null>(null);

interface PomodoroStore {
  state   : Pomodoro;
  setState: React.Dispatch<React.SetStateAction<Pomodoro>>;
}

interface PomodoroContextProviderProps {
  children: React.ReactNode
}

export const PomodoroContextProvider: React.FC<PomodoroContextProviderProps> = ({ children }) => {
  const store = useGlobalState()

  return (
    <PomodoroContext.Provider value={store}>
      {children} {/* Something holy holy */}
    </PomodoroContext.Provider>
  )
}
