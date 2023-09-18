import { ReactNode } from 'react'
import { cn } from '@/lib/util/cn'

type MenuItemProps = {
  children: ReactNode
  src?: string
  icon?: ReactNode
  onClick?: () => void
}

function MenuItem({ children, src, icon, onClick }: MenuItemProps) {
  return (
    <button
      className={cn(
        'flex w-full cursor-pointer items-center justify-start gap-2 rounded-none border-0 bg-transparent p-2.5 text-sm text-[rgb(79,43,45)] hover:bg-[rgb(241,238,238)]'
      )}
      onClick={onClick}
    >
      {src && <img src={src} alt='' className={cn('w-3.5 opacity-80')} />}
      {icon && <div className={cn('w-3.5 opacity-80')}>{icon}</div>}
      {children}
    </button>
  )
}

export default MenuItem
