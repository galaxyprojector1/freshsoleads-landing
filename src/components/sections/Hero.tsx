'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypingEffect } from '../ui/TypingEffect'

export function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden bg-white pb-16 pt-24 lg:pt-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
                            Notre métier ?
                        </div>

                        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-dark lg:text-7xl">
                            Vous alimenter en <span className="text-secondary">leads exclusifs</span><br />
                            et hautement{' '}
                            <span className="inline-block min-w-[280px] text-primary lg:min-w-[380px]">
                                <TypingEffect words={['qualifiés !', 'rentables !', 'vérifiés !']} />
                            </span>
                        </h1>

                        <p className="mb-8 text-xl text-gray-600">
                            Investissez vos équipes dans le closing et confiez votre prospection à des spécialistes de l'acquisition de leads.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/formulaire" className="inline-flex h-14 items-center justify-center rounded-xl bg-dark px-8 text-lg font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:bg-dark/90 hover:shadow-primary/40 focus:ring-4 focus:ring-primary/30">
                                Commander mes Leads
                            </Link>
                            <Link href="/formulaire" className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 text-lg font-bold text-gray-700 transition-all hover:border-dark hover:text-dark hover:bg-gray-50">
                                Parler à un conseiller
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                            {/* 
                  CRITICAL: Hero image copy. 
                  Ensure public/images/hero-freshsoleads.jpg exists.
               */}
                            <Image
                                src="/images/hero-freshsoleads.jpg"
                                alt="FreshSoLeads Hero"
                                width={800}
                                height={900}
                                className="h-auto w-full object-cover"
                                priority
                            />

                            {/* Floating Cards (Optional overlay to match design if not in image) */}
                            {/* The user said "L'image contient déjà les stats", so we don't add overlays if they are baked in.
                  The BRIEF says: "L'image contient deja les stats : 'CAC €690', 'Taux de vente 9,2%'"
                  So we just display the image clean.
              */}
                        </div>


                    </motion.div>
                </div>
            </div>
        </section>
    )
}
