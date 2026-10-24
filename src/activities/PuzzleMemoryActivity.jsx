import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Puzzle, Sparkles, RotateCcw, CheckCircle2 } from 'lucide-react';

const MEMORY_CARDS = [
  { id: 1, pairId: 'dog', emoji: '🐶', nameFr: 'Chien' },
  { id: 2, pairId: 'dog', emoji: '🐶', nameFr: 'Chien' },
  { id: 3, pairId: 'cat', emoji: '🐱', nameFr: 'Chat' },
  { id: 4, pairId: 'cat', emoji: '🐱', nameFr: 'Chat' },
  { id: 5, pairId: 'duck', emoji: '🦆', nameFr: 'Canard' },
  { id: 6, pairId: 'duck', emoji: '🦆', nameFr: 'Canard' },
];

export default function PuzzleMemoryActivity({ onNiaSpeak, onRewardStar }) {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Shuffle cards
    const shuffled = [...MEMORY_CARDS].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    const welcome = "Jeu de mémoire ! Retourne les cartes pour trouver les deux animaux identiques !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const handleCardClick = (index) => {
    if (flipped.includes(index) || matched.includes(cards[index].pairId) || flipped.length === 2) {
      return;
    }

    sounds.playPop();
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const first = cards[newFlipped[0]];
      const second = cards[newFlipped[1]];

      if (first.pairId === second.pairId) {
        // Matched!
        sounds.playSuccess();
        const nextMatched = [...matched, first.pairId];
        setMatched(nextMatched);
        setFlipped([]);

        const praise = `Bravo ! Tu as trouvé la paire de ${first.nameFr} !`;
        onNiaSpeak(praise);
        doraVoice.speak(praise);

        if (nextMatched.length === 3) {
          confetti({ particleCount: 70, spread: 60 });
          if (onRewardStar) onRewardStar();
          setTimeout(() => {
            const win = "Youpi ! Tu as gagné le jeu de mémoire ! Tu as une excellente mémoire !";
            onNiaSpeak(win);
            doraVoice.speak(win);
          }, 800);
        }
      } else {
        // Not matching
        setTimeout(() => {
          sounds.playBloop();
          setFlipped([]);
        }, 1100);
      }
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header memory-theme">
        <div className="header-info">
          <span className="card-badge-icon">🧩</span>
          <div>
            <h2 className="card-main-title">Jeu de Mémoire & Puzzle</h2>
            <p className="card-subtitle">Retrouve les paires d'animaux rigolos !</p>
          </div>
        </div>
        <button onClick={startNewGame} className="refresh-mission-btn">
          <RotateCcw size={18} /> Recommencer
        </button>
      </div>

      <div className="memory-game-arena">
        <div className="memory-cards-grid">
          {cards.map((card, idx) => {
            const isFlipped = flipped.includes(idx) || matched.includes(card.pairId);
            return (
              <button
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`memory-card-tile ${isFlipped ? 'is-revealed' : ''}`}
              >
                {isFlipped ? (
                  <div className="card-front-content animate-pop">
                    <span className="memory-card-emoji">{card.emoji}</span>
                    <span className="memory-card-label">{card.nameFr}</span>
                  </div>
                ) : (
                  <div className="card-back-pattern">
                    <span className="card-paw">🐾</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {matched.length === 3 && (
          <div className="memory-win-banner animate-pop">
            <CheckCircle2 size={40} color="#00b894" />
            <h3>🎉 Toutes les paires sont réunies ! Bravo champion !</h3>
            <button onClick={startNewGame} className="action-button primary large">
              Rejouer une partie ! 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
