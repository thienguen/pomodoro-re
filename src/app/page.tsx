/*
 * Plans: think best to make it simple, theme aint' simple tho.
  * Step:  
  *   1. Setup the structure, file and what need to be done for the POMODORO itslef
  *   2. Setup the theme, daisy ui, see how much we can push this theme 
  *   3. Setup the timer, and the logic
  *   4. Setup the sound, interagte icosn and routeing, between setting and timer ?
  *   5. Testing?
  *   6. Deploy, debatable
 */

import ThemeToggle from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <>
      <div className='mx-auto flex h-52 w-full flex-row items-center justify-center text-4xl font-bold '>
        Somethingholy {/* Something holySomething holySomething holySomething holy */}
        <ThemeToggle />
      </div>
    </>
  )
}
