import { cn } from '@/util/cn'

type ButtonProps = {
  icon    ?: React.ReactNode
  children : React.ReactNode
  onClick ?: () => void
}

const RightButton: React.FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-1 rounded-md p-2 transition-transform duration-100 ease-in-out hover:opacity-100 active:translate-y-0.5 active:transform',
        'min-w-18 px-3',
        'bg-opacity-30 opacity-90',
        'dark:bg-white dark:text-black', // Dark theme specific styles
        'bg-black text-white'            // Light theme specific styles
      )}
      onClick={onClick}
    >
      {icon}
      <span className={cn('md:block')}>{children}</span>
    </button>
  )
}

export default RightButton
