---
name: apps-moviles
description: >-
  Criterio de producto y diseño para apps móviles de consumo (Expo/React Native, iOS, Android):
  onboarding y primeros 60 segundos, retención y hábito, diseño emocional y celebraciones, gamificación (rachas, rankings,
  recompensas) con su ética, monetización y paywalls (qué probar y cómo medir), baja de la suscripción (ofertas, encuesta,
  confirmación), navegación inferior y ergonomía del pulgar, interacción y confianza (deshacer, estados, feedback), estados vacío/carga/error, gestos al estilo Apple, rediseñar sin
  perder usuarios y producto con IA. Junta los consejos de Tim Gabe, UX Peak, Kole Jain, Apple y Mobbin (datos de miles
  de apps publicadas y tests de Headspace, Duolingo, Blinkist, Churnkey…). USAR al diseñar o
  revisar una app o un flujo de producto (alta, onboarding, permisos, home de app, paywall, perfil, cancelar suscripción), al decidir cómo
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
- **El largo no es el problema, el valor sí:** la app media tiene 25 pantallas y algunas de las que más venden están entre las más largas. Un flujo largo no se siente largo si da valor antes de pedir la cuenta (Duolingo: ~60 pantallas) y en cada paso pasa algo. Si el producto se explica solo (un chat de IA), sin onboarding (Mobbin § 1).
- **Enseñar lo que desbloquean las respuestas:** plan con fecha de llegada, home ya llena con lo suyo. Dejar elegir **varios** objetivos (Headspace: +10 % de pruebas) (Mobbin § 1).
- **Problema → pequeña revelación → función como solución**, y onboarding según el anuncio de origen (Moonly: LTV ×2) (Mobbin § 1).
- **Checklist que se queda** en vez de tours y pop-ups (Mural: +10 % de retención a la semana); explicar cada paso cuando llega, no al principio (Mobbin § 1).
- **Pantalla propia antes del permiso de notificaciones:** para qué es y, mejor, qué aviso recibirá (Mobbin § 1).
- **¿Hace falta la cuenta?** Preguntarse para qué se pide antes de ponerla; Moonly la quitó (Mobbin § 1).

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
- **Rachas que perdonan:** poder congelarlas (Duolingo: +0,38 % de usuarios diarios) y mantenerlas con el mínimo (una lección en vez del objetivo entero: +40 % mantuvo la de 7 días). Diseñar para volver tras fallar: las rachas miden volver a la app, no que el hábito se forme (Mobbin § 4).
- **El botón como promesa:** «Me comprometo con mi objetivo» en vez de «Continuar» (Duolingo) (Mobbin § 4).
- **Curva en S:** más mecánicas ayudan hasta un punto y luego restan (Gabe).
- Rachas, recompensa variable y precios opacos pueden atrapar: transparencia y control del usuario (Gabe lo avisa).

## 4. Monetización y paywalls

- **Estructura antes que precio:** número de planes y estructura de prueba mueven más que un test de precio (Gabe, datos de Adapty/RevenueCat).
- **Paywall honesto:** cuándo y qué se cobra; la prueba explicada en línea de tiempo (hoy, día 5 aviso, día 7 cobro) (UX Peak § 3, Gabe: Blinkist).
- **El total dentro del botón** y precio exacto, no rango (UX Peak § 3).
- **Opción recomendada en tarjeta, no en radio** (UX Peak § 2). Planes: cinco son demasiados; el precio grande, el nombre pequeño (Jain § 6, § 13).
- **Bloqueo suave donde sube la intención** (Gabe: Busuu). Marco de palabra: «guest pass» frente a «trial» (Gabe).
- **Primer paywall sencillo** (titular, dos viñetas, botón); optimizar cuando haya tráfico. Al probar: primero diseños radicalmente distintos, luego personalización, al final precio (Mobbin § 2).
- **Vender el resultado antes de pedir dinero:** paywall de varias pantallas al final del onboarding, «tu plan está listo» (Opal: del 7 al 17 % de pruebas) (Mobbin § 2).
- **Anual por defecto y solo dos planes a la vista**, el resto en una hoja; «Sin compromiso, cancela cuando quieras» bajo el botón (Mobbin § 2).
- **Un paywall único «desbloquea todo»** mejor que uno por función; imagen en la que el público se reconozca (Moonly) (Mobbin § 2).
- **Medir:** % de instalaciones que ven el paywall (> 80 %), prueba → pago, LTV, retención D1/D7/D30. El ARPU engaña con planes semanales (Mobbin § 2).
- Patrones oscuros a evitar: monedas opacas, puertas graduales, «anti-calculadora» (Gabe); ruleta de descuento, urgencia falsa, 80 % de descuento nada más acabar el onboarding, interruptores de prueba gratuita (Apple los rechaza desde 2026) (Mobbin § 2).

**Baja de la suscripción** (Mobbin § 3, datos de Churnkey)
- **Cancelar tan fácil como suscribirse:** «Gestionar suscripción» en la cuenta y salida en cada pantalla del flujo. No baja los rescates y da confianza.
- **Una oferta según el motivo:** presupuesto → descuento de hasta el 40 % durante 3 meses o plan más barato; descanso → pausa con tope y fecha de vuelta a la vista; prueba recién empezada → alargarla.
- **Encuesta:** un solo motivo, 4–5 opciones concretas y **sin «Otro»**, en palabras que no cierran la puerta («No me cabe en el presupuesto», «Me tomo un descanso»).
- **Confirmación con su nombre, fecha exacta y «no se te cobrará más»**, y volver en un toque. Rescatar más del 50 % = oferta demasiado generosa.

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
- **Compartir en un toque cosas sobre uno mismo** (no funciones): al detectar una captura, ofrecer el flujo de compartir ya preparado (Moonly) (Mobbin § 6).
- **Proceso:** fidelidad por fases y tokens definidos para el traspaso (UX Peak § 15). Con IA, referentes reales antes de generar y pedir que marque dónde se desvía de ellos (Mobbin § 7; skill `diseno-libre`).

## Antes de dar por buena una pantalla

- [ ] ¿Valor en la primera sesión sin tutorial delante?
- [ ] ¿Un enfoque por pantalla y la acción principal al alcance del pulgar?
- [ ] ¿Estados vacío, carga, error y éxito diseñados?
- [ ] ¿Cobro transparente, sin trampas de hábito? ¿Cancelar es tan fácil como suscribirse?
- [ ] ¿Medidas y componentes según `normas`, y pasada de `ux-craft` (`movil.md`)?
