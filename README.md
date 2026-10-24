# 🌟 Le Petit Explorateur (Little Explorer)

Application web ludo-éducative bilingue (**Français & Anglais**) spécialement conçue pour les tout-petits de **3 ans**.

---

## 🎨 Fonctionnalités Principales

### 🗣️ Maîtresse Virtuelle avec Voix Française & Bilingue
* Synthèse vocale interactive en français (`SpeechSynthesis` avec voix française chaleureuse).
* Répétition des mots clés en anglais pour une initiation naturelle au bilinguisme.
* Mascotte animée interactive ("Madame Chouette") qui bouge la bouche lorsqu'elle parle et permet de réécouter la consigne en un clic.

### 📚 Ateliers d'Éveil & Vocabulaire
* 🎨 **Les Couleurs** : Découverte des couleurs (Rouge, Bleu, Jaune, Vert, Orange, Violet, Rose, Marron) avec confettis et objets associés.
* 🔤 **L'Alphabet & Les Lettres** : Clavier tactile avec grandes touches adaptées aux petites mains (A comme Avion / Airplane, B comme Ballon / Ball, etc.).
* 🍎 **Le Panier de Fruits** : Pommes, bananes, fraises, oranges, pastèques avec anecdotes sonores et visuelles adaptées.
* 🧸 **Les Objets du Quotidien** : Chaussures, brosse à dents, lit, cuillère, doudou, livre, verre d'eau.

### 🎮 Mini-Jeux d'Action & Résolution de Problèmes (3 ans)
* 🍲 **La Petite Cuisine du Chef** : Le tout-petit suit la consigne de la maîtresse pour ajouter des légumes dans la marmite géante, remuer avec la cuillère en bois et préparer une soupe !
* 🚗 **La Petite Voiture en Ville** : Choix de la couleur de la voiture, contrôle simplifié (Gauche, Droite, Rouler), klaxon "Tut-tut !", respect du feu tricolore (Rouge = Stop, Vert = On roule !) et étoiles à collectionner.
* 🚒 **Le Petit Pompier (De l'eau sur le feu !)** : Simulation bienveillante où l'enfant appuie sur la lance à incendie pour arroser le feu avec des jets d'eau sonores jusqu'à ce qu'il s'éteigne et laisse place à de jolies fleurs.
* 🧩 **Résolution Facile de Problèmes** : Énigmes de tri visuel et reconnaissance de formes (cercles, carrés, cœurs, étoiles) et couleurs.

---

## 🚀 Démarrage Rapide

### Prérequis
* [Node.js](https://nodejs.org/) (v18+)

### Installation & Lancement en local
```bash
# 1. Accéder au dossier du projet
cd "C:\Users\tiegb\.gemini\antigravity\scratch\petit-explorateur"

# 2. Installer les dépendances (déjà fait si exécuté depuis ce dossier)
npm install

# 3. Démarrer le serveur de développement
npm run dev
```
Ouvrez le lien local affiché (généralement `http://localhost:5173`) sur votre navigateur, tablette ou smartphone.

---

## 🐙 Comment publier sur GitHub

1. Créez un nouveau dépôt vide sur votre compte GitHub (ex: `petit-explorateur`).
2. Dans le terminal, exécutez les commandes suivantes :
```bash
cd "C:\Users\tiegb\.gemini\antigravity\scratch\petit-explorateur"

# Ajouter le dépôt distant (remplacez VOTRE_UTILISATEUR par votre pseudo GitHub)
git remote add origin https://github.com/VOTRE_UTILISATEUR/petit-explorateur.git

# Renommer la branche principale en main
git branch -M main

# Envoyer le code sur GitHub
git push -u origin main
```

### 🌐 Déploiement gratuit sur GitHub Pages
Le projet est configuré avec un chemin relatif (`base: './'`). Vous pouvez déployer gratuitement le dossier `dist` sur GitHub Pages ou via GitHub Actions en 1 clic !
