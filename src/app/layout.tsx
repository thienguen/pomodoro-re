'use client'

/* Styles */
import '@/styles/globals.css'
import '@/styles/cursor.css'

/* Util */
import type { ServerRuntime } from 'next'
import useCursorAnimation from '@/hooks/useCursorAnimation'
import { themesRequiringInvert } from '@/lib/type/theme-options'
import { useThemeContext } from '@/hooks/useThemeContext'

/* Compoents */
/* Theme Provider */
import { Footer } from '@/components/footer/'
import { ThemeChangerProvider } from '@/components/ui/themes/theme-context'

/**
 * Someone complained last time I have a funny layout, not anymore
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeChangerProvider>
      <InnerLayout>
        {children} {/* something holy holy */}
      </InnerLayout>
    </ThemeChangerProvider>
  )
}

interface InnerLayoutProps {
  children: React.ReactNode
}

const InnerLayout: React.FC<InnerLayoutProps> = ({ children }) => {
  const { theme } = useThemeContext()
  const cursorRef = useCursorAnimation()

  const isDarkCursor = themesRequiringInvert.includes(theme)
  const cursorClass = isDarkCursor ? 'cursor-dark' : 'cursor-light'

  return (
    <html lang='en' suppressHydrationWarning={true} data-theme='cupcake'>
      {/* Metadata */}
      <head>
        <title>{'Thien Nguyen'}</title>
        <meta content={'Thienguen'} property='og:title' />
        <meta content={'Recreating Pomodoro, cause I said so'} property='og:description' />
        <link id="favicon" rel="icon" href="/fav/favicon-gray-16x16.png" />
      </head>

      {/* Body layout */}
      <body className={'flex min-h-screen flex-col font-dosis antialiased'} suppressHydrationWarning={true}>
        {/* Custom cursor */}
        <div
          ref={cursorRef}
          className={`pointer-events-none fixed z-[9999] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 lg:block ${cursorClass}`}
        />

        {/* The actual body, everything */}
        <div className='grow'>
          {children}
        </div>

        {/* Grow till footer hit the end of viewport */}
        <Footer />
      </body>
    </html>
  )
}

// Experimental
export const runtime: ServerRuntime = 'edge'
