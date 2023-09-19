import React, { FC } from 'react'

interface ItemProps {
  col     ?: boolean
  children : React.ReactNode
}

const Item: FC<ItemProps> = ({ children, col }) => (
  <div
    className={`flex min-h-[30px] border-t border-gray-300 py-4 ${
      col ? 'flex-col items-start' : 'items-center justify-between'
    }`}
  >
    {children}
  </div>
)

export default Item
