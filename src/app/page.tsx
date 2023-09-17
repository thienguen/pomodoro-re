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

// import { modes, SHORT_BREAK, LONG_BREAK } from '@/util/mode'
import { Header } from '@/components/header/index'
import { Background, LapseCounter, Timer, ControlButtons } from '@/components/home/index'

export default function Home() {
  // const currentMode = modes[SHORT_BREAK] // For demonstration, using SHORT_BREAK as default
  
  return (
    <>
      {/* Navbar */}
      <Header />

      {/* Body */}
      <Background>
        <LapseCounter />
        <Timer />
        <ControlButtons />
      </Background>
    </>
  )
}
