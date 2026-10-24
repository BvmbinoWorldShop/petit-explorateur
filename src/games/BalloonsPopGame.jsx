import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Volume2, Star } from 'lucide-react';

const BALLOON_COLORS = ['#ff7675', '#74b9ff', '#55efc4', '#ffeaa7', '#a29bfe', '#fab1a0', '#fdcb6e'];
const BALLOON_CHARS = ['A', 'B', 'C', '1', '2', '3', '⭐', '❤️', '🌟', 'D', 'E', '4', '5'];

export default function BalloonsPopGame({ onNiaSpeak, onRewardStar }) {
  const [balloons, setBalloons] = useState([]);
  const [poppedCount, setPoppedCount] = useState(0);

  useEffect(() => {
    const welcome = "Touchez les ballons pour les éclater ! Pop ! Pop !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
    spawnBalloons();

    // Spawning timer
    const interval = setInterval(() => {
      setBalloons((prev) => {
        if (prev.length < 8) {
          const newBalloon = createBalloon();
          return [...prev, newBalloon];
        }
        return prev;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const createBalloon = () => {
    return {
      id: Math.random().toString(),
      x: 10 + Math.random() * 75, // percent
      char: BALLOON_CHARS[Math.floor(Math.random() * BALLOON_CHARS.length)],
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      speed: 4 + Math.random() * 3, // seconds duration
    };
  };

  const spawnBalloons = () => {
    const initial = [createBalloon(), createBalloon(), createBalloon(), createBalloon()];
    setBalloons(initial);
  };

  const popBalloon = (b) => {
    sounds.playPop();
    setBalloons((prev) => prev.filter((item) => item.id !== b.id));
    const nextCount = poppedCount + 1;
    setPoppedCount(nextCount);

    confetti({
      colors: [b.color],
      particleCount: 25,
      spread: 50,
      origin: { y: 0.6 }
    });

    doraVoice.speak(b.char);

    if (nextCount % 5 === 0) {
      sounds.playSuccess();
      if (onRewardStar) onRewardStar();
      const praise = `Bravo ! Tu as éclaté ${nextCount} ballons ! C'est super rigolo !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #ff7675, #fab1a0)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🎈</span>
          <div>
            <h2 className="card-main-title">Éclate les Ballons Magiques</h2>
            <p className="card-subtitle">Touche les ballons qui s'envolent pour faire POP !</p>
          </div>
        </div>
        <div className="score-pill-header">
          <Star size={20} fill="#ffd32a" color="#ffd32a" /> Éclatés : {poppedCount}
        </div>
      </div>

      {/* Balloons Sky Arena */}
      <div className="balloons-sky-arena">
        {balloons.map((b) => (
          <button
            key={b.id}
            onClick={() => popBalloon(b)}
            className="floating-balloon-btn animate-float-up"
            style={{
              left: `${b.x}%`,
              backgroundColor: b.color,
              animationDuration: `${b.speed}s`,
            }}
          >
            <span className="balloon-char">{b.char}</span>
            <div className="balloon-knot"></div>
            <div className="balloon-string"></div>
          </button>
        ))}

        <div className="sky-clouds-row">
          <span>☁️</span>
          <span>☁️</span>
          <span>☁️</span>
        </div>
      </div>
    </div>
  );
}
