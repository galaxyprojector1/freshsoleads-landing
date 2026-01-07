'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-dark">
                    FreshSo<span className="text-primary">Leads</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/#secteurs" className="text-sm font-medium text-gray-600 hover:text-secondary">
                        Secteurs
                    </Link>
                    <Link href="/#process" className="text-sm font-medium text-gray-600 hover:text-secondary">
                        Comment ça marche
                    </Link>
                    <Link
                        href="/formulaire"
                        className="rounded-full bg-dark px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-secondary"
                    >
                        Demander mes leads
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute left-0 top-20 w-full border-b border-gray-100 bg-white p-4 md:hidden">
                    <nav className="flex flex-col gap-4">
                        <Link href="/#secteurs" className="block text-base font-medium text-dark">
                            Secteurs
                        </Link>
                        <Link href="/#process" className="block text-base font-medium text-dark">
                            Comment ça marche
                        </Link>
                        <Link href="/formulaire" className="block text-base font-bold text-primary">
                            Obtenir mes leads
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
