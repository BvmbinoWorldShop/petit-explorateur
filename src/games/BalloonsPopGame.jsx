import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Volume2, Star, Target } from 'lucide-react';

const BALLOON_PALETTE = [
  { id: 'red', nameFr: 'ROUGE', primary: '#ff4757', highlight: '#ff6b81', shadow: '#b33939' },
  { id: 'blue', nameFr: 'BLEU', primary: '#1e90ff', highlight: '#70a1ff', shadow: '#0984e3' },
  { id: 'emerald', nameFr: 'VERT', primary: '#2ed573', highlight: '#7bed9f', shadow: '#10ac84' },
  { id: 'gold', nameFr: 'JAUNE DORÉ', primary: '#ffa502', highlight: '#ffeaa7', shadow: '#e67e22' },
  { id: 'purple', nameFr: 'VIOLET', primary: '#9b59b6', highlight: '#e056fd', shadow: '#6c5ce7' },
  { id: 'pink', nameFr: 'ROSE', primary: '#ff78cb', highlight: '#ff9ff3', shadow: '#e84393' },
];

const BALLOON_CHARS = ['A', 'B', 'C', '1', '2', '3', '⭐', '❤️', '🎁', 'D', 'E', '4', '5', '🦄', '🐣', '🌸'];

function CrispyBalloonGraphic({ theme, char }) {
  return (
    <svg viewBox="0 0 100 140" className="crispy-3d-balloon-svg">
      <defs>
        <radialGradient id={`balloonBody_${theme.id}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={theme.highlight} />
          <stop offset="45%" stopColor={theme.primary} />
          <stop offset="90%" stopColor={theme.shadow} />
          <stop offset="100%" stopColor="#1e272e" stopOpacity="0.4" />
        </radialGradient>
        <linearGradient id="glossArc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M 50 104 Q 46 114 54 122 T 48 136"
        fill="none"
        stroke="#dfe6e9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <polygon points="46,104 54,104 50,97" fill={theme.shadow} stroke={theme.primary} strokeWidth="1" />
      <ellipse cx="50" cy="52" rx="38" ry="46" fill={`url(#balloonBody_${theme.id})`} />
      <path
        d="M 28 24 C 40 14 62 14 70 24 C 62 18 42 18 32 28 Z"
        fill="url(#glossArc)"
      />
      <ellipse cx="32" cy="34" rx="4.5" ry="9" fill="#ffffff" opacity="0.65" transform="rotate(-25 32 34)" />
      <circle cx="50" cy="56" r="16" fill="rgba(255, 255, 255, 0.28)" />
      <text
        x="50"
        y="63"
        fill="#ffffff"
        fontSize="19"
        fontWeight="900"
        textAnchor="middle"
        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"
        fontFamily="sans-serif"
      >
        {char}
      </text>
    </svg>
  );
}

export default function BalloonsPopGame({ onNiaSpeak, onRewardStar }) {
  const [balloons, setBalloons] = useState([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [targetColor, setTargetColor] = useState(null);

  useEffect(() => {
    const welcome = "Touche les beaux ballons 3D pour faire POP ! Écoute leur couleur, lettre ou chiffre !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
    spawnBalloons();

    const interval = setInterval(() => {
      setBalloons((prev) => {
        if (prev.length < 8) {
          return [...prev, createBalloon()];
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const createBalloon = (forcedTheme = null) => {
    const theme = forcedTheme || BALLOON_PALETTE[Math.floor(Math.random() * BALLOON_PALETTE.length)];
    return {
      id: Math.random().toString(),
      x: 8 + Math.random() * 78,
      char: BALLOON_CHARS[Math.floor(Math.random() * BALLOON_CHARS.length)],
      theme,
      speed: 4.2 + Math.random() * 2.6,
    };
  };

  const spawnBalloons = () => {
    setBalloons([createBalloon(), createBalloon(), createBalloon(), createBalloon(), createBalloon(), createBalloon()]);
  };

  const startColorMission = () => {
    const chosen = BALLOON_PALETTE[Math.floor(Math.random() * BALLOON_PALETTE.length)];
    setTargetColor(chosen);
    // Ensure at least 2 balloons of that color are on screen
    setBalloons((prev) => [...prev.slice(0, 5), createBalloon(chosen), createBalloon(chosen)]);
    const msg = `Défi Couleur : Éclate un ballon ${chosen.nameFr} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const popBalloon = (b) => {
    sounds.playPop();
    setBalloons((prev) => prev.filter((item) => item.id !== b.id));
    const nextCount = poppedCount + 1;
    setPoppedCount(nextCount);

    confetti({
      colors: [b.theme.primary, b.theme.highlight, '#ffffff'],
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 },
    });

    if (targetColor && b.theme.id === targetColor.id) {
      sounds.playSuccess();
      if (onRewardStar) onRewardStar();
      const win = `Bravo ! Tu as éclaté le ballon ${targetColor.nameFr} !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTargetColor(null);
      return;
    }

    doraVoice.speak(`Ballon ${b.theme.nameFr} ! ${b.char}`);

    if (nextCount % 5 === 0) {
      sounds.playSuccess();
      if (onRewardStar) onRewardStar();
      const praise = `POP ! Super champion ! Tu as éclaté ${nextCount} ballons magiques !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
    }
  };

  return (
    <div className="center-activity-card crispy-game-card">
      <div className="activity-card-header balloons-theme-header">
        <div className="header-info">
          <span className="card-badge-icon">🎈</span>
          <div>
            <h2 className="card-main-title">Les Ballons Magiques 3D</h2>
            <p className="card-subtitle">Touche les ballons qui s'envolent pour faire POP avec Tyanna !</p>
          </div>
        </div>

        <div className="balloons-header-badges" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={startColorMission}
            className="refresh-mission-btn"
            style={{ background: targetColor ? targetColor.primary : 'rgba(255,255,255,0.25)', color: '#fff', border: '2px solid #fff' }}
          >
            <Target size={18} /> {targetColor ? `Cherche : ${targetColor.nameFr}` : 'Défi Couleur 🎯'}
          </button>
          <div className="score-pill-header luxury-score-pill">
            <Star size={20} fill="#ffd32a" color="#ffd32a" />
            <span>Éclatés : <strong>{poppedCount}</strong></span>
          </div>
        </div>
      </div>

      {/* Balloons Sky Arena */}
      <div className="balloons-sky-arena crispy-sky-arena">
        <div className="sky-clouds-row">
          <span className="cloud-item c1">☁️</span>
          <span className="cloud-item c2">⛅</span>
          <span className="cloud-item c3">☁️</span>
          <span className="cloud-item c4">🌈</span>
        </div>

        {balloons.map((b) => (
          <button
            key={b.id}
            onClick={() => popBalloon(b)}
            className="floating-crispy-balloon-btn animate-float-up"
            style={{
              left: `${b.x}%`,
              animationDuration: `${b.speed}s`,
            }}
            title={`Éclater le ballon ${b.theme.nameFr} !`}
          >
            <CrispyBalloonGraphic theme={b.theme} char={b.char} />
          </button>
        ))}

        <div className="sky-bottom-grass">
          <span>🌱 🌼 🌻 🌾 🌼 🌱 🌻 🌾</span>
        </div>
      </div>
    </div>
  );
}
