import { cn } from '@/lib/util/cn'

type ButtonProps = {
  icon    ?: React.ReactNode
  children : React.ReactNode
  onClick ?: () => void
}

const HeaderButton: React.FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button
      className={cn(
        'flex flex-row items-center justify-center gap-1 rounded-md p-2 transition-transform duration-100 ease-in-out active:translate-y-1 active:transform',
        'min-w-18 px-3 bg-opacity-30 opacity-90 select-none',
        'btn btn-ghost'
      )}
      onClick={onClick}
    >
      {icon}
      <span className={cn('md:block')}>{children}</span>
    </button>
  )
}


export default HeaderButton
