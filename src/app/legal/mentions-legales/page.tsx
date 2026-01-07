import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Mentions Légales | FreshSoLeads',
    description: 'Mentions légales du site FreshSoLeads',
}

export default function MentionsLegalesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-dark pt-24">
                <section className="py-12 lg:py-20">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h1 className="mb-12 text-4xl font-bold text-white lg:text-5xl">
                            Mentions <span className="text-primary">Légales</span>
                        </h1>

                        <div className="space-y-10 text-gray-300">
                            {/* Présentation du Site */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Présentation du site</h2>
                                <p className="mb-4">
                                    Le site <strong className="text-primary">https://freshsoleads.com</strong> est édité par{' '}
                                    <strong>RS TRADING</strong>, société au capital de 1.000€, immatriculée au RCS Paris sous le numéro SIREN 908 643 562.
                                </p>
                                <ul className="space-y-2">
                                    <li><strong>Siège social :</strong> 33 avenue Foch, 75116 Paris</li>
                                    <li><strong>Email :</strong> freshsoleads@gmail.com</li>
                                    <li><strong>Directeur de publication :</strong> RS TRADING</li>
                                    <li><strong>N° TVA intracommunautaire :</strong> FR32908643562</li>
                                </ul>
                            </section>

                            {/* Hébergement */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Hébergement</h2>
                                <p className="mb-2">Le site est hébergé par :</p>
                                <ul className="space-y-2">
                                    <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                                    <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                                    <li><strong>Site :</strong> https://vercel.com</li>
                                </ul>
                            </section>

                            {/* Propriété Intellectuelle */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Propriété intellectuelle</h2>
                                <p className="mb-4">
                                    RS TRADING détient l'exclusivité des droits sur le site et l'ensemble de ses contenus (textes, images, graphismes, logo, icônes, sons, logiciels, etc.).
                                </p>
                                <p className="mb-4">
                                    L'utilisation de tout document provenant du Site n'est autorisée qu'à titre d'information pour un usage privé. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de RS TRADING.
                                </p>
                                <p>
                                    Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                                </p>
                            </section>

                            {/* Loi Applicable */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Loi applicable</h2>
                                <p>
                                    Le présent site et les mentions légales qui s'y rapportent sont régis par le droit français.
                                    En cas de litige, les tribunaux français seront seuls compétents.
                                </p>
                            </section>

                            {/* Protection des Données */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Protection des données personnelles</h2>
                                <p className="mb-4">
                                    Les données personnelles collectées sur ce site sont traitées conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD) n°2016/679.
                                </p>
                                <p className="mb-4">
                                    Conformément à cette réglementation, vous disposez des droits suivants concernant vos données personnelles :
                                </p>
                                <ul className="list-inside list-disc space-y-1">
                                    <li>Droit d'accès</li>
                                    <li>Droit de rectification</li>
                                    <li>Droit à la limitation du traitement</li>
                                    <li>Droit à la portabilité</li>
                                    <li>Droit à l'effacement</li>
                                    <li>Droit d'opposition</li>
                                </ul>
                                <p className="mt-4">
                                    Pour plus d'informations, consultez notre{' '}
                                    <a href="/legal/confidentialite" className="text-primary hover:underline">
                                        Politique de Confidentialité
                                    </a>.
                                </p>
                            </section>

                            <p className="pt-8 text-sm text-gray-500">
                                Mise à jour : 01/01/2026
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
