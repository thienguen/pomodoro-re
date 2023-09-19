'use client'

import React, { useEffect } from 'react'
import { AiOutlineBgColors } from 'react-icons/ai'

import useSound from 'use-sound'
import { themes } from '@/lib/type/theme-options'
import { useThemeContext } from '@/hooks/useThemeContext'

export default function ThemeChanger() {
  const { theme, setTheme } = useThemeContext()

  /* Sound be hitting */
  const [ThemeSound] = useSound('/sounds/page.mp3', { volume: 0.5 })
  const [SwitchOn]   = useSound('/sounds/switch-on.mp3', { volume: 0.5 })

  useEffect(() => {
    localStorage.setItem('theme', theme as string)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html')?.setAttribute('data-theme', localTheme!)
  }, [theme])

  const ref = React.useRef<HTMLUListElement | null>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
    const scrollContainer = ref.current
    if (!scrollContainer) return // Return if the ref is not attached

    let start = {
      y: event.clientY,
      scrollTop: scrollContainer.scrollTop,
    }

    const handleMouseMove = (event: MouseEvent) => {
      const dy = event.clientY - start.y
      scrollContainer.scrollTop = start.scrollTop - dy
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className='relative flex items-center justify-center bg-base-100 px-2 py-4 text-base-content'>
      <div className='dropdown dropdown-end'>
        {/* Themes options */}
        <label
          tabIndex={0}
          className='btn m-1 flex items-center justify-center rounded-lg'
          onClick={() => {
            ThemeSound()
          }}
        >
          <AiOutlineBgColors className='h-7 w-7' /> {/* <-- added the icon here */}
          Themes
        </label>

        {/* Stuff you can choose here */}
        <ul
          tabIndex={0}
          ref={ref}
          style={{ scrollBehavior: 'smooth' }}
          onMouseDown={handleMouseDown}
          className='dropdown-content rounded-box menu-vertical absolute left-1/2 top-full z-10 mt-2 flex h-60 max-h-96 w-64 -translate-x-1/2 transform flex-col items-center overflow-scroll bg-base-100 shadow-xl'
        >
          {themes.map((theme, index) => (
            <li key={index} className='flex w-full justify-center'>
              {' '}
              {/* center the li content */}
              <button
                className='text-md btn mx-1 my-1 flex w-3/4 items-center justify-between overflow-clip rounded-md hover:bg-neutral-content hover:text-neutral-focus'
                onClick={() => {
                  SwitchOn()
                  setTheme(theme)
                }}
              >
                <div className='flex h-3/5 gap-1'>
                  <div data-theme={theme} className='w-2 rounded bg-primary' />
                  <div data-theme={theme} className='w-2 rounded bg-secondary' />
                  <div data-theme={theme} className='w-2 rounded bg-accent' />
                  <div data-theme={theme} className='w-2 rounded bg-neutral' />
                </div>
                <span>{theme}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
