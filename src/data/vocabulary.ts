import type { VocabularyEntry } from '@/types';

let n = 0;
const nextId = () => `vocab_${++n}`;

function entry(
  topic: string,
  french: string,
  english: string,
  example: string | undefined,
  tags: string[],
  gender: VocabularyEntry['gender'] = 'n/a',
): VocabularyEntry {
  const now = '2026-02-01T09:00:00.000Z';
  return {
    id: nextId(),
    type: 'vocabulary',
    title: `${french} — ${english}`,
    topic,
    french,
    english,
    example,
    gender,
    tags: [topic.toLowerCase(), ...tags],
    createdAt: now,
    updatedAt: now,
  };
}

export const vocabularySeed: VocabularyEntry[] = [
  // ---- FAMILY (from class notes) ----
  entry('Family', 'un frère aîné', 'an older brother', "J'ai un frère aîné.", ['family'], 'm'),
  entry('Family', 'une sœur aînée', 'an older sister', "J'ai une sœur aînée.", ['family'], 'f'),
  entry('Family', 'un frère cadet', 'a younger brother', undefined, ['family'], 'm'),
  entry('Family', 'une sœur cadette', 'a younger sister', undefined, ['family'], 'f'),
  entry('Family', 'un benjamin / une benjamine', 'the youngest sibling', undefined, ['family']),
  entry('Family', 'un enfant unique', 'an only child', 'Je suis un enfant unique.', ['family']),
  entry('Family', 'un enfant né(e) au milieu', 'a middle child', undefined, ['family']),

  // ---- APPEARANCE (from class notes) ----
  entry('Appearance', 'les yeux bleus', 'blue eyes', 'Ses yeux sont bleus.', ['appearance', 'description']),
  entry('Appearance', 'les yeux marron', 'brown eyes', undefined, ['appearance', 'description']),
  entry('Appearance', 'les yeux verts', 'green eyes', undefined, ['appearance', 'description']),
  entry('Appearance', 'les cheveux frisés', 'curly hair', 'Ses cheveux sont courts, frisés et noirs.', ['appearance', 'description']),
  entry('Appearance', 'les cheveux raides', 'straight hair', undefined, ['appearance', 'description']),
  entry('Appearance', 'les cheveux mi-longs', 'medium-length hair', undefined, ['appearance', 'description']),
  entry('Appearance', 'châtain(s)', 'chestnut / brown (hair)', undefined, ['appearance', 'description']),
  entry('Appearance', 'roux / rousse', 'red-haired', undefined, ['appearance', 'description']),
  entry('Appearance', 'de taille moyenne', 'of medium height', 'Il est de taille moyenne.', ['appearance', 'description']),
  entry('Appearance', 'mince', 'thin', undefined, ['appearance', 'description']),
  entry('Appearance', 'en forme', 'fit', undefined, ['appearance', 'description']),

  // ---- FRIENDSHIP / RELATIONSHIPS (from class notes) ----
  entry('Relationships', 'un meilleur ami / une meilleure amie', 'best friend', undefined, ['friendship']),
  entry('Relationships', 'un copain / une copine', 'buddy / friend', undefined, ['friendship']),
  entry('Relationships', 'un petit ami / une petite amie', 'boyfriend / girlfriend', undefined, ['friendship']),
  entry('Relationships', "s'entendre bien", 'to get along well', 'Nous nous entendons bien.', ['friendship', "s'entendre"]),
  entry('Relationships', "c'est quelqu'un de bien", 'he/she is a good person', undefined, ['friendship']),
  entry('Relationships', 'fidèle', 'loyal / faithful', undefined, ['friendship', 'adjectives']),
  entry('Relationships', 'compréhensif / compréhensive', 'understanding', undefined, ['friendship', 'adjectives']),

  // ---- TRAVEL / PLACES (from class notes) ----
  entry('Travel', 'un quartier', 'a neighbourhood', undefined, ['places']),
  entry('Travel', 'le musée', 'a museum', 'Nous visitons le musée.', ['places']),
  entry('Travel', 'la gare', 'train station', 'Le train part de la gare.', ['places']),
  entry('Travel', "l'aéroport", 'an airport', undefined, ['places'], 'm'),
  entry('Travel', 'le métro', 'a metro', undefined, ['places'], 'm'),
  entry('Travel', "l'hôtel", 'a hotel', undefined, ['places'], 'm'),
  entry('Travel', 'la piscine', 'a swimming pool', undefined, ['places'], 'f'),
  entry('Travel', 'les jardins', 'public gardens / park', undefined, ['places']),

  // ---- SCHOOL ----
  entry('School', "l'école", 'school', "Il va à l'école.", ['school'], 'f'),
  entry('School', 'un professeur', 'a teacher', undefined, ['school'], 'm'),
  entry('School', 'un devoir', 'homework / an assignment', 'Nous finissons nos devoirs.', ['school'], 'm'),
  entry('School', 'une salle de classe', 'a classroom', undefined, ['school'], 'f'),
  entry('School', 'un cahier', 'a notebook', undefined, ['school'], 'm'),
  entry('School', 'la récréation', 'break / recess', undefined, ['school'], 'f'),

  // ---- FOOD ----
  entry('Food', 'le pain', 'bread', 'Je mange du pain.', ['food'], 'm'),
  entry('Food', 'le fromage', 'cheese', undefined, ['food'], 'm'),
  entry('Food', 'une pomme', 'an apple', "J'ai mangé une pomme.", ['food'], 'f'),
  entry('Food', 'le petit-déjeuner', 'breakfast', undefined, ['food'], 'm'),
  entry('Food', 'le déjeuner', 'lunch', undefined, ['food'], 'm'),
  entry('Food', 'le dîner', 'dinner', undefined, ['food'], 'm'),

  // ---- HOUSE ----
  entry('House', 'une maison', 'a house', "J'habite dans une maison.", ['house'], 'f'),
  entry('House', 'un appartement', 'an apartment', undefined, ['house'], 'm'),
  entry('House', 'la cuisine', 'the kitchen', undefined, ['house'], 'f'),
  entry('House', 'la chambre', 'the bedroom', undefined, ['house'], 'f'),
  entry('House', 'le salon', 'the living room', undefined, ['house'], 'm'),
  entry('House', 'le jardin', 'the garden', undefined, ['house'], 'm'),

  // ---- CLOTHES ----
  entry('Clothes', 'un pantalon', 'trousers', undefined, ['clothes'], 'm'),
  entry('Clothes', 'une chemise', 'a shirt', undefined, ['clothes'], 'f'),
  entry('Clothes', 'une robe', 'a dress', undefined, ['clothes'], 'f'),
  entry('Clothes', 'des chaussures', 'shoes', undefined, ['clothes']),
  entry('Clothes', 'un manteau', 'a coat', undefined, ['clothes'], 'm'),

  // ---- SPORTS ----
  entry('Sports', 'le football', 'football / soccer', 'Je fais du sport le samedi.', ['sports'], 'm'),
  entry('Sports', 'la natation', 'swimming', undefined, ['sports'], 'f'),
  entry('Sports', 'le tennis', 'tennis', undefined, ['sports'], 'm'),
  entry('Sports', "l'équitation", 'horse riding', undefined, ['sports'], 'f'),
  entry('Sports', 'sportif / sportive', 'sporty / athletic', undefined, ['sports', 'adjectives']),

  // ---- HOLIDAYS ----
  entry('Holidays', 'les vacances', 'the holidays', undefined, ['holidays']),
  entry('Holidays', 'Noël', 'Christmas', 'Joyeux Noël !', ['holidays'], 'm'),
  entry('Holidays', 'un anniversaire', 'a birthday', undefined, ['holidays'], 'm'),
  entry('Holidays', 'les grandes vacances', 'the summer holidays', undefined, ['holidays']),

  // ---- WEATHER ----
  entry('Weather', 'il fait beau', 'the weather is nice', undefined, ['weather']),
  entry('Weather', 'il pleut', 'it is raining', undefined, ['weather']),
  entry('Weather', 'il fait froid', 'it is cold', undefined, ['weather']),
  entry('Weather', 'il fait chaud', 'it is hot', undefined, ['weather']),
  entry('Weather', 'le soleil', 'the sun', undefined, ['weather'], 'm'),

  // ---- BODY ----
  entry('Body', 'la tête', 'the head', undefined, ['body'], 'f'),
  entry('Body', 'les mains', 'the hands', undefined, ['body']),
  entry('Body', 'le visage', 'the face', undefined, ['body'], 'm'),
  entry('Body', 'les yeux', 'the eyes', undefined, ['body', 'appearance']),
  entry('Body', 'les cheveux', 'the hair', undefined, ['body', 'appearance']),

  // ---- DAILY ROUTINE ----
  entry('Daily Routine', 'se réveiller', 'to wake up', undefined, ['daily routine']),
  entry('Daily Routine', 'se lever', 'to get up', undefined, ['daily routine']),
  entry('Daily Routine', 'se laver', 'to wash oneself', undefined, ['daily routine']),
  entry('Daily Routine', 'se coucher', 'to go to bed', undefined, ['daily routine']),
  entry('Daily Routine', "s'habiller", 'to get dressed', undefined, ['daily routine']),
];
