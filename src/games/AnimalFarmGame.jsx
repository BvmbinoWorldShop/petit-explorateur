import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, Store, Users, ArrowUpRight, ArrowDownRight, Bell, Banknote, PlusCircle } from 'lucide-react';

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

// 2. 3D Pixar-style Chicken SVG Component
function PixarChickenGraphic({ chick }) {
  return (
    <svg viewBox="0 0 100 95" className="pixar-chicken-3d-svg">
      <defs>
        <radialGradient id={`chickBody_${chick.id}`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFF9E6" />
          <stop offset="100%" stopColor="#F5CD79" />
        </radialGradient>
        <radialGradient id={`wingGrad_${chick.id}`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F7D794" />
        </radialGradient>
      </defs>

      {/* Shadow under chicken */}
      <ellipse cx="50" cy="88" rx="28" ry="6" fill="rgba(0,0,0,0.18)" />

      {/* Feet taking steps */}
      <g stroke="#E67E22" strokeWidth="3.5" strokeLinecap="round">
        <line x1="42" y1="72" x2="38" y2="86" />
        <line x1="38" y1="86" x2="31" y2="88" />
        <line x1="58" y1="72" x2="62" y2="86" />
        <line x1="62" y1="86" x2="69" y2="88" />
      </g>

      {/* Plump 3D Body */}
      <ellipse cx="50" cy="54" rx="29" ry="25" fill={`url(#chickBody_${chick.id})`} stroke="#E6BE8A" strokeWidth="1.5" />

      {/* Fluffy Tail Feathers */}
      <path d="M 22 48 C 10 38 12 28 26 38 Z" fill="#F5CD79" />
      <path d="M 20 54 C 8 46 10 36 24 45 Z" fill="#F7D794" />

      {/* Red Comb on top of head */}
      <g fill="#EA2027">
        <circle cx="56" cy="18" r="6" />
        <circle cx="63" cy="14" r="7" />
        <circle cx="70" cy="18" r="6" />
      </g>

      {/* Head */}
      <circle cx="62" cy="35" r="18" fill={`url(#chickBody_${chick.id})`} stroke="#E6BE8A" strokeWidth="1" />

      {/* Red Wattle under beak */}
      <ellipse cx="76" cy="46" rx="4" ry="7" fill="#EA2027" />

      {/* Big Sparkling Pixar Eye */}
      <ellipse cx="66" cy="32" rx="5.5" ry="6.5" fill="#FFFFFF" stroke="#D4A373" strokeWidth="0.8" />
      <circle cx="68" cy="32" r="4.2" fill="#2C3E50" />
      <circle cx="66.5" cy="30" r="1.6" fill="#FFFFFF" />
      <circle cx="69.5" cy="34" r="0.8" fill="#FFFFFF" />

      {/* Cute Orange Beak */}
      <path d="M 74 34 L 89 40 L 74 44 Z" fill="#F39C12" stroke="#D35400" strokeWidth="1" />

      {/* 3D Wing (flaps when moving or eating) */}
      <g className={chick.isEating ? 'chick-wing-flap' : ''}>
        <path
          d="M 36 50 C 36 40 56 42 56 56 C 56 68 40 68 36 50 Z"
          fill={`url(#wingGrad_${chick.id})`}
          stroke="#D4A373"
          strokeWidth="1.5"
        />
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

// Generate an initial flock of chickens
const INITIAL_CHICKENS = Array.from({ length: 14 }).map((_, i) => ({
  id: i + 1,
  name: `Poule ${i + 1}`,
  x: 8 + (i % 7) * 13 + Math.random() * 5,
  y: 18 + Math.floor(i / 7) * 32 + Math.random() * 12,
  isEating: false,
  flip: Math.random() > 0.5,
}));

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(40);
  const [bills, setBills] = useState(4); // Physical green banknotes ($5 bills)
  const [seeds, setSeeds] = useState(25);
  const [eggs, setEggs] = useState(8);
  const [lastCashChange, setLastCashChange] = useState(null);
  const [lastEggChange, setLastEggChange] = useState(null);

  // Large Pasture with 30+ potential chickens
  const [chickens, setChickens] = useState(INITIAL_CHICKENS);

  // Cash register animation states
  const [isRegisterRinging, setIsRegisterRinging] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Real human neighbors queue
  const [customerLine, setCustomerLine] = useState([
    { ...PIXAR_CUSTOMERS[0], wants: 1 },
    { ...PIXAR_CUSTOMERS[1], wants: 2 },
    { ...PIXAR_CUSTOMERS[2], wants: 1 },
  ]);

  useEffect(() => {
    const welcome = "Bienvenue dans ta très grande ferme ! Regarde toutes tes poules courir dans le champ géant ! Amène les clients à ta caisse enregistreuse 3D !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);

    // Chickens running & wandering around expansive field
    const moveInterval = setInterval(() => {
      setChickens((prev) =>
        prev.map((c) => {
          // Keep chickens well distributed across large meadow
          const newTargetX = Math.max(5, Math.min(94, c.x + (Math.random() - 0.5) * 32));
          const newTargetY = Math.max(14, Math.min(86, c.y + (Math.random() - 0.5) * 26));
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

  // 1. Feed Single Chicken
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Achète des graines avec tes pièces à la boutique !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playPop();
    setSeeds((s) => s - 1);

    setChickens((prev) =>
      prev.map((c) => (c.id === chickenId ? { ...c, isEating: true } : c))
    );

    setTimeout(() => {
      sounds.playSuccess();
      setChickens((prev) =>
        prev.map((c) => (c.id === chickenId ? { ...c, isEating: false } : c))
      );

      setEggs((prev) => prev + 1);
      setLastEggChange({ type: 'in', amount: 1 });
      setTimeout(() => setLastEggChange(null), 1800);

      confetti({ particleCount: 25, spread: 45, origin: { y: 0.5 } });
    }, 900);
  };

  // 2. Feed ALL Chickens with Sleek Compact Master Button
  const feedAllChickens = () => {
    if (seeds < chickens.length) {
      sounds.playBloop();
      const msg = `Il te faut ${chickens.length} graines ! Achète des graines avec tes pièces !`;
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playSuccess();
    setSeeds((s) => s - chickens.length);

    // Feed in wave
    setChickens((prev) => prev.map((c) => ({ ...c, isEating: true })));

    setTimeout(() => {
      setChickens((prev) => prev.map((c) => ({ ...c, isEating: false })));
      const eggsEarned = Math.floor(chickens.length * 0.8) || 1;
      setEggs((prev) => prev + eggsEarned);
      setLastEggChange({ type: 'in', amount: eggsEarned });
      setTimeout(() => setLastEggChange(null), 2000);

      confetti({ particleCount: 50, spread: 70, origin: { y: 0.4 } });
      const eggMsg = `Toutes tes ${chickens.length} poules ont mangé ! +${eggsEarned} beaux œufs frais !`;
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);
    }, 1000);
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

    // Add cash & banknotes
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

    const cheer = `KA-CHING ! Caisse enregistrée pour ${currentCustomer.name} ! +${earnedCoins} pièces et des billets !`;
    onNiaSpeak(cheer);
    doraVoice.speak(cheer);
  };

  // 5. Buy Seeds
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut 3 pièces pour acheter des graines !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playPop();
    setCoins((prev) => prev - 3);
    setSeeds((prev) => prev + 10);
    setLastCashChange({ type: 'out', amount: 3 });
    setTimeout(() => setLastCashChange(null), 2000);

    const msg = "+10 graines achetées pour tes poules !";
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
            <h2 className="card-main-title">La Ferme Géante aux 30+ Poules & Caisse 3D</h2>
            <p className="card-subtitle">Immense pré de poules Pixar, clients au guichet et caisse enregistreuse tactile !</p>
          </div>
        </div>

        {/* Global Wallet Bar */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill bill-pill" title="Billets de banque">
            <Banknote size={18} color="#2ecc71" />
            <span>{bills} Billets 💵</span>
          </div>
          <div className="wallet-pill gold-pill" title="Pièces d'or">
            <Coins size={18} color="#f1c40f" />
            <span>{coins} Pièces 🪙</span>
          </div>
          <div className="wallet-pill seed-pill">
            <span>🌾 {seeds} Graines</span>
          </div>
          <div className="wallet-pill egg-pill">
            <span>🥚 {eggs} Œufs</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. MASSIVE EXPANSIVE MEADOW (ALMOST HALF THE SCREEN)      */}
      {/* ========================================================= */}
      <div className="pasture-canvas-field expansive-pasture mega-farm-pasture">
        {/* Sleek, proportionate top control bar inside meadow */}
        <div className="pasture-header-row sleek-dock-bar">
          <div className="pasture-status-badges">
            <span className="pasture-tag glowing-tag">
              🐔 <strong>{chickens.length}</strong> Poules Pixar {chickens.length >= 30 ? '🎉 OBJECTIF 30+ ATTEINT !' : '(Objectif : 30+)'}
            </span>
          </div>

          {/* Compact Sleek Action Controls */}
          <div className="sleek-pasture-actions">
            <button
              onClick={feedAllChickens}
              className="sleek-feed-pill-btn"
              title="Nourrir toutes les poules d'un seul coup"
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

        {/* 30+ Animated 3D Pixar Chickens Running Freely Across the Entire Meadow */}
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
                ❤️ Miam !
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
      {/* 2. LOWER SECTION: EGGS SILO + 3D CASH REGISTER + CASH SILO */}
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

        {/* --- RIGHT: BANKNOTES & COINS VAULT SILO --- */}
        <div className="visual-silo-column cash-silo compact-silo">
          <div className="silo-header">
            <h4>💵 Billets & Pièces</h4>
            <span className="silo-count-badge gold">{coins} 🪙</span>
          </div>

          {lastCashChange && (
            <div className={`flow-indicator-banner ${lastCashChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastCashChange.type === 'in' ? (
                <span><ArrowDownRight size={14} /> +{lastCashChange.amount} 🪙 Vente</span>
              ) : (
                <span><ArrowUpRight size={14} /> -{lastCashChange.amount} 🪙 Achat</span>
              )}
            </div>
          )}

          {/* Physical Banknotes & Coins Stack */}
          <div className="cash-stack-display compact-cash-stack">
            <div className="bills-stack-visual">
              {Array.from({ length: Math.min(bills, 5) }).map((_, i) => (
                <div key={i} className="physical-bill-bundle animate-pop mini-bill">
                  <span className="bill-currency-tag">$</span>
                  <span className="bill-center-art">💵 5</span>
                </div>
              ))}
            </div>

            <div className="coins-visual-pyramid mini-coins">
              {Array.from({ length: Math.min(Math.ceil(coins / 3), 14) }).map((_, i) => (
                <span key={i} className="stacked-coin-icon mini-coin-icon animate-pop">
                  🪙
                </span>
              ))}
            </div>
          </div>

          {/* Quick Buy Seeds */}
          <div className="silo-shop-controls">
            <button
              onClick={buySeeds}
              className="silo-buy-action-btn luxury-shop-btn compact-shop-btn"
              disabled={coins < 3}
            >
              <span>🌾 +10 Graines</span>
              <span className="price-tag">-3 🪙</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
