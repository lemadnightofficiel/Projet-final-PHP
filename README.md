# TP Final PHP - Gestion des Superhéros

## Description du Projet
Ce projet a pour objectif de développer un site web permettant de gérer une base de données de superhéros. Le projet est divisé en deux parties :

- **Back-end** : Une API REST développée avec Laravel.
- **Front-end** : Une interface utilisateur utilisant React (Expo).

## Objectifs
Le site doit permettre aux utilisateurs de :

- Créer un compte et se connecter.
- Ajouter, modifier, afficher et supprimer des superhéros.
- Rechercher des superhéros selon différents critères.

## Technologies Utilisées
- **Back-end** : Laravel (PHP, Sqlite)
- **Front-end** : React (Expo)
- **Base de données** : Sqlite
- **Authentification** : Laravel Auth

## Fonctionnalités
### 1. Back-end (API REST Laravel)
Chaque superhéros possède les attributs suivants :

- **Nom** (vrai et pseudo, ex : Iron Man / Tony Stark)
- **Sexe**
- **Planète d’origine**
- **Description**
- **Superpouvoirs**
- **Ville de protection** (ex : Gotham pour Batman)
- **Gadgets**
- **Équipe**
- **Véhicule**

#### Gestion des utilisateurs :
- Un utilisateur peut gérer uniquement ses propres superhéros.
- Attributs utilisateur : **Nom, Prénom, Email, Mot de passe**.

### 2. Front-end
- Interface intuitive permettant l’utilisation complète de l’API.
- Inscription et connexion des utilisateurs.
- Gestion des superhéros (**ajout, modification, suppression, recherche, affichage**).

## Installation et Déploiement
### Prérequis
- **PHP >= 8.0**
- **Composer**
- **Node.js**
- **MySQL**

### Installation du Back-end
```sh
cd api-rest
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### Installation du Front-end
```sh
cd front-hero
npm install
npm run dev
```