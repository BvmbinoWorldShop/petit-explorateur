import React, { useState, useEffect, useRef } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Utensils, RotateCcw, Sparkles, ChefHat, Heart, Refrigerator, Box, Flame, Check } from 'lucide-react';

// =========================================================================
// REALISTIC DELICIOUS FOOD GRAPHICS (SVG WITH DEPTH, HIGHLIGHTS & TEXTURE)
// =========================================================================

export function RealisticFoodSVG({ id, size = 50 }) {
  switch (id) {
    case 'tomato':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <radialGradient id="tomGrad" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#ff7675" />
              <stop offset="35%" stopColor="#e74c3c" />
              <stop offset="85%" stopColor="#c0392b" />
              <stop offset="100%" stopColor="#962d2d" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="56" rx="42" ry="36" fill="url(#tomGrad)" />
          {/* Highlight sheen */}
          <ellipse cx="36" cy="38" rx="12" ry="8" fill="#ffffff" opacity="0.45" transform="rotate(-20 36 38)" />
          {/* Calyx & Stem */}
          <path d="M 50 24 L 50 10 Q 52 4 58 6" stroke="#27ae60" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 50 24 L 38 18 M 50 24 L 62 18 M 50 24 L 42 28 M 50 24 L 58 28" stroke="#2ecc71" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'carrot':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <linearGradient id="carrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffa502" />
              <stop offset="60%" stopColor="#e67e22" />
              <stop offset="100%" stopColor="#d35400" />
            </linearGradient>
          </defs>
          {/* Green fronds */}
          <path d="M 72 26 Q 85 10 92 6 M 72 26 Q 88 20 94 22 M 72 26 Q 78 12 80 4" stroke="#2ed573" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Root cone */}
          <polygon points="74,26 62,38 14,86 16,92 24,90 74,26" fill="url(#carrGrad)" />
          <path d="M 68 30 C 76 38 68 46 62 38 Z" fill="#e67e22" />
          <ellipse cx="45" cy="55" rx="3" ry="1" fill="#c0392b" opacity="0.4" transform="rotate(45 45 55)" />
          <ellipse cx="35" cy="65" rx="3" ry="1" fill="#c0392b" opacity="0.4" transform="rotate(45 35 65)" />
        </svg>
      );
    case 'cheese':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <linearGradient id="chsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff275" />
              <stop offset="40%" stopColor="#f1c40f" />
              <stop offset="100%" stopColor="#f39c12" />
            </linearGradient>
          </defs>
          {/* 3D Cheese Wedge */}
          <polygon points="20,70 80,70 88,40 16,52" fill="url(#chsGrad)" stroke="#d35400" strokeWidth="1.5" />
          <polygon points="16,52 88,40 50,16" fill="#ffd32a" stroke="#d35400" strokeWidth="1.5" />
          {/* Holes */}
          <ellipse cx="40" cy="60" rx="8" ry="6" fill="#e67e22" opacity="0.6" />
          <ellipse cx="68" cy="56" rx="6" ry="5" fill="#e67e22" opacity="0.6" />
          <ellipse cx="50" cy="34" rx="7" ry="4" fill="#e67e22" opacity="0.5" />
          <ellipse cx="68" cy="26" rx="5" ry="3" fill="#e67e22" opacity="0.5" />
        </svg>
      );
    case 'strawberry':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <radialGradient id="strwGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ff7675" />
              <stop offset="45%" stopColor="#e84393" />
              <stop offset="100%" stopColor="#b33939" />
            </radialGradient>
          </defs>
          <path d="M 50 88 C 22 75 14 42 26 28 C 38 16 62 16 74 28 C 86 42 78 75 50 88 Z" fill="url(#strwGrad)" />
          {/* Seeds */}
          <g fill="#ffeaa7" opacity="0.85">
            <ellipse cx="38" cy="35" rx="1.5" ry="2" />
            <ellipse cx="52" cy="32" rx="1.5" ry="2" />
            <ellipse cx="64" cy="36" rx="1.5" ry="2" />
            <ellipse cx="32" cy="48" rx="1.5" ry="2" />
            <ellipse cx="46" cy="46" rx="1.5" ry="2" />
            <ellipse cx="60" cy="48" rx="1.5" ry="2" />
            <ellipse cx="40" cy="62" rx="1.5" ry="2" />
            <ellipse cx="52" cy="62" rx="1.5" ry="2" />
            <ellipse cx="46" cy="74" rx="1.5" ry="2" />
          </g>
          {/* Leaves */}
          <path d="M 50 20 L 32 12 M 50 20 L 42 6 M 50 20 L 58 6 M 50 20 L 68 12" stroke="#2ed573" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'milk':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#dfe6e9" />
              <stop offset="40%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#b2bec3" />
            </linearGradient>
          </defs>
          {/* Glass Bottle Body */}
          <rect x="32" y="34" width="36" height="54" rx="8" fill="url(#bottleGrad)" stroke="#747d8c" strokeWidth="1.5" />
          <path d="M 38 34 L 42 18 L 58 18 L 62 34 Z" fill="url(#bottleGrad)" stroke="#747d8c" strokeWidth="1.5" />
          <rect x="40" y="12" width="20" height="7" rx="3" fill="#0984e3" />
          {/* Blue Label */}
          <rect x="32" y="48" width="36" height="24" fill="#0984e3" opacity="0.85" />
          <text x="50" y="64" fill="#ffffff" fontSize="11" fontWeight="900" textAnchor="middle">LAIT</text>
        </svg>
      );
    case 'egg':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <radialGradient id="eggGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#ffeaa7" />
              <stop offset="100%" stopColor="#f7d794" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="52" rx="32" ry="40" fill="url(#eggGrad)" stroke="#f39c12" strokeWidth="1.5" />
          <ellipse cx="40" cy="38" rx="8" ry="12" fill="#ffffff" opacity="0.6" transform="rotate(-25 40 38)" />
        </svg>
      );
    case 'flour':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <defs>
            <linearGradient id="sackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5efe6" />
              <stop offset="70%" stopColor="#e8dec8" />
              <stop offset="100%" stopColor="#d4c3a3" />
            </linearGradient>
          </defs>
          {/* Sack */}
          <path d="M 28 84 C 22 55 24 35 34 26 C 44 24 56 24 66 26 C 76 35 78 55 72 84 Z" fill="url(#sackGrad)" stroke="#b2bec3" strokeWidth="2" />
          <ellipse cx="50" cy="26" rx="16" ry="6" fill="#ffffff" />
          <rect x="36" y="46" width="28" height="24" rx="4" fill="#e74c3c" opacity="0.8" />
          <text x="50" y="62" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle">FARINE</text>
        </svg>
      );
    case 'pasta':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <path d="M 22 35 Q 50 15 78 35 Q 50 55 22 75 Q 50 95 78 75" fill="none" stroke="#f1c40f" strokeWidth="10" strokeLinecap="round" />
          <path d="M 26 25 Q 54 45 82 25" fill="none" stroke="#f39c12" strokeWidth="8" strokeLinecap="round" />
          <path d="M 18 55 Q 50 75 82 55" fill="none" stroke="#ffeaa7" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case 'broccoli':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          {/* Stem */}
          <path d="M 44 55 L 42 88 L 58 88 L 56 55 Z" fill="#81ecec" stroke="#00b894" strokeWidth="2" />
          {/* Floret clusters */}
          <circle cx="34" cy="44" r="18" fill="#00b894" />
          <circle cx="66" cy="44" r="18" fill="#00b894" />
          <circle cx="50" cy="30" r="22" fill="#2ed573" />
          <circle cx="36" cy="32" r="14" fill="#55efc4" />
          <circle cx="64" cy="32" r="14" fill="#2ed573" />
        </svg>
      );
    case 'chocolate':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <rect x="22" y="24" width="56" height="56" rx="6" fill="#4b2c14" stroke="#2d1708" strokeWidth="2" />
          {/* Squares */}
          <rect x="26" y="28" width="22" height="22" rx="3" fill="#5d381a" />
          <rect x="52" y="28" width="22" height="22" rx="3" fill="#5d381a" />
          <rect x="26" y="54" width="22" height="22" rx="3" fill="#3b220e" />
          <rect x="52" y="54" width="22" height="22" rx="3" fill="#3b220e" />
        </svg>
      );
    case 'honey':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          {/* Honey Pot */}
          <path d="M 32 38 C 22 45 22 75 32 82 C 40 86 60 86 68 82 C 78 75 78 45 68 38 Z" fill="#f39c12" stroke="#d35400" strokeWidth="2" />
          <ellipse cx="50" cy="38" rx="20" ry="7" fill="#ffd32a" stroke="#d35400" strokeWidth="2" />
          <rect x="36" y="24" width="28" height="12" rx="4" fill="#c0392b" />
          <text x="50" y="65" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle">MIEL</text>
        </svg>
      );
    case 'mushroom':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          {/* Stem */}
          <path d="M 42 50 L 38 85 L 62 85 L 58 50 Z" fill="#f5efe6" stroke="#b2bec3" strokeWidth="2" />
          {/* Cap */}
          <path d="M 16 55 C 16 22 84 22 84 55 Z" fill="#b08968" stroke="#7f5539" strokeWidth="2" />
          <circle cx="36" cy="38" r="5" fill="#ede0d4" />
          <circle cx="56" cy="32" r="6" fill="#ede0d4" />
          <circle cx="70" cy="42" r="4" fill="#ede0d4" />
        </svg>
      );
    default:
      return <span>🍽️</span>;
  }
}

