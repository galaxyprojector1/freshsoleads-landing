'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: 'Comment sont qualifiés vos leads ?',
        answer: 'Chaque lead passe par une double vérification : validation téléphonique par notre équipe + scoring IA basé sur 15 critères (intention d\'achat, budget, délai projet, etc.). Seuls les leads scorés A ou B vous sont envoyés.'
    },
    {
        question: 'Quel est le délai de livraison ?',
        answer: 'Les leads sont livrés en temps réel, en moyenne sous 30 secondes après la qualification. Vous les recevez directement dans votre CRM ou par email/SMS selon votre préférence.'
    },
    {
        question: 'Y a-t-il un engagement minimum ?',
        answer: 'Non, aucun engagement. Vous commandez le volume que vous souhaitez et pouvez ajuster ou stopper à tout moment. On vous offre même un premier lot de leads pour tester la qualité.'
    },
    {
        question: 'Que se passe-t-il si un lead est invalide ?',
        answer: 'Tout lead invalide (faux numéro, hors cible, déjà client) est remplacé gratuitement sous 48h. Notre taux de remplacement est inférieur à 6%.'
    },
    {
        question: 'Quels secteurs couvrez-vous ?',
        answer: 'Nous sommes spécialisés dans les secteurs à forte valeur : énergies renouvelables (PAC, solaire, isolation), assurance, mutuelle senior, immobilier, et services B2B.'
    },
    {
        question: 'Comment intégrer les leads à mon CRM ?',
        answer: 'Nous proposons des intégrations natives avec Salesforce, HubSpot, Pipedrive, et +50 autres CRM. API disponible pour les intégrations custom. Notre équipe tech vous accompagne gratuitement.'
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-dark lg:text-5xl">
                        Questions <span className="text-primary">fréquentes</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        Tout ce que vous devez savoir avant de démarrer.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="flex w-full items-center justify-between rounded-xl bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md"
                            >
                                <span className="pr-4 font-semibold text-dark">{faq.question}</span>
                                <ChevronDown
                                    size={20}
                                    className={`shrink-0 text-gray-400 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
