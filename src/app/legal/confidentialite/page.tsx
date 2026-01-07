import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Politique de Confidentialité | FreshSoLeads',
    description: 'Politique de confidentialité du site FreshSoLeads',
}

export default function ConfidentialitePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-dark pt-24">
                <section className="py-12 lg:py-20">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h1 className="mb-12 text-4xl font-bold text-white lg:text-5xl">
                            Politique de <span className="text-primary">Confidentialité</span>
                        </h1>

                        <div className="space-y-10 text-gray-300">
                            {/* Informations préliminaires */}
                            <section className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                                <p className="mb-2"><strong className="text-white">Société :</strong> RS TRADING (SASU)</p>
                                <p className="mb-2"><strong className="text-white">Siège social :</strong> 33 avenue Foch, 75116 Paris</p>
                                <p className="mb-2"><strong className="text-white">RCS Paris :</strong> 908 643 562</p>
                                <p className="mb-2"><strong className="text-white">Site :</strong> https://freshsoleads.com</p>
                                <p><strong className="text-white">Mise à jour :</strong> 01/01/2026</p>
                            </section>

                            <p>
                                RS TRADING, exploitant le site FreshSoLeads, agit en qualité de responsable du traitement des données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) n°2016/679.
                            </p>

                            {/* Article 1 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 1 : Collecte des données</h2>
                                <p className="mb-4">La société collecte les catégories de données suivantes :</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-700">
                                                <th className="px-4 py-3 text-left font-bold text-white">Catégorie</th>
                                                <th className="px-4 py-3 text-left font-bold text-white">Données</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3 font-medium text-primary">Identité et coordonnées</td>
                                                <td className="px-4 py-3">Nom, prénom, email, téléphone, code postal</td>
                                            </tr>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3 font-medium text-primary">Habitudes de vie</td>
                                                <td className="px-4 py-3">Propriétaire/locataire, type de chauffage, projets en cours, etc.</td>
                                            </tr>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3 font-medium text-primary">Navigation site</td>
                                                <td className="px-4 py-3">Adresse IP, navigateur, durée de visite, système d'exploitation, pages consultées</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium text-primary">Usage</td>
                                                <td className="px-4 py-3">Données de trafic, visites, actualisations</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Article 2 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 2 : Finalités du traitement</h2>
                                <p className="mb-4">Les données sont collectées et traitées pour les finalités suivantes :</p>
                                <div className="space-y-4">
                                    <div className="rounded-lg border border-gray-700 p-4">
                                        <p className="mb-1 font-bold text-primary">1. Prospection commerciale</p>
                                        <p className="text-sm">Transmission à nos partenaires à des fins de prospection commerciale (email, téléphone, SMS)</p>
                                        <p className="mt-2 text-xs text-gray-500">Base juridique : Consentement</p>
                                    </div>
                                    <div className="rounded-lg border border-gray-700 p-4">
                                        <p className="mb-1 font-bold text-primary">2. Exercice des droits</p>
                                        <p className="text-sm">Gestion des demandes d'accès, de portabilité, d'effacement, de rectification et d'opposition</p>
                                        <p className="mt-2 text-xs text-gray-500">Base juridique : Exécution contractuelle</p>
                                    </div>
                                    <div className="rounded-lg border border-gray-700 p-4">
                                        <p className="mb-1 font-bold text-primary">3. Statistiques et amélioration</p>
                                        <p className="text-sm">Navigation, mesures d'audience et statistiques pour améliorer nos services</p>
                                        <p className="mt-2 text-xs text-gray-500">Base juridique : Intérêts légitimes</p>
                                    </div>
                                </div>
                            </section>

                            {/* Article 3 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 3 : Durées de conservation</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="border-b border-gray-700">
                                                <th className="px-4 py-3 text-left font-bold text-white">Traitement</th>
                                                <th className="px-4 py-3 text-left font-bold text-white">Durée</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3">Fourniture de services</td>
                                                <td className="px-4 py-3">5 ans après fin de la relation ou inactivité</td>
                                            </tr>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3">Obligations légales</td>
                                                <td className="px-4 py-3">2, 5 ou 10 ans selon les prescriptions applicables</td>
                                            </tr>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3">Marketing / Prospection</td>
                                                <td className="px-4 py-3">3 ans après la collecte ou le dernier contact</td>
                                            </tr>
                                            <tr className="border-b border-gray-800">
                                                <td className="px-4 py-3">Demandes utilisateur</td>
                                                <td className="px-4 py-3">Durée nécessaire au traitement de la demande</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3">Cookies</td>
                                                <td className="px-4 py-3">13 mois maximum</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm text-gray-500">
                                    À l'expiration de ces durées, les données sont détruites ou anonymisées.
                                </p>
                            </section>

                            {/* Article 4 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 4 : Partage et divulgation</h2>

                                <h3 className="mb-2 mt-6 text-lg font-semibold text-primary">4.1 Autorités</h3>
                                <p>Les données peuvent être divulguées aux autorités compétentes si la loi l'exige ou pour respecter nos obligations légales.</p>

                                <h3 className="mb-2 mt-6 text-lg font-semibold text-primary">4.2 Sous-traitants</h3>
                                <p className="mb-4">Nous faisons appel aux sous-traitants suivants :</p>
                                <ul className="list-inside list-disc space-y-2">
                                    <li><strong>Google LLC</strong> (Mountain View, CA, USA) - Hébergement et analyse de données</li>
                                    <li><strong>Vercel Inc.</strong> (San Francisco, CA, USA) - Hébergement du site</li>
                                    <li><strong>HeyFlow GmbH</strong> (Hamburg, Allemagne) - Formulaires en ligne</li>
                                </ul>
                                <p className="mt-4 text-sm">
                                    Nos sous-traitants s'engagent à la confidentialité, à la formation de leur personnel à la protection des données,
                                    au respect des principes de privacy-by-design et à la notification immédiate de toute violation.
                                </p>

                                <h3 className="mb-2 mt-6 text-lg font-semibold text-primary">4.3 Partenaires commerciaux</h3>
                                <p>
                                    Vos données peuvent être transmises à nos partenaires commerciaux <strong>uniquement avec votre accord exprès</strong> pour des opérations de prospection par email, téléphone ou SMS.
                                </p>

                                <h3 className="mb-2 mt-6 text-lg font-semibold text-primary">4.4 Transferts hors UE</h3>
                                <p>
                                    Aucun transfert de données vers des pays situés hors de l'Union Européenne n'est effectué sans garanties de protection adéquates (clauses contractuelles types, décision d'adéquation, etc.).
                                </p>
                            </section>

                            {/* Article 5 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 5 : Sécurité</h2>
                                <p className="mb-4">
                                    La société met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données personnelles contre tout traitement non autorisé, perte, altération ou divulgation.
                                </p>
                                <p>
                                    En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, la CNIL sera notifiée dans les <strong>72 heures</strong> suivant la découverte de l'incident. Les personnes concernées seront également informées en cas de risque élevé.
                                </p>
                            </section>

                            {/* Article 6 */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Article 6 : Vos droits</h2>
                                <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>

                                <div className="space-y-4">
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit d'accès</p>
                                        <p className="text-sm">Obtenir la confirmation du traitement de vos données et en recevoir une copie sous forme intelligible.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit de rectification</p>
                                        <p className="text-sm">Faire corriger vos données inexactes ou incomplètes sans retard injustifié.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit à l'effacement</p>
                                        <p className="text-sm">Obtenir la suppression de vos données lorsqu'elles ne sont plus nécessaires, que vous retirez votre consentement, ou en cas de traitement illicite.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit de limitation</p>
                                        <p className="text-sm">Demander la limitation du traitement en cas de contestation de l'exactitude des données ou de traitement illicite.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit à la portabilité</p>
                                        <p className="text-sm">Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine, et les transmettre à un autre responsable de traitement.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit d'opposition</p>
                                        <p className="text-sm">Vous opposer à tout moment au traitement de vos données pour des motifs légitimes.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Droit de retrait du consentement</p>
                                        <p className="text-sm">Retirer votre consentement à tout moment, gratuitement et sans justification.</p>
                                    </div>
                                    <div className="border-l-4 border-primary pl-4">
                                        <p className="font-bold text-white">Directives post-mortem</p>
                                        <p className="text-sm">Définir des directives relatives au sort de vos données après votre décès.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Exercice des droits */}
                            <section className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                                <h2 className="mb-4 text-xl font-bold text-white">Exercice de vos droits</h2>
                                <p className="mb-4">Pour exercer vos droits, contactez-nous :</p>
                                <ul className="mb-4 space-y-2">
                                    <li><strong>Email :</strong> <a href="mailto:freshsoleads@gmail.com" className="text-primary hover:underline">freshsoleads@gmail.com</a></li>
                                    <li><strong>Courrier :</strong> RS TRADING - 33 avenue Foch, 75116 Paris</li>
                                </ul>
                                <p className="text-sm text-gray-400">
                                    <strong>Délai de réponse :</strong> 1 mois (extensible à 3 mois pour les demandes complexes ou nombreuses).<br />
                                    <strong>Coût :</strong> Gratuit, sauf frais raisonnables justifiés en cas de demandes manifestement infondées ou excessives.
                                </p>
                            </section>

                            {/* Réclamation CNIL */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold text-white">Réclamation auprès de la CNIL</h2>
                                <p>
                                    Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                                </p>
                                <p className="mt-2">
                                    <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                        www.cnil.fr
                                    </a>
                                </p>
                            </section>

                            <p className="pt-8 text-sm text-gray-500">
                                © 2026 FreshSoLeads. Tous droits réservés.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
