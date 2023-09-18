import { cn } from '@/lib/util/cn'

function Logo() {
  return (
    <h1 className={cn('p-2.5 align-middle text-xl flex flex-row gap-1 select-none')}>
      <a href='/' className={cn('flex items-center')}>
        <img src='/icons/logo.png' alt='Pomodoro-logo' width={20} height={20} className='dark:invert-0 invert'/>
      </a>
        <p className='font-bold dark:text-white text-black'>Pomodoro-re</p>
    </h1>
  )
}

export default Logo
