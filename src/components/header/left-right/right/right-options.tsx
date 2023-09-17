'use client'

/* Util */
import { cn } from '@/util/cn'
import { useCallback } from 'react'

/* Icons */
import { SiBuymeacoffee } from 'react-icons/si'
import { ImProfile } from 'react-icons/im'
import { BiUserCircle } from 'react-icons/bi' // Imported user icon
import { BsGear } from 'react-icons/bs' // Imported gear icon

/* Components */
import { MenuItem, Menu, RightButton } from '@/components/header/index'

const RightOptions: React.FC = () => {
  const renderMenuButton = useCallback(
    (onClick: () => void) => (
      <RightButton onClick={onClick}>
        <div className={cn('flex flex-row items-center')}>
          <BiUserCircle className={cn('mr-1')} /> {/* User icon */}
          Login
        </div>
      </RightButton>

      /* Possibly more here, if we being absolute lazy */
    ),
    []
  )

  return (
    <>
      {/* Right */}
      <ul className={'flex gap-2.5'}>
        {/* Settings */}
        <li>
          <a /* href='/settings' */>
            <RightButton>
              <div className='flex flex-row items-center'>
                <BsGear className={cn('mr-1')} /> {/* Gear icon */}
                Setting
              </div>
            </RightButton>
          </a>
        </li>

        {/* And this */}
        <li className='flex flex-row items-center'>
          <Menu menuButton={renderMenuButton}>
            <MenuItem icon={<SiBuymeacoffee className={cn('w-3.5 opacity-80')} />}>
              Star this project if you like it
            </MenuItem>
            <a /* href='/login' */>
              <MenuItem icon={<ImProfile className={cn('w-3.5 opacity-80')} />}>No login, too much works</MenuItem>
            </a>
          </Menu>
        </li>
      </ul>
    </>
  )
}

export default RightOptions
