import React from 'react'
import { IconProps } from './types'

const SendIcon = ({
  size = 24,
  color = 'white',
  className,
}: IconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13Z" fill={color} />
    </svg>
  )
}

export default SendIcon
