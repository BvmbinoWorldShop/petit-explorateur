import React, { useState } from 'react';
import { sounds } from '../utils/audio';
import { teacher } from '../utils/speech';
import confetti from 'canvas-confetti';
import { Home } from 'lucide-react';

const DAILY_OBJECTS = [
  { id: 'shoes', nameFr: 'Les Chaussures', nameEn: 'Shoes', emoji: '👟', action: 'On les met pour aller courir dehors !' },
  { id: 'toothbrush', nameFr: 'La Brosse à dents', nameEn: 'Toothbrush', emoji: '🪥', action: 'Frotte frotte, pour des dents toutes propres !' },
  { id: 'bed', nameFr: 'Le Lit', nameEn: 'Bed', emoji: '🛏️', action: 'Fais de beaux rêves avec doudou ! Chut...' },
  { id: 'spoon', nameFr: 'La Cuillère', nameEn: 'Spoon', emoji: '🥄', action: 'Pour manger la bonne compote sans en renverser !' },
  { id: 'book', nameFr: 'Le Livre', nameEn: 'Book', emoji: '📖', action: 'On tourne les pages pour écouter une belle histoire !' },
  { id: 'teddy', nameFr: 'Le Nounours', nameEn: 'Teddy Bear', emoji: '🧸', action: 'Un gros câlin tout doux avec mon doudou !' },
  { id: 'cup', nameFr: 'Le Verre d\'eau', nameEn: 'Cup of water', emoji: '🥛', action: 'Glou glou glou, quand on a soif !' },
  { id: 'hat', nameFr: 'Le Chapeau', nameEn: 'Hat', emoji: '🧢', action: 'Hop, sur la tête pour se protéger du soleil !' },
];

export default function DailyObjectsActivity({ onTeacherPrompt }) {
  const [selectedObj, setSelectedObj] = useState(DAILY_OBJECTS[0]);

  const handleObjClick = (obj) => {
    setSelectedObj(obj);
    sounds.playPop();
    const phrase = `${obj.nameFr} ! ${obj.action}`;
    onTeacherPrompt(phrase);
    teacher.speakBilingual(phrase, obj.nameEn);
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.6 } });
  };

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2 className="activity-title">
          <Home className="activity-icon" /> Les Objets de la Maison 🧸
        </h2>
        <p className="activity-subtitle">Touche les objets que tu utilises tous les jours !</p>
      </div>

      {/* Featured Object */}
      <div className="object-showcase">
        <span className="object-showcase-emoji animate-wobble">{selectedObj.emoji}</span>
        <h3 className="object-showcase-fr">{selectedObj.nameFr}</h3>
        <p className="object-showcase-en">({selectedObj.nameEn})</p>
        <p className="object-showcase-action">{selectedObj.action}</p>
      </div>

      {/* Objects Grid */}
      <div className="objects-grid">
        {DAILY_OBJECTS.map((obj) => (
          <button
            key={obj.id}
            onClick={() => handleObjClick(obj)}
            className={`object-card ${selectedObj.id === obj.id ? 'active-object' : ''}`}
          >
            <span className="object-emoji">{obj.emoji}</span>
            <span className="object-title-fr">{obj.nameFr}</span>
            <span className="object-title-en">({obj.nameEn})</span>
          </button>
        ))}
      </div>
    </div>
  );
}
