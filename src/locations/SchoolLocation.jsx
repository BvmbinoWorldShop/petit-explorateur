import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { BookOpen, Sparkles, CheckCircle, RotateCcw, Award } from 'lucide-react';

const SCHOOL_TABS = [
  { id: 'alphabet', label: 'Alphabet & Lettres 🔤' },
  { id: 'numbers', label: 'Les Chiffres 1, 2, 3 🔢' },
  { id: 'quiz', label: 'Quiz Magique ❓' },
];

const ALPHABET_ITEMS = [
  { char: 'A', fr: 'Avion', en: 'Airplane', emoji: '✈️', color: '#ff7675' },
  { char: 'B', fr: 'Ballon', en: 'Ball', emoji: '⚽', color: '#74b9ff' },
  { char: 'C', fr: 'Chat', en: 'Cat', emoji: '🐱', color: '#ffeaa7' },
  { char: 'D', fr: 'Dauphin', en: 'Dolphin', emoji: '🐬', color: '#55efc4' },
  { char: 'E', fr: 'Étoile', en: 'Star', emoji: '⭐', color: '#fdcb6e' },
  { char: 'F', fr: 'Fleur', en: 'Flower', emoji: '🌸', color: '#fab1a0' },
];

const NUMBERS_ITEMS = [
  { num: 1, fr: 'Un', en: 'One', emoji: '🧸', count: '1 doudou' },
  { num: 2, fr: 'Deux', en: 'Two', emoji: '🍎🍎', count: '2 pommes' },
  { num: 3, fr: 'Trois', en: 'Three', emoji: '⭐⭐⭐', count: '3 étoiles' },
  { num: 4, fr: 'Quatre', en: 'Four', emoji: '🚗🚗🚗🚗', count: '4 voitures' },
  { num: 5, fr: 'Cinq', en: 'Five', emoji: '🎈🎈🎈🎈🎈', count: '5 ballons' },
];

export default function SchoolLocation({ onTeacherSpeech, onClose }) {
  const [activeTab, setActiveTab] = useState('alphabet');
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const welcome = "Bienvenue dans ma classe d'école ! Que veux-tu apprendre aujourd'hui avec moi ?";
    onTeacherSpeech(welcome);
    teacher.speakBilingual(welcome, "Welcome to my classroom! What do you want to learn today with me?");
  }, []);

  const handleLetterClick = (item) => {
    sounds.playPop();
    const msg = `${item.char} comme ${item.fr} !`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `${item.char} for ${item.en}!`);
    confetti({ particleCount: 20, spread: 40, origin: { y: 0.6 } });
  };

  const handleNumberClick = (item) => {
    sounds.playSuccess();
    const msg = `Voici le chiffre ${item.num} ! ${item.fr} ! Compte avec moi : ${item.count} !`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `Number ${item.num}! ${item.en}!`);
  };

  return (
    <div className="location-modal-card">
      <div className="location-modal-header school-theme">
        <div className="modal-title-box">
          <span className="location-large-emoji">🏫</span>
          <div>
            <h2 className="modal-title">L'École de Maîtresse Nia</h2>
            <p className="modal-subtitle">School Classroom &bull; Lettres, Chiffres et Couleurs</p>
          </div>
        </div>
        <button onClick={onClose} className="close-modal-btn">✖ Retour à la ville</button>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="location-tabs-bar">
        {SCHOOL_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              sounds.playPop();
              setActiveTab(tab.id);
            }}
            className={`location-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="location-content-body">
        {activeTab === 'alphabet' && (
          <div className="chalkboard-container">
            <h3 className="chalkboard-title">Le Tableau Noir Magique 📝</h3>
            <div className="chalkboard-grid">
              {ALPHABET_ITEMS.map((item) => (
                <button
                  key={item.char}
                  onClick={() => handleLetterClick(item)}
                  className="chalk-letter-btn"
                  style={{ borderColor: item.color }}
                >
                  <span className="chalk-char" style={{ color: item.color }}>{item.char}</span>
                  <span className="chalk-emoji">{item.emoji}</span>
                  <span className="chalk-fr">{item.fr}</span>
                  <span className="chalk-en">({item.en})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'numbers' && (
          <div className="numbers-showcase">
            <h3 className="section-title">Apprenons à compter ensemble ! 🖐️</h3>
            <div className="numbers-list">
              {NUMBERS_ITEMS.map((item) => (
                <button
                  key={item.num}
                  onClick={() => handleNumberClick(item)}
                  className="number-card-btn"
                >
                  <div className="number-digit-circle">{item.num}</div>
                  <div className="number-details">
                    <span className="number-words">{item.fr} <small>({item.en})</small></span>
                    <span className="number-emojis">{item.emoji}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="quiz-arena">
            <div className="quiz-prompt-card">
              <span className="quiz-tag">Question de la maîtresse :</span>
              <h4>Où est le CHAT ? 🐱</h4>
              <p>(Where is the CAT?)</p>
            </div>
            <div className="quiz-options">
              <button
                onClick={() => {
                  sounds.playBloop();
                  teacher.speakFrench("Non, c'est l'avion ! Cherchons le petit chat !");
                }}
                className="quiz-opt-btn"
              >
                ✈️ L'Avion
              </button>
              <button
                onClick={() => {
                  sounds.playSuccess();
                  confetti({ particleCount: 50, spread: 60 });
                  setQuizScore((s) => s + 1);
                  teacher.speakFrench("Bravo mon champion ! C'est le petit chat ! Miaou !");
                }}
                className="quiz-opt-btn correct"
              >
                🐱 Le Chat !
              </button>
              <button
                onClick={() => {
                  sounds.playBloop();
                  teacher.speakFrench("Non, c'est le ballon ! Essaie encore !");
                }}
                className="quiz-opt-btn"
              >
                ⚽ Le Ballon
              </button>
            </div>
            {quizScore > 0 && (
              <div className="score-ribbon">
                <Award size={24} color="#ffd32a" /> Bonnes réponses : {quizScore} !
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
