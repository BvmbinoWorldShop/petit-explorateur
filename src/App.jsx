import React, { useState, useEffect } from 'react';
import NiaCharacter from './components/NiaCharacter';
import AlphabetActivity from './activities/AlphabetActivity';
import NumbersActivity from './activities/NumbersActivity';
import AnimalsActivity from './activities/AnimalsActivity';
import ColoringActivity from './activities/ColoringActivity';
import PuzzleMemoryActivity from './activities/PuzzleMemoryActivity';
import FirefighterGame from './games/FirefighterGame';
import DrivingGame from './games/DrivingGame';
import CookingGame from './games/CookingGame';
import { doraVoice } from './utils/speech';
import { sounds } from './utils/audio';
import {
  Star,
  Sparkles,
  ArrowLeft,
  Volume2,
  VolumeX,
  Heart
} from 'lucide-react';

const MENU_CARDS = [
  {
    id: 'alphabet',
    title: 'L\'Alphabet A-Z',
    subtitle: 'Lettres & Mots',
    emoji: '🔤',
    badge: 'EDUCATIONAL',
    color: '#FF6B6B',
    bgGrad: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
    thumbBg: '#FFEAA7',
    iconText: 'A B C'
  },
  {
    id: 'numbers',
    title: 'Chiffres 1 à 20',
    subtitle: 'Compter les étoiles',
    emoji: '🔢',
    badge: 'COUNTING',
    color: '#4DABF7',
    bgGrad: 'linear-gradient(135deg, #4DABF7, #74C0FC)',
    thumbBg: '#D0EBFF',
    iconText: '1 2 3'
  },
  {
    id: 'animals',
    title: 'Les Animaux',
    subtitle: 'Grand, marron & cris',
    emoji: '🦁',
    badge: 'INTERACTIVE',
    color: '#FF922B',
    bgGrad: 'linear-gradient(135deg, #FF922B, #FFC078)',
    thumbBg: '#FFE8CC',
    iconText: '🐘 🐭 🐻'
  },
  {
    id: 'coloring',
    title: 'Coloriage',
    subtitle: 'Pompier & Canard',
    emoji: '🎨',
    badge: 'COLORING',
    color: '#20C997',
    bgGrad: 'linear-gradient(135deg, #20C997, #63E6BE)',
    thumbBg: '#D3F9D8',
    iconText: '🦆 🚒 🖌️'
  },
  {
    id: 'memory',
    title: 'Mémoire & Paires',
    subtitle: 'Chiens, chats & doudous',
    emoji: '🧩',
    badge: 'MEMORY',
    color: '#FCC419',
    bgGrad: 'linear-gradient(135deg, #FCC419, #FFE066)',
    thumbBg: '#FFF3BF',
    iconText: '🐶 🐾 🐱'
  },
  {
    id: 'firefighter',
    title: 'Pompier & Eau',
    subtitle: 'De l\'eau sur le feu !',
    emoji: '🚒',
    badge: 'ACTION',
    color: '#FA5252',
    bgGrad: 'linear-gradient(135deg, #FA5252, #FF8787)',
    thumbBg: '#FFE3E3',
    iconText: '💦 🔥 🚒'
  },
  {
    id: 'driving',
    title: 'Petite Voiture',
    subtitle: 'Vroum vroum & feux',
    emoji: '🚗',
    badge: 'TAP GAMES',
    color: '#339AF0',
    bgGrad: 'linear-gradient(135deg, #339AF0, #74C0FC)',
    thumbBg: '#D0EBFF',
    iconText: '🚗 🚦 💨'
  },
  {
    id: 'cooking',
    title: 'Petite Cuisine',
    subtitle: 'Soupe du chef',
    emoji: '🍲',
    badge: 'DRAG & DROP',
    color: '#845EF7',
    bgGrad: 'linear-gradient(135deg, #845EF7, #B197FC)',
    thumbBg: '#EEBFA8',
    iconText: '🍅 🥕 🥣'
  },
];

