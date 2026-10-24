import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, Store, Users, ArrowUpRight, ArrowDownRight, Bell, Banknote } from 'lucide-react';

// Cute 3D Pixar-style Mini-Me Customers
const PIXAR_CUSTOMERS = [
  { id: 'lea', name: 'Léa', role: 'Petite Voisine', wants: 1, skin: '#A56336', hair: '#22160F', hairType: 'afro', shirt: '#FF7675' },
  { id: 'thomas', name: 'Thomas', role: 'Voisin Jardinier', wants: 2, skin: '#E0AC69', hair: '#5C3818', hairType: 'short', shirt: '#0984E3' },
  { id: 'sarah', name: 'Sarah', role: 'Maman du quartier', wants: 1, skin: '#F1C27D', hair: '#C0392B', hairType: 'ponytail', shirt: '#FD79A8' },
  { id: 'lucas', name: 'Lucas', role: 'Chef Cuisinier', wants: 2, skin: '#8D5524', hair: '#1B1464', hairType: 'chefHat', shirt: '#FFFFFF' },
  { id: 'noa', name: 'Noa', role: 'Copain d\'école', wants: 1, skin: '#FFDBAC', hair: '#2C3E50', hairType: 'cap', shirt: '#F1C40F' },
  { id: 'mamie', name: 'Mamie Rose', role: 'Grand-mère gâteaux', wants: 3, skin: '#C68642', hair: '#BDC3C7', hairType: 'bun', shirt: '#9B59B6' },
];

// Helper component for Pixar 3D Mini-Me Avatar
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

