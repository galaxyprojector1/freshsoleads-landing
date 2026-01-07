import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
    title: 'Conditions Générales de Vente | FreshSoLeads',
    description: 'CGV du site FreshSoLeads',
}

export default function CGVPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-dark pt-24">
                <section className="py-12 lg:py-20">
                    <div className="container mx-auto max-w-4xl px-4">
                        <h1 className="mb-12 text-4xl font-bold text-white lg:text-5xl">
                            Conditions Générales <span className="text-primary">de Vente</span>
                        </h1>

                        <div className="space-y-10 text-gray-300">
                            {/* Préambule */}
                            <section className="rounded-lg border border-gray-700 bg-gray-800/50 p-6">
                                <p className="mb-2">
                                    <strong className="text-white">Société :</strong> RS TRADING, SASU au capital de 1.000€
                                </p>
                                <p className="mb-2">
                                    <strong className="text-white">Siège social :</strong> 33 avenue Foch, 75116 Paris
                                </p>
                                <p className="mb-2">
                                    <strong className="text-white">RCS Paris :</strong> 908 643 562
                                </p>
                                <p>
                                    <strong className="text-white">Contact :</strong> freshsoleads@gmail.com
                                </p>
                            </section>

                            {/* Article 1 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 1 - Définitions</h2>
                                <p className="mb-4">Dans les présentes Conditions Générales de Vente, les termes suivants ont la signification indiquée :</p>
                                <ul className="list-inside list-disc space-y-2">
                                    <li><strong>Base de données prospects :</strong> Ensemble des données relatives aux prospects collectées par FreshSoLeads</li>
                                    <li><strong>Client :</strong> Toute personne physique ou morale qui passe commande auprès de FreshSoLeads</li>
                                    <li><strong>Commande :</strong> Acte par lequel le Client s'engage à acquérir des leads</li>
                                    <li><strong>Devis :</strong> Document récapitulant les conditions de la vente</li>
                                    <li><strong>Données personnelles :</strong> Informations permettant d'identifier une personne physique</li>
                                    <li><strong>Doublon :</strong> Lead déjà transmis au Client dans les 6 derniers mois</li>
                                    <li><strong>Lead :</strong> Coordonnées d'un prospect qualifié</li>
                                    <li><strong>Prospect :</strong> Personne ayant manifesté un intérêt pour un produit ou service</li>
                                </ul>
                            </section>

                            {/* Article 2 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 2 - Objet et Champ d'Application</h2>
                                <p className="mb-4">
                                    Les présentes CGV constituent, conformément à l'article L.441-1 du Code de commerce, le socle unique de la relation commerciale entre les parties. Elles s'appliquent à toutes les ventes de leads conclues par RS TRADING sous la marque FreshSoLeads.
                                </p>
                                <p>
                                    Toute commande implique l'acceptation sans réserve des présentes CGV qui prévalent sur tout autre document.
                                </p>
                            </section>

                            {/* Article 3 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 3 - Commandes</h2>
                                <p className="mb-4">
                                    Le Client passe commande via le formulaire en ligne du site ou par contact direct (email, téléphone). Il précise notamment :
                                </p>
                                <ul className="mb-4 list-inside list-disc space-y-1">
                                    <li>Le type de prospects recherchés</li>
                                    <li>Les zones géographiques ciblées</li>
                                    <li>Le volume de leads souhaité</li>
                                    <li>Tout critère de qualification spécifique</li>
                                </ul>
                                <p>
                                    FreshSoLeads établit ensuite un devis détaillé. <strong className="text-primary">La commande devient ferme et définitive à la signature du devis par le Client.</strong>
                                </p>
                            </section>

                            {/* Article 4 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 4 - Transmission des Leads</h2>
                                <p>
                                    FreshSoLeads transmet les leads au Client sous la forme d'un fichier Excel à compter de la réception du paiement de l'acompte. La transmission peut être effectuée en une ou plusieurs fois selon le volume commandé et la disponibilité des leads.
                                </p>
                            </section>

                            {/* Article 5 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 5 - Conditions Financières</h2>
                                <ul className="list-inside list-disc space-y-2">
                                    <li>Les prix sont indiqués HT et TTC dans le devis</li>
                                    <li><strong>Acompte :</strong> Un acompte est versé à la signature du devis (montant précisé dans le devis)</li>
                                    <li><strong>Solde :</strong> Payable dans un délai de 30 jours suivant la livraison complète des leads</li>
                                    <li><strong>Mode de paiement :</strong> Virement bancaire</li>
                                    <li><strong>Pénalités de retard :</strong> Tout retard de paiement entraîne l'application de pénalités de retard au taux légal de 10%, exigibles de plein droit sans mise en demeure préalable</li>
                                </ul>
                            </section>

                            {/* Article 6 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 6 - Obligations des Parties</h2>
                                <div className="mb-4">
                                    <p className="mb-2 font-semibold text-primary">FreshSoLeads s'engage à :</p>
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Livrer des leads conformes aux spécifications du devis</li>
                                        <li>Garantir la qualité et la pertinence des données transmises</li>
                                        <li>Respecter les délais de livraison convenus</li>
                                        <li>Assurer la conformité au RGPD</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="mb-2 font-semibold text-primary">Le Client s'engage à :</p>
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Payer le prix convenu dans les délais impartis</li>
                                        <li>Fournir une adresse email valide pour la réception des leads</li>
                                        <li>Communiquer toutes les informations nécessaires à la bonne exécution de la commande</li>
                                        <li>Utiliser les leads conformément à la réglementation en vigueur</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Article 7 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 7 - Garanties</h2>
                                <p className="mb-4">
                                    FreshSoLeads garantit que les quantités fournies correspondront à celles prévues au devis, <strong>avec une tolérance de 5%</strong>.
                                </p>
                                <ul className="list-inside list-disc space-y-2">
                                    <li><strong>Réclamations :</strong> Toute réclamation doit être formulée dans un délai de 60 jours suivant la livraison</li>
                                    <li><strong>Doublons :</strong> Les leads identifiés comme doublons (déjà transmis dans les 6 derniers mois) sont remplacés gratuitement</li>
                                    <li><strong>Taux d'erreur :</strong> Si le taux d'erreurs (coordonnées invalides, fausses informations) dépasse 10%, FreshSoLeads s'engage à rembourser ou à fournir un avoir correspondant aux leads défaillants</li>
                                </ul>
                            </section>

                            {/* Article 8 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 8 - Données Personnelles et RGPD</h2>
                                <p className="mb-4">
                                    FreshSoLeads et le Client s'engagent à respecter le Règlement Général sur la Protection des Données (RGPD) n°2016/679 et la loi Informatique et Libertés du 6 janvier 1978 modifiée.
                                </p>
                                <p className="mb-4">
                                    Les deux parties agissent en qualité de <strong>responsables de traitement indépendants</strong> pour les données des prospects transmis.
                                </p>
                                <p>
                                    Les personnes concernées disposent des droits d'accès, de rectification, d'opposition, de portabilité, de limitation et de suppression de leurs données. Ces droits peuvent être exercés auprès de FreshSoLeads à l'adresse : freshsoleads@gmail.com
                                </p>
                            </section>

                            {/* Article 9 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 9 - Confidentialité</h2>
                                <p>
                                    Les parties s'engagent à maintenir strictement confidentielles toutes les informations échangées dans le cadre de leur relation commerciale. Cet engagement de confidentialité reste en vigueur pendant toute la durée du contrat et pendant une période de <strong>1 an</strong> après son expiration.
                                </p>
                            </section>

                            {/* Article 10 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 10 - Sous-Traitance</h2>
                                <p>
                                    FreshSoLeads se réserve le droit de sous-traiter tout ou partie de l'exécution de ses obligations, sous réserve que ses sous-traitants présentent des garanties suffisantes au regard du RGPD et des normes de qualité en vigueur.
                                </p>
                            </section>

                            {/* Article 11 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 11 - Responsabilité</h2>
                                <p className="mb-4">
                                    FreshSoLeads est responsable des manquements à ses obligations contractuelles. Toutefois, sa responsabilité ne saurait être engagée pour les dommages indirects (perte de chiffre d'affaires, perte de clientèle, préjudice commercial, etc.).
                                </p>
                                <p>
                                    Le Client assume l'entière responsabilité de l'usage qu'il fait des leads transmis et s'engage à les exploiter conformément à la réglementation applicable.
                                </p>
                            </section>

                            {/* Article 12 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 12 - Force Majeure</h2>
                                <p>
                                    Les parties ne pourront être tenues responsables de l'inexécution de leurs obligations en cas de force majeure au sens de l'article 1218 du Code civil. En cas de survenance d'un tel événement, l'exécution du contrat est suspendue. Si l'interruption se prolonge au-delà de 30 jours, chaque partie pourra résilier le contrat sans indemnité.
                                </p>
                            </section>

                            {/* Article 13 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 13 - Durée et Résiliation</h2>
                                <p className="mb-4">
                                    Les présentes CGV s'appliquent pendant toute la durée d'exécution des obligations des parties.
                                </p>
                                <p>
                                    En cas de manquement grave par l'une des parties à ses obligations, l'autre partie pourra résilier le contrat de plein droit après mise en demeure restée sans effet pendant un délai de <strong>15 jours</strong>.
                                </p>
                            </section>

                            {/* Article 14 */}
                            <section>
                                <h2 className="mb-4 text-xl font-bold text-white">Article 14 - Droit Applicable et Compétence</h2>
                                <p>
                                    Les présentes CGV sont régies par le droit français. <strong>Tout litige relatif à leur interprétation ou à leur exécution sera soumis à la compétence exclusive des tribunaux de Paris</strong>, même en cas de pluralité de défendeurs ou d'appel en garantie.
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
