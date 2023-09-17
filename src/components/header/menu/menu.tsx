'use client'

import { useCallback, useEffect, useRef, useState, ReactNode, FC } from 'react'
import { cn } from '@/util/cn'

type MenuProps = {
  children  : ReactNode
  menuButton: (handleToggle: () => void) => ReactNode
}

const Menu: FC<MenuProps> = ({ children, menuButton }) => {
  const containerRef          = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const onDismiss             = useCallback(() => setVisible(false), [])
  const handleToggle          = useCallback(() => setVisible((prev) => !prev), [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setVisible(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={cn('relative inline-block')} ref={containerRef}>
      {/* Show this at first, onClick, show the MenuItems */}
      {menuButton(handleToggle)}
      {visible && (
        <div
          onClick={onDismiss}
          className={cn(
            'absolute right-0 top-full z-50 flex h-auto w-52 translate-y-2.5 transform flex-col rounded-md bg-white p-1 shadow-md'
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default Menu
