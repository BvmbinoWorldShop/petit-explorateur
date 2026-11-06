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
    case 'burger':
    case 'bun_bottom':
    case 'bun_top':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <ellipse cx="50" cy="78" rx="42" ry="12" fill="#d35400" />
          <ellipse cx="50" cy="75" rx="40" ry="10" fill="#f39c12" />
          {/* Patty & Cheese */}
          <rect x="14" y="60" width="72" height="12" rx="6" fill="#4a2c11" />
          <polygon points="18,66 82,66 78,73 22,73" fill="#f1c40f" />
          {/* Lettuce & Tomato */}
          <path d="M 10 56 Q 25 50 40 56 Q 60 50 80 56 Q 90 52 90 58 L 10 58 Z" fill="#2ed573" />
          <ellipse cx="38" cy="52" rx="16" ry="6" fill="#ff4757" />
          <ellipse cx="64" cy="52" rx="16" ry="6" fill="#ff4757" />
          {/* Top Bun with sesame */}
          <path d="M 12 48 C 12 18 88 18 88 48 Z" fill="#e67e22" stroke="#d35400" strokeWidth="1.5" />
          <ellipse cx="34" cy="30" rx="2" ry="1" fill="#fff" transform="rotate(-15 34 30)" />
          <ellipse cx="48" cy="26" rx="2" ry="1" fill="#fff" />
          <ellipse cx="62" cy="30" rx="2" ry="1" fill="#fff" transform="rotate(15 62 30)" />
          <ellipse cx="52" cy="36" rx="2" ry="1" fill="#fff" />
        </svg>
      );
    case 'hotdog':
    case 'hd_bun':
    case 'hd_sausage':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          {/* Hot Dog Bun */}
          <ellipse cx="50" cy="54" rx="46" ry="24" fill="#e67e22" stroke="#d35400" strokeWidth="2" />
          <ellipse cx="50" cy="50" rx="42" ry="18" fill="#f5cd79" />
          {/* Sausage */}
          <rect x="10" y="42" width="80" height="18" rx="9" fill="#c0392b" stroke="#962d2d" strokeWidth="1.5" />
          {/* Mustard swirl */}
          <path d="M 16 48 Q 28 40 38 52 Q 50 40 62 52 Q 74 40 84 48" fill="none" stroke="#f1c40f" strokeWidth="4" strokeLinecap="round" />
          {/* Ketchup drizzle */}
          <path d="M 22 52 Q 34 44 46 54 Q 58 44 72 54" fill="none" stroke="#e74c3c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'patty':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <ellipse cx="50" cy="50" rx="44" ry="22" fill="#5d381a" stroke="#3b220e" strokeWidth="2" />
          <ellipse cx="50" cy="46" rx="40" ry="18" fill="#795548" />
          <line x1="20" y1="42" x2="45" y2="52" stroke="#3b220e" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="40" x2="65" y2="50" stroke="#3b220e" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="42" x2="80" y2="50" stroke="#3b220e" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'pickle':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <ellipse cx="36" cy="48" rx="22" ry="20" fill="#2ecc71" stroke="#27ae60" strokeWidth="3" />
          <ellipse cx="36" cy="48" rx="16" ry="14" fill="#a8e6cf" />
          <ellipse cx="64" cy="54" rx="22" ry="20" fill="#2ecc71" stroke="#27ae60" strokeWidth="3" />
          <ellipse cx="64" cy="54" rx="16" ry="14" fill="#a8e6cf" />
        </svg>
      );
    case 'lettuce':
    case 'hd_lettuce':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <path d="M 12 60 C 10 35 30 20 50 25 C 70 20 90 35 88 60 C 75 75 25 75 12 60 Z" fill="#2ed573" stroke="#26af5f" strokeWidth="2.5" />
          <path d="M 50 65 L 50 35 M 50 45 L 35 38 M 50 52 L 65 44" stroke="#a8e6cf" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'sauce':
    case 'hd_sauce':
      return (
        <svg viewBox="0 0 100 100" width={size} height={size} className="realistic-food-svg">
          <path d="M 32 20 L 40 20 L 40 10 L 60 10 L 60 20 L 68 20 C 74 20 78 30 76 80 C 75 88 68 90 50 90 C 32 90 25 88 24 80 C 22 30 26 20 32 20 Z" fill="#e74c3c" stroke="#c0392b" strokeWidth="2" />
          <ellipse cx="50" cy="55" rx="14" ry="18" fill="#ff7675" />
          <text x="50" y="60" fill="#fff" fontSize="12" fontWeight="900" textAnchor="middle">SAUCE</text>
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
  { id: 'patty', location: 'fridge', nameFr: 'Le Steak Haché', nameEn: 'Burger Patty', emoji: '🥩', color: '#5d381a' },
  { id: 'pickle', location: 'fridge', nameFr: 'Les Cornichons', nameEn: 'Pickles', emoji: '🥒', color: '#27ae60' },
  { id: 'lettuce', location: 'fridge', nameFr: 'La Salade Verte', nameEn: 'Crisp Lettuce', emoji: '🥬', color: '#2ed573' },
  { id: 'hd_sausage', location: 'fridge', nameFr: 'La Saucisse Dorée', nameEn: 'Sausage', emoji: '🌭', color: '#c0392b' },

  // IN THE CABINET / PANTRY
  { id: 'flour', location: 'cabinet', nameFr: 'La Farine Blanche', nameEn: 'Wheat Flour', emoji: '🌾', color: '#d4c3a3' },
  { id: 'pasta', location: 'cabinet', nameFr: 'Les Bonnes Pâtes', nameEn: 'Pasta Ribbons', emoji: '🍝', color: '#ffa502' },
  { id: 'chocolate', location: 'cabinet', nameFr: 'Le Chocolat Doux', nameEn: 'Sweet Chocolate', emoji: '🍫', color: '#4b2c14' },
  { id: 'honey', location: 'cabinet', nameFr: 'Le Miel Gourmand', nameEn: 'Golden Honey', emoji: '🍯', color: '#f39c12' },
  { id: 'mushroom', location: 'cabinet', nameFr: 'Les Champignons', nameEn: 'Mushrooms', emoji: '🍄', color: '#b08968' },
  { id: 'carrot', location: 'cabinet', nameFr: 'La Belle Carotte', nameEn: 'Carrot', emoji: '🥕', color: '#e67e22' },
  { id: 'bun_bottom', location: 'cabinet', nameFr: 'Le Pain Brioché', nameEn: 'Brioche Bun', emoji: '🍞', color: '#e67e22' },
  { id: 'sauce', location: 'cabinet', nameFr: 'La Sauce Burger', nameEn: 'Burger Sauce', emoji: '🥫', color: '#e74c3c' },
  { id: 'bun_top', location: 'cabinet', nameFr: 'Le Pain Sésame', nameEn: 'Sesame Bun', emoji: '🍞', color: '#d35400' },
  { id: 'hd_bun', location: 'cabinet', nameFr: 'Le Pain Hot-Dog', nameEn: 'Hot-Dog Bun', emoji: '🥖', color: '#e67e22' },
  { id: 'hd_sauce', location: 'cabinet', nameFr: 'Ketchup & Moutarde', nameEn: 'Mustard Sauce', emoji: '🥫', color: '#f39c12' },
];

