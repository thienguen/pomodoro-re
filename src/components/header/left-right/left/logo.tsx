'use client'

import useSound from 'use-sound'
import { HeaderButton } from '@/components/header/index'
import { TbBrandAmongUs } from 'react-icons/tb'

type LogoProps = {
  isMobile: boolean
}

function Logo({ isMobile }: LogoProps) {
  const [ThemeSound] = useSound('/sounds/page.mp3', { volume: 0.5 })

  return (
    <h1 className={`select-none ${isMobile ? 'hidden' : ''}`}>
      <HeaderButton icon={<TbBrandAmongUs className={`h-7 w-7`} />}>
        <p
          className='round-lg mx-0 pl-0 text-xl font-semibold'
          onClick={() => {
            ThemeSound()
          }}
        >
          Pomodoro
        </p>
      </HeaderButton>
    </h1>
  )
}

export default Logo
