import type { Verb } from '@/types';
import { PRONOUNS_STD } from '@/utils/verbPronouns';

const now = '2026-01-15T09:00:00.000Z';

function verb(
  id: string,
  infinitive: string,
  englishMeaning: string,
  group: Verb['group'],
  tags: string[],
  conjugations: Verb['conjugations'],
): Verb {
  return {
    id,
    type: 'verb',
    title: infinitive,
    infinitive,
    englishMeaning,
    group,
    tags,
    conjugations,
    createdAt: now,
    updatedAt: now,
  };
}

function table(tense: string, forms: string[]) {
  return {
    tense,
    rows: PRONOUNS_STD.map((pronoun, i) => ({ pronoun, form: forms[i] })),
  };
}

export const verbsSeed: Verb[] = [
  verb('verb_jouer', 'jouer', 'to play', 'er', ['regular', 'er verbs', 'leisure', 'unit-3'], [
    table('Présent', ['joue', 'joues', 'joue', 'jouons', 'jouez', 'jouent']),
    table('Passé composé', ['ai joué', 'as joué', 'a joué', 'avons joué', 'avez joué', 'ont joué']),
  ]),
  verb('verb_regarder', 'regarder', 'to watch / look at', 'er', ['regular', 'er verbs', 'media', 'unit-2'], [
    table('Présent', ['regarde', 'regardes', 'regarde', 'regardons', 'regardez', 'regardent']),
    table('Passé composé', ['ai regardé', 'as regardé', 'a regardé', 'avons regardé', 'avez regardé', 'ont regardé']),
  ]),
  verb('verb_choisir', 'choisir', 'to choose', 'ir', ['regular', 'ir verbs', 'unit-2'], [
    table('Présent', ['choisis', 'choisis', 'choisit', 'choisissons', 'choisissez', 'choisissent']),
    table('Passé composé', ['ai choisi', 'as choisi', 'a choisi', 'avons choisi', 'avez choisi', 'ont choisi']),
  ]),
  verb('verb_etre', 'être', 'to be', 'irregular', ['irregular', 'être', 'core'], [
    table('Présent', ['suis', 'es', 'est', 'sommes', 'êtes', 'sont']),
    table('Passé composé', ["ai été", "as été", "a été", "avons été", "avez été", "ont été"]),
    table('Imparfait', ['étais', 'étais', 'était', 'étions', 'étiez', 'étaient']),
    table('Futur simple', ['serai', 'seras', 'sera', 'serons', 'serez', 'seront']),
  ]),
  verb('verb_avoir', 'avoir', 'to have', 'irregular', ['irregular', 'avoir', 'core'], [
    table('Présent', ['ai', 'as', 'a', 'avons', 'avez', 'ont']),
    table('Passé composé', ['ai eu', 'as eu', 'a eu', 'avons eu', 'avez eu', 'ont eu']),
    table('Imparfait', ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient']),
    table('Futur simple', ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront']),
  ]),
  verb('verb_aller', 'aller', 'to go', 'irregular', ['irregular', 'aller', 'places', 'unit-2'], [
    table('Présent', ['vais', 'vas', 'va', 'allons', 'allez', 'vont']),
    table('Passé composé', [
      'suis allé(e)',
      'es allé(e)',
      'est allé(e)',
      'sommes allé(e)s',
      'êtes allé(e)(s)',
      'sont allé(e)s',
    ]),
    table('Futur simple', ['irai', 'iras', 'ira', 'irons', 'irez', 'iront']),
  ]),
  verb('verb_faire', 'faire', 'to do / to make', 'irregular', ['irregular', 'faire'], [
    table('Présent', ['fais', 'fais', 'fait', 'faisons', 'faites', 'font']),
    table('Passé composé', ['ai fait', 'as fait', 'a fait', 'avons fait', 'avez fait', 'ont fait']),
    table('Futur simple', ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront']),
  ]),
  verb(
    'verb_sentendre',
    "s'entendre",
    'to get along (with each other)',
    'pronominal',
    ['pronominal', "s'entendre", 'family', 'unit-1'],
    [
      table('Présent', [
        "m'entends",
        "t'entends",
        "s'entend",
        'nous entendons',
        'vous entendez',
        "s'entendent",
      ]),
    ],
  ),
  verb('verb_parler', 'parler', 'to speak (-er model verb)', 'er', ['regular', 'er verbs'], [
    table('Présent', ['parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent']),
    table('Passé composé', ['ai parlé', 'as parlé', 'a parlé', 'avons parlé', 'avez parlé', 'ont parlé']),
    table('Imparfait', ['parlais', 'parlais', 'parlait', 'parlions', 'parliez', 'parlaient']),
    table('Futur proche', [
      'vais parler',
      'vas parler',
      'va parler',
      'allons parler',
      'allez parler',
      'vont parler',
    ]),
    table('Futur simple', ['parlerai', 'parleras', 'parlera', 'parlerons', 'parlerez', 'parleront']),
  ]),
  verb('verb_finir', 'finir', 'to finish (-ir model verb)', 'ir', ['regular', 'ir verbs'], [
    table('Présent', ['finis', 'finis', 'finit', 'finissons', 'finissez', 'finissent']),
    table('Passé composé', ['ai fini', 'as fini', 'a fini', 'avons fini', 'avez fini', 'ont fini']),
  ]),
  verb('verb_vendre', 'vendre', 'to sell (-re model verb)', 're', ['regular', 're verbs'], [
    table('Présent', ['vends', 'vends', 'vend', 'vendons', 'vendez', 'vendent']),
    table('Passé composé', ['ai vendu', 'as vendu', 'a vendu', 'avons vendu', 'avez vendu', 'ont vendu']),
  ]),
];
