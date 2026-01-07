'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlowEffect } from '../ui/GlowEffect'

const steps = [
    {
        id: 'analysis',
        number: '01',
        title: 'Analyse et ciblage',
        desc: 'Nous analysons ensemble vos besoins et déterminons des critères de segmentation les plus pertinents, afin de définir avec précision votre marché cible.',
        img: '/images/process/analysis.png',
        cta: 'Parler à un conseiller',
        tags: ['Critères Démographiques', 'Critères Géographiques', 'Critères Comportementaux']
    },
    {
        id: 'acquisition',
        number: '02',
        title: 'Activation des leviers',
        desc: 'Nous déployons des campagnes multicanales sur les plateformes les plus performantes en créant du contenu premium à forte valeur ajoutée.',
        img: '/images/process/acquisition.png',
        cta: 'Boostez vos performances'
    },
    {
        id: 'delivery',
        number: '03',
        title: 'Livraison de leads frais',
        desc: 'Vous recevez en temps réel des leads frais et qualifiés, issus de nos campagnes actives. Chaque contact a manifesté un réel intérêt.',
        img: '/images/process/delivery.png',
        cta: 'Commander des leads'
    },
]

export function Process() {
    return (
        <section id="process" className="bg-white py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,255,0,0.05),transparent_40%)]" />
            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">

                {/* Section Header */}
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-dark mb-4"
                    >
                        Notre Méthodologie
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-6 text-4xl font-bold text-dark lg:text-5xl"
                    >
                        Comment ça <span className="text-secondary bg-clip-text">marche ?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-lg text-gray-600"
                    >
                        Une approche structurée et optimisée pour garantir la croissance de votre entreprise.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Vertical Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 -ml-px hidden w-0.5 border-l-2 border-dashed border-gray-200 lg:block" />

                    <div className="space-y-24 lg:space-y-0">
                        {steps.map((step, idx) => (
                            <div key={step.id} className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Timeline Node (Desktop) */}
                                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform lg:flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg border-4 border-gray-50 z-20">
                                    <span className="text-xl font-bold text-secondary">{idx + 1}</span>
                                </div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex-1 lg:px-12 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
                                >
                                    <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:items-end' : 'lg:items-start'} items-center text-center lg:text-left`}>
                                        <div className="mb-4 text-6xl font-black text-gray-100 lg:hidden">{step.number}</div>
                                        <h3 className="mb-4 text-2xl font-bold text-dark lg:text-3xl">{step.title}</h3>
                                        <div className="h-1 w-20 bg-primary mb-6" />
                                        <p className="mb-8 text-gray-600 leading-relaxed max-w-lg">
                                            {step.desc.split(' ').map((word, i) => {
                                                const highlights = ['analysons', 'critères', 'segmentation', 'campagnes', 'multicanales', 'contenu', 'premium', 'temps', 'réel', 'frais', 'qualifiés', 'réel', 'intérêt'];
                                                const cleanWord = word.replace(/[.,]/g, '');
                                                return highlights.includes(cleanWord) || highlights.includes(word.toLowerCase()) ?
                                                    <span key={i} className="font-bold text-secondary">{word} </span> :
                                                    word + ' '
                                            })}
                                        </p>

                                        {step.tags && (
                                            <div className="flex flex-wrap justify-center lg:justify-end gap-2 mb-8">
                                                {step.tags.map(tag => (
                                                    <span key={tag} className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <button className="group flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-6 py-3 font-semibold text-dark transition-all hover:border-primary hover:bg-primary/10">
                                            {step.cta}
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </motion.div>

                                {/* Image Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="flex-1 lg:px-12"
                                >
                                    <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

                                        <div className="relative h-full w-full">
                                            <Image
                                                src={step.img}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
