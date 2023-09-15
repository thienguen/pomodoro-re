import { cn } from '@/util/cn'

type ButtonProps = {
  icon?: React.ReactNode
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button
      className={cn(
        'flex items-center justify-center gap-1 rounded-md bg-white bg-opacity-30 p-2 text-white opacity-90 transition-transform duration-100 ease-in-out hover:opacity-100 active:translate-y-0.5 active:transform',
        'md:min-w-18 md:px-3'
      )}
      onClick={onClick}
    >
      {icon}
      <span className={cn('hidden md:block')}>{children}</span>
    </button>
  )
}

export default Button
