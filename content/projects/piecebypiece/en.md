---
title: Piece by Piece
locale: en
release: In development
image: /images/projects/pieceByPiece.png
link: https://store.steampowered.com/app/3249380/Piece_by_Piece/
type: "Godot"
tags:
    - Godot
    - Commercial
    - Favorite
layout: project
featured: true
context: "Commercial project"
role: "UI/UX developer and designer"
description: "A LITERAL puzzle-platformer game"
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

## Game Overview  
**Piece by Piece** is a platformer-puzzle game where each level is made up of puzzle pieces that the player must assemble to create a path to the goal.  
The game first won Wonderjam Fall 2024 before continuing development as a commercial project.

## Project Context  
The project began during the Wonderjam Game Jam at UQAC in Fall 2024. Development then continued in our spare time, eventually leading to a complete version prepared for release on Steam.

## Tools  
This game was developed using **Godot 4**.

## My Role  
I worked as a **UI Developer and Designer** on the project. My responsibilities included interface implementation, level design, and the creation of new gameplay mechanics.

### UI and Menu Systems  
Implemented a modular UI system in Godot supporting mouse, keyboard, and controller navigation. The system handles focus management, transitions, and interactions consistently across all input devices.  
<br>
The menus were designed to be easily extensible and maintainable. The system is reusable for future projects.

### Audio / Music Subsystem  
Developed a global audio subsystem in Godot responsible for managing music and sound effects, including support for crossfades, persistence, and dynamic audio modifications.  
<br>
A custom tool was created to browse project audio files and register them into a key/value structure, providing a clean interface for triggering sounds in code without relying on explicit file paths.

### Gameplay Mechanics Design  
Designed mechanics to increase gameplay complexity, including:  

- Rotatable puzzle pieces  
- Flippable puzzle pieces  
- Portals  
- A special piece that duplicates another piece  
- A special piece that attaches to another piece  
- Traversable dirt tiles where the player cannot stop  

### Level Design  
Level design was a significant challenge, as levels needed to appear difficult at first glance while remaining accessible after experimentation and reflection.  
<br>
It was also essential to progressively introduce new mechanics and ensure players understood them before encountering more advanced challenges.