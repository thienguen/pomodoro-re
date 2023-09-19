import React, { FC } from 'react'

interface RowProps {
  right   ?: boolean
  margin  ?: boolean
  children : React.ReactNode
}

const Row: FC<RowProps> = ({ children, right, margin }) => (
  <div className={`flex w-full items-center justify-between ${right ? 'justify-end' : ''} ${margin ? 'mt-5' : ''}`}>
    {children}
  </div>
)

export default Row
