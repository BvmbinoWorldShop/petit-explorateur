import React, { useState, useEffect } from 'react';
import NiaCharacter from './components/NiaCharacter';
import AlphabetActivity from './activities/AlphabetActivity';
import NumbersActivity from './activities/NumbersActivity';
import AnimalsActivity from './activities/AnimalsActivity';
import ColoringActivity from './activities/ColoringActivity';
import PuzzleMemoryActivity from './activities/PuzzleMemoryActivity';
import BalloonsPopGame from './games/BalloonsPopGame';
import DuckMazeGame from './games/DuckMazeGame';
import FeedAnimalsGame from './games/FeedAnimalsGame';
import AnimalFarmGame from './games/AnimalFarmGame';
import MusicXylophoneGame from './games/MusicXylophoneGame';
import NiaDressingRoom from './components/NiaDressingRoom';
import StickerBook from './components/StickerBook';
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
  Languages,
  Shirt,
  BookOpen
} from 'lucide-react';

const MENU_CARDS = [
  {
    id: 'alphabet',
    title: 'L\'Alphabet A-Z',
    subtitle: 'Lettres & Mots',
    emoji: '🔤',
    badge: 'EDUCATIONAL',
    bgGrad: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
    iconText: 'A B C'
  },
  {
    id: 'numbers',
    title: 'Chiffres 1 à 20',
    subtitle: 'Compter les étoiles',
    emoji: '🔢',
    badge: 'COUNTING',
    bgGrad: 'linear-gradient(135deg, #4DABF7, #74C0FC)',
    iconText: '1 2 3'
  },
  {
    id: 'animals',
    title: 'Les Animaux',
    subtitle: 'Grand, marron & cris',
    emoji: '🦁',
    badge: 'INTERACTIVE',
    bgGrad: 'linear-gradient(135deg, #FF922B, #FFC078)',
    iconText: '🐘 🐭 🐻'
  },
  {
    id: 'balloons',
    title: 'Éclate-Ballons',
    subtitle: 'Pop ! Pop ! Pop !',
    emoji: '🎈',
    badge: 'TAP GAMES',
    bgGrad: 'linear-gradient(135deg, #FF7675, #FAB1A0)',
    iconText: '🎈 ⭐ 💥'
  },
  {
    id: 'maze',
    title: 'Labyrinthe Canard',
    subtitle: 'Direction le bain !',
    emoji: '🦆',
    badge: 'MAZE GAMES',
    bgGrad: 'linear-gradient(135deg, #2ED573, #7BED9F)',
    iconText: '🦆 🛁 🌿'
  },
  {
    id: 'farm',
    title: 'Ferme aux Œufs',
    subtitle: 'Nourrir & Vendre',
    emoji: '🐔',
    badge: 'FARM TYCOON',
    bgGrad: 'linear-gradient(135deg, #2ED573, #10AC84)',
    iconText: '🌾 🐔 🥚 💰'
  },
  {
    id: 'music',
    title: 'Xylophone Musical',
    subtitle: 'Do, Ré, Mi, Fa, Sol',
    emoji: '🎵',
    badge: 'MUSIC',
    bgGrad: 'linear-gradient(135deg, #A29BFE, #6C5CE7)',
    iconText: '🎶 🎹 🌈'
  },
  {
    id: 'coloring',
    title: 'Coloriage Magique',
    subtitle: 'Pompier & Canard',
    emoji: '🎨',
    badge: 'COLORING',
    bgGrad: 'linear-gradient(135deg, #20C997, #63E6BE)',
    iconText: '🦆 🚒 🖌️'
  },
  {
    id: 'memory',
    title: 'Mémoire & Paires',
    subtitle: 'Chiens, chats & doudous',
    emoji: '🧩',
    badge: 'MEMORY',
    bgGrad: 'linear-gradient(135deg, #FCC419, #FFE066)',
    iconText: '🐶 🐾 🐱'
  },
  {
    id: 'firefighter',
    title: 'Pompier & Eau',
    subtitle: 'De l\'eau sur le feu !',
    emoji: '🚒',
    badge: 'ACTION',
    bgGrad: 'linear-gradient(135deg, #FA5252, #FF8787)',
    iconText: '💦 🔥 🚒'
  },
  {
    id: 'driving',
    title: 'Petite Voiture',
    subtitle: 'Vroum vroum & feux',
    emoji: '🚗',
    badge: 'DRIVING',
    bgGrad: 'linear-gradient(135deg, #339AF0, #74C0FC)',
    iconText: '🚗 🚦 💨'
  },
  {
    id: 'cooking',
    title: 'Petite Cuisine',
    subtitle: 'Soupe du chef',
    emoji: '🍲',
    badge: 'COOKING',
    bgGrad: 'linear-gradient(135deg, #845EF7, #B197FC)',
    iconText: '🍅 🥕 🥣'
  },
];

