import React, { useState, useEffect, useRef } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Volume2, Award, BookOpen, Target, Puzzle, PenTool, Check } from 'lucide-react';

// =========================================================================
// COMPLETE A TO Z ALPHABET DATASET (26 LETTERS WITH PHONICS, WORDS & TRACING)
// =========================================================================
export const ALPHABET_A_TO_Z = [
  { char: 'A', lower: 'a', sound: 'Aaa', wordFr: 'Avion', wordFr2: 'Abeille', wordEn: 'Airplane', emoji: '✈️', emoji2: '🐝', color: '#FF7675', rhyme: 'A comme l\'avion qui vole tout là-haut !' },
  { char: 'B', lower: 'b', sound: 'Buh', wordFr: 'Ballon', wordFr2: 'Bateau', wordEn: 'Ball', emoji: '⚽', emoji2: '⛵', color: '#0984E3', rhyme: 'B comme le ballon qui rebondit !' },
  { char: 'C', lower: 'c', sound: 'Kuh', wordFr: 'Chat', wordFr2: 'Carotte', wordEn: 'Cat', emoji: '🐱', emoji2: '🥕', color: '#F39C12', rhyme: 'C comme le chat qui fait miaou !' },
  { char: 'D', lower: 'd', sound: 'Duh', wordFr: 'Dauphin', wordFr2: 'Dinosaure', wordEn: 'Dolphin', emoji: '🐬', emoji2: '🦖', color: '#00B894', rhyme: 'D comme le dauphin qui saute dans l\'eau !' },
  { char: 'E', lower: 'e', sound: 'Euh', wordFr: 'Éléphant', wordFr2: 'Étoile', wordEn: 'Elephant', emoji: '🐘', emoji2: '⭐', color: '#6C5CE7', rhyme: 'E comme le grand éléphant rigolo !' },
  { char: 'F', lower: 'f', sound: 'Fff', wordFr: 'Fleur', wordFr2: 'Fraise', wordEn: 'Flower', emoji: '🌸', emoji2: '🍓', color: '#FD79A8', rhyme: 'F comme la jolie fleur du jardin !' },
  { char: 'G', lower: 'g', sound: 'Guh', wordFr: 'Girafe', wordFr2: 'Gâteau', wordEn: 'Giraffe', emoji: '🦒', emoji2: '🎂', color: '#E17055', rhyme: 'G comme la girafe au très long cou !' },
  { char: 'H', lower: 'h', sound: 'Hhh', wordFr: 'Hibou', wordFr2: 'Hélicoptère', wordEn: 'Owl', emoji: '🦉', emoji2: '🚁', color: '#00CEC9', rhyme: 'H comme le hibou qui veille la nuit !' },
  { char: 'I', lower: 'i', sound: 'Iii', wordFr: 'Île', wordFr2: 'Iguane', wordEn: 'Island', emoji: '🏝️', emoji2: '🦎', color: '#10AC84', rhyme: 'I comme l\'île au trésor ensoleillée !' },
  { char: 'J', lower: 'j', sound: 'Jjj', wordFr: 'Jus', wordFr2: 'Jouet', wordEn: 'Juice', emoji: '🧃', emoji2: '🧸', color: '#FF6B6B', rhyme: 'J comme le bon jus de fruits frais !' },
  { char: 'K', lower: 'k', sound: 'Kkk', wordFr: 'Koala', wordFr2: 'Kangourou', wordEn: 'Koala', emoji: '🐨', emoji2: '🦘', color: '#636E72', rhyme: 'K comme le koala tout doux dans son arbre !' },
  { char: 'L', lower: 'l', sound: 'Lll', wordFr: 'Lion', wordFr2: 'Lune', wordEn: 'Lion', emoji: '🦁', emoji2: '🌙', color: '#E67E22', rhyme: 'L comme le roi lion dans la savane !' },
  { char: 'M', lower: 'm', sound: 'Mmm', wordFr: 'Maison', wordFr2: 'Maman', wordEn: 'House', emoji: '🏠', emoji2: '❤️', color: '#0984E3', rhyme: 'M comme la maison de toute la famille !' },
  { char: 'N', lower: 'n', sound: 'Nnn', wordFr: 'Nuage', wordFr2: 'Nid', wordEn: 'Cloud', emoji: '☁️', emoji2: '🪺', color: '#54A0FF', rhyme: 'N comme le doux nuage blanc dans le ciel !' },
  { char: 'O', lower: 'o', sound: 'Ooo', wordFr: 'Ours', wordFr2: 'Oiseau', wordEn: 'Bear', emoji: '🐻', emoji2: '🐦', color: '#B5651D', rhyme: 'O comme le gros ours gourmand de miel !' },
  { char: 'P', lower: 'p', sound: 'Puh', wordFr: 'Pomme', wordFr2: 'Panda', wordEn: 'Apple', emoji: '🍎', emoji2: '🐼', color: '#D63031', rhyme: 'P comme la belle pomme rouge croquante !' },
  { char: 'Q', lower: 'q', sound: 'Kuu', wordFr: 'Quatre', wordFr2: 'Quiche', wordEn: 'Four', emoji: '4️⃣', emoji2: '🥧', color: '#00B894', rhyme: 'Q comme le chiffre quatre magique !' },
  { char: 'R', lower: 'r', sound: 'Rrr', wordFr: 'Robot', wordFr2: 'Renard', wordEn: 'Robot', emoji: '🤖', emoji2: '🦊', color: '#6C5CE7', rhyme: 'R comme le robot qui s\'allume et danse !' },
  { char: 'S', lower: 's', sound: 'Sss', wordFr: 'Soleil', wordFr2: 'Singe', wordEn: 'Sun', emoji: '☀️', emoji2: '🐵', color: '#F39C12', rhyme: 'S comme le soleil qui réchauffe le cœur !' },
  { char: 'T', lower: 't', sound: 'Tuh', wordFr: 'Train', wordFr2: 'Tortue', wordEn: 'Train', emoji: '🚂', emoji2: '🐢', color: '#E74C3C', rhyme: 'T comme le train qui fait tchou-tchou !' },
  { char: 'U', lower: 'u', sound: 'Uuu', wordFr: 'Unicorne', wordFr2: 'Usine', wordEn: 'Unicorn', emoji: '🦄', emoji2: '🏭', color: '#E84393', rhyme: 'U comme la licorne féerique et magique !' },
  { char: 'V', lower: 'v', sound: 'Vvv', wordFr: 'Voiture', wordFr2: 'Vache', wordEn: 'Car', emoji: '🚗', emoji2: '🐮', color: '#00CEC9', rhyme: 'V comme la jolie voiture qui fait vroum !' },
  { char: 'W', lower: 'w', sound: 'Www', wordFr: 'Wagon', wordFr2: 'Water-polo', wordEn: 'Wagon', emoji: '🚃', emoji2: '🤽', color: '#FD9644', rhyme: 'W comme le wagon attaché au train !' },
  { char: 'X', lower: 'x', sound: 'Kss', wordFr: 'Xylophone', wordFr2: 'Xérus', wordEn: 'Xylophone', emoji: '🎵', emoji2: '🐿️', color: '#45AAF2', rhyme: 'X comme le xylophone aux lames multicolores !' },
  { char: 'Y', lower: 'y', sound: 'Yyy', wordFr: 'Yaourt', wordFr2: 'Yoyo', wordEn: 'Yogurt', emoji: '🥣', emoji2: '🪀', color: '#F1C40F', rhyme: 'Y comme le yaourt doux et crémeux !' },
  { char: 'Z', lower: 'z', sound: 'Zzz', wordFr: 'Zèbre', wordFr2: 'Zoo', wordEn: 'Zebra', emoji: '🦓', emoji2: '🦒', color: '#2D3436', rhyme: 'Z comme le zèbre et ses rayures magiques !' },
];

