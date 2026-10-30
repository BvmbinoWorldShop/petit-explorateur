import React, { useState } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Music, Sparkles, Play, Volume2, Award } from 'lucide-react';

const NOTES = [
  { note: 'DO', freq: 261.63, color: '#ff4757', topColor: '#ff6b81', name: 'Do Rouge', pitchText: 'Do' },
  { note: 'RÉ', freq: 293.66, color: '#ff9f1a', topColor: '#ffa801', name: 'Ré Orange', pitchText: 'Ré' },
  { note: 'MI', freq: 329.63, color: '#ffd32a', topColor: '#fff200', name: 'Mi Jaune', pitchText: 'Mi' },
  { note: 'FA', freq: 349.23, color: '#2ed573', topColor: '#7bed9f', name: 'Fa Vert', pitchText: 'Fa' },
  { note: 'SOL', freq: 392.00, color: '#1e90ff', topColor: '#70a1ff', name: 'Sol Bleu', pitchText: 'Sol' },
  { note: 'LA', freq: 440.00, color: '#5352ed', topColor: '#706fd3', name: 'La Indigo', pitchText: 'La' },
  { note: 'SI', freq: 493.88, color: '#9b59b6', topColor: '#e056fd', name: 'Si Violet', pitchText: 'Si' },
  { note: 'DO', freq: 523.25, color: '#ff78cb', topColor: '#ff9ff3', name: 'Do Rose', pitchText: 'Do Aigu' },
];

const SONG_PRESETS = [
  {
    title: 'Frère Jacques 🔔',
    notes: [0, 1, 2, 0, 0, 1, 2, 0, 2, 3, 4, 2, 3, 4],
  },
  {
    title: 'Au Clair de la Lune 🌙',
    notes: [0, 0, 0, 1, 2, 1, 0, 2, 1, 1, 0],
  },
  {
    title: 'Petite Étoile ⭐',
    notes: [0, 0, 4, 4, 5, 5, 4, 3, 3, 2, 2, 1, 1, 0],
  },
  {
    title: 'Gamme Magique 🌈',
    notes: [0, 1, 2, 3, 4, 5, 6, 7],
  },
];

