import React from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Sparkles, Shirt, Check } from 'lucide-react';

const HATS = [
  { id: 'crown', label: 'Couronne Dorée', emoji: '👑', praise: "Quelle jolie reine avec sa couronne dorée !" },
  { id: 'firefighter', label: 'Casque Pompier', emoji: '🚒', praise: "Prête pour éteindre le feu avec mon casque de pompier !" },
  { id: 'chef', label: 'Toque de Chef', emoji: '👩‍🍳', praise: "En cuisine pour préparer une bonne soupe !" },
  { id: 'bow', label: 'Nœud Rose', emoji: '🎀', praise: "J'adore ce joli nœud rose dans mes boucles !" },
  { id: 'glasses', label: 'Lunettes Cool', emoji: '🕶️', praise: "Trop stylée avec mes lunettes de soleil !" },
  { id: 'none', label: 'Boucles Naturelles', emoji: '🌸', praise: "Mes belles boucles afro au vent !" },
];

export default function NiaDressingRoom({ currentAccessory, onSelectAccessory, onNiaSpeak }) {
  const handlePickHat = (hat) => {
    sounds.playSuccess();
    onSelectAccessory(hat.id);
    confetti({ particleCount: 30, spread: 50 });
    onNiaSpeak(hat.praise);
    doraVoice.speak(hat.praise);
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #fd79a8, #e84393)' }}>
        <div className="header-info">
          <span className="card-badge-icon">👑</span>
          <div>
            <h2 className="card-main-title">Le Dressing de Nia</h2>
            <p className="card-subtitle">Choisis un joli chapeau ou accessoire pour Nia !</p>
          </div>
        </div>
      </div>

      <div className="dressing-room-arena">
        <p className="dressing-instruction">Touche un accessoire pour habiller Nia :</p>
        <div className="dressing-hats-grid">
          {HATS.map((hat) => {
            const isSelected = currentAccessory === hat.id;
            return (
              <button
                key={hat.id}
                onClick={() => handlePickHat(hat)}
                className={`hat-choice-card ${isSelected ? 'active-hat' : ''}`}
              >
                <span className="hat-emoji animate-bounce-soft">{hat.emoji}</span>
                <span className="hat-name">{hat.label}</span>
                {isSelected && <span className="hat-check"><Check size={18} /></span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
