import React, { useState, useEffect } from 'react';
import { teacher } from '../utils/speech';
import { sounds } from '../utils/audio';
import { Volume2, VolumeX, Sparkles, MessageCircle, Star } from 'lucide-react';
import teacherImg from '../assets/teacher-pixar.jpg';

export default function TeacherPixarGuide({ message, onRepeat, currentMood = 'happy' }) {
  const [speaking, setSpeaking] = useState(false);
  const [muted, setMuted] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const unsub = teacher.subscribe((isSpeaking) => {
      setSpeaking(isSpeaking);
    });
    return () => unsub();
  }, []);

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    teacher.isMuted = nextMuted;
    if (nextMuted) teacher.stop();
  };

  const handleMascotClick = () => {
    sounds.playPop();
    if (onRepeat) onRepeat();
  };

  return (
    <div className={`pixar-teacher-guide ${minimized ? 'minimized' : ''}`}>
      {/* Speech dialogue bubble */}
      {message && !minimized && (
        <div className="pixar-speech-bubble" onClick={handleMascotClick}>
          <div className="bubble-header">
            <span className="teacher-name-badge">
              <Sparkles size={14} className="sparkle-icon" /> Maîtresse Nia
            </span>
            <button 
              className="bubble-listen-btn" 
              onClick={(e) => { e.stopPropagation(); handleMascotClick(); }}
              title="Écouter la maîtresse"
            >
              <Volume2 size={20} />
            </button>
          </div>
          <p className="bubble-text">{message}</p>
        </div>
      )}

      {/* 3D Pixar Doll Character Portrait */}
      <div 
        className={`pixar-avatar-frame ${speaking ? 'is-speaking-anim' : ''}`}
        onClick={handleMascotClick}
        title="Maîtresse Nia - Touche-moi pour parler !"
      >
        <img 
          src={teacherImg} 
          alt="Maîtresse Nia - Personnage 3D Pixar" 
          className="pixar-avatar-img"
        />

        {speaking && (
          <div className="speaking-wave-ring">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        <div className="avatar-tag">
          <span>Nia</span>
        </div>
      </div>

      {/* Quick Sound Toggle Button */}
      <button 
        onClick={toggleMute} 
        className={`quick-mute-btn ${muted ? 'is-muted' : ''}`}
        title={muted ? "Activer le son" : "Couper le son"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