// All Available Pantry and Fridge Goods
export const KITCHEN_INGREDIENTS = [
  // IN THE FRIDGE
  { id: 'milk', location: 'fridge', nameFr: 'Le Lait Frais', nameEn: 'Fresh Milk', emoji: '🥛', color: '#0984e3' },
  { id: 'egg', location: 'fridge', nameFr: 'Les Œufs de Ferme', nameEn: 'Farm Eggs', emoji: '🥚', color: '#f39c12' },
  { id: 'cheese', location: 'fridge', nameFr: 'Le Fromage Fondant', nameEn: 'Cheese', emoji: '🧀', color: '#f1c40f' },
  { id: 'strawberry', location: 'fridge', nameFr: 'Les Bonnes Fraises', nameEn: 'Strawberries', emoji: '🍓', color: '#e84393' },
  { id: 'tomato', location: 'fridge', nameFr: 'La Tomate Juteuse', nameEn: 'Juicy Tomato', emoji: '🍅', color: '#ff4757' },
  { id: 'broccoli', location: 'fridge', nameFr: 'Le Brocoli Croquant', nameEn: 'Broccoli', emoji: '🥦', color: '#2ed573' },

  // IN THE CABINET / PANTRY
  { id: 'flour', location: 'cabinet', nameFr: 'La Farine Blanche', nameEn: 'Wheat Flour', emoji: '🌾', color: '#d4c3a3' },
  { id: 'pasta', location: 'cabinet', nameFr: 'Les Bonnes Pâtes', nameEn: 'Pasta Ribbons', emoji: '🍝', color: '#ffa502' },
  { id: 'chocolate', location: 'cabinet', nameFr: 'Le Chocolat Doux', nameEn: 'Sweet Chocolate', emoji: '🍫', color: '#4b2c14' },
  { id: 'honey', location: 'cabinet', nameFr: 'Le Miel Gourmand', nameEn: 'Golden Honey', emoji: '🍯', color: '#f39c12' },
  { id: 'mushroom', location: 'cabinet', nameFr: 'Les Champignons', nameEn: 'Mushrooms', emoji: '🍄', color: '#b08968' },
  { id: 'carrot', location: 'cabinet', nameFr: 'La Belle Carotte', nameEn: 'Carrot', emoji: '🥕', color: '#e67e22' },
];

