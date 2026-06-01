import { cn } from "@/lib/utils"
import React from "react"

interface TextAreaProps {
  placeholder: string
  className?: string
  error?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  name?: string
}

const TextArea = ({ placeholder, className = '', error = '', value, onChange, name }: TextAreaProps) => {
    return (
        <div className="flex flex-col gap-[8px]">
            <textarea
              name={name}
              value={value}
              onChange={onChange}
              className={cn("w-full border border-[#D5D7DA] rounded-[4px] p-[10px] placeholder:font-poppins placeholder:text-[#525252] resize-none min-h-[83px]", className)}
              placeholder={placeholder}
            />
            {error !== '' && <p className='font-poppins italic text-[#D7282F] text-[14px]'>{error}</p>}
        </div>
    )
}

export default TextArea
