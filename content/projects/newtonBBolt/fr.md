---
title: Newton & Bolt
locale: fr
release: 2025
image: /images/projects/newtonNBolt.png
link: https://astro-starboy.itch.io/newton-et-bolt
type: "Unreal"
tags:
    - Unreal
    - Scolaire
layout: project
featured: true
context: "Projet scolaire multidisciplinaire"
role: "Programmeur Gameplay/UI"
description: "Un jeu Puzzle-Plateforme avec des pouvoirs de magnétisme"
---
<div class="flex justify-center">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/pM3HFEJgNS0?si=vfzDH4_Dz8AEJtOU"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## Présentation du jeu
Newton & Bolt est un jeu de plateforme-puzzle dans lequel un robot nommé Newton doit fuir une ville remplie de robots hostiles pour ramener son ami chien, Bolt, sain et sauf à la maison.
Pour cela, le joueur doit esquiver les patrouilles ennemis et parcourir les environnements en s'aimantant sur les murs.

## Contexte du projet
Ce jeu a été développé lors du cours de Atelier de production de jeux vidéo I à l'UQAC en automne 2025. Ce jeu est ma première production d'un jeu en équipe multidisciplinaire et aussi mon premier projet complet sur le moteur Unreal Engine.

## Mon travail
J'ai eu le rôle de développeur Gameplay/UI sur le projet.

### Cône de vision
<video src="/videos/newtonNBolt/ConeDeVision.mp4" autoplay muted loop playsinline></video> <br>
Le jeu comporte des drones ennemis dont l’objectif est de détecter le joueur. J’ai donc développé leur système de vision. Le fonctionnement est simple : j’ai créé un composant combinant une lumière pour la partie visuelle et une logique en C++. Ce choix permet de l’attacher facilement à n’importe quel acteur, par exemple un futur type d’ennemi.
Côté logique, le système vérifie d’abord si le joueur se trouve à une distance suffisante pour être dans le champ de vision du drone. Ensuite, il calcule l’angle entre le drone et le joueur à l’aide d’un produit scalaire pour déterminer si ce dernier se situe dans le cône de vision. Enfin, un raycast est utilisé pour confirmer que le drone a une ligne de vue directe sur le joueur, afin d’éviter toute détection à travers les obstacles.

### Écran de chargement
<video src="/videos/newtonNBolt/Chargement.mp4" autoplay muted loop></video> <br>
Au départ, l’écran de chargement se trouvait dans un niveau séparé. Un subsystem s’occupait de charger cette scène de transition, de l’afficher, puis de lancer le chargement de la scène suivante. Le chargement n’était toutefois pas asynchrone, ce qui figeait l’interface de chargement et donnait un résultat peu satisfaisant.
Après des recherches, j’ai constaté que le MoviePlayer offrait une meilleure solution. Ce système peut afficher une interface sans dépendre du Game Thread, ce qui le rend utilisable même en plein chargement. Unreal Engine l’emploie notamment pour le splash screen au démarrage. J’ai donc ajusté le fonctionnement. À chaque appel à OpenLevel(), le GameInstance déclenche un delegate qui crée et affiche un nouvel écran de chargement à l’aide du MoviePlayer.

### Sous-système de musique
<video src="/videos/newtonNBolt/MusiqueTransition.mp4" controls loop></video> <br>
Ce sous-système, intégré à la GameInstance, sert à jouer des musiques facilement et à les faire boucler même lors d’une transition de niveau. Il utilise la méthode SpawnSound2D pour ajouter un son au niveau, en activant le paramètre vPersistAcrossLevelTransition afin que la musique persiste d’un niveau à l’autre. Le volume du nouveau son commence à zéro, ce qui permet de l’augmenter progressivement. S’il y avait une musique déjà en cours, on peut en diminuer le volume graduellement pour créer un crossfade. Ensuite, ce sous-système peut être utilisé à partir d’un Level Blueprint pour commencer en début de niveau ou avec des zones dans le niveau qui appelle le sous-système quand le joueur entre dans la zone.

### Tapis roulant et Pool d'objets
<video src="/videos/newtonNBolt/ConeDeVision.mp4" autoplay muted loop></video> <br>
Le tapis roulant utilise un composant appelé ConveyorComponent. Celui-ci contient un BoxComponent qui détecte lorsqu’un acteur y entre. Pour chaque acteur présent dans la zone, un déplacement est appliqué à chaque Tick dans une direction donnée et à une certaine vitesse. Ces deux paramètres peuvent être modifiés dans la version Blueprint ou individuellement pour chaque instance.
Deux autres acteurs servent à créer un pool d’objets. PropGenerator génère au début du jeu un certain nombre d’instances d’objets désactivées. La quantité d’instances et le type d’objet peuvent être ajustés par les designers. Après un délai défini, un objet désactivé est réactivé et placé à la position du PropGenerator. L’acteur PropDisabler, de son côté, détecte lorsqu’un objet entre dans sa zone et le désactive. Ensemble, ces deux acteurs permettent de maintenir une boucle infinie d’objets.

### Points de réapparition
<video src="/videos/newtonNBolt/PointDeReapparition.mp4" autoplay muted loop></video> <br>
Les points de réapparition fonctionnent de manière simple. Chaque point possède un SphereCollider qui détecte l’entrée du joueur dans la zone et active le point en question. Chaque point possède aussi un rang, ce qui empêche de réactiver un point déjà dépassé. Lorsqu’un point est activé, il devient le nouveau point de réapparition enregistré.
Pour la réapparition, je détruis le joueur, puis j’utilise la méthode RespawnCharacter d’Unreal. J’ai toutefois modifié GetPlayerStart afin qu’elle renvoie le dernier point de réapparition plutôt que le PlayerStart d’origine s’il existe.

### Tutoriels
<video src="/videos/newtonNBolt/Tutoriels.mp4" autoplay muted loop></video> <br>
Chaque zone de tutoriel utilise un BoxCollider qui détecte l’entrée du joueur. Chaque zone possède aussi un texte envoyé au HUD afin d’afficher le contenu approprié tout en lui indiquant d’activer l’interface de tutoriel. L’interface reste visible tant que le joueur se trouve dans la zone et disparaît lorsque le BoxCollider ne le détecte plus.
Pour l’affichage du texte, j’ai utilisé un RichTextLabel, ce qui facilite l’intégration d’images dans l’interface.