export const KITCHEN_RECIPES = [
  {
    id: 'crepes',
    title: 'Les Crêpes Gourmandes aux Fraises 🥞',
    description: 'Farine, Lait, Œuf et Fraises pour un régal tout doré !',
    steps: ['flour', 'milk', 'egg', 'strawberry'],
    stoveAction: 'Cuire la belle crêpe dorée dans la poêle !',
    resultEmoji: '🥞🍓',
    resultTitle: 'De magnifiques crêpes dorées aux fraises !',
  },
  {
    id: 'soup',
    title: 'La Grande Soupe Royale du Jardin 🍲',
    description: 'Tomate, Carotte, Brocoli et Champignons qui mijotent !',
    steps: ['tomato', 'carrot', 'broccoli', 'mushroom'],
    stoveAction: 'Mélanger la soupe bouillonnante dans la marmite !',
    resultEmoji: '🍲✨',
    resultTitle: 'Une soupe royale pleine de vitamines !',
  },
  {
    id: 'pasta_cheese',
    title: 'Les Pâtes au Fromage Fondant 🧀',
    description: 'Pâtes, Fromage fondant, Lait et Tomates du chef !',
    steps: ['pasta', 'cheese', 'milk', 'tomato'],
    stoveAction: 'Faire fondre le fromage sur les pâtes chaudes !',
    resultEmoji: '🍝🧀',
    resultTitle: 'Des pâtes au fromage filant et savoureux !',
  },
  {
    id: 'cake',
    title: 'Le Gâteau Chocolat & Miel Féerique 🎂',
    description: 'Farine, Chocolat, Œuf et Miel doré !',
    steps: ['flour', 'chocolate', 'egg', 'honey'],
    stoveAction: 'Enfourner le gâteau magique au four !',
    resultEmoji: '🎂🍫',
    resultTitle: 'Un gâteau moelleux au chocolat et miel !',
  },
];

