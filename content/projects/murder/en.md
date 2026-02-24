---
title: Murder
locale: en
release: 2025
featured : true
image: /images/projects/murder.jpg
repo: https://github.com/Philou213/TP_Murder
type: "Unreal"
tags:
    - Unreal
    - Scolaire
layout: project
context: "School project"
role: "Gameplay/Network developer"
description: "Online multiplayer deduction game"
---
## Game Overview
**Murder** is an online multiplayer deduction game inspired by *Among Us* and the Murder game mode from *Garry’s Mod*.

## Project Context
This project was developed as part of the **Online Multiplayer Network Programming** course at UQAC in Fall 2025. It is my first online multiplayer project.

## Tools
This game was developed using **Unreal Engine 5**.

## My Contribution
I worked primarily solo on this project. All networking-related development was implemented by me.

### Server-Authoritative Architecture
The project is built on a **server-authoritative network architecture**, using Unreal Engine replication and client/server RPCs to handle communication. Critical game decisions are validated server-side to ensure consistency and prevent abuse.

### Server-Side Shot Validation
Implementation of a **server-side shot validation system**. When a player fires, the server temporarily reconstructs the players’ past states, repositions their colliders accordingly, and replays the shot on its side to verify its validity. This approach compensates for latency while reducing cheating opportunities.

### Time Synchronization
Development of a custom **latency measurement system** based on regular RPC exchanges between client and server. These measurements are used to maintain a synchronized time reference between client and server, supporting time-dependent mechanics such as timers.