// 3D Pixar-style Chicken SVG Component
function PixarChickenGraphic({ chick }) {
  return (
    <svg viewBox="0 0 100 95" className="pixar-chicken-3d-svg">
      <defs>
        {/* 3D Round Chicken Body Shading */}
        <radialGradient id={`chickBody_${chick.id}`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FFF9E6" />
          <stop offset="100%" stopColor="#F5CD79" />
        </radialGradient>
        {/* Wing gradient */}
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

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(25);
  const [bills, setBills] = useState(2); // Physical green banknotes ($5 bills)
  const [seeds, setSeeds] = useState(6);
  const [eggs, setEggs] = useState(3);
  const [lastCashChange, setLastCashChange] = useState(null);
  const [lastEggChange, setLastEggChange] = useState(null);

  // Expansive Pasture with 3D Pixar Chickens
  const [chickens, setChickens] = useState([
    { id: 1, name: 'Poupette', x: 25, y: 35, isEating: false, flip: false },
    { id: 2, name: 'Cocotte', x: 55, y: 65, isEating: false, flip: true },
    { id: 3, name: 'Plumette', x: 75, y: 40, isEating: false, flip: false },
  ]);

  // Real human neighbors line
  const [customerLine, setCustomerLine] = useState([
    { ...PIXAR_CUSTOMERS[0], wants: 1 },
    { ...PIXAR_CUSTOMERS[1], wants: 2 },
  ]);

  useEffect(() => {
    const welcome = "Bienvenue dans ta grande ferme ! Regarde tes vraies poules courir dans l'herbe ! Les voisins du quartier arrivent pour acheter tes œufs !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);

    // Chickens running & wandering around larger pasture
    const moveInterval = setInterval(() => {
      setChickens((prev) =>
        prev.map((c) => {
          const newTargetX = Math.max(10, Math.min(88, c.x + (Math.random() - 0.5) * 35));
          const newTargetY = Math.max(18, Math.min(80, c.y + (Math.random() - 0.5) * 30));
          return {
            ...c,
            x: newTargetX,
            y: newTargetY,
            flip: newTargetX < c.x,
          };
        })
      );
    }, 2500);

    // Real neighbors arriving
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
    }, 5000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(custInterval);
    };
  }, []);

  // 1. Feed Single Chicken
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Achète un nouveau sac avec tes billets et pièces !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playPop();
    setSeeds((s) => s - 1);

    setChickens((prev) =>
      prev.map((c) => (c.id === chickenId ? { ...c, isEating: true } : c))
    );

    doraVoice.speak("Cot cot ! La poule mange les bonnes graines !");

    setTimeout(() => {
      sounds.playSuccess();
      setChickens((prev) =>
        prev.map((c) => (c.id === chickenId ? { ...c, isEating: false } : c))
      );

      setEggs((prev) => prev + 1);
      setLastEggChange({ type: 'in', amount: 1 });
      setTimeout(() => setLastEggChange(null), 2000);

      confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
      const eggMsg = "Cot cot codet ! Un bel œuf frais dans le casier !";
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);
    }, 1000);
  };

  // 2. Feed ALL Chickens with Shiny Master Button
  const feedAllChickens = () => {
    if (seeds < chickens.length) {
      const msg = "Achète plus de graines pour nourrir toutes tes poules en même temps !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playSuccess();
    chickens.forEach((c, idx) => {
      setTimeout(() => feedChicken(c.id), idx * 300);
    });
  };

  // 3. Serve Real Human Customer (Eggs leave, Bills & Coins enter!)
  const serveNextCustomer = () => {
    if (customerLine.length === 0) {
      doraVoice.speak("Il n'y a personne pour l'instant ! Attends un instant, un nouveau voisin arrive !");
      return;
    }

    const currentCustomer = customerLine[0];

    if (eggs < currentCustomer.wants) {
      sounds.playBloop();
      const needMsg = `${currentCustomer.name} veut ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} ! Donne des graines aux poules pour en avoir !`;
      onNiaSpeak(needMsg);
      doraVoice.speak(needMsg);
      return;
    }

    sounds.playSuccess();
    // Eggs leave rack
    setEggs((prev) => prev - currentCustomer.wants);
    setLastEggChange({ type: 'out', amount: currentCustomer.wants });

    // Earn both banknotes and coins!
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
    confetti({ particleCount: 60, spread: 65 });
    if (onRewardStar) onRewardStar();

    const cheer = `Ding ! Merci ${currentCustomer.name} ! ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} vendu${currentCustomer.wants > 1 ? 's' : ''} ! L'argent et les billets augmentent !`;
    onNiaSpeak(cheer);
    doraVoice.speak(cheer);
  };

  // 4. Buy Seeds (-3 Coins)
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut 3 pièces ! Vends des œufs pour en gagner !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playPop();
    setCoins((prev) => prev - 3);
    setSeeds((prev) => prev + 5);
    setLastCashChange({ type: 'out', amount: 3 });
    setTimeout(() => setLastCashChange(null), 2000);

    const msg = "-3 pièces pour 5 grands sacs de graines !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // 5. Buy 3D Pixar Chicken (-10 Coins or Bills)
  const buyChicken = () => {
    if (coins < 10) {
      sounds.playBloop();
      const msg = "Une nouvelle poule coûte 10 pièces !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playSuccess();
    setCoins((prev) => prev - 10);
    setLastCashChange({ type: 'out', amount: 10 });
    setTimeout(() => setLastCashChange(null), 2000);

    const newHen = {
      id: Date.now(),
      name: `Cocotte ${chickens.length + 1}`,
      x: 30 + Math.random() * 45,
      y: 30 + Math.random() * 40,
      isEating: false,
      flip: Math.random() > 0.5,
    };
    setChickens((prev) => [...prev, newHen]);
    confetti({ particleCount: 80, spread: 70 });
    if (onRewardStar) onRewardStar();

    const msg = "Hourra ! Une nouvelle vraie poule Pixar court dans ton pré !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  return (
    <div className="center-activity-card premium-farm-experience">
      {/* Farm Top Banner */}
      <div className="activity-card-header farm-header-theme">
        <div className="header-info">
          <span className="card-badge-icon">🌾</span>
          <div>
            <h2 className="card-main-title">La Grande Ferme aux Œufs & Vrais Voisins</h2>
            <p className="card-subtitle">Poules Pixar animées, clients réels, billets et pièces qui s'empilent !</p>
          </div>
        </div>

        {/* Global Wallet Bar */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill bill-pill" title="Billets de banque">
            <Banknote size={20} color="#2ecc71" />
            <span>{bills} Billets 💵</span>
          </div>
          <div className="wallet-pill gold-pill" title="Pièces d'or">
            <Coins size={20} color="#f1c40f" />
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

      <div className="farm-visual-economic-arena">
        {/* ================= LEFT: EGG SILO RACK ================= */}
        <div className="visual-silo-column egg-silo">
          <div className="silo-header">
            <h4>🥚 Casier à Œufs</h4>
            <span className="silo-count-badge">{eggs} récoltés</span>
          </div>

          {lastEggChange && (
            <div className={`flow-indicator-banner ${lastEggChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastEggChange.type === 'in' ? (
                <span><ArrowDownRight size={16} /> +{lastEggChange.amount} Œuf pondu !</span>
              ) : (
                <span><ArrowUpRight size={16} /> -{lastEggChange.amount} Vendu !</span>
              )}
            </div>
          )}

          <div className="egg-stack-rack">
            {eggs === 0 ? (
              <p className="empty-rack-hint">Casier vide... Donne des graines à tes poules !</p>
            ) : (
              <div className="rack-eggs-grid">
                {Array.from({ length: Math.min(eggs, 28) }).map((_, i) => (
                  <span key={i} className="rack-egg-unit animate-pop">
                    🥚
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="silo-footer-text">
            {eggs > 28 ? `+ ${eggs - 28} dans la réserve` : 'Prêts pour les clients !'}
          </p>
        </div>

        {/* ================= CENTER: EXPANSIVE PASTURE & FRONT DESK ================= */}
        <div className="center-interactive-farm-hub">
          {/* 1. Large Expansive Pasture with 3D Pixar Chickens */}
          <div className="pasture-canvas-field expansive-pasture">
            <div className="pasture-header-row">
              <span className="pasture-tag">🏡 Pré des Poules ({chickens.length} poules qui courent)</span>
              
              {/* Ultra-Juicy Feed All Button */}
              {chickens.length > 1 && (
                <button onClick={feedAllChickens} className="feed-all-action-btn luxury-feed-btn animate-pop">
                  🌾 NOURRIR TOUTES LES POULES ENSEMBLE ! ✨
                </button>
              )}
            </div>

            {/* Scenery details */}
            <div className="field-grass-tufts">🌱 🌼 🌻 🌾 🌱 🌼 🌻</div>
            <div className="farm-wooden-coop">🏡 Poulailler</div>

            {/* Animated 3D Pixar Chickens Running */}
            {chickens.map((chick) => (
              <div
                key={chick.id}
                onClick={() => feedChicken(chick.id)}
                className={`running-chicken-entity ${chick.isEating ? 'eating-state' : ''}`}
                style={{
                  left: `${chick.x}%`,
                  top: `${chick.y}%`,
                  transform: `translate(-50%, -50%) scaleX(${chick.flip ? -1 : 1})`,
                  transition: 'left 2.5s ease-in-out, top 2.5s ease-in-out',
                }}
              >
                <div className="chicken-cluck-bubble" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
                  {chick.isEating ? '❤️ Miam !' : '🌾 Graines !'}
                </div>
                <div className="pixar-chicken-box">
                  <PixarChickenGraphic chick={chick} />
                </div>
                <span className="chicken-name-tag" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
                  {chick.name}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Front Desk with Real 3D Pixar Mini-Me Customers */}
          <div className="front-desk-counter luxury-counter">
            <div className="counter-sign">
              <Store size={26} color="#d35400" />
              <div>
                <h4>Comptoir de Vente des Vrais Voisins</h4>
                <p>File d'attente : <strong>{customerLine.length} personnes du village</strong></p>
              </div>
            </div>

            {/* Visual Queue of Real Human Mini-Mes */}
            <div className="customer-queue-track">
              {customerLine.length === 0 ? (
                <div className="empty-line-text">
                  <span>En attente de nouveaux voisins... 🍃</span>
                </div>
              ) : (
                customerLine.map((cust, idx) => (
                  <div
                    key={cust.id}
                    className={`queue-customer-bubble animate-pop ${idx === 0 ? 'first-in-line' : ''}`}
                    onClick={serveNextCustomer}
                  >
                    <div className="customer-order-tag">
                      Veut {cust.wants} 🥚
                    </div>
                    {/* 3D Pixar Mini-Me Avatar */}
                    <div className="customer-avatar-minime animate-bounce-soft">
                      <PixarMiniMe person={cust} />
                    </div>
                    <span className="customer-name">{cust.name}</span>
                    <span className="customer-role-sub">{cust.role}</span>
                    {idx === 0 && <span className="next-tag">À servir ! 🛎️</span>}
                  </div>
                ))
              )}
            </div>

            {/* Big Tactile Bell Serve Button */}
            <button
              onClick={serveNextCustomer}
              className={`bell-serve-button luxury-serve-btn ${eggs > 0 && customerLine.length > 0 ? 'ready-to-serve' : ''}`}
            >
              <Bell size={28} /> SERVIR LE PREMIER CLIENT ! (Ding !) 🛎️
            </button>
          </div>
        </div>

        {/* ================= RIGHT: BANKNOTES & COINS SILO ================= */}
        <div className="visual-silo-column cash-silo">
          <div className="silo-header">
            <h4>💵 Billets & Pièces</h4>
            <span className="silo-count-badge gold">{coins} 🪙</span>
          </div>

          {lastCashChange && (
            <div className={`flow-indicator-banner ${lastCashChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastCashChange.type === 'in' ? (
                <span><ArrowDownRight size={16} /> +{lastCashChange.amount} 🪙 Vente !</span>
              ) : (
                <span><ArrowUpRight size={16} /> -{lastCashChange.amount} 🪙 Achat !</span>
              )}
            </div>
          )}

          {/* Physical Banknotes & Gold Coins Visual Stack */}
          <div className="cash-stack-display luxury-cash-rack">
            {/* Visual Banknotes Bundles */}
            <div className="bills-stack-visual">
              {Array.from({ length: Math.min(bills, 6) }).map((_, i) => (
                <div key={i} className="physical-bill-bundle animate-pop">
                  <span className="bill-currency-tag">$</span>
                  <span className="bill-center-art">💵 5</span>
                </div>
              ))}
            </div>

            {/* Visual Coins Pyramid */}
            <div className="coins-visual-pyramid">
              {Array.from({ length: Math.min(Math.ceil(coins / 3), 16) }).map((_, i) => (
                <span key={i} className="stacked-coin-icon animate-pop">
                  🪙
                </span>
              ))}
            </div>

            <p className="cash-status-note">
              {coins >= 10 ? '💵 Montagne de billets et pièces !' : 'Gagne de l\'argent en servant les voisins !'}
            </p>
          </div>

          {/* Upgraded 3D Shop Buttons */}
          <div className="silo-shop-controls">
            <button
              onClick={buySeeds}
              className="silo-buy-action-btn luxury-shop-btn"
              disabled={coins < 3}
            >
              <span>🌾 +5 Sacs Graines</span>
              <span className="price-tag">-3 🪙</span>
            </button>

            <button
              onClick={buyChicken}
              className="silo-buy-action-btn hen-action luxury-shop-btn"
              disabled={coins < 10}
            >
              <span>🐔 +1 Poule Pixar</span>
              <span className="price-tag">-10 🪙</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
