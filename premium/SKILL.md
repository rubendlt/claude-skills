---
name: premium
description: >-
  Qué hace que una web o una app parezca cara, cuidada y de fiar (o barata y de plantilla): decidir qué significa premium
  para este comprador, contención, aire, microdetalle, activos propios frente a genéricos, fotos reales, tipografía y color
  con medida, niveles de oficio (junior → senior), el uniforme de las webs hechas con IA, empresas «aburridas» donde lo
  premium es que nadie note el diseño, lujo como silencio, y pulido de interacción. Junta los consejos de Sam Crawford,
  Tim Gabe, Kole Jain, Self-Made Web Designer, UX Peak, Emil Kowalski y Apple. USAR cuando algo «parezca barato», «poco
  profesional», «de plantilla» o «hecho con IA», cuando se pida que parezca más premium, más caro, más cuidado o más
  memorable, o antes de una pasada de pulido. Para que convierta, conversion; para el oficio visual de base, diseno-web;
  para medir cuánta novedad aguanta, maya; para el escáner de slop, ux-craft. También para preguntas cortas (leer solo la sección pertinente). NO usar en cambios de código triviales (un margen, una palabra) ni en lo ya decidido.
argument-hint: "[página, pantalla o encargo]"
---

# Premium: parecer caro por lo quitado, no por lo añadido

Criterio de diseñadores, **no evidencia**. Manda el proyecto. Cada consejo lleva su autor; guías completas en `~/.claude/skills/fuentes/<autor>/guia.md`.

## 1. Primero: qué significa premium aquí

- **Decidirlo para este comprador antes de tocar nada:** «calmado y cálido» o «afilado y rápido». Un modelo no lo decide por ti (Gabe).
- **El tono visual sigue al comprador:** una asesoría financiera quiere «gente de fiar y agradablemente aburrida», no billetes girando (Crawford).
- **Empresas «aburridas»** (industria, suministro, instalaciones): lo premium es que el visitante **se relaje sin saber por qué**; si recuerda el diseño, dejó de pensar en la empresa (Crawford).
- **En sectores de riesgo** (finanzas, salud, seguros) el pulido genera confianza (Gabe). La web es la primera vista del producto: se asocia su calidad a la del servicio (Gabe cita Kinsta 2026).

## 2. Contención

- **«Lo premium es lo que queda cuando quitas lo que no ayuda a decidir»** (Crawford). Lujo (Hermès, Aesop): silencio, «no necesito convencerte». Sobrediseñar es inseguridad.
- **Lo caro es hacer menos, mejor:** una tipografía, una paleta que casi no es paleta, y aire (Self-Made, sobre Apple).
- **Aire:** abarrotar comunica desesperación; no llenar un hueco porque exista (Crawford, Gabe: «si dudas, más espacio»).
- **Prueba de los tres elementos:** si quitas tres cosas de una sección sin perder sentido, la sección pelea consigo misma (Crawford).
- **Contención no es pereza:** fuente por defecto, iconos de stock y la fototeca de todos también son «poco»; la frontera es la curaduría (Crawford, heurística del esfuerzo).

## 3. Microdetalle

- **La contención decide qué entra; el detalle cuida lo que se queda.** Contenida pero descuidada sigue pareciendo barata: botón descentrado, huecos desiguales, gráficos a sangre que no casan (Crawford, caso Prova).
- **Medidas de una escala, el mismo valor para el mismo papel:** márgenes distintos en la misma pantalla transmiten descuido aunque nadie sepa por qué (UX Peak § 7; reglas en `ux-craft` § Medidas).
- **Niveles de oficio:** pocas palabras, ≤ 4 tamaños y 2 pesos, color fuerte en 2-3 sitios con sentido, todo en múltiplos de 4/8 (Gabe). Distancia entre un 6 y un 10 = detalle, no ilustraciones 3D (Jain, cuatro niveles de landing).
- **Retocar no siempre es rehacer:** misma fuente con otro interletraje e interlineado (Crawford, caso Prova). Interletrado −2/−3 % e interlineado 110-120 % en títulos grandes «y ya se ve profesional» (Jain).
- **Artesanía = lo que el usuario no ve pero siente:** tiempos, pesos, el dato en el sitio justo (Gabe, Day One). Detalles baratos con efecto: etiqueta de contexto en el formulario, sellos propios (Crawford).
- **Interacción que se siente bien** (estados, respuesta inmediata, interrumpible): `fuentes/emil/guia.md` y `fuentes/apple/guia.md`; para animarlo, skill `movimiento`.