export default function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [stars, setStars] = useState(8);
  const [muted, setMuted] = useState(false);
  const [langMode, setLangMode] = useState('fr'); // 'fr' or 'bilingual'
  const [niaAccessory, setNiaAccessory] = useState('crown');
  const [niaMessage, setNiaMessage] = useState(
    "Coucou mon ami ! C'est moi, Nia ! Touche un jeu pour t'amuser et apprendre avec moi !"
  );

  useEffect(() => {
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
      case 'balloons':
        prompt = "Éclate un maximum de ballons avec ton doigt ! Pop pop !";
        break;
      case 'maze':
        prompt = "Aide le petit canard à traverser le labyrinthe pour rejoindre son bain !";
        break;
      case 'farm':
        prompt = "Bienvenue dans ta ferme ! Donne des graines aux poules, vends les œufs et achète de nouveaux animaux !";
        break;
      case 'music':
        prompt = "Touche les lames du xylophone pour jouer une belle chanson !";
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
      case 'dressing':
        prompt = "Choisis un joli chapeau pour me déguiser !";
        break;
      case 'stickers':
        prompt = "Regarde ton beau carnet d'autocollants ! Colle de jolies images !";
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

  const toggleLanguageMode = () => {
    sounds.playPop();
    const nextMode = langMode === 'fr' ? 'bilingual' : 'fr';
    setLangMode(nextMode);
    doraVoice.mode = nextMode;
    const alertMsg = nextMode === 'bilingual'
      ? "Mode Bilingue activé ! Français et Anglais !"
      : "Mode 100% Français activé !";
    setNiaMessage(alertMsg);
    doraVoice.speak(alertMsg);
  };

  return (
    <div className="learning-center-viewport">
      {/* Top Friendly Header Bar */}
      <header className="center-navbar">
        <div className="navbar-brand">
          <span className="brand-star-icon animate-bounce-soft">⭐</span>
          <div className="brand-text-block">
            <h1 className="brand-title">Le Monde Magique de Nia</h1>
            <p className="brand-tagline">Centre d'Éveil & Jeux pour tout-petits (3 ans)</p>
          </div>
        </div>

        <div className="navbar-controls">
          {/* Stars Collected Badge */}
          <div className="stars-counter-badge animate-pop" title="Étoiles gagnées !">
            <Star size={24} fill="#FFD43B" color="#F59F00" />
            <span className="stars-count-text">{stars}</span>
          </div>

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguageMode}
            className={`lang-toggle-pill ${langMode === 'bilingual' ? 'is-bilingual' : ''}`}
            title="Changer de langue"
          >
            <Languages size={18} />
            <span>{langMode === 'bilingual' ? '🇫🇷+🇬🇧 Bilingue' : '🇫🇷 100% Français'}</span>
          </button>

          {/* Quick Dressing Room Button */}
          <button
            onClick={() => handleSelectGame('dressing')}
            className={`quick-header-action-btn ${activeGame === 'dressing' ? 'active' : ''}`}
            title="Habiller Nia"
          >
            <Shirt size={20} />
            <span className="btn-label-hide-mobile">Dressing</span>
          </button>

          {/* Quick Sticker Book Button */}
          <button
            onClick={() => handleSelectGame('stickers')}
            className={`quick-header-action-btn ${activeGame === 'stickers' ? 'active' : ''}`}
            title="Carnet d'autocollants"
          >
            <BookOpen size={20} />
            <span className="btn-label-hide-mobile">Autocollants</span>
          </button>

          {/* Sound Toggle */}
          <button 
            onClick={toggleSound} 
            className={`sound-toggle-btn ${muted ? 'is-muted' : ''}`}
            title={muted ? "Activer le son" : "Couper le son"}
          >
            {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
          </button>

          {/* Back Button */}
          {activeGame && (
            <button onClick={handleBackToMenu} className="back-portal-btn animate-pop">
              <ArrowLeft size={22} /> Menu des Jeux
            </button>
          )}
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="center-main-layout">
        {/* Animated Nia Character Side Host */}
        <aside className="nia-host-column">
          <NiaCharacter
            message={niaMessage}
            onRepeat={repeatVoice}
            accessory={niaAccessory}
            size={activeGame ? 'small' : 'large'}
          />
        </aside>

        {/* Activity Area or Learning Center Grid */}
        <main className="center-stage-column">
          {!activeGame ? (
            /* --- The Toddler Learning Center Portal Grid (12 games!) --- */
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
              {activeGame === 'balloons' && (
                <BalloonsPopGame onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'maze' && (
                <DuckMazeGame onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'farm' && (
                <AnimalFarmGame onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'music' && (
                <MusicXylophoneGame onNiaSpeak={setNiaMessage} />
              )}
              {activeGame === 'coloring' && (
                <ColoringActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'memory' && (
                <PuzzleMemoryActivity onNiaSpeak={setNiaMessage} onRewardStar={handleRewardStar} />
              )}
              {activeGame === 'dressing' && (
                <NiaDressingRoom
                  currentAccessory={niaAccessory}
                  onSelectAccessory={setNiaAccessory}
                  onNiaSpeak={setNiaMessage}
                />
              )}
              {activeGame === 'stickers' && (
                <StickerBook
                  starsCount={stars}
                  onNiaSpeak={setNiaMessage}
                />
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

      <footer className="center-footer">
        <p>🌟 Avec la voix enjouée de Nia &bull; Conçu avec amour pour les tout-petits de 3 ans</p>
      </footer>
    </div>
  );
}
