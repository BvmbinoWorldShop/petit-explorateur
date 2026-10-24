import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Palette, RotateCcw, Sparkles, CheckCircle } from 'lucide-react';

const PALETTE = [
  { nameFr: 'Rouge', hex: '#FF4757', emoji: '🍎' },
  { nameFr: 'Bleu', hex: '#2E86DE', emoji: '🐳' },
  { nameFr: 'Jaune', hex: '#FFA502', emoji: '☀️' },
  { nameFr: 'Vert', hex: '#2ED573', emoji: '🐸' },
  { nameFr: 'Orange', hex: '#FF7F50', emoji: '🥕' },
  { nameFr: 'Violet', hex: '#9B59B6', emoji: '🍇' },
  { nameFr: 'Rose', hex: '#FF6B81', emoji: '🌸' },
  { nameFr: 'Blanc', hex: '#FFFFFF', emoji: '⚪' },
];

const COLORING_PAGES = [
  {
    id: 'duck',
    title: 'Le Petit Canard de Bain 🦆',
    parts: { body: '#ffffff', beak: '#ffffff', water: '#ffffff', bubble: '#ffffff' }
  },
  {
    id: 'firefighter',
    title: 'Le Pompier Héroïque 🚒',
    parts: { helmet: '#ffffff', coat: '#ffffff', water: '#ffffff', boots: '#ffffff' }
  },
];

