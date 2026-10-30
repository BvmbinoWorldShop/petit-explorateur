import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Sparkles, Utensils, RotateCcw, CheckCircle2 } from 'lucide-react';

const INGREDIENTS = [
  { id: 'tomato', nameFr: 'La Tomate', nameEn: 'Tomato', emoji: '🍅', color: '#ff6b6b' },
  { id: 'carrot', nameFr: 'La Carotte', nameEn: 'Carrot', emoji: '🥕', color: '#ffa94d' },
  { id: 'mushroom', nameFr: 'Le Champignon', nameEn: 'Mushroom', emoji: '🍄', color: '#e599f7' },
  { id: 'broccoli', nameFr: 'Le Brocoli', nameEn: 'Broccoli', emoji: '🥦', color: '#69db7c' },
  { id: 'potato', nameFr: 'La Pomme de terre', nameEn: 'Potato', emoji: '🥔', color: '#ffd43b' },
  { id: 'corn', nameFr: 'Le Maïs', nameEn: 'Corn', emoji: '🌽', color: '#ffe066' },
  { id: 'cheese', nameFr: 'Le Fromage', nameEn: 'Cheese', emoji: '🧀', color: '#f1c40f' },
  { id: 'strawberry', nameFr: 'La Fraise', nameEn: 'Strawberry', emoji: '🍓', color: '#ff4757' },
];

const RECIPES = [
  {
    id: 'soup',
    title: 'La Soupe Magique 🍲',
    steps: ['tomato', 'carrot', 'corn'],
    liquidColor: '#ff9f43',
  },
  {
    id: 'fondue',
    title: 'La Marmite Fondante 🧀',
    steps: ['potato', 'cheese', 'mushroom'],
    liquidColor: '#feca57',
  },
  {
    id: 'green',
    title: 'Le Velouté du Jardin 🥦',
    steps: ['broccoli', 'carrot', 'potato'],
    liquidColor: '#1dd1a1',
  },
];

