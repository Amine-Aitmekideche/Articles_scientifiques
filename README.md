# Site Web de Consultation d’Articles Scientifiques

## Description
Ce projet est un site web développé avec **React** pour la consultation d’articles scientifiques.  
Il propose un **dashboard moderne** avec navigation fluide et un **système de recherche avancée** basé sur **Elasticsearch**, permettant d’extraire efficacement les informations pertinentes des articles.  

## Fonctionnalités
- Dashboard moderne et responsive
- Navigation fluide entre les sections
- Recherche avancée d’articles scientifiques via Elasticsearch
- Filtres dynamiques par catégorie, auteur, date, etc.
- Interface conviviale et intuitive
- Ajouter des articles aux favoris
- Voir les détails complets de chaque article
- Télécharger les articles au format PDF


## Installation

1. Cloner le repository :
```bash
git clone <url-du-repo>
cd <nom-du-projet>
```
2. Installer les dépendances :
```bash
npm install
```

3. Lancer le projet en mode développement :
```bash
npm start
```

4. Lancer le serveur JSON pour les données mock :
```bash
npx json-server -p 3000 -w data/auteurs.json
npx json-server -p 3500 -w data/favorite.json
```