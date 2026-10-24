import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import { Sparkles, Type } from 'lucide-react';

const LETTERS_DATA = [
  { letter: 'A', wordFr: 'Avion', wordEn: 'Airplane', emoji: '✈️', color: '#ff6b6b' },
  { letter: 'B', wordFr: 'Ballon', wordEn: 'Ball', emoji: '⚽', color: '#4dabf7' },
  { letter: 'C', wordFr: 'Chat', wordEn: 'Cat', emoji: '🐱', color: '#ffd43b' },
  { letter: 'D', wordFr: 'Dauphin', wordEn: 'Dolphin', emoji: '🐬', color: '#38d9a9' },
  { letter: 'E', wordFr: 'Éléphant', wordEn: 'Elephant', emoji: '🐘', color: '#da77f2' },
  { letter: 'F', wordFr: 'Fleur', wordEn: 'Flower', emoji: '🌸', color: '#ff922b' },
  { letter: 'G', wordFr: 'Girafe', wordEn: 'Giraffe', emoji: '🦒', color: '#fcc419' },
  { letter: 'H', wordFr: 'Hibou', wordEn: 'Owl', emoji: '🦉', color: '#a9e34b' },
  { letter: 'I', wordFr: 'Île', wordEn: 'Island', emoji: '🏝️', color: '#20c997' },
  { letter: 'J', wordFr: 'Jus', wordEn: 'Juice', emoji: '🧃', color: '#ff6b6b' },
  { letter: 'K', wordFr: 'Koala', wordEn: 'Koala', emoji: '🐨', color: '#845ef7' },
  { letter: 'L', wordFr: 'Lion', wordEn: 'Lion', emoji: '🦁', color: '#f76707' },
  { letter: 'M', wordFr: 'Maison', wordEn: 'House', emoji: '🏠', color: '#5c7cfa' },
  { letter: 'N', wordFr: 'Nuage', wordEn: 'Cloud', emoji: '☁️', color: '#3bc9db' },
  { letter: 'O', wordFr: 'Oiseau', wordEn: 'Bird', emoji: '🐦', color: '#fab005' },
  { letter: 'P', wordFr: 'Papillon', wordEn: 'Butterfly', emoji: '🦋', color: '#e599f7' },
  { letter: 'Q', wordFr: 'Quatre', wordEn: 'Four', emoji: '4️⃣', color: '#69db7c' },
  { letter: 'R', wordFr: 'Robot', wordEn: 'Robot', emoji: '🤖', color: '#74c0fc' },
  { letter: 'S', wordFr: 'Soleil', wordEn: 'Sun', emoji: '☀️', color: '#ffd43b' },
  { letter: 'T', wordFr: 'Train', wordEn: 'Train', emoji: '🚂', color: '#ff8787' },
  { letter: 'U', wordFr: 'Unicorne', wordEn: 'Unicorn', emoji: '🦄', color: '#cc5de8' },
  { letter: 'V', wordFr: 'Voiture', wordEn: 'Car', emoji: '🚗', color: '#20c997' },
  { letter: 'W', wordFr: 'Wagon', wordEn: 'Wagon', emoji: '🚃', color: '#f783ac' },
  { letter: 'X', wordFr: 'Xylophone', wordEn: 'Xylophone', emoji: '🎵', color: '#4dabf7' },
  { letter: 'Y', wordFr: 'Yaourt', wordEn: 'Yogurt', emoji: '🥣', color: '#ffe066' },
  { letter: 'Z', wordFr: 'Zèbre', wordEn: 'Zebra', emoji: '🦓', color: '#adb5bd' },
];

export default function LettersActivity({ onTeacherPrompt }) {
  const [activeLetter, setActiveLetter] = useState(LETTERS_DATA[0]);

  const selectLetter = (item) => {
    setActiveLetter(item);
    sounds.playPop();
    const phrase = `${item.letter} ! Comme ${item.wordFr} !`;
    onTeacherPrompt(phrase);
    teacher.speakBilingual(phrase, `${item.letter} for ${item.wordEn}!`);
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">
          <Type className="activity-icon" /> L'Alphabet Magique 🔤
        </h2>
        <p className="activity-subtitle">Touche une lettre pour l'écouter avec la maîtresse !</p>
      </div>

      {/* Featured Big Letter Showcase */}
      <div 
        className="letter-spotlight"
        style={{ borderColor: activeLetter.color }}
      >
        <span className="big-letter" style={{ color: activeLetter.color }}>
          {activeLetter.letter}
        </span>
        <div className="letter-word-info">
          <span className="word-emoji">{activeLetter.emoji}</span>
          <h3 className="word-fr">{activeLetter.wordFr}</h3>
          <p className="word-en">({activeLetter.wordEn})</p>
        </div>
      </div>

      {/* Alphabet grid */}
      <div className="letters-keyboard-grid">
        {LETTERS_DATA.map((item) => (
          <button
            key={item.letter}
            onClick={() => selectLetter(item)}
            className={`letter-key ${activeLetter.letter === item.letter ? 'active-key' : ''}`}
            style={{ backgroundColor: item.color }}
          >
            <span className="key-char">{item.letter}</span>
            <span className="key-tiny-emoji">{item.emoji}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
