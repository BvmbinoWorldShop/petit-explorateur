import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, Store, Users, ArrowUpRight, ArrowDownRight, Bell, Banknote, ShieldCheck } from 'lucide-react';

// Cute 3D Pixar-style Mini-Me Customers
const PIXAR_CUSTOMERS = [
  { id: 'lea', name: 'Léa', role: 'Petite Voisine', wants: 1, skin: '#A56336', hair: '#22160F', hairType: 'afro', shirt: '#FF7675' },
  { id: 'thomas', name: 'Thomas', role: 'Voisin Jardinier', wants: 2, skin: '#E0AC69', hair: '#5C3818', hairType: 'short', shirt: '#0984E3' },
  { id: 'sarah', name: 'Sarah', role: 'Maman du quartier', wants: 1, skin: '#F1C27D', hair: '#C0392B', hairType: 'ponytail', shirt: '#FD79A8' },
  { id: 'lucas', name: 'Lucas', role: 'Chef Cuisinier', wants: 2, skin: '#8D5524', hair: '#1B1464', hairType: 'chefHat', shirt: '#FFFFFF' },
  { id: 'noa', name: 'Noa', role: 'Copain d\'école', wants: 1, skin: '#FFDBAC', hair: '#2C3E50', hairType: 'cap', shirt: '#F1C40F' },
  { id: 'mamie', name: 'Mamie Rose', role: 'Grand-mère gâteaux', wants: 3, skin: '#C68642', hair: '#BDC3C7', hairType: 'bun', shirt: '#9B59B6' },
];

