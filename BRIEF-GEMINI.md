# Brief Agent Gemini - FreshSoLeads (Phase 2)

## Statut Actuel

**Phase 1 terminee** - Structure du site OK

**Phase 2** - Corrections et ameliorations visuelles

---

## TACHES PHASE 2

### 1. Logos Marquee (URGENT)

Le dossier `public/logos/` est vide → erreurs 404

**Action** : Telecharge les vrais SVG depuis https://simpleicons.org/

```
public/logos/
├── google.svg        # cherche "google"
├── meta.svg          # cherche "meta" ou "facebook"
├── tiktok.svg        # cherche "tiktok"
├── instagram.svg     # cherche "instagram"
├── linkedin.svg      # cherche "linkedin"
├── snapchat.svg      # cherche "snapchat"
├── taboola.svg       # cherche "taboola" (ou cree un placeholder)
├── outbrain.svg      # cherche "outbrain" (ou cree un placeholder)
```

**Style** : Applique un filtre grayscale en CSS, couleur au hover

---

### 2. Images Secteurs (COULEURS)

Les images dans `public/images/sectors/` sont **grises/neutres**.

**Probleme** : Elles n'utilisent pas les couleurs de la marque.

**Action** : Regenere les 6 images avec ces prompts STRICTS :

**heat-pump.png :**
```
Modern 3D isometric illustration of a heat pump system. Clean white base with BRIGHT YELLOW-GREEN (#E4FF1A) glowing energy effects and PURPLE (#8B5CF6) accent lines and shadows. NO blue, NO orange, NO other colors. Minimalist style, white background.
```

**solar-panels.png :**
```
Modern 3D isometric illustration of solar panels on rooftop. White/silver panels with BRIGHT YELLOW-GREEN (#E4FF1A) sun rays and energy particles, PURPLE (#8B5CF6) accent shadows. NO blue sky, NO orange. White background.
```

**insulation.png :**
```
Modern 3D isometric cross-section of home insulation. White/gray walls with BRIGHT YELLOW-GREEN (#E4FF1A) thermal glow effect and PURPLE (#8B5CF6) protection barrier. NO orange, NO warm colors. White background.
```

**insurance.png :**
```
Modern 3D isometric shield protecting a house. PURPLE (#8B5CF6) glowing shield with BRIGHT YELLOW-GREEN (#E4FF1A) checkmark and security icons. NO blue. White background.
```

**real-estate.png :**
```
Modern 3D isometric buildings with floating key. White/gray buildings with PURPLE (#8B5CF6) accent windows, BRIGHT YELLOW-GREEN (#E4FF1A) key icon. NO blue. White background.
```

**senior-mutual.png :**
```
Modern 3D isometric healthcare symbols. White medical cross with PURPLE (#8B5CF6) glow, BRIGHT YELLOW-GREEN (#E4FF1A) heart icons. NO blue, NO soft blue. White background.
```

---

### 3. Effet Glow Arriere-Plan (OPTIONNEL)

~~Ajoute un effet de halo/glow anime sur plusieurs sections.~~

**UPDATE** : L'image hero a ete mise a jour avec l'effet glow INTEGRE directement dans l'image. Plus besoin d'ajouter l'effet en CSS pour le Hero.

**Optionnel - Ou l'appliquer si souhaite :**
- ~~Hero section~~ (FAIT - integre dans l'image)
- Section Process (fond subtil) - optionnel
- CTA Final (effet ambient) - optionnel

**Implementation suggeree :**

```tsx
// components/ui/GlowEffect.tsx
'use client'
import { motion } from 'framer-motion'

interface GlowEffectProps {
  className?: string
  animate?: boolean
}

export function GlowEffect({ className, animate = true }: GlowEffectProps) {
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0.5 }}
      animate={animate ? {
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.05, 1],
      } : {}}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[600px] rounded-full
                      bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30
                      blur-[100px]" />
    </motion.div>
  )
}
```

**CSS alternatif :**
```css
.glow-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(228, 255, 26, 0.2) 0%,
    rgba(139, 92, 246, 0.2) 50%,
    transparent 70%
  );
  filter: blur(80px);
  animation: pulse-glow 4s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
```

---

## Checklist Phase 2

- [x] Telecharger logos SVG (Tous presents dont placeholders pour manquants)
- [x] Regenerer 6 images secteurs avec couleurs marque
- [x] Nouvelle image hero avec glow integre
- [x] Ajouter logos manquants (LinkedIn, Taboola, Outbrain - Placeholders crees)
- [x] (Optionnel) Appliquer glow au Process
- [x] (Optionnel) Appliquer glow au CTA Final
- [ ] Verifier responsive
- [ ] Verifier que le marquee fonctionne avec les nouveaux logos

---

## Rappel Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Jaune-vert | `#E4FF1A` | Accents, glow, CTA |
| Violet | `#8B5CF6` | Titres, glow secondaire |
| Noir | `#0F0F0F` | Fonds sombres |
| Blanc | `#FFFFFF` | Fonds clairs |

---

## Priorite

1. **Logos** (fix les 404)
2. **Images secteurs** (couleurs)
3. **Effet glow** (polish visuel)

Bonne chance !
