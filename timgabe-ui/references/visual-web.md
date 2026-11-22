# Visual de web y landing: tipografía, espaciado, color, estructura

Aplicable a cualquier web o landing. Si el proyecto fija reglas visuales, mandan ellas. Fuente: vídeos de Tim Gabe (@TimGabe); son criterio de un diseñador, no estudios.

## Tipografía
- **Una fuente basta.** Con dos, copiar los estilos de una web bien resuelta (inspeccionar → computed: familia, tamaño, peso, letter-spacing, line-height).
- **Jerarquía antes de diseñar.** Escala desde una base (18 px) con paso 1,25-1,3. Usar **solo dos tamaños** de texto en un bloque y marcar jerarquía con peso y color suave, no con más tamaños.
- **Interlineado:** títulos 1,1-1,3; cuerpo 1,3-1,5. Baja cuanto mayor es el texto.
- **Letter-spacing:** títulos −1 a −2 %; el cuerpo, sin tocar (negativo resta legibilidad).
- **Alineación:** más de 3 líneas → a la izquierda. Centrado solo en títulos y textos cortos. **Nunca mezclar** título centrado con cuerpo a la izquierda (ni al revés).
- **Ancho de línea:** 50-75 caracteres (~600 px a 18 px). Baymard: las líneas largas intimidan, se lee menos y se convierte menos.
- **Legibilidad primero:** cuerpo largo a 18-20 px; contraste AA siempre (comprobar con herramienta).
- Texto + imágenes son el 80-90 % del diseño: tratarlos con el mismo cuidado que el layout.

## Espaciado
- **Espaciado por relación:** lo que va junto, junto. Si título→cuerpo = 24, texto→botón = **2×** (48). Bloques pequeños: base 16 y 32.
- **Aire de sección:** ≥ 80-96 px entre texto e imagen; vertical de sección ~160 px en escritorio; padding de tarjeta 32 como base. Más aire es la apuesta segura.
- **Rejilla de 8 px** (alturas, paddings, iconos); botones: grande 64, medio 48, pequeño 40. 12 columnas en escritorio.
- Texto en una sola unidad y el botón algo más separado: parece más pensado.
- Contenedor con ancho máximo y contenido dentro, con **una excepción** (ver 4).

## Color
- **Tres colores:** base (fondo), primario (CTA y detalles pequeños), neutro (texto). Base y primario con buen contraste.
- **Color fuerte solo para lo importante**: el CTA debe ser lo único saturado de la sección.
- **Jerarquía de texto con opacidad del neutro**: ~80 % para el tamaño mayor, 60-70 % para el menor.
- Tintes sutiles: el primario al 5 % para tarjetas o botones secundarios; grises para estados inactivos.
- Pocas cosas y minimalismo: menos ilustración, menos colores, una fuente, pocos tamaños.

## Estructura y ritmo
- **Rompe la monotonía una vez por página:** grid previsible y luego una ruptura (carrusel o ticker que se sale por un lado, sección final con composición distinta). Objetivo: flujo como una onda.
- **Secciones típicas:** hero, propuesta de valor, características, CTA, pie (segunda navegación).
- **Frankenstein wireframe:** recoger secciones de referentes reales (lapa.ninja, Awwwards con cuidado de lo bonito pero inusable) y montar la estructura con ellas; así llega ya probada y responsive.
- **Iconos:** de trazo (stroke) para mantener coherencia.
- **Detalles al final**: solo cuando lo demás funciona; en la duda, simple y mínimo.

## Niveles de oficio: qué separa un diseño de pago
- **Textos:** pocas palabras y sin repetir lo que ya dice el rótulo de al lado (menos carga cognitiva). Etiqueta del botón = la acción real.
- **Tamaños:** como mucho **4 tamaños y 2 pesos** en una pantalla (el principiante usa 6 y 4). Cifras grandes, en mono.
- **Color:** un color de marca usado con medida. Todo en rojo grita y nada destaca; casi nada de color queda soso. Reservar el color fuerte a 2-3 sitios con sentido; planos antes que degradados.
- **Visuales:** sirven para comunicar (un punto rojo entre barras grises), no para lucir. Reutilizar el mismo patrón visual para conectar partes de la UI.
- **Espaciado:** todo múltiplo de 4/8 (24 en vez de 25, 12 en vez de 11), agrupado por relación.
- 60-30-10: 60 % neutro claro, 30 % complementario, 10 % marca.

## Secciones y heros
- Un mismo contenido da secciones distintas cambiando **colocación** (centrado/izquierda/derecha), tamaño (mega → grande) y espaciado (40 → 32), y el recurso al lado.
- **La foto tiene que ser buena**; sacar el color primario de la imagen y un degradado radial suave solo detrás del texto para poder leerlo.
- Hero que enseña **el resultado** más que a las personas. Dos acciones: una primaria con relleno y la otra como texto.
- Titulares y copy cortos: pasar de párrafo largo a frase corta es el mayor salto visual.

## Apple: consistencia y quitar
- **Quitar todo y volver a añadir con criterio**; ocultar acciones secundarias; menos opciones visibles (parálisis de decisión).
- **Optimizar el caso más frecuente** (regla de 3 toques: lo importante, a ≤3 pasos).
- **Coherencia = confianza:** proporciones y espaciado constantes; mismo sitio para las acciones clave (memoria muscular). Cambios grandes, en pasos y no de golpe.
