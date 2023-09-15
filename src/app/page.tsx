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
import { cn } from '@/util/cn'
// import { modes, SHORT_BREAK, LONG_BREAK } from '@/util/mode'
import {Header} from '@/components/header/index'

export default function Home() {
  // const currentMode = modes[SHORT_BREAK] // For demonstration, using SHORT_BREAK as default

  return (
    <>
      <div
        className={cn(
          'mx-auto flex max-w-2xl flex-col p-4 text-white transition-colors duration-500'
        )}
      >
        <Header />
        <div className={cn('max-w-9/12 flex w-full flex-grow flex-col self-center p-4 font-light')}>
          {/* <Timer /> */}
        </div>
      </div>

      <div
        className={cn(
          'mx-auto flex h-52 w-full flex-row items-center justify-center text-4xl font-bold'
        )}
      >
        Somethingholy
        <ThemeToggle />
      </div>
    </>
  )
}
