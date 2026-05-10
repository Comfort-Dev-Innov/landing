import { cn } from '@/lib/utils'
import React from 'react'

const Heading = ({ title, subTitle, description, className, leftAlign = false }: { title: string, subTitle: string, description: string, className: string, leftAlign?: boolean }) => {
  return (
    <div className={cn('flex flex-col gap-[12px] w-full', leftAlign ? 'items-start' : 'items-center', className)}>
      <p className='font-inter font-bold text-[11px] md:text-[14px] text-primary'>{subTitle}</p>
      <h2 className={cn('text-2xl md:text-4xl font-poppins font-bold', leftAlign ? 'text-left' : 'text-center')}>
        {title}
      </h2>
      <p className={cn('text-sm md:text-base font-inter text-black', leftAlign ? 'text-left' : 'text-center')}>
        {description}
      </p>
    </div>
  )
}

export default Heading