/* Styles */
import '@/styles/globals.css'

/* Util */
import { cn } from '@/util/cn'
// import type { ServerRuntime } from 'next'

/* Theme Provider */
import { ThemeProvider } from '@/components/provider/ThemeProvider'

// export const runtime: ServerRuntime = 'edge'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <title>{'Thien Nguyen'}</title>
        <meta content={'Thienguen'} property='og:title' />
        <meta content={'Recreating Pomodoro, cause I said so'} property='og:description' />
        {/* <link rel="icon" href="/images/monika-fa.png" /> as if I know how app router works */}
      </head>

      <body
        className={cn(
          'font-dosis antialiased',
          'bg-gradient-to-b from-[#c8c0b7] to-[#c8c0b7]' // light
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {/* <div className='bg-red-500'> */}
          {children}
          {/* </div> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
