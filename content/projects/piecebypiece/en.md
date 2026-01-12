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
**Piece by Piece** is a platformer-puzzle game in which each level is composed of puzzle pieces that the player must assemble to create a path to the goal.  
The game first won **Wonderjam Fall 2024** before being developed further as a commercial project.

## My Role
I worked as a **UI/UX developer and designer** on the project. I also developed tools to facilitate and streamline production.

### Interfaces and Menus
Implemented a modular UI system in **Godot**, supporting mouse, keyboard, and controller navigation. The system consistently handles focus, transitions, and interactions regardless of the input device used. Menus were designed to be easily extensible and maintainable. The system is reusable across other projects.

### Audio / Music Subsystem
Developed a global audio subsystem in **Godot**, responsible for managing music and sound effects, with support for crossfades, persistence, and audio parameter control. A custom tool scans the project’s audio files and registers them in a key/value structure, providing a simple interface to trigger sounds in code without relying on explicit file paths.
