import React from 'react'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  icon?: React.ReactNode
  children?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-tertiary text-black text-lg font-bold py-[8px] px-[18px] rounded-[65px] font-poppins transition-all duration-300 hover:shadow-[0_0_18px_4px_rgba(251,192,14,0.45)] hover:brightness-105 hover:scale-[1.03] active:scale-[0.97]',
  secondary:
    'bg-primary text-lg text-white font-bold py-[14px] px-[24px] rounded-[8px] font-poppins gap-[10px] transition-all duration-300 hover:shadow-[0_0_18px_4px_rgba(41,179,255,0.45)] hover:brightness-105 hover:scale-[1.03] active:scale-[0.97]',
}

const Button = ({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center cursor-pointer gap-[10px] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  )
}

export default Button