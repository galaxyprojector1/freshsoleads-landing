# FreshSoLeads - Contexte Projet

## Environnement
Terminal Claude Code dans Antigravity IDE (Google)

## Workflow
```
Claude Code (terminal) → PRD/specs/briefs/review
Agent Gemini (panneau droit) → UI/code/design/images
```

---

## Etat du Projet

**Phase actuelle** : Phase 2 - Corrections visuelles

### Phase 1 - TERMINEE
- [x] Setup Next.js + Tailwind
- [x] Structure des composants
- [x] Hero avec image + typing effect
- [x] Logo marquee (structure)
- [x] Sections (Secteurs, Process, CTA, Footer)
- [x] Page contact
- [x] Images process generees (bonnes couleurs)

### Phase 2 - EN COURS
- [ ] Telecharger vrais logos SVG (simpleicons.org)
- [ ] Regenerer images secteurs (couleurs #E4FF1A + #8B5CF6)
- [ ] Ajouter effet glow anime (Hero, Process, CTA)
- [ ] Polish responsive

---

## Fichiers Cles

| Fichier | Description |
|---------|-------------|
| `docs/PRD.md` | Specifications completes |
| `BRIEF-GEMINI.md` | Instructions pour Gemini |
| `references/hero-dolead-style.jpg` | **IMAGE HERO** (piece maitresse) |
| `references/leadsofresh-*.png` | References structure |

---

## Couleurs

```
Jaune-vert : #E4FF1A
Violet     : #8B5CF6
Noir       : #0F0F0F
Blanc      : #FFFFFF
```

---

## Commandes Utiles

```bash
npm run dev      # Dev server
npm run build    # Build production
npm run lint     # ESLint
```

---

## Pour Claude

Quand l'utilisateur revient :
1. Lis `CONTEXT-RESUME.md` si nouvelle session
2. Utilise `/gemini` pour voir la progression
3. Review le code genere
4. Donne des ajustements si necessaire

## Fichier Resume

Si le contexte est perdu, lis `CONTEXT-RESUME.md` pour tout le contexte du projet.
