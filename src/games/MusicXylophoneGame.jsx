import React, { useState } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Music, Sparkles } from 'lucide-react';

const NOTES = [
  { note: 'DO', freq: 261.63, color: '#FF7675', name: 'Do Rouge' },
  { note: 'RÉ', freq: 293.66, color: '#FFA502', name: 'Ré Orange' },
  { note: 'MI', freq: 329.63, color: '#FFD32A', name: 'Mi Jaune' },
  { note: 'FA', freq: 349.23, color: '#2ED573', name: 'Fa Vert' },
  { note: 'SOL', freq: 392.00, color: '#1E90FF', name: 'Sol Bleu' },
  { note: 'LA', freq: 440.00, color: '#3742FA', name: 'La Indigo' },
  { note: 'SI', freq: 493.88, color: '#9B59B6', name: 'Si Violet' },
  { note: 'DO', freq: 523.25, color: '#FF6B81', name: 'Do Rose' },
];

export default function MusicXylophoneGame({ onNiaSpeak }) {
  const [activeNote, setActiveNote] = useState(null);

  const playNote = (item) => {
    sounds.playMusicalNote(item.freq);
    setActiveNote(item.note);
    setTimeout(() => setActiveNote(null), 300);

    confetti({
      colors: [item.color],
      particleCount: 15,
      spread: 45,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #a29bfe, #6c5ce7)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🎵</span>
          <div>
            <h2 className="card-main-title">Le Xylophone Musical Arc-en-Ciel</h2>
            <p className="card-subtitle">Touche les lames de couleur pour jouer de la musique !</p>
          </div>
        </div>
      </div>

      <div className="xylophone-arena">
        <p className="xylophone-hint">Joue tes propres mélodies avec Nia ! 🎶</p>

        {/* 8 Rainbow Xylophone Keys */}
        <div className="xylophone-keys-container">
          {NOTES.map((item, idx) => (
            <button
              key={idx}
              onClick={() => playNote(item)}
              className={`xylo-bar-btn ${activeNote === item.note ? 'is-struck' : ''}`}
              style={{
                backgroundColor: item.color,
                height: `${220 - idx * 12}px`, // realistic descending lengths
              }}
            >
              <span className="xylo-bolt top"></span>
              <span className="xylo-note-label">{item.note}</span>
              <span className="xylo-bolt bottom"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
