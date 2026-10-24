import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';

const ANIMAL_MODES = [
  { id: 'size', label: 'Le Grand & Le Petit 📏' },
  { id: 'color', label: 'Trouve la Couleur 🎨' },
  { id: 'sounds', label: 'Noms & Cris 🦁' },
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
  }
];

const COLOR_CHALLENGES = [
  {
    question: "Où est l'animal MARRON ?",
    questionEn: "Where is the BROWN animal?",
    colorTarget: 'Marron (Brown)',
    correctId: 'bear',
    items: [
      { id: 'duck', nameFr: 'Le canard jaune', emoji: '🦆', colorDesc: 'Jaune' },
      { id: 'bear', nameFr: 'L\'ours MARRON', emoji: '🐻', colorDesc: 'Marron' },
      { id: 'flamingo', nameFr: 'Le flamant rose', emoji: '🦩', colorDesc: 'Rose' },
    ]
  },
  {
    question: "Où est l'animal JAUNE ?",
    questionEn: "Where is the YELLOW animal?",
    colorTarget: 'Jaune (Yellow)',
    correctId: 'chick',
    items: [
      { id: 'chick', nameFr: 'Le poussin JAUNE', emoji: '🐥', colorDesc: 'Jaune' },
      { id: 'frog', nameFr: 'La grenouille verte', emoji: '🐸', colorDesc: 'Vert' },
      { id: 'pig', nameFr: 'Le cochon rose', emoji: '🐷', colorDesc: 'Rose' },
    ]
  },
  {
    question: "Où est l'animal NOIR ET BLANC ?",
    questionEn: "Where is the BLACK AND WHITE animal?",
    colorTarget: 'Noir et Blanc',
    correctId: 'panda',
    items: [
      { id: 'lion', nameFr: 'Le lion doré', emoji: '🦁', colorDesc: 'Doré' },
      { id: 'panda', nameFr: 'Le panda NOIR ET BLANC', emoji: '🐼', colorDesc: 'Noir et Blanc' },
      { id: 'fox', nameFr: 'Le renard orange', emoji: '🦊', colorDesc: 'Orange' },
    ]
  }
];

const ANIMAL_SOUNDS = [
  { nameFr: 'Le Lion', soundFr: 'Roaaar !', emoji: '🦁', text: 'Le roi des animaux rugit très fort !' },
  { nameFr: 'Le Chien', soundFr: 'Wouaf wouaf !', emoji: '🐶', text: 'Il remue joyeusement la queue !' },
  { nameFr: 'Le Chat', soundFr: 'Miaou miaou !', emoji: '🐱', text: 'Il ronronne doucement pour des câlins !' },
  { nameFr: 'La Vache', soundFr: 'Meeuh !', emoji: '🐮', text: 'Elle broute de la bonne herbe verte !' },
  { nameFr: 'Le Canard', soundFr: 'Coin coin !', emoji: '🦆', text: 'Il nage dans la mare et barbote !' },
  { nameFr: 'Le Mouton', soundFr: 'Bêêê !', emoji: '🐑', text: 'Avec sa laine toute douce et bouclée !' },
];

export default function AnimalsActivity({ onNiaSpeak, onRewardStar }) {
  const [activeMode, setActiveMode] = useState('size');
  const [sizeIndex, setSizeIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [selectedAnimalSound, setSelectedAnimalSound] = useState(ANIMAL_SOUNDS[0]);

  useEffect(() => {
    promptForMode();
  }, [activeMode, sizeIndex, colorIndex]);

  const promptForMode = () => {
    if (activeMode === 'size') {
      const q = SIZE_CHALLENGES[sizeIndex % SIZE_CHALLENGES.length];
      onNiaSpeak(q.question);
      doraVoice.speakBilingual(q.question, q.questionEn);
    } else if (activeMode === 'color') {
      const q = COLOR_CHALLENGES[colorIndex % COLOR_CHALLENGES.length];
      onNiaSpeak(q.question);
      doraVoice.speakBilingual(q.question, q.questionEn);
    } else {
      const msg = "Touche un animal pour entendre son cri et son nom rigolo !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    }
  };

  const handleSizeAnswer = (item, challenge) => {
    if (item.id === challenge.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = `Youpi ! Bravo mon ami ! Tu as trouvé : ${item.nameFr} ! Tu es formidable !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(() => setSizeIndex((i) => i + 1), 2200);
    } else {
      sounds.playBloop();
      const hint = `Regarde bien ! Cherchons : ${challenge.question} ! Essaie encore !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleColorAnswer = (item, challenge) => {
    if (item.id === challenge.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = `C'est gagné ! C'est bien ${item.nameFr} ! Quel champion !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(() => setColorIndex((i) => i + 1), 2200);
    } else {
      sounds.playBloop();
      const hint = `Presque ! Regarde la couleur : ${challenge.question}`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleAnimalSoundClick = (a) => {
    setSelectedAnimalSound(a);
    sounds.playPop();
    const msg = `Voici ${a.nameFr} ! ${a.soundFr} ${a.text}`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
    confetti({ particleCount: 30, spread: 45 });
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header animals-theme">
        <div className="header-info">
          <span className="card-badge-icon">🦁</span>
          <div>
            <h2 className="card-main-title">Le Monde des Animaux</h2>
            <p className="card-subtitle">Le grand, le petit, les couleurs et les cris !</p>
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
        {activeMode === 'size' && (
          <div className="size-challenge-arena">
            {(() => {
              const currentChallenge = SIZE_CHALLENGES[sizeIndex % SIZE_CHALLENGES.length];
              return (
                <>
                  <div className="mission-question-card">
                    <span className="mission-badge">Défi avec Nia :</span>
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
                </>
              );
            })()}
          </div>
        )}

        {/* Mode 2: Color animal */}
        {activeMode === 'color' && (
          <div className="color-animal-arena">
            {(() => {
              const currentChallenge = COLOR_CHALLENGES[colorIndex % COLOR_CHALLENGES.length];
              return (
                <>
                  <div className="mission-question-card">
                    <span className="mission-badge">Défi des couleurs :</span>
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
                </>
              );
            })()}
          </div>
        )}

        {/* Mode 3: Sounds and Names */}
        {activeMode === 'sounds' && (
          <div className="sounds-animal-arena">
            <div className="featured-animal-box">
              <span className="featured-animal-emoji animate-bounce-soft">
                {selectedAnimalSound.emoji}
              </span>
              <h3>{selectedAnimalSound.nameFr}</h3>
              <p className="animal-sound-text">{selectedAnimalSound.soundFr}</p>
              <p className="animal-sound-desc">{selectedAnimalSound.text}</p>
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
