import React, { useState, useEffect } from 'react';
import TeacherPixarGuide from './components/TeacherPixarGuide';
import World3D from './components/World3D';
import SchoolLocation from './locations/SchoolLocation';
import GroceryLocation from './locations/GroceryLocation';
import MallLocation from './locations/MallLocation';
import RestaurantLocation from './locations/RestaurantLocation';
import FireStationLocation from './locations/FireStationLocation';
import DrivingGame from './games/DrivingGame';
import SortingGame from './games/SortingGame';
import ColorsActivity from './activities/ColorsActivity';
import LettersActivity from './activities/LettersActivity';
import FruitsActivity from './activities/FruitsActivity';
import { sounds } from './utils/audio';
import { teacher } from './utils/speech';
import {
  Compass,
  School,
  ShoppingCart,
  ShoppingBag,
  UtensilsCrossed,
  Flame,
  Car,
  BrainCircuit,
  Star,
  Sparkles,
  Palette,
  Volume2
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('world'); // 'world' or location ID
  const [stars, setStars] = useState(3);
  const [teacherMessage, setTeacherMessage] = useState(
    "Bonjour mon petit trésor ! Je suis Maîtresse Nia ! Viens explorer la ville avec moi !"
  );

  useEffect(() => {
    const welcome = "Bonjour mon petit trésor ! Je suis Maîtresse Nia ! Viens explorer la ville magique avec moi ! Où veux-tu aller ?";
    teacher.speakBilingual(welcome, "Hello little treasure! I am Teacher Nia! Come explore the magical town with me!");
  }, []);

  const handleSelectLocation = (loc) => {
    sounds.playSuccess();
    setCurrentView(loc.id);
    const msg = `Nous arrivons à ${loc.nameFr} ! ${loc.description}`;
    setTeacherMessage(msg);
    teacher.speakBilingual(msg, `Welcome to the ${loc.nameEn}!`);
  };

  const handleBackToWorld = () => {
    sounds.playPop();
    setCurrentView('world');
    const msg = "De retour dans la ville ! Balade-toi et choisis un nouvel endroit magique !";
    setTeacherMessage(msg);
    teacher.speakFrench(msg);
  };

  const addStar = () => {
    setStars((s) => s + 1);
  };

  const repeatVoice = () => {
    teacher.speakFrench(teacherMessage);
  };

  return (
    <div className="pixar-world-app">
      {/* Top Header Bar */}
      <header className="main-navbar">
        <div className="nav-brand-section">
          <span className="brand-logo-icon animate-bounce-soft">🌍</span>
          <div className="brand-text-wrap">
            <h1 className="brand-heading">Le Monde de Maîtresse Nia 🌟</h1>
            <p className="brand-subheading">Aventure 3D interactive bilingue (Français & Anglais)</p>
          </div>
        </div>

        {/* Global Stars Count */}
        <div className="header-stars-pill">
          <Star size={24} fill="#ffd32a" color="#ffa502" />
          <span className="stars-number">{stars}</span>
        </div>

        {/* Home / World View Button */}
        {currentView !== 'world' && (
          <button onClick={handleBackToWorld} className="return-world-nav-btn">
            🌍 Revenir à la Ville 3D
          </button>
        )}
      </header>

      {/* Main Interactive Stage */}
      <main className="stage-area">
        {currentView === 'world' && (
          <div className="world-experience-container">
            {/* 3D Interactive Town */}
            <World3D
              onSelectLocation={handleSelectLocation}
              onTeacherSpeech={setTeacherMessage}
              starsCount={stars}
              onCollectStar={addStar}
            />
          </div>
        )}

        {/* Destination Modals / Screens */}
        {currentView === 'school' && (
          <SchoolLocation
            onTeacherSpeech={setTeacherMessage}
            onClose={handleBackToWorld}
            onRewardStar={addStar}
          />
        )}

        {currentView === 'grocery' && (
          <GroceryLocation
            onTeacherSpeech={setTeacherMessage}
            onClose={handleBackToWorld}
            onRewardStar={addStar}
          />
        )}

        {currentView === 'mall' && (
          <MallLocation
            onTeacherSpeech={setTeacherMessage}
            onClose={handleBackToWorld}
            onRewardStar={addStar}
          />
        )}

        {currentView === 'restaurant' && (
          <RestaurantLocation
            onTeacherSpeech={setTeacherMessage}
            onClose={handleBackToWorld}
            onRewardStar={addStar}
          />
        )}

        {currentView === 'firefighter' && (
          <FireStationLocation
            onTeacherSpeech={setTeacherMessage}
            onClose={handleBackToWorld}
            onRewardStar={addStar}
          />
        )}

        {currentView === 'driving' && (
          <div className="location-modal-card">
            <div className="location-modal-header fire-theme">
              <h2>🚗 La Voiture en Ville</h2>
              <button onClick={handleBackToWorld} className="close-modal-btn">✖ Retour</button>
            </div>
            <DrivingGame onTeacherPrompt={setTeacherMessage} />
          </div>
        )}

        {currentView === 'sorting' && (
          <div className="location-modal-card">
            <div className="location-modal-header mall-theme">
              <h2>🧩 Les Énigmes Faciles</h2>
              <button onClick={handleBackToWorld} className="close-modal-btn">✖ Retour</button>
            </div>
            <SortingGame onTeacherPrompt={setTeacherMessage} />
          </div>
        )}
      </main>

      {/* Bottom Bar: Quick Destination Shortcuts */}
      <nav className="bottom-quick-bar">
        <button
          onClick={() => { sounds.playPop(); setCurrentView('world'); }}
          className={`quick-bar-btn ${currentView === 'world' ? 'active' : ''}`}
        >
          <span className="q-emoji">🌍</span>
          <span className="q-label">Ville 3D</span>
        </button>
        <button
          onClick={() => handleSelectLocation({ id: 'school', nameFr: "L'École", nameEn: "School", description: "Lettres et chiffres !" })}
          className={`quick-bar-btn ${currentView === 'school' ? 'active' : ''}`}
        >
          <span className="q-emoji">🏫</span>
          <span className="q-label">École</span>
        </button>
        <button
          onClick={() => handleSelectLocation({ id: 'grocery', nameFr: "L'Épicerie", nameEn: "Grocery Store", description: "Faisons les courses !" })}
          className={`quick-bar-btn ${currentView === 'grocery' ? 'active' : ''}`}
        >
          <span className="q-emoji">🛒</span>
          <span className="q-label">Épicerie</span>
        </button>
        <button
          onClick={() => handleSelectLocation({ id: 'mall', nameFr: "Le Centre Commercial", nameEn: "Mall", description: "Jouets et vêtements !" })}
          className={`quick-bar-btn ${currentView === 'mall' ? 'active' : ''}`}
        >
          <span className="q-emoji">🛍️</span>
          <span className="q-label">Magasins</span>
        </button>
        <button
          onClick={() => handleSelectLocation({ id: 'restaurant', nameFr: "Le Restaurant", nameEn: "Restaurant", description: "Cuisinons ensemble !" })}
          className={`quick-bar-btn ${currentView === 'restaurant' ? 'active' : ''}`}
        >
          <span className="q-emoji">🍽️</span>
          <span className="q-label">Restaurant</span>
        </button>
        <button
          onClick={() => handleSelectLocation({ id: 'firefighter', nameFr: "Les Pompiers", nameEn: "Fire Station", description: "De l'eau sur le feu !" })}
          className={`quick-bar-btn ${currentView === 'firefighter' ? 'active' : ''}`}
        >
          <span className="q-emoji">🚒</span>
          <span className="q-label">Pompiers</span>
        </button>
      </nav>

      {/* 3D Pixar Teacher Mascot Guide Widget */}
      <TeacherPixarGuide 
        message={teacherMessage} 
        onRepeat={repeatVoice}
      />
    </div>
  );
}
