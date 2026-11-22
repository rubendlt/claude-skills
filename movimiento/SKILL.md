---
name: movimiento
description: "Animación y movimiento en web y en Expo/React Native (guías de Emil Kowalski): construir una animación o transición, revisar la que hay, auditar el movimiento de todo el código, buscar qué debería animarse y qué no, arreglar animaciones que van a tirones y poner nombre a un efecto («¿cómo se llama cuando…?»). USAR cuando haya que animar algo, añadir gestos, sheets, transiciones o respuesta al toque, revisar o auditar motion, o cuando una animación pierda fotogramas."
argument-hint: "[construir|expo|rendimiento|revisar|auditar|oportunidades|vocabulario] [encargo o rutas]"
---

# Movimiento

Una skill con siete guías. Lee **solo la guía del modo** que pide el encargo (y su archivo de apoyo si la guía lo manda), nunca todas.

| Modo | Cuándo | Guía |
|---|---|---|
| construir | animar algo en web desde cero: si animarlo, propiedad, curva, duración, interrupción, salida | `animate/guia.md` (+ `RECIPES.md` para casos típicos) |
| expo | cualquier animación o gesto en Expo / React Native (Reanimated, Gesture Handler, haptics) | `animate-expo/guia.md` (+ `RECIPES.md`) |
| rendimiento | va a tirones, pierde fotogramas, elegir propiedad, CSS frente a JS, `will-change` | `animation-performance/guia.md` (+ `performance-cheatsheet.md`) |
| revisar | tras escribir o cambiar motion, o cuando el usuario pide revisarlo | `review-animations/guia.md` (+ `STANDARDS.md`) |
| auditar | revisar el movimiento de todo el código y planificar mejoras, sin tocar código | `improve-animations/guia.md` (+ `AUDIT.md`, `PLAN-TEMPLATE.md`) |
| oportunidades | «¿qué se podría animar aquí?»: propone y descarta, sin implementar | `find-animation-opportunities/guia.md` |
| vocabulario | poner nombre a un efecto descrito de forma vaga | `animation-vocabulary/guia.md` |

Cuando una guía mencione otra skill por su nombre antiguo (`animate`, `review-animations`, `improve-animations`…), es la carpeta del mismo nombre aquí dentro.

## Reglas por encima de las guías

- **El proyecto manda.** Si su `CLAUDE.md` limita el movimiento (p. ej., «nada se mueve si no lo mueve el usuario»), las guías solo sirven para lo permitido. Mejor proponer menos movimiento que justificar más.
- **Sin subagentes por defecto.** Donde una guía diga que se lancen subagentes en paralelo (auditar), hazlo inline salvo que el usuario los pida.
- El pulido general de interfaz (no solo motion) de Emil Kowalski y Apple está en `~/.claude/skills/fuentes/emil/` y `fuentes/apple/` (y resumido en las skills `premium` y `apps-moviles`).
