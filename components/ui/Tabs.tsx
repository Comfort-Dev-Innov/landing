'use client'

import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type TabItem = {
  label: string
  value: string
  icon?: React.ReactNode
}

type TabsProps = {
  items: TabItem[]
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

const Tabs = ({ items, defaultValue, onValueChange, className }: TabsProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue ?? items[0]?.value ?? '')

  const handleTabClick = (value: string) => {
    setActiveValue(value)
    onValueChange?.(value)
  }

  return (
    <div className={cn('flex items-center justify-center gap-[12px]', className)} role="tablist">
      {items.map((item) => {
        const isActive = item.value === activeValue

        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(
              'flex items-center justify-center gap-[10px] border-b-2 px-[12px] md:px-[14px] py-[8px] md:py-[12px] font-inter text-sm md:text-lg text-black transition-colors duration-200 hover:cursor-pointer',
              isActive ? 'border-primary' : 'border-black/15 hover:border-black/30'
            )}
            onClick={() => handleTabClick(item.value)}
          >
            {item.icon && <span className="flex size-[20px] items-center justify-center">{item.icon}</span>}
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs
