import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import confetti from 'canvas-confetti';
import { Coins, Sparkles, ShoppingBag, Plus, RotateCcw, Heart } from 'lucide-react';

export default function AnimalFarmGame({ onNiaSpeak, onRewardStar }) {
  const [coins, setCoins] = useState(10); // Start with 10 gold coins
  const [seeds, setSeeds] = useState(3); // Start with 3 bags of seeds
  const [eggs, setEggs] = useState(0); // Eggs laid in coop
  const [chickens, setChickens] = useState([
    { id: 1, name: 'Cocotte', emoji: '🐔', isEating: false, isLaying: false }
  ]);
  const [otherAnimals, setOtherAnimals] = useState([]); // Cows, ducks

  useEffect(() => {
    const welcome = "Bienvenue dans ta ferme magique ! Donne des graines à ta poule, ramasse les œufs et vends-les pour gagner des pièces d'or !";
    onNiaSpeak(welcome);
    doraVoice.speak(welcome);
  }, []);

  // 1. Feed the Chicken
  const feedChicken = (chickenId) => {
    if (seeds <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as plus de graines ! Utilise tes pièces d'or pour acheter des graines au magasin !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playPop();
    setSeeds((s) => s - 1);

    // Animate chicken eating
    setChickens((prev) =>
      prev.map((c) => (c.id === chickenId ? { ...c, isEating: true } : c))
    );

    doraVoice.speak("Cot cot ! Miam les bonnes graines !");

    // After 1.2s, lay an egg!
    setTimeout(() => {
      sounds.playSuccess();
      setChickens((prev) =>
        prev.map((c) => (c.id === chickenId ? { ...c, isEating: false, isLaying: true } : c))
      );
      setEggs((e) => e + 1);

      confetti({ particleCount: 30, spread: 50 });
      const eggMsg = "Cot cot codet ! La poule a pondu un bel œuf tout doré ! Touche l'œuf pour le ramasser !";
      onNiaSpeak(eggMsg);
      doraVoice.speak(eggMsg);

      setTimeout(() => {
        setChickens((prev) =>
          prev.map((c) => (c.id === chickenId ? { ...c, isLaying: false } : c))
        );
      }, 1000);
    }, 1200);
  };

  // 2. Feed all chickens at once
  const feedAll = () => {
    if (seeds < chickens.length) {
      const msg = "Achète plus de graines au magasin pour nourrir toutes tes poules !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }
    chickens.forEach((c, idx) => {
      setTimeout(() => feedChicken(c.id), idx * 400);
    });
  };

  // 3. Sell Eggs at the Animal Crossing Market
  const sellEggs = () => {
    if (eggs <= 0) {
      sounds.playBloop();
      const msg = "Tu n'as pas encore d'œufs ! Nourris d'abord ta poule avec des graines !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playSuccess();
    const earned = eggs * 5; // 5 gold coins per egg
    setCoins((c) => c + earned);
    const soldCount = eggs;
    setEggs(0);

    confetti({ particleCount: 60, spread: 60 });
    if (onRewardStar) onRewardStar();

    const sellMsg = `Bip ! Ding ! Tu as vendu ${soldCount} œuf${soldCount > 1 ? 's' : ''} et gagné ${earned} pièces d'or ! Bravo petit fermier !`;
    onNiaSpeak(sellMsg);
    doraVoice.speak(sellMsg);
  };

  // 4. Shop: Buy Seeds (costs 3 coins)
  const buySeeds = () => {
    if (coins < 3) {
      sounds.playBloop();
      const msg = "Il te faut au moins 3 pièces ! Vends des œufs pour avoir plus de pièces !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playPop();
    setCoins((c) => c - 3);
    setSeeds((s) => s + 3); // 3 bags of seeds for 3 coins
    const buyMsg = "Graines achetées ! Tu as 3 nouveaux sacs de graines pour tes poules !";
    onNiaSpeak(buyMsg);
    doraVoice.speak(buyMsg);
  };

  // 5. Shop: Buy another Chicken (costs 10 coins)
  const buyChicken = () => {
    if (coins < 10) {
      sounds.playBloop();
      const msg = "Une nouvelle poule coûte 10 pièces ! Vends des œufs pour économiser !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playSuccess();
    setCoins((c) => c - 10);
    const newChicken = {
      id: Date.now(),
      name: `Poule ${chickens.length + 1}`,
      emoji: chickens.length % 2 === 0 ? '🐔' : '🐣',
      isEating: false,
      isLaying: false,
    };
    setChickens((prev) => [...prev, newChicken]);
    confetti({ particleCount: 80, spread: 70 });
    if (onRewardStar) onRewardStar();

    const newHenMsg = "Youpi ! Une nouvelle poule arrive dans ta ferme ! Cot cot cot !";
    onNiaSpeak(newHenMsg);
    doraVoice.speak(newHenMsg);
  };

  // 6. Shop: Buy a Cow (costs 20 coins)
  const buyCow = () => {
    if (coins < 20) {
      sounds.playBloop();
      const msg = "La gentille vache coûte 20 pièces ! Continue de vendre des œufs !";
      onNiaSpeak(msg);
      doraVoice.speak(msg);
      return;
    }

    sounds.playSuccess();
    setCoins((c) => c - 20);
    setOtherAnimals((prev) => [...prev, { id: Date.now(), name: 'Marguerite', emoji: '🐮' }]);
    confetti({ particleCount: 90, spread: 75 });
    if (onRewardStar) onRewardStar();

    const cowMsg = "Meeuh ! Bravo ! Tu as adopté une vache qui donne du bon lait frais !";
    onNiaSpeak(cowMsg);
    doraVoice.speak(cowMsg);
  };

  return (
    <div className="center-activity-card">
      {/* Farm Header */}
      <div className="activity-card-header" style={{ background: 'linear-gradient(135deg, #2ed573, #1e90ff)' }}>
        <div className="header-info">
          <span className="card-badge-icon">🌾</span>
          <div>
            <h2 className="card-main-title">La Ferme aux Œufs Magiques</h2>
            <p className="card-subtitle">Nourris les poules, ramasse les œufs et gagne des pièces !</p>
          </div>
        </div>

        {/* Player Wallet Status */}
        <div className="farm-wallet-bar">
          <div className="wallet-pill gold-pill" title="Pièces d'or">
            <Coins size={22} color="#f1c40f" />
            <span>{coins} Pièces</span>
          </div>
          <div className="wallet-pill seed-pill" title="Sacs de graines">
            <span>🌾 {seeds} Graines</span>
          </div>
          <div className="wallet-pill egg-pill" title="Œufs dans le panier">
            <span>🥚 {eggs} Œufs</span>
          </div>
        </div>
      </div>

      <div className="farm-tycoon-arena">
        {/* Pasture & Chicken Coop Area (Animal Crossing style) */}
        <div className="farm-pasture-field">
          <div className="coop-barn-sign">
            <span>🏡 Poulailler de la Ferme</span>
            <span className="barn-fences">🪵🪵🪵</span>
          </div>

          {/* Chickens roaming on green grass */}
          <div className="chickens-flock-grid">
            {chickens.map((chick) => (
              <div
                key={chick.id}
                onClick={() => feedChicken(chick.id)}
                className={`chicken-animal-avatar ${chick.isEating ? 'is-eating-anim' : ''} ${chick.isLaying ? 'is-laying-anim' : ''}`}
                title="Touche pour lui donner des graines !"
              >
                <div className="animal-speech-tag">
                  {chick.isEating ? '❤️ Miam !' : chick.isLaying ? '🥚 Cot !' : '🌾 Faim !'}
                </div>
                <span className="chicken-graphic animate-bounce-soft">{chick.emoji}</span>
                <span className="chicken-name-label">{chick.name}</span>
                <button className="feed-this-hen-btn">
                  🌾 Donner graines
                </button>
              </div>
            ))}

            {/* Other animals (Cows) */}
            {otherAnimals.map((animal) => (
              <div key={animal.id} className="chicken-animal-avatar cow-avatar animate-pop">
                <div className="animal-speech-tag">🥛 Meuh !</div>
                <span className="chicken-graphic animate-bounce-soft">{animal.emoji}</span>
                <span className="chicken-name-label">{animal.name}</span>
              </div>
            ))}
          </div>

          {/* Feed all button */}
          {chickens.length > 1 && (
            <div className="feed-all-row">
              <button onClick={feedAll} className="feed-all-btn">
                🌾 Nourrir TOUTES les poules en même temps !
              </button>
            </div>
          )}
        </div>

        {/* Farm Market & Town Shop (Animal Crossing Market) */}
        <div className="farm-market-dashboard">
          {/* Sell Station */}
          <div className="market-station-card sell-station">
            <div className="station-header">
              <span className="station-emoji">🧺</span>
              <div>
                <h4>Vendre les Œufs au Marché</h4>
                <p>Tu as <strong>{eggs}</strong> œuf{eggs > 1 ? 's' : ''} à vendre (5 pièces l'œuf !)</p>
              </div>
            </div>
            <button
              onClick={sellEggs}
              className={`giant-sell-btn ${eggs > 0 ? 'active' : ''}`}
            >
              💰 VENDRE MES ŒUFS ! (+{eggs * 5} Pièces)
            </button>
          </div>

          {/* Shop Station */}
          <div className="market-station-card buy-station">
            <div className="station-header">
              <span className="station-emoji">🏪</span>
              <div>
                <h4>Boutique du Village (Acheter)</h4>
                <p>Dépense tes pièces pour agrandir ta ferme !</p>
              </div>
            </div>

            <div className="shop-items-grid">
              {/* Buy Seeds */}
              <button
                onClick={buySeeds}
                className="shop-buy-btn"
                disabled={coins < 3}
              >
                <span className="shop-item-emoji">🌾</span>
                <span className="shop-item-title">+3 Sacs de Graines</span>
                <span className="shop-item-price">Prix : 3 🪙</span>
              </button>

              {/* Buy Chicken */}
              <button
                onClick={buyChicken}
                className="shop-buy-btn"
                disabled={coins < 10}
              >
                <span className="shop-item-emoji">🐔</span>
                <span className="shop-item-title">+1 Nouvelle Poule</span>
                <span className="shop-item-price">Prix : 10 🪙</span>
              </button>

              {/* Buy Cow */}
              <button
                onClick={buyCow}
                className="shop-buy-btn cow-buy"
                disabled={coins < 20}
              >
                <span className="shop-item-emoji">🐮</span>
                <span className="shop-item-title">+1 Belle Vache</span>
                <span className="shop-item-price">Prix : 20 🪙</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
