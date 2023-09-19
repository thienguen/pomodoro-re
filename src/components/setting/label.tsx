import React, { FC } from 'react'

interface LabelProps {
  children: React.ReactNode
}

const Label: FC<LabelProps> = ({ children }) => (
  <label className='font-semibold text-gray-500'>
    {children} {/* Something holy */}
  </label>
)

export default Label
