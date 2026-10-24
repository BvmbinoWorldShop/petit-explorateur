import React, { useState, useEffect } from 'react';
import TeacherMascot from './components/TeacherMascot';
import ColorsActivity from './activities/ColorsActivity';
import LettersActivity from './activities/LettersActivity';
import FruitsActivity from './activities/FruitsActivity';
import DailyObjectsActivity from './activities/DailyObjectsActivity';
import CookingGame from './games/CookingGame';
import DrivingGame from './games/DrivingGame';
import FirefighterGame from './games/FirefighterGame';
import SortingGame from './games/SortingGame';
import { sounds } from './utils/audio';
import { teacher } from './utils/speech';
import {
  Palette,
  Type,
  Apple,
  Home,
  Utensils,
  Car,
  Droplet,
  BrainCircuit,
  Volume2
} from 'lucide-react';

const TABS = [
  { id: 'colors', label: 'Couleurs', icon: Palette, color: '#ff4757', emoji: '🎨' },
  { id: 'letters', label: 'Lettres', icon: Type, color: '#3742fa', emoji: '🔤' },
  { id: 'fruits', label: 'Fruits', icon: Apple, color: '#2ed573', emoji: '🍎' },
  { id: 'objects', label: 'Objets', icon: Home, color: '#ffa502', emoji: '🧸' },
  { id: 'cooking', label: 'Cuisine', icon: Utensils, color: '#e056fd', emoji: '🍲' },
  { id: 'driving', label: 'Voiture', icon: Car, color: '#ff7f50', emoji: '🚗' },
  { id: 'firefighter', label: 'Pompier', icon: Droplet, color: '#0984e3', emoji: '🚒' },
  { id: 'sorting', label: 'Énigmes', icon: BrainCircuit, color: '#00b894', emoji: '🧩' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('colors');
  const [teacherMessage, setTeacherMessage] = useState(
    "Bonjour mon petit trésor ! Bienvenue dans ton monde magique ! Choisis un jeu ou une activité !"
  );

  useEffect(() => {
    // Initial welcome voice in French
    const welcome = "Bonjour mon petit trésor ! Bienvenue dans ton monde magique ! Choisis une activité !";
    teacher.speakBilingual(welcome, "Hello little treasure! Welcome to your magical world!");
  }, []);

  const handleTabChange = (tabId) => {
    sounds.playPop();
    setActiveTab(tabId);
    let msg = "";
    switch (tabId) {
      case 'colors':
        msg = "Regarde toutes ces belles couleurs ! Laquelle préfères-tu ?";
        break;
      case 'letters':
        msg = "C'est l'alphabet des tout-petits ! Répète les lettres après moi !";
        break;
      case 'fruits':
        msg = "Miam ! Découvrons de délicieux fruits colorés et sains !";
        break;
      case 'objects':
        msg = "Voici les objets magiques de ta maison !";
        break;
      case 'cooking':
        msg = "Bienvenue dans la cuisine ! Mettons de bons ingrédients dans la marmite !";
        break;
      case 'driving':
        msg = "Attention au volant ! Allons rouler et klaxonner sur la route ! Tut-tut !";
        break;
      case 'firefighter':
        msg = "Au secours, il y a un feu ! Prends la lance d'eau et éteins-le vite !";
        break;
      case 'sorting':
        msg = "C'est l'heure des énigmes ! Trouve la bonne forme et la bonne couleur !";
        break;
      default:
        msg = "Amusons-nous ensemble !";
    }
    setTeacherMessage(msg);
    teacher.speakFrench(msg);
  };

  const repeatTeacherMessage = () => {
    sounds.playPop();
    teacher.speakFrench(teacherMessage);
  };

  return (
    <div className="app-viewport">
      {/* Top Header */}
      <header className="app-header">
        <div className="header-brand">
          <span className="logo-sparkle">🌟</span>
          <div className="logo-titles">
            <h1 className="brand-name">Le Petit Explorateur</h1>
            <p className="brand-subtitle">Apprendre le français & l'anglais en s'amusant (3 ans)</p>
          </div>
        </div>

        {/* Teacher Mascot with live speech bubble */}
        <TeacherMascot 
          message={teacherMessage} 
          onRepeat={repeatTeacherMessage} 
        />
      </header>

      {/* Main Toddler Navigation Menu Bar (Extra Large Touch Targets) */}
      <nav className="toddler-nav-bar">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`nav-tab-btn ${isActive ? 'active' : ''}`}
              style={{
                backgroundColor: isActive ? tab.color : '#ffffff',
                borderColor: tab.color,
                color: isActive ? '#ffffff' : '#2d3436'
              }}
            >
              <span className="tab-emoji">{tab.emoji}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Dynamic Activity/Game Canvas View */}
      <main className="content-container">
        {activeTab === 'colors' && <ColorsActivity onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'letters' && <LettersActivity onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'fruits' && <FruitsActivity onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'objects' && <DailyObjectsActivity onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'cooking' && <CookingGame onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'driving' && <DrivingGame onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'firefighter' && <FirefighterGame onTeacherPrompt={setTeacherMessage} />}
        {activeTab === 'sorting' && <SortingGame onTeacherPrompt={setTeacherMessage} />}
      </main>

      {/* Kid-Safe Footer */}
      <footer className="app-footer">
        <p>🇫🇷 Parle en français &bull; 🇬🇧 English &bull; Conçu avec amour pour les petits aventuriers de 3 ans</p>
      </footer>
    </div>
  );
}