// 1. Helper component for Pixar 3D Mini-Me Avatar
function PixarMiniMe({ person }) {
  return (
    <svg viewBox="0 0 80 90" className="pixar-minime-svg">
      <defs>
        <radialGradient id={`skin_${person.id}`} cx="45%" cy="35%" r="60%">
          <stop offset="0%" stopColor={person.skin} />
          <stop offset="100%" stopColor="#552a12" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Body / Shirt */}
      <path d="M 22 62 Q 40 54 58 62 L 62 90 L 18 90 Z" fill={person.shirt} />
      {person.hairType === 'chefHat' && (
        <path d="M 28 42 L 52 42 L 54 26 C 58 12 22 12 26 26 Z" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="1.5" />
      )}

      {/* Head */}
      <ellipse cx="40" cy="40" rx="19" ry="20" fill={`url(#skin_${person.id})`} />

      {/* Rosy Cheeks */}
      <circle cx="28" cy="45" r="4.5" fill="#FF7675" opacity="0.5" />
      <circle cx="52" cy="45" r="4.5" fill="#FF7675" opacity="0.5" />

      {/* Big Pixar Eyes */}
      <ellipse cx="32" cy="38" rx="4.5" ry="5.5" fill="#FFFFFF" />
      <ellipse cx="48" cy="38" rx="4.5" ry="5.5" fill="#FFFFFF" />
      <circle cx="33" cy="38" r="3.2" fill="#2C3E50" />
      <circle cx="47" cy="38" r="3.2" fill="#2C3E50" />
      {/* Eye shines */}
      <circle cx="31.5" cy="36" r="1.3" fill="#FFFFFF" />
      <circle cx="45.5" cy="36" r="1.3" fill="#FFFFFF" />

      {/* Cute Smile */}
      <path d="M 35 48 Q 40 53 45 48" fill="none" stroke="#552A12" strokeWidth="2" strokeLinecap="round" />

      {/* Hair Styles */}
      {person.hairType === 'afro' && (
        <g fill={person.hair}>
          <circle cx="23" cy="28" r="11" />
          <circle cx="38" cy="22" r="12" />
          <circle cx="55" cy="27" r="11" />
          <circle cx="19" cy="38" r="8" />
          <circle cx="61" cy="38" r="8" />
        </g>
      )}
      {person.hairType === 'ponytail' && (
        <g fill={person.hair}>
          <path d="M 22 34 C 22 18 58 18 58 34 C 54 24 26 24 22 34 Z" />
          <circle cx="58" cy="28" r="7" />
        </g>
      )}
      {person.hairType === 'bun' && (
        <g fill={person.hair}>
          <circle cx="40" cy="18" r="9" />
          <path d="M 22 34 C 22 22 58 22 58 34 C 54 26 26 26 22 34 Z" />
        </g>
      )}
      {person.hairType === 'cap' && (
        <g>
          <path d="M 21 34 C 21 20 59 20 59 34 Z" fill="#E74C3C" />
          <path d="M 20 34 Q 40 38 66 32" stroke="#E74C3C" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {person.hairType === 'short' && (
        <path d="M 22 32 C 22 18 58 18 58 32 C 55 24 25 24 22 32 Z" fill={person.hair} />
      )}
    </svg>
  );
}

// 2. Realistic 3D Pixar Chicken Graphic (Articulated running legs, layered plumage, pecking beak)
function PixarChickenGraphic({ chick }) {
  const isEating = chick.isEating;
  return (
    <svg viewBox="0 0 110 100" className={`pixar-chicken-3d-svg ${isEating ? 'hen-is-eating' : 'hen-is-trotting'}`}>
      <defs>
        {/* Warm Golden Feathers Radial Shading */}
        <radialGradient id={`henPlumage_${chick.id}`} cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="35%" stopColor="#FDEAA8" />
          <stop offset="70%" stopColor="#F39C12" />
          <stop offset="100%" stopColor="#D35400" />
        </radialGradient>

        {/* Neck Cape Feathers Gradient */}
        <linearGradient id={`henCape_${chick.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEAA7" />
          <stop offset="50%" stopColor="#F9CA24" />
          <stop offset="100%" stopColor="#EB4D4B" />
        </linearGradient>

        {/* Tail Feather Gradient with Iridescent Sheen */}
        <linearGradient id={`henTail_${chick.id}`} x1="0%" y1="100%" x2="60%" y2="0%">
          <stop offset="0%" stopColor="#2C3E50" />
          <stop offset="35%" stopColor="#1B1464" />
          <stop offset="70%" stopColor="#006266" />
          <stop offset="100%" stopColor="#F39C12" />
        </linearGradient>

        {/* Comb & Wattle Red Gradient */}
        <linearGradient id="henCombGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4757" />
          <stop offset="100%" stopColor="#B33939" />
        </linearGradient>
      </defs>

      {/* Realistic Ground Contact Shadow */}
      <ellipse cx="54" cy="94" rx="34" ry="5.5" fill="rgba(0,0,0,0.24)" />

      {/* BACK ARTICULATED LEG (Alternates step when running) */}
      <g className="hen-leg hen-leg-back">
        {/* Thigh */}
        <path d="M 42 66 Q 39 76 36 82" stroke="#E67E22" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        {/* Tarsus & Claws */}
        <path d="M 36 82 L 35 92" stroke="#F39C12" strokeWidth="3" strokeLinecap="round" />
        <path d="M 35 92 L 27 94 M 35 92 L 30 95 M 35 92 L 39 94 M 35 92 L 40 90" stroke="#E67E22" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* FAN TAIL PLUMES (Layered realistic arching feathers) */}
      <g className="hen-tail-group">
        <path d="M 30 56 C 12 44 6 22 22 16 C 28 24 30 42 34 54 Z" fill={`url(#henTail_${chick.id})`} stroke="#1B1464" strokeWidth="1" />
        <path d="M 34 58 C 18 48 12 30 28 26 C 32 34 34 46 38 56 Z" fill={`url(#henTail_${chick.id})`} opacity="0.9" />
        <path d="M 38 62 C 22 54 20 40 32 36 C 36 44 38 52 42 60 Z" fill="#E67E22" />
      </g>

      {/* PLUMP 3D CHICKEN BODY */}
      <ellipse cx="58" cy="62" rx="29" ry="24" fill={`url(#henPlumage_${chick.id})`} stroke="#D35400" strokeWidth="1.2" />

      {/* LAYERED FLIGHT WING (Flutters when active) */}
      <g className="hen-wing-layer">
        <path d="M 46 54 C 46 40 68 42 70 56 C 70 70 50 70 46 54 Z" fill="#F39C12" stroke="#D35400" strokeWidth="1.2" />
        {/* Layered Primary Feather Tips */}
        <path d="M 46 58 C 40 62 38 68 50 66" fill="#E67E22" stroke="#BA4A00" strokeWidth="1" />
        <path d="M 50 60 C 44 64 42 70 54 68" fill="#EB4D4B" stroke="#BA4A00" strokeWidth="1" />
        <path d="M 54 62 C 48 66 46 72 58 69" fill="#F9CA24" stroke="#BA4A00" strokeWidth="1" />
      </g>

      {/* FRONT ARTICULATED LEG (Alternates step when running) */}
      <g className="hen-leg hen-leg-front">
        <path d="M 56 66 Q 58 76 60 82" stroke="#E67E22" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M 60 82 L 62 92" stroke="#F39C12" strokeWidth="3" strokeLinecap="round" />
        <path d="M 62 92 L 54 94 M 62 92 L 58 95 M 62 92 L 67 94 M 62 92 L 67 90" stroke="#E67E22" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      {/* NECK & HEAD GROUP (Bends 60° down to grass when eating) */}
      <g className="hen-neck-head-group">
        {/* Feathered Neck Cape */}
        <path d="M 68 58 C 74 52 78 40 76 30 C 72 30 66 42 58 50 Z" fill={`url(#henCape_${chick.id})`} />
        
        {/* Head */}
        <circle cx="80" cy="28" r="14.5" fill={`url(#henPlumage_${chick.id})`} stroke="#E67E22" strokeWidth="1" />

        {/* Sculpted 5-Point Jagged Red Comb */}
        <path d="M 72 20 C 70 11 75 9 77 15 C 79 8 84 7 85 14 C 87 8 91 8 91 15 C 93 10 97 11 96 17 C 98 14 101 16 99 21 Z" fill="url(#henCombGrad)" stroke="#B33939" strokeWidth="0.8" />

        {/* Pendulous Red Wattles (Barbillons) */}
        <path d="M 89 36 C 93 38 94 46 89 47 C 85 47 85 40 89 36 Z" fill="url(#henCombGrad)" stroke="#B33939" strokeWidth="0.8" />
        <path d="M 85 37 C 88 39 88 45 84 45 C 81 45 81 40 85 37 Z" fill="#FF4757" />

        {/* Amber Realistic Eye with Pixar Glints */}
        <ellipse cx="82" cy="25" rx="4.5" ry="5" fill="#FFFFFF" stroke="#C0392B" strokeWidth="0.6" />
        <circle cx="83" cy="25" r="3.2" fill="#E67E22" />
        <circle cx="83.5" cy="25" r="2.2" fill="#1E272E" />
        <circle cx="82" cy="23.5" r="1.1" fill="#FFFFFF" />
        <circle cx="84.5" cy="26" r="0.6" fill="#FFFFFF" />

        {/* Realistic Sharp Curved Beak */}
        <g className="hen-beak">
          <path d="M 90 26 L 104 32 L 90 35 Z" fill="#F1C40F" stroke="#D35400" strokeWidth="1" />
          <path d="M 90 32 L 100 32" stroke="#B71540" strokeWidth="0.8" />
          <circle cx="93" cy="28.5" r="0.7" fill="#B71540" />
        </g>
      </g>
    </svg>
  );
}

// 3. Authentique Caisse Enregistreuse 3D Pixar
function PixarCashRegister({ amountDue, isRinging, isOpen, onRing }) {
  return (
    <div
      className={`pixar-cash-register-wrap ${isRinging ? 'ringing' : ''}`}
      onClick={onRing}
      title="Caisse Enregistreuse 3D (Ding !)"
    >
      <svg viewBox="0 0 170 150" className="pixar-register-svg">
        <defs>
          <linearGradient id="regBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48dbfb" />
            <stop offset="45%" stopColor="#0abde3" />
            <stop offset="100%" stopColor="#0984e3" />
          </linearGradient>
          <linearGradient id="regMetalRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#dfe6e9" />
            <stop offset="100%" stopColor="#b2bec3" />
          </linearGradient>
          <linearGradient id="regDrawerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2f3542" />
            <stop offset="100%" stopColor="#57606f" />
          </linearGradient>
          <linearGradient id="bellGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff275" />
            <stop offset="50%" stopColor="#f1c40f" />
            <stop offset="100%" stopColor="#d35400" />
          </linearGradient>
          <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#2ed573" floodOpacity="0.8" />
          </filter>
        </defs>

        {/* Shadow */}
        <ellipse cx="85" cy="142" rx="72" ry="7" fill="rgba(0,0,0,0.22)" />

        {/* Main Body (Isometric Trapeze) */}
        <polygon points="26,120 144,120 134,50 36,50" fill="url(#regBodyGrad)" stroke="#0984e3" strokeWidth="2.5" />
        <polygon points="36,50 134,50 128,42 42,42" fill="#7ed6df" opacity="0.6" />

        {/* Paper Receipt Slot & Emerging Receipt */}
        <rect x="52" y="16" width="34" height="28" rx="4" fill="#ffffff" stroke="#ced6e0" strokeWidth="1.5" />
        <line x1="56" y1="22" x2="82" y2="22" stroke="#747d8c" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="56" y1="28" x2="76" y2="28" stroke="#747d8c" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="56" y1="34" x2="80" y2="34" stroke="#e74c3c" strokeWidth="1.5" />

        {/* Brass Bell on top (vibrates when ringing) */}
        <g className={isRinging ? 'register-bell-ding' : ''}>
          <path d="M 112 36 C 112 24 136 24 136 36 Z" fill="url(#bellGold)" stroke="#d35400" strokeWidth="1.5" />
          <rect x="122" y="20" width="4" height="6" rx="2" fill="#d35400" />
          <circle cx="124" cy="19" r="3.5" fill="#f39c12" />
        </g>

        {/* Glowing LED Customer Screen */}
        <rect x="42" y="44" width="86" height="26" rx="6" fill="#1e272e" stroke="url(#regMetalRim)" strokeWidth="2" />
        <rect x="46" y="48" width="78" height="18" rx="4" fill="#013220" />
        <text
          x="85"
          y="62"
          fill="#2ed573"
          fontSize="13"
          fontWeight="900"
          textAnchor="middle"
          filter="url(#glowGreen)"
          fontFamily="monospace"
        >
          {amountDue > 0 ? `${amountDue}.00 🪙` : '0.00 🪙'}
        </text>

        {/* Keypad Buttons (Candy buttons) */}
        <g>
          <rect x="45" y="76" width="18" height="10" rx="3" fill="#ff6b6b" />
          <rect x="68" y="76" width="18" height="10" rx="3" fill="#feca57" />
          <rect x="91" y="76" width="18" height="10" rx="3" fill="#ff9ff3" />
          <rect x="45" y="90" width="18" height="10" rx="3" fill="#54a0ff" />
          <rect x="68" y="90" width="18" height="10" rx="3" fill="#1dd1a1" />
          <rect x="91" y="90" width="18" height="10" rx="3" fill="#5f27cd" />
          <rect x="114" y="76" width="14" height="24" rx="4" fill="#10ac84" stroke="#ffffff" strokeWidth="1" />
          <text x="121" y="92" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle">OK</text>
        </g>

        {/* Cash Drawer at base */}
        <g className={`register-cash-drawer ${isOpen ? 'drawer-opened' : ''}`}>
          <rect x="22" y="112" width="126" height="26" rx="6" fill="url(#regDrawerGrad)" stroke="#1e272e" strokeWidth="2" />
          <rect x="74" y="122" width="22" height="6" rx="3" fill="url(#regMetalRim)" />
          {isOpen && (
            <g>
              <rect x="26" y="116" width="118" height="18" rx="4" fill="#2d3436" />
              <rect x="32" y="119" width="36" height="12" rx="2" fill="#2ed573" stroke="#27ae60" strokeWidth="1" />
              <text x="50" y="128" fill="#ffffff" fontSize="8" fontWeight="900" textAnchor="middle">💵 💵</text>
              <circle cx="82" cy="125" r="5" fill="#f1c40f" />
              <circle cx="94" cy="125" r="5" fill="#ffd32a" />
              <circle cx="106" cy="125" r="5" fill="#f39c12" />
            </g>
          )}
        </g>
      </svg>
      <div className="register-click-badge">
        {isOpen ? '💸 KA-CHING !' : '🛎️ ENCAISSER ! (Ding)'}
      </div>
    </div>
  );
}

// 4. Grand Billet Réaliste (SANS symbole dollar $ et SANS chiffre 5, grand format)
function BigBanknote() {
  return (
    <svg viewBox="0 0 160 84" className="big-banknote-svg">
      <defs>
        <linearGradient id="notePaperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4edda" />
          <stop offset="25%" stopColor="#a3e4d7" />
          <stop offset="65%" stopColor="#2ecc71" />
          <stop offset="100%" stopColor="#1e824c" />
        </linearGradient>
        <pattern id="guillochePattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="3" fill="none" stroke="#27ae60" strokeWidth="0.5" opacity="0.3" />
        </pattern>
      </defs>

      {/* Shadow */}
      <rect x="2" y="3" width="156" height="78" rx="6" fill="rgba(0,0,0,0.3)" />

      {/* Main Banknote Paper */}
      <rect x="2" y="2" width="156" height="78" rx="6" fill="url(#notePaperGrad)" stroke="#145a32" strokeWidth="2.5" />
      <rect x="4" y="4" width="152" height="74" rx="4" fill="url(#guillochePattern)" />

      {/* Ornate Inner Guilloche Border */}
      <rect x="8" y="8" width="144" height="66" rx="4" fill="none" stroke="#196f3d" strokeWidth="1.5" strokeDasharray="4 2" />
      <rect x="12" y="12" width="136" height="58" rx="3" fill="none" stroke="#27ae60" strokeWidth="1" />

      {/* 4 Corner Rosettes */}
      <g fill="#145a32">
        <circle cx="16" cy="16" r="3" />
        <circle cx="144" cy="16" r="3" />
        <circle cx="16" cy="66" r="3" />
        <circle cx="144" cy="66" r="3" />
      </g>

      {/* Central Vignette / Engraved Oval Seal */}
      <ellipse cx="80" cy="41" rx="26" ry="21" fill="#e8f8f5" stroke="#1e824c" strokeWidth="1.8" />
      <ellipse cx="80" cy="41" rx="23" ry="18" fill="none" stroke="#27ae60" strokeWidth="1" strokeDasharray="3 1.5" />

      {/* Central Agricultural Wheat Sheaf Emblem (Strictly No $ and No 5) */}
      <g fill="#27ae60" stroke="#196f3d" strokeWidth="0.8">
        <path d="M 80 49 C 76 43 72 36 78 30 C 82 35 81 44 80 49 Z" fill="#2ecc71" />
        <path d="M 80 49 C 84 43 88 36 82 30 C 78 35 79 44 80 49 Z" fill="#2ecc71" />
        <path d="M 80 50 L 80 28" stroke="#145a32" strokeWidth="1.5" />
        <circle cx="80" cy="27" r="2" fill="#f1c40f" stroke="#d35400" strokeWidth="0.6" />
      </g>

      {/* Engraved Side Geometric Waves */}
      <path d="M 24 24 Q 28 41 24 58" fill="none" stroke="#1e824c" strokeWidth="1.5" />
      <path d="M 28 27 Q 32 41 28 55" fill="none" stroke="#27ae60" strokeWidth="1" />
      <path d="M 136 24 Q 132 41 136 58" fill="none" stroke="#1e824c" strokeWidth="1.5" />
      <path d="M 132 27 Q 128 41 132 55" fill="none" stroke="#27ae60" strokeWidth="1" />

      {/* Top and Bottom Decorative Lines */}
      <line x1="38" y1="18" x2="122" y2="18" stroke="#145a32" strokeWidth="1" strokeDasharray="5 2" />
      <line x1="38" y1="64" x2="122" y2="64" stroke="#145a32" strokeWidth="1" strokeDasharray="5 2" />
    </svg>
  );
}

// 5. Pièce d'Or Jaune Brillante (3D Yellow Gold Coin)
function ShinyGoldCoin() {
  return (
    <svg viewBox="0 0 38 38" className="shiny-gold-coin-svg">
      <defs>
        <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff9c4" />
          <stop offset="35%" stopColor="#ffd32a" />
          <stop offset="75%" stopColor="#f39c12" />
          <stop offset="100%" stopColor="#b7791f" />
        </linearGradient>
        <radialGradient id="goldFaceGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#fffa65" />
          <stop offset="50%" stopColor="#ffd32a" />
          <stop offset="100%" stopColor="#e67e22" />
        </radialGradient>
      </defs>
      {/* 3D Depth Rim */}
      <circle cx="19" cy="21" r="16.5" fill="#996515" />
      <circle cx="19" cy="19" r="16.5" fill="url(#goldRimGrad)" stroke="#d35400" strokeWidth="1" />
      <circle cx="19" cy="19" r="13" fill="url(#goldFaceGrad)" stroke="#f39c12" strokeWidth="0.8" />
      {/* Star Emblem */}
      <path
        d="M 19 12 L 20.8 16.5 L 25.5 16.8 L 21.8 19.8 L 23.2 24.5 L 19 21.8 L 14.8 24.5 L 16.2 19.8 L 12.5 16.8 L 17.2 16.5 Z"
        fill="#ffffff"
        opacity="0.9"
      />
    </svg>
  );
}

// Le jeu commence TOUJOURS avec 1 seule poule au tout début !
const INITIAL_CHICKENS = [
  {
    id: 1,
    name: 'Poupette',
    x: 48,
    y: 46,
    isEating: false,
    flip: false,
  },
];

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(15);
  const [bills, setBills] = useState(1); // Grands billets réalistes (sans $ ni 5)
  const [seeds, setSeeds] = useState(6);
  const [eggs, setEggs] = useState(0);
  const [lastCashChange, setLastCashChange] = useState(null);
  const [lastEggChange, setLastEggChange] = useState(null);

  // Dropped seeds scattered in the garden grass
  const [droppedFood, setDroppedFood] = useState([]);
  // Flying seeds to reserve animation flag
  const [isGrainFlying, setIsGrainFlying] = useState(false);

  // Large Pasture: Starts with strictly 1 chicken!
  const [chickens, setChickens] = useState(INITIAL_CHICKENS);

  // Cash register animation states
  const [isRegisterRinging, setIsRegisterRinging] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Real human neighbors queue
  const [customerLine, setCustomerLine] = useState([
    { ...PIXAR_CUSTOMERS[0], wants: 1 },
    { ...PIXAR_CUSTOMERS[1], wants: 2 },
  ]);

  useEffect(() => {
    const welcome = "Bienvenue dans ta ferme ! Regarde ta première poule Poupette qui court dans l'herbe ! Donne-lui des graines pour récolter ton premier œuf et le vendre à la caisse !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);

    // Chickens running & wandering around expansive field
    const moveInterval = setInterval(() => {
      setChickens((prev) =>
        prev.map((c) => {
          if (c.isEating) return c; // Don't interrupt eating
          const newTargetX = Math.max(5, Math.min(94, c.x + (Math.random() - 0.5) * 30));
          const newTargetY = Math.max(14, Math.min(84, c.y + (Math.random() - 0.5) * 24));
          return {
            ...c,
            x: newTargetX,
            y: newTargetY,
            flip: newTargetX < c.x,
          };
        })
      );
    }, 2800);

    // Neighbors arriving at front desk
    const custInterval = setInterval(() => {
      setCustomerLine((prev) => {
        if (prev.length < 5) {
          const person = PIXAR_CUSTOMERS[Math.floor(Math.random() * PIXAR_CUSTOMERS.length)];
          const newCustomer = {
            ...person,
            id: Math.random().toString(),
            wants: Math.random() > 0.5 ? 2 : 1,
          };
          return [...prev, newCustomer];
        }
        return prev;
      });
    }, 4500);

    return () => {
      clearInterval(moveInterval);
      clearInterval(custInterval);
    };
  }, []);

  // 1. Feed Single Chicken (Food visibly drops in the garden, chicken runs to peck it!)
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Achète un sac pour remplir ta réserve de nourriture !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    const targetChick = chickens.find((c) => c.id === chickenId);
    if (!targetChick) return;

    // Drop food on garden grass right near this chicken!
    const foodId = Date.now() + Math.random();
    const newFood = {
      id: foodId,
      x: Math.max(6, Math.min(94, targetChick.x + (targetChick.flip ? -5 : 5))),
      y: Math.min(88, targetChick.y + 6),
    };
    setDroppedFood((prev) => [...prev, newFood]);

    sounds.playSeedsRustle();
    setSeeds((s) => s - 1);

    // Chicken bends down and pecks the dropped food!
    setChickens((prev) =>
      prev.map((c) => (c.id === chickenId ? { ...c, isEating: true } : c))
    );

    setTimeout(() => {
      sounds.playSuccess();
      // Food is eaten and disappears with sparkles
      setDroppedFood((prev) => prev.filter((f) => f.id !== foodId));
      setChickens((prev) =>
        prev.map((c) => (c.id === chickenId ? { ...c, isEating: false } : c))
      );

      setEggs((prev) => prev + 1);
      setLastEggChange({ type: 'in', amount: 1 });
      setTimeout(() => setLastEggChange(null), 1800);

      confetti({ particleCount: 25, spread: 45, origin: { y: 0.5 } });
    }, 1300);
  };

  // 2. Feed ALL Chickens (Food showers across the whole garden, all chickens peck!)
  const feedAllChickens = () => {
    if (seeds < chickens.length) {
      sounds.playBloop();
      const msg = `Il te faut ${chickens.length} graines dans la réserve ! Remplis ta réserve de nourriture !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playSeedsRustle();
    setSeeds((s) => s - chickens.length);

    // Drop food clusters in the garden in front of every chicken!
    const batchFood = chickens.map((c, i) => ({
      id: Date.now() + i,
      x: Math.max(6, Math.min(94, c.x + (c.flip ? -5 : 5))),
      y: Math.min(88, c.y + 6),
    }));
    setDroppedFood((prev) => [...prev, ...batchFood]);

    // All chickens bend down and peck their food on the grass!
    setChickens((prev) => prev.map((c) => ({ ...c, isEating: true })));

    setTimeout(() => {
      sounds.playSuccess();
      setDroppedFood([]);
      setChickens((prev) => prev.map((c) => ({ ...c, isEating: false })));

      const eggsEarned = Math.floor(chickens.length * 0.8) || 1;
      setEggs((prev) => prev + eggsEarned);
      setLastEggChange({ type: 'in', amount: eggsEarned });
      setTimeout(() => setLastEggChange(null), 2000);

      confetti({ particleCount: 55, spread: 70, origin: { y: 0.4 } });
      const eggMsg = `Toutes tes ${chickens.length} poules ont picoré dans l'herbe ! +${eggsEarned} beaux œufs frais !`;
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);
    }, 1400);
  };

  // 3. Add Chickens (Super Farm expansion to reach 30+)
  const addChickens = (count) => {
    const cost = count === 1 ? 10 : 35;
    if (coins < cost) {
      sounds.playBloop();
      const msg = `Il te faut ${cost} pièces pour ajouter ${count} poule${count > 1 ? 's' : ''} ! Vends des œufs à la caisse !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playSuccess();
    setCoins((prev) => prev - cost);
    setLastCashChange({ type: 'out', amount: cost });
    setTimeout(() => setLastCashChange(null), 2000);

    const newHens = Array.from({ length: count }).map((_, i) => ({
      id: Date.now() + i,
      name: `Cocotte ${chickens.length + i + 1}`,
      x: 10 + Math.random() * 80,
      y: 15 + Math.random() * 70,
      isEating: false,
      flip: Math.random() > 0.5,
    }));

    const nextCount = chickens.length + count;
    setChickens((prev) => [...prev, ...newHens]);
    confetti({ particleCount: 75, spread: 80 });
    if (onRewardStar) onRewardStar();

    if (nextCount >= 30) {
      const cheer = `BRAVO ! Tu as plus de 30 poules (${nextCount} poules) ! Ta ferme est immense !`;
      onNiaSpeak(cheer);
      doraVoice.speak(cheer);
    } else {
      const cheer = `Hourra ! +${count} nouvelle${count > 1 ? 's' : ''} poule${count > 1 ? 's' : ''} Pixar ! Total : ${nextCount} poules !`;
      onNiaSpeak(cheer);
      doraVoice.speak(cheer);
    }
  };

  // 4. Serve Customer at 3D Cash Register
  const serveNextCustomer = () => {
    if (customerLine.length === 0) {
      doraVoice.speak("La caisse est libre ! Un nouveau voisin arrive très bientôt !");
      return;
    }

    const currentCustomer = customerLine[0];

    if (eggs < currentCustomer.wants) {
      sounds.playBloop();
      const needMsg = `${currentCustomer.name} veut ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} ! Nourris tes poules dans le grand pré pour récolter !`;
      onNiaSpeak(needMsg);
      doraVoice.speak(needMsg);
      return;
    }

    // Cash register bell + drawer ring sound
    sounds.playCashRegister();
    setIsRegisterRinging(true);
    setIsDrawerOpen(true);
    setTimeout(() => setIsRegisterRinging(false), 800);
    setTimeout(() => setIsDrawerOpen(false), 2200);

    // Deduct eggs
    setEggs((prev) => prev - currentCustomer.wants);
    setLastEggChange({ type: 'out', amount: currentCustomer.wants });

    // Add cash & banknotes directly to vault!
    const earnedCoins = currentCustomer.wants * 5;
    const earnedBills = currentCustomer.wants >= 2 ? 1 : 0;

    setCoins((prev) => prev + earnedCoins);
    if (earnedBills > 0) setBills((prev) => prev + earnedBills);
    setLastCashChange({ type: 'in', amount: earnedCoins + earnedBills * 5 });

    setTimeout(() => {
      setLastEggChange(null);
      setLastCashChange(null);
    }, 2200);

    setCustomerLine((prev) => prev.slice(1));
    confetti({ particleCount: 50, spread: 60 });
    if (onRewardStar) onRewardStar();

    const cheer = `KA-CHING ! Caisse enregistrée pour ${currentCustomer.name} ! L'argent va directement dans le coffre-fort !`;
    onNiaSpeak(cheer);
    doraVoice.speak(cheer);
  };

  // 5. Buy Food (Seeds fly visibly into the grain reserve!)
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut 3 pièces dans le coffre pour acheter des graines !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    // Trigger visual grain flight into reserve
    setIsGrainFlying(true);
    sounds.playSeedsRustle();

    setCoins((prev) => prev - 3);
    setSeeds((prev) => prev + 10);
    setLastCashChange({ type: 'out', amount: 3 });

    setTimeout(() => {
      setIsGrainFlying(false);
      setLastCashChange(null);
    }, 1800);

    const msg = "+10 graines ajoutées dans la réserve de nourriture !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  const activeCustomer = customerLine[0] || null;
  const currentPrice = activeCustomer ? activeCustomer.wants * 5 : 0;

  return (
    <div className="center-activity-card premium-farm-experience wide-farm-layout">
      {/* Farm Top Banner */}
      <div className="activity-card-header farm-header-theme">
        <div className="header-info">
          <span className="card-badge-icon">🌾</span>
          <div>
            <h2 className="card-main-title">La Ferme Géante aux 30+ Poules & Coffre-Fort</h2>
            <p className="card-subtitle">Vraies poules qui courent et picorent, graines dans la réserve, caisse 3D & coffre à billets !</p>
          </div>
        </div>

        {/* Global Wallet Bar */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill bill-pill" title="Billets au coffre">
            <Banknote size={18} color="#2ecc71" />
            <span>{bills} Billets 💵</span>
          </div>
          <div className="wallet-pill gold-pill" title="Pièces au coffre">
            <Coins size={18} color="#f1c40f" />
            <span>{coins} Pièces 🪙</span>
          </div>
          <div className="wallet-pill seed-pill" title="Réserve de graines">
            <span>🌾 {seeds} Graines</span>
          </div>
          <div className="wallet-pill egg-pill" title="Œufs récoltés">
            <span>🥚 {eggs} Œufs</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. MASSIVE EXPANSIVE MEADOW (OCCUPIES ALMOST HALF THE SCREEN) */}
      {/* ========================================================= */}
      <div className="pasture-canvas-field expansive-pasture mega-farm-pasture">
        {/* Sleek top control bar inside meadow */}
        <div className="pasture-header-row sleek-dock-bar">
          <div className="pasture-status-badges">
            <span className="pasture-tag glowing-tag">
              🐔 <strong>{chickens.length}</strong> Poules Pixar {chickens.length >= 30 ? '🎉 OBJECTIF 30+ ATTEINT !' : '(Objectif : 30+)'}
            </span>

            {/* VISUAL GRAIN RESERVE (Seeds store that visibly receives bought food) */}
            <div className={`grain-reserve-indicator ${isGrainFlying ? 'receiving-seeds-pulse' : ''}`} title="Réserve de nourriture des poules">
              <span className="reserve-icon">🌾</span>
              <span className="reserve-text">Réserve : <strong>{seeds}</strong> graines</span>
              {isGrainFlying && (
                <span className="flying-seeds-badge animate-bounce-soft">
                  +10 Graines ! 🌾
                </span>
              )}
            </div>
          </div>

          {/* Compact Sleek Action Controls */}
          <div className="sleek-pasture-actions">
            <button
              onClick={feedAllChickens}
              className="sleek-feed-pill-btn"
              title="Faire tomber des graines pour toutes les poules"
            >
              <span className="pill-icon">🌾</span>
              <span>Nourrir Tout ({chickens.length})</span>
            </button>

            <button
              onClick={() => addChickens(1)}
              className="sleek-add-pill-btn"
              title="Acheter 1 poule supplémentaire (10 pièces)"
              disabled={coins < 10}
            >
              <span>+1 🐔</span>
              <span className="tiny-price">10🪙</span>
            </button>

            <button
              onClick={() => addChickens(5)}
              className="sleek-super-flock-btn"
              title="Ajouter 5 poules pour vite atteindre 30+ !"
              disabled={coins < 35}
            >
              <span>🐣 +5 Poules Magiques !</span>
              <span className="tiny-price">35🪙</span>
            </button>
          </div>
        </div>

        {/* Scenic Meadow Decorations */}
        <div className="field-grass-tufts mega-tufts">🌱 🌼 🌻 🌾 🌿 🌼 🌻 🌱 🌾 🌼 🌻 🌿</div>
        <div className="farm-pond-corner">🦆 💦 Mare aux canards</div>
        <div className="farm-wooden-coop compact-coop">🏡 Poulailler</div>

        {/* VISUALLY DROPPED SEEDS SCATTERED IN THE GARDEN WHEN FEEDING */}
        {droppedFood.map((food) => (
          <div
            key={food.id}
            className="garden-dropped-seed-pile animate-drop-scatter"
            style={{ left: `${food.x}%`, top: `${food.y}%` }}
          >
            <span className="grain-kernel g1">🌽</span>
            <span className="grain-kernel g2">🌾</span>
            <span className="grain-kernel g3">🟡</span>
            <span className="grain-kernel g4">🌾</span>
          </div>
        ))}

        {/* 30+ ANIMATED REALISTIC PIXAR CHICKENS RUNNING & PECKING */}
        {chickens.map((chick) => (
          <div
            key={chick.id}
            onClick={() => feedChicken(chick.id)}
            className={`running-chicken-entity flock-chicken ${chick.isEating ? 'eating-state' : ''}`}
            style={{
              left: `${chick.x}%`,
              top: `${chick.y}%`,
              transform: `translate(-50%, -50%) scaleX(${chick.flip ? -1 : 1})`,
              transition: 'left 2.8s cubic-bezier(0.25, 1, 0.5, 1), top 2.8s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          >
            {chick.isEating && (
              <div className="chicken-cluck-bubble mini-bubble" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
                🌾 Miam !
              </div>
            )}
            <div className="pixar-chicken-box mini-hen">
              <PixarChickenGraphic chick={chick} />
            </div>
            <span className="chicken-name-tag mini-tag" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
              {chick.name}
            </span>
          </div>
        ))}
      </div>

      {/* ========================================================= */}
      {/* 2. LOWER SECTION: EGGS SILO + 3D CASH REGISTER + 3D VAULT */}
      {/* ========================================================= */}
      <div className="farm-merchant-bottom-stage">
        {/* --- LEFT: EGG TRAY SILO --- */}
        <div className="visual-silo-column egg-silo compact-silo">
          <div className="silo-header">
            <h4>🥚 Casier à Œufs</h4>
            <span className="silo-count-badge">{eggs}</span>
          </div>

          {lastEggChange && (
            <div className={`flow-indicator-banner ${lastEggChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastEggChange.type === 'in' ? (
                <span><ArrowDownRight size={14} /> +{lastEggChange.amount} Œuf</span>
              ) : (
                <span><ArrowUpRight size={14} /> -{lastEggChange.amount} Vendu</span>
              )}
            </div>
          )}

          <div className="egg-stack-rack compact-rack">
            {eggs === 0 ? (
              <p className="empty-rack-hint">Casier vide... Nourris tes poules !</p>
            ) : (
              <div className="rack-eggs-grid mini-grid">
                {Array.from({ length: Math.min(eggs, 24) }).map((_, i) => (
                  <span key={i} className="rack-egg-unit animate-pop">
                    🥚
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- CENTER: THE 3D CASH REGISTER & HUMAN CUSTOMER COUNTER --- */}
        <div className="center-cash-register-desk">
          <div className="register-desk-header">
            <Store size={22} color="#0984e3" />
            <div>
              <h4 className="desk-title">Le Guichet & Caisse Enregistreuse 3D</h4>
              <p className="desk-sub">File d'attente : {customerLine.length} voisin(s) du village</p>
            </div>
          </div>

          <div className="counter-interactive-split">
            {/* 3D Cash Register Device */}
            <div className="register-column">
              <PixarCashRegister
                amountDue={currentPrice}
                isRinging={isRegisterRinging}
                isOpen={isDrawerOpen}
                onRing={serveNextCustomer}
              />
            </div>

            {/* Customer waiting at the register */}
            <div className="customer-at-register-box">
              {activeCustomer ? (
                <div className="serving-customer-card animate-pop">
                  <div className="speech-balloon">
                    Bonjour ! Je voudrais <strong>{activeCustomer.wants} œuf{activeCustomer.wants > 1 ? 's' : ''}</strong> ! 🥚
                  </div>

                  <div className="customer-avatar-minime big-avatar animate-bounce-soft">
                    <PixarMiniMe person={activeCustomer} />
                  </div>

                  <div className="customer-info-tag">
                    <span className="c-name">{activeCustomer.name}</span>
                    <span className="c-role">{activeCustomer.role}</span>
                  </div>

                  <button
                    onClick={serveNextCustomer}
                    className={`sleek-register-action-btn ${eggs >= activeCustomer.wants ? 'ready-to-pay' : 'needs-eggs'}`}
                  >
                    <Bell size={18} />
                    <span>ENCAISSER {currentPrice} 🪙 (Ding !)</span>
                  </button>
                </div>
              ) : (
                <div className="no-customer-box">
                  <span>🍃 En attente de voisins...</span>
                </div>
              )}
            </div>

            {/* Waiting line avatars preview */}
            <div className="customers-line-strip">
              <span className="strip-title">Suivants :</span>
              <div className="strip-avatars">
                {customerLine.slice(1).map((cust) => (
                  <div key={cust.id} className="mini-waiting-avatar" title={`${cust.name} (${cust.wants} œufs)`}>
                    <PixarMiniMe person={cust} />
                    <span className="mini-wants">{cust.wants}🥚</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: 3D REINFORCED MONEY VAULT (BILLS & COINS ONLY IN VAULT, COUNT AT BOTTOM) --- */}
        <div className="farm-bank-vault-widget">
          <div className="vault-metallic-box">
            {/* Vault Outer Header */}
            <div className="vault-safe-door-header">
              <div className="vault-title-wrap">
                <ShieldCheck size={18} color="#f59e0b" />
                <span className="vault-brand">COFFRE-FORT 3D</span>
              </div>
              <span className="vault-lock-dial">⚙️ 🔒</span>
            </div>

            {/* INSIDE VAULT CHAMBER: ONLY PHYSICAL BILLS & SHINY COINS! */}
            <div className="vault-treasure-chamber">
              <div className="vault-interior-lighting"></div>

              {/* Layered Big Realistic Banknotes (No $ and No 5) */}
              <div className="vault-banknotes-pile">
                {Array.from({ length: Math.min(bills, 6) }).map((_, i) => (
                  <div
                    key={i}
                    className="vault-big-bill-item animate-pop"
                    style={{
                      transform: `rotate(${(i % 3 - 1) * 3.5}deg) translateY(-${i * 6}px)`,
                      zIndex: i + 1,
                    }}
                  >
                    <BigBanknote />
                  </div>
                ))}
              </div>

              {/* Shiny Yellow Coins Piling Up As Eggs Are Sold */}
              <div className="vault-gold-coins-pyramid yellow-coins-stack">
                {Array.from({ length: Math.min(Math.max(Math.floor(coins / 2), 3), 28) }).map((_, i) => (
                  <span
                    key={i}
                    className="vault-shiny-coin-item animate-pop"
                    style={{ animationDelay: `${i * 0.02}s` }}
                  >
                    <ShinyGoldCoin />
                  </span>
                ))}
              </div>
            </div>

            {/* AT THE BOTTOM OF THE VAULT: Count & Money Saved */}
            <div className="vault-bottom-save-plaque">
              <div className="vault-total-saved-row">
                <span className="vault-saved-label">TOTAL ÉCONOMISÉ AU COFFRE</span>
                <span className="vault-saved-amount">{coins + bills * 5} 🪙</span>
              </div>

              <div className="vault-counts-breakdown">
                <span className="count-pill bills-pill">💵 {bills} Billet{bills > 1 ? 's' : ''}</span>
                <span className="count-pill coins-pill">🪙 {coins} Pièces Jaunes</span>
              </div>

              {lastCashChange && (
                <div className={`vault-change-banner ${lastCashChange.type === 'in' ? 'c-in' : 'c-out'} animate-pop`}>
                  {lastCashChange.type === 'in' ? `+${lastCashChange.amount} 🪙 Vente !` : `-${lastCashChange.amount} 🪙 Achat !`}
                </div>
              )}
            </div>
          </div>

          {/* Quick Buy Seeds - Placed outside / beneath the vault */}
          <div className="vault-store-shelf">
            <button
              onClick={buySeeds}
              className="vault-buy-seeds-btn luxury-shop-btn"
              disabled={coins < 3}
            >
              <span>🌾 Acheter +10 Graines</span>
              <span className="price-tag">-3 🪙</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
