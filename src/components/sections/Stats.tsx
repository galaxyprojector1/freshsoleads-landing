'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const stats = [
    {
        value: '12M+',
        label: 'Leads générés',
        description: 'depuis 2019'
    },
    {
        value: '94%',
        label: 'Taux de validité',
        description: 'leads vérifiés'
    },
    {
        value: '<30s',
        label: 'Temps de livraison',
        description: 'en moyenne'
    },
    {
        value: '4.8/5',
        label: 'Satisfaction client',
        description: '+500 avis'
    }
]

export function Stats() {
    return (
        <section className="relative overflow-hidden bg-dark py-20">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col items-center justify-center text-center px-4"
                                >
                                    <div className="mb-2 text-4xl font-black tracking-tight text-white lg:text-5xl group-hover:text-primary transition-colors duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="mb-1 text-lg font-bold text-gray-200">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.description}
                                    </div>
                                </motion.div>

                                {/* Vertical Separator (Desktop only, except last item) */}
                                {idx < stats.length - 1 && (
                                    <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />
                                )}
                                {/* Horizontal Separator (Mobile only, except last item) */}
                                {idx < stats.length - 1 && (
                                    <div className="mx-auto mt-8 h-px w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent lg:hidden" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
