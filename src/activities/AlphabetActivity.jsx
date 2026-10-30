import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Volume2, Award, BookOpen, Target, Puzzle } from 'lucide-react';

const ALPHABET = [
  { char: 'A', lower: 'a', sound: 'Aaa', wordFr: 'Avion', wordEn: 'Airplane', emoji: '✈️', color: '#FF7675' },
  { char: 'B', lower: 'b', sound: 'Buh', wordFr: 'Ballon', wordEn: 'Ball', emoji: '⚽', color: '#0984E3' },
  { char: 'C', lower: 'c', sound: 'Kuh', wordFr: 'Chat', wordEn: 'Cat', emoji: '🐱', color: '#F39C12' },
  { char: 'D', lower: 'd', sound: 'Duh', wordFr: 'Dauphin', wordEn: 'Dolphin', emoji: '🐬', color: '#00B894' },
  { char: 'E', lower: 'e', sound: 'Euh', wordFr: 'Éléphant', wordEn: 'Elephant', emoji: '🐘', color: '#6C5CE7' },
  { char: 'F', lower: 'f', sound: 'Fff', wordFr: 'Fleur', wordEn: 'Flower', emoji: '🌸', color: '#FD79A8' },
  { char: 'G', lower: 'g', sound: 'Guh', wordFr: 'Girafe', wordEn: 'Giraffe', emoji: '🦒', color: '#E17055' },
  { char: 'H', lower: 'h', sound: 'Hhh', wordFr: 'Hibou', wordEn: 'Owl', emoji: '🦉', color: '#00CEC9' },
  { char: 'I', lower: 'i', sound: 'Iii', wordFr: 'Île', wordEn: 'Island', emoji: '🏝️', color: '#10AC84' },
  { char: 'J', lower: 'j', sound: 'Jjj', wordFr: 'Jus', wordEn: 'Juice', emoji: '🧃', color: '#FF6B6B' },
  { char: 'K', lower: 'k', sound: 'Kkk', wordFr: 'Koala', wordEn: 'Koala', emoji: '🐨', color: '#636E72' },
  { char: 'L', lower: 'l', sound: 'Lll', wordFr: 'Lion', wordEn: 'Lion', emoji: '🦁', color: '#E67E22' },
  { char: 'M', lower: 'm', sound: 'Mmm', wordFr: 'Maison', wordEn: 'House', emoji: '🏠', color: '#0984E3' },
  { char: 'N', lower: 'n', sound: 'Nnn', wordFr: 'Nuage', wordEn: 'Cloud', emoji: '☁️', color: '#54A0FF' },
  { char: 'O', lower: 'o', sound: 'Ooo', wordFr: 'Ours', wordEn: 'Bear', emoji: '🐻', color: '#B5651D' },
  { char: 'P', lower: 'p', sound: 'Puh', wordFr: 'Pomme', wordEn: 'Apple', emoji: '🍎', color: '#D63031' },
  { char: 'Q', lower: 'q', sound: 'Kuu', wordFr: 'Quatre', wordEn: 'Four', emoji: '4️⃣', color: '#00B894' },
  { char: 'R', lower: 'r', sound: 'Rrr', wordFr: 'Robot', wordEn: 'Robot', emoji: '🤖', color: '#6C5CE7' },
  { char: 'S', lower: 's', sound: 'Sss', wordFr: 'Soleil', wordEn: 'Sun', emoji: '☀️', color: '#F39C12' },
  { char: 'T', lower: 't', sound: 'Tuh', wordFr: 'Train', wordEn: 'Train', emoji: '🚂', color: '#E74C3C' },
  { char: 'U', lower: 'u', sound: 'Uuu', wordFr: 'Unicorne', wordEn: 'Unicorn', emoji: '🦄', color: '#E84393' },
  { char: 'V', lower: 'v', sound: 'Vvv', wordFr: 'Voiture', wordEn: 'Car', emoji: '🚗', color: '#00CEC9' },
  { char: 'W', lower: 'w', sound: 'Www', wordFr: 'Wagon', wordEn: 'Wagon', emoji: '🚃', color: '#FD9644' },
  { char: 'X', lower: 'x', sound: 'Kss', wordFr: 'Xylophone', wordEn: 'Xylophone', emoji: '🎵', color: '#45AAF2' },
  { char: 'Y', lower: 'y', sound: 'Yyy', wordFr: 'Yaourt', wordEn: 'Yogurt', emoji: '🥣', color: '#F1C40F' },
  { char: 'Z', lower: 'z', sound: 'Zzz', wordFr: 'Zèbre', wordEn: 'Zebra', emoji: '🦓', color: '#2D3436' },
];

