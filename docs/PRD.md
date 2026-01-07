# PRD - FreshSoLeads

## Objectif

Creer une landing page B2B premium pour une agence de generation de leads. Le design doit etre construit AUTOUR de l'image hero (femme professionnelle style Dolead) pour un rendu visuel magnifique.

---

## Historique des Phases

### Phase 1 (Terminee)
- Setup Next.js 14 + Tailwind
- Structure complète du site
- Hero avec typing effect
- Logo marquee (structure)
- Toutes les sections
- Images process avec couleurs marque

### Phase 2 (En cours)
- Fix logos marquee (vrais SVG)
- Regenerer images secteurs (couleurs marque)
- Effet glow anime sur plusieurs sections

---

## Nom du Projet

**FreshSoLeads**

---

## Stack Technique

```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 4
Language: TypeScript strict
Fonts: Inter ou Poppins (Google Fonts)
Icons: Lucide React
Animations: Framer Motion (pour reproduire les animations Dolead)
Deployment: Vercel
```

---

## References Design

| Fichier | Usage |
|---------|-------|
| `references/hero-dolead-style.jpg` | **IMAGE HERO PRINCIPALE** - A utiliser directement |
| `references/leadsofresh-home.png` | Structure des sections |
| `references/leadsofresh-contact.png` | Page contact avec formulaire secteurs |
| `references/Jitter page.png` | Style cartes/composants |
| **dolead.com** | Animations hero a reproduire (visiter le site) |

---

## Palette de Couleurs

```css
/* Couleurs principales */
--primary: #E4FF1A;        /* Jaune-vert fluo */
--secondary: #8B5CF6;      /* Violet */

/* Fonds */
--background: #FFFFFF;     /* Blanc */
--background-dark: #0F0F0F; /* Noir profond (hero) */

/* Textes */
--text: #1A1A1A;           /* Noir */
--text-light: #FFFFFF;     /* Blanc */
--text-muted: #6B7280;     /* Gris */

/* Gradients */
--gradient-hero: linear-gradient(135deg, #E4FF1A 0%, #8B5CF6 100%);
```

---

## Structure du Site

### Page 1 : Accueil (`/`)

#### Section 1 : Header (sticky)
- Logo "FreshSoLeads" a gauche
- Navigation : Accueil | Services | Process | Contact
- CTA bouton jaune : "Commander mes Leads"
- Style : transparent au debut, fond blanc au scroll

#### Section 2 : Hero (PRIORITE ABSOLUE)
**IMPORTANT : Construire cette section autour de `hero-dolead-style.jpg`**

Layout :
- Gauche : Texte + CTA
- Droite : L'image hero (femme avec icones et stats)

Texte :
- Badge : "Leads disponibles en temps reel"
- Titre H1 : "Generez des **leads qualifies** pour votre **croissance**"
- Sous-titre : "Boostez votre force de vente avec des contacts exclusifs, verifies et prets a acheter."
- CTA primaire : "Obtenir mes leads" (jaune)
- CTA secondaire : "Comment ca marche ?" (outline)

Badges sous les CTA :
- Sans engagement
- Exclusivite garantie
- RGPD Compliant

**Animations a reproduire (voir dolead.com) :**
1. Animation de texte qui change (typing effect sur un mot)
2. Animation des stats qui comptent

Fond : Gradient sombre ou degrade subtil

#### Section 3 : Logos Partenaires
- Titre : "Nos canaux d'acquisition"
- Logos : Google Ads, Facebook, TikTok, Instagram, LinkedIn, Snapchat, Taboola, Outbrain
- Style : logos en ligne, grayscale ou couleur subtile

#### Section 4 : Secteurs d'Expertise
- Titre : "Nos secteurs d'expertise"
- Grid de cartes (6 secteurs) :
  - Pompes a chaleur
  - Panneaux solaires
  - Isolation
  - Assurances
  - Immobilier
  - Mutuelles seniors
- Chaque carte : image + titre + fleche
- Style : cartes avec hover effect, images generees

#### Section 5 : Process (3 etapes)
- Titre : "Notre methode en 3 etapes"
- Layout : alternance gauche/droite ou vertical

Etapes :
1. **Analyse** : "Nous analysons votre marche, vos objectifs et definissons ensemble vos criteres de ciblage ideaux."
2. **Acquisition** : "Nos algorithmes exclusifs lancent des campagnes multicanales ciblees pour capter les meilleurs prospects."
3. **Livraison** : "Recevez vos leads qualifies et verifies en temps reel, directement dans votre CRM ou par email."

