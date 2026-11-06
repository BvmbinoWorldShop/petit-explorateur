import React, { useState, useEffect, useRef } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { ALPHABET_A_TO_Z } from './AlphabetActivity';
import {
  Palette,
  RotateCcw,
  Sparkles,
  Wand2,
  Brush,
  Eraser,
  Undo2,
  Download,
  Star,
  CheckCircle2,
  Smile
} from 'lucide-react';

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
  { nameFr: 'Vert Pomme', hex: '#A8E6CF', emoji: '🍏' },
  { nameFr: 'Chocolat', hex: '#795548', emoji: '🍫' },
  { nameFr: 'Blanc', hex: '#FFFFFF', emoji: '⚪' },
];

const STICKER_STAMPS = [
  { id: 'star', emoji: '⭐', label: 'Étoile' },
  { id: 'flower', emoji: '🌸', label: 'Fleur' },
  { id: 'crown', emoji: '👑', label: 'Couronne' },
  { id: 'car', emoji: '🚗', label: 'Voiture' },
  { id: 'puppy', emoji: '🐶', label: 'Chiot' },
  { id: 'kitty', emoji: '🐱', label: 'Chat' },
  { id: 'rainbow', emoji: '🌈', label: 'Arc-en-ciel' },
  { id: 'balloon', emoji: '🎈', label: 'Ballon' },
  { id: 'heart', emoji: '❤️', label: 'Cœur' },
  { id: 'apple', emoji: '🍎', label: 'Pomme' },
  { id: 'butterfly', emoji: '🦋', label: 'Papillon' },
  { id: 'rocket', emoji: '🚀', label: 'Fusée' },
];

const COLORING_PAGES = [
  {
    id: 'puppy',
    emoji: '🐶',
    title: 'Le Chiot Joueur',
    parts: { body: '#ffffff', ears: '#ffffff', collar: '#ffffff', bone: '#ffffff', ball: '#ffffff', grass: '#ffffff' }
  },
  {
    id: 'car',
    emoji: '🚗',
    title: 'La Belle Voiture de Course',
    parts: { body: '#ffffff', roof: '#ffffff', wheels: '#ffffff', window: '#ffffff', light: '#ffffff', flag: '#ffffff' }
  },
  {
    id: 'flower',
    emoji: '🌸',
    title: 'La Grande Fleur & l\'Abeille',
    parts: { petals: '#ffffff', center: '#ffffff', stem: '#ffffff', leaf: '#ffffff', beeBody: '#ffffff', beeWings: '#ffffff' }
  },
  {
    id: 'treehouse',
    emoji: '🏡',
    title: 'La Cabane dans les Arbres',
    parts: { trunk: '#ffffff', leaves: '#ffffff', roof: '#ffffff', walls: '#ffffff', door: '#ffffff', ladder: '#ffffff' }
  },
  {
    id: 'duck',
    emoji: '🦆',
    title: 'Le Petit Canard Royal',
    parts: { body: '#ffffff', wing: '#ffffff', beak: '#ffffff', crown: '#ffffff', water: '#ffffff', bubble: '#ffffff' }
  },
  {
    id: 'butterfly',
    emoji: '🦋',
    title: 'Le Papillon Arc-en-Ciel',
    parts: { topWings: '#ffffff', bottomWings: '#ffffff', spots: '#ffffff', body: '#ffffff', sun: '#ffffff', flower: '#ffffff' }
  },
  {
    id: 'castle',
    emoji: '🏰',
    title: 'Le Château Magique',
    parts: { towers: '#ffffff', mainWall: '#ffffff', roofs: '#ffffff', gate: '#ffffff', flags: '#ffffff', cloud: '#ffffff' }
  },
];