export default function MusicXylophoneGame({ onNiaSpeak }) {
  const [activeNoteIdx, setActiveNoteIdx] = useState(null);
  const [flyingNotes, setFlyingNotes] = useState([]);
  const [isPlayingSong, setIsPlayingSong] = useState(false);

  // Guided step-by-step song learning state
  const [guidedSong, setGuidedSong] = useState(SONG_PRESETS[0]);
  const [guidedStep, setGuidedStep] = useState(0);
  const [isGuidedMode, setIsGuidedMode] = useState(true);

  const playNote = (idx) => {
    const item = NOTES[idx];
    sounds.playMusicalNote(item.freq);
    setActiveNoteIdx(idx);
    setTimeout(() => setActiveNoteIdx(null), 260);

    const noteId = Date.now() + Math.random();
    setFlyingNotes((prev) => [...prev, { id: noteId, char: Math.random() > 0.5 ? '🎵' : '🎶', x: 10 + idx * 11 }]);
    setTimeout(() => {
      setFlyingNotes((prev) => prev.filter((n) => n.id !== noteId));
    }, 1200);

    confetti({
      colors: [item.color, item.topColor, '#ffffff'],
      particleCount: 16,
      spread: 50,
      origin: { y: 0.65 },
    });

    // Advance guided song if the child tapped the glowing target key!
    if (isGuidedMode && guidedSong && idx === guidedSong.notes[guidedStep]) {
      const nextStep = guidedStep + 1;
      if (nextStep >= guidedSong.notes.length) {
        sounds.playSuccess();
        confetti({ particleCount: 75, spread: 70 });
        const win = `Bravo petit musicien ! Tu as joué toute la chanson ${guidedSong.title} !`;
        if (onNiaSpeak) onNiaSpeak(win);
        doraVoice.speak(win);
        setGuidedStep(0);
      } else {
        setGuidedStep(nextStep);
      }
    }
  };

  const handlePlaySong = (song) => {
    if (isPlayingSong) return;
    setGuidedSong(song);
    setGuidedStep(0);
    setIsPlayingSong(true);
    const msg = `Écoute et joue la chanson : ${song.title} !`;
    if (onNiaSpeak) onNiaSpeak(msg);
    doraVoice.speak(msg);

    song.notes.forEach((noteIdx, step) => {
      setTimeout(() => {
        const item = NOTES[noteIdx];
        sounds.playMusicalNote(item.freq);
        setActiveNoteIdx(noteIdx);
        setTimeout(() => setActiveNoteIdx(null), 240);
        if (step === song.notes.length - 1) {
          setIsPlayingSong(false);
          confetti({ particleCount: 50, spread: 70 });
        }
      }, (step + 1) * 420);
    });
  };

  const targetNoteIdx = isGuidedMode && guidedSong ? guidedSong.notes[guidedStep] : null;

  return (
    <div className="center-activity-card crispy-game-card">
      <div className="activity-card-header music-theme-header">
        <div className="header-info">
          <span className="card-badge-icon">🎵</span>
          <div>
            <h2 className="card-main-title">Le Xylophone Magique Arc-en-Ciel</h2>
            <p className="card-subtitle">Suis la lame lumineuse pour jouer une vraie chanson ou improvise !</p>
          </div>
        </div>

        {/* Quick Songs Playlist */}
        <div className="xylo-songs-menu">
          {SONG_PRESETS.map((song, i) => (
            <button
              key={i}
              onClick={() => handlePlaySong(song)}
              disabled={isPlayingSong}
              className="xylo-song-btn luxury-song-btn animate-pop"
              style={{
                border: guidedSong?.title === song.title ? '2.5px solid #ffd32a' : undefined,
              }}
              title={`Écouter et apprendre ${song.title}`}
            >
              <Play size={14} fill="#ffffff" />
              <span>{song.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Guided Mode Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', padding: '10px 16px', background: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
        <div style={{ fontWeight: 800, color: '#2d3436', fontSize: '0.9rem' }}>
          {isGuidedMode && targetNoteIdx !== null ? (
            <span>
              🎼 Partition <strong>{guidedSong.title}</strong> ({guidedStep + 1}/{guidedSong.notes.length}) — Touche la lame <strong>{NOTES[targetNoteIdx].name}</strong> 👇 !
            </span>
          ) : (
            <span>🎹 Mode Improvisation Libre</span>
          )}
        </div>
        <button
          onClick={() => {
            sounds.playPop();
            setIsGuidedMode((g) => !g);
          }}
          style={{
            background: isGuidedMode ? '#6c5ce7' : '#00b894',
            color: '#fff',
            border: 'none',
            borderRadius: '999px',
            padding: '6px 14px',
            fontWeight: 800,
            fontSize: '0.8rem',
            cursor: 'pointer',
          }}
        >
          {isGuidedMode ? '✨ Mode Guidé Actif' : '👆 Activer Guide Lumineux'}
        </button>
      </div>

      <div className="xylophone-arena crispy-xylo-arena">
        {/* Floating Animated Musical Notes */}
        <div className="flying-notes-layer">
          {flyingNotes.map((fn) => (
            <span
              key={fn.id}
              className="floating-note-particle animate-float-note"
              style={{ left: `${fn.x}%` }}
            >
              {fn.char}
            </span>
          ))}
        </div>

        {/* 3D Wooden Resonator Bed */}
        <div className="xylo-wooden-chassis">
          <div className="xylo-rubber-rail top-rail"></div>
          <div className="xylo-rubber-rail bottom-rail"></div>

          {/* 8 Rainbow Xylophone Keys */}
          <div className="xylophone-keys-container">
            {NOTES.map((item, idx) => {
              const isTarget = targetNoteIdx === idx && !isPlayingSong;
              return (
                <button
                  key={idx}
                  onClick={() => playNote(idx)}
                  className={`xylo-bar-btn bar-3d ${activeNoteIdx === idx ? 'is-struck' : ''}`}
                  style={{
                    background: `linear-gradient(180deg, ${item.topColor} 0%, ${item.color} 50%, #2f3542 100%)`,
                    height: `${240 - idx * 11}px`,
                    outline: isTarget ? '4px solid #ffffff' : 'none',
                    boxShadow:
                      activeNoteIdx === idx
                        ? `0 0 28px ${item.topColor}, 0 4px 10px rgba(0,0,0,0.4)`
                        : isTarget
                        ? `0 0 24px #ffffff, 0 0 16px ${item.topColor}`
                        : '0 10px 18px rgba(0,0,0,0.3)',
                    position: 'relative',
                  }}
                  title={`Note ${item.name}`}
                >
                  {isTarget && (
                    <span
                      className="animate-bounce-soft"
                      style={{ position: 'absolute', top: '-28px', fontSize: '1.35rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
                    >
                      👇
                    </span>
                  )}
                  <div className="xylo-screw top-screw"></div>
                  <div className="xylo-bar-highlight"></div>
                  <span className="xylo-note-label">{item.note}</span>
                  <span className="xylo-pitch-sub">{idx + 1}</span>
                  <div className="xylo-screw bottom-screw"></div>
                </button>
              );
            })}
          </div>
        </div>

        <p className="xylo-tip-banner">
          ✨ Touche la lame indiquée par le doigt 👇 pour jouer la mélodie pas à pas !
        </p>
      </div>
    </div>
  );
}
