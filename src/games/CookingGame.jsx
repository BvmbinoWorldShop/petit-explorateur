import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Sparkles, Utensils, RotateCcw } from 'lucide-react';

const INGREDIENTS = [
  { id: 'tomato', nameFr: 'La Tomate', nameEn: 'Tomato', emoji: '🍅', color: '#ff6b6b' },
  { id: 'carrot', nameFr: 'La Carotte', nameEn: 'Carrot', emoji: '🥕', color: '#ffa94d' },
  { id: 'mushroom', nameFr: 'Le Champignon', nameEn: 'Mushroom', emoji: '🍄', color: '#e599f7' },
  { id: 'broccoli', nameFr: 'Le Brocoli', nameEn: 'Broccoli', emoji: '🥦', color: '#69db7c' },
  { id: 'potato', nameFr: 'La Pomme de terre', nameEn: 'Potato', emoji: '🥔', color: '#ffd43b' },
  { id: 'corn', nameFr: 'Le Maïs', nameEn: 'Corn', emoji: '🌽', color: '#ffe066' }
];

export default function CookingGame({ onTeacherPrompt }) {
  const [inPot, setInPot] = useState([]);
  const [stirring, setStirring] = useState(false);
  const [dishReady, setDishReady] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(null);

  useEffect(() => {
    startNewRecipe();
  }, []);

  const startNewRecipe = () => {
    setInPot([]);
    setDishReady(false);
    setStirring(false);
    // Pick an initial ingredient target to guide 3yo
    const randomTarget = INGREDIENTS[Math.floor(Math.random() * INGREDIENTS.length)];
    setCurrentTarget(randomTarget);
    const prompt = `Cuisinons une bonne soupe ! Mets ${randomTarget.nameFr} dans la marmite !`;
    onTeacherPrompt(prompt);
    teacher.speakBilingual(prompt, `Put the ${randomTarget.nameEn} in the pot!`);
  };

  const addIngredient = (item) => {
    if (dishReady) return;
    sounds.playBloop();
    sounds.playCookingSizzle();

    const newInPot = [...inPot, item];
    setInPot(newInPot);

    if (currentTarget && item.id === currentTarget.id) {
      sounds.playSuccess();
      const praise = `Bravo ! Tu as mis ${item.nameFr} ! Remue la soupe maintenant !`;
      onTeacherPrompt(praise);
      teacher.speakFrench(praise);
      setCurrentTarget(null);
    } else {
      teacher.speakBilingual(item.nameFr, item.nameEn);
    }
  };

  const stirSoup = () => {
    if (inPot.length === 0) {
      const msg = "Ajoute d'abord de bons légumes dans la marmite !";
      onTeacherPrompt(msg);
      teacher.speakFrench(msg);
      return;
    }
    setStirring(true);
    sounds.playCookingSizzle();

    setTimeout(() => {
      setStirring(false);
      setDishReady(true);
      sounds.playSuccess();
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      const readyMsg = "Miam miam ! La soupe est prête ! C'est délicieux, bravo petit chef !";
      onTeacherPrompt(readyMsg);
      teacher.speakBilingual(readyMsg, "Yummy! The soup is ready! Great job little chef!");
    }, 1500);
  };

  return (
    <div className="game-card cooking-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Utensils className="game-icon" /> La Petite Cuisine du Chef 🍲
        </h2>
        <button onClick={startNewRecipe} className="action-button secondary">
          <RotateCcw size={22} /> Recommencer
        </button>
      </div>

      <div className="cooking-arena">
        {/* Ingredients Shelf */}
        <div className="shelf-container">
          <p className="shelf-label">Touche les ingrédients pour les ajouter :</p>
          <div className="ingredients-grid">
            {INGREDIENTS.map((item) => {
              const isTarget = currentTarget && currentTarget.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => addIngredient(item)}
                  className={`ingredient-card ${isTarget ? 'is-target' : ''}`}
                  style={{ borderColor: item.color }}
                >
                  <span className="ingredient-emoji">{item.emoji}</span>
                  <span className="ingredient-name-fr">{item.nameFr}</span>
                  <span className="ingredient-name-en">({item.nameEn})</span>
                  {isTarget && <span className="target-pulse">✨</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Cooking Pot Area */}
        <div className="pot-section">
          <div className={`pot-container ${stirring ? 'stirring' : ''} ${dishReady ? 'cooked' : ''}`}>
            {/* Steam bubbles */}
            <div className="steam-wrapper">
              <span className="steam-bubble s1">💨</span>
              <span className="steam-bubble s2">✨</span>
              <span className="steam-bubble s3">💨</span>
            </div>

            {/* Pot Body */}
            <div className="pot-body">
              <div className="pot-rim"></div>
              <div className="pot-soup">
                {inPot.length === 0 ? (
                  <span className="empty-pot-text">Marmite vide... Dépose des légumes ! 🥕</span>
                ) : (
                  <div className="pot-ingredients">
                    {inPot.map((item, idx) => (
                      <span key={idx} className="floating-ingredient">
                        {item.emoji}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stir Spoon Action */}
            <button
              onClick={stirSoup}
              className={`stir-button ${inPot.length > 0 ? 'active' : ''}`}
            >
              🥄 Mélanger la soupe !
            </button>
          </div>

          {dishReady && (
            <div className="dish-ready-banner">
              <h3>🎉 La soupe est cuite ! C'est délicieux ! 🥣</h3>
              <p>Miam miam miam !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
