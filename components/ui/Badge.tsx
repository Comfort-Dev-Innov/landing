import React from 'react'

type BadgeProps = {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

const Badge = ({ variant = 'primary', children }: BadgeProps) => {
  const base = 'flex items-center px-[8px] min-[390px]:px-[14px] py-[8px] gap-[10px] rounded-[90px] font-inter text-[11px] md:text-sm text-black'
  const variants = {
    primary: 'bg-white/50',
    secondary: 'bg-secondary/[0.34]',
  }

  return (
    <div className={`${base} ${variants[variant]}`}>
      {children}
    </div>
  )
}

export default Badge