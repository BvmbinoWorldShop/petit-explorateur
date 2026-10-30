import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, CheckCircle2, Heart } from 'lucide-react';

const ANIMAL_MODES = [
  { id: 'size', label: 'Grand & Petit 📏' },
  { id: 'color', label: 'Couleurs 🎨' },
  { id: 'food', label: 'Que mangent-ils ? 🍌' },
  { id: 'sounds', label: 'Cris & Câlins 🦁' },
];

const SIZE_CHALLENGES = [
  {
    question: "Où se trouve le GRAND animal ?",
    questionEn: "Where is the BIG animal?",
    correctId: 'big-elephant',
    items: [
      { id: 'small-mouse', nameFr: 'La petite souris', emoji: '🐭', isBig: false, sizeClass: 'size-small' },
      { id: 'big-elephant', nameFr: "Le GRAND éléphant", emoji: '🐘', isBig: true, sizeClass: 'size-giant' },
    ]
  },
  {
    question: "Où se trouve le PETIT animal ?",
    questionEn: "Where is the SMALL animal?",
    correctId: 'small-frog',
    items: [
      { id: 'big-lion', nameFr: "Le grand lion", emoji: '🦁', isBig: true, sizeClass: 'size-giant' },
      { id: 'small-frog', nameFr: 'La PETITE grenouille', emoji: '🐸', isBig: false, sizeClass: 'size-small' },
    ]
  },
  {
    question: "Touche la TRÈS GRANDE girafe !",
    questionEn: "Tap the TALL giraffe!",
    correctId: 'big-giraffe',
    items: [
      { id: 'small-snail', nameFr: 'Le petit escargot', emoji: '🐌', isBig: false, sizeClass: 'size-small' },
      { id: 'big-giraffe', nameFr: 'La GRANDE girafe', emoji: '🦒', isBig: true, sizeClass: 'size-giant' },
    ]
  },
  {
    question: "Où est la PETITE abeille ?",
    questionEn: "Where is the LITTLE bee?",
    correctId: 'small-bee',
    items: [
      { id: 'big-whale', nameFr: 'La grande baleine', emoji: '🐳', isBig: true, sizeClass: 'size-giant' },
      { id: 'small-bee', nameFr: 'La PETITE abeille', emoji: '🐝', isBig: false, sizeClass: 'size-small' },
    ]
  },
  {
    question: "Touche le GRAND dinosaure !",
    questionEn: "Tap the BIG dinosaur!",
    correctId: 'big-dino',
    items: [
      { id: 'small-chick', nameFr: 'Le petit poussin', emoji: '🐥', isBig: false, sizeClass: 'size-small' },
      { id: 'big-dino', nameFr: 'Le GRAND dinosaure', emoji: '🦖', isBig: true, sizeClass: 'size-giant' },
    ]
  }
];

const COLOR_CHALLENGES = [
  {
    question: "Où est l'animal MARRON ?",
    questionEn: "Where is the BROWN animal?",
    correctId: 'bear',
    items: [
      { id: 'duck', nameFr: 'Le canard jaune', emoji: '🦆' },
      { id: 'bear', nameFr: 'L\'ours MARRON', emoji: '🐻' },
      { id: 'flamingo', nameFr: 'Le flamant rose', emoji: '🦩' },
    ]
  },
  {
    question: "Où est l'animal JAUNE ?",
    questionEn: "Where is the YELLOW animal?",
    correctId: 'chick',
    items: [
      { id: 'chick', nameFr: 'Le poussin JAUNE', emoji: '🐥' },
      { id: 'frog', nameFr: 'La grenouille verte', emoji: '🐸' },
      { id: 'pig', nameFr: 'Le cochon rose', emoji: '🐷' },
    ]
  },
  {
    question: "Où est l'animal NOIR ET BLANC ?",
    questionEn: "Where is the BLACK AND WHITE animal?",
    correctId: 'panda',
    items: [
      { id: 'lion', nameFr: 'Le lion doré', emoji: '🦁' },
      { id: 'panda', nameFr: 'Le panda NOIR ET BLANC', emoji: '🐼' },
      { id: 'fox', nameFr: 'Le renard orange', emoji: '🦊' },
    ]
  },
  {
    question: "Où est l'animal VERT ?",
    questionEn: "Where is the GREEN animal?",
    correctId: 'turtle',
    items: [
      { id: 'turtle', nameFr: 'La tortue VERTE', emoji: '🐢' },
      { id: 'polar', nameFr: 'L\'ours blanc', emoji: '🐻‍❄️' },
      { id: 'monkey', nameFr: 'Le singe marron', emoji: '🐵' },
    ]
  },
  {
    question: "Où est l'animal ROSE ?",
    questionEn: "Where is the PINK animal?",
    correctId: 'pig',
    items: [
      { id: 'elephant', nameFr: 'L\'éléphant gris', emoji: '🐘' },
      { id: 'pig', nameFr: 'Le petit cochon ROSE', emoji: '🐷' },
      { id: 'bee', nameFr: 'L\'abeille jaune', emoji: '🐝' },
    ]
  }
];

