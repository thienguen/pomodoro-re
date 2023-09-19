'use client'

import { cn } from '@/lib/util/cn'
import useSound from 'use-sound'

type ButtonProps = {
  icon    ?: React.ReactNode
  children : React.ReactNode
  onClick ?: () => void
}

const HeaderButton: React.FC<ButtonProps> = ({ icon, children, onClick }) => {

  const [ThemeSound] = useSound('/sounds/open.mp3', { volume: 0.5 })

  return (
    <button
      className={cn(
        'flex flex-row items-center justify-center gap-1 rounded-md p-2 transition-transform duration-100 ease-in-out active:translate-y-1 active:transform',
        'min-w-18 select-none bg-opacity-30 px-3 opacity-90',
        'btn btn-ghost'
      )}
      onClick={() => onClick && (ThemeSound(), onClick())}
    >
      {icon}
      <span className={cn('md:block')}>{children}</span>
    </button>
  )
}

export default HeaderButton
