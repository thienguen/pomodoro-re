'use client'

import React, { createContext, useContext } from 'react'

interface ThemeContextProps {
  theme   : string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeChangerProvider')
  }
  return context
}