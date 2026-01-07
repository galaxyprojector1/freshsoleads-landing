'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Building, Car, FileText, Flame, Heart, HelpCircle, Home, Lightbulb, Send, Shield, Sun, Wallet } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

// Steps configuration
const STEPS = [
    { id: 1, title: 'Secteur', subtitle: 'Dans quel secteur souhaitez-vous vos leads ?' },
    { id: 2, title: 'Projet', subtitle: 'Parlez-nous de votre projet' },
    { id: 3, title: 'Contact', subtitle: 'Vos coordonnées' },
]

const SECTORS = [
    { id: 'solaire', label: 'Panneaux solaires', icon: Sun },
    { id: 'pompe', label: 'Pompe à chaleur', icon: Flame },
    { id: 'isolation', label: 'Isolation int. / ext.', icon: Home },
    { id: 'chaudiere', label: 'Chaudière', icon: Flame },
    { id: 'poele', label: 'Poêle à granulés', icon: Flame },
    { id: 'ballon', label: 'Ballon thermodynamique', icon: Wallet },
    { id: 'audit', label: 'Audit énergétique', icon: FileText },
    { id: 'borne', label: 'Borne de recharge', icon: Car },
    { id: 'renovation', label: 'Rénovation globale', icon: Building },
    { id: 'autre', label: 'Autre secteur', icon: HelpCircle },
]

const QUANTITIES = [
    { id: '10-50', label: '10 - 50 leads / mois' },
    { id: '50-100', label: '50 - 100 leads / mois' },
    { id: '100-500', label: '100 - 500 leads / mois' },
    { id: '500+', label: 'Plus de 500 leads / mois' },
]