const WORDS_TO_SPELL = [
  { word: 'AVION', emoji: '✈️', fr: 'Avion', en: 'Airplane' },
  { word: 'CHAT', emoji: '🐱', fr: 'Chat', en: 'Cat' },
  { word: 'LION', emoji: '🦁', fr: 'Lion', en: 'Lion' },
  { word: 'POMME', emoji: '🍎', fr: 'Pomme', en: 'Apple' },
  { word: 'TRAIN', emoji: '🚂', fr: 'Train', en: 'Train' },
  { word: 'ROBOT', emoji: '🤖', fr: 'Robot', en: 'Robot' },
  { word: 'SOLEIL', emoji: '☀️', fr: 'Soleil', en: 'Sun' },
  { word: 'MAMAN', emoji: '❤️', fr: 'Maman', en: 'Mommy' },
];

export default function AlphabetActivity({ onNiaSpeak, onRewardStar }) {
  const [mode, setMode] = useState('explore'); // 'explore', 'tracing', 'quiz', 'word'
  const [selectedLetter, setSelectedLetter] = useState(ALPHABET_A_TO_Z[0]);

  // Tracing State
  const [tracedPoints, setTracedPoints] = useState([]);
  const [isAutoRecognized, setIsAutoRecognized] = useState(false);
  const canvasRef = useRef(null);

  // Quiz State
  const [quizRound, setQuizRound] = useState(0);
  const [quizTarget, setQuizTarget] = useState(ALPHABET_A_TO_Z[0]);
  const [quizChoices, setQuizChoices] = useState([]);

  // Word Spelling State
  const [wordIdx, setWordIdx] = useState(0);
  const [spelledLetters, setSpelledLetters] = useState([]);
  const [availableScramble, setAvailableScramble] = useState([]);

  useEffect(() => {
    if (mode === 'explore') {
      const msg = `L'Alphabet magique de A à Z ! Touche n'importe quelle lettre pour entendre son bruit, ses mots et sa chanson !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (mode === 'tracing') {
      const msg = `Atelier de dessin magique ! Trace la lettre ${selectedLetter.char} avec ton doigt !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
    } else if (mode === 'quiz') {
      startQuizRound();
    } else if (mode === 'word') {
      initWordSpelling(wordIdx);
    }
  }, [mode, wordIdx]);

  // Quiz Round Setup
  const startQuizRound = () => {
    const target = ALPHABET_A_TO_Z[Math.floor(Math.random() * ALPHABET_A_TO_Z.length)];
    const others = ALPHABET_A_TO_Z.filter((l) => l.char !== target.char)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const choices = [target, ...others].sort(() => Math.random() - 0.5);

    setQuizTarget(target);
    setQuizChoices(choices);

    const msg = `Où se cache la lettre ${target.char} comme ${target.wordFr} ${target.emoji} ? Touche la bonne carte !`;
    onNiaSpeak(msg);
    doraVoice.speakBilingual(msg, `Where is letter ${target.char} for ${target.wordEn}?`);
  };

  // Word Spelling Setup
  const initWordSpelling = (idx) => {
    const currentWordObj = WORDS_TO_SPELL[idx % WORDS_TO_SPELL.length];
    setSpelledLetters([]);
    const letters = currentWordObj.word.split('').map((char, i) => ({
      id: `${char}-${i}`,
      char,
      used: false,
    }));
    setAvailableScramble(letters.sort(() => Math.random() - 0.5));

    const msg = `Épelons ensemble le mot ${currentWordObj.fr} ${currentWordObj.emoji} ! Trouve la première lettre : ${currentWordObj.word[0]} !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleLetterClick = (item) => {
    setSelectedLetter(item);
    sounds.playPop();
    const phrase = `Lettre ${item.char} ! Son : « ${item.sound} ». Comme ${item.wordFr} ${item.emoji} et ${item.wordFr2} ${item.emoji2} ! ${item.rhyme}`;
    onNiaSpeak(phrase);
    doraVoice.speakBilingual(
      `Lettre ${item.char} ! ${item.wordFr} !`,
      `Letter ${item.char}! ${item.wordEn}!`
    );
  };

  const handleQuizChoice = (chosen) => {
    if (chosen.char === quizTarget.char) {
      sounds.playSuccess();
      confetti({ particleCount: 65, spread: 65, origin: { y: 0.6 } });
      if (onRewardStar) onRewardStar();
      const win = `Youpi ! C'est la lettre ${chosen.char} comme ${chosen.wordFr} ! Tu es formidable !`;
      onNiaSpeak(win);
      doraVoice.speakBilingual(win, `Great job! ${chosen.char} for ${chosen.wordEn}!`);
      setTimeout(startQuizRound, 2200);
    } else {
      sounds.playBloop();
      const hint = `Ça c'est la lettre ${chosen.char} comme ${chosen.wordFr}. Cherchons la lettre ${quizTarget.char} comme ${quizTarget.wordFr} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  const handleTapWordLetter = (poolItem) => {
    if (poolItem.used) return;
    const currentWordObj = WORDS_TO_SPELL[wordIdx % WORDS_TO_SPELL.length];
    const expectedChar = currentWordObj.word[spelledLetters.length];

    if (poolItem.char === expectedChar) {
      sounds.playPop();
      const nextSpelled = [...spelledLetters, poolItem.char];
      setSpelledLetters(nextSpelled);
      setAvailableScramble((prev) =>
        prev.map((item) => (item.id === poolItem.id ? { ...item, used: true } : item))
      );

      if (nextSpelled.length === currentWordObj.word.length) {
        sounds.playSuccess();
        confetti({ particleCount: 75, spread: 70 });
        if (onRewardStar) onRewardStar();
        const win = `Bravo champion ! Tu as épelé le mot ${currentWordObj.word} !`;
        onNiaSpeak(win);
        doraVoice.speakBilingual(win, `Awesome! You spelled ${currentWordObj.en}!`);
        setTimeout(() => setWordIdx((i) => i + 1), 2400);
      } else {
        const nextChar = currentWordObj.word[nextSpelled.length];
        doraVoice.speak(`${poolItem.char} ! Maintenant cherche la lettre ${nextChar} !`);
      }
    } else {
      sounds.playBloop();
      doraVoice.speak(`Cherche la lettre ${expectedChar} pour continuer le mot !`);
    }
  };

  // Tracing drawing handlers with automatic recognition
  const handleTouchDraw = (e) => {
    if (isAutoRecognized) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    sounds.playPop();
    const newPoints = [...tracedPoints, { x, y }];
    setTracedPoints(newPoints);

    // Automatic letter recognition logic:
    // When the toddler has traced enough points with sufficient spatial coverage of the letter
    if (newPoints.length >= 10 && !isAutoRecognized) {
      const minX = Math.min(...newPoints.map((p) => p.x));
      const maxX = Math.max(...newPoints.map((p) => p.x));
      const minY = Math.min(...newPoints.map((p) => p.y));
      const maxY = Math.max(...newPoints.map((p) => p.y));
      const spreadX = maxX - minX;
      const spreadY = maxY - minY;

      // When the finger stroke spans at least 65px wide and 70px tall, or 18+ points traced
      if ((spreadX > 65 && spreadY > 70 && newPoints.length >= 12) || newPoints.length >= 22) {
        triggerAutoSuccess();
      }
    }
  };

  const triggerAutoSuccess = () => {
    setIsAutoRecognized(true);
    sounds.playSuccess();
    sounds.playChime();
    confetti({ particleCount: 75, spread: 70 });
    if (onRewardStar) onRewardStar();

    const praise = `Bravo champion ! Tu as magnifiquement tracé la lettre ${selectedLetter.char} ! Passons à la lettre suivante !`;
    onNiaSpeak(praise);
    doraVoice.speak(praise);

    // Automatically transition to the next letter of the alphabet after short celebration!
    setTimeout(() => {
      const currentIdx = ALPHABET_A_TO_Z.findIndex((l) => l.char === selectedLetter.char);
      const nextLetter = ALPHABET_A_TO_Z[(currentIdx + 1) % ALPHABET_A_TO_Z.length];
      setSelectedLetter(nextLetter);
      setTracedPoints([]);
      setIsAutoRecognized(false);
    }, 1800);
  };

  const clearTracing = () => {
    sounds.playPop();
    setTracedPoints([]);
    setIsAutoRecognized(false);
    doraVoice.speak(`Feuille magique effacée ! Trace à nouveau la lettre ${selectedLetter.char} !`);
  };

  const completeTracing = () => {
    if (!isAutoRecognized) {
      triggerAutoSuccess();
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header letters-theme">
        <div className="header-info">
          <span className="card-badge-icon">🔤</span>
          <div>
            <h2 className="card-main-title">L'Académie des 26 Lettres A à Z</h2>
            <p className="card-subtitle">Abécédaire 3D, sons phoniques, traçage du doigt et mots magiques avec Tyanna !</p>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '14px' }}>
        <button
          onClick={() => { sounds.playPop(); setMode('explore'); }}
          className={`num-mode-tab-btn ${mode === 'explore' ? 'active' : ''}`}
        >
          <BookOpen size={18} /> Abécédaire A-Z (26)
        </button>
        <button
          onClick={() => { sounds.playPop(); setMode('tracing'); }}
          className={`num-mode-tab-btn ${mode === 'tracing' ? 'active' : ''}`}
        >
          <PenTool size={18} /> Traçage au Doigt ✍️
        </button>
        <button
          onClick={() => { sounds.playPop(); setMode('quiz'); }}
          className={`num-mode-tab-btn ${mode === 'quiz' ? 'active' : ''}`}
        >
          <Target size={18} /> Défi 4 Cartes 🎯
        </button>
        <button
          onClick={() => { sounds.playPop(); setMode('word'); }}
          className={`num-mode-tab-btn ${mode === 'word' ? 'active' : ''}`}
        >
          <Puzzle size={18} /> Fabrique à Mots 🧩
        </button>
      </div>

      {/* =========================================================================
          MODE 1: EXPLORE FULL A-Z WITH SOUNDS, WORDS & 3D JUMBO CARD
         ========================================================================= */}
      {mode === 'explore' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Spotlight Card */}
          <div className="letter-jumbo-spotlight" style={{ borderColor: selectedLetter.color }}>
            <div className="jumbo-char" style={{ color: selectedLetter.color }}>
              {selectedLetter.char}
              <span style={{ fontSize: '0.62em', opacity: 0.85, marginLeft: '6px' }}>{selectedLetter.lower}</span>
            </div>

            <div className="jumbo-details" style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                <span
                  className="jumbo-emoji animate-bounce-soft"
                  onClick={() => handleLetterClick(selectedLetter)}
                  style={{ cursor: 'pointer', fontSize: '3.6rem' }}
                >
                  {selectedLetter.emoji}
                </span>
                <span
                  className="jumbo-emoji animate-bounce-soft"
                  onClick={() => handleLetterClick(selectedLetter)}
                  style={{ cursor: 'pointer', fontSize: '3.6rem' }}
                >
                  {selectedLetter.emoji2}
                </span>
              </div>

              <h3 className="jumbo-word-fr" style={{ margin: '4px 0' }}>
                {selectedLetter.char} comme {selectedLetter.wordFr} & {selectedLetter.wordFr2}
              </h3>
              <p className="jumbo-word-en" style={{ margin: '0 0 6px 0' }}>
                Son magique : « {selectedLetter.sound} » • Anglais : ({selectedLetter.wordEn})
              </p>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.88rem', color: '#636e72', fontWeight: 700 }}>
                💡 <em>{selectedLetter.rhyme}</em>
              </p>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button onClick={() => handleLetterClick(selectedLetter)} className="listen-again-btn">
                  <Volume2 size={20} /> Écouter Tyanna parler !
                </button>
                <button
                  onClick={() => {
                    sounds.playPop();
                    setMode('tracing');
                  }}
                  className="listen-again-btn"
                  style={{ background: 'linear-gradient(135deg, #10ac84, #00cec9)', color: '#fff', border: 'none' }}
                >
                  <PenTool size={18} /> Tracer la lettre {selectedLetter.char} !
                </button>
              </div>
            </div>
          </div>

          {/* Full Grid of All 26 Letters */}
          <div className="alphabet-grid-container">
            {ALPHABET_A_TO_Z.map((item) => {
              const isSelected = selectedLetter.char === item.char;
              return (
                <button
                  key={item.char}
                  onClick={() => handleLetterClick(item)}
                  className={`letter-tile-btn ${isSelected ? 'selected' : ''}`}
                  style={{ backgroundColor: item.color }}
                  title={`Lettre ${item.char} comme ${item.wordFr}`}
                >
                  <span className="tile-char">{item.char}{item.lower}</span>
                  <span className="tile-emoji">{item.emoji}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 2: MAGIC TRACING / FINGER DRAWING (WITH AUTOMATIC RECOGNITION)
         ========================================================================= */}
      {mode === 'tracing' && (() => {
        const pointsCount = tracedPoints.length;
        const minX = pointsCount > 0 ? Math.min(...tracedPoints.map((p) => p.x)) : 0;
        const maxX = pointsCount > 0 ? Math.max(...tracedPoints.map((p) => p.x)) : 0;
        const minY = pointsCount > 0 ? Math.min(...tracedPoints.map((p) => p.y)) : 0;
        const maxY = pointsCount > 0 ? Math.max(...tracedPoints.map((p) => p.y)) : 0;
        const spreadX = maxX - minX;
        const spreadY = maxY - minY;
        const rawPercent = Math.min(
          100,
          Math.round(
            Math.min(pointsCount / 14, 1) * 40 +
            Math.min(spreadX / 65, 1) * 30 +
            Math.min(spreadY / 70, 1) * 30
          )
        );
        const tracingPercent = isAutoRecognized ? 100 : rawPercent;

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '10px 0', width: '100%' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '520px', textAlign: 'center' }}>
              <span className="mission-badge">Traçage magique automatique :</span>
              <h3 style={{ fontSize: '1.35rem', margin: '6px 0' }}>
                Trace la lettre <strong style={{ color: selectedLetter.color }}>{selectedLetter.char} {selectedLetter.lower}</strong> comme {selectedLetter.wordFr} {selectedLetter.emoji} !
              </h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>
                Glisse ton doigt sur la lettre : elle se valide automatiquement dès que c'est bien tracé !
              </p>
            </div>

            {/* Magic Tracing Progress Meter */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', width: '100%', maxWidth: '320px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.88rem', fontWeight: 900, color: '#2d3436' }}>
                <span>✨ Jauge Magique du Tracé :</span>
                <span style={{ color: isAutoRecognized ? '#10ac84' : '#e67e22' }}>
                  {isAutoRecognized ? '⭐ 100% Validé !' : `${tracingPercent}%`}
                </span>
              </div>
              <div className="tracing-magic-meter-bar">
                <div
                  className="tracing-magic-meter-fill"
                  style={{
                    width: `${tracingPercent}%`,
                    background: isAutoRecognized ? 'linear-gradient(90deg, #10ac84, #2ed573)' : undefined,
                  }}
                />
              </div>
            </div>

            {/* Interactive Tracing Board */}
            <div
              ref={canvasRef}
              onPointerDown={handleTouchDraw}
              onPointerMove={(e) => {
                if (e.buttons > 0) handleTouchDraw(e);
              }}
              onTouchMove={handleTouchDraw}
              style={{
                width: 'min(320px, calc(100vw - 36px))',
                height: 'min(320px, calc(100vw - 36px))',
                borderRadius: '32px',
                border: `5px solid ${selectedLetter.color}`,
                background: '#ffffff',
                boxShadow: isAutoRecognized
                  ? '0 0 28px rgba(46, 213, 115, 0.7), 0 12px 28px rgba(0,0,0,0.15)'
                  : '0 12px 28px rgba(0,0,0,0.15)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'crosshair',
                overflow: 'hidden',
                touchAction: 'none',
                userSelect: 'none',
                transition: 'box-shadow 0.25s ease',
              }}
            >
              {/* Guide letter in background */}
              <span
                style={{
                  fontSize: 'clamp(8.5rem, 38vw, 15rem)',
                  fontWeight: 900,
                  color: '#f1f2f6',
                  fontFamily: "'Fredoka', 'Quicksand', sans-serif",
                  position: 'absolute',
                  userSelect: 'none',
                  pointerEvents: 'none',
                  textShadow: `0 0 20px ${selectedLetter.color}33`,
                }}
              >
                {selectedLetter.char}
              </span>

              {/* Glowing Trace Points Drawn by Toddler */}
              {tracedPoints.map((pt, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: `${pt.x - 14}px`,
                    top: `${pt.y - 14}px`,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: selectedLetter.color,
                    boxShadow: `0 0 14px ${selectedLetter.color}`,
                    pointerEvents: 'none',
                  }}
                />
              ))}

              {/* Automatic Recognition Celebration Overlay */}
              {isAutoRecognized && (
                <div
                  className="animate-pop"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 25,
                    padding: '16px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: '4.2rem' }} className="animate-bounce-soft">🎉⭐</span>
                  <h3 style={{ color: '#10ac84', fontWeight: 900, margin: '6px 0', fontSize: '1.45rem' }}>
                    Bien tracé ! Bravo !
                  </h3>
                  <p style={{ margin: 0, fontWeight: 800, color: '#2d3436', fontSize: '0.92rem' }}>
                    Lettre suivante en cours... 🚀
                  </p>
                </div>
              )}

              {!isAutoRecognized && tracedPoints.length === 0 && (
                <span style={{ position: 'absolute', bottom: '12px', fontSize: '0.8rem', fontWeight: 800, color: '#b2bec3' }}>
                  ✨ Glisse ton doigt ici ✨
                </span>
              )}
            </div>

            {/* Tracing Controls */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={completeTracing}
                style={{
                  background: 'linear-gradient(135deg, #2ed573, #10ac84)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 22px',
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #0b684f, 0 8px 16px rgba(16, 172, 132, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Check size={20} /> Valider le tracé ⭐
              </button>
              <button onClick={clearTracing} className="refresh-mission-btn">
                <RotateCcw size={18} /> Effacer la feuille
              </button>
            </div>

            {/* Quick Large Letter Switcher Ribbon */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '100%', padding: '6px 2px' }}>
              {ALPHABET_A_TO_Z.map((item) => (
                <button
                  key={item.char}
                  onClick={() => {
                    setSelectedLetter(item);
                    setTracedPoints([]);
                    setIsAutoRecognized(false);
                    sounds.playPop();
                  }}
                  style={{
                    background: selectedLetter.char === item.char ? item.color : '#ffffff',
                    color: selectedLetter.char === item.char ? '#ffffff' : '#2d3436',
                    border: selectedLetter.char === item.char ? '3px solid #ffffff' : '2px solid #dfe6e9',
                    borderRadius: '16px',
                    padding: '8px 12px',
                    fontWeight: 900,
                    cursor: 'pointer',
                    minWidth: '50px',
                    height: '50px',
                    fontSize: '1.25rem',
                    boxShadow: selectedLetter.char === item.char ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.char}
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* =========================================================================
          MODE 3: 4-CARD TODDLER MYSTERY QUIZ
         ========================================================================= */}
      {mode === 'quiz' && (
        <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="mission-question-card" style={{ width: '100%', maxWidth: '540px', textAlign: 'center' }}>
            <span className="mission-badge">Défi Mystère avec Tyanna :</span>
            <h3 style={{ fontSize: '1.35rem', margin: '8px 0' }}>
              Trouve la lettre <strong style={{ color: quizTarget.color, fontSize: '1.7rem' }}>{quizTarget.char}</strong> comme <strong>{quizTarget.wordFr}</strong> {quizTarget.emoji} !
            </h3>
            <button onClick={startQuizRound} className="listen-again-btn" style={{ marginTop: '6px' }}>
              <Volume2 size={18} /> Réécouter la question
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', width: '100%', maxWidth: '480px' }}>
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
                  fontFamily: 'var(--font-family)',
                }}
              >
                <span style={{ fontSize: '3.4rem', fontWeight: 900, lineHeight: 1 }}>{item.char}{item.lower}</span>
                <span style={{ fontSize: '2.4rem' }}>{item.emoji}</span>
                <span style={{ fontSize: '1rem', fontWeight: 900 }}>{item.wordFr}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 4: WORD BUILDER & SPELLING
         ========================================================================= */}
      {mode === 'word' && (() => {
        const currentWordObj = WORDS_TO_SPELL[wordIdx % WORDS_TO_SPELL.length];
        return (
          <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
            <div className="mission-question-card" style={{ width: '100%', maxWidth: '540px', textAlign: 'center' }}>
              <div style={{ fontSize: '4.2rem', lineHeight: 1.1 }} className="animate-bounce-soft">{currentWordObj.emoji}</div>
              <h3 style={{ fontSize: '1.4rem', margin: '6px 0' }}>
                Écris le mot : <strong>{currentWordObj.fr}</strong> ({currentWordObj.en})
              </h3>
              <p style={{ margin: 0, fontWeight: 700, color: '#636e72' }}>
                Touche les lettres dans le bon ordre pour compléter le mot !
              </p>
            </div>

            {/* Word Letter Slots */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {currentWordObj.word.split('').map((ch, idx) => {
                const isFilled = idx < spelledLetters.length;
                const isNext = idx === spelledLetters.length;
                return (
                  <div
                    key={idx}
                    style={{
                      width: '64px',
                      height: '74px',
                      borderRadius: '20px',
                      border: isFilled ? '3px solid #10ac84' : isNext ? '3px dashed #f39c12' : '3px dashed #b2bec3',
                      background: isFilled ? '#1dd1a1' : isNext ? '#fff9db' : '#f1f2f6',
                      color: isFilled ? '#ffffff' : '#b2bec3',
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isFilled ? '0 5px 0 #10ac84' : 'none',
                      transition: 'all 0.2s',
                    }}
                  >
                    {isFilled ? ch : isNext ? '?' : ''}
                  </div>
                );
              })}
            </div>

            {/* Scrambled Letters to Tap */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '6px' }}>
              {availableScramble.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTapWordLetter(item)}
                  disabled={item.used}
                  className="animate-bounce-soft"
                  style={{
                    width: '66px',
                    height: '66px',
                    borderRadius: '20px',
                    border: '3px solid #ffffff',
                    background: item.used ? '#dfe6e9' : 'linear-gradient(135deg, #0984e3, #6c5ce7)',
                    color: '#ffffff',
                    fontSize: '2.2rem',
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
