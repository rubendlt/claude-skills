---
name: diseno-web
description: >-
  Criterio de diseño visual para webs (sitios de empresa, landings, webs de cliente): layout de cada sección según cuántas
  ideas lleva (1 a 5+ columnas) y paso a móvil, rejilla, jerarquía, tipografía (escala, interlineado, combinar fuentes),
  color (paleta, acento, contraste), espaciado por relación, iconos, sombras y degradados, imágenes y texto sobre foto,
  ritmo entre secciones, componentes web (tarjetas, pie, chips, carrusel, menú), qué estilo pide el cliente y proceso
  (moodboard, borrador, revisiones). Junta los consejos de Kole Jain, Self-Made Web Designer, Tim Gabe, UX Peak y Sam
  Crawford. USAR al construir, maquetar o revisar visualmente una página o sección web, al elegir paleta, fuentes, escala o
  layout, o cuando una web se vea desordenada o a plantilla. Para que el visitante actúe usar conversion; para que parezca
  cara, premium; para apps nativas, apps-moviles; para la pasada de claridad y anti-slop, ux-craft; medidas y mínimos de
  accesibilidad, hig/m3. NO usar en ajustes menores ni en lo ya decidido.
argument-hint: "[página, sección o encargo]"
---

# Diseño web: layout, tipo, color, espacio e imagen

Criterio de diseñadores, **no evidencia**. Manda el proyecto (tokens, `CLAUDE.md`): estos consejos se aplican dentro de su sistema, nunca lo sustituyen. Cada consejo lleva su autor; las guías completas, en `~/.claude/skills/fuentes/<autor>/guia.md`.

Referencias de esta skill:

| Archivo | Cuándo |
|---|---|
| `references/layouts.md` | Elegir el layout de una sección según cuántas ideas lleva (1 a 5+ columnas), rejilla y paso a móvil (Self-Made) |
| `references/estilos.md` | Traducir lo que pide el cliente («algo limpio», «efecto wow») a un estilo, y tendencias 2026 (Self-Made) |
| `references/proceso.md` | Proceso de un proyecto de cliente: objetivo, moodboard, stylescape, borrador, la home como plano, revisiones (Self-Made) |

## 1. Lo que importa y en qué orden

- **Layout, color, tipografía e imágenes.** Si esas cuatro están bien, no hace falta lo llamativo (Self-Made). Detalles al final, cuando lo demás funciona (Gabe).
- **Estás haciendo demasiado:** quitar primero y volver a añadir solo lo que el proyecto pida (Self-Made, Gabe: «quitar todo y añadir con criterio»).
- **Diseñar es decidir qué suena alto y hacer callar al resto** (Self-Made). Casi toda «web confusa» es un problema de jerarquía: tamaño, contraste, espacio (Crawford).
- **Lista la jerarquía antes de estilar:** 1.º, 2.º, 3.º (Jain).
- **Convenciones aburridas en lo que debe ser invisible** (logo a inicio, menú donde se espera); originalidad en las ideas (Crawford, ley de Jakob; Self-Made: el primer «amigo» solo quiere sentirse a salvo).
- **Diseñar para cada contexto, no encoger el escritorio** (Self-Made, Crawford § 8).

## 2. Layout y ritmo

- **Una idea protagonista por sección**; pocas ideas por sección (Self-Made, `layouts.md`).
- **Variar con motivo:** si todas las secciones tienen el mismo layout, se deja de mirar; alternar columnas, tamaños y fondos según lo que el usuario piensa en ese punto (Self-Made, Jain § 5: no repetir imagen-izquierda/texto-derecha).
- **Romper el patrón una vez por página** (Gabe): una ruptura con intención, no una por sección.
- **Rejilla 12/8/4 columnas**, guía y no jaula; un bloque de texto ocupa 3-5 columnas (Self-Made). Contenedor con ancho máximo (Gabe).
- **Equilibrio, no simetría** (Self-Made).
- **Mucha información apilada:** líneas e iconos para que se vea dónde empieza cada idea (Self-Made).
- **«Mostrar más» mejor que scroll infinito**: deja llegar al pie. Scrolljacking, casi nunca (Jain).
- **Mostrar el contenido, no un banner hacia él** (UX Peak § 9).
- **Un sistema aburrido pero coherente** supera a uno ingenioso y caótico; la home es el plano de las demás páginas (Crawford, Self-Made `proceso.md` § 5).

