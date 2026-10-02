import type { Note } from '@/types';

const UNIT4_DATE = '2026-10-02T09:00:00.000Z';

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
  {
    id: 'note_postcard_messages',
    type: 'note',
    title: 'Écrire un message - la carte postale',
    description: 'Unit 2: identify message formats and practise simple written communication.',
    topic: 'Writing & Communication',
    tags: ['writing', 'postcard', 'message', 'unit-2'],
    createdAt: '2026-09-08T09:00:00.000Z',
    updatedAt: '2026-09-08T09:00:00.000Z',
    content: `## Qu'est-ce que tu vas faire ?

### Objectif
Réviser la carte postale et pratiquer les structures verbales au passé.

### Types de messages

- **Une carte postale** — a postcard
- **Un blog** — a blog
- **Un message dans les réseaux sociaux** — a social-media message

### À retenir

**Une promenade en bateau** — a boat trip / boat ride`,
  },
  {
    id: 'note_loisirs_temps_libre',
    type: 'note',
    title: 'Les loisirs et le temps libre',
    description: 'Unit 3: activities, sports, arts, reading and television vocabulary.',
    topic: 'Leisure & Free Time',
    tags: ['leisure', 'free time', 'sports', 'media', 'unit-3'],
    createdAt: '2026-09-08T09:00:00.000Z',
    updatedAt: '2026-09-08T09:00:00.000Z',
    content: `## Quand j'ai du temps

**Les loisirs** et **le temps libre** permettent de décrire ce que l'on aime faire.

### La règle utile : jouer à / jouer de

- **jouer au / à la / aux** + sport ou jeu : *jouer au tennis, jouer aux cartes*
- **jouer du / de la / de l'** + instrument : *jouer du piano, jouer de la flûte*

### Activités

- Faire du dessin, de la peinture, du théâtre ou de la natation
- Faire de l'équitation, du vélo, de la randonnée ou du ski
- Sortir avec mes amis, assister à un concert, voyager
- Écouter de la musique, lire et regarder la télévision

### Médias

À la télévision : un dessin animé, un documentaire, un jeu télévisé, un divertissement, le journal, les informations, une émission musicale ou sportive, une série, un feuilleton, la télé-réalité.`,
  },

  // ---- UNITÉ 4 AU TRAVAIL ! ----
  {
    id: 'note_unit4_vie_scolaire',
    type: 'note',
    title: '4A La vie scolaire',
    description: 'Unité 4: the school system in France, describing your school and a typical school day.',
    topic: 'School Life',
    tags: ['school', 'school life', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## Le système scolaire en France

- L'école est **obligatoire** pour tout le monde **à partir de trois ans jusqu'à seize ans**.
- Il **ne faut pas payer** pour aller à une école publique.
- Dans les écoles publiques, il **n'y a pas d'uniforme scolaire**.
- Les écoles publiques sont **mixtes**.
- Le début de la nouvelle année scolaire en septembre s'appelle **la rentrée**.
- Les **demi-pensionnaires** déjeunent à la cantine. Les **internes** dorment à l'école (à l'internat).

## La vie scolaire dans mon pays (questions et réponses)

| Question | Réponses possibles |
|---|---|
| L'école est obligatoire à partir de quel âge ? … et jusqu'à quel âge ? | à partir de … ans, jusqu'à … ans |
| Est-ce que la plupart des écoles sont mixtes ou séparées ? | La plupart des écoles sont mixtes. / Il y a très peu d'écoles mixtes. / On trouve les deux. |
| Est-ce qu'il y a uniquement des écoles publiques ? | La plupart sont des écoles publiques mais on trouve aussi des écoles privées. |
| Est-ce qu'il faut payer les frais de scolarité ? | Les écoles publiques (ne) sont (pas) gratuites. Dans les écoles privées, il est souvent nécessaire de payer des frais de scolarité. |
| Et les livres scolaires ? | Ça dépend des écoles. Il faut tout acheter. / Il ne faut pas acheter de livres mais il faut acheter le matériel personnel (cahiers, feuilles, classeurs, crayons, stylos, calculatrice, etc.). |
| Qu'est-ce que les élèves portent au collège ? | Dans beaucoup d'écoles, on porte un uniforme scolaire. / Il n'y a pas d'uniforme, alors les élèves portent ce qu'ils veulent, par exemple un sweat, un jean et des baskets. |

**Exemple :** *Dans mon pays, l'école est obligatoire de … ans à … ans.*

## Une école internationale (le texte d'Amir)

> Je m'appelle Amir et je vais dans une école internationale. C'est une école mixte pour les élèves de quatre à dix-huit ans. Nous avons un uniforme scolaire bleu et gris. Il y a environ 1000 élèves (400 internes et 600 demi-pensionnaires). Tout le monde déjeune à l'école et on mange assez bien. Comme c'est une école internationale, il y a beaucoup de nationalités différentes.
> Dans chaque salle de classe, il y a un tableau interactif et des ordinateurs. Nous travaillons souvent en ligne. Nous avons des laboratoires et une grande bibliothèque : le CDI (Centre de Documentation et d'Information). Pour le sport, il y a des gymnases et des terrains de sport, mais il n'y a pas de piscine.

| | L'école internationale |
|---|---|
| Nombre d'élèves | environ 1000 |
| Âge | 4 à 18 ans |
| Mixte / Garçons / Filles | mixte |
| Uniforme | oui (bleu et gris) |
| Piscine | non |
| Terrain de sport | oui |
| Laboratoire de sciences | oui |
| Bibliothèque / CDI | oui |
| Cantine | oui |
| Internat | oui (400 internes) |

## Une journée scolaire

> Le collège est à environ vingt minutes de chez moi. Le **matin**, je prends le bus vers 7h30. Les **cours** commencent à 8h presque tous les jours. Pendant la journée, il y a trois **pauses**. La pause du matin est à 10h et dure dix minutes. Pendant la pause du matin, on peut acheter des **boissons** et des pains au chocolat. La pause-déjeuner est de 12h à 14h. Je suis demi-pensionnaire, alors je mange à la **cantine**. On mange assez bien. Une fois par **semaine**, on a du poulet avec des frites. L'après-midi, on a une **récréation** de dix minutes à 16h. Normalement, les cours finissent à 17h. À la fin de la journée, je prends le **bus** pour rentrer chez moi.

## À toi ! Parler de ton école

| Question | Réponse |
|---|---|
| Comment s'appelle ton école ? | Mon école s'appelle … |
| C'est une école mixte ? | Oui, c'est mixte. / Non, c'est une école de filles / garçons. |
| C'est où ? | C'est au centre-ville à … / C'est dans la banlieue de … / C'est près d'un centre sportif / de la rue principale / de la gare / d'un parc. |
| Il y a combien d'élèves ? | Il y a environ … élèves. |
| À quelle heure est-ce que tu pars pour le collège ? | Je pars à … |
| Comment vas-tu au collège ? | J'y vais en voiture / en bus / en train / à pied / à vélo / à moto / à trottinette. |
| Quand est-ce que les cours commencent ? | Les cours commencent à … |
| Qu'est-ce que tu fais à l'heure du déjeuner ? | Je déjeune à la cantine. / Je prends un sandwich et un fruit. |
| Les cours finissent à quelle heure ? | Les cours finissent à … heures. |`,
  },
  {
    id: 'note_unit4_matieres',
    type: 'note',
    title: '4B Quelles matières aimes-tu ?',
    description: 'Unité 4: discuss school subjects, give opinions and say what is (not) going to happen.',
    topic: 'School Subjects',
    tags: ['school', 'subjects', 'opinions', 'futur proche', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## Des questions sur les matières

- Quelles sont tes matières préférées ?
- Pourquoi ? C'est … facile / important / intéressant / amusant.
- Quelles sont les matières que tu aimes le moins ?
- Qu'est-ce que tu étudies comme langues vivantes ?
- Qu'est-ce que tu fais comme sciences ? (la biologie, la physique, la chimie)
- Qu'est-ce que tu fais comme sports au collège ?
- Quelles sont les matières les plus importantes, à ton avis ?

## À propos des matières : opinions

| Positive (P) | Négative (N) |
|---|---|
| C'est intéressant et utile. | Ce n'est pas intéressant et c'est difficile. |
| Les cours sont souvent amusants et je trouve que c'est une matière utile. | Le prof donne trop de devoirs et en plus je trouve ça vraiment difficile. |
| **P + N :** On dit que c'est une matière importante, mais à mon avis, c'est ennuyeux. | **P + N :** Le prof est sympa et explique tout très bien, mais je n'ai pas de bonnes notes. |

### Phrases utiles
1. Ma matière préférée est …, parce que …
2. J'aime les sciences, surtout …, parce que …
3. Je n'aime pas beaucoup …, mais …
4. Je n'aime pas du tout … parce qu'il y a trop de devoirs.
5. Je ne suis pas fort(e) en …
6. Je trouve … vraiment difficile, mais le prof est sympa.

## On parle des matières (conversation)

> **A** Quelles sont tes matières préférées ?
> **B** J'aime bien la géographie parce que j'aime apprendre des choses sur les pays différents. On fait souvent des recherches sur Internet, c'est assez **intéressant**. J'aime aussi l'EPS. Et toi ?
> **A** Moi, j'aime les langues, mais ma matière préférée est les maths. Je trouve que c'est une matière **importante** et **utile**.
> **B** C'est vrai, mais moi, je ne suis pas **fort** en maths et je trouve ça **difficile**.
> **A** Qu'est-ce que tu apprends comme langues vivantes ?
> **B** J'apprends l'espagnol. Je trouve ça **amusant**. Je suis dans la même classe que mes amis et c'est bien. On travaille souvent en équipe.

## Demain, c'est vendredi (aller + infinitif)

> Demain, c'est vendredi. On va **commencer** à 9 heures par l'anglais. Puis il y a la récréation. Ensuite, on va avoir deux heures de maths. Ça va **être** fatigant. À midi, on va manger à la cantine. Puis on va **sortir** dans la cour. Demain après-midi, on va commencer à 2 heures avec la chimie. J'aime bien ça. On fait des expériences et c'est **souvent** amusant. Après, deux heures d'EPS. Cette semaine, on va **faire** de la natation. On va finir à 5 heures. Nous allons être fatigués, mais après-demain, c'est le weekend et on n'a pas **cours**, alors ça, c'est bien !

## La semaine prochaine (les devoirs d'Ibrahim)

| Jour | Devoirs | Phrase |
|---|---|---|
| lundi | sciences – paragraphe sur l'expérience | Lundi, je vais faire mes devoirs de sciences. Je vais écrire un paragraphe sur l'expérience. |
| mardi | anglais – contrôle de vocabulaire | Mardi, je vais apprendre du vocabulaire pour un contrôle d'anglais. |
| mercredi | histoire – recherches sur Internet | Mercredi, je vais faire des recherches sur Internet pour l'histoire. |
| jeudi | géographie – chapitre sur le Canada | Jeudi, je vais lire un chapitre sur le Canada. |
| vendredi | maths – exercices | Vendredi, je vais faire des exercices de maths. |
| samedi | technologie – projet | Samedi, je vais finir / travailler sur mon projet de technologie. |

## Une visite au théâtre (aller)
1. Qui **va** organiser la visite ? → e. Notre prof de français **va** organiser la visite.
2. Qu'est-ce que vous **allez** voir ? → c. Nous **allons** voir une pièce sur le monde en 3000.
3. Quand **allez**-vous partir au théâtre ? → a. On **va** partir à 14h.
4. Comment **vas**-tu rentrer après ? → d. Je **vais** prendre le bus.
5. Est-ce que tes amis **vont** rentrer avec toi ? → b. Oui, ils **vont** rentrer en bus aussi.

## Ça va être comment ? (modèle)
- **Des activités :** faire des recherches sur Internet, faire un projet sur les Caraïbes, faire de la natation en EPS, faire un match, voir un film
- **Des avis :** J'aime bien … · Je n'aime pas du tout … · Je déteste …
- **Des adverbes :** assez, très, moins, plus
- **Des adjectifs :** amusant, intéressant, ennuyeux, sympa, fatigant, nul`,
  },
  {
    id: 'note_unit4_projets',
    type: 'note',
    title: "4C Mes projets pour l'année prochaine",
    description: 'Unité 4: discuss options and plans for the next school year, using two verbs together.',
    topic: 'Future Plans',
    tags: ['school', 'plans', 'two verbs together', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## On parle des projets (Théo et Lucie)
1. Lucie va choisir les sciences : la chimie, la physique et la **biologie**.
2. C'est parce qu'elle veut être **médecin**.
3. Elle veut laisser tomber l'espagnol parce qu'elle trouve ça **difficile**.
4. Théo va choisir l'allemand parce qu'il est assez **fort** en langues.
5. Comme il va souvent en Allemagne, ça va être **utile**.
6. Il va choisir la **technologie** parce que c'est sa matière préférée.
7. Il veut être ingénieur plus **tard** dans la vie.
8. Il va laisser tomber* la musique parce qu'il n'a pas de bonnes **notes** en musique.

\\* **laisser tomber** — (literally "to let fall") to drop

## Une conversation (modèle)
1. Est-ce que tu vas **changer** d'école en septembre ?
2. Est-ce qu'on peut **commencer / étudier** de nouvelles matières l'année prochaine ?
3. Pourquoi veux-tu **étudier / choisir** ça ?
4. Qu'est-ce que tu vas **choisir** comme options ?
5. Qu'est-ce que tu vas laisser **tomber** comme matières ?

- a. Je **pense** choisir l'espagnol et le dessin.
- b. À mon avis, ça **va** être intéressant.
- c. Oui, je **vais** aller au lycée en septembre.
- d. Je **veux** laisser tomber la physique.
- e. Oui, c'est possible. Moi, j'**espère** commencer la psychologie.

## Choisir, c'est difficile ! (le message d'Ali)

> Salut Liam, comment ça va ? Qu'est-ce que tu fais ? En ce moment, moi, je pense aux options pour l'année prochaine. On va faire sept matières générales (français, maths, sciences, histoire-géo, etc.) qui sont obligatoires, et deux autres matières au choix. Choisir, ce n'est pas facile.
> Mes matières préférées sont les langues vivantes, donc je vais continuer en anglais et en espagnol mais je peux commencer une troisième langue. J'espère étudier le mandarin. Je suis nul en maths et je ne suis pas très fort en musique. Il faut continuer en maths, c'est obligatoire, mais je peux laisser tomber la musique.
> Ma cousine Marine veut être comptable, alors elle va commencer les sciences économiques. Elle va choisir la musique aussi parce qu'elle joue du piano et elle aime bien ça.
> Est-ce que toi aussi tu choisis des options pour l'année prochaine ? Je voudrais bien savoir comment ça se passe dans ton pays. Que vas-tu faire plus tard dans la vie ? Je voudrais être professeur d'anglais, mais mon copain Usain n'a pas encore décidé. Il s'intéresse beaucoup à l'informatique, alors il va peut-être devenir programmeur ou ingénieur. — Ali

**Trouve le français :** compulsory = obligatoire · choosing isn't easy = choisir, ce n'est pas facile · I hope to study = j'espère étudier · I'm rubbish at = je suis nul en · I have to continue with = il faut continuer en · I can drop = je peux laisser tomber · I'd really like to know = je voudrais bien savoir · how that works = comment ça se passe

**Corrige les erreurs :** 1. Ali va choisir des options l'année prochaine. 2. Il y a sept matières obligatoires. 3. Il étudie l'anglais et l'espagnol. 4. Il est nul en maths. 5. Il va laisser tomber la musique.

**Marine et Usain :** 1. Elle veut être comptable. 2. Elle va commencer les sciences économiques. 3. Parce qu'elle joue du piano et elle aime bien ça. 4. Il s'intéresse à l'informatique. 5. Non, il va peut-être devenir programmeur ou ingénieur.

## À toi ! Mes projets pour l'année prochaine

| Question | Réponse |
|---|---|
| Qu'est-ce que tu aimes comme matières ? | Mes matières préférées sont … / J'aime … |
| Pourquoi ? | (parce que …) c'est une matière utile / importante / facile / intéressante, etc. |
| Qu'est-ce que tu n'aimes pas (beaucoup) ? | Je n'aime pas (beaucoup / du tout) … car … c'est difficile / nul / pas intéressant, etc. |
| Tu es assez fort(e) en quelles matières ? | Je suis (assez) fort(e) en … Mes points forts sont … les maths / les langues, etc. |
| Tu es moins fort(e) en quoi ? | Je ne suis pas fort(e) en … Je suis nul(le) en … |
| Quelles sont les matières obligatoires ? | Les matières obligatoires sont … Il faut continuer avec … |
| Qu'est-ce que tu vas choisir comme options l'année prochaine ? | L'année prochaine, je vais choisir … |
| Pourquoi ? | Ça va être intéressant / différent, etc. |
| Qu'est-ce que tu veux laisser tomber ? Pourquoi ? | Je veux laisser tomber … parce que … ça ne m'intéresse pas. |`,
  },
  {
    id: 'note_unit4_daccord',
    type: 'note',
    title: "4D D'accord ou pas d'accord ?",
    description: 'Unité 4: discuss aspects of school life, agree and disagree, use different negatives.',
    topic: 'Opinions',
    tags: ['school', 'opinions', 'negatives', 'avoir raison', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## Forum des jeunes : les devoirs
*Peut-on faire ses devoirs en écoutant de la musique ?*

- **Technofille (T) :** Pour moi, la musique est nécessaire. Souvent il n'y a personne d'autre à la maison et la musique m'aide à me relaxer. Je suis sûre que je travaille mieux avec de la musique.
- **Batterie (B) :** Moi, je pense que oui. Quand il n'y a pas de musique, j'entends tous les petits bruits de la maison. Avec de la musique, ça va mieux.
- **100sass (S) :** Pour moi, ce n'est pas possible, je n'arrive pas à me concentrer sur mon travail. Alors, je ne fais jamais mes devoirs en écoutant de la musique.
- **1000feuille (M) :** À mon avis, c'est possible pour les devoirs qui ne sont pas très difficiles. Mais pour apprendre et pour faire des devoirs où il faut se concentrer, je préfère le calme et le silence. Sinon, je n'apprends rien.

**Trouve le français :** there's nobody else at home = il n'y a personne d'autre à la maison · I work better = je travaille mieux · I think so = je pense que oui · all the little noises = tous les petits bruits · I can't concentrate = je n'arrive pas à me concentrer · I never do my homework = je ne fais jamais mes devoirs · where you have to concentrate = où il faut se concentrer · I learn nothing = je n'apprends rien

**Complète :** 1. T travaille **mieux** quand elle écoute de la musique. 2. Quand B n'écoute pas de musique, il entend tous les petits **bruits** de la maison. 3. S ne peut pas se concentrer sur ses devoirs s'il y a de la **musique**. 4. M peut écouter de la musique et travailler en même temps si les devoirs ne sont pas **difficiles**. 5. Pour les devoirs compliqués, M préfère le **calme** et le **silence**.

## Français–anglais (les paires)
| Français | Anglais |
|---|---|
| Je n'y suis jamais allé. | I've never been there. |
| On ne sait jamais. | You never know. |
| Il n'y en a plus. | There's none left. |
| Ça ne fait rien. | It doesn't matter. |
| On n'a rien fait. | We didn't do anything. |
| Je n'ai vu personne. | I didn't see anyone. |

## Un voyage scolaire (complète)
1. Louis n'a pas pu aller en voyage scolaire parce qu'il était **malade**.
2. C'est dommage, parce qu'il n'est **jamais** allé à la Cité des sciences.
3. Selon Mia on ne peut pas tout **voir** en une journée.
4. Cependant, ils ont **visité** le Planétarium.
5. Il n'y avait **plus** de pizza au restaurant.
6. Elle n'a **rien** acheté au magasin.

## Forum des jeunes : l'école

**L'uniforme scolaire**
- **1000feuille (M) :** Récemment, j'ai changé d'école et maintenant, je dois porter un uniforme. J'aime bien ça. Je ne passe plus des heures à décider ce que je vais mettre pour aller en classe.
- **Technofille (T) :** Je suis contre l'uniforme scolaire. Je veux m'habiller comme je veux. Je comprends les gens qui aiment avoir un uniforme, mais moi, je n'aime pas ça !

**Les contrôles**
- **Batterie (B) :** On ne veut plus de contrôles ! Je trouve qu'il y a trop de contrôles et je n'aime pas ça !
- **100sass (S) :** Tu as raison, les contrôles sont barbants. Par contre, c'est aussi un moyen de nous motiver (et de nous forcer) à apprendre des choses.

Bonnes personnes : 1. T · 2. M · 3. M · 4. T · 5. S · 6. B

## Quel est ton avis ? (avoir raison / avoir tort)
| Français | Anglais |
|---|---|
| Il / Elle a tort. | He / She is wrong. |
| Il y a du pour et du contre. | There's for and against. |
| Je pense que oui. | I think so. |
| Je suis d'accord avec … | I agree with … |
| Tu as raison. | You are right. |
| Là, je ne suis pas d'accord. | There, I don't agree. |
| Ça dépend. | It depends. |
| Je pense que non. | I don't think so. |

## À toi ! (modèle)

| Question | Réponses |
|---|---|
| Tu aimes écouter de la musique quand tu fais tes devoirs ? Pourquoi ? | Non, s'il y a de la musique, je ne peux pas me concentrer. / Oui, parce que je n'aime pas le silence. / Quelquefois, mais seulement si le travail n'est pas compliqué. |
| À ton avis, l'uniforme scolaire est-il une bonne idée ? Pourquoi ? | Je pense que oui. C'est bien de porter un uniforme parce que comme ça, il y a moins de différence entre les élèves. Ça crée un sens de communauté. C'est comme les membres de la même équipe. On ne perd pas son temps à décider ce qu'on va mettre pour l'école. / Moi, je ne suis pas d'accord. Je préfère choisir mes propres vêtements. |
| Tu trouves qu'on fait assez de sport au collège ? | À mon avis, on ne fait jamais assez de sport. / Comme je n'aime pas le sport, je trouve qu'on en fait trop ! |
| Les contrôles, c'est nécessaire ? | Il y a du pour et du contre. Ça nous force à réviser et à apprendre des choses. Par contre, s'il y a trop de contrôles, c'est vraiment démotivant. |`,
  },
  {
    id: 'note_unit4_metiers',
    type: 'note',
    title: '4E Il y a beaucoup de métiers',
    description: 'Unité 4: talk about different careers, describe jobs and say what people think of them.',
    topic: 'Jobs & Careers',
    tags: ['jobs', 'careers', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## La découverte professionnelle

> Dans mon collège, on peut choisir en option la découverte professionnelle (careers). On se renseigne sur les métiers, les formations et le monde du travail. On fait des visites dans des entreprises et on nous explique les différents métiers.

**Traduction :** In my school, we can choose careers as an option. We learn about occupations, training and the world of work. We go on visits to companies and they explain the different occupations to us.

we can choose = on peut choisir · we learn about = on se renseigne sur · occupations = les métiers · training = les formations · companies = les entreprises

## Que font-ils dans la vie ? (answers)
1. Elle donne des cours de maths au collège. → **Elle est professeur.**
2. Elle travaille à l'hôpital. Elle s'occupe des malades. → **Elle est infirmière / médecin.**
3. Il porte un uniforme et il travaille au commissariat. → **Il est agent de police / gendarme.**
4. Il travaille dans un magasin. Il vend des choses. → **Il est vendeur.**
5. Elle fait des dessins, quelquefois des dessins numériques. → **Elle est dessinatrice / graphiste.**
6. Il s'occupe du fonctionnement d'un site Internet. → **Il est informaticien / programmeur.**

## Stratégies : describing jobs
- If you can't think of the word for someone's job, say where they work or what they do: *Il/Elle travaille dans le marketing / l'informatique / l'assurance / les finances / pour un organisme humanitaire.*
- Give the name of the company: *Il/Elle travaille chez …*
- The most senior person, the manager or head of department, is often **le / la chef**: *Elle est chef réceptionniste. Il est chef de projet.*
- To be unemployed is **être au chômage**, or *Il/Elle ne travaille pas en ce moment.*
- To be retired is **être retraité(e)** or **à la retraite**, or *Mon grand-père / Ma grand-mère ne travaille plus.*

## Un message de Karim

> Mon père est ingénieur. Il travaille pour une grande entreprise. Il aime son travail parce qu'il aime travailler en équipe sur de grands projets. Cependant, il doit travailler de longues heures. Il dit toujours que c'est fatigant !
> Ma mère est institutrice. Elle aime bien son travail parce qu'elle adore les enfants et qu'elle aime bien enseigner. L'inconvénient est que l'école est assez loin de la maison.
> Et toi, qu'est-ce que tu veux faire dans la vie ? Moi, je n'ai pas encore décidé. Je voudrais un métier où je peux voyager et rencontrer des gens, peut-être le journalisme.

1. Il est ingénieur. 2. Oui, parce qu'il aime travailler en équipe sur de grands projets. 3. Il doit travailler de longues heures ; c'est fatigant. 4. Elle est institutrice. 5. Elle aime bien son travail parce qu'elle adore les enfants et aime enseigner, mais l'école est assez loin de la maison. 6. Il voudrait un métier où il peut voyager et rencontrer des gens, peut-être le journalisme.

## À toi ! Parler d'un métier

| Question | Réponse |
|---|---|
| Tu vas parler de qui ? | Je vais parler de / d' … ma mère / mon père, etc. / un(e) ami(e) de la famille. |
| Qu'est-ce qu'il / elle fait dans la vie ? | Il / Elle est … Il / Elle travaille dans / pour / chez … |
| Il / Elle aime son travail ? | Oui, parce qu'il / elle aime … travailler avec des jeunes / des personnes / des clients, travailler en plein air / dans un centre sportif / en équipe. Oui, parce que c'est un travail créatif / utile / intéressant. |
| Quels sont les inconvénients ? | Ce n'est pas bien payé. C'est fatigant, les horaires sont longs. Ça peut être stressant. |

**Exemple :** *Mon père travaille dans l'informatique. Il aime son travail parce que / qu' …*

See the **Jobs** vocabulary topic for the full lexique and the grammar topic **Les métiers : articles et formes féminines**.`,
  },
  {
    id: 'note_unit4_cest_quand',
    type: 'note',
    title: "4F C'est quand ?",
    description: 'Unité 4: future and past time expressions, different tenses, and Victor Schœlcher.',
    topic: 'Time & Tenses',
    tags: ['time', 'tenses', 'futur proche', 'passé composé', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## Quand ça ?
lundi dernier · hier soir · l'année dernière · demain matin · après-demain · le mois prochain · la semaine prochaine · vendredi dernier · samedi prochain · l'année prochaine

## Dans l'ordre (aujourd'hui, c'est lundi)
1. dans dix minutes → 2. ce soir → 3. demain → 4. après-demain → 5. jeudi prochain → 6. la semaine prochaine → 7. le mois prochain → 8. l'année prochaine

## Des questions et des réponses
| Question | Réponse |
|---|---|
| Qu'est-ce que tu as fait comme devoirs hier soir ? | J'ai fait du français et de la biologie. |
| Qu'est-ce que tu as comme cours aujourd'hui ? | Nous avons deux heures de maths, puis une heure d'anglais. |
| Qu'est-ce que tu vas choisir en option l'année prochaine ? | L'année prochaine, je vais choisir l'histoire et l'art dramatique. |
| Qu'est-ce que tu vas laisser tomber ? | Je vais laisser tomber la géographie et l'allemand. |
| Qu'est-ce que vous avez fait l'année dernière comme sport ? | Nous avons fait de l'athlétisme. |

## Les noms des bâtiments importants
Souvent, on donne aux écoles et aux bâtiments importants le nom d'une personne célèbre, par exemple le lycée Schœlcher en Martinique, aux Caraïbes. *Comment est-ce qu'on nomme les écoles et les bâtiments importants dans ton pays ?*

## Victor Schœlcher

> Victor Schœlcher est né le 22 juillet 1804 en France. Il est allé au lycée à Paris. Quand il a quitté l'école, il a travaillé chez son père, qui avait une entreprise de porcelaine.
> Il a voyagé au Mexique, aux États-Unis et à Cuba en 1828–1830 pour son travail. Pendant son séjour à Cuba, il a vu les conditions épouvantables des esclaves qui travaillaient dans les plantations. Quand il est retourné en France, il est devenu journaliste et a écrit de nombreux articles sur l'esclavage. Plus tard, il est devenu homme politique et a représenté la Martinique et la Guadeloupe en France.
> Il luttait contre l'analphabétisme (illiteracy) et pour l'éducation publique, laïque (secular) et gratuite. Vers la fin de sa vie, il a décidé de donner une partie de sa collection de livres à la bibliothèque à Fort-de-France en Martinique. Il est mort en 1893.

**Answers (in English):** 1. He fought against slavery. 2. Paris. 3. Mexico, the United States and Cuba. 4. The terrible conditions of the slaves working on the plantations. 5. He became a journalist (and later a politician).

**Carte d'identité :** Nom : Schœlcher · Prénom : Victor · Né : le 22 juillet 1804, en France · Éducation : lycée à Paris · Voyages : Mexique, États-Unis, Cuba · Métiers : homme d'affaires, journaliste, homme politique · Mort : 1893

**En français :** 1. Il est né en France le 22 juillet 1804. 2. Il a travaillé chez son père (entreprise de porcelaine). 3. Il a voyagé au Mexique, aux États-Unis et à Cuba. 4. Il est devenu journaliste. 5. Il est mort en 1893.

## Spelling patterns (answers)
1. military · 2. solitaire · 3. nervous · 4. ambitious · 5. industrie · 6. ecology · 7. Italie · 8. dramatic · 9. musique · 10. uniquement · 11. gloire · 12. memory`,
  },
  {
    id: 'note_unit4_extra_presse',
    type: 'note',
    title: "4G C'est extra ! & Presse-Jeunesse 2",
    description: 'Unité 4: Le Petit Nicolas, the school canteen, and the Impressionist painters.',
    topic: 'Reading',
    tags: ['reading', 'art', 'school', 'unit-4'],
    createdAt: UNIT4_DATE,
    updatedAt: UNIT4_DATE,
    content: `## Le Petit Nicolas : « On a eu l'inspecteur »
*A collection of stories told by a little boy of seven or eight who goes to primary school.*

> La maîtresse est entrée en classe toute nerveuse. « M. l'Inspecteur est dans l'école, elle nous a dit, je compte sur vous pour être sages* et faire une bonne impression. » Nous on a promis qu'on se tiendrait bien*, d'ailleurs*, la maîtresse a tort de s'inquiéter, nous sommes presque toujours sages. « Je vous signale, a dit la maîtresse, que c'est un nouvel inspecteur, l'ancien était déjà habitué à vous, mais il a pris sa retraite … » Et puis, la maîtresse nous a fait des tas de recommandations, elle nous a défendu de parler sans être interrogés, de rire sans sa permission, elle nous a demandé de ne pas laisser tomber des billes* comme la dernière fois que l'inspecteur est venu et qu'il s'est retrouvé par terre, elle a demandé à Alceste de cesser de manger quand l'inspecteur serait là et elle a dit à Clotaire, qui est le dernier de la classe, de ne pas se faire remarquer.

*sages* – well-behaved · *qu'on se tiendrait bien* – that we would behave well · *d'ailleurs* – moreover · *des billes* – marbles

**Réponds en anglais :** 1. Because the inspector is in the school. 2. Because the class is almost always well-behaved. 3. He has retired. 4. Marbles were dropped and the inspector ended up on the floor. 5. Not to talk without being asked, not to laugh without permission (also: not to drop marbles, Alceste must stop eating).

**Résumé :** 1 d · 2 a · 3 b · 4 c · 5 e
- La maîtresse était nerveuse parce que l'inspecteur était dans l'école.
- Elle a demandé aux élèves d'être sages.
- Selon Nicolas, la classe est toujours sage.
- C'est un nouvel inspecteur parce que l'ancien inspecteur a pris sa retraite.
- La maîtresse a donné des conseils, comme ne pas rire sans permission et cesser de manger.

## Une photo (la cantine)
- Ça se passe où ?
- Qu'est-ce que les jeunes personnes vont faire ?
- Que penses-tu des repas à la cantine du collège ?
- Qu'est-ce que tu as mangé hier à midi ?
- Où est-ce que tu vas déjeuner demain ?

## Une école dans un pays francophone
Cherche le site web d'une école dans un pays francophone. Note des renseignements sur l'école : le nom, l'adresse, les activités, les projets, etc.

---

## Presse-Jeunesse 2 : Vous aimez la peinture ?
*Quatre peintres français associés au mouvement d'art qui s'appelle l'Impressionnisme.*

### Claude Monet (1840–1926)
- Quand il s'ennuyait à l'école, il dessinait des caricatures de ses professeurs dans ses cahiers.
- Il est devenu le plus célèbre des Impressionnistes, nom donné à cause de son tableau *Impression, soleil levant* (Sunrise).
- Les Impressionnistes s'intéressaient aux « effets spéciaux » de la lumière et du brouillard. Monet aimait travailler **en plein air**, pas dans un **atelier**.
- Il a souvent peint le même paysage sous des lumières différentes (28 peintures de la cathédrale de Rouen).
- Vers la fin de sa vie, quand il voyait moins bien, il faisait surtout des tableaux des **nénuphars** (water lilies) de son jardin d'eau.

### Paul Cézanne (1839–1906)
- Né à Aix-en-Provence ; il a passé beaucoup de temps à Paris avec les Impressionnistes.
- Il a créé beaucoup de **natures mortes** (still-life paintings), souvent avec des fruits ou des légumes.
- Il adorait les couleurs de la Provence : le bleu de la mer, le pourpre des montagnes, le vert et le jaune de la nature. La montagne Sainte-Victoire est dans au moins trente de ses tableaux.
- Il n'a pas vendu beaucoup de tableaux, mais son père était riche. Après sa mort, il a eu une influence énorme : c'est le « père de l'art moderne ».

### Les femmes artistes
Au XIXe siècle, être femme artiste-peintre était difficile. Les femmes n'étaient pas admises à l'École des Beaux-Arts de Paris avant 1897. Elles devaient peindre surtout des portraits, des natures mortes ou des scènes d'intérieur. On se moquait d'elles et les critiques ne s'intéressaient pas à leurs œuvres. Certaines travaillaient comme **copistes** au musée du Louvre : copier les tableaux célèbres les aidait à étudier l'art des maîtres anciens.

### Berthe Morisot (1841–1895)
Ses parents lui ont payé des leçons de peinture. Elle a connu Édouard Manet au Louvre et s'est mariée avec son frère, Eugène Manet. Elle a vendu plus de tableaux que Monet et Renoir. Elle est morte à 54 ans.

### Marie Bracquemond (1840–1916)
Portraitiste, peintre et céramiste. Elle a rencontré son mari, le graveur Félix Bracquemond, au Louvre. Elle admirait Monet. Œuvre importante : *Trois femmes aux ombrelles*. Elle a cessé de peindre vingt ans avant sa mort.

### Lexique
| Français | Anglais |
|---|---|
| un atelier | artist's studio |
| en plein air | outdoors |
| la lumière | light |
| une nature morte | still life |
| une œuvre | work of art |
| un paysage | landscape |
| un peintre | painter |
| une peinture | painting |
| un tableau | picture / painting |

**Monet et Cézanne (answers):** 1. He drew caricatures of his teachers. 2. Outdoors. 3. To show the effects of different light. 4. His eyesight got worse. 5. The colours of Provence: blue, purple, green and yellow. 6. No. 7. He had an enormous influence and his paintings now sell for fantastic prices. 8. Cézanne.

**C'est qui ?** 1. B · 2. M · 3. B · 4. M

**Résumé :** (1) painter · (2) 1897 · (3) portraits · (4) still lifes · (5) outdoors · (6) works · (7) Louvre · (8) paintings · (9) artistic education`,
  },
];
