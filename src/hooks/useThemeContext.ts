'use client'

import React, { createContext, useContext } from 'react'


/**
 * Context of theme, so we simply have theme sync 
 * across the app
 * 
 * Since the provider wrap around the layout, this can be utilize
 * to grep the theme from the context. DaisyUI am i rite?
 */
interface ThemeContextProps {
  theme   : string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const useThemeContext = () => {
  return useContext(ThemeContext)! // <-- we know it's not undefined, breh
}