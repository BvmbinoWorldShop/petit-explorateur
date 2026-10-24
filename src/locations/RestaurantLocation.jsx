import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { UtensilsCrossed, Flame, Sparkles, CheckCircle2, RotateCcw, Bell } from 'lucide-react';

const RECIPES = [
  { id: 'soup', label: '🥣 La Bonne Soupe' },
  { id: 'pizza', label: '🍕 La Pizza Rigolote' },
];

const PIZZA_TOPPINGS = [
  { id: 'tomato', nameFr: 'Sauce Tomate', nameEn: 'Tomato Sauce', emoji: '🍅' },
  { id: 'cheese', nameFr: 'Fromage Fondu', nameEn: 'Melted Cheese', emoji: '🧀' },
  { id: 'mushroom', nameFr: 'Champignon', nameEn: 'Mushroom', emoji: '🍄' },
  { id: 'olive', nameFr: 'Olives', nameEn: 'Olives', emoji: '🫒' },
  { id: 'basil', nameFr: 'Feuille de Basilic', nameEn: 'Basil Leaf', emoji: '🌿' },
];

export default function RestaurantLocation({ onTeacherSpeech, onClose, onRewardStar }) {
  const [recipe, setRecipe] = useState('pizza');
  const [toppings, setToppings] = useState([]);
  const [baked, setBaked] = useState(false);

  useEffect(() => {
    const welcome = "Bienvenue dans mon restaurant ! Enfile ta toque de chef et préparons un bon festin !";
    onTeacherSpeech(welcome);
    teacher.speakBilingual(welcome, "Welcome to my restaurant! Let's cook a delicious meal!");
  }, []);

  const addTopping = (item) => {
    if (baked) return;
    sounds.playPop();
    sounds.playCookingSizzle();
    const next = [...toppings, item];
    setToppings(next);
    const msg = `Miam ! Tu as ajouté ${item.nameFr} sur la pizza !`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `Added ${item.nameEn}!`);
  };

  const bakePizza = () => {
    if (toppings.length === 0) {
      teacher.speakFrench("Mets d'abord de bons ingrédients sur la pâte !");
      return;
    }
    sounds.playCookingSizzle();
    setTimeout(() => {
      setBaked(true);
      sounds.playSuccess();
      confetti({ particleCount: 70, spread: 60 });
      if (onRewardStar) onRewardStar();
      const readyMsg = "Ding ! La pizza est dorée et toute chaude ! C'est un régal, bravo chef !";
      onTeacherSpeech(readyMsg);
      teacher.speakBilingual(readyMsg, "Ding! The pizza is golden and hot! Delicious!");
    }, 1200);
  };

  const resetPizza = () => {
    setToppings([]);
    setBaked(false);
    teacher.speakFrench("Préparons une nouvelle pizza magique !");
  };

  return (
    <div className="location-modal-card">
      <div className="location-modal-header restaurant-theme">
        <div className="modal-title-box">
          <span className="location-large-emoji">🍽️</span>
          <div>
            <h2 className="modal-title">Le Restaurant des Gourmands</h2>
            <p className="modal-subtitle">Restaurant &bull; Cuisine Créative pour Petit Chef</p>
          </div>
        </div>
        <button onClick={onClose} className="close-modal-btn">✖ Retour à la ville</button>
      </div>

      <div className="restaurant-arena">
        {/* Ingrédients à disposition */}
        <div className="kitchen-ingredients-shelf">
          <h3 className="section-title">Choisis les garnitures de ta pizza :</h3>
          <div className="toppings-grid">
            {PIZZA_TOPPINGS.map((item) => (
              <button
                key={item.id}
                onClick={() => addTopping(item)}
                className="topping-btn"
                disabled={baked}
              >
                <span className="topping-emoji">{item.emoji}</span>
                <span className="topping-name-fr">{item.nameFr}</span>
                <span className="topping-name-en">({item.nameEn})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Planche à Pizza et Cuisson */}
        <div className="pizza-oven-section">
          <div className={`pizza-dough-board ${baked ? 'is-golden-baked' : ''}`}>
            {/* Round pizza crust */}
            <div className="pizza-base">
              {toppings.length === 0 ? (
                <span className="empty-pizza-text">Pâte à pizza prête ! Dépose des ingrédients ! 🍕</span>
              ) : (
                <div className="pizza-scattered-toppings">
                  {toppings.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="topping-placed animate-pop"
                      style={{
                        transform: `rotate(${idx * 45}deg) scale(${baked ? 1.1 : 1})`,
                      }}
                    >
                      {item.emoji}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action buttons */}
          {!baked ? (
            <button
              onClick={bakePizza}
              className={`bake-button ${toppings.length > 0 ? 'ready' : ''}`}
            >
              <Flame size={24} /> Cuire la Pizza au Four ! 🔥
            </button>
          ) : (
            <div className="baked-banner animate-pop">
              <CheckCircle2 size={36} color="#00b894" />
              <h4>🎉 Miam miam ! Pizza prête à déguster !</h4>
              <button onClick={resetPizza} className="action-button secondary">
                <RotateCcw size={18} /> Cuisiner une autre pizza
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
