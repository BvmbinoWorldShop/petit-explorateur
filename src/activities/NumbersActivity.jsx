import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, Plus, Minus, Hash } from 'lucide-react';

const NUMBERS = [
  { num: 1, fr: 'Un', en: 'One' },
  { num: 2, fr: 'Deux', en: 'Two' },
  { num: 3, fr: 'Trois', en: 'Three' },
  { num: 4, fr: 'Quatre', en: 'Four' },
  { num: 5, fr: 'Cinq', en: 'Five' },
  { num: 6, fr: 'Six', en: 'Six' },
  { num: 7, fr: 'Sept', en: 'Seven' },
  { num: 8, fr: 'Huit', en: 'Eight' },
  { num: 9, fr: 'Neuf', en: 'Nine' },
  { num: 10, fr: 'Dix', en: 'Ten' },
  { num: 11, fr: 'Onze', en: 'Eleven' },
  { num: 12, fr: 'Douze', en: 'Twelve' },
  { num: 13, fr: 'Treize', en: 'Thirteen' },
  { num: 14, fr: 'Quatorze', en: 'Fourteen' },
  { num: 15, fr: 'Quinze', en: 'Fifteen' },
  { num: 16, fr: 'Seize', en: 'Sixteen' },
  { num: 17, fr: 'Dix-sept', en: 'Seventeen' },
  { num: 18, fr: 'Dix-huit', en: 'Eighteen' },
  { num: 19, fr: 'Dix-neuf', en: 'Nineteen' },
  { num: 20, fr: 'Vingt', en: 'Twenty' },
];

const ADDITIONS = [
  { a: 1, b: 1, res: 2, item: '🍎', itemFr: 'pomme', choices: [2, 3, 1] },
  { a: 2, b: 1, res: 3, item: '🎈', itemFr: 'ballon', choices: [3, 4, 2] },
  { a: 2, b: 2, res: 4, item: '🍓', itemFr: 'fraise', choices: [4, 5, 3] },
  { a: 3, b: 1, res: 4, item: '⭐', itemFr: 'étoile', choices: [4, 2, 5] },
  { a: 3, b: 2, res: 5, item: '🐶', itemFr: 'chiot', choices: [5, 4, 6] },
];

const SUBTRACTIONS = [
  { a: 3, b: 1, res: 2, item: '🧁', itemFr: 'gâteau', choices: [2, 1, 3] },
  { a: 4, b: 1, res: 3, item: '🚗', itemFr: 'voiture', choices: [3, 4, 2] },
  { a: 5, b: 2, res: 3, item: '🐥', itemFr: 'poussin', choices: [3, 5, 2] },
  { a: 2, b: 1, res: 1, item: '🍪', itemFr: 'biscuit', choices: [1, 2, 0] },
];

