import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, Store, Users, ArrowUpRight, ArrowDownRight, Bell } from 'lucide-react';

const HUMAN_CUSTOMERS = [
  { id: 'lea', name: 'La Petite Léa', emoji: '👧🏾', role: 'Voisine', wants: 1 },
  { id: 'thomas', name: 'Monsieur Thomas', emoji: '👨‍🦱', role: 'Voisin', wants: 2 },
  { id: 'sarah', name: 'Madame Sarah', emoji: '👩‍🦰', role: 'Maman', wants: 1 },
  { id: 'mamie', name: 'Mamie Rose', emoji: '👵🏽', role: 'Grand-mère', wants: 3 },
  { id: 'lucas', name: 'Lucas le Cuisinier', emoji: '🧑‍🍳', role: 'Chef', wants: 2 },
  { id: 'noa', name: 'Le Petit Noa', emoji: '👦🏻', role: 'Copain d\'école', wants: 1 },
  { id: 'david', name: 'Docteur David', emoji: '👨‍⚕️', role: 'Médecin', wants: 2 },
];

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(15);
  const [seeds, setSeeds] = useState(4);
  const [eggs, setEggs] = useState(2); // Start with 2 visible eggs in the rack
  const [lastCashChange, setLastCashChange] = useState(null); // { type: 'in' | 'out', amount: 10 }
  const [lastEggChange, setLastEggChange] = useState(null); // { type: 'in' | 'out', amount: 1 }

  // Running Chickens
  const [chickens, setChickens] = useState([
    { id: 1, name: 'Poupette', x: 30, y: 40, isEating: false, flip: false },
    { id: 2, name: 'Cocotte', x: 65, y: 60, isEating: false, flip: true },
  ]);

  // Real human customer queue at front desk
  const [customerLine, setCustomerLine] = useState([
    { id: 'c1', name: 'Madame Sarah', emoji: '👩‍🦰', role: 'Maman', wants: 1 },
    { id: 'c2', name: 'Monsieur Thomas', emoji: '👨‍🦱', role: 'Voisin', wants: 2 },
  ]);

  useEffect(() => {
    const welcome = "Bienvenue au marché de la ferme ! Des vrais voisins et clients font la queue au comptoir pour acheter tes bons œufs frais !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);

    // Chickens roaming
    const moveInterval = setInterval(() => {
      setChickens((prev) =>
        prev.map((c) => {
          const newTargetX = Math.max(12, Math.min(85, c.x + (Math.random() - 0.5) * 30));
          const newTargetY = Math.max(20, Math.min(75, c.y + (Math.random() - 0.5) * 25));
          return {
            ...c,
            x: newTargetX,
            y: newTargetY,
            flip: newTargetX < c.x,
          };
        })
      );
    }, 2800);

    // Human customers arriving periodically
    const custInterval = setInterval(() => {
      setCustomerLine((prev) => {
        if (prev.length < 5) {
          const randomPerson = HUMAN_CUSTOMERS[Math.floor(Math.random() * HUMAN_CUSTOMERS.length)];
          const newCustomer = {
            id: Math.random().toString(),
            name: randomPerson.name,
            emoji: randomPerson.emoji,
            role: randomPerson.role,
            wants: Math.random() > 0.6 ? 2 : 1,
          };
          return [...prev, newCustomer];
        }
        return prev;
      });
    }, 5500);

    return () => {
      clearInterval(moveInterval);
      clearInterval(custInterval);
    };
  }, []);

  // 1. Feed Chicken & Lay Egg (+1 Egg IN)
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Achète un sac de graines au magasin avec tes pièces !";
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

      // Egg added into visual rack
      setEggs((prev) => prev + 1);
      setLastEggChange({ type: 'in', amount: 1 });
      setTimeout(() => setLastEggChange(null), 2000);

      confetti({ particleCount: 30, spread: 45, origin: { y: 0.6 } });
      const eggMsg = "Cot cot codet ! Un nouvel œuf s'ajoute sur la pile !";
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);
    }, 1100);
  };

  const feedAllChickens = () => {
    if (seeds < chickens.length) {
      const msg = "Il te faut plus de graines pour nourrir toutes tes poules !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    chickens.forEach((c, idx) => {
      setTimeout(() => feedChicken(c.id), idx * 350);
    });
  };

  // 2. Serve Real Human Customer (Eggs OUT, Cash IN)
  const serveNextCustomer = () => {
    if (customerLine.length === 0) {
      doraVoice.speak("Il n'y a pas de client pour l'instant ! Attends un peu, un nouveau voisin va arriver !");
      return;
    }

    const currentCustomer = customerLine[0];

    if (eggs < currentCustomer.wants) {
      sounds.playBloop();
      const needMsg = `${currentCustomer.name} veut acheter ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} ! Donne des graines aux poules pour en récolter !`;
      onNiaSpeak(needMsg);
      doraVoice.speak(needMsg);
      return;
    }

    sounds.playSuccess();
    // Eggs leave rack
    setEggs((prev) => prev - currentCustomer.wants);
    setLastEggChange({ type: 'out', amount: currentCustomer.wants });

    // Cash enters pile
    const earned = currentCustomer.wants * 6;
    setCoins((prev) => prev + earned);
    setLastCashChange({ type: 'in', amount: earned });

    setTimeout(() => {
      setLastEggChange(null);
      setLastCashChange(null);
    }, 2200);

    // Remove customer
    setCustomerLine((prev) => prev.slice(1));
    confetti({ particleCount: 50, spread: 60 });
    if (onRewardStar) onRewardStar();

    const cheer = `Ding ! Merci ${currentCustomer.name} ! ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} vendu${currentCustomer.wants > 1 ? 's' : ''}, et +${earned} pièces d'or sur la pile !`;
    onNiaSpeak(cheer);
    doraVoice.speak(cheer);
  };

  // 3. Buy Seeds (Cash OUT, Seeds IN)
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut 3 pièces d'or ! Sers les clients pour gagner de l'argent !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playPop();
    setCoins((prev) => prev - 3);
    setSeeds((prev) => prev + 4);
    setLastCashChange({ type: 'out', amount: 3 });
    setTimeout(() => setLastCashChange(null), 2000);

    const msg = "-3 pièces pour acheter 4 sacs de graines !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // 4. Buy Chicken (Cash OUT, Chicken IN)
  const buyChicken = () => {
    if (coins < 10) {
      sounds.playBloop();
      const msg = "Une poule coûte 10 pièces ! Continue de vendre des œufs aux voisins !";
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
      x: 35 + Math.random() * 30,
      y: 35 + Math.random() * 30,
      isEating: false,
      flip: Math.random() > 0.5,
    };
    setChickens((prev) => [...prev, newHen]);
    confetti({ particleCount: 75, spread: 65 });
    if (onRewardStar) onRewardStar();

    const msg = "Hourra ! -10 pièces et une nouvelle vraie poule court dans ton pré !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  return (
    <div className="center-activity-card premium-farm-experience">
      {/* Top Farm Title Header */}
      <div className="activity-card-header farm-header-theme">
        <div className="header-info">
          <span className="card-badge-icon">🌾</span>
          <div>
            <h2 className="card-main-title">La Ferme aux Œufs & Vrais Voisins</h2>
            <p className="card-subtitle">Regarde les œufs et les pièces entrer et sortir en direct !</p>
          </div>
        </div>

        {/* Global Stock Stats */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill gold-pill">
            <Coins size={20} color="#f1c40f" />
            <span>{coins} 🪙 Pièces</span>
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
        {/* ================= LEFT COLUMN: THE VISUAL EGG TRAY SILO ================= */}
        <div className="visual-silo-column egg-silo">
          <div className="silo-header">
            <h4>🥚 Casier à Œufs</h4>
            <span className="silo-count-badge">{eggs} en stock</span>
          </div>

          {/* Visual Indicators of Flow */}
          {lastEggChange && (
            <div className={`flow-indicator-banner ${lastEggChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastEggChange.type === 'in' ? (
                <span><ArrowDownRight size={16} /> +{lastEggChange.amount} Œuf pondu !</span>
              ) : (
                <span><ArrowUpRight size={16} /> -{lastEggChange.amount} Vendu !</span>
              )}
            </div>
          )}

          {/* Stacked Eggs Visualization Rack */}
          <div className="egg-stack-rack">
            {eggs === 0 ? (
              <p className="empty-rack-hint">Casier vide... Donne des graines à tes poules !</p>
            ) : (
              <div className="rack-eggs-grid">
                {Array.from({ length: Math.min(eggs, 24) }).map((_, i) => (
                  <span key={i} className="rack-egg-unit animate-pop" title={`Œuf #${i + 1}`}>
                    🥚
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="silo-footer-text">
            {eggs > 24 ? `+ ${eggs - 24} autres œufs dans la réserve !` : 'Œufs prêts pour les clients'}
          </p>
        </div>

        {/* ================= CENTER COLUMN: THE PASTURE & CUSTOMER COUNTER ================= */}
        <div className="center-interactive-farm-hub">
          {/* 1. Chickens Running in Pasture */}
          <div className="pasture-canvas-field">
            <div className="pasture-header-row">
              <span className="pasture-tag">🏡 Pré des Poules ({chickens.length} poules en liberté)</span>
              {chickens.length > 1 && (
                <button onClick={feedAllChickens} className="feed-all-action-btn">
                  🌾 Nourrir TOUTES les poules !
                </button>
              )}
            </div>

            <div className="field-grass-tufts">🌱 🌼 🌻 🌱 🌼</div>
            <div className="field-haystack">🌾</div>

            {chickens.map((chick) => (
              <div
                key={chick.id}
                onClick={() => feedChicken(chick.id)}
                className={`running-chicken-entity ${chick.isEating ? 'eating-state' : ''}`}
                style={{
                  left: `${chick.x}%`,
                  top: `${chick.y}%`,
                  transform: `translate(-50%, -50%) scaleX(${chick.flip ? -1 : 1})`,
                  transition: 'left 2.6s linear, top 2.6s linear',
                }}
              >
                <div className="chicken-cluck-bubble" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
                  {chick.isEating ? '❤️ Miam !' : '🌾 Graines !'}
                </div>
                <span className="chicken-sprite-icon">🐔</span>
                <span className="chicken-name-tag" style={{ transform: `scaleX(${chick.flip ? -1 : 1})` }}>
                  {chick.name}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Front Desk Counter with REAL HUMAN Customers Queue */}
          <div className="front-desk-counter">
            <div className="counter-sign">
              <Store size={22} />
              <div>
                <h4>Comptoir de Vente des Vrais Voisins</h4>
                <p>File d'attente : <strong>{customerLine.length} personnes du village</strong></p>
              </div>
            </div>

            {/* Visual Real Human Customer Queue */}
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
                    <span className="customer-avatar-emoji animate-bounce-soft">{cust.emoji}</span>
                    <span className="customer-name">{cust.name}</span>
                    <span className="customer-role-sub">({cust.role})</span>
                    {idx === 0 && <span className="next-tag">À servir ! 🛎️</span>}
                  </div>
                ))
              )}
            </div>

            {/* Serve Button */}
            <button
              onClick={serveNextCustomer}
              className={`bell-serve-button ${eggs > 0 && customerLine.length > 0 ? 'ready-to-serve' : ''}`}
            >
              <Bell size={24} /> SERVIR LE PREMIER VOISIN ! (Ding !) 🛎️
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: THE VISUAL CASH & COINS STACK ================= */}
        <div className="visual-silo-column cash-silo">
          <div className="silo-header">
            <h4>💰 Pile d'Argent</h4>
            <span className="silo-count-badge gold">{coins} 🪙</span>
          </div>

          {/* Flow Indicator (Cash In vs Out) */}
          {lastCashChange && (
            <div className={`flow-indicator-banner ${lastCashChange.type === 'in' ? 'flow-in' : 'flow-out'} animate-pop`}>
              {lastCashChange.type === 'in' ? (
                <span><ArrowDownRight size={16} /> +{lastCashChange.amount} 🪙 Vente d'œufs !</span>
              ) : (
                <span><ArrowUpRight size={16} /> -{lastCashChange.amount} 🪙 Achat ferme !</span>
              )}
            </div>
          )}

          {/* Visual Banknotes & Coins Stack */}
          <div className="cash-stack-display">
            <div className="coins-visual-pyramid">
              {Array.from({ length: Math.min(Math.ceil(coins / 3), 16) }).map((_, i) => (
                <span key={i} className="stacked-coin-icon animate-pop">
                  🪙
                </span>
              ))}
            </div>
            <p className="cash-status-note">
              {coins >= 10 ? '💵 Beaucoup d\'argent gagné !' : 'Gagne des pièces en vendant des œufs !'}
            </p>
          </div>

          {/* Shop Upgrades Buttons */}
          <div className="silo-shop-controls">
            <button
              onClick={buySeeds}
              className="silo-buy-action-btn"
              disabled={coins < 3}
            >
              <span>🌾 +4 Sacs Graines</span>
              <span className="price-tag">-3 🪙</span>
            </button>

            <button
              onClick={buyChicken}
              className="silo-buy-action-btn hen-action"
              disabled={coins < 10}
            >
              <span>🐔 +1 Nouvelle Poule</span>
              <span className="price-tag">-10 🪙</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
