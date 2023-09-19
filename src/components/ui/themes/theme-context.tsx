'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { ThemeContext } from '@/hooks/useThemeContext'

interface ThemeChangerProviderProps {
  children: ReactNode
}

export const ThemeChangerProvider: React.FC<ThemeChangerProviderProps> = ({ children }) => {
  // default to winter theme, lightly said
  const [theme, setTheme] = useState<string>('winter')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.querySelector('html')?.setAttribute('data-theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