export default function FormulairePage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        sector: '',
        otherSector: '',
        zone: '',
        quantity: '',
        description: '',
        fullName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        rgpdConsent: false
    })

    const handleSectorSelect = (sectorId: string) => {
        setFormData({ ...formData, sector: sectorId })
        if (sectorId !== 'autre') {
            setTimeout(() => navToStep(2), 300)
        }
    }

    const navToStep = (step: number) => {
        setCurrentStep(step)
    }

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            navToStep(currentStep + 1)
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            navToStep(currentStep - 1)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement form submission (API, webhook, etc.)
    }

    const canProceedStep2 = formData.zone && formData.quantity
    const canSubmit = formData.fullName && formData.company && formData.phone && formData.email && formData.rgpdConsent

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50 selection:bg-primary selection:text-dark font-sans text-slate-900">
            {/* Background: Clean Light Mode */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-white to-slate-50 z-0" />

            {/* Header Simplified (Light) */}
            <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-dark group">
                        <ArrowLeft size={20} className="text-gray-400 transition-colors group-hover:text-primary" />
                        <span>FreshSo<span className="text-primary group-hover:text-dark transition-colors">Leads</span></span>
                    </Link>
                    <div className="text-sm font-medium text-gray-400">
                        Étape <span className="text-dark font-bold">{currentStep}</span> <span className="text-gray-300">/</span> {STEPS.length}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto max-w-4xl px-4 py-8 lg:py-16">

                {/* Refined Progress Bar (Light) */}
                <div className="mb-14 relative px-4">
                    <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-gray-200" />
                    <div className="relative flex items-center justify-between">
                        {STEPS.map((step) => {
                            const isActive = currentStep >= step.id
                            const isCurrent = currentStep === step.id
                            return (
                                <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            backgroundColor: isActive ? '#CCFF00' : '#ffffff',
                                            borderColor: isActive ? '#CCFF00' : '#e5e7eb',
                                            color: isActive ? '#000000' : '#9ca3af',
                                            scale: isCurrent ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={cn(
                                            "flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold border-2 shadow-sm"
                                        )}
                                    >
                                        {step.id}
                                    </motion.div>
                                    <span className={cn(
                                        "absolute top-12 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap transition-colors duration-300",
                                        isActive ? "text-dark" : "text-gray-400"
                                    )}>
                                        {step.title}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* White Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50"
                >
                    <div className="p-8 md:p-12">

                        {/* Step Title */}
                        <div className="mb-10 text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h1 className="mb-3 text-2xl font-bold text-dark md:text-3xl tracking-tight">
                                        {STEPS[currentStep - 1].subtitle}
                                    </h1>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode='wait'>
                                {/* STEP 1: SECTOR */}
                                {currentStep === 1 && (
                                    <motion.div key="step1" variants={fadeInUp} initial="hidden" animate="visible" exit="exit">
                                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                                            {SECTORS.map((s) => {
                                                const Icon = s.icon
                                                const isSelected = formData.sector === s.id
                                                return (
                                                    <button
                                                        key={s.id}
                                                        type="button"
                                                        onClick={() => handleSectorSelect(s.id)}
                                                        className={cn(
                                                            "group relative flex flex-col items-center gap-4 rounded-xl border p-4 transition-all duration-300",
                                                            isSelected
                                                                ? "border-primary bg-primary/10 shadow-md shadow-primary/10"
                                                                : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300",
                                                            isSelected ? "bg-primary text-black" : "bg-white text-gray-400 shadow-sm border border-gray-100"
                                                        )}>
                                                            <Icon
                                                                className={cn(
                                                                    "transition-colors duration-300",
                                                                    isSelected ? "text-black" : "group-hover:text-primary"
                                                                )}
                                                                size={24}
                                                            />
                                                        </div>
                                                        <span className={cn(
                                                            "text-center text-xs font-bold transition-colors duration-300",
                                                            isSelected ? "text-dark" : "text-gray-500 group-hover:text-dark"
                                                        )}>
                                                            {s.label}
                                                        </span>
                                                    </button>
                                                )
                                            })}
                                        </div>

                                        {/* Other sector input */}
                                        {formData.sector === 'autre' && (
                                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-8">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={formData.otherSector}
                                                        onChange={(e) => setFormData({ ...formData, otherSector: e.target.value })}
                                                        placeholder="Quel est votre secteur d'activité ?"
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 text-dark placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                                                        autoFocus
                                                    />
                                                </div>
                                                <div className="mt-8 flex justify-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => navToStep(2)}
                                                        disabled={!formData.otherSector}
                                                        className="group flex items-center gap-2 rounded-full bg-dark px-8 py-3 text-sm font-bold text-white transition-all hover:bg-primary hover:text-dark disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500"
                                                    >
                                                        Continuer <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}

                                {/* STEP 2: PROJECT DETAILS */}
                                {currentStep === 2 && (
                                    <motion.div key="step2" variants={fadeInUp} initial="hidden" animate="visible" exit="exit" className="max-w-xl mx-auto space-y-8">
                                        {/* Zone */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-dark block">
                                                Zone géographiques ciblée <span className="text-primary">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.zone}
                                                onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                                                placeholder="Ex: Île-de-France, 75..."
                                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-dark outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/50"
                                            />
                                        </div>

                                        {/* Quantity */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-dark block">
                                                Volume mensuel souhaité <span className="text-primary">*</span>
                                            </label>
                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {QUANTITIES.map((q) => (
                                                    <button
                                                        key={q.id}
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, quantity: q.id })}
                                                        className={cn(
                                                            "w-full rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all duration-200",
                                                            formData.quantity === q.id
                                                                ? "border-primary bg-primary/10 text-dark font-bold"
                                                                : "border-gray-200 bg-gray-50 text-gray-500 hover:bg-white hover:border-gray-300 hover:text-dark"
                                                        )}
                                                    >
                                                        {q.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className="space-y-4">
                                            <label className="text-sm font-bold text-dark block">
                                                Détails du projet (optionnel)
                                            </label>
                                            <textarea
                                                value={formData.description}
                                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                placeholder="Vos critères spécifiques..."
                                                rows={4}
                                                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-dark outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/50"
                                            />
                                        </div>

                                        {/* Navigation */}
                                        <div className="flex items-center justify-between pt-6">
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="text-sm font-medium text-gray-400 hover:text-dark transition-colors"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                disabled={!canProceedStep2}
                                                className="group flex items-center gap-2 rounded-full bg-dark px-8 py-3 text-sm font-bold text-white transition-all hover:bg-primary hover:text-dark disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500"
                                            >
                                                Suivant <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: CONTACT */}
                                {currentStep === 3 && (
                                    <motion.div key="step3" variants={fadeInUp} initial="hidden" animate="visible" exit="exit" className="max-w-xl mx-auto space-y-6">
                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            {[
                                                { label: "Nom & Prénom", value: formData.fullName, field: 'fullName', type: 'text', placeholder: "Jean Dupont" },
                                                { label: "Société", value: formData.company, field: 'company', type: 'text', placeholder: "Votre Entreprise" },
                                                { label: "Email pro", value: formData.email, field: 'email', type: 'email', placeholder: "nom@entreprise.com" },
                                                { label: "Téléphone", value: formData.phone, field: 'phone', type: 'tel', placeholder: "06 12 34 56 78" },
                                            ].map((input) => (
                                                <div key={input.field} className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wide text-gray-500">{input.label} <span className="text-primary">*</span></label>
                                                    <input
                                                        type={input.type}
                                                        value={input.value as string}
                                                        onChange={(e) => setFormData({ ...formData, [input.field]: e.target.value })}
                                                        placeholder={input.placeholder}
                                                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-dark outline-none transition-all focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/50"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wide text-gray-500">Adresse (optionnel)</label>
                                            <input
                                                type="text"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                                placeholder="Votre adresse"
                                                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-dark outline-none transition-all focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary/50"
                                            />
                                        </div>

                                        {/* RGPD Consent */}
                                        <div className="pt-2">
                                            <label className="flex cursor-pointer items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all">
                                                <div className="relative flex items-center mt-0.5">
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.rgpdConsent}
                                                        onChange={(e) => setFormData({ ...formData, rgpdConsent: e.target.checked })}
                                                        className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 bg-white transition-all checked:border-primary checked:bg-primary"
                                                    />
                                                    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-500 leading-relaxed">
                                                    J'accepte d'être contacté par FreshSoLeads. Vos données sont sécurisées.
                                                </span>
                                            </label>
                                        </div>

                                        {/* Navigation */}
                                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="text-sm font-medium text-gray-400 hover:text-dark transition-colors"
                                            >
                                                Retour
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={!canSubmit}
                                                className="group flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-sm font-bold text-black transition-all hover:bg-black hover:text-white hover:scale-105 disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:scale-100"
                                            >
                                                <span>Recevoir mes leads</span>
                                                <Send size={16} className="transition-transform group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>

                {/* Trust Elements (Light) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-12 flex flex-wrap items-center justify-center gap-6"
                >
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-gray-100">
                        <Shield size={14} className="text-gray-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Données Sécurisées</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/50 rounded-full border border-gray-100">
                        <Heart size={14} className="text-gray-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Support 24/7</span>
                    </div>
                </motion.div>

            </main>
        </div>
    )
}