// =========================================================================
// MAIN KITCHEN EXPERIENCE COMPONENT
// =========================================================================
export default function CookingGame({ onTeacherPrompt }) {
  const [recipeIdx, setRecipeIdx] = useState(0);
  const [inPot, setInPot] = useState([]);
  const [isFridgeOpen, setIsFridgeOpen] = useState(false);
  const [isCabinetOpen, setIsCabinetOpen] = useState(false);

  // Tyanna Walking State Machine
  // positions: 15% (fridge), 48% (prep counter / center), 82% (stove)
  const [tyannaX, setTyannaX] = useState(48);
  const [tyannaFacing, setTyannaFacing] = useState('right');
  const [tyannaAction, setTyannaAction] = useState('idle'); // 'idle' | 'walking' | 'carrying' | 'stirring' | 'tasting' | 'cheering'
  const [carriedItem, setCarriedItem] = useState(null);

  const [dishReady, setDishReady] = useState(false);
  const [tastedTimes, setTastedTimes] = useState(0);

  const currentRecipe = KITCHEN_RECIPES[recipeIdx % KITCHEN_RECIPES.length];

  // Identify next needed ingredient
  const nextRequiredId = currentRecipe.steps.find((id) => !inPot.includes(id));
  const nextRequiredObj = KITCHEN_INGREDIENTS.find((i) => i.id === nextRequiredId) || null;

  useEffect(() => {
    startNewRecipe(recipeIdx);
  }, [recipeIdx]);

  const startNewRecipe = (idx = recipeIdx) => {
    const r = KITCHEN_RECIPES[idx % KITCHEN_RECIPES.length];
    setInPot([]);
    setDishReady(false);
    setCarriedItem(null);
    setTyannaAction('idle');
    setTyannaX(48);
    setIsFridgeOpen(false);
    setIsCabinetOpen(false);

    const firstIng = KITCHEN_INGREDIENTS.find((i) => i.id === r.steps[0]);
    const where = firstIng.location === 'fridge' ? 'dans le réfrigérateur' : 'dans le placard';
    const prompt = `C'est l'heure de cuisiner ! Préparons ensemble : ${r.title} ! Tyanna va chercher ${firstIng.nameFr} ${where} !`;
    onTeacherPrompt(prompt);
    teacher.speakBilingual(prompt, `Let's cook! Let's get the ${firstIng.nameEn}!`);
  };

  // Move Tyanna across the kitchen floor to pick up an ingredient!
  const handleFetchIngredient = (ing) => {
    if (dishReady) return;

    sounds.playPop();
    const targetX = ing.location === 'fridge' ? 18 : 38;
    const isToLeft = targetX < tyannaX;

    // 1. Tyanna turns & walks to the location
    setTyannaFacing(isToLeft ? 'left' : 'right');
    setTyannaAction('walking');
    sounds.playFootstep();

    // Open the door
    if (ing.location === 'fridge') {
      setIsFridgeOpen(true);
      sounds.playDoorOpen();
    } else {
      setIsCabinetOpen(true);
      sounds.playDoorOpen();
    }

    setTyannaX(targetX);

    // 2. Tyanna arrives, grabs item, carries it!
    setTimeout(() => {
      sounds.playSuccess();
      setCarriedItem(ing);
      setTyannaAction('carrying');
      setTyannaFacing('right');
      sounds.playFootstep();

      // Walk to the stove / prep counter (80%)
      setTyannaX(78);

      // 3. Drop into pot / stove!
      setTimeout(() => {
        sounds.playCookingSizzle();
        setInPot((prev) => [...prev, ing.id]);
        setCarriedItem(null);
        setTyannaAction('idle');
        setTyannaFacing('left');

        // Check recipe progress
        const updatedPot = [...inPot, ing.id];
        const remaining = currentRecipe.steps.filter((s) => !updatedPot.includes(s));

        if (remaining.length === 0) {
          sounds.playSuccess();
          const winMsg = `Hourra ! Tous les ingrédients sont prêts ! Touche la marmite pour que Tyanna cuisine la recette !`;
          onTeacherPrompt(winMsg);
          teacher.speakFrench(winMsg);
        } else {
          const nextTarget = KITCHEN_INGREDIENTS.find((i) => i.id === remaining[0]);
          const locationText = nextTarget.location === 'fridge' ? 'dans le frigo' : 'dans le placard';
          const msg = `Miam ! ${ing.nameFr} est dans la marmite ! Maintenant, Tyanna va chercher ${nextTarget.nameFr} ${locationText} !`;
          onTeacherPrompt(msg);
          teacher.speakBilingual(msg, `Great! Now get ${nextTarget.nameEn}!`);
        }
      }, 1200);
    }, 900);
  };

  // Stir & Cook action
  const handleCookAndStir = () => {
    if (inPot.length === 0) {
      const msg = "La marmite est encore vide ! Ouvre le frigo ou le placard pour ajouter de bons ingrédients !";
      onTeacherPrompt(msg);
      teacher.speakFrench(msg);
      return;
    }

    sounds.playFootstep();
    setTyannaFacing('right');
    setTyannaX(78);
    setTyannaAction('stirring');
    sounds.playCookingSizzle();

    setTimeout(() => {
      setDishReady(true);
      setTyannaAction('cheering');
      sounds.playSuccess();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });

      const cheer = `Tadaaa ! ${currentRecipe.title} est cuisinée à la perfection ! Goûte avec Tyanna !`;
      onTeacherPrompt(cheer);
      teacher.speakBilingual(cheer, "Yummy! The dish is ready! Let's taste it!");
    }, 1600);
  };

  // Tasting action
  const handleTasteDish = () => {
    sounds.playMunch();
    sounds.playSuccess();
    setTastedTimes((t) => t + 1);
    setTyannaAction('tasting');
    confetti({ particleCount: 45, spread: 60 });

    const praise = "Miam miam miam ! C'est absolument délicieux ! Tyanna et toi formez une équipe de chefs étoilés !";
    onTeacherPrompt(praise);
    teacher.speakFrench(praise);

    setTimeout(() => setTyannaAction('cheering'), 1200);
  };

  const fridgeItems = KITCHEN_INGREDIENTS.filter((i) => i.location === 'fridge');
  const cabinetItems = KITCHEN_INGREDIENTS.filter((i) => i.location === 'cabinet');

  return (
    <div className="center-activity-card cooking-stage" style={{ overflow: 'hidden' }}>
      {/* Header */}
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #e17055, #d63031)' }}>
        <div className="header-info">
          <span className="card-badge-icon">👩‍🍳</span>
          <div>
            <h2 className="card-main-title">La Grande Cuisine Interactive de Tyanna</h2>
            <p className="card-subtitle">Tyanna marche dans la cuisine, ouvre le frigo et cuisine de délicieux plats avec toi !</p>
          </div>
        </div>
        <button onClick={() => startNewRecipe(recipeIdx)} className="refresh-mission-btn">
          <RotateCcw size={18} /> Recommencer
        </button>
      </div>

      {/* Recipe Selection Tabs */}
      <div className="numbers-mode-switcher" style={{ marginBottom: '10px' }}>
        {KITCHEN_RECIPES.map((r, idx) => (
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

      {/* Recipe Checklist Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', padding: '10px 14px', background: '#fff9db', borderRadius: '18px', border: '2px dashed #f59e0b', marginBottom: '12px' }}>
        <span style={{ fontWeight: 900, color: '#d35400', fontSize: '0.88rem' }}>
          📋 Ingrédients à trouver :
        </span>
        {currentRecipe.steps.map((stepId, idx) => {
          const ing = KITCHEN_INGREDIENTS.find((i) => i.id === stepId);
          const isDone = inPot.includes(stepId);
          const isNext = nextRequiredId === stepId;
          return (
            <div
              key={stepId}
              onClick={() => !isDone && handleFetchIngredient(ing)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '999px',
                background: isDone ? '#d1fae5' : isNext ? '#ffffff' : '#f1f2f6',
                border: isDone ? '2px solid #10b981' : isNext ? '2.5px solid #e17055' : '1.5px solid #dfe6e9',
                cursor: !isDone ? 'pointer' : 'default',
                boxShadow: isNext ? '0 0 12px rgba(225, 112, 85, 0.4)' : 'none',
                fontWeight: 800,
                fontSize: '0.85rem',
                color: isDone ? '#065f46' : '#2d3436',
                transition: 'all 0.2s',
              }}
            >
              <span>{ing.emoji} {ing.nameFr}</span>
              <span>{isDone ? '✅' : isNext ? '👈' : '⏳'}</span>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          THE FULL 2D/3D KITCHEN ROOM ENVIRONMENT WITH TYANNA WALKING
         ========================================================================= */}
      <div
        className="kitchen-room-arena"
        style={{
          width: '100%',
          minHeight: '380px',
          height: '420px',
          position: 'relative',
          borderRadius: '28px',
          border: '4px solid #d35400',
          boxShadow: 'inset 0 0 35px rgba(0,0,0,0.18), 0 12px 28px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #fdf6ec 0%, #faebd7 55%, #d2b48c 56%, #c89666 100%)',
          userSelect: 'none',
        }}
      >
        {/* Cozy Kitchen Back Wall Elements (Subway Tiles, Shelves & Lights) */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '55%', pointerEvents: 'none' }}>
          {/* Subtle Tile Grid Lines */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'linear-gradient(#7f8c8d 1px, transparent 1px), linear-gradient(90deg, #7f8c8d 1px, transparent 1px)', backgroundSize: '32px 24px' }} />

          {/* Hanging Kitchen Utensils */}
          <div style={{ position: 'absolute', top: '22px', left: '46%', transform: 'translateX(-50%)', display: 'flex', gap: '22px', fontSize: '1.6rem', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}>
            <span>🍳</span>
            <span>🥄</span>
            <span>🫕</span>
            <span>🌿</span>
            <span>🧂</span>
          </div>

          {/* Hanging Warm Kitchen Lamp */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '4px', height: '24px', background: '#2c3e50' }} />
            <div style={{ width: '56px', height: '18px', background: '#f39c12', borderRadius: '18px 18px 4px 4px', boxShadow: '0 8px 30px rgba(241, 196, 15, 0.7)' }} />
          </div>
        </div>

        {/* =====================================================================
            STATION 1: LE GRAND RÉFRIGÉRATEUR 3D (LEFT SIDE)
           ===================================================================== */}
        <div
          onClick={() => {
            sounds.playDoorOpen();
            setIsFridgeOpen((o) => !o);
          }}
          style={{
            position: 'absolute',
            bottom: '70px',
            left: '12px',
            width: '135px',
            height: '240px',
            background: 'linear-gradient(135deg, #dfe6e9 0%, #b2bec3 60%, #747d8c 100%)',
            borderRadius: '24px 24px 10px 10px',
            border: '3px solid #636e72',
            boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 0.25s',
          }}
          title="Touche pour ouvrir le réfrigérateur !"
        >
          {/* Fridge Top Freezer Door */}
          <div style={{ height: '70px', borderBottom: '3px solid #636e72', background: 'linear-gradient(180deg, #ecf0f1 0%, #dfe6e9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px', position: 'relative' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#0984e3' }}>🧊 FRIGO</span>
            <div style={{ width: '8px', height: '32px', background: '#747d8c', borderRadius: '4px', boxShadow: 'inset 0 1px 2px #fff' }} />
          </div>

          {/* Fridge Lower Door / Shelves */}
          <div style={{ flex: 1, background: isFridgeOpen ? '#ffffff' : 'linear-gradient(180deg, #f5f6fa 0%, #dcdde1 100%)', position: 'relative', padding: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            {!isFridgeOpen ? (
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '4px' }}>
                <div style={{ width: '8px', height: '56px', background: '#747d8c', borderRadius: '4px' }} />
              </div>
            ) : (
              /* Inside the Fridge: Shelves with food */
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', height: '100%', justifyContent: 'space-around' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 900, color: '#0984e3', textAlign: 'center' }}>❄️ Frais (Touche) :</span>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '4px' }}>
                  {fridgeItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFetchIngredient(item);
                      }}
                      style={{
                        background: '#f1f2f6',
                        border: '1.5px solid #0984e3',
                        borderRadius: '10px',
                        padding: '3px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                      title={`Prendre ${item.nameFr}`}
                    >
                      <RealisticFoodSVG id={item.id} size={28} />
                      <span style={{ fontSize: '0.58rem', fontWeight: 800 }}>{item.nameFr.split(' ')[1] || item.nameFr}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* =====================================================================
            STATION 2: LE PLACARD HAUT / PANTRY CABINET (UPPER CENTER)
           ===================================================================== */}
        <div
          onClick={() => {
            sounds.playDoorOpen();
            setIsCabinetOpen((c) => !c);
          }}
          style={{
            position: 'absolute',
            top: '40px',
            left: '170px',
            width: '180px',
            height: '110px',
            background: 'linear-gradient(135deg, #a0522d 0%, #8b4513 100%)',
            borderRadius: '16px',
            border: '3px solid #5c2e0b',
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
            cursor: 'pointer',
            zIndex: 10,
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
          title="Touche pour ouvrir le placard à provisions !"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '3px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#ffeaa7' }}>🥫 PLACARD</span>
            <span style={{ fontSize: '0.68rem', color: '#fff', opacity: 0.8 }}>{isCabinetOpen ? 'Fermer ✖' : 'Ouvrir 🚪'}</span>
          </div>

          {!isCabinetOpen ? (
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flex: 1 }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f1c40f', boxShadow: '0 2px 4px #000' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f1c40f', boxShadow: '0 2px 4px #000' }} />
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'space-around', background: 'rgba(255,255,255,0.92)', borderRadius: '10px', padding: '4px', flex: 1, overflowY: 'auto' }}>
              {cabinetItems.map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFetchIngredient(item);
                  }}
                  style={{
                    background: '#fff',
                    border: '1.5px solid #d35400',
                    borderRadius: '8px',
                    padding: '2px 4px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                  title={`Prendre ${item.nameFr}`}
                >
                  <RealisticFoodSVG id={item.id} size={24} />
                  <span style={{ fontSize: '0.55rem', fontWeight: 800 }}>{item.nameFr.split(' ')[1] || item.nameFr}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* =====================================================================
            STATION 3: LE PLAN DE TRAVAIL & PLANCHE À DÉCOUPER (CENTER)
           ===================================================================== */}
        <div
          style={{
            position: 'absolute',
            bottom: '65px',
            left: '160px',
            width: '200px',
            height: '95px',
            background: 'linear-gradient(180deg, #d2b48c 0%, #b8860b 100%)',
            borderRadius: '16px 16px 0 0',
            border: '3px solid #8b4513',
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            zIndex: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '6px',
          }}
        >
          {/* Wooden Cutting Board */}
          <div style={{ width: '130px', height: '36px', background: '#f5deb3', borderRadius: '8px', border: '2px solid #cd853f', display: 'flex', alignItems: 'center', justifyContent: 'space-around', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
            <span style={{ fontSize: '1.1rem' }}>🔪</span>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#8b4513' }}>Plan du Chef</span>
            <span style={{ fontSize: '1rem' }}>🧂</span>
          </div>

          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#5c2e0b', marginTop: '6px' }}>
            🥣 Préparation & Ingrédients
          </span>
        </div>

        {/* =====================================================================
            STATION 4: LA CUISINIÈRE / FEUX & MARMITE 3D (RIGHT SIDE)
           ===================================================================== */}
        <div
          onClick={handleCookAndStir}
          style={{
            position: 'absolute',
            bottom: '65px',
            right: '16px',
            width: '160px',
            height: '145px',
            background: 'linear-gradient(135deg, #2d3436 0%, #1e272e 100%)',
            borderRadius: '20px 20px 10px 10px',
            border: '3px solid #485460',
            boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
            zIndex: 10,
            cursor: 'pointer',
            padding: '10px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          title="Touche pour faire cuire et mélanger !"
        >
          {/* Stovetop Burners */}
          <div style={{ display: 'flex', gap: '14px', alignItems: 'center', position: 'relative' }}>
            {/* Glowing Flame */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ fontSize: '1.6rem', lineHeight: 1 }} className="animate-flicker">🔥</div>
              {/* Cast Iron Pot / Dutch Oven */}
              <div
                style={{
                  width: '95px',
                  height: '58px',
                  background: 'linear-gradient(180deg, #e74c3c 0%, #c0392b 100%)',
                  borderRadius: '6px 6px 20px 20px',
                  border: '3px solid #962d2d',
                  boxShadow: '0 6px 14px rgba(0,0,0,0.35)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Pot Handles */}
                <div style={{ position: 'absolute', left: '-12px', top: '16px', width: '12px', height: '16px', borderRadius: '4px', border: '3px solid #7f1d1d' }} />
                <div style={{ position: 'absolute', right: '-12px', top: '16px', width: '12px', height: '16px', borderRadius: '4px', border: '3px solid #7f1d1d' }} />

                {/* Pot Rim & Bubbling Soup Inside */}
                <div style={{ width: '85px', height: '42px', background: '#ff9f43', borderRadius: '50%', border: '2px solid #e67e22', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                  {inPot.length === 0 ? (
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#fff' }}>Vide...</span>
                  ) : (
                    <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {inPot.map((id, i) => (
                        <span key={i} style={{ fontSize: '0.9rem' }}>
                          {KITCHEN_INGREDIENTS.find((ing) => ing.id === id)?.emoji}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Spoon / Stir Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCookAndStir();
            }}
            style={{
              marginTop: '10px',
              background: 'linear-gradient(135deg, #f1c40f, #e67e22)',
              color: '#2d3436',
              border: 'none',
              borderRadius: '999px',
              padding: '6px 14px',
              fontSize: '0.78rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 3px 0 #b7791f',
            }}
          >
            🥄 {dishReady ? 'Prêt ! (Mélanger)' : `Cuire (${inPot.length}/${currentRecipe.steps.length})`}
          </button>
        </div>

        {/* =====================================================================
            TYANNA 2D ARTICULATED WALKING CHARACTER IN THE KITCHEN
           ===================================================================== */}
        <div
          className={`tyanna-kitchen-body ${tyannaAction === 'walking' ? 'is-walking-trot' : ''}`}
          style={{
            position: 'absolute',
            bottom: '22px',
            left: `${tyannaX}%`,
            transform: `translateX(-50%) scaleX(${tyannaFacing === 'left' ? -1 : 1})`,
            transition: 'left 0.85s cubic-bezier(0.25, 1, 0.5, 1)',
            zIndex: 25,
            pointerEvents: 'none',
          }}
        >
          {/* Carried Item above Tyanna's hands */}
          {carriedItem && (
            <div
              className="animate-bounce-soft"
              style={{
                position: 'absolute',
                top: '-42px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#ffffff',
                border: '2px solid #f39c12',
                borderRadius: '16px',
                padding: '4px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 30,
              }}
            >
              <RealisticFoodSVG id={carriedItem.id} size={34} />
              <span style={{ fontSize: '0.62rem', fontWeight: 900, color: '#d35400', whiteSpace: 'nowrap' }}>
                {carriedItem.nameFr}
              </span>
            </div>
          )}

          {/* Speech Bubble when tasting */}
          {tyannaAction === 'tasting' && (
            <div
              className="animate-pop"
              style={{
                position: 'absolute',
                top: '-48px',
                left: '50%',
                transform: `translateX(-50%) scaleX(${tyannaFacing === 'left' ? -1 : 1})`,
                background: '#ffffff',
                border: '2px solid #e84393',
                borderRadius: '14px',
                padding: '4px 10px',
                fontSize: '0.78rem',
                fontWeight: 900,
                color: '#e84393',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                zIndex: 35,
              }}
            >
              😋 Miam miam ! Délicieux !
            </div>
          )}

          {/* Complete 2D Vector Character of Tyanna Chef */}
          <svg viewBox="0 0 160 220" width="105" height="145" className="tyanna-kitchen-svg">
            <defs>
              <radialGradient id="tySkin" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#A56336" />
                <stop offset="85%" stopColor="#8C4E26" />
                <stop offset="100%" stopColor="#753C19" />
              </radialGradient>
              <radialGradient id="tyHair" cx="40%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#3A281E" />
                <stop offset="70%" stopColor="#22160F" />
                <stop offset="100%" stopColor="#140C07" />
              </radialGradient>
            </defs>

            {/* Shadow on ground */}
            <ellipse cx="80" cy="214" rx="36" ry="6" fill="rgba(0,0,0,0.25)" />

            {/* Back Curls Hair */}
            <circle cx="42" cy="75" r="24" fill="url(#tyHair)" />
            <circle cx="118" cy="75" r="24" fill="url(#tyHair)" />
            <circle cx="34" cy="98" r="22" fill="url(#tyHair)" />
            <circle cx="126" cy="98" r="22" fill="url(#tyHair)" />
            <circle cx="80" cy="46" r="26" fill="url(#tyHair)" />

            {/* Legs (Alternating Walk Animation) */}
            <g className="tyanna-legs">
              <rect x="64" y="165" width="12" height="42" rx="6" fill="#f8f9fa" />
              <rect x="84" y="165" width="12" height="42" rx="6" fill="#f8f9fa" />
              <ellipse cx="68" cy="208" rx="10" ry="5" fill="#e17055" />
              <ellipse cx="92" cy="208" rx="10" ry="5" fill="#e17055" />
            </g>

            {/* Chef Apron & Dress */}
            <g className="tyanna-body">
              <path d="M 58 126 L 102 126 L 108 174 L 52 174 Z" fill="#ffffff" stroke="#ced6e0" strokeWidth="1.5" />
              <rect x="62" y="132" width="36" height="40" rx="4" fill="#e74c3c" opacity="0.85" />
              <text x="80" y="156" fill="#ffffff" fontSize="14" textAnchor="middle">⭐</text>
            </g>

            {/* Arms (Carrying / Stirring) */}
            <g className="tyanna-arms">
              <path d={carriedItem ? "M 52 130 Q 38 100 60 90" : "M 52 130 Q 42 150 54 165"} stroke="#ffffff" strokeWidth="11" strokeLinecap="round" fill="none" />
              <circle cx={carriedItem ? 60 : 54} cy={carriedItem ? 90 : 165} r="6" fill="url(#tySkin)" />

              <path d={carriedItem ? "M 108 130 Q 122 100 100 90" : "M 108 130 Q 118 150 106 165"} stroke="#ffffff" strokeWidth="11" strokeLinecap="round" fill="none" />
              <circle cx={carriedItem ? 100 : 106} cy={carriedItem ? 90 : 165} r="6" fill="url(#tySkin)" />
            </g>

            {/* Head & Smiling Face */}
            <rect x="73" y="112" width="14" height="18" rx="4" fill="url(#tySkin)" />
            <circle cx="80" cy="85" r="26" fill="url(#tySkin)" />

            {/* Rosy Cheeks */}
            <circle cx="64" cy="94" r="7" fill="#ff7675" opacity="0.5" />
            <circle cx="96" cy="94" r="7" fill="#ff7675" opacity="0.5" />

            {/* Big Expressive Cartoon Eyes */}
            <ellipse cx="70" cy="82" rx="7" ry="9" fill="#ffffff" />
            <ellipse cx="90" cy="82" rx="7" ry="9" fill="#ffffff" />
            <circle cx="71" cy="82" r="5" fill="#2d1508" />
            <circle cx="89" cy="82" r="5" fill="#2d1508" />
            <circle cx="69" cy="79" r="2" fill="#ffffff" />
            <circle cx="87" cy="79" r="2" fill="#ffffff" />

            {/* Joyful Chef Smile */}
            <path d="M 72 98 Q 80 108 88 98" fill="none" stroke="#3e1b0c" strokeWidth="3" strokeLinecap="round" />

            {/* Front Afro Puffs */}
            <circle cx="58" cy="62" r="14" fill="url(#tyHair)" />
            <circle cx="80" cy="56" r="15" fill="url(#tyHair)" />
            <circle cx="102" cy="62" r="14" fill="url(#tyHair)" />

            {/* Chef Hat (Toque de Chef) */}
            <g className="chef-toque">
              <rect x="62" y="44" width="36" height="12" rx="3" fill="#ffffff" stroke="#bdc3c7" strokeWidth="1.5" />
              <path d="M 58 44 C 48 18 112 18 102 44 Z" fill="#ffffff" stroke="#bdc3c7" strokeWidth="1.5" />
              <circle cx="72" cy="24" r="10" fill="#ffffff" />
              <circle cx="88" cy="24" r="10" fill="#ffffff" />
            </g>
          </svg>
        </div>

        {/* Floor Base */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '65px', background: 'repeating-linear-gradient(45deg, #d35400, #d35400 24px, #e67e22 24px, #e67e22 48px)', borderTop: '4px solid #b33939', opacity: 0.95 }} />
      </div>

      {/* =========================================================================
          INTERACTIVE ACTIONS & TASTING DOCK (BELOW KITCHEN)
         ========================================================================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
        {/* Quick Food Storage Bar: Direct tap buttons to send Tyanna running! */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#2d3436' }}>
            🛒 Touche un ingrédient : Tyanna ira le chercher en courant !
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              onClick={() => {
                sounds.playDoorOpen();
                setIsFridgeOpen((o) => !o);
              }}
              className="action-button secondary"
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
            >
              🧊 {isFridgeOpen ? 'Fermer Frigo' : 'Ouvrir Frigo'}
            </button>
            <button
              onClick={() => {
                sounds.playDoorOpen();
                setIsCabinetOpen((c) => !c);
              }}
              className="action-button secondary"
              style={{ padding: '6px 12px', fontSize: '0.82rem' }}
            >
              🥫 {isCabinetOpen ? 'Fermer Placard' : 'Ouvrir Placard'}
            </button>
          </div>
        </div>

        {/* Shelf of All Foods to Grab */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(85px, 1fr))',
            gap: '8px',
            background: '#ffffff',
            padding: '10px',
            borderRadius: '20px',
            border: '2px solid #e9ecef',
          }}
        >
          {KITCHEN_INGREDIENTS.map((ing) => {
            const isTarget = nextRequiredId === ing.id;
            const alreadyInPot = inPot.includes(ing.id);
            return (
              <button
                key={ing.id}
                onClick={() => handleFetchIngredient(ing)}
                disabled={alreadyInPot}
                className="animate-pop"
                style={{
                  background: alreadyInPot ? '#f1f2f6' : isTarget ? '#fff9db' : '#ffffff',
                  border: isTarget ? '3px solid #f39c12' : '2px solid #dfe6e9',
                  borderRadius: '16px',
                  padding: '8px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  cursor: alreadyInPot ? 'default' : 'pointer',
                  opacity: alreadyInPot ? 0.45 : 1,
                  boxShadow: isTarget ? '0 0 14px rgba(243, 156, 18, 0.45)' : 'none',
                }}
              >
                <RealisticFoodSVG id={ing.id} size={36} />
                <span style={{ fontSize: '0.72rem', fontWeight: 900, color: '#2d3436', textAlign: 'center' }}>
                  {ing.nameFr.split(' ')[1] || ing.nameFr}
                </span>
                <span style={{ fontSize: '0.62rem', color: ing.location === 'fridge' ? '#0984e3' : '#d35400', fontWeight: 800 }}>
                  {ing.location === 'fridge' ? '🧊 Frigo' : '🥫 Placard'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Win Banner / Taste Button when Cooked */}
        {dishReady && (
          <div
            className="animate-pop"
            style={{
              background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
              border: '3px solid #10b981',
              borderRadius: '22px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '3rem' }}>{currentRecipe.resultEmoji}</span>
            <h3 style={{ margin: 0, color: '#065f46', fontSize: '1.25rem' }}>
              {currentRecipe.resultTitle}
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={handleTasteDish}
                style={{
                  background: 'linear-gradient(135deg, #ff6b81, #e84393)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '10px 24px',
                  fontSize: '1rem',
                  fontWeight: 900,
                  cursor: 'pointer',
                  boxShadow: '0 4px 0 #ad1457, 0 8px 18px rgba(232,67,147,0.3)',
                }}
              >
                😋 Goûter avec Tyanna ! (Miam ×{tastedTimes})
              </button>
              <button
                onClick={() => setRecipeIdx((i) => (i + 1) % KITCHEN_RECIPES.length)}
                className="action-button primary"
              >
                Nouvelle Recette 👩‍🍳
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