export const KITCHEN_RECIPES = [
  {
    id: 'burger',
    title: 'Le Grand Burger Gourmand 🍔',
    description: 'Pain brioché, sauce, steak grillé, cheddar fondant, cornichons, tomates et salade fraîche !',
    steps: ['bun_bottom', 'sauce', 'patty', 'cheese', 'pickle', 'tomato', 'lettuce', 'bun_top'],
    isAssembly: true,
    assemblyType: 'burger',
    stoveAction: 'Assembler le grand burger gourmet étage par étage !',
    resultEmoji: '🍔🍟',
    resultTitle: 'Un burger gourmet géant ultra croustillant !',
  },
  {
    id: 'hotdog',
    title: 'Le Délicieux Hot-Dog Royal 🌭',
    description: 'Pain moelleux, saucisse dorée, ketchup moutarde, fromage fondant et cornichons !',
    steps: ['hd_bun', 'hd_sausage', 'hd_sauce', 'cheese', 'pickle', 'lettuce'],
    isAssembly: true,
    assemblyType: 'hotdog',
    stoveAction: 'Garnir le savoureux hot-dog moelleux !',
    resultEmoji: '🌭✨',
    resultTitle: 'Le meilleur hot-dog gourmand de Tyanna !',
  },
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
// INTERACTIVE 2D/3D BURGER & HOT-DOG POP-UP ASSEMBLY MODAL
// =========================================================================
export const BURGER_LAYERS_DATA = [
  { id: 'bun_bottom', nameFr: 'Pain Brioché (Bas)', emoji: '🍞', sound: 'pop' },
  { id: 'sauce', nameFr: 'Sauce Burger & Ketchup', emoji: '🥫', sound: 'squirt' },
  { id: 'patty', nameFr: 'Steak Haché Grillé', emoji: '🥩', sound: 'sizzle' },
  { id: 'cheese', nameFr: 'Cheddar Fondant', emoji: '🧀', sound: 'pop' },
  { id: 'pickle', nameFr: 'Cornichons Croquants', emoji: '🥒', sound: 'crunch' },
  { id: 'tomato', nameFr: 'Tomates Fraîches', emoji: '🍅', sound: 'pop' },
  { id: 'lettuce', nameFr: 'Salade Verte Frisée', emoji: '🥬', sound: 'crunch' },
  { id: 'bun_top', nameFr: 'Pain au Sésame (Haut)', emoji: '🍞', sound: 'pop' },
];

export const HOTDOG_LAYERS_DATA = [
  { id: 'hd_bun', nameFr: 'Pain à Hot-Dog Moelleux', emoji: '🥖', sound: 'pop' },
  { id: 'hd_sausage', nameFr: 'Saucisse Dorée Grillée', emoji: '🌭', sound: 'sizzle' },
  { id: 'hd_sauce', nameFr: 'Ketchup & Moutarde Douce', emoji: '🥫', sound: 'squirt' },
  { id: 'cheese', nameFr: 'Cheddar Fondant', emoji: '🧀', sound: 'pop' },
  { id: 'pickle', nameFr: 'Cornichons & Oignons Frits', emoji: '🥒', sound: 'crunch' },
  { id: 'lettuce', nameFr: 'Salade Croquante', emoji: '🥬', sound: 'crunch' },
];

export function BurgerHotdogAssemblyModal({ initialType = 'burger', onClose, onRewardStar, onTeacherPrompt }) {
  const [activeType, setActiveType] = useState(initialType);
  const [placedLayers, setPlacedLayers] = useState([]);
  const [bites, setBites] = useState(0);

  const layersList = activeType === 'burger' ? BURGER_LAYERS_DATA : HOTDOG_LAYERS_DATA;
  const isComplete = placedLayers.length === layersList.length;
  const nextRequired = layersList.find((l) => !placedLayers.includes(l.id));

  useEffect(() => {
    const title = activeType === 'burger' ? 'Le Grand Burger Gourmand' : 'Le Hot-Dog Royal';
    const msg = `Bienvenue dans l'atelier d'assemblage ! Ajoute chaque ingrédient pour préparer ${title} !`;
    if (onTeacherPrompt) onTeacherPrompt(msg);
    teacher.speakFrench(msg);
  }, [activeType]);

  const handleAddLayer = (layer) => {
    if (placedLayers.includes(layer.id)) return;
    
    // Play sound based on ingredient type
    if (layer.sound === 'sizzle') sounds.playCookingSizzle();
    else if (layer.sound === 'squirt') sounds.playBloop();
    else if (layer.sound === 'crunch') sounds.playMunch();
    else sounds.playPop();

    const nextPlaced = [...placedLayers, layer.id];
    setPlacedLayers(nextPlaced);

    if (nextPlaced.length === layersList.length) {
      sounds.playSuccess();
      sounds.playChime();
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.5 } });
      if (onRewardStar) onRewardStar();
      const cheer = `Wouah ! ${activeType === 'burger' ? 'Ton burger géant' : 'Ton hot-dog'} est prêt ! Touche pour croquer dedans !`;
      if (onTeacherPrompt) onTeacherPrompt(cheer);
      teacher.speakFrench(cheer);
    }
  };

  const handleTakeBite = () => {
    sounds.playMunch();
    const nextBites = bites + 1;
    setBites(nextBites);
    confetti({ particleCount: 30, spread: 45 });

    if (nextBites === 1) {
      teacher.speakFrench("Miam ! Quel délicieux premier croc !");
    } else if (nextBites === 2) {
      teacher.speakFrench("Encore une bouchée ! C'est trop bon !");
    } else {
      sounds.playSuccess();
      confetti({ particleCount: 75, spread: 70 });
      if (onRewardStar) onRewardStar();
      teacher.speakFrench("Miam miam tout mangé ! Tu es un grand chef cuisinier !");
    }
  };

  const handleReset = () => {
    sounds.playPop();
    setPlacedLayers([]);
    setBites(0);
    teacher.speakFrench("Plateau tout propre ! C'est reparti pour un nouveau régal !");
  };

  return (
    <div className="final-plate-modal-backdrop" onClick={onClose}>
      <div
        className="final-plate-dialog animate-pop"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '580px', width: '92%', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: '#f1f2f6',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            fontSize: '1.2rem',
            cursor: 'pointer',
            fontWeight: 900,
            color: '#57606f',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            zIndex: 10,
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '2rem' }}>🍔👨‍🍳🌭</span>
          <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#d35400', margin: '4px 0' }}>
            L'Atelier d'Assemblage Gourmand
          </h2>
          <p style={{ fontSize: '0.85rem', color: '#636e72', fontWeight: 800, margin: 0 }}>
            Empile les couches pour préparer ton chef-d'œuvre avec Tyanna !
          </p>
        </div>

        {/* Switcher Burger / Hotdog */}
        <div className="numbers-mode-switcher" style={{ marginBottom: '14px' }}>
          <button
            onClick={() => {
              sounds.playPop();
              setActiveType('burger');
              setPlacedLayers([]);
              setBites(0);
            }}
            className={`num-mode-tab-btn ${activeType === 'burger' ? 'active' : ''}`}
          >
            🍔 Burger Géant du Chef
          </button>
          <button
            onClick={() => {
              sounds.playPop();
              setActiveType('hotdog');
              setPlacedLayers([]);
              setBites(0);
            }}
            className={`num-mode-tab-btn ${activeType === 'hotdog' ? 'active' : ''}`}
          >
            🌭 Hot-Dog Royal
          </button>
        </div>

        {/* 3D Serving Platter with Vertical Layer Assembly */}
        <div
          style={{
            width: '100%',
            minHeight: '230px',
            background: 'linear-gradient(180deg, #fdf6ec 0%, #faebd7 100%)',
            borderRadius: '24px',
            border: '3px solid #f39c12',
            boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.06), 0 8px 24px rgba(243, 156, 18, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '20px 10px 14px 10px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ceramic Serving Plate at the Bottom */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              width: '85%',
              maxWidth: '320px',
              height: '34px',
              background: 'linear-gradient(180deg, #ffffff 0%, #dfe6e9 100%)',
              borderRadius: '50%',
              border: '3px solid #b2bec3',
              boxShadow: '0 8px 18px rgba(0,0,0,0.25)',
              zIndex: 1,
            }}
          />

          {/* Empty Platter Hint */}
          {placedLayers.length === 0 && (
            <div
              className="animate-bounce-soft"
              style={{
                zIndex: 5,
                background: 'rgba(255,255,255,0.92)',
                border: '2px dashed #f39c12',
                borderRadius: '16px',
                padding: '8px 16px',
                marginBottom: '40px',
                color: '#d35400',
                fontWeight: 900,
                fontSize: '0.85rem',
              }}
            >
              👇 Touche {layersList[0].nameFr} pour commencer !
            </div>
          )}

          {/* Rendered Food Item with Stacked Layers */}
          <div
            style={{
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              width: '100%',
              maxWidth: '280px',
              marginBottom: '16px',
              opacity: bites >= 3 ? 0.2 : 1,
              transition: 'opacity 0.3s ease',
            }}
          >
            {/* BURGER SVG LAYERS */}
            {activeType === 'burger' && (
              <svg
                viewBox="0 0 280 220"
                style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'visible',
                  filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.25))',
                }}
              >
                <defs>
                  <linearGradient id="bunTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f39c12" />
                    <stop offset="50%" stopColor="#e67e22" />
                    <stop offset="100%" stopColor="#d35400" />
                  </linearGradient>
                  <linearGradient id="bunBtmGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f8c291" />
                    <stop offset="70%" stopColor="#e67e22" />
                    <stop offset="100%" stopColor="#c27803" />
                  </linearGradient>
                  <linearGradient id="pattyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6d4c41" />
                    <stop offset="60%" stopColor="#4e342e" />
                    <stop offset="100%" stopColor="#3e2723" />
                  </linearGradient>
                  <mask id="burgerBiteMask">
                    <rect x="0" y="0" width="280" height="220" fill="#ffffff" />
                    {bites >= 1 && <circle cx="230" cy="110" r="32" fill="#000000" />}
                    {bites >= 2 && <circle cx="215" cy="85" r="30" fill="#000000" />}
                  </mask>
                </defs>

                <g mask={bites > 0 ? 'url(#burgerBiteMask)' : undefined}>
                  {/* LAYER 1: BUN BOTTOM */}
                  {placedLayers.includes('bun_bottom') && (
                    <g className="animate-pop">
                      <ellipse cx="140" cy="182" rx="100" ry="22" fill="url(#bunBtmGrad)" stroke="#c27803" strokeWidth="2.5" />
                      <ellipse cx="140" cy="178" rx="96" ry="17" fill="#f5cd79" />
                    </g>
                  )}

                  {/* LAYER 2: SAUCE */}
                  {placedLayers.includes('sauce') && (
                    <g className="animate-pop">
                      <path d="M 50 172 Q 85 180 140 174 Q 195 180 230 172 Q 195 168 140 170 Q 85 168 50 172" fill="#e74c3c" stroke="#c0392b" strokeWidth="1.5" />
                      <ellipse cx="110" cy="173" rx="18" ry="4" fill="#f1c40f" />
                      <ellipse cx="170" cy="173" rx="16" ry="4" fill="#f1c40f" />
                    </g>
                  )}

                  {/* LAYER 3: STEAK PATTY */}
                  {placedLayers.includes('patty') && (
                    <g className="animate-pop">
                      <rect x="36" y="146" width="208" height="28" rx="14" fill="url(#pattyGrad)" stroke="#2b1a13" strokeWidth="2" />
                      <line x1="65" y1="150" x2="95" y2="170" stroke="#2b1a13" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="110" y1="150" x2="140" y2="170" stroke="#2b1a13" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="155" y1="150" x2="185" y2="170" stroke="#2b1a13" strokeWidth="3.5" strokeLinecap="round" />
                      <line x1="200" y1="150" x2="225" y2="168" stroke="#2b1a13" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  )}

                  {/* LAYER 4: MELTED CHEDDAR */}
                  {placedLayers.includes('cheese') && (
                    <g className="animate-pop">
                      <polygon points="40,146 240,146 230,158 200,165 180,154 140,166 110,153 70,164 50,152" fill="#f1c40f" stroke="#e67e22" strokeWidth="1.5" />
                    </g>
                  )}

                  {/* LAYER 5: PICKLES */}
                  {placedLayers.includes('pickle') && (
                    <g className="animate-pop">
                      <ellipse cx="75" cy="140" rx="24" ry="12" fill="#2ecc71" stroke="#27ae60" strokeWidth="2.5" />
                      <ellipse cx="75" cy="140" rx="16" ry="7" fill="#a8e6cf" />
                      <ellipse cx="140" cy="138" rx="26" ry="12" fill="#2ecc71" stroke="#27ae60" strokeWidth="2.5" />
                      <ellipse cx="140" cy="138" rx="18" ry="7" fill="#a8e6cf" />
                      <ellipse cx="205" cy="140" rx="24" ry="12" fill="#2ecc71" stroke="#27ae60" strokeWidth="2.5" />
                      <ellipse cx="205" cy="140" rx="16" ry="7" fill="#a8e6cf" />
                    </g>
                  )}

                  {/* LAYER 6: TOMATO SLICES */}
                  {placedLayers.includes('tomato') && (
                    <g className="animate-pop">
                      <ellipse cx="90" cy="128" rx="38" ry="14" fill="#ff4757" stroke="#e74c3c" strokeWidth="2" />
                      <ellipse cx="90" cy="128" rx="28" ry="8" fill="#ff6b81" opacity="0.8" />
                      <ellipse cx="190" cy="128" rx="38" ry="14" fill="#ff4757" stroke="#e74c3c" strokeWidth="2" />
                      <ellipse cx="190" cy="128" rx="28" ry="8" fill="#ff6b81" opacity="0.8" />
                    </g>
                  )}

                  {/* LAYER 7: CRISPY LETTUCE */}
                  {placedLayers.includes('lettuce') && (
                    <g className="animate-pop">
                      <path d="M 28 122 C 35 110 55 115 70 120 C 90 112 110 115 130 122 C 155 110 175 115 195 122 C 220 112 245 116 252 124 C 235 132 45 132 28 122 Z" fill="#2ed573" stroke="#26af5f" strokeWidth="2" />
                    </g>
                  )}

                  {/* LAYER 8: TOP SESAME BUN */}
                  {placedLayers.includes('bun_top') && (
                    <g className="animate-pop">
                      <path d="M 32 114 C 32 38 248 38 248 114 Z" fill="url(#bunTopGrad)" stroke="#c27803" strokeWidth="2.5" />
                      <ellipse cx="110" cy="62" rx="42" ry="14" fill="#ffffff" opacity="0.32" transform="rotate(-15 110 62)" />
                      <ellipse cx="80" cy="74" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(-20 80 74)" />
                      <ellipse cx="115" cy="62" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(10 115 62)" />
                      <ellipse cx="140" cy="55" rx="3.5" ry="1.8" fill="#ffffff" />
                      <ellipse cx="170" cy="64" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(-15 170 64)" />
                      <ellipse cx="200" cy="76" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(25 200 76)" />
                      <ellipse cx="100" cy="90" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(15 100 90)" />
                      <ellipse cx="145" cy="85" rx="3.5" ry="1.8" fill="#ffffff" />
                      <ellipse cx="180" cy="92" rx="3.5" ry="1.8" fill="#ffffff" transform="rotate(-20 180 92)" />
                    </g>
                  )}
                </g>
              </svg>
            )}

            {/* HOT-DOG SVG LAYERS */}
            {activeType === 'hotdog' && (
              <svg
                viewBox="0 0 280 200"
                style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'visible',
                  filter: 'drop-shadow(0 8px 14px rgba(0,0,0,0.25))',
                }}
              >
                <defs>
                  <linearGradient id="hdBunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f39c12" />
                    <stop offset="70%" stopColor="#e67e22" />
                    <stop offset="100%" stopColor="#c27803" />
                  </linearGradient>
                  <linearGradient id="sausageGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e74c3c" />
                    <stop offset="60%" stopColor="#c0392b" />
                    <stop offset="100%" stopColor="#962d2d" />
                  </linearGradient>
                  <mask id="hotdogBiteMask">
                    <rect x="0" y="0" width="280" height="200" fill="#ffffff" />
                    {bites >= 1 && <circle cx="235" cy="115" r="32" fill="#000000" />}
                    {bites >= 2 && <circle cx="210" cy="100" r="30" fill="#000000" />}
                  </mask>
                </defs>

                <g mask={bites > 0 ? 'url(#hotdogBiteMask)' : undefined}>
                  {/* LAYER 1: HOT DOG BUN */}
                  {placedLayers.includes('hd_bun') && (
                    <g className="animate-pop">
                      <ellipse cx="140" cy="135" rx="115" ry="42" fill="url(#hdBunGrad)" stroke="#c27803" strokeWidth="2.5" />
                      <ellipse cx="140" cy="128" rx="105" ry="30" fill="#f8c291" />
                    </g>
                  )}

                  {/* LAYER 2: GRILLED SAUSAGE */}
                  {placedLayers.includes('hd_sausage') && (
                    <g className="animate-pop">
                      <rect x="25" y="105" width="230" height="34" rx="17" fill="url(#sausageGrad)" stroke="#781d1d" strokeWidth="2" />
                      <path d="M 40 108 Q 30 122 40 136" stroke="#962d2d" strokeWidth="2.5" fill="none" />
                      <path d="M 240 108 Q 250 122 240 136" stroke="#962d2d" strokeWidth="2.5" fill="none" />
                      <line x1="75" y1="108" x2="88" y2="134" stroke="#5c1919" strokeWidth="3" strokeLinecap="round" />
                      <line x1="120" y1="108" x2="133" y2="134" stroke="#5c1919" strokeWidth="3" strokeLinecap="round" />
                      <line x1="165" y1="108" x2="178" y2="134" stroke="#5c1919" strokeWidth="3" strokeLinecap="round" />
                      <line x1="205" y1="108" x2="218" y2="134" stroke="#5c1919" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  )}

                  {/* LAYER 3: MUSTARD & KETCHUP SWIRL */}
                  {placedLayers.includes('hd_sauce') && (
                    <g className="animate-pop">
                      <path d="M 38 120 Q 60 98 82 122 Q 104 98 126 122 Q 148 98 170 122 Q 192 98 214 122 Q 230 105 242 120" fill="none" stroke="#f1c40f" strokeWidth="7" strokeLinecap="round" />
                      <path d="M 46 124 Q 68 106 90 126 Q 112 106 134 126 Q 156 106 178 126 Q 200 106 222 126" fill="none" stroke="#e74c3c" strokeWidth="5" strokeLinecap="round" />
                    </g>
                  )}

                  {/* LAYER 4: MELTED CHEESE */}
                  {placedLayers.includes('cheese') && (
                    <g className="animate-pop">
                      <ellipse cx="110" cy="118" rx="25" ry="6" fill="#ffd32a" opacity="0.9" />
                      <ellipse cx="170" cy="118" rx="25" ry="6" fill="#ffd32a" opacity="0.9" />
                      <path d="M 90 122 Q 100 134 96 142" stroke="#f39c12" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                      <path d="M 180 122 Q 188 134 184 142" stroke="#f39c12" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </g>
                  )}

                  {/* LAYER 5: PICKLES & CRISPY ONIONS */}
                  {placedLayers.includes('pickle') && (
                    <g className="animate-pop">
                      <rect x="70" y="112" width="10" height="6" rx="2" fill="#27ae60" />
                      <rect x="100" y="110" width="8" height="6" rx="2" fill="#d35400" />
                      <rect x="135" y="112" width="10" height="6" rx="2" fill="#27ae60" />
                      <rect x="160" y="110" width="8" height="6" rx="2" fill="#d35400" />
                      <rect x="195" y="112" width="10" height="6" rx="2" fill="#27ae60" />
                    </g>
                  )}

                  {/* LAYER 6: CRISPY LETTUCE */}
                  {placedLayers.includes('lettuce') && (
                    <g className="animate-pop">
                      <path d="M 30 138 C 50 148 80 142 105 146 C 135 140 165 144 195 140 C 220 146 245 138 250 134" stroke="#2ed573" strokeWidth="8" strokeLinecap="round" fill="none" />
                    </g>
                  )}
                </g>
              </svg>
            )}
          </div>

          {/* Bites Feedback Banner */}
          {bites > 0 && bites < 3 && (
            <div
              className="animate-pop"
              style={{
                position: 'absolute',
                top: '14px',
                background: '#ff4757',
                color: '#fff',
                padding: '4px 14px',
                borderRadius: '999px',
                fontWeight: 900,
                fontSize: '0.85rem',
                boxShadow: '0 4px 12px rgba(255, 71, 87, 0.4)',
                zIndex: 10,
              }}
            >
              😋 Miam ! Croc numéro {bites} !
            </div>
          )}

          {bites >= 3 && (
            <div
              className="animate-pop"
              style={{
                position: 'absolute',
                top: '30%',
                background: '#2ed573',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '20px',
                fontWeight: 900,
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(46, 213, 115, 0.4)',
                zIndex: 10,
                textAlign: 'center',
              }}
            >
              🎉 C'était délicieux ! Tout mangé ! 🌟
            </div>
          )}
        </div>

        {/* Action Controls when complete */}
        {isComplete && (
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: '14px 0 6px 0', flexWrap: 'wrap' }}>
            {bites < 3 ? (
              <button
                onClick={handleTakeBite}
                className="step-forward-btn animate-bounce-soft"
                style={{
                  background: 'linear-gradient(135deg, #ff4757, #ff6b81)',
                  color: '#fff',
                  fontSize: '1.05rem',
                  padding: '12px 26px',
                  border: 'none',
                }}
              >
                😋 Croquer dedans ! ({bites === 0 ? 'Premier croc' : `Croc ×${bites + 1}`})
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="step-forward-btn"
                style={{
                  background: 'linear-gradient(135deg, #f1c40f, #e67e22)',
                  color: '#2d3436',
                  fontSize: '1rem',
                  padding: '10px 20px',
                  border: 'none',
                }}
              >
                🔄 En préparer un autre !
              </button>
            )}
            <button
              onClick={onClose}
              className="step-forward-btn"
              style={{
                background: 'linear-gradient(135deg, #2ecc71, #10ac84)',
                color: '#fff',
                fontSize: '1rem',
                padding: '10px 20px',
                border: 'none',
              }}
            >
              ✅ Retour à la Cuisine
            </button>
          </div>
        )}

        {/* Ingredients Drawer (Tactile 3D Buttons for Kids) */}
        {!isComplete && (
          <div style={{ marginTop: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 900, color: '#636e72', textTransform: 'uppercase' }}>
                Étape ({placedLayers.length} / {layersList.length}) : Touche chaque ingrédient 👇
              </span>
              <button
                onClick={handleReset}
                style={{ background: 'none', border: 'none', color: '#e74c3c', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer' }}
              >
                Effacer 🔄
              </button>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                gap: '8px',
                width: '100%',
              }}
            >
              {layersList.map((layer, idx) => {
                const isPlaced = placedLayers.includes(layer.id);
                const isNext = nextRequired?.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => handleAddLayer(layer)}
                    disabled={isPlaced}
                    className={`palette-swatch-btn ${isNext ? 'active animate-bounce-soft' : ''}`}
                    style={{
                      minHeight: '74px',
                      background: isPlaced ? '#f1f2f6' : isNext ? '#fff9db' : '#ffffff',
                      border: isPlaced ? '2px solid #bdc3c7' : isNext ? '3px solid #f39c12' : '2.5px solid #dfe6e9',
                      opacity: isPlaced ? 0.45 : 1,
                      cursor: isPlaced ? 'default' : 'pointer',
                      padding: '8px 4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      boxShadow: isNext ? '0 0 16px rgba(243, 156, 18, 0.4)' : undefined,
                    }}
                  >
                    <span style={{ fontSize: '1.6rem' }}>{layer.emoji}</span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 900, color: isPlaced ? '#95a5a6' : '#2d3436', textAlign: 'center', lineHeight: 1.1 }}>
                      {layer.nameFr}
                    </span>
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: isPlaced ? '#27ae60' : '#e67e22' }}>
                      {isPlaced ? '✅ Ajouté' : isNext ? '👉 Touche !' : `Étage ${idx + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// =========================================================================
// MAIN KITCHEN EXPERIENCE COMPONENT
// =========================================================================
export default function CookingGame({ onTeacherPrompt, onRewardStar }) {
  const [recipeIdx, setRecipeIdx] = useState(0);
  const [inPot, setInPot] = useState([]);
  const [isFridgeOpen, setIsFridgeOpen] = useState(false);
  const [isCabinetOpen, setIsCabinetOpen] = useState(false);
  const [isFireOn, setIsFireOn] = useState(true);
  const [showPlateModal, setShowPlateModal] = useState(false);
  const [showAssemblyModal, setShowAssemblyModal] = useState(false);
  const [assemblyType, setAssemblyType] = useState('burger'); // 'burger' | 'hotdog'

  // Tyanna Touch & Drag State Machine
  // positions: 15% (fridge), 48% (prep counter / center), 82% (stove)
  const [tyannaX, setTyannaX] = useState(48);
  const [tyannaFacing, setTyannaFacing] = useState('right');
  const [tyannaAction, setTyannaAction] = useState('idle'); // 'idle' | 'walking' | 'carrying' | 'stirring' | 'tasting' | 'cheering'
  const [carriedItem, setCarriedItem] = useState(null);
  const [isDraggingTyanna, setIsDraggingTyanna] = useState(false);

  const kitchenArenaRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartTyannaXRef = useRef(48);
  const lastFootstepTimeRef = useRef(0);

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
    setShowPlateModal(false);
    setCarriedItem(null);
    setTyannaAction('idle');
    setTyannaX(48);
    setIsFridgeOpen(false);
    setIsCabinetOpen(false);

    if (r.isAssembly) {
      setAssemblyType(r.assemblyType || 'burger');
      setShowAssemblyModal(true);
      const prompt = `Atelier Chef : Préparons ${r.title} ! Empile les délicieux ingrédients sur le plateau !`;
      onTeacherPrompt(prompt);
      teacher.speakFrench(prompt);
      return;
    }

    const firstIng = KITCHEN_INGREDIENTS.find((i) => i.id === r.steps[0]) || { nameFr: 'les ingrédients', nameEn: 'the ingredients', location: 'fridge' };
    const where = firstIng.location === 'fridge' ? 'dans le réfrigérateur' : 'dans le placard';
    const prompt = `C'est l'heure de cuisiner ! Préparons ensemble : ${r.title} ! Tyanna va chercher ${firstIng.nameFr} ${where} !`;
    onTeacherPrompt(prompt);
    teacher.speakBilingual(prompt, `Let's cook! Let's get the ${firstIng.nameEn}!`);
  };

  // Touch and drag Tyanna anywhere across the kitchen
  const handleTyannaPointerDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingTyanna(true);
    dragStartXRef.current = e.clientX;
    dragStartTyannaXRef.current = tyannaX;
    sounds.playPop();
    setTyannaAction('walking');
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (err) {}
  };

  const handleTyannaPointerMove = (e) => {
    if (!isDraggingTyanna) return;
    if (!kitchenArenaRef.current) return;
    const rect = kitchenArenaRef.current.getBoundingClientRect();
    const deltaX = e.clientX - dragStartXRef.current;
    const deltaPercent = (deltaX / rect.width) * 100;
    const nextX = Math.max(12, Math.min(88, dragStartTyannaXRef.current + deltaPercent));

    if (deltaX > 2) {
      setTyannaFacing('right');
    } else if (deltaX < -2) {
      setTyannaFacing('left');
    }
    setTyannaX(nextX);

    const now = Date.now();
    if (now - lastFootstepTimeRef.current > 260) {
      sounds.playFootstep();
      lastFootstepTimeRef.current = now;
    }
  };

  const handleTyannaPointerUp = (e) => {
    if (!isDraggingTyanna) return;
    setIsDraggingTyanna(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {}
    sounds.playPop();
    setTyannaAction('idle');

    if (tyannaX < 26) {
      setIsFridgeOpen(true);
      const msg = "Tyanna est devant le réfrigérateur ! Quels bons ingrédients frais veux-tu choisir ?";
      onTeacherPrompt(msg);
      teacher.speakFrench(msg);
    } else if (tyannaX > 68) {
      const msg = "Tyanna est devant la cuisinière ! Prête à faire mijoter de bons plats !";
      onTeacherPrompt(msg);
      teacher.speakFrench(msg);
    } else {
      const msg = "Tyanna est au plan de travail du chef !";
      onTeacherPrompt(msg);
    }
  };

  const handleToggleFire = () => {
    const next = !isFireOn;
    setIsFireOn(next);
    if (next) {
      sounds.playFireIgnite();
      sounds.playCookingSizzle();
      const fireMsg = "Youpi ! Le feu de la cuisinière crépite ! La marmite commence à chauffer et bouillonner !";
      onTeacherPrompt(fireMsg);
      teacher.speakFrench(fireMsg);
    } else {
      sounds.playPop();
      const offMsg = "Feu éteint sur la cuisinière ! Fais attention à ne pas te brûler !";
      onTeacherPrompt(offMsg);
      teacher.speakFrench(offMsg);
    }
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
        if (!isFireOn) {
          sounds.playFireIgnite();
          setIsFireOn(true);
        }
        sounds.playCookingSizzle();
        sounds.playBoilBubble();
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

    if (!isFireOn) {
      sounds.playFireIgnite();
      setIsFireOn(true);
    }

    sounds.playFootstep();
    setTyannaFacing('right');
    setTyannaX(78);
    setTyannaAction('stirring');
    sounds.playCookingSizzle();
    sounds.playBoilBubble();

    setTimeout(() => {
      setDishReady(true);
      setShowPlateModal(true);
      setTyannaAction('cheering');
      sounds.playSuccess();
      sounds.playChime();
      confetti({ particleCount: 85, spread: 75, origin: { y: 0.5 } });
      if (onRewardStar) onRewardStar();

      const cheer = `Tadaaa ! ${currentRecipe.title} est cuisinée à la perfection ! Regarde le magnifique plat avec Tyanna !`;
      onTeacherPrompt(cheer);
      teacher.speakBilingual(cheer, "Yummy! The dish is ready! Look at the delicious plate!");
    }, 1600);
  };

  // Tasting action
  const handleTasteDish = () => {
    sounds.playMunch();
    sounds.playSuccess();
    setTastedTimes((t) => t + 1);
    setTyannaAction('tasting');
    confetti({ particleCount: 50, spread: 60 });
    if (onRewardStar) onRewardStar();

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
          📋 Ingrédients de la recette :
        </span>
        {currentRecipe.isAssembly && (
          <button
            onClick={() => {
              sounds.playPop();
              setAssemblyType(currentRecipe.assemblyType || 'burger');
              setShowAssemblyModal(true);
            }}
            className="action-button primary animate-bounce-soft"
            style={{
              background: 'linear-gradient(135deg, #e67e22, #d35400)',
              color: '#ffffff',
              padding: '6px 16px',
              fontSize: '0.85rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 900,
              boxShadow: '0 4px 12px rgba(211, 84, 0, 0.4)',
            }}
          >
            🍔 Assembler le Burger / Hot-Dog ! 🌭
          </button>
        )}
        {currentRecipe.steps.map((stepId, idx) => {
          const ing = KITCHEN_INGREDIENTS.find((i) => i.id === stepId);
          const isDone = inPot.includes(stepId);
          const isNext = nextRequiredId === stepId;
          return (
            <div
              key={stepId}
              onClick={() => !isDone && ing && handleFetchIngredient(ing)}
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
              <span>{ing?.emoji || '🍽️'} {ing?.nameFr || stepId}</span>
              <span>{isDone ? '✅' : isNext ? '👈' : '⏳'}</span>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          THE FULL 2D/3D KITCHEN ROOM ENVIRONMENT WITH TYANNA WALKING
         ========================================================================= */}
      <div
        ref={kitchenArenaRef}
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

          <button
            onClick={(e) => {
              e.stopPropagation();
              sounds.playPop();
              setAssemblyType('burger');
              setShowAssemblyModal(true);
            }}
            style={{
              marginTop: '4px',
              background: 'linear-gradient(135deg, #e67e22, #d35400)',
              color: '#ffffff',
              border: '1.5px solid #fff',
              borderRadius: '999px',
              padding: '3px 8px',
              fontSize: '0.62rem',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            }}
            title="Ouvrir l'Atelier d'Assemblage Burger & Hot-Dog !"
          >
            🍔 Burger & Hot-Dog 🌭
          </button>
        </div>

        {/* =====================================================================
            STATION 4: LA CUISINIÈRE / FEUX & MARMITE 3D (RIGHT SIDE)
           ===================================================================== */}
        <div
          onClick={handleCookAndStir}
          style={{
            position: 'absolute',
            bottom: '55px',
            right: '14px',
            width: '175px',
            height: '165px',
            background: 'linear-gradient(135deg, #2d3436 0%, #1e272e 100%)',
            borderRadius: '22px 22px 12px 12px',
            border: isFireOn ? '3px solid #ff4757' : '3px solid #485460',
            boxShadow: isFireOn
              ? '0 12px 28px rgba(255, 71, 87, 0.4), 0 0 20px rgba(255, 165, 2, 0.3)'
              : '0 12px 24px rgba(0,0,0,0.3)',
            zIndex: 10,
            cursor: 'pointer',
            padding: '8px 6px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'all 0.3s ease',
          }}
          title="Touche pour faire cuire et mélanger !"
        >
          {/* Billowing Steam & Scent Clouds Rising Up from Pot */}
          {isFireOn && inPot.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '-42px',
                left: '50%',
                transform: 'translateX(-50%)',
                pointerEvents: 'none',
                display: 'flex',
                gap: '12px',
                zIndex: 20,
              }}
            >
              <span className="kitchen-steam-puff steam-1">💨</span>
              <span className="kitchen-steam-puff steam-2">♨️</span>
              <span className="kitchen-steam-puff steam-3">💨</span>
            </div>
          )}

          {/* Stovetop Burners & Flames */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', position: 'relative' }}>
            {/* Glowing Flame */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {isFireOn ? (
                <div style={{ fontSize: '1.75rem', lineHeight: 1 }} className="animate-flicker">🔥</div>
              ) : (
                <div style={{ fontSize: '1.2rem', lineHeight: 1, opacity: 0.3 }}>♨️</div>
              )}

              {/* Cast Iron Pot / Dutch Oven */}
              <div
                style={{
                  width: '100px',
                  height: '60px',
                  background: 'linear-gradient(180deg, #e74c3c 0%, #c0392b 100%)',
                  borderRadius: '6px 6px 22px 22px',
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
                <div
                  style={{
                    width: '90px',
                    height: '44px',
                    background: inPot.length > 0 ? (isFireOn ? '#e67e22' : '#f39c12') : '#bdc3c7',
                    borderRadius: '50%',
                    border: '2px solid #d35400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {inPot.length === 0 ? (
                    <span style={{ fontSize: '0.62rem', fontWeight: 800, color: '#fff' }}>Vide...</span>
                  ) : (
                    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {/* Animated Boiling Bubbles */}
                      {isFireOn && (
                        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                          <span className="soup-bubble sb-1" />
                          <span className="soup-bubble sb-2" />
                          <span className="soup-bubble sb-3" />
                          <span className="soup-bubble sb-4" />
                        </div>
                      )}
                      {/* Floating Ingredients inside Boiling Soup */}
                      <div
                        style={{ display: 'flex', gap: '2px', flexWrap: 'wrap', justifyContent: 'center', zIndex: 2 }}
                        className={isFireOn ? 'animate-soup-boil' : ''}
                      >
                        {inPot.map((id, i) => (
                          <span key={i} style={{ fontSize: '0.82rem' }}>
                            {KITCHEN_INGREDIENTS.find((ing) => ing.id === id)?.emoji}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stovetop Controls: Fire Button & Stir Button */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '8px', alignItems: 'center' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggleFire();
              }}
              style={{
                background: isFireOn ? 'linear-gradient(135deg, #ff4757, #ff6b81)' : 'linear-gradient(135deg, #57606f, #747d8c)',
                color: '#fff',
                border: '1.5px solid #fff',
                borderRadius: '999px',
                padding: '4px 8px',
                fontSize: '0.68rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: isFireOn ? '0 0 8px #ff4757' : 'none',
              }}
              title="Allumer ou éteindre le feu de la cuisinière"
            >
              {isFireOn ? '🔥 Feu ON' : '🔘 Allumer'}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCookAndStir();
              }}
              style={{
                background: 'linear-gradient(135deg, #f1c40f, #e67e22)',
                color: '#2d3436',
                border: 'none',
                borderRadius: '999px',
                padding: '5px 10px',
                fontSize: '0.72rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 3px 0 #b7791f',
              }}
            >
              🥄 {dishReady ? 'Mélanger' : `Cuire (${inPot.length}/${currentRecipe.steps.length})`}
            </button>
          </div>
        </div>

        {/* =====================================================================
            TYANNA 2D ARTICULATED WALKING CHARACTER IN THE KITCHEN
           ===================================================================== */}
        <div
          className={`tyanna-kitchen-body ${tyannaAction === 'walking' || isDraggingTyanna ? 'is-walking-trot' : ''}`}
          onPointerDown={handleTyannaPointerDown}
          onPointerMove={handleTyannaPointerMove}
          onPointerUp={handleTyannaPointerUp}
          onPointerCancel={handleTyannaPointerUp}
          style={{
            position: 'absolute',
            bottom: '22px',
            left: `${tyannaX}%`,
            transform: `translateX(-50%) scaleX(${tyannaFacing === 'left' ? -1 : 1})`,
            transition: isDraggingTyanna ? 'none' : 'left 0.85s cubic-bezier(0.25, 1, 0.5, 1)',
            zIndex: 25,
            cursor: isDraggingTyanna ? 'grabbing' : 'grab',
            touchAction: 'none',
            userSelect: 'none',
            pointerEvents: 'auto',
          }}
          title="Touche et glisse Tyanna de gauche à droite dans la cuisine !"
        >
          {/* Drag instruction badge */}
          {!isDraggingTyanna && !carriedItem && tyannaAction === 'idle' && (
            <div
              style={{
                position: 'absolute',
                top: '-26px',
                left: '50%',
                transform: `translateX(-50%) scaleX(${tyannaFacing === 'left' ? -1 : 1})`,
                whiteSpace: 'nowrap',
                background: '#ffeaa7',
                color: '#d35400',
                border: '1px solid #f39c12',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.62rem',
                fontWeight: 900,
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                pointerEvents: 'none',
              }}
            >
              👆 Glisse-moi !
            </div>
          )}
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
                onClick={() => setShowPlateModal(true)}
                className="action-button primary"
                style={{ background: 'linear-gradient(135deg, #f1c40f, #e67e22)', color: '#2d3436' }}
              >
                🍽️ Voir le Grand Plat & la Recette !
              </button>
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
                onClick={() => {
                  const next = (recipeIdx + 1) % KITCHEN_RECIPES.length;
                  setRecipeIdx(next);
                  startNewRecipe(next);
                }}
                className="action-button secondary"
              >
                Nouvelle Recette 👩‍🍳
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================================
          FINAL PLATE PRESENTATION MODAL WITH RECIPE SUMMARY & TASTING
         ===================================================================== */}
      {showPlateModal && (
        <div className="final-plate-modal-backdrop" onClick={() => setShowPlateModal(false)}>
          <div className="final-plate-dialog animate-pop" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setShowPlateModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: '#f1f2f6',
                border: 'none',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                fontSize: '1.2rem',
                cursor: 'pointer',
                fontWeight: 900,
                color: '#57606f',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              ✕
            </button>

            {/* Golden Chef Trophy Badge */}
            <div style={{ fontSize: '2.4rem', marginBottom: '2px' }} className="animate-bounce-soft">
              🏆👨‍🍳⭐
            </div>

            <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#d35400', margin: '4px 0' }}>
              {currentRecipe.title}
            </h2>
            <p style={{ fontSize: '0.88rem', color: '#2d3436', fontWeight: 700, margin: '2px 0 10px 0' }}>
              {currentRecipe.resultTitle}
            </p>

            {/* The 3D Golden Serving Platter with Steaming Meal */}
            <div
              className="gourmet-platter-3d"
              style={{
                width: '270px',
                height: '150px',
                background: 'linear-gradient(135deg, #f5f6fa 0%, #dcdde1 50%, #b2bec3 100%)',
                borderRadius: '50%',
                border: '6px solid #f1c40f',
                boxShadow: '0 16px 36px rgba(0,0,0,0.35), inset 0 4px 12px #ffffff',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '8px 0 14px 0',
              }}
            >
              {/* Steam Puffs over the Plate */}
              <div style={{ position: 'absolute', top: '-26px', display: 'flex', gap: '14px', fontSize: '1.3rem' }}>
                <span className="kitchen-steam-puff steam-1">💨</span>
                <span className="kitchen-steam-puff steam-2">♨️</span>
                <span className="kitchen-steam-puff steam-3">💨</span>
              </div>

              {/* Jumbo Dish Emoji / Graphic */}
              <span style={{ fontSize: '4.2rem', filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.25))' }} className="animate-bounce-soft">
                {currentRecipe.resultEmoji}
              </span>
            </div>

            {/* Recipe Checklist: Visual What Was Done Card */}
            <div
              style={{
                width: '100%',
                background: '#f8f9fa',
                border: '2px solid #e1e8ed',
                borderRadius: '18px',
                padding: '12px 14px',
                marginBottom: '16px',
              }}
            >
              <h4 style={{ fontSize: '0.82rem', fontWeight: 900, color: '#636e72', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                📋 Ingrédients Cuisinés avec Succès :
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                {currentRecipe.steps.map((ingId) => {
                  const ing = KITCHEN_INGREDIENTS.find((i) => i.id === ingId);
                  return (
                    <div
                      key={ingId}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: '#ffffff',
                        padding: '6px 10px',
                        borderRadius: '12px',
                        border: '1.5px solid #2ecc71',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      }}
                    >
                      <span style={{ fontSize: '1.2rem' }}>{ing?.emoji}</span>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2d3436', flex: 1, textAlign: 'left' }}>
                        {ing?.nameFr}
                      </span>
                      <span style={{ color: '#27ae60', fontWeight: 900, fontSize: '0.9rem' }}>✅</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              <button
                onClick={handleTasteDish}
                className="step-forward-btn"
                style={{
                  background: 'linear-gradient(135deg, #e84393, #fd79a8)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  padding: '10px 18px',
                  border: 'none',
                }}
              >
                😋 Goûter le Plat ! ({tastedTimes}x)
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  const nextIdx = (recipeIdx + 1) % KITCHEN_RECIPES.length;
                  setRecipeIdx(nextIdx);
                  startNewRecipe(nextIdx);
                }}
                className="step-forward-btn"
                style={{
                  background: 'linear-gradient(135deg, #2ecc71, #10ac84)',
                  color: '#fff',
                  fontSize: '0.95rem',
                  padding: '10px 18px',
                  border: 'none',
                }}
              >
                👨‍🍳 Recette Suivante ➡️
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          BURGER & HOT-DOG POP-UP ASSEMBLY MODAL
         ===================================================================== */}
      {showAssemblyModal && (
        <BurgerHotdogAssemblyModal
          initialType={assemblyType}
          onClose={() => setShowAssemblyModal(false)}
          onRewardStar={onRewardStar}
          onTeacherPrompt={onTeacherPrompt}
        />
      )}
    </div>
  );
}