const FOOD_CHALLENGES = [
  {
    animal: 'Le Petit Singe 🐵',
    animalEmoji: '🐵',
    question: "Que mange le petit singe ?",
    questionEn: "What does the monkey eat?",
    correctId: 'banana',
    options: [
      { id: 'banana', nameFr: 'La Banane jaune', emoji: '🍌' },
      { id: 'bone', nameFr: 'L\'Os', emoji: '🦴' },
      { id: 'fish', nameFr: 'Le Poisson', emoji: '🐟' },
    ]
  },
  {
    animal: 'Le Petit Lapin 🐰',
    animalEmoji: '🐰',
    question: "Que préfère croquer le petit lapin ?",
    questionEn: "What does the bunny love to crunch?",
    correctId: 'carrot',
    options: [
      { id: 'honey', nameFr: 'Le Miel', emoji: '🍯' },
      { id: 'carrot', nameFr: 'La Carotte orange', emoji: '🥕' },
      { id: 'cheese', nameFr: 'Le Fromage', emoji: '🧀' },
    ]
  },
  {
    animal: 'Le Petit Chiot 🐶',
    animalEmoji: '🐶',
    question: "Quel est le repas préféré du petit chiot ?",
    questionEn: "What does the puppy like?",
    correctId: 'bone',
    options: [
      { id: 'bone', nameFr: 'Le bon Os', emoji: '🦴' },
      { id: 'bamboo', nameFr: 'Le Bambou', emoji: '🎋' },
      { id: 'lemon', nameFr: 'Le Citron', emoji: '🍋' },
    ]
  },
  {
    animal: 'La Petite Souris 🐭',
    animalEmoji: '🐭',
    question: "Que grignote la petite souris ?",
    questionEn: "What does the little mouse eat?",
    correctId: 'cheese',
    options: [
      { id: 'cheese', nameFr: 'Le Fromage', emoji: '🧀' },
      { id: 'grass', nameFr: 'La Fleur', emoji: '🌸' },
      { id: 'chili', nameFr: 'Le Piment', emoji: '🌶️' },
    ]
  },
  {
    animal: 'Le Gros Ours 🐻',
    animalEmoji: '🐻',
    question: "De quoi raffole l'ours gourmand ?",
    questionEn: "What does the bear love?",
    correctId: 'honey',
    options: [
      { id: 'honey', nameFr: 'Le Pot de Miel sucré', emoji: '🍯' },
      { id: 'lettuce', nameFr: 'La Salade', emoji: '🥬' },
      { id: 'cookie', nameFr: 'Le Glaçon', emoji: '🧊' },
    ]
  }
];

const ANIMAL_SOUNDS = [
  { nameFr: 'Le Lion', soundFr: 'Roaaar !', emoji: '🦁', food: '🥩', text: 'Le roi de la savane rugit très fort !' },
  { nameFr: 'Le Chien', soundFr: 'Wouaf wouaf !', emoji: '🐶', food: '🦴', text: 'Il remue joyeusement la queue !' },
  { nameFr: 'Le Chat', soundFr: 'Miaou miaou !', emoji: '🐱', food: '🐟', text: 'Il ronronne doucement pour des câlins !' },
  { nameFr: 'La Vache', soundFr: 'Meeuh !', emoji: '🐮', food: '🌿', text: 'Elle broute de la bonne herbe verte !' },
  { nameFr: 'Le Canard', soundFr: 'Coin coin !', emoji: '🦆', food: '🍞', text: 'Il nage dans la mare et barbote !' },
  { nameFr: 'Le Mouton', soundFr: 'Bêêê !', emoji: '🐑', food: '🌱', text: 'Avec sa laine toute douce et bouclée !' },
  { nameFr: 'Le Singe', soundFr: 'Ouh ouh ah ah !', emoji: '🐵', food: '🍌', text: 'Il saute de branche en branche !' },
  { nameFr: 'L\'Éléphant', soundFr: 'Baaaah (Barrit) !', emoji: '🐘', food: '🍎', text: 'Il arrose d\'eau avec sa grande trompe !' },
  { nameFr: 'La Grenouille', soundFr: 'Coa coa !', emoji: '🐸', food: '🪰', text: 'Elle bondit sur les nénuphars !' },
];

