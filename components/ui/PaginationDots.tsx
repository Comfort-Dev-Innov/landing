import React from 'react'

interface PaginationDotsProps {
    total: number
    current: number
    onChange: (index: number) => void
}

const PaginationDots = ({ total, current, onChange }: PaginationDotsProps) => {
    return (
        <div className="flex items-center gap-[16px]">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`size-[10px] rounded-full transition-all duration-300 ease-in-out hover:scale-125 ${
                        i === current ? 'bg-primary' : 'bg-[#EAEAEA] hover:bg-[#c8c8c8]'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                />
            ))}
        </div>
    )
}

export default PaginationDots
