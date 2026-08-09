import type { Note } from '@/types';

export const notesSeed: Note[] = [
  {
    id: 'note_famille',
    type: 'note',
    title: 'La famille, les relations',
    description:
      "Unit 1 objectif : utiliser les pronoms possessifs. Vocabulaire de la fratrie et exemples.",
    topic: 'Family & Relationships',
    tags: ['family', 'possessive pronouns', 'grammar', 'unit-1'],
    createdAt: '2026-02-03T09:00:00.000Z',
    updatedAt: '2026-02-03T09:00:00.000Z',
    content: `## La famille

- **Un frère aîné / une sœur aînée** — an older brother / sister
- **Un enfant né(e) au milieu** — middle child
- **Un frère cadet / une sœur cadette** — a younger brother / sister
- **Un benjamin / une benjamine** — the youngest brother / sister

**J'ai une sœur aînée.** — I have an older sister.
**Un enfant unique** — I am an only child.
**Un fils unique** — I only have a son.
**Une fille unique** — I only have a daughter.
**J'ai … et …** — I have … and … (2 siblings)
**Je n'ai pas de frère et de sœur.** — I have no siblings.
**Je suis un enfant unique.** — I am an only child.

## Les pronoms possessifs (possessive adjectives)

| Sujet | Masc. singulier | Fém. singulier | Pluriel |
|---|---|---|---|
| Je | mon | ma | mes |
| Tu | ton | ta | tes |
| Il / Elle | son | sa | ses |
| Nous | notre | notre | nos |
| Vous | votre | votre | vos |
| Ils / Elles | leur | leur | leurs |

## S'entendre (v.) — to get along

Pronominal verb, present tense:

| Sujet | Forme |
|---|---|
| Je | m'entends |
| Tu | t'entends |
| Il / Elle | s'entend |
| Nous | nous entendons |
| Vous | vous entendez |
| Ils / Elles | s'entendent |

Example: **Nous nous entendons bien.** — We get along well.`,
  },
  {
    id: 'note_description_physique',
    type: 'note',
    title: 'Décrire la personne physique',
    description: 'Vocabulaire pour décrire les yeux, les cheveux et la taille.',
    topic: 'Description',
    tags: ['description', 'adjectives', 'vocabulary', 'unit-1'],
    createdAt: '2026-02-05T09:00:00.000Z',
    updatedAt: '2026-02-05T09:00:00.000Z',
    content: `## Comment est-il ? / Comment est-elle ? — What is he / she like?

### Les yeux
- bleus — blue
- marron — brown
- verts — green
- noirs — black
- gris — grey

### Les cheveux (forme)
- longs — long
- courts — short
- mi-longs — medium-length
- raides — straight
- frisés — curly

### Couleur des cheveux
- bruns — brown
- noirs — black
- châtains — chestnut / brown
- blonds — blond
- roux — red

### Exemples
- Ses yeux sont bleus.
- Ses cheveux sont courts, frisés et noirs.
- Ses cheveux sont longs, ondulés et blonds.

## Tu es de quelle taille ? — Être

- **grand(e)** — tall
- **petit(e)** — short
- **de taille moyenne** — medium height
- **gros / grosse** — big / overweight
- **mince** — thin
- **en forme** — fit`,
  },
  {
    id: 'note_amitie',
    type: 'note',
    title: "L'amitié",
    description: 'Vocabulaire des relations amicales et adjectifs de personnalité.',
    topic: 'Friendship',
    tags: ['friendship', 'vocabulary', 'adjectives', 'unit-1'],
    createdAt: '2026-02-07T09:00:00.000Z',
    updatedAt: '2026-02-07T09:00:00.000Z',
    content: `## Objectifs : mes relations avec les autres

| Français | Anglais |
|---|---|
| Un ami | a friend |
| Une amie | a female friend |
| Un meilleur ami | best friend |
| Une meilleure amie | best female friend |
| Un copain | buddy / friend |
| Une copine | buddy / female friend |
| Un petit ami | boyfriend |
| Une petite amie | girlfriend |
| Un mec | a guy |
| Une nana | a girl / woman |

**Mon ami / mon amie — C'est quelqu'un de bien.** — He / She is a good person.

Structure: **Être + adjectif** | **Avoir l'air + adjectif**

### Adjectifs
gentil / gentille · généreux / généreuse · honnête · pessimiste · prudent / prudente · fidèle · sportif / sportive · compréhensif / compréhensive · optimiste · drôle`,
  },
  {
    id: 'note_lieux_orientation',
    type: 'note',
    title: "Les lieux et s'orienter dans l'espace",
    description:
      'Unit 2 : noms de lieux, le verbe aller, les articles contractés avec « à », et les prépositions de lieu.',
    topic: 'Places & Directions',
    tags: ['places', 'directions', 'prepositions', 'aller', 'unit-2'],
    createdAt: '2026-02-12T09:00:00.000Z',
    updatedAt: '2026-02-12T09:00:00.000Z',
    content: `## Vocabulaire général

**Un pays** — a country · **Une ville** — a city · **Un quartier** — a neighbourhood

### Synonymes de "un lieu"
un endroit · un point · une place · un espace · un lieu

## Aller (présent)

| Sujet | Forme |
|---|---|
| Je | vais |
| Tu | vas |
| Il / Elle | va |
| Nous | allons |
| Vous | allez |
| Ils / Elles | vont |

**Où vas-tu ?** — Where are you going?

### Exemples
- Je suis au restaurant.
- Nous sommes à la boulangerie.
- Il va à l'école.
- Elle va au magasin.

## Les articles contractés avec « à »

| Contraction | Résultat |
|---|---|
| à + le | au |
| à + la | à la |
| à + l' | à l' |
| à + les | aux |

## Les prépositions de lieu

sur (on) · devant (in front of) · sous (under) · entre (between) · derrière (behind) · à côté de (beside / next to) · au-dessus de (above) · au-dessous de (below) · au milieu de (in the middle of) · au coin de (at the corner of)

Example: **Le restaurant est devant la porte.** — The restaurant is in front of the door.`,
  },
];
