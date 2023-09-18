/* Styles */
import '@/styles/globals.css'

/* Util */
import type { ServerRuntime } from 'next'

/* Theme Provider */
import { ThemeChangerProvider } from '@/components/ui/themes/theme-context'

/* Compoents */
import { Footer } from '@/components/footer/'

/**
 * Someone complained last time I have a funny layout, not anymore
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeChangerProvider>
      <html lang='en' suppressHydrationWarning={true} data-theme='cupcake'>
        {/* Metadata */}
        <head>
          <title>{'Thien Nguyen'}</title>
          <meta content={'Thienguen'} property='og:title' />
          <meta content={'Recreating Pomodoro, cause I said so'} property='og:description' />
        </head>

        {/* Body layout */}
        <body className={'flex min-h-screen flex-col font-dosis antialiased'} suppressHydrationWarning={true}>
          <div className='grow'>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ThemeChangerProvider>
  )
}

export const runtime: ServerRuntime = 'edge'
