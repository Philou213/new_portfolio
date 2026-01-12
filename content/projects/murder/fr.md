---
title: Murder
locale: fr
release: 2025
featured : true
image: /images/projects/murder.jpg
repo: https://github.com/Philou213/TP_Murder
type: "Unreal"
tags:
    - Unreal
    - Scolaire
layout: project
context: "Projet scolaire"
role: "Développeur Gameplay/Réseau"
description: "Jeu multijoueur en ligne de déduction "
---
## Présentation du jeu
Murder est un jeu multijoueur en ligne de déduction. Inspiré de *Among Us* et du mode Murder sur *Garry's mod*.

## Contexte du projet
Ce jeu a été développé lors du cours de **Programmation réseau multi-joueurs en ligne** à l'UQAC en automne 2025. Ce jeu est mon premier projet en multijoueur en ligne.

## Mon travail
J'ai travaillé principalement travaillé sur le jeu en solo. Tout le développement réseau a été fait par moi.

### Architecture autorité serveur
Le projet repose sur une **architecture réseau à autorité serveur**, utilisant la réplication d’Unreal Engine et des RPCs pour gérer la communication entre clients et serveur. Les décisions critiques sont validées côté serveur afin d’assurer la cohérence du jeu et de limiter les abus.

### Vérification des tirs
Implémentation d’un **système de vérification serveur** des tirs. Lorsqu’un joueur tire, le serveur reconstruit temporairement l’état des joueurs à partir de données passées, repositionne leurs colliders, puis rejoue le tir de son côté pour en confirmer la validité. Cette approche permet de compenser les effets de la latence tout en réduisant les possibilités de triche.

### Temps synchronisé
Développement d’un **système personnalisé de mesure de latence** basé sur des échanges RPC réguliers entre client et serveur. Ces mesures servent à maintenir une référence temporelle synchronisée, utilisée notamment pour les mécaniques dépendantes du temps, comme les timers.
