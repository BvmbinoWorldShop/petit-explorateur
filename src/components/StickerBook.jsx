import React, { useState, useRef } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import { haptics } from '../utils/haptics';
import confetti from 'canvas-confetti';
import { BookOpen, Sparkles, Star, RotateCcw, ZoomIn, ZoomOut, RotateCw, Trash2 } from 'lucide-react';

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
  const [activeStickerId, setActiveStickerId] = useState(1);
  const notebookRef = useRef(null);
  const draggingStickerRef = useRef(null);
  const pinchStartDistRef = useRef(null);
  const pinchStartScaleRef = useRef(1);

  const [boardStickers, setBoardStickers] = useState([
    { id: 1, emoji: '🦄', fr: 'La Licorne Magique', x: 28, y: 55, rot: -6, scale: 1.1 },
    { id: 2, emoji: '🌈', fr: "L'Arc-en-ciel", x: 68, y: 28, rot: 8, scale: 1.2 },
  ]);

  const addStickerToBoard = (st, customX = null, customY = null) => {
    sounds.playPop();
    haptics.pop();
    setSelectedSticker(st);
    const newId = Date.now() + Math.random();
    const newSticker = {
      id: newId,
      emoji: st.emoji,
      fr: st.fr,
      x: customX !== null ? customX : 20 + Math.random() * 60,
      y: customY !== null ? customY : 25 + Math.random() * 50,
      rot: Math.round((Math.random() - 0.5) * 20),
      scale: 1.1,
    };
    setBoardStickers((prev) => [...prev, newSticker]);
    setActiveStickerId(newId);
    confetti({ particleCount: 25, spread: 45 });

    const msg = `Super autocollant : ${st.fr} ! Glisse-le avec ton doigt ou pince pour l'agrandir !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleBoardClick = (e) => {
    // Only place a new sticker if clicked on the notebook background, not while dragging
    if (draggingStickerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;
    addStickerToBoard(selectedSticker, Math.max(8, Math.min(92, clickX)), Math.max(10, Math.min(88, clickY)));
  };

  // Drag sticker with single finger or mouse
  const handleStickerPointerDown = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveStickerId(item.id);
    sounds.playPop();
    haptics.tap();

    const notebook = notebookRef.current;
    if (!notebook) return;
    const rect = notebook.getBoundingClientRect();

    draggingStickerRef.current = {
      id: item.id,
      startX: e.clientX,
      startY: e.clientY,
      initialItemX: item.x,
      initialItemY: item.y,
      rectWidth: rect.width,
      rectHeight: rect.height,
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handleStickerPointerMove = (e) => {
    if (!draggingStickerRef.current) return;
    e.preventDefault();
    const d = draggingStickerRef.current;
    const deltaX = ((e.clientX - d.startX) / d.rectWidth) * 100;
    const deltaY = ((e.clientY - d.startY) / d.rectHeight) * 100;

    const newX = Math.max(6, Math.min(94, d.initialItemX + deltaX));
    const newY = Math.max(8, Math.min(92, d.initialItemY + deltaY));

    setBoardStickers((prev) =>
      prev.map((s) => (s.id === d.id ? { ...s, x: newX, y: newY } : s))
    );
  };

  const handleStickerPointerUp = (e) => {
    if (draggingStickerRef.current) {
      draggingStickerRef.current = null;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  // Pinch-to-zoom multi-touch support
  const handleTouchStart = (e) => {
    if (e.touches.length === 2 && activeStickerId) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      pinchStartDistRef.current = dist;
      const targetSticker = boardStickers.find((s) => s.id === activeStickerId);
      pinchStartScaleRef.current = targetSticker?.scale || 1.1;
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && activeStickerId && pinchStartDistRef.current) {
      e.preventDefault();
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      const ratio = dist / pinchStartDistRef.current;
      const nextScale = Math.max(0.55, Math.min(2.4, pinchStartScaleRef.current * ratio));
      setBoardStickers((prev) =>
        prev.map((s) => (s.id === activeStickerId ? { ...s, scale: nextScale } : s))
      );
    }
  };

  const handleTouchEnd = () => {
    pinchStartDistRef.current = null;
  };

  // Sticker scale & rotate actions
  const adjustActiveScale = (delta) => {
    if (!activeStickerId) return;
    sounds.playPop();
    haptics.tap();
    setBoardStickers((prev) =>
      prev.map((s) => {
        if (s.id === activeStickerId) {
          const next = Math.max(0.55, Math.min(2.4, (s.scale || 1.0) + delta));
          return { ...s, scale: next };
        }
        return s;
      })
    );
  };

  const rotateActiveSticker = () => {
    if (!activeStickerId) return;
    sounds.playPop();
    haptics.tap();
    setBoardStickers((prev) =>
      prev.map((s) => (s.id === activeStickerId ? { ...s, rot: (s.rot + 25) % 360 } : s))
    );
  };

  const deleteActiveSticker = () => {
    if (!activeStickerId) return;
    sounds.playPop();
    haptics.tap();
    setBoardStickers((prev) => prev.filter((s) => s.id !== activeStickerId));
    setActiveStickerId(null);
  };

  const clearBoard = () => {
    sounds.playPop();
    haptics.pop();
    setBoardStickers([]);
    setActiveStickerId(null);
    doraVoice.speak("Cahier tout propre ! Colle de nouveaux autocollants avec Tyanna !");
  };

  const activeStickerObj = boardStickers.find((s) => s.id === activeStickerId);

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)' }}>
        <div className="header-info">
          <span className="card-badge-icon">📖</span>
          <div>
            <h2 className="card-main-title">Mon Album d'Autocollants Magiques</h2>
            <p className="card-subtitle">Glisse les autocollants avec ton doigt et pince pour les agrandir !</p>
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
              haptics.tap();
              setActiveScene(sc);
            }}
            className={`num-mode-tab-btn ${activeScene.id === sc.id ? 'active' : ''}`}
          >
            {sc.label}
          </button>
        ))}
      </div>

      {/* Quick Controls Bar for Selected Active Sticker */}
      {activeStickerObj && (
        <div
          className="animate-pop"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            background: '#ffffff',
            borderRadius: '18px',
            padding: '8px 14px',
            border: '2px solid #f39c12',
            boxShadow: '0 4px 12px rgba(243, 156, 18, 0.2)',
            marginBottom: '8px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#d35400' }}>
            Autocollant {activeStickerObj.emoji} :
          </span>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <button
              onClick={() => adjustActiveScale(0.2)}
              className="action-button secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              title="Agrandir l'autocollant"
            >
              <ZoomIn size={15} /> Agrandir ➕
            </button>
            <button
              onClick={() => adjustActiveScale(-0.2)}
              className="action-button secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              title="Rétrécir l'autocollant"
            >
              <ZoomOut size={15} /> Rétrécir ➖
            </button>
            <button
              onClick={rotateActiveSticker}
              className="action-button secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}
              title="Faire pivoter l'autocollant"
            >
              <RotateCw size={15} /> Tourner 🔄
            </button>
            <button
              onClick={deleteActiveSticker}
              className="action-button"
              style={{ padding: '6px 10px', fontSize: '0.8rem', background: '#ff7675', color: '#fff', border: 'none' }}
              title="Supprimer cet autocollant"
            >
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      )}

      <div className="stickers-studio-arena">
        {/* The Digital Sticker Notebook Page (Touch, Drag & Pinch Area) */}
        <div
          ref={notebookRef}
          className="sticker-notebook-page"
          onClick={handleBoardClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            background: activeScene.bg,
            cursor: 'crosshair',
            position: 'relative',
            minHeight: '280px',
            touchAction: 'none',
            overflow: 'hidden',
          }}
          title="Touche pour coller ou glisse tes autocollants !"
        >
          <div className="notebook-spiral-lines"></div>
          {boardStickers.length === 0 ? (
            <p className="empty-notebook-hint" style={{ background: 'rgba(255,255,255,0.85)', padding: '8px 16px', borderRadius: '999px' }}>
              👆 Touche ici ou choisis un autocollant en bas pour le coller ! ✨
            </p>
          ) : (
            boardStickers.map((item) => {
              const isSelected = activeStickerId === item.id;
              const scale = item.scale || 1.1;
              return (
                <span
                  key={item.id}
                  className={`board-placed-sticker animate-pop ${isSelected ? 'is-sticker-selected' : ''}`}
                  onPointerDown={(e) => handleStickerPointerDown(e, item)}
                  onPointerMove={handleStickerPointerMove}
                  onPointerUp={handleStickerPointerUp}
                  onPointerCancel={handleStickerPointerUp}
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    transform: `translate(-50%, -50%) rotate(${item.rot}deg) scale(${scale})`,
                    cursor: 'grab',
                    touchAction: 'none',
                    userSelect: 'none',
                    zIndex: isSelected ? 20 : 10,
                    outline: isSelected ? '3px dashed #f39c12' : 'none',
                    borderRadius: '50%',
                    padding: '6px',
                    display: 'inline-block',
                    lineHeight: 1,
                  }}
                  title="Glisse avec ton doigt pour déplacer ou pince pour agrandir !"
                >
                  {item.emoji}
                </span>
              );
            })
          )}
        </div>

        {/* Sticker Collection Tray */}
        <div className="sticker-tray-box">
          <h4 className="tray-title">
            Autocollant sélectionné : {selectedSticker.emoji} <strong>{selectedSticker.name}</strong> (Touche pour coller) :
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