export default function CookingGame({ onTeacherPrompt }) {
  const [recipeIdx, setRecipeIdx] = useState(0);
  const [inPot, setInPot] = useState([]);
  const [stirring, setStirring] = useState(false);
  const [dishReady, setDishReady] = useState(false);
  const [tastedCount, setTastedCount] = useState(0);

  const currentRecipe = RECIPES[recipeIdx % RECIPES.length];

  // Determine the next required ingredient from the recipe checklist
  const nextRequiredId = currentRecipe.steps.find(
    (reqId) => !inPot.some((item) => item.id === reqId)
  );
  const currentTarget = INGREDIENTS.find((ing) => ing.id === nextRequiredId) || null;

  useEffect(() => {
    startNewRecipe(recipeIdx);
  }, [recipeIdx]);

  const startNewRecipe = (idx = recipeIdx) => {
    const r = RECIPES[idx % RECIPES.length];
    setInPot([]);
    setDishReady(false);
    setStirring(false);
    const firstIng = INGREDIENTS.find((i) => i.id === r.steps[0]);
    const prompt = `Préparons ${r.title} ! Commence par mettre ${firstIng.nameFr} dans la marmite !`;
    onTeacherPrompt(prompt);
    teacher.speakBilingual(prompt, `Let's cook! Put the ${firstIng.nameEn} in the pot!`);
  };

  const addIngredient = (item) => {
    if (dishReady) return;
    sounds.playBloop();
    sounds.playCookingSizzle();

    const newInPot = [...inPot, item];
    setInPot(newInPot);

    const remainingSteps = currentRecipe.steps.filter(
      (reqId) => !newInPot.some((p) => p.id === reqId)
    );

    if (remainingSteps.length === 0) {
      sounds.playSuccess();
      const praise = `Bravo ! Tous les ingrédients sont dans la marmite ! Touche la cuillère pour mélanger la soupe !`;
      onTeacherPrompt(praise);
      teacher.speakFrench(praise);
    } else if (currentTarget && item.id === currentTarget.id) {
      sounds.playSuccess();
      const nextIng = INGREDIENTS.find((i) => i.id === remainingSteps[0]);
      const praise = `Super ! Tu as mis ${item.nameFr} ! Maintenant ajoute ${nextIng.nameFr} !`;
      onTeacherPrompt(praise);
      teacher.speakFrench(praise);
    } else {
      teacher.speakBilingual(item.nameFr, item.nameEn);
    }
  };

  const stirSoup = () => {
    if (inPot.length === 0) {
      const msg = "Ajoute d'abord de bons ingrédients dans la marmite !";
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
      confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
      const readyMsg = `Miam miam ! ${currentRecipe.title} est prête ! Fais goûter ton plat !`;
      onTeacherPrompt(readyMsg);
      teacher.speakBilingual(readyMsg, "Yummy! The dish is ready! Great job little chef!");
    }, 1300);
  };

  const handleTasteDish = () => {
    sounds.playSuccess();
    setTastedCount((c) => c + 1);
    confetti({ particleCount: 55, spread: 60 });
    const msg = "Miam miam miam ! C'est délicieux ! Tu es le meilleur petit chef du monde !";
    onTeacherPrompt(msg);
    teacher.speakFrench(msg);
  };

  return (
    <div className="game-card cooking-stage">
      <div className="game-header">
        <h2 className="game-title">
          <Utensils className="game-icon" /> La Petite Cuisine du Chef 🍲
        </h2>
        <button onClick={() => startNewRecipe(recipeIdx)} className="action-button secondary">
          <RotateCcw size={20} /> Recommencer
        </button>
      </div>

      {/* Recipe Selector Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '12px' }}>
        {RECIPES.map((r, idx) => (
          <button
            key={r.id}
            onClick={() => {
              sounds.playPop();
              setRecipeIdx(idx);
            }}
            className={`num-mode-tab-btn ${recipeIdx === idx ? 'active' : ''}`}
          >
            {r.title}
          </button>
        ))}
      </div>

      {/* Guided 3-Step Recipe Checklist Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '14px', padding: '10px', background: '#fff9db', borderRadius: '18px', border: '2px dashed #f59e0b' }}>
        <span style={{ fontWeight: 900, color: '#d35400', alignSelf: 'center', fontSize: '0.9rem' }}>
          📋 Recette :
        </span>
        {currentRecipe.steps.map((reqId, i) => {
          const ing = INGREDIENTS.find((item) => item.id === reqId);
          const isAdded = inPot.some((p) => p.id === reqId);
          return (
            <div
              key={reqId}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '5px 12px',
                borderRadius: '999px',
                background: isAdded ? '#d1fae5' : '#ffffff',
                border: isAdded ? '2px solid #10b981' : '2px solid #f59e0b',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: isAdded ? '#065f46' : '#2d3436',
              }}
            >
              <span>{i + 1}. {ing.emoji} {ing.nameFr}</span>
              <span>{isAdded ? '✅' : '⏳'}</span>
            </div>
          );
        })}
      </div>

      <div className="cooking-arena">
        {/* Ingredients Shelf */}
        <div className="shelf-container">
          <p className="shelf-label">Touche les ingrédients pour les mettre dans la marmite :</p>
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
            <div className="steam-wrapper">
              <span className="steam-bubble s1">💨</span>
              <span className="steam-bubble s2">✨</span>
              <span className="steam-bubble s3">💨</span>
            </div>

            <div className="pot-body">
              <div className="pot-rim"></div>
              <div className="pot-soup" style={{ background: inPot.length > 0 ? currentRecipe.liquidColor : undefined }}>
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

            {!dishReady ? (
              <button
                onClick={stirSoup}
                className={`stir-button ${inPot.length > 0 ? 'active' : ''}`}
              >
                🥄 Mélanger et Cuire ! ({inPot.length} ingrédient{inPot.length > 1 ? 's' : ''})
              </button>
            ) : (
              <div className="dish-ready-banner animate-pop" style={{ textAlign: 'center', marginTop: '10px' }}>
                <h3>🎉 {currentRecipe.title} est cuite ! 🥣</h3>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                  <button
                    onClick={handleTasteDish}
                    style={{
                      background: 'linear-gradient(135deg, #ff6b81, #e84393)',
                      color: '#fff',
                      border: '3px solid #fff',
                      borderRadius: '999px',
                      padding: '10px 22px',
                      fontSize: '1rem',
                      fontWeight: 900,
                      cursor: 'pointer',
                      boxShadow: '0 5px 0 #ad1457, 0 8px 18px rgba(232,67,147,0.35)'
                    }}
                  >
                    😋 Goûter la soupe ! (Miam ! ×{tastedCount})
                  </button>
                  <button
                    onClick={() => setRecipeIdx((i) => (i + 1) % RECIPES.length)}
                    className="action-button primary"
                  >
                    Nouvelle Recette 👩‍🍳
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
