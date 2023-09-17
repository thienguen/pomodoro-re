'use client'

/* Components */
import { RightOptions, Logo } from '@/components/header/index'

function Header() {
  return (
    <>
      <div className={'mx-auto flex max-w-2xl p-4 text-white'}>
        <div className={'h-15 max-w-10/12 flex w-full items-center justify-between px-2'}>
          {/* Left */}
          <Logo />
          {/* Right */}
          <RightOptions />
        </div>
      </div>
    </>
  )
}

export default Header