export default function AnimalsActivity({ onNiaSpeak, onRewardStar }) {
  const [activeMode, setActiveMode] = useState('size');
  const [sizeIndex, setSizeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [foodIndex, setFoodIndex] = useState(0);
  const [selectedAnimalSound, setSelectedAnimalSound] = useState(ANIMAL_SOUNDS[0]);
  const [isFed, setIsFed] = useState(false);

  useEffect(() => {
    promptForMode();
  }, [activeMode, sizeIndex, colorIndex, foodIndex]);

  const promptForMode = () => {
    if (activeMode === 'size') {
      const q = SIZE_CHALLENGES[sizeIndex % SIZE_CHALLENGES.length];
      onNiaSpeak(q.question);
      doraVoice.speakBilingual(q.question, q.questionEn);
    } else if (activeMode === 'color') {
      const q = COLOR_CHALLENGES[colorIndex % COLOR_CHALLENGES.length];
      onNiaSpeak(q.question);
      doraVoice.speakBilingual(q.question, q.questionEn);
    } else if (activeMode === 'food') {
      const q = FOOD_CHALLENGES[foodIndex % FOOD_CHALLENGES.length];
      onNiaSpeak(q.question);
      doraVoice.speakBilingual(q.question, q.questionEn);
    } else {
      const msg = "Touche un animal pour entendre son cri et donne-lui à manger !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    }
  };

  const handleSizeAnswer = (item, challenge) => {
    if (item.id === challenge.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 55, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = `Youpi ! Bravo mon ami ! Tu as trouvé : ${item.nameFr} !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(() => setSizeIndex((i) => i + 1), 2100);
    } else {
      sounds.playBloop();
      const hint = `Regarde bien la taille ! ${challenge.question} Essaie encore !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleColorAnswer = (item, challenge) => {
    if (item.id === challenge.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 55, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = `C'est gagné ! C'est bien ${item.nameFr} ! Quel champion !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(() => setColorIndex((i) => i + 1), 2100);
    } else {
      sounds.playBloop();
      const hint = `Presque ! Regarde la couleur : ${challenge.question}`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleFoodAnswer = (item, challenge) => {
    if (item.id === challenge.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 65 });
      if (onRewardStar) onRewardStar();
      const win = `Miam miam ! ${challenge.animal} adore ${item.nameFr} ! Bravo !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(() => setFoodIndex((i) => i + 1), 2200);
    } else {
      sounds.playBloop();
      const hint = `Oh non, ${challenge.animal} ne mange pas ça ! Cherche son repas préféré !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleAnimalSoundClick = (a) => {
    setSelectedAnimalSound(a);
    setIsFed(false);
    sounds.playPop();
    const msg = `Voici ${a.nameFr} ! ${a.soundFr} ${a.text}`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
    confetti({ particleCount: 25, spread: 45 });
  };

  const handleFeedSelectedAnimal = () => {
    sounds.playSeedsRustle();
    sounds.playSuccess();
    setIsFed(true);
    confetti({ particleCount: 40, spread: 55 });
    if (onRewardStar) onRewardStar();
    const msg = `Miam ! ${selectedAnimalSound.nameFr} mange son repas avec bonheur ! ${selectedAnimalSound.soundFr}`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header animals-theme">
        <div className="header-info">
          <span className="card-badge-icon">🦁</span>
          <div>
            <h2 className="card-main-title">Le Zoo Interactif des Animaux</h2>
            <p className="card-subtitle">Grand ou petit, couleurs, repas préférés et cris rigolos avec Tyanna !</p>
          </div>
        </div>
      </div>

      {/* Mode Sub-nav Tabs */}
      <div className="animal-mode-tabs">
        {ANIMAL_MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => {
              sounds.playPop();
              setActiveMode(m.id);
            }}
            className={`mode-pill-btn ${activeMode === m.id ? 'active' : ''}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="animals-content-arena">
        {/* Mode 1: Big vs Small */}
        {activeMode === 'size' && (() => {
          const currentChallenge = SIZE_CHALLENGES[sizeIndex % SIZE_CHALLENGES.length];
          return (
            <div className="size-challenge-arena">
              <div className="mission-question-card">
                <span className="mission-badge">Défi avec Tyanna :</span>
                <h3>{currentChallenge.question}</h3>
                <p>({currentChallenge.questionEn})</p>
              </div>

              <div className="size-options-container">
                {currentChallenge.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSizeAnswer(item, currentChallenge)}
                    className={`size-choice-btn ${item.sizeClass}`}
                  >
                    <span className="animal-size-emoji animate-bounce-soft">{item.emoji}</span>
                    <span className="animal-size-name">{item.nameFr}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Mode 2: Color animal */}
        {activeMode === 'color' && (() => {
          const currentChallenge = COLOR_CHALLENGES[colorIndex % COLOR_CHALLENGES.length];
          return (
            <div className="color-animal-arena">
              <div className="mission-question-card">
                <span className="mission-badge">Défi des couleurs avec Tyanna :</span>
                <h3>{currentChallenge.question}</h3>
                <p>({currentChallenge.questionEn})</p>
              </div>

              <div className="color-animal-choices">
                {currentChallenge.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleColorAnswer(item, currentChallenge)}
                    className="color-animal-btn"
                  >
                    <span className="animal-choice-emoji">{item.emoji}</span>
                    <span className="animal-choice-name">{item.nameFr}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Mode 3: What do they eat? */}
        {activeMode === 'food' && (() => {
          const currentChallenge = FOOD_CHALLENGES[foodIndex % FOOD_CHALLENGES.length];
          return (
            <div className="color-animal-arena">
              <div className="mission-question-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4.2rem', lineHeight: 1.1 }} className="animate-bounce-soft">
                  {currentChallenge.animalEmoji}
                </div>
                <span className="mission-badge">Donne à manger à l'animal :</span>
                <h3>{currentChallenge.question}</h3>
                <p>({currentChallenge.questionEn})</p>
              </div>

              <div className="color-animal-choices">
                {currentChallenge.options.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleFoodAnswer(item, currentChallenge)}
                    className="color-animal-btn animate-pop"
                  >
                    <span className="animal-choice-emoji">{item.emoji}</span>
                    <span className="animal-choice-name">{item.nameFr}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Mode 4: Sounds and Interactive Feeding */}
        {activeMode === 'sounds' && (
          <div className="sounds-animal-arena">
            <div className="featured-animal-box" style={{ position: 'relative' }}>
              <span className="featured-animal-emoji animate-bounce-soft">
                {selectedAnimalSound.emoji}
              </span>
              {isFed && (
                <div className="animate-pop" style={{ fontSize: '1.5rem', fontWeight: 900, color: '#e84393', margin: '4px 0' }}>
                  ❤️ Miam miam ! Merci ! {selectedAnimalSound.food}
                </div>
              )}
              <h3>{selectedAnimalSound.nameFr}</h3>
              <p className="animal-sound-text">{selectedAnimalSound.soundFr}</p>
              <p className="animal-sound-desc">{selectedAnimalSound.text}</p>
              <button
                onClick={handleFeedSelectedAnimal}
                style={{
                  marginTop: '10px',
                  background: 'linear-gradient(135deg, #2ed573, #10ac84)',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '999px',
                  padding: '8px 20px',
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #0b684f, 0 8px 16px rgba(16, 172, 132, 0.35)'
                }}
              >
                {selectedAnimalSound.food} Nourrir {selectedAnimalSound.nameFr} !
              </button>
            </div>

            <div className="animals-sound-grid">
              {ANIMAL_SOUNDS.map((a) => (
                <button
                  key={a.nameFr}
                  onClick={() => handleAnimalSoundClick(a)}
                  className={`animal-sound-tile ${selectedAnimalSound.nameFr === a.nameFr ? 'selected' : ''}`}
                >
                  <span className="tile-emoji-big">{a.emoji}</span>
                  <span className="tile-animal-name">{a.nameFr}</span>
                  <span className="tile-sound-badge">{a.soundFr}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