export default function NumbersActivity({ onNiaSpeak, onRewardStar }) {
  const [subMode, setSubMode] = useState('counting'); // 'counting', 'addition', 'subtraction'
  const [activeNum, setActiveNum] = useState(NUMBERS[0]);
  const [poppedCount, setPoppedCount] = useState(0);

  // Math quiz states
  const [addIdx, setAddIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  useEffect(() => {
    promptCurrentMode();
  }, [subMode, addIdx, subIdx]);

  const promptCurrentMode = () => {
    if (subMode === 'counting') {
      const msg = `Voici le chiffre ${activeNum.num} ! Touche les étoiles pour compter jusqu'à ${activeNum.num} !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (subMode === 'addition') {
      const eq = ADDITIONS[addIdx % ADDITIONS.length];
      const msg = `Combien font ${eq.a} plus ${eq.b} ? Compte les ${eq.itemFr}s !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (subMode === 'subtraction') {
      const eq = SUBTRACTIONS[subIdx % SUBTRACTIONS.length];
      const msg = `Tu as ${eq.a} ${eq.itemFr}s, et on en enlève ${eq.b} ! Combien en reste-t-il ?`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    }
  };

  const handleSelectNumber = (n) => {
    setActiveNum(n);
    setPoppedCount(0);
    sounds.playPop();
    const msg = `Chiffre ${n.num} ! (${n.fr}) !`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(msg, `Number ${n.num}! ${n.en}!`);
  };

  const handlePopStar = (idx) => {
    sounds.playPop();
    const nextCount = poppedCount + 1;
    setPoppedCount(nextCount);
    doraVoice.speak(`${idx + 1}`);

    if (nextCount === activeNum.num) {
      sounds.playSuccess();
      confetti({ particleCount: 40, spread: 50 });
      if (onRewardStar) onRewardStar();
      const win = `Bravo ! Tu as compté ${activeNum.num} étoiles !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
    }
  };

  // Addition answer check
  const handleAdditionAnswer = (choice, eq) => {
    if (choice === eq.res) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 60 });
      if (onRewardStar) onRewardStar();
      const praise = `Youpi ! ${eq.a} plus ${eq.b} égale ${eq.res} ! Tu es un génie du calcul !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
      setTimeout(() => setAddIdx((i) => i + 1), 2400);
    } else {
      sounds.playBloop();
      const tryAgain = `Compte avec tes doigts : ${eq.a} et encore ${eq.b} ! Réessaie !`;
      onNiaSpeak(tryAgain);
      doraVoice.speak(tryAgain);
    }
  };

  // Subtraction answer check
  const handleSubtractionAnswer = (choice, eq) => {
    if (choice === eq.res) {
      sounds.playSuccess();
      confetti({ particleCount: 60, spread: 60 });
      if (onRewardStar) onRewardStar();
      const praise = `Bravo ! ${eq.a} moins ${eq.b} égale ${eq.res} ! C'est la bonne réponse !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
      setTimeout(() => setSubIdx((i) => i + 1), 2400);
    } else {
      sounds.playBloop();
      const hint = `Regarde bien les objets qui restent ! Réessaie mon ami !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  return (
    <div className="center-activity-card">
      {/* Activity Header */}
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #0984e3, #74b9ff)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🔢</span>
          <div>
            <h2 className="card-main-title">Les Nombres, Additions & Soustractions</h2>
            <p className="card-subtitle">Compter de 1 à 20, faire des additions et soustractions avec Tyanna !</p>
          </div>
        </div>
      </div>

      {/* Sub-mode Tabs Bar */}
      <div className="numbers-mode-switcher">
        <button
          onClick={() => { sounds.playPop(); setSubMode('counting'); }}
          className={`num-mode-tab-btn ${subMode === 'counting' ? 'active' : ''}`}
        >
          <Hash size={20} /> 1 à 20 (Cartes & Comptage)
        </button>
        <button
          onClick={() => { sounds.playPop(); setSubMode('addition'); }}
          className={`num-mode-tab-btn ${subMode === 'addition' ? 'active' : ''}`}
        >
          <Plus size={20} /> Additions Faciles (+)
        </button>
        <button
          onClick={() => { sounds.playPop(); setSubMode('subtraction'); }}
          className={`num-mode-tab-btn ${subMode === 'subtraction' ? 'active' : ''}`}
        >
          <Minus size={20} /> Soustractions Faciles (-)
        </button>
      </div>

      <div className="numbers-stage-body">
        {/* ================= MODE 1: COUNTING 1 TO 20 ================= */}
        {subMode === 'counting' && (
          <>
            <div className="numbers-playground-box">
              <div className="active-number-badge">
                <span className="giant-num-digit">{activeNum.num}</span>
                <div className="num-names">
                  <span className="fr-name">{activeNum.fr}</span>
                  <span className="en-name">({activeNum.en})</span>
                </div>
              </div>

              <div className="counting-stars-area">
                <p className="counting-hint">Touche chaque étoile pour compter jusqu'à {activeNum.num} :</p>
                <div className="stars-interactive-grid">
                  {Array.from({ length: activeNum.num }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePopStar(idx)}
                      className={`pop-star-item animate-pop ${idx < poppedCount ? 'is-counted' : ''}`}
                    >
                      ⭐
                      <span className="star-num-label">{idx + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="numbers-grid-container">
              {NUMBERS.map((item) => (
                <button
                  key={item.num}
                  onClick={() => handleSelectNumber(item)}
                  className={`num-tile-btn ${activeNum.num === item.num ? 'selected' : ''}`}
                >
                  <span className="tile-number-digit">{item.num}</span>
                  <span className="tile-num-fr">{item.fr}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* ================= MODE 2: ADDITION (+) ================= */}
        {subMode === 'addition' && (
          <div className="math-operation-arena">
            {(() => {
              const eq = ADDITIONS[addIdx % ADDITIONS.length];
              return (
                <div className="math-card-box animate-pop">
                  <div className="math-equation-visual">
                    {/* Group A */}
                    <div className="math-group-pill">
                      <span className="math-group-number">{eq.a}</span>
                      <div className="math-items-row">
                        {Array.from({ length: eq.a }).map((_, i) => (
                          <span key={i} className="math-item-emoji animate-bounce-soft">{eq.item}</span>
                        ))}
                      </div>
                    </div>

                    <span className="math-operator-symbol">+</span>

                    {/* Group B */}
                    <div className="math-group-pill">
                      <span className="math-group-number">{eq.b}</span>
                      <div className="math-items-row">
                        {Array.from({ length: eq.b }).map((_, i) => (
                          <span key={i} className="math-item-emoji animate-bounce-soft">{eq.item}</span>
                        ))}
                      </div>
                    </div>

                    <span className="math-operator-symbol">=</span>
                    <span className="math-question-mark">?</span>
                  </div>

                  <p className="math-question-text">
                    Compte tous les {eq.itemFr}s ensemble ! Combien y en a-t-il ?
                  </p>

                  {/* 3 Large Toddler Choices */}
                  <div className="math-choices-row">
                    {eq.choices.map((choice) => (
                      <button
                        key={choice}
                        onClick={() => handleAdditionAnswer(choice, eq)}
                        className="math-choice-btn animate-pop"
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* ================= MODE 3: SUBTRACTION (-) ================= */}
        {subMode === 'subtraction' && (
          <div className="math-operation-arena">
            {(() => {
              const eq = SUBTRACTIONS[subIdx % SUBTRACTIONS.length];
              return (
                <div className="math-card-box animate-pop">
                  <div className="math-equation-visual">
                    {/* Initial total */}
                    <div className="math-group-pill">
                      <span className="math-group-number">{eq.a}</span>
                      <div className="math-items-row">
                        {Array.from({ length: eq.a }).map((_, i) => (
                          <span
                            key={i}
                            className={`math-item-emoji ${i >= eq.a - eq.b ? 'is-taken-away' : 'animate-bounce-soft'}`}
                          >
                            {eq.item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="math-operator-symbol">-</span>

                    {/* Amount removed */}
                    <div className="math-group-pill removed-pill">
                      <span className="math-group-number">{eq.b}</span>
                      <span className="math-item-emoji is-taken-away">{eq.item}</span>
                    </div>

                    <span className="math-operator-symbol">=</span>
                    <span className="math-question-mark">?</span>
                  </div>

                  <p className="math-question-text">
                    On enlève {eq.b} {eq.itemFr} ! Combien en reste-t-il ?
                  </p>

                  <div className="math-choices-row">
                    {eq.choices.map((choice) => (
                      <button
                        key={choice}
                        onClick={() => handleSubtractionAnswer(choice, eq)}
                        className="math-choice-btn animate-pop"
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}
