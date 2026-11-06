import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, CheckCircle2, Heart, Search, Filter } from 'lucide-react';

// =========================================================================
// 36+ RICH ANIMALS DATASET ACROSS 6 WONDERFUL HABITATS
// =========================================================================
export const ANIMALS_DATABASE = [
  // 1. SAVANE & AFRIQUE
  {
    id: 'lion',
    nameFr: 'Le Lion',
    nameEn: 'Lion',
    emoji: '🦁',
    soundFr: 'Roaaar !',
    soundEn: 'Roar!',
    food: '🥩 Viande fraîche',
    foodEmoji: '🥩',
    foodId: 'meat',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Doré',
    colorHex: '#f39c12',
    fact: 'Le roi des animaux a une magnifique crinière dorée !'
  },
  {
    id: 'elephant',
    nameFr: 'L\'Éléphant',
    nameEn: 'Elephant',
    emoji: '🐘',
    soundFr: 'Baaah (Barrit) !',
    soundEn: 'Trumpet!',
    food: '🌿 Grosses feuilles',
    foodEmoji: '🌿',
    foodId: 'leaves',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'geant',
    sizeLabel: 'Très Grand',
    colorName: 'Gris',
    colorHex: '#95a5a6',
    fact: 'Il boit de l\'eau et s\'arrose avec sa longue trompe !'
  },
  {
    id: 'giraffe',
    nameFr: 'La Girafe',
    nameEn: 'Giraffe',
    emoji: '🦒',
    soundFr: 'Mmh mmh doux',
    soundEn: 'Hum hum',
    food: '🍃 Feuilles d\'acacia',
    foodEmoji: '🍃',
    foodId: 'leaves',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'geant',
    sizeLabel: 'Très Grand',
    colorName: 'Orange et Marron',
    colorHex: '#e67e22',
    fact: 'Son cou est si grand qu\'elle peut manger au sommet des arbres !'
  },
  {
    id: 'zebra',
    nameFr: 'Le Zèbre',
    nameEn: 'Zebra',
    emoji: '🦓',
    soundFr: 'Hi-han hennit !',
    soundEn: 'Neigh!',
    food: '🌾 Herbe savoureuse',
    foodEmoji: '🌾',
    foodId: 'grass',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Noir et Blanc',
    colorHex: '#2d3436',
    fact: 'Chaque zèbre a des rayures noires et blanches uniques au monde !'
  },
  {
    id: 'hippo',
    nameFr: 'L\'Hippopotame',
    nameEn: 'Hippopotamus',
    emoji: '🦛',
    soundFr: 'Grognement d\'eau !',
    soundEn: 'Grunt!',
    food: '🍉 Pastèques & Herbe',
    foodEmoji: '🍉',
    foodId: 'fruit',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'geant',
    sizeLabel: 'Très Grand',
    colorName: 'Gris violet',
    colorHex: '#7f8c8d',
    fact: 'Il adore rester dans la boue fraîche pour protéger sa peau !'
  },
  {
    id: 'cheetah',
    nameFr: 'Le Guépard',
    nameEn: 'Cheetah',
    emoji: '🐆',
    soundFr: 'Feulement rapide !',
    soundEn: 'Purr!',
    food: '🥩 Viande',
    foodEmoji: '🥩',
    foodId: 'meat',
    habitat: 'savanna',
    habitatName: 'Savane',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Doré à taches',
    colorHex: '#d35400',
    fact: 'C\'est l\'animal le plus rapide de toute la planète Terre !'
  },

  // 2. FERME ET JARDIN
  {
    id: 'dog',
    nameFr: 'Le Chiot',
    nameEn: 'Puppy',
    emoji: '🐶',
    soundFr: 'Wouaf wouaf !',
    soundEn: 'Woof woof!',
    food: '🦴 Bon os croquant',
    foodEmoji: '🦴',
    foodId: 'bone',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Marron',
    colorHex: '#b5651d',
    fact: 'Il remue joyeusement la queue quand il est content de te voir !'
  },
  {
    id: 'cat',
    nameFr: 'Le Chaton',
    nameEn: 'Kitten',
    emoji: '🐱',
    soundFr: 'Miaou miaou !',
    soundEn: 'Meow meow!',
    food: '🐟 Petit poisson frais',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Roux',
    colorHex: '#e17055',
    fact: 'Il ronronne doucement comme un petit moteur quand on le caresse !'
  },
  {
    id: 'cow',
    nameFr: 'La Vache',
    nameEn: 'Cow',
    emoji: '🐮',
    soundFr: 'Meeuh !',
    soundEn: 'Moo moo!',
    food: '🌱 Bon foin vert',
    foodEmoji: '🌱',
    foodId: 'grass',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Noir et Blanc',
    colorHex: '#2c3e50',
    fact: 'Elle produit du bon lait frais que l\'on boit au petit déjeuner !'
  },
  {
    id: 'sheep',
    nameFr: 'Le Mouton',
    nameEn: 'Sheep',
    emoji: '🐑',
    soundFr: 'Bêêê !',
    soundEn: 'Baa baa!',
    food: '🍀 Trèfle tendre',
    foodEmoji: '🍀',
    foodId: 'grass',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Blanc',
    colorHex: '#f1f2f6',
    fact: 'Sa laine douce et bouclée sert à fabriquer des pulls bien chauds !'
  },
  {
    id: 'horse',
    nameFr: 'Le Cheval',
    nameEn: 'Horse',
    emoji: '🐴',
    soundFr: 'Hiiin hennit !',
    soundEn: 'Neigh!',
    food: '🍎 Pommes & Carottes',
    foodEmoji: '🍎',
    foodId: 'apple',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Marron chocolat',
    colorHex: '#844200',
    fact: 'Il court au galop très vite en faisant claquer ses fers à cheval !'
  },
  {
    id: 'pig',
    nameFr: 'Le Petit Cochon',
    nameEn: 'Piggy',
    emoji: '🐷',
    soundFr: 'Groin groin !',
    soundEn: 'Oink oink!',
    food: '🥕 Pommes de terre & Légumes',
    foodEmoji: '🥕',
    foodId: 'carrot',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Rose',
    colorHex: '#ff7675',
    fact: 'Il a une petite queue en tire-bouchon toute mignonne !'
  },
  {
    id: 'chicken',
    nameFr: 'La Poule',
    nameEn: 'Hen',
    emoji: '🐔',
    soundFr: 'Cot cot codet !',
    soundEn: 'Cluck cluck!',
    food: '🌾 Graines dorées',
    foodEmoji: '🌾',
    foodId: 'seeds',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Dorée & Rouge',
    colorHex: '#f39c12',
    fact: 'Elle pond de beaux œufs frais chaque matin dans son poulailler !'
  },
  {
    id: 'chick',
    nameFr: 'Le Poussin',
    nameEn: 'Baby Chick',
    emoji: '🐥',
    soundFr: 'Piou piou !',
    soundEn: 'Peep peep!',
    food: '🟡 Petites graines',
    foodEmoji: '🟡',
    foodId: 'seeds',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'mini',
    sizeLabel: 'Très Petit',
    colorName: 'Jaune',
    colorHex: '#f1c40f',
    fact: 'Tout rond et tout jaune, il vient juste de sortir de son œuf !'
  },
  {
    id: 'duck',
    nameFr: 'Le Canard',
    nameEn: 'Duck',
    emoji: '🦆',
    soundFr: 'Coin coin !',
    soundEn: 'Quack quack!',
    food: '🌿 Petites herbes d\'eau',
    foodEmoji: '🌿',
    foodId: 'waterweed',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Vert et Jaune',
    colorHex: '#00b894',
    fact: 'Ses pattes palmées fonctionnent comme de petites rames dans l\'eau !'
  },
  {
    id: 'rabbit',
    nameFr: 'Le Petit Lapin',
    nameEn: 'Bunny',
    emoji: '🐰',
    soundFr: 'Tic-tic croque !',
    soundEn: 'Sniff sniff!',
    food: '🥕 Carotte croquante',
    foodEmoji: '🥕',
    foodId: 'carrot',
    habitat: 'farm',
    habitatName: 'Ferme',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Blanc et Gris',
    colorHex: '#dfe6e9',
    fact: 'Il remue son petit nez et saute partout avec ses grandes oreilles !'
  },

  // 3. FORÊT & BOIS
  {
    id: 'bear',
    nameFr: 'Le Grand Ours',
    nameEn: 'Bear',
    emoji: '🐻',
    soundFr: 'Grrr grrr !',
    soundEn: 'Growl!',
    food: '🍯 Miel sucré & Poissons',
    foodEmoji: '🍯',
    foodId: 'honey',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'geant',
    sizeLabel: 'Très Grand',
    colorName: 'Marron foncé',
    colorHex: '#5c3818',
    fact: 'Il dort pendant tout l\'hiver au chaud dans sa grotte secrète !'
  },
  {
    id: 'fox',
    nameFr: 'Le Renard',
    nameEn: 'Fox',
    emoji: '🦊',
    soundFr: 'Yip yip cri doux !',
    soundEn: 'Yip yip!',
    food: '🍓 Baies & Myrtilles',
    foodEmoji: '🍓',
    foodId: 'berries',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Orange flamboyant',
    colorHex: '#e17055',
    fact: 'Très rusé, il a une magnifique queue rousse avec un bout blanc !'
  },
  {
    id: 'wolf',
    nameFr: 'Le Loup',
    nameEn: 'Wolf',
    emoji: '🐺',
    soundFr: 'Aouuuuh !',
    soundEn: 'Howl!',
    food: '🥩 Viande',
    foodEmoji: '🥩',
    foodId: 'meat',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Gris loup',
    colorHex: '#636e72',
    fact: 'Il chante sous la pleine lune avec toute sa famille de louveteaux !'
  },
  {
    id: 'deer',
    nameFr: 'Le Cerf',
    nameEn: 'Deer',
    emoji: '🦌',
    soundFr: 'Brait doucement !',
    soundEn: 'Bellow!',
    food: '🌰 Glands & Jeunes pousses',
    foodEmoji: '🌰',
    foodId: 'acorn',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Fauve',
    colorHex: '#b5651d',
    fact: 'Il porte de superbes bois sur sa tête comme une couronne royale !'
  },
  {
    id: 'hedgehog',
    nameFr: 'Le Hérisson',
    nameEn: 'Hedgehog',
    emoji: '🦔',
    soundFr: 'Pff pff snif !',
    soundEn: 'Sniffle!',
    food: '🍎 Petits fruits tombés',
    foodEmoji: '🍎',
    foodId: 'apple',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'mini',
    sizeLabel: 'Très Petit',
    colorName: 'Brun à piquants',
    colorHex: '#6d4c41',
    fact: 'Quand il a peur, il se roule en boule avec tous ses piquants doux !'
  },
  {
    id: 'squirrel',
    nameFr: 'L\'Écureuil',
    nameEn: 'Squirrel',
    emoji: '🐿️',
    soundFr: 'Tchouk tchouk !',
    soundEn: 'Squeak!',
    food: '🥜 Noisettes & Noix',
    foodEmoji: '🥜',
    foodId: 'nuts',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'mini',
    sizeLabel: 'Très Petit',
    colorName: 'Roux noisette',
    colorHex: '#d35400',
    fact: 'Il cache des noisettes sous la terre pour les retrouver en hiver !'
  },
  {
    id: 'owl',
    nameFr: 'Le Hibou',
    nameEn: 'Owl',
    emoji: '🦉',
    soundFr: 'Hou hou !',
    soundEn: 'Hoot hoot!',
    food: '🦗 Petits insectes',
    foodEmoji: '🦗',
    foodId: 'insects',
    habitat: 'forest',
    habitatName: 'Forêt',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Brun marbré',
    colorHex: '#5d4037',
    fact: 'Ses grands yeux ronds voient dans la nuit noire comme en plein jour !'
  },

  // 4. OCÉAN & MERS
  {
    id: 'dolphin',
    nameFr: 'Le Dauphin',
    nameEn: 'Dolphin',
    emoji: '🐬',
    soundFr: 'Clic clic sifflement !',
    soundEn: 'Click whistle!',
    food: '🐟 Petits poissons',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Bleu argenté',
    colorHex: '#0984e3',
    fact: 'Très intelligent et joueur, il fait des saltos au-dessus des vagues !'
  },
  {
    id: 'whale',
    nameFr: 'La Baleine',
    nameEn: 'Whale',
    emoji: '🐳',
    soundFr: 'Chant marin majestueux !',
    soundEn: 'Whale song!',
    food: '🦐 Petites crevettes (Krill)',
    foodEmoji: '🦐',
    foodId: 'shrimp',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'geant',
    sizeLabel: 'Gigantesque',
    colorName: 'Bleu nuit',
    colorHex: '#1e3799',
    fact: 'C\'est le plus gros animal de tout l\'océan et de toute la Terre !'
  },
  {
    id: 'turtle',
    nameFr: 'La Tortue de Mer',
    nameEn: 'Sea Turtle',
    emoji: '🐢',
    soundFr: 'Souffle aquatique doux',
    soundEn: 'Bubble sound',
    food: '🌿 Algues vertes',
    foodEmoji: '🌿',
    foodId: 'seaweed',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Vert olive',
    colorHex: '#009432',
    fact: 'Elle peut nager des milliers de kilomètres en traversant les océans !'
  },
  {
    id: 'octopus',
    nameFr: 'Le Poulpe',
    nameEn: 'Octopus',
    emoji: '🐙',
    soundFr: 'Plouf glouglou !',
    soundEn: 'Giggle bubble!',
    food: '🦀 Petits crabes',
    foodEmoji: '🦀',
    foodId: 'crab',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Rouge corail',
    colorHex: '#eb4d4b',
    fact: 'Il a 8 bras flexibles avec des ventouses pour attraper les objets !'
  },
  {
    id: 'shark',
    nameFr: 'Le Requin',
    nameEn: 'Shark',
    emoji: '🦈',
    soundFr: 'Fend les vagues vite !',
    soundEn: 'Swish!',
    food: '🐟 Poissons marins',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Gris bleu',
    colorHex: '#487eb0',
    fact: 'Il a un aileron triangulaire et nage sans jamais s\'arrêter !'
  },
  {
    id: 'crab',
    nameFr: 'Le Petit Crabe',
    nameEn: 'Crab',
    emoji: '🦀',
    soundFr: 'Clic-clac de pinces !',
    soundEn: 'Click clack!',
    food: '🐚 Algues & Coquillages',
    foodEmoji: '🐚',
    foodId: 'seashell',
    habitat: 'ocean',
    habitatName: 'Océan',
    size: 'mini',
    sizeLabel: 'Très Petit',
    colorName: 'Rouge vif',
    colorHex: '#ff4757',
    fact: 'Il marche rigoureusement de côté avec ses deux pinces magiques !'
  },

  // 5. PÔLE NORD & BANQUISE
  {
    id: 'penguin',
    nameFr: 'Le Pingouin',
    nameEn: 'Penguin',
    emoji: '🐧',
    soundFr: 'Couac couac sur la glace !',
    soundEn: 'Squawk!',
    food: '🐟 Petits poissons des glaces',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'polar',
    habitatName: 'Banquise',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Noir et Blanc',
    colorHex: '#2f3542',
    fact: 'Il glisse sur son ventre sur la neige comme sur un toboggan géant !'
  },
  {
    id: 'polar_bear',
    nameFr: 'L\'Ours Polaire',
    nameEn: 'Polar Bear',
    emoji: '🐻‍❄️',
    soundFr: 'Grrr dans le blizzard !',
    soundEn: 'Ice growl!',
    food: '🐟 Poissons des mers froides',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'polar',
    habitatName: 'Banquise',
    size: 'geant',
    sizeLabel: 'Très Grand',
    colorName: 'Blanc comme neige',
    colorHex: '#f5f6fa',
    fact: 'Sa fourrure blanche épaisse le protège du grand froid glacial !'
  },
  {
    id: 'seal',
    nameFr: 'Le Phoque',
    nameEn: 'Seal',
    emoji: '🦭',
    soundFr: 'Aouh aouh joyeux !',
    soundEn: 'Bark bark!',
    food: '🐟 Poissons frais',
    foodEmoji: '🐟',
    foodId: 'fish',
    habitat: 'polar',
    habitatName: 'Banquise',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Gris argenté',
    colorHex: '#718093',
    fact: 'Il tape joyeusement des nageoires pour applaudir ses amis !'
  },

  // 6. JUNGLE & TROPICAL
  {
    id: 'monkey',
    nameFr: 'Le Petit Singe',
    nameEn: 'Monkey',
    emoji: '🐵',
    soundFr: 'Ouh ouh ah ah !',
    soundEn: 'Ooh ooh aah aah!',
    food: '🍌 Banane mûre',
    foodEmoji: '🍌',
    foodId: 'banana',
    habitat: 'jungle',
    habitatName: 'Jungle',
    size: 'petit',
    sizeLabel: 'Petit',
    colorName: 'Marron',
    colorHex: '#b5651d',
    fact: 'Il s\'accroche aux lianes avec sa queue souple comme une cinquième main !'
  },
  {
    id: 'panda',
    nameFr: 'Le Panda Géant',
    nameEn: 'Giant Panda',
    emoji: '🐼',
    soundFr: 'Crounch crounch bambou !',
    soundEn: 'Chomp chomp!',
    food: '🎋 Bambou vert tendre',
    foodEmoji: '🎋',
    foodId: 'bamboo',
    habitat: 'jungle',
    habitatName: 'Jungle',
    size: 'grand',
    sizeLabel: 'Grand',
    colorName: 'Noir et Blanc',
    colorHex: '#2d3436',
    fact: 'Il passe toute sa journée assis tranquillement à croquer du bambou !'
  },
  {
    id: 'flamingo',
    nameFr: 'Le Flamant Rose',
    nameEn: 'Flamingo',
    emoji: '🦩',
    soundFr: 'Klaxon doux d\'eau !',
    soundEn: 'Honk honk!',
    food: '🦐 Petites crevettes roses',
    foodEmoji: '🦐',
    foodId: 'shrimp',
    habitat: 'jungle',
    habitatName: 'Jungle',
    size: 'moyen',
    sizeLabel: 'Moyen',
    colorName: 'Rose bonbon',
    colorHex: '#ff6b81',
    fact: 'Il se tient souvent en équilibre sur une seule patte sans tomber !'
  },
  {
    id: 'dino',
    nameFr: 'Le Bébé Dinosaure',
    nameEn: 'Baby T-Rex',
    emoji: '🦖',
    soundFr: 'ROAAR magique !',
    soundEn: 'Roar!',
    food: '🌿 Grandes fougères',
    foodEmoji: '🌿',
    foodId: 'leaves',
    habitat: 'jungle',
    habitatName: 'Jungle',
    size: 'geant',
    sizeLabel: 'Gigantesque',
    colorName: 'Vert préhistorique',
    colorHex: '#10ac84',
    fact: 'Il vivait il y a des millions d\'années au milieu des volcans !'
  },
];

