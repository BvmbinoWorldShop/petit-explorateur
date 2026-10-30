import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Palette, RotateCcw, Sparkles, Wand2 } from 'lucide-react';

const PALETTE = [
  { nameFr: 'Rouge', hex: '#FF4757', emoji: '🍎' },
  { nameFr: 'Bleu', hex: '#1E90FF', emoji: '🐳' },
  { nameFr: 'Jaune', hex: '#FFD32A', emoji: '☀️' },
  { nameFr: 'Vert', hex: '#2ED573', emoji: '🐸' },
  { nameFr: 'Orange', hex: '#FF7F50', emoji: '🥕' },
  { nameFr: 'Violet', hex: '#9B59B6', emoji: '🍇' },
  { nameFr: 'Rose', hex: '#FF6B81', emoji: '🌸' },
  { nameFr: 'Turquoise', hex: '#00D2D3', emoji: '🐬' },
  { nameFr: 'Doré', hex: '#F39C12', emoji: '👑' },
  { nameFr: 'Blanc', hex: '#FFFFFF', emoji: '⚪' },
];

const COLORING_PAGES = [
  {
    id: 'duck',
    emoji: '🦆',
    title: 'Le Petit Canard Royal',
    parts: { body: '#ffffff', wing: '#ffffff', beak: '#ffffff', crown: '#ffffff', water: '#ffffff', bubble: '#ffffff' }
  },
  {
    id: 'firefighter',
    emoji: '🚒',
    title: 'Le Camion de Pompier',
    parts: { body: '#ffffff', cabin: '#ffffff', ladder: '#ffffff', siren: '#ffffff', wheels: '#ffffff', water: '#ffffff' }
  },
  {
    id: 'unicorn',
    emoji: '🦄',
    title: 'La Licorne Magique',
    parts: { body: '#ffffff', mane: '#ffffff', horn: '#ffffff', tail: '#ffffff', cloud: '#ffffff', star: '#ffffff' }
  },
  {
    id: 'butterfly',
    emoji: '🦋',
    title: 'Le Papillon Arc-en-Ciel',
    parts: { topWings: '#ffffff', bottomWings: '#ffffff', spots: '#ffffff', body: '#ffffff', sun: '#ffffff', flower: '#ffffff' }
  },
];

