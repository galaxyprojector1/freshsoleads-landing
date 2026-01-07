'use client'
import { motion } from 'framer-motion'

interface GlowEffectProps {
    className?: string
    animate?: boolean
}

export function GlowEffect({ className, animate = true }: GlowEffectProps) {
    return (
        <motion.div
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
            initial={{ opacity: 0.5 }}
            animate={animate ? {
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
            } : {}}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {/* Gradient blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-gradient-to-r from-[#CCFF00]/20 via-[#8B5CF6]/20 to-[#CCFF00]/20
                      blur-[100px]" />
        </motion.div>
    )
}