const HABITAT_TABS = [
  { id: 'all', label: 'Tous (36 Animaux 🌟)', emoji: '🌍' },
  { id: 'savanna', label: 'Savane (6)', emoji: '🦁' },
  { id: 'farm', label: 'Ferme (10)', emoji: '🐮' },
  { id: 'forest', label: 'Forêt (7)', emoji: '🌲' },
  { id: 'ocean', label: 'Océan (6)', emoji: '🐬' },
  { id: 'polar', label: 'Banquise (3)', emoji: '🐧' },
  { id: 'jungle', label: 'Jungle (4)', emoji: '🌴' },
];

const GAME_MODES = [
  { id: 'safari', label: 'Safari Zoo 🐾' },
  { id: 'size', label: 'Grand vs Petit 📏' },
  { id: 'color', label: 'Couleurs 🎨' },
  { id: 'food', label: 'Que mangent-ils ? 🍌' },
  { id: 'cuddles', label: 'Cris & Câlins ❤️' },
];

export default function AnimalsActivity({ onNiaSpeak, onRewardStar }) {
  const [activeMode, setActiveMode] = useState('safari');
  const [activeHabitat, setActiveHabitat] = useState('all');
  const [selectedAnimal, setSelectedAnimal] = useState(ANIMALS_DATABASE[0]);
  const [isFed, setIsFed] = useState(false);
  const [heartsCount, setHeartsCount] = useState(0);

  // Quiz States
  const [quizRound, setQuizRound] = useState(0);

  useEffect(() => {
    promptForMode();
  }, [activeMode, quizRound]);

  const promptForMode = () => {
    if (activeMode === 'safari') {
      const msg = `Bienvenue au grand Safari Zoo ! Explore plus de 30 animaux extraordinaires avec Tyanna !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (activeMode === 'size') {
      doraVoice.speak("Défi des tailles ! Où se trouve le grand ou le petit animal ?");
    } else if (activeMode === 'color') {
      doraVoice.speak("Défi des couleurs ! Trouve l'animal de la bonne couleur !");
    } else if (activeMode === 'food') {
      doraVoice.speak("C'est l'heure du goûter des animaux ! Donne-lui son repas préféré !");
    } else if (activeMode === 'cuddles') {
      const msg = `Fais des câlins à ${selectedAnimal.nameFr} et écoute son cri !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    }
  };

  const handleSelectAnimal = (animal) => {
    setSelectedAnimal(animal);
    setIsFed(false);
    sounds.playPop();
    const msg = `Voici ${animal.nameFr} (${animal.nameEn}) ! Il vit dans la ${animal.habitatName}. Son cri : « ${animal.soundFr} »`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(
      `${animal.nameFr} ! ${animal.soundFr}`,
      `${animal.nameEn}! ${animal.soundEn}`
    );
  };

  const handleFeedAnimal = (animal = selectedAnimal) => {
    sounds.playSeedsRustle();
    sounds.playMunch();
    sounds.playSuccess();
    setIsFed(true);
    setHeartsCount((h) => h + 1);
    confetti({ particleCount: 45, spread: 60 });
    if (onRewardStar) onRewardStar();

    const msg = `Miam miam ! ${animal.nameFr} savoure son repas : ${animal.food} ! Il te remercie avec un gros câlin !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handlePetAnimal = () => {
    sounds.playSuccess();
    setHeartsCount((h) => h + 1);
    confetti({ particleCount: 30, spread: 50 });
    const msg = `Câlin tout doux pour ${selectedAnimal.nameFr} ! ${selectedAnimal.soundFr}`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // Filtered animals list by habitat
  const filteredAnimals =
    activeHabitat === 'all'
      ? ANIMALS_DATABASE
      : ANIMALS_DATABASE.filter((a) => a.habitat === activeHabitat);

  // Dynamic Size Quiz Challenge
  const generateSizeChallenge = () => {
    const isAskingBig = quizRound % 2 === 0;
    const bigPool = ANIMALS_DATABASE.filter((a) => a.size === 'grand' || a.size === 'geant');
    const smallPool = ANIMALS_DATABASE.filter((a) => a.size === 'petit' || a.size === 'mini');

    const bigTarget = bigPool[quizRound % bigPool.length];
    const smallTarget = smallPool[quizRound % smallPool.length];

    const correctAnimal = isAskingBig ? bigTarget : smallTarget;
    const choices = [bigTarget, smallTarget].sort(() => Math.random() - 0.5);

    return {
      question: isAskingBig
        ? `Où est le GRAND animal ? (${bigTarget.nameFr})`
        : `Où est le PETIT animal ? (${smallTarget.nameFr})`,
      correctId: correctAnimal.id,
      choices,
    };
  };

  // Dynamic Color Quiz Challenge
  const generateColorChallenge = () => {
    const target = ANIMALS_DATABASE[(quizRound * 3) % ANIMALS_DATABASE.length];
    const others = ANIMALS_DATABASE.filter((a) => a.colorName !== target.colorName)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);
    const choices = [target, ...others].sort(() => Math.random() - 0.5);

    return {
      question: `Où se trouve l'animal ${target.colorName.toUpperCase()} ? (${target.nameFr})`,
      correctId: target.id,
      choices,
    };
  };

  // Dynamic Food Quiz Challenge
  const generateFoodChallenge = () => {
    const target = ANIMALS_DATABASE[(quizRound * 2) % ANIMALS_DATABASE.length];
    const otherFoods = ANIMALS_DATABASE.filter((a) => a.foodId !== target.foodId)
      .map((a) => ({ food: a.food, emoji: a.foodEmoji, id: a.foodId }))
      .filter((v, i, self) => i === self.findIndex((t) => t.id === v.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const correctChoice = { food: target.food, emoji: target.foodEmoji, id: target.foodId };
    const choices = [correctChoice, ...otherFoods].sort(() => Math.random() - 0.5);

    return {
      animal: target,
      question: `Que mange ${target.nameFr} ${target.emoji} ?`,
      correctId: target.foodId,
      choices,
    };
  };

  const handleQuizAnswer = (chosenId, correctId, successMsg, failHint) => {
    if (chosenId === correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 65 });
      if (onRewardStar) onRewardStar();
      onNiaSpeak(successMsg);
      doraVoice.speak(successMsg);
      setTimeout(() => setQuizRound((r) => r + 1), 2200);
    } else {
      sounds.playBloop();
      onNiaSpeak(failHint);
      doraVoice.speak(failHint);
    }
  };

  return (
    <div className="center-activity-card">
      {/* Header */}
      <div className="activity-card-header animals-theme">
        <div className="header-info">
          <span className="card-badge-icon">🦁</span>
          <div>
            <h2 className="card-main-title">L'Encyclopédie des 36 Animaux 3D</h2>
            <p className="card-subtitle">Explore 36 animaux, leurs cris réels, leurs repas et leurs habitats avec Tyanna !</p>
          </div>
        </div>
        <div className="score-pill-header luxury-score-pill">
          <Heart size={18} fill="#ff4757" color="#ff4757" />
          <span>Câlins : <strong>{heartsCount}</strong></span>
        </div>
      </div>

      {/* Main Mode Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '12px' }}>
        {GAME_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              sounds.playPop();
              setActiveMode(m.id);
            }}
            className={`num-mode-tab-btn ${activeMode === m.id ? 'active' : ''}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* =========================================================================
          MODE 1: SAFARI ZOO - 36 ANIMALS EXPLORER BY HABITAT
         ========================================================================= */}
      {activeMode === 'safari' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Habitat Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {HABITAT_TABS.map((h) => (
              <button
                key={h.id}
                onClick={() => {
                  sounds.playPop();
                  setActiveHabitat(h.id);
                }}
                className={`num-mode-tab-btn ${activeHabitat === h.id ? 'active' : ''}`}
                style={{ whiteSpace: 'nowrap', padding: '6px 14px', fontSize: '0.84rem' }}
              >
                <span>{h.emoji} {h.label}</span>
              </button>
            ))}
          </div>

          {/* Active Highlighted Spotlight Card */}
          <div
            className="letter-jumbo-spotlight"
            style={{
              borderColor: selectedAnimal.colorHex,
              background: 'linear-gradient(135deg, #ffffff 0%, #fff9f0 100%)',
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: '4.8rem', lineHeight: 1 }} className="animate-bounce-soft">
              {selectedAnimal.emoji}
            </div>

            <div className="jumbo-details" style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3 className="jumbo-word-fr" style={{ margin: 0 }}>{selectedAnimal.nameFr}</h3>
                <span style={{ fontSize: '0.9rem', color: '#636e72', fontWeight: 700 }}>({selectedAnimal.nameEn})</span>
                <span style={{ background: selectedAnimal.colorHex, color: '#fff', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '999px', fontWeight: 900 }}>
                  {selectedAnimal.habitatName}
                </span>
                <span style={{ background: '#e3f2fd', color: '#0984e3', fontSize: '0.72rem', padding: '2px 8px', borderRadius: '999px', fontWeight: 800 }}>
                  Taille : {selectedAnimal.sizeLabel}
                </span>
              </div>

              <p style={{ margin: '6px 0', fontSize: '1rem', fontWeight: 800, color: '#d35400' }}>
                Cri : « {selectedAnimal.soundFr} »
              </p>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#2d3436' }}>
                💡 <em>{selectedAnimal.fact}</em>
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleSelectAnimal(selectedAnimal)}
                  className="listen-again-btn"
                  style={{ background: 'linear-gradient(135deg, #0984e3, #00cec9)', color: '#fff', border: 'none' }}
                >
                  <Volume2 size={18} /> Écouter le Cri !
                </button>
                <button
                  onClick={() => handleFeedAnimal(selectedAnimal)}
                  className="listen-again-btn"
                  style={{ background: 'linear-gradient(135deg, #2ed573, #10ac84)', color: '#fff', border: 'none' }}
                >
                  {selectedAnimal.foodEmoji} Donner : {selectedAnimal.food}
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Swiping Ribbon (Scroll Left to Right) */}
          <div style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#636e72', textTransform: 'uppercase' }}>
                🐾 Défilement de gauche à droite ({filteredAnimals.length} animaux) ➡️
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                overflowX: 'auto',
                padding: '6px 4px 12px 4px',
                touchAction: 'pan-x',
                WebkitOverflowScrolling: 'touch',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {filteredAnimals.map((animal) => {
                const isSelected = selectedAnimal.id === animal.id;
                return (
                  <button
                    key={`ribbon-${animal.id}`}
                    onClick={() => handleSelectAnimal(animal)}
                    className="animate-pop"
                    style={{
                      flex: '0 0 96px',
                      background: isSelected ? '#fff9db' : '#ffffff',
                      border: isSelected ? '3.5px solid #f59e0b' : '2px solid #e9ecef',
                      borderRadius: '20px',
                      padding: '10px 4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer',
                      boxShadow: isSelected
                        ? '0 6px 14px rgba(245, 158, 11, 0.35)'
                        : '0 4px 8px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <span style={{ fontSize: '2.3rem', lineHeight: 1 }}>{animal.emoji}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#2d3436', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '86px' }}>
                      {animal.nameFr}
                    </span>
                    <span style={{ fontSize: '0.62rem', color: '#636e72', fontWeight: 700 }}>
                      {animal.soundFr.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full Grid of Animals */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(105px, 1fr))',
              gap: '10px',
              width: '100%',
            }}
          >
            {filteredAnimals.map((animal) => {
              const isSelected = selectedAnimal.id === animal.id;
              return (
                <button
                  key={animal.id}
                  onClick={() => handleSelectAnimal(animal)}
                  className="animate-pop"
                  style={{
                    background: isSelected ? '#fff9db' : '#ffffff',
                    border: isSelected ? '3.5px solid #f59e0b' : '2px solid #e9ecef',
                    borderRadius: '20px',
                    padding: '10px 6px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    boxShadow: isSelected
                      ? '0 6px 14px rgba(245, 158, 11, 0.35)'
                      : '0 4px 8px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{animal.emoji}</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 900, color: '#2d3436', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '95px' }}>
                    {animal.nameFr}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#636e72', fontWeight: 700 }}>
                    {animal.soundFr.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 2: GRAND VS PETIT
         ========================================================================= */}
      {activeMode === 'size' && (() => {
        const challenge = generateSizeChallenge();
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
              <span className="mission-badge">Défi des Tailles avec Tyanna :</span>
              <h3 style={{ fontSize: '1.35rem', margin: '8px 0' }}>{challenge.question}</h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>Touche le bon animal !</p>
            </div>

            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {challenge.choices.map((animal) => (
                <button
                  key={animal.id}
                  onClick={() =>
                    handleQuizAnswer(
                      animal.id,
                      challenge.correctId,
                      `Bravo ! C'est bien ${animal.nameFr} ! Tu as trouvé le bon animal !`,
                      `Regarde bien la taille ! Cherchons : ${challenge.question}`
                    )
                  }
                  className="animate-pop"
                  style={{
                    background: '#ffffff',
                    border: '4px solid #f59e0b',
                    borderRadius: '26px',
                    padding: '24px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                    minWidth: '150px',
                  }}
                >
                  <span style={{ fontSize: animal.size === 'grand' || animal.size === 'geant' ? '4.8rem' : '2.8rem', lineHeight: 1 }} className="animate-bounce-soft">
                    {animal.emoji}
                  </span>
                  <span style={{ fontSize: '1.05rem', fontWeight: 900, color: '#2d3436' }}>{animal.nameFr}</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0984e3' }}>Taille : {animal.sizeLabel}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* =========================================================================
          MODE 3: COULEURS DES ANIMAUX
         ========================================================================= */}
      {activeMode === 'color' && (() => {
        const challenge = generateColorChallenge();
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
              <span className="mission-badge">Défi des Couleurs avec Tyanna :</span>
              <h3 style={{ fontSize: '1.35rem', margin: '8px 0' }}>{challenge.question}</h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>Touche l'animal correspondant !</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px', width: '100%', maxWidth: '500px' }}>
              {challenge.choices.map((animal) => (
                <button
                  key={animal.id}
                  onClick={() =>
                    handleQuizAnswer(
                      animal.id,
                      challenge.correctId,
                      `C'est gagné ! C'est bien ${animal.nameFr}, tout ${animal.colorName} !`,
                      `Presque ! Cherchons l'animal ${animal.colorName} !`
                    )
                  }
                  className="animate-pop"
                  style={{
                    background: '#ffffff',
                    border: `4px solid ${animal.colorHex}`,
                    borderRadius: '24px',
                    padding: '20px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 18px rgba(0,0,0,0.1)',
                  }}
                >
                  <span style={{ fontSize: '3.6rem', lineHeight: 1 }}>{animal.emoji}</span>
                  <span style={{ fontSize: '1rem', fontWeight: 900, color: '#2d3436' }}>{animal.nameFr}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: animal.colorHex }}>{animal.colorName}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* =========================================================================
          MODE 4: QUE MANGENT-ILS ?
         ========================================================================= */}
      {activeMode === 'food' && (() => {
        const challenge = generateFoodChallenge();
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
              <div style={{ fontSize: '4.8rem', lineHeight: 1 }} className="animate-bounce-soft">
                {challenge.animal.emoji}
              </div>
              <span className="mission-badge">Le Goûter de {challenge.animal.nameFr} :</span>
              <h3 style={{ fontSize: '1.35rem', margin: '8px 0' }}>{challenge.question}</h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>Touche son repas préféré !</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '14px', width: '100%', maxWidth: '500px' }}>
              {challenge.choices.map((choice) => (
                <button
                  key={choice.id}
                  onClick={() =>
                    handleQuizAnswer(
                      choice.id,
                      challenge.correctId,
                      `Miam miam ! ${challenge.animal.nameFr} raffole de ${choice.food} ! Bravo !`,
                      `Non non, ${challenge.animal.nameFr} ne mange pas ça ! Cherche son régal !`
                    )
                  }
                  className="animate-pop"
                  style={{
                    background: '#ffffff',
                    border: '3.5px solid #2ed573',
                    borderRadius: '24px',
                    padding: '20px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 18px rgba(46, 213, 115, 0.2)',
                  }}
                >
                  <span style={{ fontSize: '3.2rem', lineHeight: 1 }}>{choice.emoji}</span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#2d3436', textAlign: 'center' }}>
                    {choice.food}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* =========================================================================
          MODE 5: CRIS & CÂLINS
         ========================================================================= */}
      {activeMode === 'cuddles' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '16px 0' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #fff0f6 0%, #ffe3ec 100%)',
              border: '4px solid #ff6b81',
              borderRadius: '28px',
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 10px 25px rgba(232, 67, 147, 0.2)',
              maxWidth: '480px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '6rem', lineHeight: 1 }} className="animate-bounce-soft">
              {selectedAnimal.emoji}
            </span>
            <h3 style={{ fontSize: '1.6rem', margin: '8px 0 4px 0', color: '#2d3436' }}>{selectedAnimal.nameFr}</h3>
            <p style={{ fontSize: '1.2rem', fontWeight: 900, color: '#e84393', margin: '0 0 6px 0' }}>
              « {selectedAnimal.soundFr} »
            </p>
            <p style={{ fontSize: '0.9rem', color: '#636e72', margin: '0 0 16px 0' }}>
              {selectedAnimal.fact}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={handlePetAnimal}
                style={{
                  background: 'linear-gradient(135deg, #ff7675, #d63031)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #b33939, 0 8px 16px rgba(214, 48, 49, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                ❤️ Câlin tout doux !
              </button>
              <button
                onClick={() => handleFeedAnimal(selectedAnimal)}
                style={{
                  background: 'linear-gradient(135deg, #2ed573, #10ac84)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #0b684f, 0 8px 16px rgba(16, 172, 132, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {selectedAnimal.foodEmoji} Nourrir ({selectedAnimal.food})
              </button>
            </div>
          </div>

          <p style={{ margin: 0, fontWeight: 800, color: '#636e72' }}>Choisis un autre animal pour lui faire un câlin :</p>
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '100%', padding: '6px' }}>
            {ANIMALS_DATABASE.map((a) => (
              <button
                key={a.id}
                onClick={() => handleSelectAnimal(a)}
                style={{
                  background: selectedAnimal.id === a.id ? '#fff9db' : '#ffffff',
                  border: selectedAnimal.id === a.id ? '3px solid #f59e0b' : '2px solid #e9ecef',
                  borderRadius: '16px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '65px',
                }}
              >
                <span style={{ fontSize: '2rem' }}>{a.emoji}</span>
                <span style={{ fontSize: '0.65rem', fontWeight: 800 }}>{a.nameFr.split(' ')[1] || a.nameFr}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