## 4. Activos propios y fotos

- **Lo que abarata no suele ser el layout, sino lo genérico:** degradados, iconos y fotos de cien webs (Crawford).
- **Prueba del logo del competidor:** pon su logo en tu web; si todo encaja igual, nada te distingue (Crawford).
- **Una decisión que solo esta empresa habría tomado** (iconos propios, una idea de marca): lo «correcto» ya no distingue (Gabe). El protagonista y la rima visual: un elemento elegido por la historia del negocio, repetido en piezas por la web (Self-Made § 3).
- **Fotos reales, aunque imperfectas,** antes que stock: el stock despierta «¿qué más no es real?» (Crawford). Una maqueta editorial solo funciona si las fotos son buenas de verdad (Crawford). Todas como de la misma sesión y dentro de la paleta (Self-Made).
- **Un diagrama propio del servicio vale más que 20 ilustraciones** (Crawford). Foto propia arriba e iconos de librería abajo = dos lenguajes.
- **Vídeo:** míralo sin sonido; si es decoración (ciudad de noche, manos tecleando), fuera; si enseña el taller o el proceso, informa (Crawford).
- **Base de marca:** la fuente «que encaje con quién es la marca, no con quién querrías que fuese» (Crawford). Fuentes poco gastadas (Fontshare) frente a Open Sans y compañía (Self-Made).

## 5. Color y tipo con medida

- **Un color de marca usado con medida;** todo en rojo grita y nada destaca, casi nada queda soso (Gabe). Planos antes que degradados.
- **Colores atenuados** (blancos rotos, beige, azul bebé) frente a saturado + blanco/negro (Jain). Un botón fuera de la paleta delata (Crawford).
- **Texto resaltado en color, solo la palabra de acción** (Crawford).

## 6. Lo que delata una web hecha con IA (el uniforme)

Eyebrow encima de cada título; secciones numeradas como diapositivas; titular en serif cursiva con palabras de otro color; sombras y tarjetas en todo; seis cajas crema con el mismo peso; hovers sin propósito; demasiados tamaños; colores «casi» de marca; logos sustituidos por nombres; stock ajeno al texto; etiquetas que explican lo evidente; CTA inventados (Crawford). Más: emojis como iconos, KPIs repetidos, avatares con degradado, tarjetas que no hacen nada (Jain § 6, § 9). Catálogo completo y escáner: skill `ux-craft` (`slop.md`).

- **Lo que delata no es una marca suelta, es el conjunto** (ux-craft). Al corregir, no cambiar un cliché por otro (crema + serif, brutalismo, bento).
- **Contar una historia** que guía de una sección a la siguiente: lo que ganó la prueba de Crawford frente a cuatro generadores (narrativa, no componentes).
- **«Si solo usas la IA, compites con un botón»** (Self-Made): usarla para lo que no harías sin ella.

## 7. Rúbrica rápida

Puntuar 0-10 cada una antes de mirar alternativas (Crawford, adaptada):
1. ¿Se sabe en 5 s qué es y para quién, y nada grita más que eso?
2. ¿Cada elemento se gana su sitio? (quitar tres sin perder nada = suspenso)
3. ¿Medidas, huecos y alineaciones sin una sola excepción a ojo?
4. ¿Activos propios (fotos, iconos, diagrama) o pasa la prueba del logo del competidor?
5. ¿Huella de IA o de plantilla en el conjunto?

Para memorable y premium en un proyecto concreto, la palanca suele ser la ejecución y las fotos, no un concepto de marca nuevo: comprobar con capturas (`capturas`) y, si hay alternativas reales, con `investigar`.