const WORD_PUZZLES = [
  { word: 'CHAT', emoji: '🐱', hintFr: 'Le petit félin qui fait Miaou', en: 'Cat' },
  { word: 'LION', emoji: '🦁', hintFr: 'Le roi des animaux qui fait Roaaar', en: 'Lion' },
  { word: 'MAMAN', emoji: '❤️', hintFr: 'Un mot plein d\'amour', en: 'Mommy' },
  { word: 'POMME', emoji: '🍎', hintFr: 'Un bon fruit rouge croquant', en: 'Apple' },
  { word: 'TRAIN', emoji: '🚂', hintFr: 'Tchou-tchou sur les rails', en: 'Train' },
  { word: 'ROBOT', emoji: '🤖', hintFr: 'Un ami mécanique rigolo', en: 'Robot' },
];

export default function AlphabetActivity({ onNiaSpeak, onRewardStar }) {
  const [mode, setMode] = useState('explore'); // 'explore', 'quiz', 'word'
  const [selectedLetter, setSelectedLetter] = useState(ALPHABET[0]);
  const [findMission, setFindMission] = useState(null);
  const [quizChoices, setQuizChoices] = useState([]);

  // Word puzzle state
  const [wordIdx, setWordIdx] = useState(0);
  const [filledCount, setFilledCount] = useState(0);
  const [scrambledPool, setScrambledPool] = useState([]);

  useEffect(() => {
    if (mode === 'explore') {
      const msg = "Découvre l'alphabet de A à Z avec moi ! Touche une lettre pour entendre son bruit et son mot magique !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (mode === 'quiz') {
      startQuizRound();
    } else if (mode === 'word') {
      initWordPuzzle(wordIdx);
    }
  }, [mode, wordIdx]);

  const startQuizRound = () => {
    const target = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    const distractors = ALPHABET.filter((l) => l.char !== target.char)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const options = [target, ...distractors].sort(() => Math.random() - 0.5);
    setFindMission(target);
    setQuizChoices(options);

    const msg = `Où se cache la lettre ${target.char} comme ${target.wordFr} ? Touche la bonne carte !`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(msg, `Where is the letter ${target.char} for ${target.wordEn}?`);
  };

  const initWordPuzzle = (idx) => {
    const current = WORD_PUZZLES[idx % WORD_PUZZLES.length];
    setFilledCount(0);
    const letters = current.word.split('').map((ch, i) => ({ id: `${ch}-${i}`, char: ch, used: false }));
    setScrambledPool([...letters].sort(() => Math.random() - 0.5));
    const msg = `Épelons le mot ${current.word} ! (${current.hintFr}) ! Touche la lettre ${current.word[0]} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleLetterClick = (item) => {
    setSelectedLetter(item);
    sounds.playPop();
    const phrase = `Lettre ${item.char} ! Elle fait le son "${item.sound}" comme ${item.wordFr} !`;
    onNiaSpeak(phrase);
    doraVoice.speakBilingual(phrase, `${item.char} for ${item.wordEn}!`);
  };

  const handleQuizChoice = (item) => {
    if (!findMission) return;
    if (item.char === findMission.char) {
      sounds.playSuccess();
      confetti({ particleCount: 55, spread: 65, origin: { y: 0.6 } });
      if (onRewardStar) onRewardStar();
      const praise = `Youpi ! Bravo mon ami ! C'est bien la lettre ${item.char} comme ${item.wordFr} !`;
      onNiaSpeak(praise);
      doraVoice.speakBilingual(praise, `Great job! ${item.char} for ${item.wordEn}!`);
      setTimeout(startQuizRound, 2400);
    } else {
      sounds.playBloop();
      const hint = `Ça c'est ${item.char} comme ${item.wordFr}. Cherchons la lettre ${findMission.char} comme ${findMission.wordFr} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleTapScrambledLetter = (poolItem) => {
    if (poolItem.used) return;
    const currentPuzzle = WORD_PUZZLES[wordIdx % WORD_PUZZLES.length];
    const expectedChar = currentPuzzle.word[filledCount];

    if (poolItem.char === expectedChar) {
      sounds.playPop();
      const nextFilled = filledCount + 1;
      setFilledCount(nextFilled);
      setScrambledPool((prev) =>
        prev.map((p) => (p.id === poolItem.id ? { ...p, used: true } : p))
      );

      if (nextFilled === currentPuzzle.word.length) {
        sounds.playSuccess();
        confetti({ particleCount: 70, spread: 70 });
        if (onRewardStar) onRewardStar();
        const win = `Bravo ! Tu as écrit le mot ${currentPuzzle.word} ! Super champion !`;
        onNiaSpeak(win);
        doraVoice.speakBilingual(win, `Awesome! You spelled ${currentPuzzle.en}!`);
        setTimeout(() => setWordIdx((i) => i + 1), 2600);
      } else {
        const nextChar = currentPuzzle.word[nextFilled];
        doraVoice.speak(`${poolItem.char} ! Maintenant trouve la lettre ${nextChar} !`);
      }
    } else {
      sounds.playBloop();
      const msg = `Cherche d'abord la lettre ${expectedChar} pour écrire ${currentPuzzle.word} !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header letters-theme">
        <div className="header-info">
          <span className="card-badge-icon">🔤</span>
          <div>
            <h2 className="card-main-title">L'Alphabet Magique de A à Z</h2>
            <p className="card-subtitle">Apprends les lettres, leurs sons et les mots avec Tyanna !</p>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '14px' }}>
        <button
          onClick={() => { sounds.playPop(); setMode('explore'); }}
          className={`num-mode-tab-btn ${mode === 'explore' ? 'active' : ''}`}
        >
          <BookOpen size={18} /> Découvrir A-Z
        </button>
        <button
          onClick={() => { sounds.playPop(); setMode('quiz'); }}
          className={`num-mode-tab-btn ${mode === 'quiz' ? 'active' : ''}`}
        >
          <Target size={18} /> Défi 4 Cartes
        </button>
        <button
          onClick={() => { sounds.playPop(); setMode('word'); }}
          className={`num-mode-tab-btn ${mode === 'word' ? 'active' : ''}`}
        >
          <Puzzle size={18} /> Mot Magique
        </button>
      </div>

      {/* ================= MODE 1: EXPLORE A-Z ================= */}
      {mode === 'explore' && (
        <>
          <div className="letter-jumbo-spotlight" style={{ borderColor: selectedLetter.color }}>
            <div className="jumbo-char" style={{ color: selectedLetter.color }}>
              {selectedLetter.char}<span style={{ fontSize: '0.62em', opacity: 0.85, marginLeft: '4px' }}>{selectedLetter.lower}</span>
            </div>
            <div className="jumbo-details">
              <span
                className="jumbo-emoji animate-bounce-soft"
                onClick={() => handleLetterClick(selectedLetter)}
                style={{ cursor: 'pointer' }}
              >
                {selectedLetter.emoji}
              </span>
              <h3 className="jumbo-word-fr">{selectedLetter.wordFr}</h3>
              <p className="jumbo-word-en">Son : « {selectedLetter.sound} » • ({selectedLetter.wordEn})</p>
              <button
                onClick={() => handleLetterClick(selectedLetter)}
                className="listen-again-btn"
              >
                <Volume2 size={20} /> Écouter Tyanna
              </button>
            </div>
          </div>

          <div className="alphabet-grid-container">
            {ALPHABET.map((item) => {
              const isSelected = selectedLetter.char === item.char;
              return (
                <button
                  key={item.char}
                  onClick={() => handleLetterClick(item)}
                  className={`letter-tile-btn ${isSelected ? 'selected' : ''}`}
                  style={{ backgroundColor: item.color }}
                >
                  <span className="tile-char">{item.char}{item.lower}</span>
                  <span className="tile-emoji">{item.emoji}</span>
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* ================= MODE 2: 4-CARD TODDLER QUIZ ================= */}
      {mode === 'quiz' && findMission && (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="mission-question-card" style={{ width: '100%', maxWidth: '540px', textAlign: 'center' }}>
            <span className="mission-badge">Défi avec Tyanna :</span>
            <h3 style={{ fontSize: '1.35rem', margin: '8px 0' }}>
              Trouve la lettre <strong style={{ color: findMission.color, fontSize: '1.6rem' }}>{findMission.char}</strong> comme <strong>{findMission.wordFr}</strong> {findMission.emoji} !
            </h3>
            <button onClick={startQuizRound} className="listen-again-btn" style={{ marginTop: '6px' }}>
              <Volume2 size={18} /> Réécouter la question
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', width: '100%', maxWidth: '500px' }}>
            {quizChoices.map((item) => (
              <button
                key={item.char}
                onClick={() => handleQuizChoice(item)}
                className="animate-pop"
                style={{
                  background: item.color,
                  color: '#ffffff',
                  border: '4px solid #ffffff',
                  borderRadius: '24px',
                  padding: '20px 14px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 0 rgba(0,0,0,0.2), 0 12px 20px rgba(0,0,0,0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-family)'
                }}
              >
                <span style={{ fontSize: '3.2rem', fontWeight: 900, lineHeight: 1 }}>{item.char}{item.lower}</span>
                <span style={{ fontSize: '2.2rem' }}>{item.emoji}</span>
                <span style={{ fontSize: '1rem', fontWeight: 800 }}>{item.wordFr}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODE 3: ENDLESS ALPHABET WORD PUZZLE ================= */}
      {mode === 'word' && (() => {
        const currentPuzzle = WORD_PUZZLES[wordIdx % WORD_PUZZLES.length];
        return (
          <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '540px', textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', lineHeight: 1.1 }}>{currentPuzzle.emoji}</div>
              <h3 style={{ fontSize: '1.3rem', margin: '6px 0' }}>{currentPuzzle.hintFr} ({currentPuzzle.en})</h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>
                Touche les lettres dans l'ordre pour écrire le mot !
              </p>
            </div>

            {/* Word Slots */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {currentPuzzle.word.split('').map((ch, idx) => {
                const isFilled = idx < filledCount;
                const isNext = idx === filledCount;
                return (
                  <div
                    key={idx}
                    style={{
                      width: '62px',
                      height: '72px',
                      borderRadius: '18px',
                      border: isFilled ? '3px solid #10ac84' : isNext ? '3px dashed #f39c12' : '3px dashed #b2bec3',
                      background: isFilled ? '#1dd1a1' : isNext ? '#fff9db' : '#f1f2f6',
                      color: isFilled ? '#ffffff' : '#b2bec3',
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isFilled ? '0 5px 0 #10ac84' : 'none',
                      transition: 'all 0.2s'
                    }}
                  >
                    {ch}
                  </div>
                );
              })}
            </div>

            {/* Scrambled Letters to Tap */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
              {scrambledPool.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTapScrambledLetter(item)}
                  disabled={item.used}
                  className="animate-bounce-soft"
                  style={{
                    width: '66px',
                    height: '66px',
                    borderRadius: '20px',
                    border: '3px solid #ffffff',
                    background: item.used ? '#dfe6e9' : 'linear-gradient(135deg, #0984e3, #6c5ce7)',
                    color: '#ffffff',
                    fontSize: '2rem',
                    fontWeight: 900,
                    cursor: item.used ? 'default' : 'pointer',
                    opacity: item.used ? 0.25 : 1,
                    boxShadow: item.used ? 'none' : '0 6px 0 #2d3436, 0 10px 18px rgba(0,0,0,0.2)',
                  }}
                >
                  {item.char}
                </button>
              ))}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
