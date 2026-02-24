---
title: Piece by Piece
locale: fr
release: En développement
image: /images/projects/pieceByPiece.png
link: https://store.steampowered.com/app/3249380/Piece_by_Piece/
type: "Godot"
tags:
    - Godot
    - Commercial
    - Favorite
layout: project
featured: true
context: "Projet commercial"
role: "Programmeur / Designer"
description: "LITTÉRALEMENT un jeu de casse-tête"
---
<div class="flex justify-center">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ETp1hEq12Ks?si=bT-ZlB4jkBkGbS53"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Présentation du jeu  
**Piece by Piece** est un jeu de plateforme-puzzle dans lequel chaque niveau est composé de pièces de puzzle que le joueur doit assembler afin de se créer un chemin vers l’arrivée.  
Le jeu a d’abord remporté la Wonderjam automne 2024 avant d’être développé comme un jeu commercial.

## Contexte du projet  
Ce jeu a débuté lors de la Game Jam Wonderjam de l’UQAC à l’automne 2024. Son développement s’est ensuite poursuivi pendant nos temps libres, jusqu’à aboutir à une version complète prête pour une sortie sur Steam.

## Outils  
Ce jeu a été développé avec **Godot 4**.

## Mon travail  
J’ai occupé le rôle de **développeur UI et designer** sur le projet. J’ai travaillé sur les interfaces, la conception de niveaux et la création de nouvelles mécaniques.

### Interfaces et menus  
Mise en place d’un système d’interface modulaire dans Godot, supportant la navigation à la souris, au clavier et à la manette. Le système gère le focus, les transitions et les interactions de manière cohérente, indépendamment du périphérique d’entrée utilisé.  
<br>
Les menus ont été conçus pour être facilement extensibles et maintenables. Le système est réutilisable pour d’autres projets.

### Sous-système de son / musique  
Développement d’un sous-système audio global dans Godot, responsable de la gestion des musiques et des effets sonores, avec prise en charge des crossfades, de la persistance et des modifications sonores.  
<br>
Un outil personnalisé permet de parcourir les fichiers audio du projet et de les enregistrer dans une structure clé/valeur, offrant une interface simple pour déclencher les sons en code sans dépendre de chemins de fichiers explicites.

### Conception de mécaniques  
Conception de mécaniques visant à complexifier le jeu, notamment :  

- Des pièces pouvant pivoter  
- Des pièces pouvant être retournées  
- Des portails  
- Une pièce spéciale qui duplique une autre pièce  
- Une pièce spéciale qui s’ajoute à une autre pièce  
- De la terre traversable, mais sur laquelle il est impossible de s’arrêter  

### Conception de niveaux  
La conception des niveaux a représenté un réel défi, car il fallait créer des niveaux qui, à première vue, semblent difficiles, mais qui, après réflexion et expérimentation, restent relativement accessibles.  
<br>
Il fallait également introduire progressivement les nouvelles mécaniques et s’assurer que les joueurs les comprennent afin de pouvoir aborder les niveaux plus avancés.