export default function ColoringActivity({ onNiaSpeak, onRewardStar }) {
  const [activePage, setActivePage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(PALETTE[2]); // Yellow default
  const [pageColors, setPageColors] = useState(COLORING_PAGES[0].parts);

  useEffect(() => {
    const welcome = "Bienvenue dans l'atelier de coloriage ! Choisis une belle couleur et touche le dessin pour peindre !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  }, [activePage]);

  const selectPaletteColor = (color) => {
    setSelectedColor(color);
    sounds.playPop();
    const msg = `Couleur ${color.nameFr} ! Comme ${color.emoji} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const paintPart = (partKey) => {
    sounds.playBloop();
    const nextColors = { ...pageColors, [partKey]: selectedColor.hex };
    setPageColors(nextColors);

    // Check if fully colored (no white parts)
    const isFinished = Object.values(nextColors).every((c) => c !== '#ffffff');
    if (isFinished) {
      sounds.playSuccess();
      confetti({ particleCount: 70, spread: 60 });
      if (onRewardStar) onRewardStar();
      const win = "Wouah ! Ton coloriage est magnifique comme une œuvre d'art ! Bravo petit artiste !";
      onNiaSpeak(win);
      doraVoice.speak(win);
    }
  };

  const resetDrawing = () => {
    setPageColors(COLORING_PAGES[activePage].parts);
    doraVoice.speak("Feuille blanche ! C'est reparti pour un nouveau coloriage !");
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header coloring-theme">
        <div className="header-info">
          <span className="card-badge-icon">🎨</span>
          <div>
            <h2 className="card-main-title">Coloriage & Couleurs</h2>
            <p className="card-subtitle">Touche une couleur puis touche le dessin pour peindre !</p>
          </div>
        </div>
        <button onClick={resetDrawing} className="refresh-mission-btn">
          <RotateCcw size={18} /> Effacer
        </button>
      </div>

      <div className="coloring-studio-arena">
        {/* Drawing Canvas Area (SVG toddler line art) */}
        <div className="drawing-board">
          <h3 className="drawing-title">{COLORING_PAGES[activePage].title}</h3>

          {activePage === 0 ? (
            /* --- The Cute Rubber Duck SVG --- */
            <svg viewBox="0 0 240 220" className="coloring-svg">
              {/* Water waves */}
              <path
                d="M 20 180 Q 70 160 120 180 Q 170 200 220 180 L 220 210 L 20 210 Z"
                fill={pageColors.water}
                stroke="#2d3436"
                strokeWidth="5"
                onClick={() => paintPart('water')}
                className="paintable-part"
              />
              {/* Bubbles */}
              <circle
                cx="195"
                cy="145"
                r="16"
                fill={pageColors.bubble}
                stroke="#2d3436"
                strokeWidth="4"
                onClick={() => paintPart('bubble')}
                className="paintable-part"
              />
              <circle
                cx="45"
                cy="150"
                r="12"
                fill={pageColors.bubble}
                stroke="#2d3436"
                strokeWidth="4"
                onClick={() => paintPart('bubble')}
                className="paintable-part"
              />
              {/* Duck Body */}
              <path
                d="M 60 130 C 50 160 90 180 150 175 C 190 170 205 140 185 110 C 160 125 100 125 75 110 C 65 115 62 125 60 130 Z"
                fill={pageColors.body}
                stroke="#2d3436"
                strokeWidth="5"
                onClick={() => paintPart('body')}
                className="paintable-part"
              />
              {/* Duck Head */}
              <circle
                cx="155"
                cy="85"
                r="36"
                fill={pageColors.body}
                stroke="#2d3436"
                strokeWidth="5"
                onClick={() => paintPart('body')}
                className="paintable-part"
              />
              {/* Duck Beak */}
              <path
                d="M 185 85 Q 215 90 190 102 Z"
                fill={pageColors.beak}
                stroke="#2d3436"
                strokeWidth="4"
                onClick={() => paintPart('beak')}
                className="paintable-part"
              />
              {/* Eye */}
              <circle cx="165" cy="78" r="6" fill="#2d3436" />
              <circle cx="167" cy="76" r="2" fill="#ffffff" />
            </svg>
          ) : (
            /* --- Cute Firefighter SVG --- */
            <svg viewBox="0 0 240 220" className="coloring-svg">
              {/* Helmet */}
              <path
                d="M 70 85 C 70 45 170 45 170 85 L 180 92 L 60 92 Z"
                fill={pageColors.helmet}
                stroke="#2d3436"
                strokeWidth="5"
                onClick={() => paintPart('helmet')}
                className="paintable-part"
              />
              <circle cx="120" cy="65" r="10" fill="#f1c40f" stroke="#2d3436" strokeWidth="3" />
              {/* Face */}
              <circle cx="120" cy="115" r="32" fill="#ffeaa7" stroke="#2d3436" strokeWidth="5" />
              <circle cx="110" cy="112" r="4" fill="#2d3436" />
              <circle cx="130" cy="112" r="4" fill="#2d3436" />
              <path d="M 112 125 Q 120 133 128 125" fill="none" stroke="#2d3436" strokeWidth="3" />
              {/* Coat */}
              <path
                d="M 85 146 L 155 146 L 165 195 L 75 195 Z"
                fill={pageColors.coat}
                stroke="#2d3436"
                strokeWidth="5"
                onClick={() => paintPart('coat')}
                className="paintable-part"
              />
              {/* Hose & Water stream */}
              <path
                d="M 155 165 Q 190 150 225 155"
                fill="none"
                stroke="#636e72"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M 215 140 Q 235 150 215 160 Z"
                fill={pageColors.water}
                stroke="#2d3436"
                strokeWidth="3"
                onClick={() => paintPart('water')}
                className="paintable-part"
              />
            </svg>
          )}

          {/* Switch Drawing Button */}
          <div className="drawing-nav-row">
            <button
              onClick={() => {
                const next = (activePage + 1) % COLORING_PAGES.length;
                setActivePage(next);
                setPageColors(COLORING_PAGES[next].parts);
              }}
              className="change-drawing-btn"
            >
              🔄 Changer de dessin (Canard / Pompier)
            </button>
          </div>
        </div>

        {/* Color Palette Box */}
        <div className="palette-dock">
          <h4 className="palette-title">Palette de peinture :</h4>
          <div className="palette-grid">
            {PALETTE.map((c) => (
              <button
                key={c.nameFr}
                onClick={() => selectPaletteColor(c)}
                className={`palette-swatch-btn ${selectedColor.nameFr === c.nameFr ? 'active' : ''}`}
                style={{ backgroundColor: c.hex }}
              >
                <span className="swatch-emoji">{c.emoji}</span>
                <span className="swatch-name">{c.nameFr}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
