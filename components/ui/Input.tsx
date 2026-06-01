import { cn } from "@/lib/utils"
import React from "react"

interface InputProps {
  placeholder: string
  className?: string
  error?: string
  type?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  name?: string
}

const Input = ({ placeholder, className = '', error = '', type = 'text', value, onChange, name }: InputProps) => {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className={cn("w-full border border-[#D5D7DA] rounded-[4px] p-[10px] text-sm md:text-base placeholder:font-poppins placeholder:text-[#525252]", className)}
              placeholder={placeholder}
            />
            {error !== '' && <p className='font-poppins italic text-[#D7282F] text-[14px]'>{error}</p>}
        </div>
    )
}

export default Input
