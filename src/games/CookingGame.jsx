import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { doraVoice } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Sparkles, Utensils, RotateCcw, Star, Trophy, ChefHat } from 'lucide-react';

// All available ingredients with 3D-style properties
const ALL_INGREDIENTS = [
  { id: 'tomato', nameFr: 'Tomate', nameEn: 'Tomato', emoji: '🍅', color: '#ff6b6b', category: 'vegetable' },
  { id: 'carrot', nameFr: 'Carotte', nameEn: 'Carrot', emoji: '🥕', color: '#ffa94d', category: 'vegetable' },
  { id: 'mushroom', nameFr: 'Champignon', nameEn: 'Mushroom', emoji: '🍄', color: '#e599f7', category: 'vegetable' },
  { id: 'broccoli', nameFr: 'Brocoli', nameEn: 'Broccoli', emoji: '🥦', color: '#69db7c', category: 'vegetable' },
  { id: 'potato', nameFr: 'Pomme de terre', nameEn: 'Potato', emoji: '🥔', color: '#ffd43b', category: 'vegetable' },
  { id: 'corn', nameFr: 'Maïs', nameEn: 'Corn', emoji: '🌽', color: '#ffe066', category: 'vegetable' },
  { id: 'onion', nameFr: 'Oignon', nameEn: 'Onion', emoji: '🧅', color: '#d4a574', category: 'vegetable' },
  { id: 'pepper', nameFr: 'Poivron', nameEn: 'Bell Pepper', emoji: '🫑', color: '#95e777', category: 'vegetable' },
  { id: 'cheese', nameFr: 'Fromage', nameEn: 'Cheese', emoji: '🧀', color: '#ffd93d', category: 'dairy' },
  { id: 'egg', nameFr: 'Œuf', nameEn: 'Egg', emoji: '🥚', color: '#f7f7f7', category: 'protein' },
  { id: 'chicken', nameFr: 'Poulet', nameEn: 'Chicken', emoji: '🍗', color: '#e8b000', category: 'protein' },
  { id: 'rice', nameFr: 'Riz', nameEn: 'Rice', emoji: '🍚', color: '#f8f9fa', category: 'grain' },
  { id: 'pasta', nameFr: 'Pâtes', nameEn: 'Pasta', emoji: '🍝', color: '#ffc078', category: 'grain' },
  { id: 'bread', nameFr: 'Pain', nameEn: 'Bread', emoji: '🍞', color: '#d4a574', category: 'grain' },
];

// Recipe definitions with required ingredients and cooking methods
const RECIPES = [
  {
    id: 'vegetable-soup',
    nameFr: 'Soupe aux légumes',
    nameEn: 'Vegetable Soup',
    emoji: '🥣',
    difficulty: 'easy',
    requiredIngredients: ['tomato', 'carrot', 'potato'],
    optionalIngredients: ['onion', 'broccoli', 'corn'],
    cookingMethod: 'stir',
    cookTime: 2000,
    description: 'Une délicieuse soupe chaude avec des légumes frais !',
  },
  {
    id: 'omelette',
    nameFr: 'Omelette au fromage',
    nameEn: 'Cheese Omelette',
    emoji: '🍳',
    difficulty: 'easy',
    requiredIngredients: ['egg', 'cheese'],
    optionalIngredients: ['tomato', 'mushroom'],
    cookingMethod: 'fry',
    cookTime: 1500,
    description: 'Une omelette moelleuse et dorée !',
  },
  {
    id: 'chicken-rice',
    nameFr: 'Poulet avec riz',
    nameEn: 'Chicken with Rice',
    emoji: '🍛',
    difficulty: 'medium',
    requiredIngredients: ['chicken', 'rice', 'carrot'],
    optionalIngredients: ['pepper', 'corn', 'onion'],
    cookingMethod: 'stir',
    cookTime: 2500,
    description: 'Un plat complet et savoureux !',
  },
  {
    id: 'pasta-bolognese',
    nameFr: 'Pâtes Bolognaise',
    nameEn: 'Pasta Bolognese',
    emoji: '🍝',
    difficulty: 'medium',
    requiredIngredients: ['pasta', 'tomato', 'onion'],
    optionalIngredients: ['mushroom', 'pepper', 'cheese'],
    cookingMethod: 'boil',
    cookTime: 2000,
    description: 'Des pâtes avec une sauce tomate délicieuse !',
  },
  {
    id: 'grilled-sandwich',
    nameFr: 'Croque-monsieur',
    nameEn: 'Grilled Sandwich',
    emoji: '🥪',
    difficulty: 'easy',
    requiredIngredients: ['bread', 'cheese'],
    optionalIngredients: ['chicken', 'tomato'],
    cookingMethod: 'grill',
    cookTime: 1500,
    description: 'Un sandwich grillé croustillant !',
  },
];

