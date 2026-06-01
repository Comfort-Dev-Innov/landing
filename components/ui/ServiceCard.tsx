import React from 'react'

interface ServiceCardProps {
  icon: React.ReactNode
  serviceName: string
  serviceDescription: string
}

const ServiceCard = ({ icon, serviceName, serviceDescription }: ServiceCardProps) => {
  return (
    <div className="bg-[#FDFDFD] p-[24px] flex flex-col gap-[64px] rounded-[12px]">
      <div className="bg-primary rounded-[10px] size-[48px] flex items-center justify-center">
        <div className="size-[24px]">{icon}</div>
      </div>
      <div className="flex flex-col gap-[8px]">
        <p className="font-inter font-semibold text-[20px] text-black">{serviceName}</p>
        <p className="font-inter text-base" style={{ color: 'rgba(21, 21, 21, 0.64)' }}>
          {serviceDescription}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
