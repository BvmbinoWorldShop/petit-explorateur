import React, { useState, useEffect } from 'react';
import { teacher } from '../utils/speech';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export default function TeacherMascot({ message, onRepeat }) {
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const unsubscribe = teacher.subscribe((isSpeaking) => {
      setSpeaking(isSpeaking);
    });
    return () => unsubscribe();
  }, []);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    teacher.isMuted = nextMuted;
    if (nextMuted) teacher.stop();
  };

  return (
    <div className="teacher-container">
      {/* Speech bubble */}
      {message && (
        <div 
          onClick={onRepeat}
          className="speech-bubble"
          title="Clique pour réécouter !"
        >
          <div className="speech-text">
            <span className="teacher-badge">La Maîtresse parle :</span>
            <p className="message-content">{message}</p>
          </div>
          <button className="repeat-btn" aria-label="Répéter">
            <Volume2 size={24} />
          </button>
        </div>
      )}

      {/* Mascot Avatar */}
      <div 
        className={`mascot-avatar ${speaking ? 'is-talking' : ''}`}
        onClick={onRepeat}
      >
        <div className="avatar-body">
          {/* Owl / Panda friendly character SVG */}
          <svg viewBox="0 0 100 100" className="avatar-svg">
            <circle cx="50" cy="50" r="45" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="4" />
            {/* Teacher glasses */}
            <circle cx="36" cy="46" r="14" fill="none" stroke="#6C5CE7" strokeWidth="4" />
            <circle cx="64" cy="46" r="14" fill="none" stroke="#6C5CE7" strokeWidth="4" />
            <line x1="50" y1="46" x2="50" y2="46" stroke="#6C5CE7" strokeWidth="4" />
            {/* Eyes */}
            <circle cx="36" cy="46" r="5" fill="#2D3436" className="mascot-eye" />
            <circle cx="64" cy="46" r="5" fill="#2D3436" className="mascot-eye" />
            <circle cx="38" cy="44" r="1.5" fill="#FFFFFF" />
            <circle cx="66" cy="44" r="1.5" fill="#FFFFFF" />
            {/* Cheeks */}
            <circle cx="24" cy="58" r="6" fill="#FF7675" opacity="0.6" />
            <circle cx="76" cy="58" r="6" fill="#FF7675" opacity="0.6" />
            {/* Mouth */}
            <path
              d={speaking ? "M 42 64 Q 50 78 58 64 Z" : "M 42 64 Q 50 72 58 64"}
              fill={speaking ? "#D63031" : "none"}
              stroke="#2D3436"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Teacher Beret / Hat */}
            <path d="M 28 20 C 35 10, 65 10, 72 20 C 78 26, 68 30, 50 28 C 32 30, 22 26, 28 20 Z" fill="#6C5CE7" />
            <circle cx="50" cy="11" r="4" fill="#FD79A8" />
          </svg>
        </div>

        {speaking && (
          <span className="speaking-indicator">
            <Sparkles size={16} />
          </span>
        )}
      </div>

      {/* Global Mute control */}
      <button 
        onClick={toggleMute} 
        className={`mute-toggle-btn ${muted ? 'muted' : ''}`}
        title={muted ? "Activer le son" : "Couper le son"}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
