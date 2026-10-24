import React, { useState, useEffect, useRef } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, Plus, Bell, Heart, Store, Users } from 'lucide-react';

const CUSTOMER_POOL = [
  { id: 'bunny', name: 'Lapinou', emoji: '🐰', desire: 1 },
  { id: 'bear', name: 'Nounours', emoji: '🐻', desire: 2 },
  { id: 'cat', name: 'Mistigri', emoji: '🐱', desire: 1 },
  { id: 'dog', name: 'Filou', emoji: '🐶', desire: 2 },
  { id: 'fox', name: 'Rox', emoji: '🦊', desire: 1 },
];

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(15);
  const [seeds, setSeeds] = useState(4);
  const [eggsInBasket, setEggsInBasket] = useState(0);
  const [moneyPile, setMoneyPile] = useState(0); // Gold pile waiting at front desk

  // Running Chickens with pasture coordinates
  const [chickens, setChickens] = useState([
    { id: 1, name: 'Poupette', x: 25, y: 35, targetX: 25, targetY: 35, isEating: false, flip: false },
    { id: 2, name: 'Cocotte', x: 65, y: 55, targetX: 65, targetY: 55, isEating: false, flip: true },
  ]);

  // Customer line waiting at the front desk
  const [customerLine, setCustomerLine] = useState([
    { id: 'c1', name: 'Lapinou', emoji: '🐰', wants: 1 },
    { id: 'c2', name: 'Nounours', emoji: '🐻', wants: 2 },
  ]);

  useEffect(() => {
    const welcome = "Bienvenue dans ta grande ferme ! Regarde tes poules courir dans le pré ! Les clients font la queue au comptoir pour acheter tes œufs !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);

    // Chickens wandering loop
    const moveInterval = setInterval(() => {
      setChickens((prev) =>
        prev.map((c) => {
          const newTargetX = Math.max(10, Math.min(85, c.x + (Math.random() - 0.5) * 35));
          const newTargetY = Math.max(15, Math.min(80, c.y + (Math.random() - 0.5) * 30));
          return {
            ...c,
            targetX: newTargetX,
            targetY: newTargetY,
            x: newTargetX,
            y: newTargetY,
            flip: newTargetX < c.x,
          };
        })
      );
    }, 2800);

    // New customers arriving at the front desk every 5 seconds
    const customerInterval = setInterval(() => {
      setCustomerLine((prev) => {
        if (prev.length < 5) {
          const randomCust = CUSTOMER_POOL[Math.floor(Math.random() * CUSTOMER_POOL.length)];
          const newCustomer = {
            id: Math.random().toString(),
            name: randomCust.name,
            emoji: randomCust.emoji,
            wants: Math.random() > 0.5 ? 2 : 1,
          };
          return [...prev, newCustomer];
        }
        return prev;
      });
    }, 5000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(customerInterval);
    };
  }, []);

  // 1. Feed Chicken & Lay Egg
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Achète des graines à la boutique pour nourrir tes poules !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playPop();
    setSeeds((s) => s - 1);

    // Chicken eats
    setChickens((prev) =>
      prev.map((c) => (c.id === chickenId ? { ...c, isEating: true } : c))
    );

    doraVoice.speak("Cot cot ! Miam les bonnes graines !");

    // Lays egg
    setTimeout(() => {
      sounds.playSuccess();
      setChickens((prev) =>
        prev.map((c) => (c.id === chickenId ? { ...c, isEating: false } : c))
      );
      setEggsInBasket((e) => e + 1);
      confetti({ particleCount: 30, spread: 45, origin: { y: 0.6 } });

      const eggMsg = "Cot cot codet ! La poule a pondu un bel œuf ! Les clients au comptoir vont être ravis !";
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);
    }, 1100);
  };

  // 2. Feed all chickens at once
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

  // 3. Serve Customer at Front Desk
  const serveNextCustomer = () => {
    if (customerLine.length === 0) {
      doraVoice.speak("Il n'y a pas de client pour l'instant ! Attends un peu, ils vont arriver !");
      return;
    }

    const currentCustomer = customerLine[0];

    if (eggsInBasket < currentCustomer.wants) {
      sounds.playBloop();
      const needMsg = `${currentCustomer.name} veut ${currentCustomer.wants} œuf${currentCustomer.wants > 1 ? 's' : ''} ! Nourris tes poules pour avoir des œufs !`;
      onNiaSpeak(needMsg);
      doraVoice.speak(needMsg);
      return;
    }

    // Process sale!
    sounds.playSuccess();
    setEggsInBasket((e) => e - currentCustomer.wants);
    const saleAmount = currentCustomer.wants * 6; // 6 coins per egg
    setMoneyPile((m) => m + saleAmount);

    // Remove served customer from line
    setCustomerLine((prev) => prev.slice(1));
    confetti({ particleCount: 50, spread: 60 });
    if (onRewardStar) onRewardStar();

    const cheer = `Ding ! Merci ${currentCustomer.name} ! L'argent s'accumule sur le comptoir !`;
    onNiaSpeak(cheer);
    doraVoice.speak(cheer);
  };

  // 4. Collect Money Pile into Wallet
  const collectMoneyPile = () => {
    if (moneyPile <= 0) return;
    sounds.playSuccess();
    setCoins((c) => c + moneyPile);
    const earned = moneyPile;
    setMoneyPile(0);
    confetti({ particleCount: 60, spread: 70 });

    const msg = `Youpi ! Tu as ramassé ${earned} pièces d'or ! Ta ferme est très populaire !`;
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // 5. Buy Seeds (3 coins)
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut 3 pièces d'or pour acheter des graines !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playPop();
    setCoins((c) => c - 3);
    setSeeds((s) => s + 4);
    const msg = "Graines achetées ! 4 sacs prêts pour tes poules !";
    onNiaSpeak(msg);
    doraVoice.speak(msg);
  };

  // 6. Buy Chicken (10 coins) -> spawns running chicken immediately
  const buyChicken = () => {
    if (coins < 10) {
      sounds.playBloop();
      const msg = "Une poule coûte 10 pièces ! Sers les clients pour gagner de l'argent !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    sounds.playSuccess();
    setCoins((c) => c - 10);
    const newHen = {
      id: Date.now(),
      name: `Cocotte ${chickens.length + 1}`,
      x: 30 + Math.random() * 40,
      y: 30 + Math.random() * 40,
      targetX: 50,
      targetY: 50,
      isEating: false,
      flip: Math.random() > 0.5,
    };
    setChickens((prev) => [...prev, newHen]);
    confetti({ particleCount: 75, spread: 65 });
    if (onRewardStar) onRewardStar();

    const msg = "Hourra ! Une nouvelle poule court dans ton pré ! Cot cot cot !";
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
            <h2 className="card-main-title">La Ferme Magique & Le Marché</h2>
            <p className="card-subtitle">Poules qui courent, file d'attente de clients & montagne de pièces !</p>
          </div>
        </div>

        {/* Real-time Wallet */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill gold-pill" onClick={collectMoneyPile}>
            <Coins size={22} color="#f1c40f" />
            <span>{coins} 🪙 Pièces</span>
          </div>
          <div className="wallet-pill seed-pill">
            <span>🌾 {seeds} Graines</span>
          </div>
          <div className="wallet-pill egg-pill">
            <span>🥚 {eggsInBasket} Œufs</span>
          </div>
        </div>
      </div>

      <div className="tycoon-world-stage">
        {/* ================= SECTION 1: THE RUNNING CHICKEN PASTURE ================= */}
        <div className="pasture-nature-world">
          <div className="pasture-header-row">
            <span className="pasture-tag">🏡 Pré des Poules ({chickens.length} poules qui courent)</span>
            {chickens.length > 1 && (
              <button onClick={feedAllChickens} className="feed-all-action-btn">
                🌾 Nourrir TOUTES les poules !
              </button>
            )}
          </div>

          {/* Running Chickens Field */}
          <div className="pasture-canvas-field">
            {/* Scenery details */}
            <div className="field-grass-tufts">🌱 🌼 🌻 🌱 🌼</div>
            <div className="field-haystack">🌾</div>

            {/* Dynamic Running Chickens */}
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
        </div>

        {/* ================= SECTION 2: FRONT DESK & CUSTOMER QUEUE ================= */}
        <div className="store-front-desk-section">
          {/* Customer Line at Front Desk */}
          <div className="front-desk-counter">
            <div className="counter-sign">
              <Store size={24} />
              <div>
                <h4>Comptoir de Vente des Œufs</h4>
                <p>File d'attente des clients : <strong>{customerLine.length} en attente</strong></p>
              </div>
            </div>

            {/* Visual Long Queue of Customers */}
            <div className="customer-queue-track">
              {customerLine.length === 0 ? (
                <div className="empty-line-text">
                  <span>En attente de nouveaux clients... 🍃</span>
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
                    {idx === 0 && <span className="next-tag">À servir ! 🛎️</span>}
                  </div>
                ))
              )}
            </div>

            {/* Serve Button */}
            <div className="serve-action-bar">
              <button
                onClick={serveNextCustomer}
                className={`bell-serve-button ${eggsInBasket > 0 && customerLine.length > 0 ? 'ready-to-serve' : ''}`}
              >
                <Bell size={26} /> SERVIR LE CLIENT AU COMPTOIR ! 🛎️
              </button>
            </div>
          </div>

          {/* Money Pile Station & Farm Shop */}
          <div className="desk-sub-panels">
            {/* Pile of Money growing */}
            <div className="money-pile-box" onClick={collectMoneyPile}>
              <div className="pile-header">
                <h4>Montagne de Pièces du Comptoir :</h4>
                <span className="pile-coins-count">{moneyPile} 🪙</span>
              </div>

              <div className="visual-money-stack">
                {moneyPile > 0 ? (
                  <div className="growing-gold-stack animate-pop">
                    <span className="gold-stack-icon">💰🪙💰</span>
                    <button className="collect-pile-btn animate-bounce-soft">
                      🖐️ TOUCHER POUR TOUT RAMASSER !
                    </button>
                  </div>
                ) : (
                  <p className="empty-pile-text">Sers des clients pour empiler les pièces d'or !</p>
                )}
              </div>
            </div>

            {/* Village Farm Shop */}
            <div className="village-farm-shop">
              <h4 className="shop-title">Boutique : Agrandis ta Ferme !</h4>
              <div className="shop-buttons-row">
                <button
                  onClick={buySeeds}
                  className="tycoon-buy-btn"
                  disabled={coins < 3}
                >
                  <span className="t-icon">🌾</span>
                  <span className="t-text">+4 Graines</span>
                  <span className="t-price">3 🪙</span>
                </button>

                <button
                  onClick={buyChicken}
                  className="tycoon-buy-btn hen-btn"
                  disabled={coins < 10}
                >
                  <span className="t-icon">🐔</span>
                  <span className="t-text">+1 Poule qui court</span>
                  <span className="t-price">10 🪙</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