Chaque etape : numero + titre + description + illustration

#### Section 6 : Avantages (Features)
- Fond sombre (noir/violet)
- 4 blocs :
  - Leads Exclusifs & Frais
  - Ciblage Precis
  - Livraison Temps Reel
  - Accompagnement Dedie
- Icones + titres + descriptions
- Style : cards sombres avec accents jaune/violet

#### Section 7 : CTA Final
- Fond : gradient violet vers noir
- Titre : "Pret a faire decoller vos ventes ?"
- Sous-titre : proposition de valeur
- 2 boutons : "Commander mes leads" + "Parler a un expert"

#### Section 8 : Footer
- Logo FreshSoLeads
- Liens : Solutions, Entreprise, Legal
- Reseaux sociaux
- Copyright 2026

---

### Page 2 : Contact (`/contact`)

Reproduire le style de `references/leadsofresh-contact.png`

- Titre : "Boostez vos leads"
- Sous-titre : "Confiez-nous vos objectifs"
- Formulaire avec selection de secteur (grille de boutons)
- Section "Zones d'actions" avec drapeaux pays
- CTA "Je commande mes Leads"

---

## Images a Generer (Prompts pour Gemini)

### Secteurs (6 images)

**Pompes a chaleur :**
```
Modern 3D isometric illustration of a heat pump system, clean white and silver design, subtle green energy glow, minimalist style, white background, professional B2B aesthetic
```

**Panneaux solaires :**
```
Modern 3D isometric illustration of solar panels on a rooftop, bright sunny atmosphere, clean blue and white design, minimalist style, white background, professional B2B aesthetic
```

**Isolation :**
```
Modern 3D isometric illustration of home insulation layers, cross-section view showing thermal protection, warm orange and white colors, minimalist style, white background, professional B2B aesthetic
```

**Assurances :**
```
Modern 3D isometric illustration of a protective shield with a house and family icons, blue and white trustworthy design, minimalist style, white background, professional B2B aesthetic
```

**Immobilier :**
```
Modern 3D isometric illustration of modern buildings and houses with a key icon, professional real estate aesthetic, blue and white design, minimalist style, white background
```

**Mutuelles seniors :**
```
Modern 3D isometric illustration of healthcare symbols with elderly care icons, warm and reassuring colors (soft blue, white), professional medical aesthetic, minimalist style, white background
```

### Process (3 images)

**Etape 1 - Analyse :**
```
Modern 3D isometric illustration of data analysis, magnifying glass over charts and graphs, person analyzing data on screen, blue and yellow accent colors (#E4FF1A, #8B5CF6), clean white background, professional B2B style
```

**Etape 2 - Acquisition :**
```
Modern 3D isometric illustration of multi-channel marketing campaigns, social media icons (Google, Facebook, TikTok) floating around a central hub, dynamic arrows showing data flow, yellow (#E4FF1A) and purple (#8B5CF6) accents, white background, professional B2B style
```

**Etape 3 - Livraison :**
```
Modern 3D isometric illustration of real-time lead delivery, dashboard showing incoming leads with checkmarks, notification bells, CRM integration visual, green success indicators, yellow and purple accents, white background, professional B2B style
```

---

## Animations a Implementer

### Hero - Typing Effect
Mot qui change en boucle : "croissance" → "succes" → "ventes" → "resultats"
- Effet machine a ecrire
- Curseur clignotant
- Transition fluide

### Hero - Compteur Stats
Les chiffres dans l'image montent progressivement :
- "CAC €690" compte de 0 a 690
- "Taux de vente 9,2%" compte de 0 a 9.2
- Declenchement au scroll (intersection observer)

### Cards - Hover Effects
- Scale 1.02 au hover
- Shadow augmentee
- Transition 200ms ease

---

## Criteres de Qualite

- [ ] Design construit autour de l'image hero
- [ ] Responsive parfait (mobile 375px, tablet 768px, desktop 1440px+)
- [ ] Animations fluides (60fps)
- [ ] Score Lighthouse > 90
- [ ] Temps de chargement < 3s
- [ ] SEO : meta tags, Open Graph
- [ ] Accessibilite : contraste, focus states

---

## Fichiers de Reference

```
references/
├── hero-dolead-style.jpg     # IMAGE HERO - UTILISER DIRECTEMENT
├── leadsofresh-home.png      # Structure sections
├── leadsofresh-contact.png   # Page contact
├── Jitter page.png           # Style composants
└── Jitter page (1).png       # Style logos
```

---

*PRD cree le 6 janvier 2026*
