'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
    {
        name: 'Thomas Mercier',
        role: 'Directeur Commercial',
        company: 'SolarTech Pro',
        content: 'On est passé de 15 à 45 installations par mois. Les leads sont chauds, les gens attendent notre appel. ROI x3 en 6 mois.',
        rating: 5,
        avatar: 'TM'
    },
    {
        name: 'Sophie Laurent',
        role: 'Responsable Acquisition',
        company: 'AssurMax',
        content: 'Enfin une agence qui comprend notre métier. Taux de transformation de 18% contre 6% avec nos anciennes sources.',
        rating: 5,
        avatar: 'SL'
    },
    {
        name: 'Marc Dubois',
        role: 'Gérant',
        company: 'IsoConfort 31',
        content: 'La qualité des leads est bluffante. On reçoit uniquement des propriétaires avec un vrai projet. Plus de perte de temps.',
        rating: 5,
        avatar: 'MD'
    }
]

export function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-dark lg:text-5xl">
                        Ce que disent <span className="text-secondary">nos clients</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Des résultats concrets, mesurables, reproductibles.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="rounded-2xl border border-gray-100 bg-gray-50 p-8"
                        >
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="mb-6 text-gray-700 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white font-bold">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-dark">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role} - {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
