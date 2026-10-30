import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Puzzle, Sparkles, RotateCcw, CheckCircle2, Eye } from 'lucide-react';

const ALL_PAIRS = [
  { pairId: 'dog', emoji: '🐶', nameFr: 'Chiot', color: '#ff7675' },
  { pairId: 'cat', emoji: '🐱', nameFr: 'Chaton', color: '#74b9ff' },
  { pairId: 'duck', emoji: '🦆', nameFr: 'Canard', color: '#ffd32a' },
  { pairId: 'lion', emoji: '🦁', nameFr: 'Lion', color: '#ffa502' },
  { pairId: 'panda', emoji: '🐼', nameFr: 'Panda', color: '#2ed573' },
  { pairId: 'unicorn', emoji: '🦄', nameFr: 'Licorne', color: '#e056fd' },
];

const LEVELS = [
  { id: 'easy', label: '🌟 Facile (6 cartes)', pairsCount: 3 },
  { id: 'medium', label: '⭐⭐ Moyen (8 cartes)', pairsCount: 4 },
  { id: 'hard', label: '⭐⭐⭐ Champion (12 cartes)', pairsCount: 6 },
];

export default function PuzzleMemoryActivity({ onNiaSpeak, onRewardStar }) {
  const [level, setLevel] = useState(LEVELS[0]);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [isPeeking, setIsPeeking] = useState(false);

  useEffect(() => {
    startNewGame(level);
  }, [level]);

  const startNewGame = (lvl = level) => {
    const selectedPairs = ALL_PAIRS.slice(0, lvl.pairsCount);
    const deck = [];
    selectedPairs.forEach((p, idx) => {
      deck.push({ ...p, id: `${p.pairId}-1-${idx}` });
      deck.push({ ...p, id: `${p.pairId}-2-${idx}` });
    });
    const shuffled = deck.sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);

    // Brief preview peek at start so toddlers see where cards are!
    setIsPeeking(true);
    setTimeout(() => setIsPeeking(false), 1400);

    const welcome = `Jeu de mémoire ! Regarde bien les ${lvl.pairsCount * 2} cartes et retrouve les paires d'animaux avec moi !`;
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const handleMagicPeek = () => {
    if (isPeeking) return;
    sounds.playPop();
    setIsPeeking(true);
    doraVoice.speak("Indice magique ! Regarde vite où se cachent les animaux !");
    setTimeout(() => setIsPeeking(false), 1500);
  };

  const handleCardClick = (index) => {
    if (isPeeking || flipped.includes(index) || matched.includes(cards[index].pairId) || flipped.length === 2) {
      return;
    }

    sounds.playPop();
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    doraVoice.speak(cards[index].nameFr);

    if (newFlipped.length === 2) {
      const first = cards[newFlipped[0]];
      const second = cards[newFlipped[1]];

      if (first.pairId === second.pairId) {
        sounds.playSuccess();
        const nextMatched = [...matched, first.pairId];
        setMatched(nextMatched);
        setFlipped([]);

        const praise = `Bravo ! Tu as trouvé les deux ${first.nameFr}s !`;
        onNiaSpeak(praise);
        doraVoice.speak(praise);

        if (nextMatched.length === level.pairsCount) {
          confetti({ particleCount: 80, spread: 70 });
          if (onRewardStar) onRewardStar();
          setTimeout(() => {
            const win = "Youpi ! Toutes les paires sont trouvées ! Quelle mémoire de champion !";
            onNiaSpeak(win);
            doraVoice.speak(win);
          }, 700);
        }
      } else {
        setTimeout(() => {
          sounds.playBloop();
          setFlipped([]);
        }, 1050);
      }
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header memory-theme">
        <div className="header-info">
          <span className="card-badge-icon">🧩</span>
          <div>
            <h2 className="card-main-title">Jeu de Mémoire & Paires</h2>
            <p className="card-subtitle">Retourne les cartes et rassemble les paires d'animaux avec Tyanna !</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={handleMagicPeek}
            className="refresh-mission-btn"
            style={{ background: 'linear-gradient(135deg, #0984e3, #00cec9)', color: '#fff', border: '2px solid #fff' }}
          >
            <Eye size={18} /> Indice Magique
          </button>
          <button onClick={() => startNewGame(level)} className="refresh-mission-btn">
            <RotateCcw size={18} /> Recommencer
          </button>
        </div>
      </div>

      {/* Difficulty Level Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '8px' }}>
        {LEVELS.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => {
              sounds.playPop();
              setLevel(lvl);
            }}
            className={`num-mode-tab-btn ${level.id === lvl.id ? 'active' : ''}`}
          >
            {lvl.label}
          </button>
        ))}
      </div>

      <div className="memory-game-arena">
        <div
          className="memory-cards-grid"
          style={{
            gridTemplateColumns: level.pairsCount === 6 ? 'repeat(4, 1fr)' : level.pairsCount === 4 ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)',
            maxWidth: level.pairsCount >= 4 ? '540px' : '440px'
          }}
        >
          {cards.map((card, idx) => {
            const isMatched = matched.includes(card.pairId);
            const isFlipped = isPeeking || flipped.includes(idx) || isMatched;
            return (
              <button
                key={card.id}
                onClick={() => handleCardClick(idx)}
                className={`memory-card-tile ${isFlipped ? 'is-revealed' : ''}`}
                style={{
                  borderColor: isMatched ? '#10b981' : isFlipped ? card.color : '#f59e0b',
                  background: isMatched ? '#d1fae5' : isFlipped ? '#fffdf0' : '#ffffff'
                }}
              >
                {isFlipped ? (
                  <div className="card-front-content animate-pop">
                    <span className="memory-card-emoji">{card.emoji}</span>
                    <span className="memory-card-label">{card.nameFr}</span>
                  </div>
                ) : (
                  <div className="card-back-pattern">
                    <span className="card-paw" style={{ fontSize: '2.4rem' }}>🐾</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {matched.length === level.pairsCount && (
          <div className="memory-win-banner animate-pop">
            <CheckCircle2 size={40} color="#00b894" />
            <h3>🎉 Bravo ! Toutes les {level.pairsCount} paires sont réunies !</h3>
            <button onClick={() => startNewGame(level)} className="action-button primary large">
              Rejouer une partie ! 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