// 3D Cooking Pot SVG Component
function CookingPot3D({ isCooking, isReady, contents }) {
  return (
    <svg viewBox="0 0 200 200" style={{ width: '100%', maxWidth: '300px', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))' }}>
      <defs>
        <radialGradient id="potBody" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#7f8c8d" />
          <stop offset="60%" stopColor="#5a6268" />
          <stop offset="100%" stopColor="#343a40" />
        </radialGradient>
        <radialGradient id="soupGradient" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#ffd93d" />
          <stop offset="50%" stopColor="#ff922b" />
          <stop offset="100%" stopColor="#e67700" />
        </radialGradient>
        <linearGradient id="steamGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#dee2e6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#f8f9fa" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Pot shadow */}
      <ellipse cx="100" cy="185" rx="70" ry="10" fill="rgba(0,0,0,0.2)" />

      {/* Pot handles */}
      <path
        d="M 40 100 Q 30 100 30 110 Q 30 120 40 120"
        fill="none"
        stroke="#343a40"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M 160 100 Q 170 100 170 110 Q 170 120 160 120"
        fill="none"
        stroke="#343a40"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Pot body */}
      <ellipse cx="100" cy="180" rx="75" ry="15" fill="#343a40" />
      <rect x="25" y="90" width="150" height="90" fill="url(#potBody)" rx="8" />
      <ellipse cx="100" cy="90" rx="75" ry="15" fill="#6c757d" />

      {/* Pot rim highlight */}
      <ellipse cx="100" cy="87" rx="70" ry="12" fill="none" stroke="#adb5bd" strokeWidth="2" />

      {/* Soup inside */}
      {contents.length > 0 && (
        <>
          <ellipse cx="100" cy="120" rx="65" ry="12" fill="url(#soupGradient)" />
          <rect x="35" y="120" width="130" height="50" fill="url(#soupGradient)" />
          <ellipse cx="100" cy="170" rx="65" ry="12" fill="#cc5500" />
          
          {/* Bubbles if cooking */}
          {isCooking && (
            <>
              <circle cx="70" cy="140" r="4" fill="#fff" opacity="0.6">
                <animate attributeName="cy" values="140;110;140" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="130" cy="150" r="3" fill="#fff" opacity="0.5">
                <animate attributeName="cy" values="150;120;150" dur="1.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="155" r="5" fill="#fff" opacity="0.7">
                <animate attributeName="cy" values="155;115;155" dur="1.3s" repeatCount="indefinite" />
              </circle>
            </>
          )}
        </>
      )}

      {/* Steam */}
      {(isCooking || isReady) && (
        <>
          <path d="M 70 80 Q 65 50 70 20" fill="url(#steamGradient)" opacity="0.6">
            <animate attributeName="d" 
              values="M 70 80 Q 65 50 70 20; M 70 80 Q 75 50 70 20; M 70 80 Q 65 50 70 20" 
              dur="2s" 
              repeatCount="indefinite" />
          </path>
          <path d="M 100 75 Q 105 45 100 15" fill="url(#steamGradient)" opacity="0.7">
            <animate attributeName="d" 
              values="M 100 75 Q 105 45 100 15; M 100 75 Q 95 45 100 15; M 100 75 Q 105 45 100 15" 
              dur="2.3s" 
              repeatCount="indefinite" />
          </path>
          <path d="M 130 80 Q 135 50 130 20" fill="url(#steamGradient)" opacity="0.6">
            <animate attributeName="d" 
              values="M 130 80 Q 135 50 130 20; M 130 80 Q 125 50 130 20; M 130 80 Q 135 50 130 20" 
              dur="1.8s" 
              repeatCount="indefinite" />
          </path>
        </>
      )}

      {/* Check mark if ready */}
      {isReady && (
        <g>
          <circle cx="180" cy="40" r="20" fill="#51cf66" />
          <path d="M 172 40 L 178 46 L 188 34" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export default function CookingGame({ onTeacherPrompt }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [inPot, setInPot] = useState([]);
  const [isCooking, setIsCooking] = useState(false);
  const [dishReady, setDishReady] = useState(false);
  const [completedRecipes, setCompletedRecipes] = useState([]);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const welcome = "Bienvenue dans la cuisine magique ! Choisis une recette et prépare un délicieux plat !";
    onTeacherPrompt(welcome);
    doraVoice.speak(welcome);
  }, []);

  const selectRecipe = (recipe) => {
    sounds.playPop();
    setSelectedRecipe(recipe);
    setInPot([]);
    setIsCooking(false);
    setDishReady(false);
    
    const prompt = `Super ! Tu vas préparer : ${recipe.nameFr} ! Ajoute les ingrédients nécessaires !`;
    onTeacherPrompt(prompt);
    doraVoice.speak(prompt);
  };

  const addIngredient = (ingredient) => {
    if (dishReady || isCooking) return;
    
    sounds.playBloop();
    const newInPot = [...inPot, ingredient];
    setInPot(newInPot);
    
    doraVoice.speak(`${ingredient.nameFr} !`);
    
    // Check if all required ingredients are added
    const allRequired = selectedRecipe.requiredIngredients.every(reqId =>
      newInPot.some(item => item.id === reqId)
    );
    
    if (allRequired && newInPot.length >= selectedRecipe.requiredIngredients.length) {
      setTimeout(() => {
        const msg = "Parfait ! Tous les ingrédients sont là ! Clique sur cuisiner !";
        onTeacherPrompt(msg);
        doraVoice.speak(msg);
      }, 500);
    }
  };

  const startCooking = () => {
    const allRequired = selectedRecipe.requiredIngredients.every(reqId =>
      inPot.some(item => item.id === reqId)
    );
    
    if (!allRequired) {
      const missing = selectedRecipe.requiredIngredients.filter(reqId =>
        !inPot.some(item => item.id === reqId)
      );
      const ingredientNames = missing.map(id => 
        ALL_INGREDIENTS.find(ing => ing.id === id).nameFr
      ).join(', ');
      
      const msg = `Il manque des ingrédients ! Ajoute : ${ingredientNames}`;
      onTeacherPrompt(msg);
      doraVoice.speak(msg);
      sounds.playError();
      return;
    }
    
    setIsCooking(true);
    sounds.playCookingSizzle();
    
    const cookingMsgs = {
      stir: "Mélange bien la soupe ! Ça sent bon !",
      fry: "Ça grésille dans la poêle ! Miam !",
      boil: "L'eau bout ! Les pâtes cuisent !",
      grill: "Ça dore bien ! Croustillant !"
    };
    
    const msg = cookingMsgs[selectedRecipe.cookingMethod] || "Ça cuisine !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);

    setTimeout(() => {
      finishCooking();
    }, selectedRecipe.cookTime);
  };

  const finishCooking = () => {
    setIsCooking(false);
    setDishReady(true);
    sounds.playSuccess();
    
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FFD93D', '#FF922B', '#51cf66'],
    });
    
    // Add to completed recipes
    if (!completedRecipes.includes(selectedRecipe.id)) {
      setCompletedRecipes(prev => [...prev, selectedRecipe.id]);
      setStars(prev => prev + 1);
    }
    
    const readyMsg = `Bravo petit chef ! ${selectedRecipe.nameFr} est prêt ! C'est délicieux ! 🌟`;
    onTeacherPrompt(readyMsg);
    doraVoice.speak(readyMsg);
  };

  const resetKitchen = () => {
    sounds.playPop();
    setSelectedRecipe(null);
    setInPot([]);
    setIsCooking(false);
    setDishReady(false);
    
    const msg = "Choisis une nouvelle recette à préparer !";
    onTeacherPrompt(msg);
    doraVoice.speak(msg);
  };

  // Get ingredients for current recipe
  const availableIngredients = selectedRecipe 
    ? ALL_INGREDIENTS.filter(ing => 
        selectedRecipe.requiredIngredients.includes(ing.id) || 
        selectedRecipe.optionalIngredients.includes(ing.id)
      )
    : [];

  return (
    <div className="center-activity-card cooking-premium-card">
      {/* Header */}
      <div className="activity-card-header" style={{
        background: 'linear-gradient(135deg, #845ef7, #b197fc)',
        padding: '20px',
      }}>
        <div className="header-info">
          <span className="card-badge-icon" style={{ fontSize: '48px' }}>👨‍🍳</span>
          <div>
            <h2 className="card-main-title">École de Cuisine 3D</h2>
            <p className="card-subtitle">Prépare de délicieuses recettes étape par étape ! 🍳✨</p>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="score-pill-header" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            padding: '8px 16px',
            borderRadius: '24px',
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}>
            <Star size={20} fill="#FFD93D" color="#FFD93D" />
            <span style={{ fontWeight: 'bold' }}>Recettes: {completedRecipes.length}/{RECIPES.length}</span>
          </div>
          
          {selectedRecipe && (
            <button
              onClick={resetKitchen}
              style={{
                background: 'white',
                border: '2px solid #845ef7',
                color: '#845ef7',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <RotateCcw size={18} /> Nouvelle recette
            </button>
          )}
        </div>
      </div>

      {/* Recipe Selection or Cooking Area */}
      {!selectedRecipe ? (
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE8CC 100%)',
          minHeight: '500px',
        }}>
          <h3 style={{
            fontSize: '28px',
            textAlign: 'center',
            color: '#495057',
            marginBottom: '24px',
          }}>
            📖 Choisis une recette à préparer !
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {RECIPES.map(recipe => {
              const isCompleted = completedRecipes.includes(recipe.id);
              const difficultyColors = {
                easy: '#51cf66',
                medium: '#ffa94d',
                hard: '#ff6b6b',
              };
              
              return (
                <button
                  key={recipe.id}
                  onClick={() => selectRecipe(recipe)}
                  style={{
                    background: 'white',
                    border: '3px solid #dee2e6',
                    borderRadius: '16px',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {isCompleted && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: '#51cf66',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Trophy size={18} color="white" />
                    </div>
                  )}
                  
                  <div style={{ fontSize: '64px', marginBottom: '12px' }}>
                    {recipe.emoji}
                  </div>
                  
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    margin: '0 0 8px 0',
                  }}>
                    {recipe.nameFr}
                  </h4>
                  
                  <p style={{
                    fontSize: '14px',
                    color: '#6c757d',
                    margin: '0 0 12px 0',
                  }}>
                    {recipe.description}
                  </p>
                  
                  <div style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: difficultyColors[recipe.difficulty],
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                    {recipe.difficulty === 'easy' ? 'Facile' : recipe.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Cooking Interface */
        <div style={{
          padding: '32px',
          background: 'linear-gradient(135deg, #FFF9E6 0%, #FFF3D6 100%)',
          minHeight: '600px',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            <h3 style={{ fontSize: '32px', color: '#2c3e50', margin: '0 0 8px 0' }}>
              {selectedRecipe.emoji} {selectedRecipe.nameFr}
            </h3>
            <p style={{ fontSize: '16px', color: '#6c757d' }}>
              {selectedRecipe.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            {/* Left: Ingredients */}
            <div>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#495057',
                marginBottom: '16px',
                textAlign: 'center',
              }}>
                🥬 Ingrédients disponibles
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '12px',
              }}>
                {availableIngredients.map(ingredient => {
                  const isRequired = selectedRecipe.requiredIngredients.includes(ingredient.id);
                  const isAdded = inPot.some(item => item.id === ingredient.id);
                  
                  return (
                    <button
                      key={ingredient.id}
                      onClick={() => addIngredient(ingredient)}
                      disabled={isCooking || dishReady}
                      style={{
                        background: isAdded ? '#e3f9e5' : 'white',
                        border: `3px solid ${isRequired ? '#ff6b6b' : '#dee2e6'}`,
                        borderRadius: '12px',
                        padding: '12px',
                        cursor: (isCooking || dishReady) ? 'not-allowed' : 'pointer',
                        opacity: (isCooking || dishReady) ? 0.5 : 1,
                        transition: 'all 0.2s',
                      }}
                    >
                      <div style={{ fontSize: '40px' }}>{ingredient.emoji}</div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#495057',
                        marginTop: '4px',
                      }}>
                        {ingredient.nameFr}
                      </div>
                      {isRequired && (
                        <div style={{
                          fontSize: '10px',
                          color: '#ff6b6b',
                          fontWeight: 'bold',
                          marginTop: '2px',
                        }}>
                          ⚠️ Requis
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Cooking Pot */}
            <div style={{ textAlign: 'center' }}>
              <h4 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#495057',
                marginBottom: '16px',
              }}>
                🍳 Ta préparation
              </h4>
              
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}>
                <CookingPot3D
                  isCooking={isCooking}
                  isReady={dishReady}
                  contents={inPot}
                />
                
                {/* Ingredients in pot */}
                {inPot.length > 0 && (
                  <div style={{
                    marginTop: '16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    justifyContent: 'center',
                  }}>
                    {inPot.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '24px',
                          animation: 'float 2s ease-in-out infinite',
                          animationDelay: `${idx * 0.2}s`,
                        }}
                      >
                        {item.emoji}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Cooking button */}
                {!dishReady && !isCooking && (
                  <button
                    onClick={startCooking}
                    style={{
                      marginTop: '24px',
                      background: 'linear-gradient(135deg, #ff922b, #ff6b35)',
                      border: 'none',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '16px',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      transition: 'transform 0.2s',
                    }}
                    onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                    onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    🔥 CUISINER !
                  </button>
                )}
                
                {isCooking && (
                  <div style={{ marginTop: '24px', fontSize: '18px', color: '#ff922b', fontWeight: 'bold' }}>
                    ⏳ Cuisson en cours...
                  </div>
                )}
                
                {dishReady && (
                  <div style={{
                    marginTop: '24px',
                    background: 'linear-gradient(135deg, #51cf66, #37b24d)',
                    padding: '20px',
                    borderRadius: '16px',
                    animation: 'popIn 0.5s ease-out',
                  }}>
                    <h3 style={{ fontSize: '24px', color: 'white', margin: '0 0 12px 0' }}>
                      🎉 C'est prêt ! Miam ! 🌟
                    </h3>
                    <button
                      onClick={resetKitchen}
                      style={{
                        background: 'white',
                        border: 'none',
                        color: '#37b24d',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      Préparer une autre recette ! 👨‍🍳
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
