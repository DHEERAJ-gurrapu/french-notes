import type { GrammarTopic } from '@/types';

export const grammarSeed: GrammarTopic[] = [
  // ---- BASICS ----
  {
    id: 'gram_alphabet',
    type: 'grammar',
    section: 'basics',
    title: "L'alphabet français",
    description: 'The French alphabet and how letters are pronounced.',
    tags: ['basics', 'alphabet', 'pronunciation'],
    createdAt: '2026-01-10T09:00:00.000Z',
    updatedAt: '2026-01-10T09:00:00.000Z',
    content: `The French alphabet has the same 26 letters as English, but pronunciation differs:

a (ah) · b (bé) · c (sé) · d (dé) · e (euh) · f (ef) · g (jé) · h (ash) · i (ee) · j (ji) · k (ka) · l (el) · m (em) · n (en) · o (oh) · p (pé) · q (ku) · r (er) · s (es) · t (té) · u (u) · v (vé) · w (double-vé) · x (iks) · y (i grec) · z (zed)

Accents change pronunciation and meaning: **é** (aigu), **è / ê** (grave / circonflexe), **ç** (cédille), **ë / ï / ü** (tréma).`,
    examples: [
      { fr: 'Ça va ?', en: 'Is it going well? (How are you?)' },
      { fr: 'Noël', en: 'Christmas — tréma keeps the vowels separate' },
    ],
  },
  {
    id: 'gram_numbers',
    type: 'grammar',
    section: 'basics',
    title: 'Les nombres',
    description: 'Cardinal numbers 0–100 and how compound numbers are formed.',
    tags: ['basics', 'numbers'],
    createdAt: '2026-01-11T09:00:00.000Z',
    updatedAt: '2026-01-11T09:00:00.000Z',
    content: `0 zéro · 1 un · 2 deux · 3 trois · 4 quatre · 5 cinq · 6 six · 7 sept · 8 huit · 9 neuf · 10 dix
11 onze · 12 douze · 13 treize · 14 quatorze · 15 quinze · 16 seize · 17 dix-sept · 18 dix-huit · 19 dix-neuf · 20 vingt

From 21 onwards, compounds use "et" only for 21, 31, 41, 51, 61, 71: **vingt et un** (21), **vingt-deux** (22)…
30 trente · 40 quarante · 50 cinquante · 60 soixante · 70 soixante-dix · 80 quatre-vingts · 90 quatre-vingt-dix · 100 cent.`,
    examples: [
      { fr: "J'ai vingt et un ans.", en: 'I am 21 years old.' },
      { fr: 'quatre-vingt-un', en: '81 (soixante-dix and quatre-vingt series compound instead of using new words)' },
    ],
  },
  {
    id: 'gram_articles',
    type: 'grammar',
    section: 'basics',
    title: 'Les articles (définis, indéfinis, contractés)',
    description: 'Definite, indefinite and contracted articles, including à + le/les and de + le/les.',
    tags: ['basics', 'articles', 'gender'],
    createdAt: '2026-01-12T09:00:00.000Z',
    updatedAt: '2026-01-12T09:00:00.000Z',
    content: `### Articles définis
le (masc.) · la (fém.) · l' (before a vowel/mute h) · les (plural)

### Articles indéfinis
un (masc.) · une (fém.) · des (plural)

### Articles contractés avec « à »
à + le → **au** · à + la → **à la** · à + l' → **à l'** · à + les → **aux**

### Articles contractés avec « de »
de + le → **du** · de + la → **de la** · de + l' → **de l'** · de + les → **des**`,
    examples: [
      { fr: "Je vais au cinéma.", en: 'I am going to the cinema. (à + le)' },
      { fr: 'Elle vient du musée.', en: 'She is coming from the museum. (de + le)' },
    ],
  },
  {
    id: 'gram_gender',
    type: 'grammar',
    section: 'basics',
    title: 'Le genre des noms',
    description: 'How to recognise masculine and feminine nouns.',
    tags: ['basics', 'gender'],
    createdAt: '2026-01-13T09:00:00.000Z',
    updatedAt: '2026-01-13T09:00:00.000Z',
    content: `Every French noun is masculine or feminine — this must be memorised with the noun, though some endings are useful clues:

Often masculine: **-age, -ment, -eau, -isme** (le fromage, le gouvernement, le bureau)
Often feminine: **-tion, -sion, -ette, -ance, -ence, -té** (la nation, la maison[ette], la confiance, la beauté)

Adjectives agree in gender with the noun they describe (see [Les adjectifs](#gram_adjectives)), and often add **-e** for the feminine form: grand → grande, petit → petite.`,
  },
  {
    id: 'gram_pronouns',
    type: 'grammar',
    section: 'basics',
    title: 'Les pronoms possessifs',
    description: 'Possessive adjectives (mon/ma/mes, ton/ta/tes…) agreeing with the noun possessed.',
    tags: ['basics', 'pronouns', 'possessive pronouns', 'family'],
    createdAt: '2026-02-03T09:05:00.000Z',
    updatedAt: '2026-02-03T09:05:00.000Z',
    content: `French possessive adjectives agree with the noun **possessed**, not the possessor.

| Sujet | Masc. singulier | Fém. singulier | Pluriel |
|---|---|---|---|
| Je | mon | ma | mes |
| Tu | ton | ta | tes |
| Il / Elle | son | sa | ses |
| Nous | notre | notre | nos |
| Vous | votre | votre | vos |
| Ils / Elles | leur | leur | leurs |

Note: **mon/ton/son** are also used before feminine nouns starting with a vowel sound (mon amie, not "ma amie").`,
    examples: [{ fr: "J'ai une sœur aînée.", en: 'I have an older sister.' }],
  },

  // ---- VERBS ----
  {
    id: 'gram_er_verbs',
    type: 'grammar',
    section: 'verbs',
    title: '-ER verbs',
    description: 'The largest group of French verbs and their present-tense pattern.',
    tags: ['verbs', 'er verbs', 'present tense'],
    createdAt: '2026-01-20T09:00:00.000Z',
    updatedAt: '2026-01-20T09:00:00.000Z',
    content: `Regular -er verbs (parler, aimer, habiter…) drop **-er** and add:

je **-e** · tu **-es** · il/elle/on **-e** · nous **-ons** · vous **-ez** · ils/elles **-ent**

See the full conjugation of **parler** on the [Verbs](/verbs) page.`,
    examples: [{ fr: 'Je parle français.', en: 'I speak French.' }],
  },
  {
    id: 'gram_ir_verbs',
    type: 'grammar',
    section: 'verbs',
    title: '-IR verbs',
    description: 'The regular -ir verb pattern in the present tense.',
    tags: ['verbs', 'ir verbs', 'present tense'],
    createdAt: '2026-01-21T09:00:00.000Z',
    updatedAt: '2026-01-21T09:00:00.000Z',
    content: `Regular -ir verbs (finir, choisir, réussir…) drop **-ir** and add:

je **-is** · tu **-is** · il/elle/on **-it** · nous **-issons** · vous **-issez** · ils/elles **-issent**

See the full conjugation of **finir** on the [Verbs](/verbs) page.`,
    examples: [{ fr: 'Nous finissons nos devoirs.', en: 'We finish our homework.' }],
  },
  {
    id: 'gram_re_verbs',
    type: 'grammar',
    section: 'verbs',
    title: '-RE verbs',
    description: 'The regular -re verb pattern in the present tense.',
    tags: ['verbs', 're verbs', 'present tense'],
    createdAt: '2026-01-22T09:00:00.000Z',
    updatedAt: '2026-01-22T09:00:00.000Z',
    content: `Regular -re verbs (vendre, attendre, répondre…) drop **-re** and add:

je **-s** · tu **-s** · il/elle/on **–** (no ending) · nous **-ons** · vous **-ez** · ils/elles **-ent**

See the full conjugation of **vendre** on the [Verbs](/verbs) page.`,
    examples: [{ fr: 'Il attend le bus.', en: 'He is waiting for the bus.' }],
  },
  {
    id: 'gram_etre',
    type: 'grammar',
    section: 'verbs',
    title: 'Être',
    description: 'The irregular verb "to be" — used for identity, descriptions and as the auxiliary for some passé composé verbs.',
    tags: ['verbs', 'être', 'irregular'],
    createdAt: '2026-01-23T09:00:00.000Z',
    updatedAt: '2026-01-23T09:00:00.000Z',
    content: `**Être** (to be) is one of the most important irregular verbs — used for descriptions ("Tu es de quelle taille ?") and as the auxiliary verb for reflexive verbs and verbs of movement in the passé composé. Full conjugation on the [Verbs](/verbs) page.`,
    examples: [{ fr: 'Elle est de taille moyenne.', en: 'She is of medium height.' }],
  },
  {
    id: 'gram_avoir',
    type: 'grammar',
    section: 'verbs',
    title: 'Avoir',
    description: 'The irregular verb "to have" — also the main auxiliary for the passé composé.',
    tags: ['verbs', 'avoir', 'irregular'],
    createdAt: '2026-01-24T09:00:00.000Z',
    updatedAt: '2026-01-24T09:00:00.000Z',
    content: `**Avoir** (to have) is used for possession, age ("J'ai 15 ans"), and as the auxiliary verb for most verbs in the passé composé. Full conjugation on the [Verbs](/verbs) page.`,
    examples: [{ fr: "J'ai une sœur aînée.", en: 'I have an older sister.' }],
  },
  {
    id: 'gram_aller',
    type: 'grammar',
    section: 'verbs',
    title: 'Aller',
    description: 'The irregular verb "to go" — also used to form the futur proche.',
    tags: ['verbs', 'aller', 'irregular', 'places'],
    createdAt: '2026-02-12T09:05:00.000Z',
    updatedAt: '2026-02-12T09:05:00.000Z',
    content: `**Aller** (to go) is highly irregular in the present tense, and also combines with an infinitive to form the **futur proche** (near future): *aller + infinitif*. Full conjugation on the [Verbs](/verbs) page.`,
    examples: [
      { fr: 'Où vas-tu ?', en: 'Where are you going?' },
      { fr: 'Elle va au magasin.', en: 'She is going to the shop.' },
    ],
  },
  {
    id: 'gram_faire',
    type: 'grammar',
    section: 'verbs',
    title: 'Faire',
    description: 'The irregular verb "to do / make" — used in many set expressions.',
    tags: ['verbs', 'faire', 'irregular'],
    createdAt: '2026-01-25T09:00:00.000Z',
    updatedAt: '2026-01-25T09:00:00.000Z',
    content: `**Faire** (to do / to make) appears in many fixed expressions (faire du sport, faire les courses, faire beau). Full conjugation on the [Verbs](/verbs) page.`,
    examples: [{ fr: 'Je fais du sport le samedi.', en: 'I play sport on Saturdays.' }],
  },

  // ---- TENSES ----
  {
    id: 'gram_present',
    type: 'grammar',
    section: 'tenses',
    title: 'Le présent',
    description: 'The present tense — used for current actions, habits and general truths.',
    tags: ['tenses', 'present tense'],
    createdAt: '2026-01-30T09:00:00.000Z',
    updatedAt: '2026-01-30T09:00:00.000Z',
    content: `The present tense (**le présent**) covers what in English can be "I do", "I am doing" and "I have been doing" — French does not distinguish these with different tenses.

Regular verbs follow the -er / -ir / -re patterns; many common verbs (être, avoir, aller, faire…) are irregular and must be learned individually.`,
    examples: [{ fr: 'Nous nous entendons bien.', en: 'We get along well.' }],
  },
  {
    id: 'gram_passe_compose',
    type: 'grammar',
    section: 'tenses',
    title: 'Le passé composé',
    description: 'The compound past tense for completed actions — avoir/être + past participle.',
    tags: ['tenses', 'passé composé', 'past tense'],
    createdAt: '2026-01-31T09:00:00.000Z',
    updatedAt: '2026-01-31T09:00:00.000Z',
    content: `Formed with an auxiliary verb (**avoir** or **être**) in the present tense + the **past participle** of the main verb.

Most verbs use **avoir**. A set of ~15 verbs of movement/state (aller, venir, entrer, sortir, arriver, partir, naître, mourir, monter, descendre, retourner, rester, tomber, passer + reflexive verbs) use **être**, and the past participle then agrees in gender/number with the subject.

Regular past participles: **-er → -é**, **-ir → -i**, **-re → -u**.`,
    examples: [
      { fr: "J'ai mangé une pomme.", en: 'I ate an apple. (avoir + participe)' },
      { fr: 'Elle est allée au parc.', en: 'She went to the park. (être + agreement)' },
    ],
  },
  {
    id: 'gram_imparfait',
    type: 'grammar',
    section: 'tenses',
    title: "L'imparfait",
    description: 'The imperfect tense — for descriptions, habits and ongoing past actions.',
    tags: ['tenses', 'imparfait', 'past tense'],
    createdAt: '2026-02-01T09:00:00.000Z',
    updatedAt: '2026-02-01T09:00:00.000Z',
    content: `Formed from the **nous** form of the present tense: drop **-ons** and add the imparfait endings:

**-ais, -ais, -ait, -ions, -iez, -aient**

Used for descriptions in the past, habitual actions ("used to"), and background/ongoing situations — contrasted with the passé composé for completed events.`,
    examples: [{ fr: 'Quand j\'étais petit, je jouais dehors.', en: 'When I was little, I used to play outside.' }],
  },
  {
    id: 'gram_futur_proche',
    type: 'grammar',
    section: 'tenses',
    title: 'Le futur proche',
    description: 'The near future — aller (present) + infinitive.',
    tags: ['tenses', 'future proche', 'aller'],
    createdAt: '2026-02-02T09:00:00.000Z',
    updatedAt: '2026-02-02T09:00:00.000Z',
    content: `Formed with **aller** conjugated in the present + the infinitive of the main verb — equivalent to English "going to…".`,
    examples: [{ fr: 'Je vais visiter Paris.', en: 'I am going to visit Paris.' }],
  },
  {
    id: 'gram_futur_simple',
    type: 'grammar',
    section: 'tenses',
    title: 'Le futur simple',
    description: 'The simple future tense for planned or predicted actions.',
    tags: ['tenses', 'future simple'],
    createdAt: '2026-02-04T09:00:00.000Z',
    updatedAt: '2026-02-04T09:00:00.000Z',
    content: `Formed by adding the futur simple endings directly to the **infinitive** (for -re verbs, drop the final e first): **-ai, -as, -a, -ons, -ez, -ont**. Many common verbs have irregular stems (être → ser-, avoir → aur-, aller → ir-, faire → fer-).`,
    examples: [{ fr: 'Je parlerai français couramment un jour.', en: 'I will speak French fluently one day.' }],
  },

  // ---- OTHER ----
  {
    id: 'gram_adjectives',
    type: 'grammar',
    section: 'other',
    title: 'Les adjectifs',
    description: 'Adjective agreement (gender/number) and typical word order.',
    tags: ['adjectives', 'agreement', 'description'],
    createdAt: '2026-02-06T09:00:00.000Z',
    updatedAt: '2026-02-06T09:00:00.000Z',
    content: `Adjectives agree in **gender** and **number** with the noun they describe:

- Add **-e** for feminine (grand → grande), unless it already ends in -e.
- Add **-s** for plural (grand → grands), **-es** for feminine plural.
- Some patterns are irregular: **-eux/-euse** (généreux/généreuse), **-if/-ive** (sportif/sportive), **-il/-ille** (gentil/gentille).

Most adjectives follow the noun (une voiture rouge), but a small set of common short adjectives precede it (un grand homme, une petite maison).`,
    examples: [{ fr: 'Ses cheveux sont longs, ondulés et blonds.', en: 'Her hair is long, wavy and blond.' }],
  },
  {
    id: 'gram_negatives',
    type: 'grammar',
    section: 'other',
    title: 'La négation',
    description: 'Negating a sentence with ne…pas and other negative structures.',
    tags: ['negatives', 'sentence structure'],
    createdAt: '2026-02-08T09:00:00.000Z',
    updatedAt: '2026-02-08T09:00:00.000Z',
    content: `The standard negation wraps the conjugated verb: **ne + verb + pas**. Other negative expressions follow the same pattern:

**ne…jamais** (never) · **ne…plus** (no longer) · **ne…rien** (nothing) · **ne…personne** (nobody) · **ne…que** (only)

Before a vowel sound, **ne** becomes **n'**.`,
    examples: [
      { fr: "Je n'ai pas de frère et de sœur.", en: 'I have no siblings.' },
      { fr: 'Il ne joue jamais dehors.', en: 'He never plays outside.' },
    ],
  },
  {
    id: 'gram_questions',
    type: 'grammar',
    section: 'other',
    title: 'Poser des questions',
    description: 'Three ways to ask questions in French, and common question words.',
    tags: ['questions'],
    createdAt: '2026-02-09T09:00:00.000Z',
    updatedAt: '2026-02-09T09:00:00.000Z',
    content: `Three ways to form a yes/no question, from informal to formal:

1. **Rising intonation**: Tu vas bien ?
2. **Est-ce que**: Est-ce que tu vas bien ?
3. **Inversion**: Vas-tu bien ?

Question words: **qui** (who), **que/quoi** (what), **où** (where), **quand** (when), **comment** (how), **pourquoi** (why), **combien** (how much/many), **quel(le)** (which).`,
    examples: [
      { fr: 'Où vas-tu ?', en: 'Where are you going?' },
      { fr: 'Tu es de quelle taille ?', en: 'What height are you?' },
    ],
  },
  {
    id: 'gram_prepositions',
    type: 'grammar',
    section: 'other',
    title: 'Les prépositions de lieu',
    description: 'Prepositions of place used to say where something is located.',
    tags: ['prepositions', 'places', 'directions'],
    createdAt: '2026-02-12T09:10:00.000Z',
    updatedAt: '2026-02-12T09:10:00.000Z',
    content: `| Français | Anglais |
|---|---|
| sur | on |
| devant | in front of |
| sous | under |
| entre | between |
| derrière | behind |
| à côté de | beside / next to |
| au-dessus de | above |
| au-dessous de | below |
| au milieu de | in the middle of |
| au coin de | at the corner of |`,
    examples: [{ fr: 'Le restaurant est devant la porte.', en: 'The restaurant is in front of the door.' }],
  },
  {
    id: 'gram_sentence_structure',
    type: 'grammar',
    section: 'other',
    title: 'La structure de la phrase',
    description: 'Basic French word order: subject–verb–object, and where adjectives/pronouns go.',
    tags: ['sentence structure'],
    createdAt: '2026-02-10T09:00:00.000Z',
    updatedAt: '2026-02-10T09:00:00.000Z',
    content: `French follows the same core **Subject–Verb–Object** order as English:

**Je (S) mange (V) une pomme (O).**

Key differences to watch for:
- Most adjectives follow the noun (une maison **bleue**).
- Object pronouns usually go **before** the verb (Je **le** vois — I see him/it).
- Negation wraps around the verb (ne…pas).`,
    examples: [{ fr: 'Nous sommes à la boulangerie.', en: 'We are at the bakery.' }],
  },
];