export default function ColoringActivity({ onNiaSpeak, onRewardStar }) {
  // Activity Modes: 'freedraw' | 'coloring' | 'colorgame'
  const [activityMode, setActivityMode] = useState('freedraw');

  // Common Palette State
  const [selectedColor, setSelectedColor] = useState(PALETTE[0]); // Red default

  // Free Draw State
  const canvasRef = useRef(null);
  const canvasContainerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(14); // 6 | 14 | 26
  const [toolMode, setToolMode] = useState('brush'); // 'brush' | 'rainbow' | 'neon' | 'eraser' | 'stamp'
  const [selectedStamp, setSelectedStamp] = useState(STICKER_STAMPS[0]);
  const [rainbowHue, setRainbowHue] = useState(0);
  const [undoHistory, setUndoHistory] = useState([]);

  // Coloring Template State
  const [activePage, setActivePage] = useState(0);
  const [pageColors, setPageColors] = useState(COLORING_PAGES[0].parts);

  // Color Game State
  const [colorTarget, setColorTarget] = useState(PALETTE[2]); // Yellow
  const [colorQuizScore, setColorQuizScore] = useState(0);

  // Smooth Canvas Resizing to Match Parent Container on Mobile & Desktop
  const resizeCanvasToContainer = () => {
    const canvas = canvasRef.current;
    const container = canvasContainerRef.current;
    if (!canvas || !container) return;
    const rect = container.getBoundingClientRect();
    const newWidth = Math.floor(rect.width) || 400;
    const newHeight = window.innerWidth <= 480 ? 300 : 380;

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      if (canvas.width > 0 && canvas.height > 0) {
        tempCtx.drawImage(canvas, 0, 0);
      }

      canvas.width = newWidth;
      canvas.height = newHeight;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, newWidth, newHeight);

      if (tempCanvas.width > 0 && tempCanvas.height > 0) {
        ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight);
      }
    }
  };

  // Initialize Canvas & Window Resize Listener
  useEffect(() => {
    if (activityMode === 'freedraw') {
      resizeCanvasToContainer();
      window.addEventListener('resize', resizeCanvasToContainer);
      return () => window.removeEventListener('resize', resizeCanvasToContainer);
    }
  }, [activityMode]);

  useEffect(() => {
    if (activityMode === 'freedraw') {
      const msg = "Bienvenue dans ton atelier de dessin libre ! Choisis un pinceau, des couleurs magiques ou des autocollants !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (activityMode === 'coloring') {
      const page = COLORING_PAGES[activePage];
      const msg = `Colorions ${page.title} ! Touche un pot de peinture puis touche le dessin !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (activityMode === 'colorgame') {
      startNewColorQuiz();
    }
  }, [activityMode, activePage]);

  // Save state for undo
  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setUndoHistory((prev) => [...prev.slice(-9), data]);
  };

  const handleUndo = () => {
    if (undoHistory.length <= 1) return;
    sounds.playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const newHistory = [...undoHistory];
    newHistory.pop();
    const previous = newHistory[newHistory.length - 1];
    ctx.putImageData(previous, 0, 0);
    setUndoHistory(newHistory);
  };

  const handleClearCanvas = () => {
    sounds.playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveCanvasState();
    doraVoice.speak("Feuille toute blanche et propre ! À tes pinceaux !");
  };

  const handleSaveMasterpiece = () => {
    sounds.playSuccess();
    confetti({ particleCount: 80, spread: 70 });
    if (onRewardStar) onRewardStar();
    const msg = "Wouah ! Quel magnifique chef-d'œuvre ! Tu es un grand artiste ! Tyanna t'offre une étoile !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // Stamp or Draw Big Contour of Letter on Canvas for Toddler Coloring
  const handleSelectLetterToColor = (letter) => {
    sounds.playSuccess();
    confetti({ particleCount: 45, spread: 60 });
    const msg = `Voici la grande lettre ${letter.char} ! ${letter.rhyme}`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(msg, `Letter ${letter.char}! ${letter.wordEn}!`);

    if (activityMode === 'freedraw') {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const fontSize = Math.min(canvas.width * 0.42, 175);

        ctx.save();
        ctx.font = `900 ${fontSize}px "Fredoka", "Nunito", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Clear center area with soft white glow
        ctx.fillStyle = '#f8f9fa';
        ctx.fillText(letter.char, cx, cy);

        // Bold black contour for kids to color inside
        ctx.strokeStyle = '#2d3436';
        ctx.lineWidth = 6;
        ctx.lineJoin = 'round';
        ctx.strokeText(letter.char, cx, cy);

        // Letter emoji companion next to it
        ctx.font = '38px sans-serif';
        ctx.fillText(letter.emoji, cx + fontSize * 0.36, cy - fontSize * 0.35);
        ctx.restore();

        saveCanvasState();
      }
    }
  };

  // Canvas Drawing Pointer Handlers (Smooth Touch, Pen & Mouse)
  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
    const ctx = canvas.getContext('2d');
    const { x, y } = getCanvasCoords(e);

    if (toolMode === 'stamp') {
      sounds.playPop();
      ctx.font = `${brushSize * 2.8}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(selectedStamp.emoji, x, y);
      saveCanvasState();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);

    if (toolMode === 'eraser') {
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = brushSize * 1.8;
      ctx.shadowBlur = 0;
    } else if (toolMode === 'neon') {
      ctx.strokeStyle = selectedColor.hex;
      ctx.lineWidth = brushSize;
      ctx.shadowColor = selectedColor.hex;
      ctx.shadowBlur = 15;
    } else if (toolMode === 'rainbow') {
      const col = `hsl(${rainbowHue}, 100%, 50%)`;
      ctx.strokeStyle = col;
      ctx.lineWidth = brushSize;
      ctx.shadowBlur = 4;
      ctx.shadowColor = col;
      setRainbowHue((h) => (h + 15) % 360);
    } else {
      ctx.strokeStyle = selectedColor.hex;
      ctx.lineWidth = brushSize;
      ctx.shadowBlur = 0;
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handlePointerMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCanvasCoords(e);

    if (toolMode === 'rainbow') {
      const col = `hsl(${rainbowHue}, 100%, 50%)`;
      ctx.strokeStyle = col;
      ctx.shadowColor = col;
      setRainbowHue((h) => (h + 12) % 360);
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handlePointerUp = (e) => {
    if (isDrawing) {
      setIsDrawing(false);
      try {
        if (e && e.currentTarget) e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
      saveCanvasState();
    }
  };

  // Mode 2: Coloring Template logic
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

  // Mode 3: Color Game Logic
  const startNewColorQuiz = () => {
    const nonWhite = PALETTE.filter((c) => c.hex !== '#FFFFFF');
    const random = nonWhite[Math.floor(Math.random() * nonWhite.length)];
    setColorTarget(random);
    const msg = `Où est la couleur ${random.nameFr} ? Touche le pot de peinture ${random.nameFr} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleColorQuizAnswer = (col) => {
    if (col.nameFr === colorTarget.nameFr) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 60 });
      setColorQuizScore((s) => s + 1);
      if (onRewardStar) onRewardStar();
      const praise = `Bravo ! C'est bien la belle couleur ${col.nameFr} ! Tu as gagné une étoile !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
      setTimeout(startNewColorQuiz, 1600);
    } else {
      sounds.playBloop();
      const hint = `Ça c'est la couleur ${col.nameFr}. Cherche encore la couleur ${colorTarget.nameFr} ${colorTarget.emoji} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  return (
    <div className="center-activity-card">
      {/* Activity Card Header with 3 Sub-Modes */}
      <div className="activity-card-header coloring-theme">
        <div className="header-info">
          <span className="card-badge-icon">🎨</span>
          <div>
            <h2 className="card-main-title">L'Atelier Magique de Dessin & Couleurs</h2>
            <p className="card-subtitle">Dessine librement, colorie de superbes modèles ou joue avec les couleurs de Tyanna !</p>
          </div>
        </div>
      </div>

      {/* Main Mode Switcher: Dessin Libre | Coloriage Magique | Jeu des Couleurs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '14px' }}>
        <button
          onClick={() => {
            sounds.playPop();
            setActivityMode('freedraw');
          }}
          className={`num-mode-tab-btn ${activityMode === 'freedraw' ? 'active' : ''}`}
        >
          🖌️ Dessin Libre & Gommettes
        </button>
        <button
          onClick={() => {
            sounds.playPop();
            setActivityMode('coloring');
          }}
          className={`num-mode-tab-btn ${activityMode === 'coloring' ? 'active' : ''}`}
        >
          🎨 Coloriage de Modèles (7 Dessins)
        </button>
        <button
          onClick={() => {
            sounds.playPop();
            setActivityMode('colorgame');
          }}
          className={`num-mode-tab-btn ${activityMode === 'colorgame' ? 'active' : ''}`}
        >
          🎯 Le Jeu des Couleurs ({colorQuizScore} ⭐)
        </button>
      </div>

      {/* =========================================================================
          TAB 1: DESSIN LIBRE & PINCEAUX MAGIQUES (FREE WILL DRAWING)
         ========================================================================= */}
      {activityMode === 'freedraw' && (
        <div className="freedraw-container" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Top Control Bar: Tools, Brushes, Actions */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              background: '#f8f9fa',
              padding: '10px 14px',
              borderRadius: '20px',
              border: '2px solid #e1e8ed',
            }}
          >
            {/* Tool Selection */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  sounds.playPop();
                  setToolMode('brush');
                }}
                className={`palette-swatch-btn ${toolMode === 'brush' ? 'active' : ''}`}
                style={{ background: '#0984e3', color: '#fff', padding: '6px 12px' }}
              >
                🖌️ Classique
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  setToolMode('rainbow');
                }}
                className={`palette-swatch-btn ${toolMode === 'rainbow' ? 'active' : ''}`}
                style={{ background: 'linear-gradient(135deg, #ff7675, #feca57, #48dbfb)', color: '#fff', padding: '6px 12px' }}
              >
                🌈 Arc-en-Ciel
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  setToolMode('neon');
                }}
                className={`palette-swatch-btn ${toolMode === 'neon' ? 'active' : ''}`}
                style={{ background: '#a55eea', color: '#fff', padding: '6px 12px' }}
              >
                ✨ Néon
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  setToolMode('eraser');
                }}
                className={`palette-swatch-btn ${toolMode === 'eraser' ? 'active' : ''}`}
                style={{ background: '#747d8c', color: '#fff', padding: '6px 12px' }}
              >
                🧽 Gomme
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  setToolMode('stamp');
                }}
                className={`palette-swatch-btn ${toolMode === 'stamp' ? 'active' : ''}`}
                style={{ background: '#e84393', color: '#fff', padding: '6px 12px' }}
              >
                ⭐ Gommettes
              </button>
            </div>

            {/* Brush Sizes */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#636e72' }}>Taille :</span>
              <button
                onClick={() => setBrushSize(6)}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  border: brushSize === 6 ? '3px solid #0984e3' : '1px solid #ccc',
                  background: '#fff',
                  cursor: 'pointer',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                }}
              >
                S
              </button>
              <button
                onClick={() => setBrushSize(14)}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: brushSize === 14 ? '3px solid #0984e3' : '1px solid #ccc',
                  background: '#fff',
                  cursor: 'pointer',
                  fontWeight: 900,
                  fontSize: '0.85rem',
                }}
              >
                M
              </button>
              <button
                onClick={() => setBrushSize(26)}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  border: brushSize === 26 ? '3px solid #0984e3' : '1px solid #ccc',
                  background: '#fff',
                  cursor: 'pointer',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                }}
              >
                L
              </button>
            </div>

            {/* Actions: Undo, Clear, Save */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={handleUndo} className="refresh-mission-btn" title="Annuler">
                <Undo2 size={16} />
              </button>
              <button onClick={handleClearCanvas} className="refresh-mission-btn" title="Effacer tout">
                <RotateCcw size={16} /> Effacer
              </button>
              <button
                onClick={handleSaveMasterpiece}
                className="refresh-mission-btn"
                style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)', color: '#2d3436', border: 'none' }}
              >
                ⭐ J'ai fini !
              </button>
            </div>
          </div>

          {/* Stamp Selector Ribbon if Stamp Mode Active */}
          {toolMode === 'stamp' && (
            <div
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                padding: '8px',
                background: '#fff0f6',
                borderRadius: '16px',
                border: '2px dashed #f783ac',
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 900, color: '#d6336c', alignSelf: 'center', whiteSpace: 'nowrap' }}>
                Choisis ta gommette :
              </span>
              {STICKER_STAMPS.map((stamp) => (
                <button
                  key={stamp.id}
                  onClick={() => {
                    sounds.playPop();
                    setSelectedStamp(stamp);
                  }}
                  style={{
                    fontSize: '1.6rem',
                    background: selectedStamp.id === stamp.id ? '#ffffff' : 'transparent',
                    border: selectedStamp.id === stamp.id ? '2px solid #e84393' : 'none',
                    borderRadius: '12px',
                    padding: '4px 8px',
                    cursor: 'pointer',
                    boxShadow: selectedStamp.id === stamp.id ? '0 4px 10px rgba(232, 67, 147, 0.3)' : 'none',
                  }}
                  title={stamp.label}
                >
                  {stamp.emoji}
                </button>
              ))}
            </div>
          )}

          {/* HTML5 Interactive Touch Canvas */}
          <div
            ref={canvasContainerRef}
            style={{
              width: '100%',
              borderRadius: '24px',
              border: '4px solid #20c997',
              boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
              overflow: 'hidden',
              background: '#ffffff',
              touchAction: 'none',
              cursor: toolMode === 'stamp' ? 'copy' : 'crosshair',
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{ display: 'block', width: '100%', height: window.innerWidth <= 480 ? '300px' : '380px', touchAction: 'none' }}
            />
          </div>

          {/* Color Palette Swatches */}
          <div className="palette-dock">
            <h4 className="palette-title">Palette de peinture ({selectedColor.nameFr} {selectedColor.emoji}) :</h4>
            <div className="palette-grid">
              {PALETTE.map((c) => (
                <button
                  key={c.nameFr}
                  onClick={() => selectPaletteColor(c)}
                  className={`palette-swatch-btn ${selectedColor.nameFr === c.nameFr ? 'active' : ''}`}
                  style={{ backgroundColor: c.hex, color: c.hex === '#FFFFFF' || c.hex === '#FFD32A' || c.hex === '#A8E6CF' ? '#2d3436' : '#ffffff' }}
                >
                  <span className="swatch-emoji">{c.emoji}</span>
                  <span className="swatch-name">{c.nameFr}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 2: COLORIAGE MAGIQUE (EXPANDED TO 7 HIGH-RES TEMPLATES)
         ========================================================================= */}
      {activityMode === 'coloring' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {/* Drawing Selector Thumbnail Bar */}
          <div className="numbers-mode-switcher" style={{ marginBottom: '4px' }}>
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
                <span style={{ fontSize: '1.25rem' }}>{page.emoji}</span> {page.title}
              </button>
            ))}
          </div>

          {/* Quick Action Ribbon */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <button
              onClick={handleMagicRainbowFill}
              className="refresh-mission-btn"
              style={{ background: 'linear-gradient(135deg, #a55eea, #fd79a8)', color: '#fff', border: 'none' }}
            >
              <Wand2 size={16} /> Magie Arc-en-Ciel
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setPageColors(COLORING_PAGES[activePage].parts);
                doraVoice.speak("Feuille toute blanche ! C'est reparti !");
              }}
              className="refresh-mission-btn"
            >
              <RotateCcw size={16} /> Effacer
            </button>
          </div>

          <div className="coloring-studio-arena">
            {/* Drawing Board SVG Display */}
            <div className="drawing-board">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '360px' }}>
                <h3 className="drawing-title" style={{ margin: 0 }}>{COLORING_PAGES[activePage].title}</h3>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, background: '#e3f2fd', color: '#0984e3', padding: '4px 10px', borderRadius: '999px' }}>
                  🎨 {Object.values(pageColors).filter((c) => c !== '#ffffff').length} / {Object.keys(pageColors).length}
                </span>
              </div>

              {/* TEMPLATE 0: LE CHIOT JOUEUR 🐶 */}
              {activePage === 0 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  {/* Grass floor */}
                  <path d="M 10 190 Q 60 170 120 190 Q 180 170 230 190 L 230 215 L 10 215 Z" fill={pageColors.grass} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('grass')} className="paintable-part" />
                  {/* Ball */}
                  <circle cx="195" cy="170" r="18" fill={pageColors.ball} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('ball')} className="paintable-part" />
                  {/* Puppy Body */}
                  <ellipse cx="105" cy="135" rx="55" ry="42" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
                  {/* Head */}
                  <circle cx="145" cy="85" r="38" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
                  {/* Ears */}
                  <ellipse cx="120" cy="55" rx="14" ry="26" fill={pageColors.ears} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('ears')} className="paintable-part" transform="rotate(-20 120 55)" />
                  <ellipse cx="178" cy="65" rx="14" ry="28" fill={pageColors.ears} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('ears')} className="paintable-part" transform="rotate(25 178 65)" />
                  {/* Collar */}
                  <path d="M 125 110 Q 145 125 168 110" fill="none" stroke={pageColors.collar} strokeWidth="10" strokeLinecap="round" onClick={() => paintPart('collar')} className="paintable-part" />
                  {/* Bone */}
                  <polygon points="35,160 55,160 55,168 35,168" fill={pageColors.bone} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('bone')} className="paintable-part" />
                  {/* Eyes & Nose */}
                  <circle cx="138" cy="80" r="5" fill="#2d3436" pointerEvents="none" />
                  <circle cx="160" cy="80" r="5" fill="#2d3436" pointerEvents="none" />
                  <ellipse cx="150" cy="94" rx="7" ry="5" fill="#2d3436" pointerEvents="none" />
                </svg>
              )}

              {/* TEMPLATE 1: LA BELLE VOITURE DE COURSE 🚗 */}
              {activePage === 1 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  {/* Flag */}
                  <line x1="210" y1="40" x2="210" y2="120" stroke="#2d3436" strokeWidth="4" />
                  <polygon points="210,40 235,55 210,70" fill={pageColors.flag} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('flag')} className="paintable-part" />
                  {/* Roof & Window */}
                  <path d="M 65 110 L 95 65 L 160 65 L 180 110 Z" fill={pageColors.roof} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('roof')} className="paintable-part" />
                  <polygon points="100,72 155,72 170,105 78,105" fill={pageColors.window} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('window')} className="paintable-part" />
                  {/* Car Body */}
                  <path d="M 20 145 C 20 115 50 110 80 110 L 185 110 C 215 110 225 130 225 155 L 20 155 Z" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
                  {/* Headlight */}
                  <path d="M 215 130 Q 225 138 215 146 Z" fill={pageColors.light} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('light')} className="paintable-part" />
                  {/* Wheels */}
                  <circle cx="68" cy="160" r="22" fill={pageColors.wheels} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('wheels')} className="paintable-part" />
                  <circle cx="178" cy="160" r="22" fill={pageColors.wheels} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('wheels')} className="paintable-part" />
                  <circle cx="68" cy="160" r="8" fill="#dfe6e9" stroke="#2d3436" strokeWidth="3" pointerEvents="none" />
                  <circle cx="178" cy="160" r="8" fill="#dfe6e9" stroke="#2d3436" strokeWidth="3" pointerEvents="none" />
                </svg>
              )}

              {/* TEMPLATE 2: LA GRANDE FLEUR & L'ABEILLE 🌸 */}
              {activePage === 2 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  {/* Stem */}
                  <path d="M 120 115 Q 125 160 120 200" fill="none" stroke={pageColors.stem} strokeWidth="10" strokeLinecap="round" onClick={() => paintPart('stem')} className="paintable-part" />
                  {/* Leaf */}
                  <path d="M 124 165 C 155 145 170 175 125 185 Z" fill={pageColors.leaf} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('leaf')} className="paintable-part" />
                  {/* Flower Petals */}
                  <circle cx="120" cy="55" r="24" fill={pageColors.petals} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('petals')} className="paintable-part" />
                  <circle cx="160" cy="80" r="24" fill={pageColors.petals} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('petals')} className="paintable-part" />
                  <circle cx="150" cy="125" r="24" fill={pageColors.petals} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('petals')} className="paintable-part" />
                  <circle cx="90" cy="125" r="24" fill={pageColors.petals} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('petals')} className="paintable-part" />
                  <circle cx="80" cy="80" r="24" fill={pageColors.petals} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('petals')} className="paintable-part" />
                  {/* Center Core */}
                  <circle cx="120" cy="95" r="28" fill={pageColors.center} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('center')} className="paintable-part" />
                  {/* Little Bee */}
                  <ellipse cx="45" cy="45" rx="16" ry="12" fill={pageColors.beeBody} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('beeBody')} className="paintable-part" />
                  <ellipse cx="45" cy="30" rx="10" ry="6" fill={pageColors.beeWings} stroke="#2d3436" strokeWidth="2.5" onClick={() => paintPart('beeWings')} className="paintable-part" />
                </svg>
              )}

              {/* TEMPLATE 3: LA CABANE DANS LES ARBRES 🏡 */}
              {activePage === 3 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  {/* Tree Trunk */}
                  <path d="M 85 110 L 75 210 L 155 210 L 145 110 Z" fill={pageColors.trunk} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('trunk')} className="paintable-part" />
                  {/* Lush Foliage Leaves */}
                  <circle cx="70" cy="70" r="42" fill={pageColors.leaves} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('leaves')} className="paintable-part" />
                  <circle cx="160" cy="65" r="45" fill={pageColors.leaves} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('leaves')} className="paintable-part" />
                  <circle cx="115" cy="40" r="40" fill={pageColors.leaves} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('leaves')} className="paintable-part" />
                  {/* House Walls */}
                  <rect x="80" y="80" width="70" height="52" rx="4" fill={pageColors.walls} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('walls')} className="paintable-part" />
                  {/* Roof */}
                  <polygon points="68,80 115,45 162,80" fill={pageColors.roof} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('roof')} className="paintable-part" />
                  {/* Door */}
                  <rect x="102" y="102" width="22" height="30" rx="3" fill={pageColors.door} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('door')} className="paintable-part" />
                  {/* Ladder */}
                  <g stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('ladder')} className="paintable-part">
                    <line x1="140" y1="130" x2="140" y2="200" stroke={pageColors.ladder} strokeWidth="4" />
                    <line x1="152" y1="130" x2="152" y2="200" stroke={pageColors.ladder} strokeWidth="4" />
                    <line x1="140" y1="145" x2="152" y2="145" />
                    <line x1="140" y1="165" x2="152" y2="165" />
                    <line x1="140" y1="185" x2="152" y2="185" />
                  </g>
                </svg>
              )}

              {/* TEMPLATE 4: ROYAL RUBBER DUCK 🦆 */}
              {activePage === 4 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  <path d="M 20 180 Q 70 160 120 180 Q 170 200 220 180 L 220 210 L 20 210 Z" fill={pageColors.water} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('water')} className="paintable-part" />
                  <circle cx="198" cy="145" r="16" fill={pageColors.bubble} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('bubble')} className="paintable-part" />
                  <path d="M 60 130 C 50 165 90 182 150 176 C 192 172 205 140 185 112 C 160 125 100 125 75 110 C 65 115 62 125 60 130 Z" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
                  <path d="M 92 132 C 92 118 138 118 142 138 C 142 156 96 156 92 132 Z" fill={pageColors.wing} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('wing')} className="paintable-part" />
                  <circle cx="155" cy="86" r="34" fill={pageColors.body} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('body')} className="paintable-part" />
                  <polygon points="136,56 144,34 155,46 166,34 174,56" fill={pageColors.crown} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('crown')} className="paintable-part" />
                  <path d="M 185 82 Q 222 88 188 104 Z" fill={pageColors.beak} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('beak')} className="paintable-part" />
                </svg>
              )}

              {/* TEMPLATE 5: PAPILLON ARC-EN-CIEL 🦋 */}
              {activePage === 5 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  <circle cx="38" cy="38" r="20" fill={pageColors.sun} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('sun')} className="paintable-part" />
                  <path d="M 115 95 C 55 25 25 85 95 118 Z" fill={pageColors.topWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('topWings')} className="paintable-part" />
                  <path d="M 125 95 C 185 25 215 85 145 118 Z" fill={pageColors.topWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('topWings')} className="paintable-part" />
                  <path d="M 112 118 C 45 125 55 185 112 152 Z" fill={pageColors.bottomWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('bottomWings')} className="paintable-part" />
                  <path d="M 128 118 C 195 125 185 185 128 152 Z" fill={pageColors.bottomWings} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('bottomWings')} className="paintable-part" />
                  <circle cx="76" cy="84" r="14" fill={pageColors.spots} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('spots')} className="paintable-part" />
                  <circle cx="164" cy="84" r="14" fill={pageColors.spots} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('spots')} className="paintable-part" />
                  <rect x="111" y="68" width="18" height="96" rx="9" fill={pageColors.body} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('body')} className="paintable-part" />
                </svg>
              )}

              {/* TEMPLATE 6: LE CHÂTEAU MAGIQUE 🏰 */}
              {activePage === 6 && (
                <svg viewBox="0 0 240 220" className="coloring-svg">
                  {/* Clouds */}
                  <path d="M 25 45 C 15 45 15 25 35 25 C 45 12 70 12 80 25 C 98 25 98 45 80 45 Z" fill={pageColors.cloud} stroke="#2d3436" strokeWidth="3.5" onClick={() => paintPart('cloud')} className="paintable-part" />
                  {/* Left & Right Towers */}
                  <rect x="35" y="80" width="45" height="110" fill={pageColors.towers} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('towers')} className="paintable-part" />
                  <rect x="160" y="80" width="45" height="110" fill={pageColors.towers} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('towers')} className="paintable-part" />
                  {/* Pointy Roofs */}
                  <polygon points="30,80 57,35 85,80" fill={pageColors.roofs} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('roofs')} className="paintable-part" />
                  <polygon points="155,80 182,35 210,80" fill={pageColors.roofs} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('roofs')} className="paintable-part" />
                  {/* Main Castle Center */}
                  <rect x="75" y="105" width="90" height="85" fill={pageColors.mainWall} stroke="#2d3436" strokeWidth="4.5" onClick={() => paintPart('mainWall')} className="paintable-part" />
                  {/* Castle Gate */}
                  <path d="M 102 190 L 102 145 C 102 135 138 135 138 145 L 138 190 Z" fill={pageColors.gate} stroke="#2d3436" strokeWidth="4" onClick={() => paintPart('gate')} className="paintable-part" />
                  {/* Royal Flags */}
                  <polygon points="57,35 75,25 57,15" fill={pageColors.flags} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('flags')} className="paintable-part" />
                  <polygon points="182,35 200,25 182,15" fill={pageColors.flags} stroke="#2d3436" strokeWidth="3" onClick={() => paintPart('flags')} className="paintable-part" />
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
                    style={{ backgroundColor: c.hex, color: c.hex === '#FFFFFF' || c.hex === '#FFD32A' || c.hex === '#A8E6CF' ? '#2d3436' : '#ffffff' }}
                  >
                    <span className="swatch-emoji">{c.emoji}</span>
                    <span className="swatch-name">{c.nameFr}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          TAB 3: LE JEU DES COULEURS DE TYANNA (COLOR DISCOVERY QUIZ)
         ========================================================================= */}
      {activityMode === 'colorgame' && (
        <div
          className="color-game-arena animate-pop"
          style={{
            background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '24px',
            padding: '24px',
            border: '4px solid #f1c40f',
            boxShadow: '0 12px 28px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          {/* Target Color Banner */}
          <div
            style={{
              background: '#ffffff',
              padding: '16px 28px',
              borderRadius: '24px',
              border: `4px solid ${colorTarget.hex}`,
              boxShadow: `0 8px 24px ${colorTarget.hex}40`,
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#2d3436', margin: '0 0 6px 0' }}>
              🎯 Défi de Tyanna :
            </h3>
            <p style={{ fontSize: '1.15rem', fontWeight: 800, color: colorTarget.hex === '#FFFFFF' ? '#2d3436' : colorTarget.hex, margin: 0 }}>
              « Trouve la couleur <strong>{colorTarget.nameFr.toUpperCase()}</strong> {colorTarget.emoji} ! »
            </p>
          </div>

          {/* Interactive Bouncy Color Pots */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(90px, 1fr))',
              gap: '14px',
              width: '100%',
              maxWidth: '680px',
              marginTop: '10px',
            }}
          >
            {PALETTE.map((col) => (
              <button
                key={col.nameFr}
                onClick={() => handleColorQuizAnswer(col)}
                className="animate-pop"
                style={{
                  background: col.hex,
                  borderRadius: '20px',
                  border: '4px solid #ffffff',
                  boxShadow: '0 8px 18px rgba(0,0,0,0.15)',
                  padding: '16px 8px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease',
                }}
              >
                <span style={{ fontSize: '2rem' }}>{col.emoji}</span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 900,
                    color: col.hex === '#FFFFFF' || col.hex === '#FFD32A' || col.hex === '#A8E6CF' ? '#2d3436' : '#ffffff',
                    textShadow: col.hex !== '#FFFFFF' ? '0 1px 2px rgba(0,0,0,0.4)' : 'none',
                  }}
                >
                  {col.nameFr}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          ALPHABET LETTER COLORING RIBBON (A TO Z JUMBO 3D TILES AT THE BOTTOM)
         ========================================================================= */}
      <div style={{ marginTop: '24px', background: '#f8f9fa', borderRadius: '24px', padding: '16px', border: '3px solid #dfe6e9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 900, color: '#2d3436' }}>
              🔤 Choisis une grande lettre à colorier (A à Z) :
            </h4>
            <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#636e72', fontWeight: 700 }}>
              Touche une lettre pour l'afficher sur ton dessin et l'écouter avec Tyanna !
            </p>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, background: '#e3f2fd', color: '#0984e3', padding: '4px 12px', borderRadius: '999px' }}>
            26 Lettres magiques
          </span>
        </div>

        <div className="alphabet-grid-container">
          {ALPHABET_A_TO_Z.map((letter) => (
            <button
              key={letter.char}
              onClick={() => handleSelectLetterToColor(letter)}
              className="letter-tile-btn animate-pop"
              style={{
                background: `linear-gradient(135deg, ${letter.color} 0%, #2d3436 180%)`,
                boxShadow: `0 6px 0 rgba(0,0,0,0.25), 0 8px 16px ${letter.color}40`,
              }}
              title={`Colorier la lettre ${letter.char} (${letter.wordFr})`}
            >
              <span className="tile-letter-char">{letter.char}</span>
              <span className="tile-word-fr">{letter.emoji} {letter.wordFr}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
