'use client'

/* Util */
import { cn } from '@/lib/util/cn'
import { useCallback, useEffect, useState } from 'react'

/* Icons */
import { SiBuymeacoffee } from 'react-icons/si'
import { ImProfile } from 'react-icons/im'
import { BiUserCircle } from 'react-icons/bi' // Imported user icon
import { BsGear } from 'react-icons/bs' // Imported gear icon
import { AiOutlineBgColors } from 'react-icons/ai'

/* Components */
import { SettingModal } from '@/components/header/index'
import { MenuItem, Menu, HeaderButton } from '@/components/header/index'
import { useThemeContext } from '@/hooks/useThemeContext'

const RightOptions: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalToggle = useCallback(() => {
    setIsModalOpen(!isModalOpen)
  }, [isModalOpen])

  const renderMenuButton = useCallback(
    (onClick: () => void) => (
      <HeaderButton onClick={onClick}>
        <div className={cn('flex flex-row items-center')}>
          <BiUserCircle className={cn('mr-1 h-7  w-7')} /> {/* User icon */}
          Login
        </div>
      </HeaderButton>

      /* Possibly more here, if we being absolute lazy */
    ),
    []
  )

  const renderMenuButtonWithIcon = useCallback(
    (icon: React.ReactNode, text: string, handleToggle: () => void) => (
      <HeaderButton onClick={handleToggle}>
        <div className={cn('flex flex-row items-center')}>
          {icon}
          {text}
        </div>
      </HeaderButton>
    ),
    []
  )

  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
  ]

  // Extract theme changing logic
  const { theme, setTheme } = useThemeContext()

  useEffect(() => {
    localStorage.setItem('theme', theme as string)
    const localTheme = localStorage.getItem('theme')
    document.querySelector('html')?.setAttribute('data-theme', localTheme!)
  }, [theme])

  return (
    <>
      {/* Right */}
      <ul className={'flex gap-2.5'}>
        {/* Settings */}
        <li>
          <a /* href='/settings' */>
            <HeaderButton onClick={handleModalToggle}>
              <div className='flex flex-row items-center'>
                <BsGear className={cn('mr-1 h-7  w-7')} /> {/* Gear icon */}
                Setting
              </div>
            </HeaderButton>
          </a>
        </li>
        ``
        {/* Theme Changer */}
        <li>
          <Menu
            menuButton={(handleToggle) => (
              <HeaderButton onClick={handleToggle}>
                <div className={cn('flex flex-row items-center')}>
                  <AiOutlineBgColors className={cn('mr-1 h-7 w-7')} />
                  Themes
                </div>
              </HeaderButton>
            )}
          >
            {themes.map((themeName, index) => (
              <MenuItem
                key={index}
                icon={
                  <div className='flex h-3/5 gap-1'>
                    <div data-theme={themeName} className='w-2 rounded bg-primary' />
                    <div data-theme={themeName} className='w-2 rounded bg-secondary' />
                    <div data-theme={themeName} className='w-2 rounded bg-accent' />
                    <div data-theme={themeName} className='w-2 rounded bg-neutral' />
                  </div>
                }
                onClick={() => {
                  setTheme(themeName)
                }}
              >
                <span>{themeName}</span>
              </MenuItem>
            ))}
          </Menu>
        </li>
        {/* And this */}
        <li className='flex flex-row items-center'>
          <Menu menuButton={renderMenuButton}>
            <a href='https://github.com/Thienguen/pomodoro-re' target='_blank' rel='noopener noreferrer'>
              <MenuItem icon={<SiBuymeacoffee className={cn(' h-5 w-5  opacity-80')} />}>
                <p className='ml-2'>Star this project if you like it</p>
              </MenuItem>
            </a>
            <a>
              <MenuItem icon={<ImProfile className={cn('h-5 w-5 opacity-80')} />}>
                <p className='ml-2'>No login, too much works</p>
              </MenuItem>
            </a>
          </Menu>
        </li>
      </ul>

      {/* Modal */}
      {isModalOpen && <SettingModal onClose={handleModalToggle} />}
    </>
  )
}

export default RightOptions
