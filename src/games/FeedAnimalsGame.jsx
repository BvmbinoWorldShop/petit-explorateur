import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { RotateCcw, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

const FEED_PAIRS = [
  { id: 'rabbit', animalFr: 'Le Lapin', animalEmoji: '🐰', foodFr: 'La Carotte', foodEmoji: '🥕', sound: 'Crounch crounch !' },
  { id: 'dog', animalFr: 'Le Chien', animalEmoji: '🐶', foodFr: "L'Os", foodEmoji: '🦴', sound: 'Wouaf ! Miam !' },
  { id: 'cat', animalFr: 'Le Chat', animalEmoji: '🐱', foodFr: 'Le Poisson', foodEmoji: '🐟', sound: 'Miaou ! Délicieux !' },
  { id: 'monkey', animalFr: 'Le Singe', animalEmoji: '🐒', foodFr: 'La Banane', foodEmoji: '🍌', sound: 'Ouh ouh ah ah !' },
];

export default function FeedAnimalsGame({ onNiaSpeak, onRewardStar }) {
  const [selectedFood, setSelectedFood] = useState(null);
  const [fedAnimals, setFedAnimals] = useState([]);

  useEffect(() => {
    startFeeding();
  }, []);

  const startFeeding = () => {
    setSelectedFood(null);
    setFedAnimals([]);
    const welcome = "Les petits animaux ont très faim ! Choisis un aliment et donne-le au bon animal !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  };

  const handleSelectFood = (item) => {
    sounds.playPop();
    setSelectedFood(item);
    const msg = `Tu as pris ${item.foodFr} ! À quel animal vas-tu le donner ?`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const handleFeedAnimal = (animal) => {
    if (!selectedFood) {
      doraVoice.speak("Choisis d'abord une nourriture en dessous !");
      return;
    }

    if (selectedFood.id === animal.id) {
      // Correct!
      sounds.playSuccess();
      const nextFed = [...fedAnimals, animal.id];
      setFedAnimals(nextFed);
      setSelectedFood(null);
      confetti({ particleCount: 40, spread: 50 });

      const praise = `Miam ! ${animal.animalFr} mange ${animal.foodFr} ! ${animal.sound}`;
      onNiaSpeak(praise);
      doraVoice.speak(praise);

      if (nextFed.length === FEED_PAIRS.length) {
        if (onRewardStar) onRewardStar();
        setTimeout(() => {
          const win = "Youpi ! Tous les animaux ont le ventre plein et sont très contents ! Bravo mon ami !";
          onNiaSpeak(win);
          doraVoice.speak(win);
        }, 1200);
      }
    } else {
      // Wrong animal
      sounds.playBloop();
      const hint = `Non, ${animal.animalFr} ne mange pas cela ! Cherche plutôt qui aime ${selectedFood.foodFr} !`;
      onNiaSpeak(hint);
      doraVoice.speak(hint);
    }
  };

  return (
    <div className="center-activity-card">
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #ff9f43, #feca57)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🥕</span>
          <div>
            <h2 className="card-main-title">Nourrir les Petits Animaux</h2>
            <p className="card-subtitle">Donne à chaque animal son repas préféré !</p>
          </div>
        </div>
        <button onClick={startFeeding} className="refresh-mission-btn">
          <RotateCcw size={18} /> Recommencer
        </button>
      </div>

      <div className="feed-game-arena">
        {/* Animals Row */}
        <div className="animals-target-grid">
          {FEED_PAIRS.map((a) => {
            const isFed = fedAnimals.includes(a.id);
            return (
              <button
                key={a.id}
                onClick={() => handleFeedAnimal(a)}
                className={`animal-feeder-card ${isFed ? 'is-fed' : ''}`}
              >
                <span className="feeder-animal-emoji animate-bounce-soft">{a.animalEmoji}</span>
                <span className="feeder-animal-name">{a.animalFr}</span>
                {isFed ? (
                  <span className="fed-badge">❤️ Rassasié !</span>
                ) : (
                  <span className="hungry-badge">A faim ! 😋</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Food Shelf */}
        <div className="food-selection-shelf">
          <p className="shelf-instruction">Touche une nourriture puis touche l'animal :</p>
          <div className="foods-grid">
            {FEED_PAIRS.map((item) => {
              const isUsed = fedAnimals.includes(item.id);
              const isSelected = selectedFood && selectedFood.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => !isUsed && handleSelectFood(item)}
                  disabled={isUsed}
                  className={`food-item-btn ${isSelected ? 'selected-food' : ''} ${isUsed ? 'used-food' : ''}`}
                >
                  <span className="food-emoji">{item.foodEmoji}</span>
                  <span className="food-name">{item.foodFr}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
