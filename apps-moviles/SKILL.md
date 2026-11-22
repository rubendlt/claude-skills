---
name: apps-moviles
description: >-
  Criterio de producto y diseño para apps móviles de consumo (Expo/React Native, iOS, Android):
  onboarding y primeros 60 segundos, retención y hábito, diseño emocional y celebraciones, gamificación (rachas, rankings,
  recompensas) con su ética, monetización y paywalls, navegación inferior y ergonomía del pulgar, interacción y confianza (deshacer, estados, feedback), estados vacío/carga/error, gestos al estilo Apple, rediseñar sin
  perder usuarios y producto con IA. Junta los consejos de Tim Gabe, UX Peak, Kole Jain y Apple. USAR al diseñar o
  revisar una app o un flujo de producto (alta, onboarding, home de app, paywall, perfil), al decidir cómo
  retener o cobrar, o al montar la navegación móvil. Medidas y componentes nativos: normas (Apple y Material); técnica de
  móvil y anti-slop: ux-craft (movil.md); una web que debe sentirse nativa en el móvil: mobile-native; animación y gestos:
  movimiento. Paneles, tablas y dashboards: paneles. NO usar para webs de empresa sin cuentas (conversion, diseno-web) ni en cambios de código triviales. También para preguntas cortas (leer solo la sección pertinente).
argument-hint: "[app, flujo o pantalla]"
---

# Apps móviles: valor rápido, hábito sin trampas, todo al alcance del pulgar

Criterio de diseñadores, **no evidencia**. Manda el proyecto, y en medidas y componentes manda la norma (`normas`: Apple y Material comparadas). Cada consejo lleva su autor; guías completas en `~/.claude/skills/fuentes/<autor>/guia.md` (Gabe tiene temas sueltos en `fuentes/timgabe/references/`).

## 1. Onboarding y primera sesión

- **La primera sesión es todo el juego:** el 77 % se va en 3 días y la mayoría de pruebas empiezan el día de instalación (Gabe, datos citados).
- **Valor en los primeros 60 s**, sin ajustes ni tutorial delante (Gabe, «la muestra de sopa»).
- **Pasos cortos que se vean terminables** (tres, no doce) y progreso visible; con muchos pasos, no enseñar el total antes de dar valor (Gabe).
- **Aprender haciendo**, no diapositivas en un modal (Gabe; Jain § 9 cita un test de NN/g sin verificar). Preguntar qué va a hacer el usuario y adaptarle el producto (Jain).
- **Nunca empezar en 0 %:** contar el registro como primer paso hecho, si el progreso es real (UX Peak § 12).
- **Dar antes de pedir:** no secuestrar el resultado tras un email (UX Peak § 12). **Efecto IKEA:** dejar personalizar algo antes del registro (UX Peak, Gabe).
- **Corto por defecto;** largo solo si personaliza el primer uso o filtra compradores (Gabe: Cal AI, Noom).
- **Interfaz según la madurez:** nuevo, un objetivo; intermedio, plan del día; experto, panel denso (UX Peak § 12).

## 2. Retención, hábito y emoción

- **Tres capas:** que el trabajo salga rápido y bien; interfaz como señal de confianza; diseño emocional puntual (Gabe).
- **Peak-end:** elegir un pico por flujo y cuidar el final y los errores (Gabe).
- **Ceremonia de entrega:** anticipación, revelar con peso, dejar un momento para compartir; con responsabilidad (Robinhood retiró su confeti tras una multa) (Gabe).
- **Un enfoque por pantalla** (Hick) y prueba social en vivo si es real (Gabe).
- **Monetizar tras el valor**, con mejoras contextuales y no muros (Gabe, Tinder).
- **Aversión a la pérdida** en avisos de límite: enseñar qué se pierde en concreto, sin cuentas atrás falsas ni botones que avergüenzan (UX Peak § 12).

## 3. Gamificación (con cuidado)

- **Puntos, insignias y rankings son el marcador, no el juego** (Gabe: LinkedIn retiró sus insignias).
- **Rankings pequeños y ganables** (Strava: micro-competiciones locales) (Gabe).
- **Rachas con agencia** (objetivo elegible, congelar); cuanto más duran, más obligan (Gabe).
- **Curva en S:** más mecánicas ayudan hasta un punto y luego restan (Gabe).
- Rachas, recompensa variable y precios opacos pueden atrapar: transparencia y control del usuario (Gabe lo avisa).

