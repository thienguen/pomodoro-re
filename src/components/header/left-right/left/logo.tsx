'use client'

import { HeaderButton } from '@/components/header/index'
import { TbBrandAmongUs } from 'react-icons/tb'

type LogoProps = {
  isMobile: boolean
}

function Logo({ isMobile }: LogoProps) {
  return (
    <h1 className={`select-none ${isMobile ? 'hidden' : ''}`}>
      <HeaderButton icon={<TbBrandAmongUs className={`h-7 w-7`} />}>
        <p className='round-lg mx-0 pl-0 text-xl font-semibold'>Pomodoro</p>
      </HeaderButton>
    </h1>
  )
}

export default Logo