## 3. Tipografía

- **Una familia basta; dos como mucho, tres el máximo absoluto** (Jain, Gabe, Self-Made). Para combinar, anclar en el titular y buscar contraste claro, nunca dos casi iguales (Self-Made).
- **Jerarquía con tamaño, peso y color:** máximo 4 tamaños y 2 pesos por pantalla (Gabe; Jain: ~6 tamaños en toda la web). Si el título ya es grande, no hace falta negrita (Jain).
- **Escala:** base 16-18 px, paso ×1,25-1,3 (Gabe, Self-Made; Jain: ×1,27, ×1,17 en móvil o interfaces densas). Ceñirse a la escala elegida importa más que cuál (Self-Made).
- **Interlineado:** títulos 1,1-1,3; cuerpo 1,4-1,6; baja cuanto mayor el texto (Gabe, Jain, UX Peak).
- **Interletrado:** títulos grandes −1 a −3 %; cuerpo sin tocar; mayúsculas con algo de espacio (Gabe, Jain, Self-Made).
- **50-75 caracteres por línea** (~600-700 px); más de 3 líneas, a la izquierda; nunca mezclar centrado e izquierda en un bloque (Gabe, Self-Made).
- **Opacidad para la jerarquía del texto:** titular 100 %, subtítulo ~60-80 % (Gabe, Self-Made, Jain). Contraste AA siempre; gris claro sobre blanco cansa: medirlo (Crawford).
- **Texto grande como elemento visual** una o dos veces por página (Jain). Display solo en textos cortos (Self-Made).
- Errores típicos: H1 más pequeño que un subtítulo, mismo peso en todo, espaciado excesivo, cuerpo diminuto en móvil (Crawford).

## 4. Color

- **Menos color es casi siempre más:** base, primario (acción) y neutro de texto (Gabe); un color por función (Jain).
- **El acento es diferencia, no propiedad:** si todo es azul, nada destaca (Jain § 11). El CTA, lo más contrastado (Crawford). Monocromo sin acento: no se sabe dónde pulsar (Crawford, caso Focus).
- **Proporciones:** 60-30-10 en landing; en producto ~90 % neutro, ~8 % otro neutro, ~2 % acento (Jain, Gabe).
- **Fondos neutros**, o neutro con un 2-5 % del tono de marca (Jain). Ni negro ni blanco puros para texto (Jain, UX Peak).
- **Paleta según el contenido:** si la foto es protagonista, marco desaturado (UX Peak § 7); sacar el color de las propias fotos (Gabe, Jain).
- **Marca que falla WCAG:** oscurecerla sin miedo (Jain). Destructivo, siempre rojo (Jain).
- Rampas, modo oscuro y temas en OKLCH: Jain § 1 en `fuentes/kolejain/guia.md`.

## 5. Espaciado

- **Por relación:** lo que va junto, junto; al menos el doble entre grupos que dentro (Gabe, Self-Made, Jain, Crawford).
- **Rejilla de 4/8** en todo (Gabe, Jain). Padding de sección fijo, no a ojo (Crawford).
- **Más aire, menos contenedores, menos líneas** (Gabe, Jain § 3). Cuando una tarjeta basta, quitar la tarjeta (Jain § 11).
- **Márgenes constantes:** 16 aquí y 22 allí transmite descuido (UX Peak § 7).
- **Esquinas anidadas:** radio interior = exterior − distancia; un radio por tipo de componente (Jain).

## 6. Iconos, sombras, degradados, separadores