## 4. Monetización y paywalls

- **Estructura antes que precio:** número de planes y estructura de prueba mueven más que un test de precio (Gabe, datos de Adapty/RevenueCat).
- **Paywall honesto:** cuándo y qué se cobra; la prueba explicada en línea de tiempo (hoy, día 5 aviso, día 7 cobro) (UX Peak § 3, Gabe: Blinkist).
- **El total dentro del botón** y precio exacto, no rango (UX Peak § 3).
- **Opción recomendada en tarjeta, no en radio** (UX Peak § 2). Planes: cinco son demasiados; el precio grande, el nombre pequeño (Jain § 6, § 13).
- **Bloqueo suave donde sube la intención** (Gabe: Busuu). Marco de palabra: «guest pass» frente a «trial» (Gabe).
- Patrones oscuros a evitar: monedas opacas, puertas graduales, «anti-calculadora» (Gabe).

## 5. Navegación móvil y ergonomía

- **Barra inferior de 3 a 5 destinos estructurales** (máx. 6); nunca ayuda, legales ni cerrar sesión (UX Peak § 11). Sin botón central «+» saliente (Jain § 13).
- **Iconos 24 px, etiquetas legibles, zona táctil ≥ 44 pt / 48 dp**, zona segura inferior (UX Peak § 11; mínimos exactos en `normas`).
- **Estado activo con dos cambios** (relleno + color), no solo color (UX Peak, Jain).
- **Acciones críticas abajo, en el arco del pulgar** (UX Peak, Gabe, Jain § 10: Fitts).
- **Rediseñar = no quitar lo que se usa cada día:** mapear las tareas diarias de cada grupo antes de mover nada; «perdido» y «movido» se sienten igual; por fases (Gabe: Sonos). Cuánto avanzar: skill `maya`.

## 6. Interacción y confianza

- **Deshacer mejor que confirmar:** modal solo para lo irreversible (Jain § 10).
- **Guardado automático e historial** cuando se pueda deshacer (Jain).
- **Cada botón con 4 estados**, campos con foco/error/aviso, carga y éxito visibles, microfeedback («Copiado») (Jain § 10).
- **Proyectar el estado futuro antes de confirmar** («saldo 1.200 € → 950 €») (UX Peak § 4).
- **Valores por defecto inteligentes, chips en vez de texto libre, recientes arriba** (UX Peak § 10). Control según el momento: rueda para aproximado y único, campo para exacto o repetido.
- **Ley de Tesler:** que la complejidad la absorba el sistema, no el usuario (Jain § 9).
- **Optimizar el caso más frecuente:** lo importante a ≤ 3 toques, acciones secundarias ocultas (Gabe).
- **Badges** arriba a la derecha del icono, solo para lo importante (UX Peak § 11).
- **Gestos al estilo Apple** (respuesta inmediata, seguimiento 1:1, interrumpible, muelles, rubber-banding, materiales): `fuentes/apple/guia.md`; para construirlos, skill `movimiento` (expo).

## 7. Estados

- **Ningún estado vacío muerto:** frase de valor, primer paso y botón; búsquedas sin resultados también (UX Peak § 13, Jain).
- **Post-acción con incertidumbre:** confirmación rotunda, contacto en un toque y línea de tiempo de estados (UX Peak § 13).
- Dashboards, tablas y paneles de datos: skill `paneles`.

## 8. Producto y estrategia (resumen)

- **El chat de IA junto al trabajo**, no en una caja vacía; respuestas que se escanean y se comprueban (Gabe).
- **Tecnología compleja dentro de un patrón familiar** y borrar microfricción del alta al primer éxito (Gabe: Spotify, Netflix). Más casos (Raycast, nicho, mecanismos de enganche) en `fuentes/timgabe/references/producto-ia.md` y `gamificacion.md`.
- **Proceso:** fidelidad por fases y tokens definidos para el traspaso (UX Peak § 15).

## Antes de dar por buena una pantalla

- [ ] ¿Valor en la primera sesión sin tutorial delante?
- [ ] ¿Un enfoque por pantalla y la acción principal al alcance del pulgar?
- [ ] ¿Estados vacío, carga, error y éxito diseñados?
- [ ] ¿Cobro transparente, sin trampas de hábito?
- [ ] ¿Medidas y componentes según `normas`, y pasada de `ux-craft` (`movil.md`)?
