import React, { useState, useEffect, useRef } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, Plus, Minus, Hash, Play, Star } from 'lucide-react';

const NUMBERS = [
  { num: 1, fr: 'Un', en: 'One', item: '🦄', itemFr: 'licorne' },
  { num: 2, fr: 'Deux', en: 'Two', item: '🐶', itemFr: 'chiots' },
  { num: 3, fr: 'Trois', en: 'Three', item: '🍎', itemFr: 'pommes' },
  { num: 4, fr: 'Quatre', en: 'Four', item: '🚗', itemFr: 'voitures' },
  { num: 5, fr: 'Cinq', en: 'Five', item: '⭐', itemFr: 'étoiles' },
  { num: 6, fr: 'Six', en: 'Six', item: '🍓', itemFr: 'fraises' },
  { num: 7, fr: 'Sept', en: 'Seven', item: '🎈', itemFr: 'ballons' },
  { num: 8, fr: 'Huit', en: 'Eight', item: '🐥', itemFr: 'poussins' },
  { num: 9, fr: 'Neuf', en: 'Nine', item: '🦋', itemFr: 'papillons' },
  { num: 10, fr: 'Dix', en: 'Ten', item: '🦖', itemFr: 'dinosaures' },
  { num: 11, fr: 'Onze', en: 'Eleven', item: '🧁', itemFr: 'gâteaux' },
  { num: 12, fr: 'Douze', en: 'Twelve', item: '🐸', itemFr: 'grenouilles' },
  { num: 13, fr: 'Treize', en: 'Thirteen', item: '🌸', itemFr: 'fleurs' },
  { num: 14, fr: 'Quatorze', en: 'Fourteen', item: '🐠', itemFr: 'poissons' },
  { num: 15, fr: 'Quinze', en: 'Fifteen', item: '🍪', itemFr: 'biscuits' },
  { num: 16, fr: 'Seize', en: 'Sixteen', item: '🐝', itemFr: 'abeilles' },
  { num: 17, fr: 'Dix-sept', en: 'Seventeen', item: '🍒', itemFr: 'cerises' },
  { num: 18, fr: 'Dix-huit', en: 'Eighteen', item: '🐢', itemFr: 'tortues' },
  { num: 19, fr: 'Dix-neuf', en: 'Nineteen', item: '🌈', itemFr: 'arcs-en-ciel' },
  { num: 20, fr: 'Vingt', en: 'Twenty', item: '💎', itemFr: 'diamants' },
];

const ADDITIONS = [
  { a: 1, b: 1, res: 2, item: '🍎', itemFr: 'pomme', choices: [1, 2, 3] },
  { a: 2, b: 1, res: 3, item: '🎈', itemFr: 'ballon', choices: [2, 3, 4] },
  { a: 2, b: 2, res: 4, item: '🍓', itemFr: 'fraise', choices: [3, 4, 5] },
  { a: 3, b: 1, res: 4, item: '⭐', itemFr: 'étoile', choices: [2, 4, 5] },
  { a: 3, b: 2, res: 5, item: '🐶', itemFr: 'chiot', choices: [4, 5, 6] },
  { a: 4, b: 1, res: 5, item: '🐥', itemFr: 'poussin', choices: [3, 5, 6] },
  { a: 3, b: 3, res: 6, item: '🧁', itemFr: 'gâteau', choices: [5, 6, 7] },
  { a: 4, b: 2, res: 6, item: '🚗', itemFr: 'voiture', choices: [4, 6, 8] },
];

const SUBTRACTIONS = [
  { a: 2, b: 1, res: 1, item: '🍪', itemFr: 'biscuit', choices: [1, 2, 3] },
  { a: 3, b: 1, res: 2, item: '🧁', itemFr: 'gâteau', choices: [1, 2, 3] },
  { a: 3, b: 2, res: 1, item: '🍎', itemFr: 'pomme', choices: [1, 2, 4] },
  { a: 4, b: 1, res: 3, item: '🚗', itemFr: 'voiture', choices: [2, 3, 4] },
  { a: 4, b: 2, res: 2, item: '🎈', itemFr: 'ballon', choices: [1, 2, 3] },
  { a: 5, b: 2, res: 3, item: '🐥', itemFr: 'poussin', choices: [2, 3, 5] },
  { a: 5, b: 1, res: 4, item: '🍓', itemFr: 'fraise', choices: [3, 4, 5] },
  { a: 6, b: 3, res: 3, item: '⭐', itemFr: 'étoile', choices: [2, 3, 4] },
];

