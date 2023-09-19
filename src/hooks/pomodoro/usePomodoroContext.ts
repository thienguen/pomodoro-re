
// usePomodoroContext.ts
import { useContext } from 'react'
import { PomodoroContext } from '@/components/provider/PomodoroContextProvider'

// Create a custom hook to use the context
export const usePomodoroContext = () => {
  return useContext(PomodoroContext)
}
