import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { BookOpen, Sparkles, Star, RotateCcw } from 'lucide-react';

const STICKERS_POOL = [
  { id: 'unicorn', emoji: '🦄', name: 'Licorne Magique', fr: 'La Licorne Magique' },
  { id: 'dino', emoji: '🦖', name: 'Bébé Dino', fr: 'Le Bébé Dinosaure' },
  { id: 'rainbow', emoji: '🌈', name: 'Arc-en-ciel', fr: "L'Arc-en-ciel" },
  { id: 'rocket', emoji: '🚀', name: 'Fusée', fr: 'La Fusée Spatiale' },
  { id: 'fire', emoji: '🚒', name: 'Camion Pompier', fr: 'Le Camion de Pompier' },
  { id: 'strawberry', emoji: '🍓', name: 'Fraise', fr: 'La Fraise Sucrée' },
  { id: 'puppy', emoji: '🐶', name: 'Petit Chiot', fr: 'Le Petit Chiot' },
  { id: 'sun', emoji: '☀️', name: 'Soleil', fr: 'Le Grand Soleil' },
  { id: 'butterfly', emoji: '🦋', name: 'Papillon', fr: 'Le Beau Papillon' },
  { id: 'crown', emoji: '👑', name: 'Couronne', fr: 'La Couronne Royale' },
];

const SCENES = [
  { id: 'meadow', label: '🌳 Jardin Fleuri', bg: 'linear-gradient(180deg, #dff9fb 0%, #c7ecee 65%, #badc58 100%)' },
  { id: 'beach', label: '🏖️ Plage & Océan', bg: 'linear-gradient(180deg, #74b9ff 0%, #81ecec 60%, #ffeaa7 100%)' },
  { id: 'space', label: '🚀 Galaxie Étoilée', bg: 'linear-gradient(180deg, #1e272e 0%, #341f97 65%, #5f27cd 100%)' },
  { id: 'castle', label: '🏰 Royaume Féerique', bg: 'linear-gradient(180deg, #fd79a8 0%, #fab1a0 65%, #ffeaa7 100%)' },
];

export default function StickerBook({ starsCount, onNiaSpeak }) {
  const [activeScene, setActiveScene] = useState(SCENES[0]);
  const [selectedSticker, setSelectedSticker] = useState(STICKERS_POOL[0]);
  const [boardStickers, setBoardStickers] = useState([
    { id: 1, emoji: '🦄', fr: 'La Licorne Magique', x: 28, y: 55, rot: -6 },
    { id: 2, emoji: '🌈', fr: "L'Arc-en-ciel", x: 68, y: 28, rot: 8 },
  ]);

  const addStickerToBoard = (st, customX = null, customY = null) => {
    sounds.playPop();
    setSelectedSticker(st);
    const newSticker = {
      id: Math.random(),
      emoji: st.emoji,
      fr: st.fr,
      x: customX !== null ? customX : 15 + Math.random() * 70,
      y: customY !== null ? customY : 20 + Math.random() * 60,
      rot: (Math.random() - 0.5) * 20,
    };
    setBoardStickers((prev) => [...prev, newSticker]);
    confetti({ particleCount: 25, spread: 45 });

    const msg = `Super autocollant : ${st.fr} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleBoardClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;
    addStickerToBoard(selectedSticker, Math.max(8, Math.min(92, clickX)), Math.max(10, Math.min(88, clickY)));
  };

  const clearBoard = () => {
    sounds.playPop();
    setBoardStickers([]);
    doraVoice.speak("Cahier tout propre ! Colle de nouveaux autocollants avec Tyanna !");
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)' }}>
        <div className="header-info">
          <span className="card-badge-icon">📖</span>
          <div>
            <h2 className="card-main-title">Mon Album d'Autocollants Magiques</h2>
            <p className="card-subtitle">Choisis un décor et touche la page pour coller tes autocollants !</p>
          </div>
        </div>
        <button onClick={clearBoard} className="refresh-mission-btn">
          <RotateCcw size={18} /> Effacer la page
        </button>
      </div>

      {/* Scene Background Switcher */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '10px' }}>
        {SCENES.map((sc) => (
          <button
            key={sc.id}
            onClick={() => {
              sounds.playPop();
              setActiveScene(sc);
            }}
            className={`num-mode-tab-btn ${activeScene.id === sc.id ? 'active' : ''}`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      <div className="stickers-studio-arena">
        {/* The Digital Sticker Notebook Page */}
        <div
          className="sticker-notebook-page"
          onClick={handleBoardClick}
          style={{ background: activeScene.bg, cursor: 'pointer', position: 'relative', minHeight: '260px' }}
          title="Touche ici pour coller ton autocollant !"
        >
          <div className="notebook-spiral-lines"></div>
          {boardStickers.length === 0 ? (
            <p className="empty-notebook-hint" style={{ background: 'rgba(255,255,255,0.85)', padding: '8px 16px', borderRadius: '999px' }}>
              👆 Touche ici ou choisis un autocollant en bas pour le coller ! ✨
            </p>
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
                onClick={(e) => {
                  e.stopPropagation();
                  sounds.playPop();
                  doraVoice.speak(item.fr || item.emoji);
                }}
              >
                {item.emoji}
              </span>
            ))
          )}
        </div>

        {/* Sticker Collection Tray */}
        <div className="sticker-tray-box">
          <h4 className="tray-title">
            Autocollant actif : {selectedSticker.emoji} <strong>{selectedSticker.name}</strong> (Touche pour coller) :
          </h4>
          <div className="stickers-tray-grid">
            {STICKERS_POOL.map((st) => (
              <button
                key={st.id}
                onClick={() => addStickerToBoard(st)}
                className="sticker-pickup-btn animate-pop"
                style={{
                  border: selectedSticker.id === st.id ? '3px solid #f39c12' : undefined,
                  background: selectedSticker.id === st.id ? '#fff9db' : undefined,
                }}
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
