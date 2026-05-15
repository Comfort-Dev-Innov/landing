import { cn } from "@/lib/utils"

const TextArea = ({ placeholder, className, error = '' }: { placeholder: string, className: string, error?: string }) => {
    return (
        <div className="flex flex-col gap-[8px]">
            <textarea className={cn("w-full border border-[#D5D7DA] rounded-[4px] p-[10px] placeholder:font-poppins placeholder:text-[#525252] resize-none min-h-[83px]", className)} placeholder={placeholder} required />
            {error != '' && <p className='font-poppins italic text-[#D7282F] text-[14px]'>{error}</p>}
        </div>
    )
}

export default TextArea