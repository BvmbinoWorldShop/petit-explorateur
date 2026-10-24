import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Volume2, Award } from 'lucide-react';

const ALPHABET = [
  { char: 'A', wordFr: 'Avion', wordEn: 'Airplane', emoji: '✈️', color: '#FF7675' },
  { char: 'B', wordFr: 'Ballon', wordEn: 'Ball', emoji: '⚽', color: '#74B9FF' },
  { char: 'C', wordFr: 'Chat', wordEn: 'Cat', emoji: '🐱', color: '#FFEAA7' },
  { char: 'D', wordFr: 'Dauphin', wordEn: 'Dolphin', emoji: '🐬', color: '#55EFC4' },
  { char: 'E', wordFr: 'Éléphant', wordEn: 'Elephant', emoji: '🐘', color: '#A29BFE' },
  { char: 'F', wordFr: 'Fleur', wordEn: 'Flower', emoji: '🌸', color: '#FAB1A0' },
  { char: 'G', wordFr: 'Girafe', wordEn: 'Giraffe', emoji: '🦒', color: '#FDCB6E' },
  { char: 'H', wordFr: 'Hibou', wordEn: 'Owl', emoji: '🦉', color: '#00CEC9' },
  { char: 'I', wordFr: 'Île', wordEn: 'Island', emoji: '🏝️', color: '#81ECEC' },
  { char: 'J', wordFr: 'Jus', wordEn: 'Juice', emoji: '🧃', color: '#FF7675' },
  { char: 'K', wordFr: 'Koala', wordEn: 'Koala', emoji: '🐨', color: '#B2BEC3' },
  { char: 'L', wordFr: 'Lion', wordEn: 'Lion', emoji: '🦁', color: '#E17055' },
  { char: 'M', wordFr: 'Maison', wordEn: 'House', emoji: '🏠', color: '#0984E3' },
  { char: 'N', wordFr: 'Nuage', wordEn: 'Cloud', emoji: '☁️', color: '#74B9FF' },
  { char: 'O', wordFr: 'Ours', wordEn: 'Bear', emoji: '🐻', color: '#B5651D' },
  { char: 'P', wordFr: 'Pomme', wordEn: 'Apple', emoji: '🍎', color: '#D63031' },
  { char: 'Q', wordFr: 'Quatre', wordEn: 'Four', emoji: '4️⃣', color: '#00B894' },
  { char: 'R', wordFr: 'Robot', wordEn: 'Robot', emoji: '🤖', color: '#6C5CE7' },
  { char: 'S', wordFr: 'Soleil', wordEn: 'Sun', emoji: '☀️', color: '#F1C40F' },
  { char: 'T', wordFr: 'Train', wordEn: 'Train', emoji: '🚂', color: '#E74C3C' },
  { char: 'U', wordFr: 'Unicorne', wordEn: 'Unicorn', emoji: '🦄', color: '#FD79A8' },
  { char: 'V', wordFr: 'Voiture', wordEn: 'Car', emoji: '🚗', color: '#00CEC9' },
  { char: 'W', wordFr: 'Wagon', wordEn: 'Wagon', emoji: '🚃', color: '#FD9644' },
  { char: 'X', wordFr: 'Xylophone', wordEn: 'Xylophone', emoji: '🎵', color: '#45AAF2' },
  { char: 'Y', wordFr: 'Yaourt', wordEn: 'Yogurt', emoji: '🥣', color: '#FED330' },
  { char: 'Z', wordFr: 'Zèbre', wordEn: 'Zebra', emoji: '🦓', color: '#2D3436' },
];

export default function AlphabetActivity({ onNiaSpeak, onRewardStar }) {
  const [selectedLetter, setSelectedLetter] = useState(ALPHABET[0]);
  const [findMission, setFindMission] = useState(null);

  useEffect(() => {
    startNewMission();
  }, []);

  const startNewMission = () => {
    const randomLetter = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    setFindMission(randomLetter);
    const msg = `Coucou ! Peux-tu m'aider à trouver la lettre ${randomLetter.char} comme ${randomLetter.wordFr} ?`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleLetterClick = (item) => {
    setSelectedLetter(item);
    sounds.playPop();

    if (findMission && item.char === findMission.char) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      if (onRewardStar) onRewardStar();
      const praise = `Youpi ! Bravo mon ami ! Tu as trouvé la lettre ${item.char} ! Dis avec moi : ${item.char}... ${item.wordFr} !`;
      onNiaSpeak(praise);
      doraVoice.speakBilingual(praise, `${item.char} for ${item.wordEn}!`);
      setTimeout(startNewMission, 3500);
    } else {
      const phrase = `C'est la lettre ${item.char} ! Comme ${item.wordFr} !`;
      onNiaSpeak(phrase);
      doraVoice.speakBilingual(phrase, `${item.char} for ${item.wordEn}!`);
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header letters-theme">
        <div className="header-info">
          <span className="card-badge-icon">🔤</span>
          <div>
            <h2 className="card-main-title">L'Alphabet de A à Z</h2>
            <p className="card-subtitle">Apprends les lettres et répète avec Nia !</p>
          </div>
        </div>
        <button onClick={startNewMission} className="refresh-mission-btn">
          <RotateCcw size={18} /> Autre mission
        </button>
      </div>

      {/* Featured Big Letter Spotlight Card */}
      <div className="letter-jumbo-spotlight" style={{ borderColor: selectedLetter.color }}>
        <div className="jumbo-char" style={{ color: selectedLetter.color }}>
          {selectedLetter.char}
        </div>
        <div className="jumbo-details">
          <span className="jumbo-emoji animate-bounce-soft">{selectedLetter.emoji}</span>
          <h3 className="jumbo-word-fr">{selectedLetter.wordFr}</h3>
          <p className="jumbo-word-en">({selectedLetter.wordEn})</p>
          <button 
            onClick={() => {
              sounds.playPop();
              doraVoice.speakBilingual(
                `Lettre ${selectedLetter.char}, comme ${selectedLetter.wordFr} !`,
                `${selectedLetter.char} for ${selectedLetter.wordEn}!`
              );
            }} 
            className="listen-again-btn"
          >
            <Volume2 size={20} /> Écouter Nia
          </button>
        </div>
      </div>

      {/* Full 26 Letters Alphabet Keyboard Grid */}
      <div className="alphabet-grid-container">
        {ALPHABET.map((item) => {
          const isTarget = findMission && findMission.char === item.char;
          const isSelected = selectedLetter.char === item.char;
          return (
            <button
              key={item.char}
              onClick={() => handleLetterClick(item)}
              className={`letter-tile-btn ${isSelected ? 'selected' : ''} ${isTarget ? 'is-target-letter' : ''}`}
              style={{ backgroundColor: item.color }}
            >
              <span className="tile-char">{item.char}</span>
              <span className="tile-emoji">{item.emoji}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
