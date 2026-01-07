'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GlowEffect } from '../ui/GlowEffect'

export function CTAFinal() {
    return (
        <section className="relative overflow-hidden bg-dark py-32 text-center text-white">
            {/* Deep Space Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-dark to-black" />

            {/* Animated Particles / Stars (Static representation for now) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
                <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_#CCFF00] animate-bounce" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full shadow-[0_0_10px_#8B5CF6]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-16"
                >
                    <GlowEffect className="opacity-20 translate-y-10" />

                    <h2 className="mb-6 text-4xl font-bold lg:text-6xl tracking-tight">
                        Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">scaler</span> votre acquisition ?
                    </h2>
                    <p className="mb-10 text-xl text-gray-300 max-w-2xl mx-auto">
                        Testez sans engagement. Premier lot de leads offert pour évaluer la qualité et la pertinence de notre ciblage.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/formulaire" className="group relative flex h-14 min-w-[200px] items-center justify-center overflow-hidden rounded-xl bg-primary px-8 text-lg font-bold text-dark transition-all hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(204,255,0,0.6)]">
                            <span className="relative z-10">Obtenir mes leads gratuits</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-500" />
                        </Link>
                        <Link href="/formulaire" className="flex h-14 min-w-[200px] items-center justify-center rounded-xl border-2 border-white/20 bg-transparent px-8 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white">
                            Réserver un appel
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}
