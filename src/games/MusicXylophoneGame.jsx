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
    title: 'Gamme Magique 🌈',
    notes: [0, 1, 2, 3, 4, 5, 6, 7],
  },
];

export default function MusicXylophoneGame({ onNiaSpeak }) {
  const [activeNoteIdx, setActiveNoteIdx] = useState(null);
  const [flyingNotes, setFlyingNotes] = useState([]);
  const [isPlayingSong, setIsPlayingSong] = useState(false);

  const playNote = (idx) => {
    const item = NOTES[idx];
    sounds.playMusicalNote(item.freq);
    setActiveNoteIdx(idx);
    setTimeout(() => setActiveNoteIdx(null), 250);

    // Spawn floating musical particle
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
  };

  const handlePlaySong = (song) => {
    if (isPlayingSong) return;
    setIsPlayingSong(true);
    const msg = `Écoute la chanson : ${song.title} ! Regarde les lames de couleur s'allumer !`;
    if (onNiaSpeak) onNiaSpeak(msg);
    doraVoice.speak(msg);

    song.notes.forEach((noteIdx, step) => {
      setTimeout(() => {
        playNote(noteIdx);
        if (step === song.notes.length - 1) {
          setIsPlayingSong(false);
          confetti({ particleCount: 50, spread: 70 });
        }
      }, (step + 1) * 420);
    });
  };

  return (
    <div className="center-activity-card crispy-game-card">
      <div className="activity-card-header music-theme-header">
        <div className="header-info">
          <span className="card-badge-icon">🎵</span>
          <div>
            <h2 className="card-main-title">Le Xylophone Magique Arc-en-Ciel</h2>
            <p className="card-subtitle">Lames de métal 3D, vraies notes de musique et chansons enfantines !</p>
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
              title={`Écouter ${song.title}`}
            >
              <Play size={14} fill="#ffffff" />
              <span>{song.title}</span>
            </button>
          ))}
        </div>
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
            {NOTES.map((item, idx) => (
              <button
                key={idx}
                onClick={() => playNote(idx)}
                className={`xylo-bar-btn bar-3d ${activeNoteIdx === idx ? 'is-struck' : ''}`}
                style={{
                  background: `linear-gradient(180deg, ${item.topColor} 0%, ${item.color} 50%, #2f3542 100%)`,
                  height: `${240 - idx * 11}px`,
                  boxShadow: activeNoteIdx === idx ? `0 0 25px ${item.topColor}, 0 4px 10px rgba(0,0,0,0.4)` : '0 10px 18px rgba(0,0,0,0.3)',
                }}
                title={`Note ${item.name}`}
              >
                <div className="xylo-screw top-screw"></div>
                <div className="xylo-bar-highlight"></div>
                <span className="xylo-note-label">{item.note}</span>
                <span className="xylo-pitch-sub">{idx + 1}</span>
                <div className="xylo-screw bottom-screw"></div>
              </button>
            ))}
          </div>
        </div>

        <p className="xylo-tip-banner">
          ✨ Touche les lames avec ton doigt pour inventer une jolie mélodie !
        </p>
      </div>
    </div>
  );
}
