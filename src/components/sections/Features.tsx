'use client'
import { motion } from 'framer-motion'
import { Shield, Zap, Target, Users } from 'lucide-react'

const features = [
    {
        icon: Shield,
        title: 'Leads 100% vérifiés',
        desc: 'Double validation : humaine + IA anti-fraude. Fini les faux numéros et les curieux.'
    },
    {
        icon: Zap,
        title: 'Livraison instantanée',
        desc: 'Le lead arrive dans votre CRM en moins de 30 secondes. Appelez-le avant vos concurrents.'
    },
    {
        icon: Target,
        title: 'Ciblage chirurgical',
        desc: 'Géolocalisation, budget, projet... On filtre pour vous envoyer uniquement des acheteurs.'
    },
    {
        icon: Users,
        title: 'Account manager dédié',
        desc: 'Un expert vous accompagne pour maximiser vos taux de transformation.'
    }
]

export function Features() {
    return (
        <section className="bg-dark py-24 text-white">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold lg:text-5xl">
                        Pourquoi <span className="text-primary">+500 entreprises</span> nous font confiance
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-400">
                        On ne vend pas des leads. On vous livre des rendez-vous qualifiés.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group rounded-2xl bg-white/5 p-8 transition-colors hover:bg-white/10"
                        >
                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-dark">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="mb-4 text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