- **Una sola librería de iconos**, mismo trazo y estilo, en neutro; iconos sin color salvo estado; nada de emojis como icono (Jain, UX Peak § 8, Gabe).
- **Iconos del tamaño del interlineado** y alineados con el texto (Jain § 12).
- **Sombras grandes y tenues** (4-8 % de opacidad, mucho blur) o ninguna; sobre color, teñidas (UX Peak § 7, Jain). Si las tarjetas se lavan, mejor borde que sombra (Jain).
- **Degradados:** variación del mismo color o ninguno (Jain); si lo primero que dicen es «qué degradado», sobra (Crawford).
- **Separadores suaves** o solo espacio (UX Peak). Alinear a bordes: texto a la izquierda, cifras a la derecha (Jain § 11).

## 7. Imágenes y texto sobre foto

- **Cada imagen con propósito**; todas como de la misma sesión, con la paleta de la web (Self-Made § 6).
- **Las personas miran hacia el contenido** (Self-Made).
- **Texto sobre foto:** degradado o velo solo detrás del texto y contraste medido; no tapar el centro; no poner texto sobre fotos que no controlas (Jain § 12, Gabe, UX Peak § 8).
- **Iconos sobre foto, con contenedor** (UX Peak § 8).
- **Fotos de catálogo homogéneas**, recortadas sobre fondo neutro (UX Peak § 8). Foto de un objeto → recorte; paisaje → velo + texto (Jain § 5).
- **Que parezca hecho para su público:** fotos del sector, no genéricas (Jain § 12). Fotos reales antes que stock: skill `premium`.
- Técnica: recortar al tamaño final, WebP, ~300 KB como techo orientativo (Self-Made).

## 8. Componentes web

- **Tarjetas repetidas:** la tarjeta entera enlaza; CTA propio solo si la acción es concreta (Jain § 13).
- **Pie:** con 3-5 enlaces, centrado; columnas solo si hay tantos enlaces (Jain § 13).
- **Chips** no son botones: más finos, sin color de CTA (Jain).
- **Carrusel:** indicador de posición y contraste sobre cualquier foto (Jain); manual y que deje ver el siguiente (Crawford, caso Renew); nunca lo importante dentro de un carrusel en móvil (Crawford § 8).
- **Menú con imágenes** en el desplegable da contexto (Jain § 5); menú de 4 elementos mejor que 9 (Crawford).
- **Cada botón con 4 estados** y campos con foco, error y aviso (Jain § 10).
- **Contenido real, no perfecto:** nombres largos, textos que truncan, listas vacías (Jain, UX Peak § 13). Para forzarlo: skill `break-ui`.

## 9. Estilo y proceso

- **El estilo sale del negocio y del público**, no del gusto del diseñador; una web corporativa sobria cae casi siempre entre «Steve Jobs» y «Jensen Huang» (`estilos.md`). Cuánta novedad aguanta: skill `maya`.
- **Mismo layout, otra sensación:** amistoso (cálido, esquinas redondas, botones grandes) frente a profesional (esquinas menores, imágenes sobrias) (Jain § 12).
- **Frankenstein wireframe:** apilar secciones de referentes reales y diseñar encima a tu manera (Gabe, Jain). Referentes con evidencia: skill `investigar`.
- **Primer borrador malo a propósito**, de arriba abajo, sin atascarse en una sección (`proceso.md` § 4).
- **Probar versiones muy distintas** de lo importante antes de pulir una (Self-Made). Para verlas renderizadas: skill `prototype`.

## 10. Revisar

- **Prueba del vistazo y de entornar los ojos:** titular y CTA siguen destacando (Self-Made § 7, Crawford).
- **Recorrer la página de abajo arriba** y en un móvil real en una mano (Self-Made, Crawford § 8).
- **Ver el diseño en la pantalla real**, no con zoom (Jain).
- Pasada completa de claridad, medidas y anti-slop: skill `ux-craft`. Capturas: `capturas`.
