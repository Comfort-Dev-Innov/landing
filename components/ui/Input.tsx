import { cn } from "@/lib/utils"

const Input = ({ placeholder, className, error = '' }: { placeholder: string, className: string, error?: string }) => {
    return (
        <div className="flex flex-col gap-[8px] w-full">
            <input type="text" className={cn("w-full border border-[#D5D7DA] rounded-[4px] p-[10px] text-sm md:text-base placeholder:font-poppins placeholder:text-[#525252]", className)} placeholder={placeholder} />
            {error != '' && <p className='font-poppins italic text-[#D7282F] text-[14px]'>{error}</p>}
        </div>
    )
}

export default Input