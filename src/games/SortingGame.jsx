import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { BrainCircuit, CheckCircle2, RotateCcw } from 'lucide-react';

const CHALLENGES = [
  {
    targetColor: 'red',
    labelFr: 'le cercle ROUGE',
    labelEn: 'the RED circle',
    correctId: 'red-circle',
    items: [
      { id: 'red-circle', shape: 'circle', color: '#ff4757', labelFr: 'Cercle Rouge', labelEn: 'Red Circle' },
      { id: 'blue-square', shape: 'square', color: '#1e90ff', labelFr: 'Carré Bleu', labelEn: 'Blue Square' },
      { id: 'yellow-triangle', shape: 'triangle', color: '#ffa502', labelFr: 'Triangle Jaune', labelEn: 'Yellow Triangle' }
    ]
  },
  {
    targetColor: 'blue',
    labelFr: 'l\'étoile BLEUE',
    labelEn: 'the BLUE star',
    correctId: 'blue-star',
    items: [
      { id: 'yellow-sun', shape: 'circle', color: '#ffa502', labelFr: 'Cercle Jaune', labelEn: 'Yellow Circle' },
      { id: 'blue-star', shape: 'star', color: '#1e90ff', labelFr: 'Étoile Bleue', labelEn: 'Blue Star' },
      { id: 'green-square', shape: 'square', color: '#2ed573', labelFr: 'Carré Vert', labelEn: 'Green Square' }
    ]
  },
  {
    targetColor: 'yellow',
    labelFr: 'le carré JAUNE',
    labelEn: 'the YELLOW square',
    correctId: 'yellow-sq',
    items: [
      { id: 'green-circle', shape: 'circle', color: '#2ed573', labelFr: 'Cercle Vert', labelEn: 'Green Circle' },
      { id: 'red-heart', shape: 'heart', color: '#ff4757', labelFr: 'Cœur Rouge', labelEn: 'Red Heart' },
      { id: 'yellow-sq', shape: 'square', color: '#ffa502', labelFr: 'Carré Jaune', labelEn: 'Yellow Square' }
    ]
  },
  {
    targetColor: 'green',
    labelFr: 'le cœur VERT',
    labelEn: 'the GREEN heart',
    correctId: 'green-heart',
    items: [
      { id: 'green-heart', shape: 'heart', color: '#2ed573', labelFr: 'Cœur Vert', labelEn: 'Green Heart' },
      { id: 'blue-circle', shape: 'circle', color: '#1e90ff', labelFr: 'Cercle Bleu', labelEn: 'Blue Circle' },
      { id: 'red-star', shape: 'star', color: '#ff4757', labelFr: 'Étoile Rouge', labelEn: 'Red Star' }
    ]
  }
];

export default function SortingGame({ onTeacherPrompt }) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [won, setWon] = useState(false);

  const currentLevel = CHALLENGES[levelIndex % CHALLENGES.length];

  useEffect(() => {
    askQuestion();
  }, [levelIndex]);

  const askQuestion = () => {
    setWon(false);
    const lvl = CHALLENGES[levelIndex % CHALLENGES.length];
    const prompt = `Trouve et touche : ${lvl.labelFr} !`;
    onTeacherPrompt(prompt);
    teacher.speakBilingual(prompt, `Find and tap: ${lvl.labelEn}!`);
  };

  const handleSelect = (item) => {
    if (item.id === currentLevel.correctId) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      setWon(true);
      const msg = `Bravo champion ! C'est exactement ${item.labelFr} ! Tu es très fort !`;
      onTeacherPrompt(msg);
      teacher.speakBilingual(msg, `Great job champion! That's ${item.labelEn}!`);
    } else {
      sounds.playBloop();
      const tryAgain = `Presque ! Regarde bien, cherchons ${currentLevel.labelFr} ! Essaie encore !`;
      onTeacherPrompt(tryAgain);
      teacher.speakFrench(tryAgain);
    }
  };

  const nextChallenge = () => {
    setLevelIndex((prev) => prev + 1);
  };

  const renderShapeIcon = (shape, color) => {
    switch (shape) {
      case 'circle':
        return <div className="shape-circle" style={{ backgroundColor: color }}></div>;
      case 'square':
        return <div className="shape-square" style={{ backgroundColor: color }}></div>;
      case 'star':
        return <span className="shape-star" style={{ color: color }}>★</span>;
      case 'heart':
        return <span className="shape-heart" style={{ color: color }}>♥</span>;
      default:
        return <div className="shape-circle" style={{ backgroundColor: color }}></div>;
    }
  };

  return (
    <div className="game-card sorting-stage">
      <div className="game-header">
        <h2 className="game-title">
          <BrainCircuit className="game-icon" /> Résolution & Couleurs Faciles 🧩
        </h2>
        <button onClick={askQuestion} className="action-button secondary">
          <RotateCcw size={22} /> Répéter la consigne
        </button>
      </div>

      <div className="sorting-arena">
        <div className="challenge-prompt-card">
          <span className="prompt-badge">Consigne de la maîtresse :</span>
          <p className="prompt-text">Où se trouve <strong>{currentLevel.labelFr}</strong> ?</p>
          <span className="prompt-english">({currentLevel.labelEn})</span>
        </div>

        {/* 3 Large Toddler-Friendly Choice Buttons */}
        <div className="shapes-grid">
          {currentLevel.items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className="shape-button"
            >
              <div className="shape-preview">
                {renderShapeIcon(item.shape, item.color)}
              </div>
              <span className="shape-label-fr">{item.labelFr}</span>
              <span className="shape-label-en">{item.labelEn}</span>
            </button>
          ))}
        </div>

        {won && (
          <div className="level-complete-card">
            <CheckCircle2 size={44} className="win-icon" />
            <h3>🎉 Bravo ! C'est la bonne réponse !</h3>
            <button onClick={nextChallenge} className="action-button primary large">
              Jeu suivant ! ➡️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
