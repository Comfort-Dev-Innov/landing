'use client'
import React from 'react'
import { motion } from 'motion/react'

interface ServiceCardProps {
    title: string
    description: string
    index: number
    icon: React.ReactNode
}

const ServiceCard = ({ title, description, index, icon }: ServiceCardProps) => {
    return (
        <motion.div
            className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-[200px] flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
        >
            {/* macOS-style tab with dots */}
            <div className="bg-gray-100/80 border-b border-gray-200 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                    <div className="w-full h-1 bg-gray-300 rounded-full"></div>
                </div>
            </div>
            
            {/* Card content */}
            <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="text-primary text-2xl">
                            {icon}
                        </div>
                        <h3 className="text-base min-[530px]:text-lg font-black text-gray-800 leading-tight">
                            {title}
                        </h3>
                    </div>
                    <p className="text-gray-600 text-sm min-[530px]:text-base leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default ServiceCard 