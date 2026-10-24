import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { BookOpen, Sparkles, Star, Plus } from 'lucide-react';

const STICKERS_POOL = [
  { id: 'unicorn', emoji: '🦄', name: 'Licorne Magique', fr: 'La Licorne Magique' },
  { id: 'dino', emoji: '🦖', name: 'Bébé Dino', fr: 'Le Bébé Dinosaure' },
  { id: 'rainbow', emoji: '🌈', name: 'Arc-en-ciel', fr: "L'Arc-en-ciel" },
  { id: 'rocket', emoji: '🚀', name: 'Fusée', fr: 'La Fusée' },
  { id: 'fire', emoji: '🚒', name: 'Camion Pompier', fr: 'Le Camion de Pompier' },
  { id: 'strawberry', emoji: '🍓', name: 'Fraise', fr: 'La Fraise' },
  { id: 'puppy', emoji: '🐶', name: 'Petit Chiot', fr: 'Le Petit Chiot' },
  { id: 'sun', emoji: '☀️', name: 'Soleil', fr: 'Le Soleil' },
];

export default function StickerBook({ starsCount, onNiaSpeak }) {
  const [boardStickers, setBoardStickers] = useState([
    { id: 1, emoji: '🦄', x: 25, y: 35, rot: -8 },
    { id: 2, emoji: '🌈', x: 65, y: 25, rot: 10 },
  ]);

  const addStickerToBoard = (st) => {
    sounds.playPop();
    const newSticker = {
      id: Math.random(),
      emoji: st.emoji,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 50,
      rot: (Math.random() - 0.5) * 25,
    };
    setBoardStickers([...boardStickers, newSticker]);
    confetti({ particleCount: 30, spread: 50 });

    const msg = `Super autocollant : ${st.fr} ! Tu as collé un nouvel ami sur ton cahier !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const clearBoard = () => {
    sounds.playPop();
    setBoardStickers([]);
    doraVoice.speak("Cahier tout propre ! Colle de nouveaux autocollants !");
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)' }}>
        <div className="header-info">
          <span className="card-badge-icon">📖</span>
          <div>
            <h2 className="card-main-title">Mon Carnet d'Autocollants</h2>
            <p className="card-subtitle">Colle tes récompenses magiques sur ton cahier !</p>
          </div>
        </div>
        <button onClick={clearBoard} className="refresh-mission-btn">
          Effacer la page
        </button>
      </div>

      <div className="stickers-studio-arena">
        {/* The Digital Sticker Notebook Page */}
        <div className="sticker-notebook-page">
          <div className="notebook-spiral-lines"></div>
          {boardStickers.length === 0 ? (
            <p className="empty-notebook-hint">Touche un autocollant en bas pour le coller ici ! ✨</p>
          ) : (
            boardStickers.map((item) => (
              <span
                key={item.id}
                className="board-placed-sticker animate-pop"
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  transform: `translate(-50%, -50%) rotate(${item.rot}deg)`,
                }}
                onClick={() => {
                  sounds.playPop();
                  doraVoice.speak(item.emoji);
                }}
              >
                {item.emoji}
              </span>
            ))
          )}
        </div>

        {/* Sticker Collection Tray */}
        <div className="sticker-tray-box">
          <h4 className="tray-title">Tes autocollants gagnés (Touche pour coller) :</h4>
          <div className="stickers-tray-grid">
            {STICKERS_POOL.map((st) => (
              <button
                key={st.id}
                onClick={() => addStickerToBoard(st)}
                className="sticker-pickup-btn animate-pop"
              >
                <span className="pickup-emoji animate-bounce-soft">{st.emoji}</span>
                <span className="pickup-name">{st.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
