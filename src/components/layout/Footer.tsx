import Link from 'next/link'

export function Footer() {
    return (
        <footer className="relative bg-black py-20 text-white overflow-hidden">
            {/* Huge Watermark Logo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-white/[0.02] pointer-events-none whitespace-nowrap select-none">
                FRESHSOLEADS
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="mb-6 block text-3xl font-bold tracking-tighter">
                            FreshSo<span className="text-primary">Leads</span>.
                        </Link>
                        <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
                            L'agence de génération de leads nouvelle génération. Nous connectons les meilleures entreprises avec leurs futurs clients.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="lg:col-start-3">
                        <h4 className="mb-6 font-bold text-white text-lg">Entreprise</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/#a-propos" className="hover:text-primary transition-colors">À propos</Link></li>
                            <li><Link href="/#services" className="hover:text-primary transition-colors">Nos Services</Link></li>
                        </ul>
                    </div>

                    {/* Utility */}
                    <div>
                        <h4 className="mb-6 font-bold text-white text-lg">Informations</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><Link href="/legal/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link></li>
                            <li><Link href="/legal/confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link></li>
                            <li><Link href="/formulaire" className="hover:text-primary transition-colors">Contact / Devis</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <div>
                        © {new Date().getFullYear()} FreshSoLeads. Paris, France.
                    </div>
                    <div className="flex gap-8">
                        <span>Fait avec passion ⚡</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