export default function NumbersActivity({ onNiaSpeak, onRewardStar }) {
  const [subMode, setSubMode] = useState('counting'); // 'counting', 'addition', 'subtraction'
  const [activeNum, setActiveNum] = useState(NUMBERS[0]);
  const [countedIndices, setCountedIndices] = useState([]);
  const [isAutoCounting, setIsAutoCounting] = useState(false);
  const [streak, setStreak] = useState(0);
  const autoCountTimerRef = useRef(null);

  // Math quiz states
  const [addIdx, setAddIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);

  useEffect(() => {
    promptCurrentMode();
    return () => {
      if (autoCountTimerRef.current) clearInterval(autoCountTimerRef.current);
    };
  }, [subMode, addIdx, subIdx]);

  const promptCurrentMode = () => {
    if (subMode === 'counting') {
      const msg = `Voici le chiffre ${activeNum.num} (${activeNum.fr}) ! Touche chaque ${activeNum.itemFr} pour compter jusqu'à ${activeNum.num} !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (subMode === 'addition') {
      const eq = ADDITIONS[addIdx % ADDITIONS.length];
      const msg = `Combien font ${eq.a} plus ${eq.b} ? Touche et compte tous les ${eq.itemFr}s ensemble !`;
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
    if (autoCountTimerRef.current) clearInterval(autoCountTimerRef.current);
    setIsAutoCounting(false);
    setActiveNum(n);
    setCountedIndices([]);
    sounds.playPop();
    const msg = `Chiffre ${n.num} : ${n.fr} ! Compte les ${n.num} ${n.itemFr} !`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(msg, `Number ${n.num}! ${n.en}!`);
  };

  const handleTapCountItem = (idx) => {
    if (isAutoCounting) return;
    sounds.playPop();

    let nextCounted;
    if (countedIndices.includes(idx)) {
      doraVoice.speak(`${idx + 1}`);
      return;
    } else {
      nextCounted = [...countedIndices, idx];
      setCountedIndices(nextCounted);
    }

    const currentTotal = nextCounted.length;
    doraVoice.speak(`${currentTotal}`);

    if (currentTotal === activeNum.num) {
      sounds.playSuccess();
      confetti({ particleCount: 55, spread: 65 });
      if (onRewardStar) onRewardStar();
      setTimeout(() => {
        const win = `Bravo ! Tu as compté jusqu'à ${activeNum.num} (${activeNum.fr}) !`;
        onNiaSpeak(win);
        doraVoice.speak(win);
      }, 650);
    }
  };

  const handleAutoCountWithTyanna = () => {
    if (isAutoCounting) return;
    setIsAutoCounting(true);
    setCountedIndices([]);
    let current = 0;

    autoCountTimerRef.current = setInterval(() => {
      if (current < activeNum.num) {
        const stepIdx = current;
        sounds.playPop();
        setCountedIndices((prev) => [...prev, stepIdx]);
        doraVoice.speak(`${stepIdx + 1}`);
        current += 1;
      } else {
        clearInterval(autoCountTimerRef.current);
        setIsAutoCounting(false);
        sounds.playSuccess();
        confetti({ particleCount: 50, spread: 60 });
        if (onRewardStar) onRewardStar();
        const win = `Youpi ! ${activeNum.num} (${activeNum.fr}) ! Tu comptes super bien avec moi !`;
        onNiaSpeak(win);
        doraVoice.speak(win);
      }
    }, 650);
  };

  const handleTouchMathObject = (numberToSpeak) => {
    sounds.playPop();
    doraVoice.speak(`${numberToSpeak}`);
  };

  // Addition answer check
  const handleAdditionAnswer = (choice, eq) => {
    if (choice === eq.res) {
      sounds.playSuccess();
      setStreak((s) => s + 1);
      confetti({ particleCount: 65, spread: 65 });
      if (onRewardStar) onRewardStar();
      const praise = `Youpi ! ${eq.a} plus ${eq.b} égale ${eq.res} ! Tu es un génie du calcul !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
      setTimeout(() => setAddIdx((i) => i + 1), 2200);
    } else {
      sounds.playBloop();
      const tryAgain = `Touche chaque ${eq.itemFr} pour les compter : ${eq.a} et encore ${eq.b}, ça fait ${eq.res} ! Essaie encore !`;
      onNiaSpeak(tryAgain);
      doraVoice.speak(tryAgain);
    }
  };

  // Subtraction answer check
  const handleSubtractionAnswer = (choice, eq) => {
    if (choice === eq.res) {
      sounds.playSuccess();
      setStreak((s) => s + 1);
      confetti({ particleCount: 65, spread: 65 });
      if (onRewardStar) onRewardStar();
      const praise = `Bravo ! ${eq.a} moins ${eq.b} égale ${eq.res} ! C'est la bonne réponse !`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);
      setTimeout(() => setSubIdx((i) => i + 1), 2200);
    } else {
      sounds.playBloop();
      const hint = `Regarde les ${eq.itemFr}s qui ne sont pas barrés : il en reste ${eq.res} ! Touche le chiffre ${eq.res} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  return (
    <div className="center-activity-card">
      {/* Activity Header */}
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #0984e3, #00cec9)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🔢</span>
          <div>
            <h2 className="card-main-title">Les Nombres, Additions & Soustractions</h2>
            <p className="card-subtitle">Apprends à compter de 1 à 20 et calcule en t'amusant avec Tyanna !</p>
          </div>
        </div>
        {streak > 0 && (
          <div className="score-pill-header luxury-score-pill">
            <Star size={18} fill="#ffd32a" color="#ffd32a" />
            <span>Série : <strong>{streak} 🔥</strong></span>
          </div>
        )}
      </div>

      {/* Sub-mode Tabs Bar */}
      <div className="numbers-mode-switcher">
        <button
          onClick={() => { sounds.playPop(); setSubMode('counting'); }}
          className={`num-mode-tab-btn ${subMode === 'counting' ? 'active' : ''}`}
        >
          <Hash size={18} /> 1 à 20 (Compter)
        </button>
        <button
          onClick={() => { sounds.playPop(); setSubMode('addition'); }}
          className={`num-mode-tab-btn ${subMode === 'addition' ? 'active' : ''}`}
        >
          <Plus size={18} /> Additions (+)
        </button>
        <button
          onClick={() => { sounds.playPop(); setSubMode('subtraction'); }}
          className={`num-mode-tab-btn ${subMode === 'subtraction' ? 'active' : ''}`}
        >
          <Minus size={18} /> Soustractions (-)
        </button>
      </div>

      <div className="numbers-stage-body">
        {/* ================= MODE 1: COUNTING 1 TO 20 ================= */}
        {subMode === 'counting' && (
          <>
            <div className="numbers-playground-box">
              <div className="active-number-badge" onClick={() => handleSelectNumber(activeNum)} style={{ cursor: 'pointer' }}>
                <span className="giant-num-digit">{activeNum.num}</span>
                <div className="num-names">
                  <span className="fr-name">{activeNum.fr} {activeNum.item}</span>
                  <span className="en-name">({activeNum.en})</span>
                </div>
              </div>

              <div className="counting-stars-area">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                  <p className="counting-hint" style={{ margin: 0 }}>
                    Touche chaque <strong>{activeNum.itemFr}</strong> ({countedIndices.length} / {activeNum.num}) :
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={handleAutoCountWithTyanna}
                      disabled={isAutoCounting}
                      className="listen-again-btn"
                      style={{ padding: '6px 12px', fontSize: '0.82rem', background: 'linear-gradient(135deg, #00b894, #00cec9)', color: '#fff', border: 'none', borderRadius: '999px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                      <Play size={14} fill="#fff" /> Compter avec Tyanna
                    </button>
                    <button
                      onClick={() => setCountedIndices([])}
                      className="listen-again-btn"
                      style={{ padding: '6px 10px', fontSize: '0.8rem', background: '#f1f2f6', color: '#2f3542', border: 'none', borderRadius: '999px', fontWeight: 800, cursor: 'pointer' }}
                    >
                      🔄
                    </button>
                  </div>
                </div>

                {/* Visual Progress Bar */}
                <div style={{ width: '100%', height: '10px', background: '#dfe6e9', borderRadius: '999px', overflow: 'hidden', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: `${(countedIndices.length / activeNum.num) * 100}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #00d2d3, #10ac84)',
                      transition: 'width 0.25s ease'
                    }}
                  />
                </div>

                <div className="stars-interactive-grid">
                  {Array.from({ length: activeNum.num }).map((_, idx) => {
                    const isCounted = countedIndices.includes(idx);
                    const orderNumber = isCounted ? countedIndices.indexOf(idx) + 1 : idx + 1;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleTapCountItem(idx)}
                        className={`pop-star-item animate-pop ${isCounted ? 'is-counted' : ''}`}
                      >
                        <span style={{ fontSize: '1.8rem' }}>{activeNum.item}</span>
                        <span className="star-num-label">{orderNumber}</span>
                      </button>
                    );
                  })}
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
                  <span className="tile-num-fr">{item.fr} {item.item}</span>
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
                          <button
                            key={i}
                            onClick={() => handleTouchMathObject(i + 1)}
                            className="math-item-emoji animate-bounce-soft"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                            title={`Compter ${i + 1}`}
                          >
                            {eq.item}
                            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#0984e3' }}>{i + 1}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <span className="math-operator-symbol">+</span>

                    {/* Group B */}
                    <div className="math-group-pill">
                      <span className="math-group-number">{eq.b}</span>
                      <div className="math-items-row">
                        {Array.from({ length: eq.b }).map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handleTouchMathObject(eq.a + i + 1)}
                            className="math-item-emoji animate-bounce-soft"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                            title={`Compter ${eq.a + i + 1}`}
                          >
                            {eq.item}
                            <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#10ac84' }}>{eq.a + i + 1}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <span className="math-operator-symbol">=</span>
                    <span className="math-question-mark">?</span>
                  </div>

                  <p className="math-question-text">
                    👆 Touche les {eq.itemFr}s pour les compter : <strong>{eq.a} + {eq.b} = ?</strong>
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
                    {/* Initial total with visual crossed-out items */}
                    <div className="math-group-pill">
                      <span className="math-group-number">{eq.a}</span>
                      <div className="math-items-row">
                        {Array.from({ length: eq.a }).map((_, i) => {
                          const isTaken = i >= eq.a - eq.b;
                          return (
                            <button
                              key={i}
                              onClick={() => !isTaken && handleTouchMathObject(i + 1)}
                              className={`math-item-emoji ${isTaken ? 'is-taken-away' : 'animate-bounce-soft'}`}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                            >
                              {eq.item}
                              <div style={{ fontSize: '0.7rem', fontWeight: 900, color: isTaken ? '#e74c3c' : '#10ac84' }}>
                                {isTaken ? '❌' : i + 1}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <span className="math-operator-symbol">-</span>

                    {/* Amount removed */}
                    <div className="math-group-pill removed-pill">
                      <span className="math-group-number">{eq.b}</span>
                      <span className="removed-tag">Enlevé</span>
                    </div>

                    <span className="math-operator-symbol">=</span>
                    <span className="math-question-mark">?</span>
                  </div>

                  <p className="math-question-text">
                    Il y avait {eq.a} {eq.itemFr}s, on en enlève {eq.b} (❌). Combien en reste-t-il ?
                  </p>

                  {/* 3 Large Toddler Choices */}
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
