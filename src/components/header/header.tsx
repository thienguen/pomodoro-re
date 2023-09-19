'use client'

/* Components */
import { RightOptions, Logo } from '@/components/header/'
import ThemeChanger from '@/components/ui/themes/theme-changer'

/* Util */
import { cn } from '@/lib/util/cn'
import { useMediaWidth } from '@/hooks/useMediaWidth'

function Header() {
  const isMobile = useMediaWidth('450px', true)

  return (
    <>
      <div className='mx-auto flex max-w-2xl items-center justify-center '>
        <ThemeChanger />
      </div>
      <div className={'mx-auto flex max-w-2xl py-4 pr-4'}>
        <div className={'h-15 max-w-10/12 flex w-full items-center justify-between px-2'}>
          {/* Left */}
          <div>
            <Logo isMobile={isMobile ?? false} />
          </div>

          {/* Right */}
          <div className={cn(isMobile ? 'flex w-full justify-center' : '')}>
            <RightOptions />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
