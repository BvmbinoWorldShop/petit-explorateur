import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Apple, Sparkles } from 'lucide-react';

const FRUITS_DATA = [
  { id: 'apple', nameFr: 'La Pomme', nameEn: 'Apple', emoji: '🍎', color: '#ff4757', taste: 'C\'est croquant et sucré !' },
  { id: 'banana', nameFr: 'La Banane', nameEn: 'Banana', emoji: '🍌', color: '#ffa502', taste: 'C\'est doux et jaune !' },
  { id: 'strawberry', nameFr: 'La Fraise', nameEn: 'Strawberry', emoji: '🍓', color: '#ff6b81', taste: 'C\'est tout rouge et parfumé !' },
  { id: 'orange', nameFr: 'L\'Orange', nameEn: 'Orange', emoji: '🍊', color: '#ff7f50', taste: 'Plein de bonne vitamine C !' },
  { id: 'grape', nameFr: 'Le Raisin', nameEn: 'Grapes', emoji: '🍇', color: '#9b59b6', taste: 'De petites billes violettes à croquer !' },
  { id: 'watermelon', nameFr: 'La Pastèque', nameEn: 'Watermelon', emoji: '🍉', color: '#2ed573', taste: 'C\'est frais et plein d\'eau !' },
  { id: 'lemon', nameFr: 'Le Citron', nameEn: 'Lemon', emoji: '🍋', color: '#ffd32a', taste: 'Ouuh, ça pique un peu la langue !' },
  { id: 'pear', nameFr: 'La Poire', nameEn: 'Pear', emoji: '🍐', color: '#7bed9f', taste: 'C\'est juteux et fondant !' },
];

export default function FruitsActivity({ onTeacherPrompt }) {
  const [selectedFruit, setSelectedFruit] = useState(FRUITS_DATA[0]);

  const handleFruitClick = (f) => {
    setSelectedFruit(f);
    sounds.playPop();
    const phrase = `Voici ${f.nameFr} ! ${f.taste}`;
    onTeacherPrompt(phrase);
    teacher.speakBilingual(phrase, f.nameEn);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">
          <Apple className="activity-icon" /> Le Panier de Fruits 🍎
        </h2>
        <p className="activity-subtitle">Touche un fruit pour le goûter avec les yeux et l'entendre !</p>
      </div>

      {/* Fruit showcase */}
      <div className="fruit-showcase" style={{ borderColor: selectedFruit.color }}>
        <span className="showcase-emoji animate-bounce-soft">{selectedFruit.emoji}</span>
        <h3 className="showcase-name-fr">{selectedFruit.nameFr}</h3>
        <p className="showcase-name-en">({selectedFruit.nameEn})</p>
        <div className="taste-badge">{selectedFruit.taste}</div>
      </div>

      {/* Fruits Grid */}
      <div className="fruits-grid">
        {FRUITS_DATA.map((f) => (
          <button
            key={f.id}
            onClick={() => handleFruitClick(f)}
            className={`fruit-card ${selectedFruit.id === f.id ? 'active-fruit' : ''}`}
            style={{ borderColor: f.color }}
          >
            <span className="fruit-card-emoji">{f.emoji}</span>
            <span className="fruit-card-name-fr">{f.nameFr}</span>
            <span className="fruit-card-name-en">({f.nameEn})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
