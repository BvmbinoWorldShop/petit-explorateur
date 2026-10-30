import React from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Sparkles, Shirt, Check } from 'lucide-react';
import TyannaCharacter from './TyannaCharacter';

const HATS = [
  { id: 'crown', label: 'Couronne Dorée', emoji: '👑', praise: "Quelle jolie reine avec ma couronne dorée !" },
  { id: 'firefighter', label: 'Casque Pompier', emoji: '🚒', praise: "Prête pour éteindre le feu avec mon casque de pompier !" },
  { id: 'chef', label: 'Toque de Chef', emoji: '👩‍🍳', praise: "En cuisine pour préparer une bonne soupe chaude !" },
  { id: 'bow', label: 'Nœud Rose', emoji: '🎀', praise: "J'adore ce joli nœud rose dans mes boucles !" },
  { id: 'glasses', label: 'Lunettes Cool', emoji: '🕶️', praise: "Trop stylée avec mes lunettes de soleil !" },
  { id: 'none', label: 'Boucles Naturelles', emoji: '🌸', praise: "Mes belles boucles afro au naturel !" },
];

export default function NiaDressingRoom({ currentAccessory, onSelectAccessory, onNiaSpeak }) {
  const handlePickHat = (hat) => {
    sounds.playSuccess();
    onSelectAccessory(hat.id);
    confetti({ particleCount: 40, spread: 55 });
    onNiaSpeak(hat.praise);
    doraVoice.speak(hat.praise);
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #fd79a8, #e84393)' }}>
        <div className="header-info">
          <span className="card-badge-icon">👑</span>
          <div>
            <h2 className="card-main-title">Le Dressing Magique de Tyanna</h2>
            <p className="card-subtitle">Choisis un joli chapeau ou accessoire pour habiller Tyanna !</p>
          </div>
        </div>
      </div>

      <div className="dressing-room-arena" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        {/* Live Mirror Preview of Tyanna so kids see the outfit immediately */}
        <div style={{ background: 'linear-gradient(180deg, #fff0f6 0%, #ffe3ec 100%)', border: '4px solid #ff6b81', borderRadius: '26px', padding: '14px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 8px 20px rgba(232,67,147,0.18)' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#e84393', marginBottom: '4px' }}>✨ MIROIR DE TYANNA ✨</span>
          <div style={{ width: '130px', height: '175px', display: 'flex', justifyContent: 'center' }}>
            <TyannaCharacter
              message={null}
              accessory={currentAccessory}
              size="medium"
            />
          </div>
        </div>

        <p className="dressing-instruction" style={{ margin: 0 }}>Touche un accessoire pour déguiser Tyanna :</p>
        <div className="dressing-hats-grid" style={{ width: '100%' }}>
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
