import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Palette, Sparkles } from 'lucide-react';

const COLORS_DATA = [
  { nameFr: 'Rouge', nameEn: 'Red', hex: '#FF4757', emoji: '🍎', sampleFr: 'comme une pomme' },
  { nameFr: 'Bleu', nameEn: 'Blue', hex: '#2E86DE', emoji: '🐳', sampleFr: 'comme la baleine' },
  { nameFr: 'Jaune', nameEn: 'Yellow', hex: '#FFA502', emoji: '☀️', sampleFr: 'comme le soleil' },
  { nameFr: 'Vert', nameEn: 'Green', hex: '#2ED573', emoji: '🐸', sampleFr: 'comme la grenouille' },
  { nameFr: 'Orange', nameEn: 'Orange', hex: '#FF7F50', emoji: '🥕', sampleFr: 'comme la carotte' },
  { nameFr: 'Violet', nameEn: 'Purple', hex: '#9B59B6', emoji: '🍇', sampleFr: 'comme le raisin' },
  { nameFr: 'Rose', nameEn: 'Pink', hex: '#FF6B81', emoji: '🌸', sampleFr: 'comme la fleur' },
  { nameFr: 'Marron', nameEn: 'Brown', hex: '#8B4513', emoji: '🐻', sampleFr: 'comme le nounours' },
];

export default function ColorsActivity({ onTeacherPrompt }) {
  const [selectedColor, setSelectedColor] = useState(COLORS_DATA[0]);

  const handleColorClick = (c) => {
    setSelectedColor(c);
    sounds.playPop();
    const phrase = `C'est le ${c.nameFr} ! ${c.emoji} ${c.sampleFr} !`;
    onTeacherPrompt(phrase);
    teacher.speakBilingual(phrase, `${c.nameEn}!`);
    confetti({
      colors: [c.hex],
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">
          <Palette className="activity-icon" /> Découverte des Couleurs 🎨
        </h2>
        <p className="activity-subtitle">Touche une couleur pour l'entendre et voir la magie !</p>
      </div>

      {/* Main active showcase */}
      <div 
        className="color-spotlight"
        style={{ backgroundColor: selectedColor.hex }}
      >
        <div className="spotlight-content">
          <span className="spotlight-emoji">{selectedColor.emoji}</span>
          <h3 className="spotlight-name-fr">{selectedColor.nameFr}</h3>
          <p className="spotlight-name-en">({selectedColor.nameEn})</p>
          <span className="spotlight-hint">{selectedColor.sampleFr}</span>
        </div>
      </div>

      {/* Toddler Color Palette Grid */}
      <div className="color-palette-grid">
        {COLORS_DATA.map((c) => (
          <button
            key={c.nameFr}
            onClick={() => handleColorClick(c)}
            className={`color-btn ${selectedColor.nameFr === c.nameFr ? 'selected' : ''}`}
            style={{ backgroundColor: c.hex }}
          >
            <span className="color-btn-emoji">{c.emoji}</span>
            <span className="color-btn-label">{c.nameFr}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