export default function App() {
  const [activeGame, setActiveGame] = useState(null); // null = Home Portal
  const [stars, setStars] = useState(5);
  const [muted, setMuted] = useState(false);
  const [niaMessage, setNiaMessage] = useState(
    "Coucou ! C'est moi, Nia ! Touche un jeu pour t'amuser et apprendre avec moi !"
  );

  useEffect(() => {
    // Initial cheerful welcome voice like Dora
    const welcome = "Coucou mon ami ! C'est moi, Nia ! Que veux-tu apprendre aujourd'hui ? Choisis un jeu !";
    doraVoice.speak(welcome);
  }, []);

  const handleSelectGame = (gameId) => {
    sounds.playPop();
    setActiveGame(gameId);
    let prompt = "";
    switch (gameId) {
      case 'alphabet':
        prompt = "Youpi ! L'alphabet de A à Z ! Répète les lettres après moi !";
        break;
      case 'numbers':
        prompt = "Compter de 1 à 20, c'est super facile ! Comptons ensemble !";
        break;
      case 'animals':
        prompt = "Bienvenue au zoo ! Trouvons le grand animal et l'animal marron !";
        break;
      case 'coloring':
        prompt = "Sortons les pinceaux magiques ! Peins le canard et le pompier !";
        break;
      case 'memory':
        prompt = "Retrouve les paires d'animaux cachées !";
        break;
      case 'firefighter':
        prompt = "Vite pompier ! Arrose le feu avec de l'eau pour sauver la forêt !";
        break;
      case 'driving':
        prompt = "En voiture ! Fais Tut-tut et attention au feu rouge !";
        break;
      case 'cooking':
        prompt = "Miam ! Préparons une bonne soupe chaude avec de bons légumes !";
        break;
      default:
        prompt = "Amusons-nous ensemble !";
    }
    setNiaMessage(prompt);
    doraVoice.speak(prompt);
  };

  const handleBackToMenu = () => {
    sounds.playPop();
    setActiveGame(null);
    const msg = "Super ! Choisis un autre jeu rigolo !";
    setNiaMessage(msg);
    doraVoice.speak(msg);
  };

  const handleRewardStar = () => {
    setStars((s) => s + 1);
  };

  const repeatVoice = () => {
    doraVoice.speak(niaMessage);
  };

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    doraVoice.isMuted = next;
    sounds.isMuted = next;
    if (next) doraVoice.stop();
  };

  return (
    <div className="learning-center-viewport">
      {/* Top Friendly Header Bar */}
      <header className="center-navbar">
        <div className="navbar-brand">
          <span className="brand-star-icon animate-bounce-soft">⭐</span>
          <div className="brand-text-block">
            <h1 className="brand-title">Le Monde Magique de Nia</h1>
            <p className="brand-tagline">Éveil & Jeux pour les tout-petits (3 ans)</p>
          </div>
        </div>

        <div className="navbar-controls">
          {/* Stars Collected Badge */}
          <div className="stars-counter-badge animate-pop">
            <Star size={24} fill="#FFD43B" color="#F59F00" />
            <span className="stars-count-text">{stars}</span>
          </div>

          {/* Sound Toggle */}
          <button 
            onClick={toggleSound} 
            className={`sound-toggle-btn ${muted ? 'is-muted' : ''}`}
            title={muted ? "Activer le son" : "Couper le son"}
          >
            {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
          </button>

          {/* Back Button (When inside a game) */}
          {activeGame && (
            <button onClick={handleBackToMenu} className="back-portal-btn animate-pop">
              <ArrowLeft size={22} /> Menu des Jeux
            </button>
          )}
        </div>
      </header>

      {/* Main Content Layout with Nia Animated Mini-Me directly interacting */}
      <div className="center-main-layout">
        {/* Animated Nia Character Side Host */}
        <aside className="nia-host-column">
          <NiaCharacter
            message={niaMessage}
            onRepeat={repeatVoice}
            size={activeGame ? 'small' : 'large'}
          />
        </aside>

        {/* Activity Area or Learning Center Grid */}
        <main className="center-stage-column">
          {!activeGame ? (
            /* --- The Toddler Learning Center Portal Grid (inspired by user reference image) --- */
            <div className="portal-grid-container">
              {MENU_CARDS.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleSelectGame(card.id)}
                  className="portal-game-card animate-pop"
                >
                  <div className="card-thumb-canvas" style={{ background: card.bgGrad }}>
                    <div className="thumb-graphic-box">
                      <span className="card-jumbo-emoji animate-bounce-soft">{card.emoji}</span>
                      <span className="card-icon-text">{card.iconText}</span>
                    </div>
                  </div>
                  <div className="card-bottom-pill">
                    <span className="card-title-text">{card.title}</span>
                    <span className="card-badge-tag">{card.badge} ›</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* --- Active Game Component --- */
            <div className="active-activity-wrapper animate-pop">
              {activeGame === 'alphabet' && (
                <AlphabetActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'numbers' && (
                <NumbersActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'animals' && (
                <AnimalsActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'coloring' && (
                <ColoringActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'memory' && (
                <PuzzleMemoryActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'firefighter' && (
                <FirefighterGame onTeacherPrompt={setNiaMessage} />
              )}
              {activeGame === 'driving' && (
                <DrivingGame onTeacherPrompt={setNiaMessage} />
              )}
              {activeGame === 'cooking' && (
                <CookingGame onTeacherPrompt={setNiaMessage} />
              )}
            </div>
          )}
        </main>
      </div>

      {/* Cheerful Footer */}
      <footer className="center-footer">
        <p>🌟 Avec la voix chaleureuse de Nia en français &bull; Conçu spécialement pour les 3 ans</p>
      </footer>
    </div>
  );
}
