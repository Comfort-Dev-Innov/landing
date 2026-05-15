import React from 'react'

interface LogoCardProps {
  icon: React.ReactNode
}

const LogoCard = ({ icon }: LogoCardProps) => {
  return (
    <div className='rounded-[12px] p-[4px] bg-white shadow-xs border border-[#E9EAEB]'>
      <div className='w-[80px] h-[80px] flex items-center justify-center p-[10px]'>
        {icon}
      </div>
    </div>
  )
}

export default LogoCard