export default function ColoringActivity({ onNiaSpeak, onRewardStar }) {
  const [activePage, setActivePage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(PALETTE[2]); // Yellow default
  const [pageColors, setPageColors] = useState(COLORING_PAGES[0].parts);

  useEffect(() => {
    const page = COLORING_PAGES[activePage];
    const welcome = `Colorions ${page.title} ! Touche une couleur en bas puis touche le dessin !`;
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  }, [activePage]);

  const selectPaletteColor = (color) => {
    setSelectedColor(color);
    sounds.playPop();
    const msg = `Couleur ${color.nameFr} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const paintPart = (partKey) => {
    sounds.playPop();
    const nextColors = { ...pageColors, [partKey]: selectedColor.hex };
    setPageColors(nextColors);

    const isFinished = Object.values(nextColors).every((c) => c !== '#ffffff');
    if (isFinished) {
      sounds.playSuccess();
      confetti({ particleCount: 75, spread: 65 });
      if (onRewardStar) onRewardStar();
      const win = `Wouah ! ${COLORING_PAGES[activePage].title} est tout colorié ! Bravo petit artiste !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
    }
  };

  const handleMagicRainbowFill = () => {
    sounds.playSuccess();
    const brightColors = PALETTE.filter((p) => p.hex !== '#FFFFFF');
    const currentParts = COLORING_PAGES[activePage].parts;
    const filled = {};
    Object.keys(currentParts).forEach((k, idx) => {
      filled[k] = brightColors[(idx + Math.floor(Math.random() * brightColors.length)) % brightColors.length].hex;
    });
    setPageColors(filled);
    confetti({ particleCount: 70, spread: 70 });
    if (onRewardStar) onRewardStar();
    const msg = "Abracadabra ! Couleurs arc-en-ciel magiques avec Tyanna !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const resetDrawing = () => {
    sounds.playPop();
    setPageColors(COLORING_PAGES[activePage].parts);
    doraVoice.speak("Feuille toute blanche ! C'est reparti !");
  };

  const totalParts = Object.keys(pageColors).length;
  const coloredCount = Object.values(pageColors).filter((c) => c !== '#ffffff').length;

  return (
    <div className="center-activity-card">
      <div className="activity-card-header coloring-theme">
        <div className="header-info">
          <span className="card-badge-icon">🎨</span>
          <div>
            <h2 className="card-main-title">Atelier Coloriage Magique</h2>
            <p className="card-subtitle">Choisis ton dessin, touche un pot de peinture et colorie avec Tyanna !</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handleMagicRainbowFill}
            className="refresh-mission-btn"
            style={{ background: 'linear-gradient(135deg, #a55eea, #fd79a8)', color: '#fff', border: '2px solid #fff' }}
          >
            <Wand2 size={18} /> Magie Arc-en-Ciel
          </button>
          <button onClick={resetDrawing} className="refresh-mission-btn">
            <RotateCcw size={18} /> Effacer
          </button>
        </div>
      </div>

      {/* Drawing Selector Thumbnail Bar */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '8px' }}>
        {COLORING_PAGES.map((page, idx) => (
          <button
            key={page.id}
            onClick={() => {
              sounds.playPop();
              setActivePage(idx);
              setPageColors(COLORING_PAGES[idx].parts);
            }}
            className={`num-mode-tab-btn ${activePage === idx ? 'active' : ''}`}
          >
            <span style={{ fontSize: '1.3rem' }}>{page.emoji}</span> {page.title}
          </button>
        ))}
      </div>

      <div className="coloring-studio-arena">
        {/* Drawing Canvas Area */}
        <div className="drawing-board">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '340px' }}>
            <h3 className="drawing-title" style={{ margin: 0 }}>{COLORING_PAGES[activePage].title}</h3>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, background: '#e3f2fd', color: '#0984e3', padding: '4px 10px', borderRadius: '999px' }}>
              🎨 {coloredCount} / {totalParts}
            </span>
          </div>

          {/* PAGE 0: ROYAL RUBBER DUCK */}
          {activePage === 0 && (
            <svg viewBox="0 0 240 220" className="coloring-svg">
              <path
                d="M 20 180 Q 70 160 120 180 Q 170 200 220 180 L 220 210 L 20 210 Z"
                fill={pageColors.water}
                stroke="#2d3436"
                strokeWidth="4.5"
                onClick={() => paintPart('water')}
                className="paintable-part"
              />
              <circle cx="198" cy="145" r="16" fill={pageColors.bubble} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('bubble')} className="paintable-part" />
              <circle cx="42" cy="148" r="13" fill={pageColors.bubble} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('bubble')} className="paintable-part" />
              <path
                d="M 60 130 C 50 165 90 182 150 176 C 192 172 205 140 185 112 C 160 125 100 125 75 110 C 65 115 62 125 60 130 Z"
                fill={pageColors.body}
                stroke="#2d3436"
                strokeWidth="4.5"
                onClick={() => paintPart('body')}
                className="paintable-part"
              />
              <path
                d="M 92 132 C 92 118 138 118 142 138 C 142 156 96 156 92 132 Z"
                fill={pageColors.wing}
                stroke="#2d3436"
                strokeWidth="4"
                onClick={() => paintPart('wing')}
                className="paintable-part"
              />
              <circle cx="155" cy="86" r="34" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
              <polygon points="136,56 144,34 155,46 166,34 174,56" fill={pageColors.crown} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('crown')} className="paintable-part" />
              <path d="M 185 82 Q 222 88 188 104 Z" fill={pageColors.beak} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('beak')} className="paintable-part" />
              <circle cx="165" cy="78" r="5.5" fill="#2d3436" pointerEvents="none" />
              <circle cx="167" cy="76" r="2" fill="#ffffff" pointerEvents="none" />
            </svg>
          )}

          {/* PAGE 1: FIRE TRUCK */}
          {activePage === 1 && (
            <svg viewBox="0 0 240 220" className="coloring-svg">
              {/* Ladder */}
              <rect x="35" y="55" width="120" height="18" rx="6" fill={pageColors.ladder} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('ladder')} className="paintable-part" />
              {/* Siren */}
              <path d="M 168 75 C 168 56 192 56 192 75 Z" fill={pageColors.siren} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('siren')} className="paintable-part" />
              {/* Truck Main Body */}
              <rect x="28" y="80" width="125" height="82" rx="10" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
              {/* Cabin */}
              <path d="M 153 95 L 195 95 L 212 125 L 212 162 L 153 162 Z" fill={pageColors.cabin} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('cabin')} className="paintable-part" />
              <rect x="164" y="104" width="32" height="24" rx="4" fill="#dff9fb" stroke="#2d3436" strokeWidth="3.5" pointerEvents="none" />
              {/* Water Spray */}
              <path d="M 155 58 Q 205 30 228 52 Q 205 74 155 58 Z" fill={pageColors.water} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('water')} className="paintable-part" />
              {/* Wheels */}
              <circle cx="68" cy="166" r="22" fill={pageColors.wheels} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('wheels')} className="paintable-part" />
              <circle cx="178" cy="166" r="22" fill={pageColors.wheels} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('wheels')} className="paintable-part" />
              <circle cx="68" cy="166" r="8" fill="#dfe6e9" stroke="#2d3436" strokeWidth="3" pointerEvents="none" />
              <circle cx="178" cy="166" r="8" fill="#dfe6e9" stroke="#2d3436" strokeWidth="3" pointerEvents="none" />
            </svg>
          )}

          {/* PAGE 2: MAGIC UNICORN */}
          {activePage === 2 && (
            <svg viewBox="0 0 240 220" className="coloring-svg">
              {/* Cloud */}
              <path d="M 35 185 C 20 185 20 160 45 160 C 55 145 85 145 95 160 C 120 145 155 145 170 160 C 195 160 195 185 175 185 Z" fill={pageColors.cloud} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('cloud')} className="paintable-part" />
              {/* Tail */}
              <path d="M 58 115 C 22 105 18 145 52 145 Z" fill={pageColors.tail} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('tail')} className="paintable-part" />
              {/* Unicorn Body & Head */}
              <rect x="60" y="102" width="88" height="52" rx="24" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
              <circle cx="148" cy="82" r="28" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
              {/* Mane */}
              <path d="M 118 65 C 98 65 98 98 122 102 Z" fill={pageColors.mane} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('mane')} className="paintable-part" />
              {/* Horn */}
              <polygon points="155,56 186,22 170,66" fill={pageColors.horn} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('horn')} className="paintable-part" />
              {/* Star */}
              <polygon points="48,36 54,50 68,50 56,58 60,72 48,64 36,72 40,58 28,50 42,50" fill={pageColors.star} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('star')} className="paintable-part" />
              <circle cx="156" cy="78" r="4.5" fill="#2d3436" pointerEvents="none" />
            </svg>
          )}

          {/* PAGE 3: RAINBOW BUTTERFLY */}
          {activePage === 3 && (
            <svg viewBox="0 0 240 220" className="coloring-svg">
              {/* Sun */}
              <circle cx="38" cy="38" r="20" fill={pageColors.sun} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('sun')} className="paintable-part" />
              {/* Top Wings */}
              <path d="M 115 95 C 55 25 25 85 95 118 Z" fill={pageColors.topWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('topWings')} className="paintable-part" />
              <path d="M 125 95 C 185 25 215 85 145 118 Z" fill={pageColors.topWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('topWings')} className="paintable-part" />
              {/* Bottom Wings */}
              <path d="M 112 118 C 45 125 55 185 112 152 Z" fill={pageColors.bottomWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('bottomWings')} className="paintable-part" />
              <path d="M 128 118 C 195 125 185 185 128 152 Z" fill={pageColors.bottomWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('bottomWings')} className="paintable-part" />
              {/* Wing Spots */}
              <circle cx="76" cy="84" r="14" fill={pageColors.spots} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('spots')} className="paintable-part" />
              <circle cx="164" cy="84" r="14" fill={pageColors.spots} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('spots')} className="paintable-part" />
              {/* Butterfly Body */}
              <rect x="111" y="68" width="18" height="96" rx="9" fill={pageColors.body} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('body')} className="paintable-part" />
              {/* Flower */}
              <circle cx="200" cy="182" r="18" fill={pageColors.flower} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('flower')} className="paintable-part" />
            </svg>
          )}
        </div>

        {/* Color Palette Box */}
        <div className="palette-dock">
          <h4 className="palette-title">Touche un pot de peinture ({selectedColor.nameFr} {selectedColor.emoji}) :</h4>
          <div className="palette-grid">
            {PALETTE.map((c) => (
              <button
                key={c.nameFr}
                onClick={() => selectPaletteColor(c)}
                className={`palette-swatch-btn ${selectedColor.nameFr === c.nameFr ? 'active' : ''}`}
                style={{ backgroundColor: c.hex, color: c.hex === '#FFFFFF' || c.hex === '#FFD32A' ? '#2d3436' : '#ffffff' }}
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
