'use client'

import { cn } from "@/lib/util/cn"
import { themesRequiringInvert } from "@/lib/type/theme-options"
import { useThemeContext } from "@/hooks/useThemeContext"

type FooterBarProps = {
  isFullWidth?: boolean
}

function FooterBar({ isFullWidth }: FooterBarProps) {

  const { theme } = useThemeContext()
  const requireInvert = themesRequiringInvert.includes(theme)

  return (
    <div className={cn(isFullWidth ? 'w-full' : 'max-w-2xl', 'mx-auto', requireInvert ? 'invert' : 'invert-0')}>
      {/* Footer Bar section */}
      <div className="flex h-[15px] items-center justify-between">
        {/* Dot at the beginning */}
        <div
          className={`flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-b from-gray-600 to-gray-400  shadow dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100`}
        />

        {/* Bar in between */}
        <div className={`h-[2px] grow bg-slate-800 dark:bg-slate-50`} />

        {/* Dot at the end */}
        <div
          className={`flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-b from-gray-600 to-gray-400  shadow dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-100`}
        />
      </div>
    </div>
  )
}

export default FooterBar