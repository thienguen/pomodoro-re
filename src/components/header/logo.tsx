import { cn } from '@/util/cn'

function Logo() {
  return (
    <h1 className={cn('p-2.5 align-middle text-xl')}>
      <a href='/' className={cn('flex items-center gap-1')}>
        <img src='/icons/logo.png' alt='Pomodoro-logo' width={20} height={20} />
        <p className='font-bold'>Pomofocus</p>
      </a>
    </h1>
  )
}

export default Logo
