'use client'

/* Framework */
import { useTheme } from 'next-themes'

// Libraries
import { BsSun } from 'react-icons/bs'
import { WiMoonAltWaningCrescent2 } from 'react-icons/wi'
import { Button } from '@/components/ui/custom-button'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      className='mr-3 h-9 hover:bg-slate-50 dark:hover:bg-gray-500'
      onClick={() => {
        handleThemeChange()
      }}
      rel='noreferrer'
    >
      <div className='flex w-8 items-center justify-center'>
        <WiMoonAltWaningCrescent2 className='h-6 w-5 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0' />
        <BsSun className='absolute h-6 w-5 rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100' />
      </div>
    </Button>
  )
}

export default ThemeToggle
