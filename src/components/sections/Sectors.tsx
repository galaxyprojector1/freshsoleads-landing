'use client'
import {
    Zap, Sun, Home, Shield, Building2, Heart,
    Smartphone, Leaf, Car, GraduationCap, Briefcase,
    Headphones, Plane, Stethoscope, Factory, Wifi
} from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const sectors = [
    { id: 'hvac', title: 'Pompe à Chaleur', icon: Zap, color: 'text-yellow-500' },
    { id: 'solar', title: 'Solaire', icon: Sun, color: 'text-orange-500' },
    { id: 'iso', title: 'Isolation', icon: Home, color: 'text-green-500' },
    { id: 'insurance', title: 'Assurance', icon: Shield, color: 'text-blue-500' },
    { id: 'real-estate', title: 'Immobilier', icon: Building2, color: 'text-indigo-500' },
    { id: 'senior', title: 'Mutuelle', icon: Heart, color: 'text-pink-500' },
    { id: 'telecom', title: 'Télécom', icon: Smartphone, color: 'text-purple-500' },
    { id: 'energy', title: 'Énergie', icon: Leaf, color: 'text-emerald-500' },
    { id: 'auto', title: 'Automobile', icon: Car, color: 'text-red-500' },
    { id: 'education', title: 'Formation', icon: GraduationCap, color: 'text-cyan-500' },
    { id: 'b2b', title: 'Services B2B', icon: Briefcase, color: 'text-slate-500' },
    { id: 'call', title: 'Centre d\'Appel', icon: Headphones, color: 'text-teal-500' },
    { id: 'travel', title: 'Voyage', icon: Plane, color: 'text-sky-500' },
    { id: 'health', title: 'Santé', icon: Stethoscope, color: 'text-rose-500' },
    { id: 'industry', title: 'Industrie', icon: Factory, color: 'text-amber-500' },
    { id: 'fiber', title: 'Fibre Optique', icon: Wifi, color: 'text-violet-500' },
]

export function Sectors() {
    return (
        <section id="secteurs" className="bg-white py-24 overflow-hidden relative">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

            <div className="container mx-auto px-4 mb-16 relative z-20">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary mb-4"
                    >
                        Multi-Sectoriel
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-4 text-3xl font-bold text-dark lg:text-5xl"
                    >
                        Une expertise sur <span className="text-secondary">+20 marchés</span>
                    </motion.h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Nous générons des leads qualifiés dans tous les secteurs porteurs.
                    </p>
                </div>
            </div>

            <div className="relative flex w-full flex-col gap-8 opacity-80 relative z-0">
                <MarqueeRow items={sectors.slice(0, 8)} direction="left" speed={40} />
                <MarqueeRow items={sectors.slice(8, 16)} direction="right" speed={40} />
            </div>
        </section>
    )
}

function MarqueeRow({ items, direction, speed }: { items: typeof sectors, direction: 'left' | 'right', speed: number }) {
    return (
        <div className="relative flex overflow-hidden group">
            <div
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 animate-infinite-scroll",
                    direction === 'right' && "reverse-scroll"
                )}
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: `${speed}s`
                }}
            >
                {[...items, ...items, ...items, ...items].map((sector, idx) => (
                    <Link
                        href="/formulaire"
                        key={`${sector.id}-${idx}`}
                        className="group flex w-[280px] shrink-0 items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:scale-105 hover:shadow-md hover:ring-primary/50"
                    >
                        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-primary/10", sector.color)}>
                            <sector.icon size={24} className="transition-colors group-hover:text-dark" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-dark">{sector.title}</span>
                            <span className="text-xs text-gray-400">Leads qualifiés</span>
                        </div>
                    </Link>
                ))}
            </div>

            <div
                className="flex min-w-full shrink-0 gap-4 py-4 animate-infinite-scroll"
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: `${speed}s`
                }}
                aria-hidden="true"
            >
                {[...items, ...items, ...items, ...items].map((sector, idx) => (
                    <Link
                        href="/formulaire"
                        key={`${sector.id}-duplicate-${idx}`}
                        className="group flex w-[280px] shrink-0 items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:scale-105 hover:shadow-md hover:ring-primary/50"
                    >
                        <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-primary/10", sector.color)}>
                            <sector.icon size={24} className="transition-colors group-hover:text-dark" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-dark">{sector.title}</span>
                            <span className="text-xs text-gray-400">Leads qualifiés</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
