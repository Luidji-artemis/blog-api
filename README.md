# INF222 – EC1 (Développement Backend) : Programmation Web

# TAF1 - Apprentissage structuré et personnalisé avec CleeRoute: https://www.cleeroute.com/fr

# Application BLOG-API

Cette application est une API REST backend développée dans le cadre du cours INF222 (Développement Backend).

Le projet permet la gestion complète des articles d’un blog avec opérations CRUD :

- Création d’un article
- Consultation de tous les articles
- Consultation d’un article spécifique
- Modification d’un article
- Suppression d’un article
- Recherche d’articles
- Filtrage par catégorie, auteur ou date

## Objectif du TAF1

Ce projet a pour objectif de mettre en pratique :

- la structuration d’une API backend
- Développer l'esprit critique
- la gestion des routes HTTP
- la manipulation d’une base de données locale
- la documentation d’API avec Swagger
- les bonnes pratiques de développement (validation, codes HTTP, architecture MVC)

## Technologies utilisées

| Technologie  | Rôle                      |
|--------------|---------------------------|
| Node.js      | Langage serveur           |
| Express.js   | Framework web             |
| SQLite       | Base de données locale    |
| Swagger UI   | Documentation interactive |
| Postman      | Tests de l’API            |
| Nodemon      | Rechargement automatique  |

## Architecture du projet

blog-api/
│── config/
│   └── db.js
│
│── controllers/
│   └── articleController.js
│
│── models/
│   └── articleModel.js
| 
│── node_modules/
|
│── public
│   └── index.html
|
│── routes/
│   └── articleRoutes.js
│
│── app.js
│── blog.db
│── package-lock.json
│── package.json
│── README.mds


## Installation

### 1. Cloonage du dépôt GitHub

```bash
git clone https://github.com/TON-LIEN.git
cd blog-api
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur

```bash
npm run dev
```

## Lancement local

Le serveur fonctionne sur :

```bash
http://localhost:3000
```
 Accès à l'interface web

## Documentation API Swagger

Swagger est disponible via :

```bash 
http://localhost:3000/api-docs
```

## Fonctionnalités (Endpoints) disponibles de l'app

### 1. Créer un article

```bash
POST /api/articles
```

### Corps JSON

```json
{
  "titre": "Premier article",
  "contenu": "Contenu test",
  "auteur": "Luidji",
  "date": "2026-03-23",
  "categorie": "Tech",
  "tags": "nodejs,api"
}
```

### Réponse (201 Created) :

```json
{
  "message": "Article créé",
  "id": 1
}
```

### 2. Lire tous les articles

```bash
GET /api/articles
```
Réponse (200 OK) :

 ```json
  {
    "id": 1,
    "titre": "Premier article",
    "contenu": "Contenu test",
    "auteur": "Luidji",
    "date": "2026-03-23",
    "categorie": "Tech",
    "tags": "nodejs,api"
  } ```

### 3. Lire un article par identifiant

```bash
GET /api/articles/:id
```
Exemple :

```bash
GET /api/articles/1
```

### 4. Modifier un article

```bash
PUT /api/articles/:id
```

### Corps JSON

```json
{
  "titre": "Article modifié",
  "contenu": "Nouveau contenu",
  "categorie": "Backend",
  "tags": "express,node"
}
```

### 5. Supprimer un article

```bash
DELETE /api/articles/:id
```

### 6. Rechercher un article

```bash
GET /api/articles/search?query=texte
```

Exemple :

```bash
GET /api/articles/search?query=article
```
## 7. Filtrer les articles

```bash
GET /api/articles?categorie=Tech
GET /api/articles?auteur=Luidji
GET /api/articles?date=2026-03-23
GET /api/articles?categorie=Tech&auteur=Luidji
```

## Codes HTTP utilisés

* 200 OK
* 201 Created
* 400 Bad Request
* 404 Not Found
* 500 Internal Server Error

## Base de données

La persistance de ces  données repose sur SQLite.

Fichier local utilisé :

```bash
blog.db
```
## Validation des données
L'API valide les entrées utilisateur :

titre : obligatoire

auteur : obligatoire

Si ces champs sont absents → retour 400 Bad Request


## Outils de test

Les tests API ont été réalisés localement avec :

* Postman
* Swagger UI

## Auteur

```bash
Nom : ZE ZE FELIX LASKY
Matricule : 24G2251
Niveau : Licence 2