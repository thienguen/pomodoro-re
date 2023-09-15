'use client'

import { SiBuymeacoffee } from 'react-icons/si'
import { ImProfile } from 'react-icons/im'
import { BiUserCircle } from 'react-icons/bi' // Imported user icon
import { BsGear } from 'react-icons/bs' // Imported gear icon
import { MenuItem, Menu, HeaderButton } from '@/components/header/index'
import Logo from '@/components/header/logo'
import { useCallback } from 'react'
import { cn } from '@/util/cn'

const Header: React.FC = () => {

  const renderMenuButton = useCallback(
    (onClick: () => void) => (
      <HeaderButton onClick={onClick}>
        <div className={cn('flex flex-row items-center')}>
          <ImProfile className={cn('mr-1')} /> {/* User icon */}
          Login
        </div>
      </HeaderButton>
    ),
    []
  )

  return (
    <div className={cn('max-w-10/12 mx-auto flex w-full px-2')}>
      <div className={cn('h-15 flex w-full items-center justify-between')}>
        <Logo />
        <ul className={cn('flex items-center gap-2.5')}>
          {/* Settings */}
          <li>
            <a /* href='/settings' */>
              <HeaderButton>
                <div className={cn('flex flex-row items-center')}>
                  <BsGear className={cn('mr-1')} /> {/* Gear icon */}
                  Setting
                </div>
              </HeaderButton>
            </a>
          </li>

          {/* And this */}
          <li>
            <Menu menuButton={renderMenuButton}>
              <MenuItem icon={<SiBuymeacoffee className={cn('w-3.5 opacity-80')} />}>
                Star this project if you like it
              </MenuItem>
              <a /* href='/login' */>
                <MenuItem icon={<BiUserCircle className={cn('w-3.5 opacity-80')} />}>
                  No login, too much works
                </MenuItem>
              </a>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
