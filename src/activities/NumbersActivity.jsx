import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Volume2, Sparkles, Star } from 'lucide-react';

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

export default function NumbersActivity({ onNiaSpeak, onRewardStar }) {
  const [activeNum, setActiveNum] = useState(NUMBERS[0]);
  const [missionNum, setMissionNum] = useState(null);
  const [poppedCount, setPoppedCount] = useState(0);

  useEffect(() => {
    startNumberMission();
  }, []);

  const startNumberMission = () => {
    // Pick a number for the toddler to find (1-10 or 1-20)
    const target = NUMBERS[Math.floor(Math.random() * 10)];
    setMissionNum(target);
    setPoppedCount(0);
    const msg = `Peux-tu trouver le chiffre ${target.num} (${target.fr}) ?`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleSelectNumber = (n) => {
    setActiveNum(n);
    setPoppedCount(0);
    sounds.playPop();

    if (missionNum && n.num === missionNum.num) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60 });
      if (onRewardStar) onRewardStar();
      const praise = `Youpi ! C'est exactement le chiffre ${n.num} ! ${n.fr} ! Touche les étoiles pour les compter !`;
      onNiaSpeak(praise);
      doraVoice.speakBilingual(praise, `Number ${n.num}! ${n.en}!`);
    } else {
      const phrase = `C'est le chiffre ${n.num} ! ${n.fr} !`;
      onNiaSpeak(phrase);
      doraVoice.speakBilingual(phrase, `${n.en}!`);
    }
  };

  const handlePopStar = (idx) => {
    sounds.playPop();
    const nextCount = poppedCount + 1;
    setPoppedCount(nextCount);
    doraVoice.speak(`${idx + 1}`);

    if (nextCount === activeNum.num) {
      sounds.playSuccess();
      confetti({ particleCount: 40, spread: 50 });
      const win = `Bravo ! Tu as compté ${activeNum.num} étoiles ! Tu es un champion du calcul !`;
      onNiaSpeak(win);
      doraVoice.speak(win);
      setTimeout(startNumberMission, 3500);
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header numbers-theme">
        <div className="header-info">
          <span className="card-badge-icon">🔢</span>
          <div>
            <h2 className="card-main-title">Les Chiffres de 1 à 20</h2>
            <p className="card-subtitle">Compte les étoiles avec Nia !</p>
          </div>
        </div>
        <button onClick={startNumberMission} className="refresh-mission-btn">
          <RotateCcw size={18} /> Autre chiffre
        </button>
      </div>

      {/* Counting Playground Spotlight */}
      <div className="numbers-playground-box">
        <div className="active-number-badge">
          <span className="giant-num-digit">{activeNum.num}</span>
          <div className="num-names">
            <span className="fr-name">{activeNum.fr}</span>
            <span className="en-name">({activeNum.en})</span>
          </div>
        </div>

        {/* Interactive Counting Items (Stars) */}
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

      {/* Grid of numbers 1 to 20 */}
      <div className="numbers-grid-container">
        {NUMBERS.map((item) => {
          const isSelected = activeNum.num === item.num;
          const isTarget = missionNum && missionNum.num === item.num;
          return (
            <button
              key={item.num}
              onClick={() => handleSelectNumber(item)}
              className={`num-tile-btn ${isSelected ? 'selected' : ''} ${isTarget ? 'is-target-num' : ''}`}
            >
              <span className="tile-number-digit">{item.num}</span>
              <span className="tile-num-fr">{item.fr}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
