import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'FreshSoLeads - Génération de Leads B2B Premium',
    description: 'Boostez votre pipeline commercial avec des leads exclusifs et vérifiés.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={inter.className}>
                {/* We will leave Header/Footer control to pages or add them here. 
            For this landing page + contact page simple site, adding them here is safer.
            However, I manually added them to ContactPage. 
            So I will NOT add them here to avoid duplication, OR I'll remove them from ContactPage.
            Better approach: Add them here, update ContactPage to simple content.
            Actually, let's keep it simple. I wont touch layout, I'll update Home to include Header/Footer too.
        */}
                {children}
            </body>
        </html>
    )
}
