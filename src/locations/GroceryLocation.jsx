import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { ShoppingCart, ShoppingBag, CheckCircle, RotateCcw, Coins } from 'lucide-react';

const MARKET_ITEMS = [
  { id: 'apple', nameFr: 'Pomme', nameEn: 'Apple', emoji: '🍎', price: 1 },
  { id: 'banana', nameFr: 'Banane', nameEn: 'Banana', emoji: '🍌', price: 1 },
  { id: 'strawberry', nameFr: 'Fraise', nameEn: 'Strawberry', emoji: '🍓', price: 1 },
  { id: 'carrot', nameFr: 'Carotte', nameEn: 'Carrot', emoji: '🥕', price: 1 },
  { id: 'bread', nameFr: 'Baguette de Pain', nameEn: 'Bread', emoji: '🥖', price: 2 },
  { id: 'milk', nameFr: 'Bouteille de Lait', nameEn: 'Milk', emoji: '🥛', price: 2 },
  { id: 'cheese', nameFr: 'Fromage', nameEn: 'Cheese', emoji: '🧀', price: 2 },
  { id: 'juice', nameFr: 'Jus d\'orange', nameEn: 'Orange Juice', emoji: '🧃', price: 2 },
];

export default function GroceryLocation({ onTeacherSpeech, onClose, onRewardStar }) {
  const [cart, setCart] = useState([]);
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const welcome = "Bienvenue à l'épicerie ! Prends ton caddie et choisissons de bons aliments à manger !";
    onTeacherSpeech(welcome);
    teacher.speakBilingual(welcome, "Welcome to the grocery store! Let's fill the cart with good food!");
  }, []);

  const addToCart = (item) => {
    sounds.playPop();
    const newCart = [...cart, item];
    setCart(newCart);
    const msg = `Miam ! Tu as ajouté ${item.nameFr} dans le caddie !`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `Added ${item.nameEn}!`);
  };

  const checkout = () => {
    if (cart.length === 0) {
      teacher.speakFrench("Ton caddie est vide ! Ajoute d'abord des fruits ou des légumes !");
      return;
    }
    sounds.playSuccess();
    setPaid(true);
    confetti({ particleCount: 70, spread: 60 });
    if (onRewardStar) onRewardStar();
    const payMsg = `Bip ! Merci petit client ! Tu as acheté ${cart.length} délicieuses choses !`;
    onTeacherSpeech(payMsg);
    teacher.speakBilingual(payMsg, `Beep! Thank you little shopper! You bought ${cart.length} items!`);
  };

  const resetCart = () => {
    setCart([]);
    setPaid(false);
    teacher.speakFrench("C'est reparti pour de nouvelles courses !");
  };

  return (
    <div className="location-modal-card">
      <div className="location-modal-header grocery-theme">
        <div className="modal-title-box">
          <span className="location-large-emoji">🛒</span>
          <div>
            <h2 className="modal-title">L'Épicerie & Le Marché</h2>
            <p className="modal-subtitle">Grocery Shopping &bull; Découverte des Aliments</p>
          </div>
        </div>
        <button onClick={onClose} className="close-modal-btn">✖ Retour à la ville</button>
      </div>

      <div className="grocery-arena">
        {/* Rayons du supermarché */}
        <div className="grocery-shelves">
          <h3 className="section-title">Les Rayons du Magasin 🏪</h3>
          <p className="section-hint">Touche un aliment pour le mettre dans ton caddie :</p>
          <div className="shelves-grid">
            {MARKET_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => addToCart(item)}
                className="market-item-btn"
              >
                <span className="market-emoji">{item.emoji}</span>
                <span className="market-name-fr">{item.nameFr}</span>
                <span className="market-name-en">({item.nameEn})</span>
                <span className="market-add-tag">+ Ajouter</span>
              </button>
            ))}
          </div>
        </div>

        {/* Le Caddie & La Caisse enregistreuse */}
        <div className="cart-checkout-panel">
          <div className="cart-basket-card">
            <div className="cart-header">
              <ShoppingCart size={26} className="cart-icon" />
              <h4>Mon Caddie ({cart.length} articles)</h4>
            </div>

            <div className="cart-items-box">
              {cart.length === 0 ? (
                <p className="cart-empty-text">Ton caddie attend de bons fruits et légumes ! 🧺</p>
              ) : (
                <div className="cart-emojis-cluster">
                  {cart.map((item, idx) => (
                    <span key={idx} className="in-cart-emoji animate-pop">
                      {item.emoji}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {!paid ? (
              <button
                onClick={checkout}
                className={`checkout-btn ${cart.length > 0 ? 'ready' : ''}`}
              >
                <Coins size={22} /> Payer à la Caisse (Bip !) 💳
              </button>
            ) : (
              <div className="paid-success-banner animate-pop">
                <CheckCircle size={36} color="#00b894" />
                <h5>🎉 Courses payées avec succès !</h5>
                <button onClick={resetCart} className="action-button secondary">
                  <RotateCcw size={18} /> Vider le caddie
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
