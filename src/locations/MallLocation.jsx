import React, { useState, useEffect } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { ShoppingBag, Sparkles, Shirt, Gamepad2 } from 'lucide-react';
import teacherImg from '../assets/teacher-pixar.jpg';

const MALL_SHOPS = [
  { id: 'fashion', label: 'Magasin de Mode 👗', icon: Shirt },
  { id: 'toys', label: 'Magasin de Jouets 🧸', icon: Gamepad2 },
];

const FASHION_ITEMS = [
  { id: 'hat', nameFr: 'Le Chapeau de Soleil', nameEn: 'Sun Hat', emoji: '👒', color: '#fdcb6e' },
  { id: 'glasses', nameFr: 'Les Lunettes de Soleil', nameEn: 'Sunglasses', emoji: '🕶️', color: '#2d3436' },
  { id: 'shoes', nameFr: 'Les Baskets de Course', nameEn: 'Sneakers', emoji: '👟', color: '#74b9ff' },
  { id: 'crown', nameFr: 'La Couronne Dorée', nameEn: 'Golden Crown', emoji: '👑', color: '#ffd32a' },
  { id: 'bag', nameFr: 'Le Sac à Main Chic', nameEn: 'Handbag', emoji: '👜', color: '#e056fd' },
  { id: 'scarf', nameFr: 'L\'Écharpe Douce', nameEn: 'Warm Scarf', emoji: '🧣', color: '#ff7675' },
];

const TOY_ITEMS = [
  { id: 'bear', nameFr: 'Le Nounours Câlin', nameEn: 'Teddy Bear', emoji: '🧸', sound: 'Câlin tout doux !' },
  { id: 'train', nameFr: 'Le Petit Train', nameEn: 'Toy Train', emoji: '🚂', sound: 'Tchou-tchou !' },
  { id: 'robot', nameFr: 'Le Robot Danseur', nameEn: 'Dancing Robot', emoji: '🤖', sound: 'Bip boup bip !' },
  { id: 'ball', nameFr: 'Le Ballon Rebondissant', nameEn: 'Bouncy Ball', emoji: '⚽', sound: 'Boing boing !' },
  { id: 'drum', nameFr: 'Le Tambour de Musique', nameEn: 'Toy Drum', emoji: '🥁', sound: 'Boum boum boum !' },
  { id: 'rocket', nameFr: 'La Fusée Spatiale', nameEn: 'Space Rocket', emoji: '🚀', sound: 'Décollage 3, 2, 1 !' },
];

export default function MallLocation({ onTeacherSpeech, onClose }) {
  const [activeShop, setActiveShop] = useState('fashion');
  const [wornItem, setWornItem] = useState(null);

  useEffect(() => {
    const welcome = "Bienvenue dans le grand centre commercial ! Faisons les boutiques ensemble !";
    onTeacherSpeech(welcome);
    teacher.speakBilingual(welcome, "Welcome to the big shopping mall! Let's go shopping together!");
  }, []);

  const handleFashionSelect = (item) => {
    sounds.playPop();
    setWornItem(item);
    confetti({ particleCount: 30, spread: 45 });
    const msg = `Oh, regarde comme c'est élégant ! ${item.nameFr} ! Tu as beaucoup de goût !`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `So stylish! ${item.nameEn}!`);
  };

  const handleToySelect = (toy) => {
    sounds.playSuccess();
    confetti({ particleCount: 35, spread: 50 });
    const msg = `Youpi ! ${toy.nameFr} ! ${toy.sound}`;
    onTeacherSpeech(msg);
    teacher.speakBilingual(msg, `${toy.nameEn}! ${toy.sound}`);
  };

  return (
    <div className="location-modal-card">
      <div className="location-modal-header mall-theme">
        <div className="modal-title-box">
          <span className="location-large-emoji">🛍️</span>
          <div>
            <h2 className="modal-title">Le Centre Commercial</h2>
            <p className="modal-subtitle">Shopping Mall &bull; Mode, Vêtements et Magasin de Jouets</p>
          </div>
        </div>
        <button onClick={onClose} className="close-modal-btn">✖ Retour à la ville</button>
      </div>

      {/* Boutique selection tabs */}
      <div className="location-tabs-bar">
        {MALL_SHOPS.map((shop) => (
          <button
            key={shop.id}
            onClick={() => {
              sounds.playPop();
              setActiveShop(shop.id);
            }}
            className={`location-tab-btn ${activeShop === shop.id ? 'active' : ''}`}
          >
            {shop.label}
          </button>
        ))}
      </div>

      <div className="location-content-body">
        {activeShop === 'fashion' && (
          <div className="fashion-fitting-room">
            {/* Dressing showcase with Pixar character */}
            <div className="fitting-display">
              <div className="avatar-stand">
                <img src={teacherImg} alt="Maîtresse Nia" className="fitting-pixar-avatar" />
                {wornItem && (
                  <div className="worn-accessory-badge animate-bounce-soft">
                    <span className="accessory-emoji">{wornItem.emoji}</span>
                    <span className="accessory-name">{wornItem.nameFr}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Wardrobe accessories */}
            <div className="wardrobe-items">
              <h3 className="section-title">Choisis un accessoire pour la poupée Nia :</h3>
              <div className="wardrobe-grid">
                {FASHION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleFashionSelect(item)}
                    className="wardrobe-btn"
                  >
                    <span className="wardrobe-emoji">{item.emoji}</span>
                    <span className="wardrobe-label-fr">{item.nameFr}</span>
                    <span className="wardrobe-label-en">({item.nameEn})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeShop === 'toys' && (
          <div className="toy-store-arena">
            <h3 className="section-title">Le Rayon des Merveilles et Jouets 🧸</h3>
            <p className="section-hint">Touche un jouet pour jouer avec son son et l'écouter :</p>
            <div className="toys-grid">
              {TOY_ITEMS.map((toy) => (
                <button
                  key={toy.id}
                  onClick={() => handleToySelect(toy)}
                  className="toy-card-btn"
                >
                  <span className="toy-emoji">{toy.emoji}</span>
                  <span className="toy-title-fr">{toy.nameFr}</span>
                  <span className="toy-title-en">({toy.nameEn})</span>
                  <span className="toy-sound-pill">🎵 {toy.sound}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
