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
Piece by Piece est un jeu de plateforme-puzzle dans lequel chaque niveau est composé de pièces de puzzle que le joueur doit assembler pour se créer un chemin vers l'arrivée.
Le jeu a d'abord été le gagnant de la Wonderjam automne 2024 avant d'être développé comme un jeu commercial. 

## Mon travail
J'ai eu le rôle de développeur et designer UI/UX sur le jeu. J'ai aussi travaillé sur des outils pour faciliter le développement.

### Interfaces et menus
Mise en place d’un système d’interface modulaire dans Godot, supportant la navigation souris, clavier et manette. Le système gère le focus, les transitions et les interactions de manière cohérente, indépendamment du périphérique d’entrée utilisé. Les menus ont été conçus pour être facilement extensibles et maintenables. Le système est réutilisable pour d’autres projets.

### Sous-système de son / musique
Développement d’un sous-système audio global dans Godot, responsable de la gestion des musiques et des effets sonores, avec support des crossfades, de la persistance et de la modification sonore. Un outil personnalisé permet de parcourir les fichiers audio du projet et de les enregistrer dans une structure clé/valeur, offrant une interface simple pour déclencher les sons en code sans dépendre de chemins de fichiers explicites.