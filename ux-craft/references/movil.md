# MÓVIL: iOS, Android, React Native, Expo

Aplica además las reglas comunes de `SKILL.md`. Las APIs de React Native y Expo son de referencia: **comprueba la documentación de la versión instalada** antes de usarlas.

## Índice
1. Tacto y gestos
2. Animación física
3. Hápticos
4. Navegación
5. Sheets, modales y menús contextuales
6. Acabado visual
7. Velocidad y datos
8. Onboarding, permisos y hábito
9. Accesibilidad móvil
10. Revisión rápida

---

## 1. Tacto y gestos (Apple, WWDC18 "Designing Fluid Interfaces")

Fuente de toda la sección: [developer.apple.com/videos/play/wwdc2018/803](https://developer.apple.com/videos/play/wwdc2018/803/).

- **Responder al tocar, no al levantar el dedo.** El estado de pulsado aparece en cuanto el dedo toca la pantalla. Apple lo resume así: con cualquier retraso, la sensación "se cae por un precipicio". En RN: `Pressable` con estilo en `pressed`, o Reanimated en `onPressIn`. *(BBC pide lanzar la acción al levantar el dedo: el feedback va al tocar, la acción al soltar. No se contradicen.)*
- **Si el dedo se arrastra, se cancela la pulsación.** Una lista con scroll nunca dispara el botón sobre el que empezó el gesto.
- **Distancia mínima antes de reconocer un gesto** (~10 pt) y fijar su dirección.
- **Seguimiento 1:1 que respeta el punto de agarre.** El elemento no se recoloca bajo el centro del dedo.
- **Detectar todos los gestos posibles a la vez** y cancelar los que pierden cuando la intención está clara, sin añadir retrasos (Gesture Handler: `simultaneousWithExternalGesture`, `requireExternalGestureToFail`).
- **Simetría espacial:** lo que entra por la derecha sale por la derecha, y lo que baja para abrirse sube para cerrarse.
- **Volver atrás deslizando desde cualquier punto**, no solo desde el borde: nativo en iOS 26. En Android, *predictive back* enseña el destino antes de soltar y exige respetar los márgenes reservados al gesto.
- **Zona táctil mínima:** 44×44 pt (Apple) o 48×48 dp (Material). Si el icono es menor, amplíala con `hitSlop`. El espacio entre controles importa tanto como su tamaño.

## 2. Animación física

- **Muelles (springs) en lugar de duraciones fijas**, interrumpibles y **heredando la velocidad del gesto**:
  ```ts
  // react-native-reanimated + gesture-handler
  const pan = Gesture.Pan()
    .onChange(e => { y.value += e.changeY })
    .onEnd(e => {
      const target = snapPoint(y.value, e.velocityY, SNAP_POINTS) // proyecta con la velocidad
      y.value = withSpring(target, { velocity: e.velocityY, damping: 26, stiffness: 260 })
    })
  ```
- **Sin rebote por defecto** (amortiguación del 100 %). Solo rebota si el gesto traía impulso, como lanzar para descartar. Un toque no rebota. En WWDC23 Apple pasó a configurar los muelles con *duración + rebote* y los presets `smooth`, `snappy` y `bouncy`. [WWDC23 10158](https://developer.apple.com/videos/play/wwdc2023/10158/)
- **Destino calculado con la inercia:** al soltar, proyecta dónde acabaría el movimiento con la velocidad y elige el punto de anclaje más cercano a esa proyección, no al punto donde se soltó (la ventana flotante de FaceTime).
- **Resistencia elástica en los límites**, en lugar de un tope seco.
- **Transición zoom (iOS 18) o elemento compartido:** la tarjeta crece hasta ser la pantalla de detalle y se puede agarrar durante la transición. [WWDC24 10145](https://developer.apple.com/videos/play/wwdc2024/10145/). Airbnb creó su propio componente de elemento compartido para React Native.
- **Reducir movimiento:** `AccessibilityInfo.isReduceMotionEnabled()` y el evento `reduceMotionChanged`, o `useReducedMotion()` de Reanimated. Sustituye parallax, zoom y giros por un fundido. `prefersCrossFadeTransitions()` en iOS.

## 3. Hápticos (Apple HIG "Playing haptics", WWDC19)

- **Pocos, siempre los mismos para lo mismo, y acompañando a otro feedback**, nunca como única señal. [HIG](https://developer.apple.com/design/human-interface-guidelines/playing-haptics)
- **Un solo toque al cruzar el punto de no retorno** de un gesto: tirar para refrescar, deslizar para una acción, anclar un panel. Si el usuario retrocede, vuelve a sonar al cruzarlo de nuevo.
- **Éxito o error** con el patrón de notificación del sistema (`expo-haptics`: `notificationAsync(Success)`), solo en momentos que importan, como confirmar algo o completar un hito.
- **Nunca en el scroll ni en cada toque de una lista**, y **siempre desactivables** (el usuario puede apagarlos en el sistema).

## 4. Navegación

- **La barra de pestañas es para navegar, no para acciones.** "Reservar", "Pagar" o "Crear" van dentro del contenido, no como pestaña central "+". [HIG Tab bars](https://developer.apple.com/design/human-interface-guidelines/tab-bars)
- **Cada pestaña conserva su propio historial de navegación**: un stack por pestaña. Al volver a una pestaña, el usuario está donde la dejó.
- **Pulsar la pestaña activa sube arriba y vuelve a la pantalla raíz** (`useScrollToTop` en React Navigation; las pestañas nativas de Expo lo traen por defecto).
- **Nunca ocultar ni desactivar pestañas**, aunque estén vacías: muestra un estado vacío que explique cómo llenarla. Etiquetas de una palabra. Evita la pestaña "Más".
- **Globos de aviso (badges) solo para lo crítico**, o dejan de significar algo.
- **Máximo 5 pestañas en Android.** La HIG de iOS no da un número: dice que cuantas menos, mejor.
- **Sin pestaña "Inicio" que repita** lo que ya está en otras pestañas. [WWDC22 10001](https://developer.apple.com/videos/play/wwdc2022/10001/)
- **iOS 26:** barra de pestañas flotante, pestaña de búsqueda al final y minimizado al hacer scroll *cuando hay un accesorio* encima de la barra (como el minirreproductor de Música). Los controles principales bajan al alcance del pulgar. [WWDC25 356](https://developer.apple.com/videos/play/wwdc2025/356/)
- **Toda pantalla a la que se llega desde otra lleva la flecha de volver arriba a la izquierda, siempre a la vista.** La barra puede compactarse al hacer scroll (el título grande de iOS se encoge), pero la flecha no se va con el contenido. En las pantallas sin barra (detalle con foto a sangre, galería) va como botón flotante y fijo, nunca dentro de lo que se desplaza. Es la salida que se ve: el gesto existe, pero no todo el mundo lo conoce ni lo puede hacer. [HIG Navigation bars](https://developer.apple.com/design/human-interface-guidelines/navigation-bars), [Android](https://developer.android.com/guide/navigation/principles)
  - **No la llevan:** la raíz de una pestaña (no hay pantalla anterior); la primera pantalla de un modal o panel, que lleva Cerrar o X (cerrar abandona la tarea entera, volver retrocede un paso: son dos acciones distintas). La X solo si no se ha introducido nada; si el usuario ha escrito o elegido algo, "Cancelar" y un verbo que diga qué se guarda, porque con una X no se sabe si se aplica o se descarta ([WWDC22 10001](https://developer.apple.com/videos/play/wwdc2022/10001/?time=1336)); y la pantalla final de un flujo ya terminado, como "Pedido enviado", donde volver llevaría a un formulario ya enviado.
  - **La flecha y el gesto hacen lo mismo**, preguntar incluido: si salir pierde datos, deslizar en iOS y el atrás de Android preguntan igual que la flecha.
  - **Sin nada detrás** (abierta desde un enlace o una notificación), la flecha lleva a la pantalla de la que cuelga; no desaparece ni saca de la app (ver el punto siguiente).
- **Deep links con un historial de pantallas fabricado:** al abrir `/reservas/123` desde una notificación, "atrás" lleva al listado, no fuera de la app. [Android](https://developer.android.com/guide/navigation/principles) (`initialRouteName` o `unstable_settings` en expo-router)
- **Navegación adaptativa:** barra abajo en el móvil y barra lateral estrecha en tablet o ventanas grandes. [Android](https://developer.android.com/develop/ui/compose/layouts/adaptive/build-adaptive-navigation)
- **Push para bajar en la jerarquía, modal para tareas cortas y cerradas** con una forma clara de salir.
- **Instagram reordena sus pestañas según el uso real:** Reels y mensajes delante, Crear arriba. Las pestañas son una decisión basada en datos, no se deciden una vez para siempre.

## 5. Sheets, modales y menús contextuales

- **Paneles inferiores con alturas fijas (detents), empezando a media altura** para ir mostrando información de forma progresiva, y expandibles. [HIG Sheets](https://developer.apple.com/design/human-interface-guidelines/sheets)
- **Nunca un panel encima de otro:** cierra el primero antes de abrir el segundo (HIG). Tampoco metas contenido largo dentro de uno; si el panel ocupa toda la pantalla, parece una página y la gente se pierde (NN/g).
- **Modales:** solo para tareas cortas y autocontenidas, siempre con salida clara, y el fondo inaccesible para el lector de pantalla (`accessibilityViewIsModal`, cierre con el gesto de escape de VoiceOver vía `onAccessibilityEscape`).
- **Menú al mantener pulsado, con vista previa** del objeto al que afecta. Todo lo que hay en él debe estar también accesible en otro sitio de la interfaz. [HIG Context menus](https://developer.apple.com/design/human-interface-guidelines/context-menus)
- **Deshacer en lugar de confirmar** (snackbar de Material, "Deshacer envío" de Gmail). Con recursos escasos (una plaza, stock), *retén* el recurso en el servidor durante los segundos de deshacer, para que no lo tome otra persona.

## 6. Acabado visual

- **Esquinas continuas tipo squircle**, no arco circular: `borderCurve: 'continuous'` en RN (iOS) y `.continuous` en SwiftUI y UIKit.
- **Esquinas concéntricas:** radio interior = radio exterior − relleno. Apple distingue tres tipos: fijo, cápsula (la mitad de la altura) y concéntrico.
- **Desenfoque del contenido bajo las barras flotantes** en lugar de líneas separadoras. Un solo efecto por vista, y solo donde hay interfaz flotando encima.
- **Liquid Glass solo en la capa de navegación**, nunca en listas ni encima de otro cristal. La variante *clear* solo sobre fotos o vídeo, y con una capa que oscurece. Con Reducir transparencia (`AccessibilityInfo.isReduceTransparencyEnabled`), fondo opaco. [WWDC25 219](https://developer.apple.com/videos/play/wwdc2025/219/)
- **Cifras tabulares:** `fontVariant: ['tabular-nums']` en contadores, cronómetros, rachas y precios.
- **Tamaño óptico y tracking por tamaño:** los titulares grandes, con el espaciado de letras más cerrado.
- **Formas con significado:** Discord dibuja a las personas como círculos y a las cosas (servidores, apps) como squircles. [Discord](https://discord.com/blog/improving-mobile-with-squircles-styles-and-spacing)
- **Pocos colores y cada uno con significado fijo.** Whoop, por ejemplo: verde recuperado, amarillo intermedio, rojo esfuerzo o riesgo, y la métrica principal enorme (*probable*).

## 7. Velocidad y datos

- **Optimista con marcha atrás si falla** para acciones que casi nunca fallan (likes, favoritos, marcar como leído). **Estado pendiente** cuando el servidor puede decir que no (plazas, pagos).
- **Mover datos cuando nadie mira:** subir lo que el usuario acaba de elegir mientras sigue rellenando el formulario, precargar la pantalla o la semana siguiente, y precargar según hacia dónde hace scroll (Instagram).
- **Estado de carga:** nada si tarda menos de ~1 s, skeleton idéntico al contenido si es una pantalla completa, spinner si es un bloque, barra de progreso si pasa de 10 s (NN/g).
- **Toasts y avisos que duran lo que el usuario necesita:** `AccessibilityInfo.getRecommendedTimeoutMillis()` alarga su duración según los ajustes de accesibilidad.

## 8. Onboarding, permisos y hábito

- **Registro diferido:** deja usar la app (ver el contenido, hacer una primera acción) antes de pedir la cuenta. En Duolingo supuso un 20 % más de usuarios activos al día; cambiar "Descartar mi progreso" por "Más tarde" añadió un 8,2 %. [First Round](https://review.firstround.com/the-tenets-of-a-b-testing-from-duolingos-master-growth-hacker/)
- **Pedir permisos en el momento en que tienen sentido** (notificaciones tras la primera acción que las justifica). La HIG pide que la pantalla previa tenga **un solo botón "Continuar"**, sin "Ahora no", y que no imite la alerta del sistema. [HIG](https://developer.apple.com/design/human-interface-guidelines/patterns/accessing-private-data/)
- **Rachas con red de seguridad** (datos de Duolingo): [Lenny's](https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks)
  - 2 "congeladores" funcionaron mejor que 1 y que 3; regalar 2 al empezar ayuda a llegar a los 7 días.
  - **Recuperar** la racha con actividad extra funcionó mejor que pagar por repararla.
  - La racha sin fallos se marca en dorado.
  - "Comprometerme con mi objetivo" funcionó mucho mejor que "Continuar".
  - Contar una acción mínima como racha **no** movió los usuarios activos.
- **Widget con la próxima acción y el riesgo**, cuya urgencia crece al acercarse el plazo (widget de racha de Duolingo, Live Activities). [Duolingo](https://blog.duolingo.com/widget-feature/)
- **Premiar la constancia, no solo el rendimiento:** "Local Legends" de Strava premia a quien más veces completa un tramo en 90 días. [Strava](https://medium.com/strava-engineering/building-local-legends-290879265c83)
- **Celebrar hitos tempranos y alcanzables**, con una animación que merezca la pena porque es rara (el fénix de la racha de Duolingo, que se entiende en cualquier cultura).
- **El siguiente paso, obvio:** al terminar una tarea, que la siguiente ya esté delante (Superhuman).

## 9. Accesibilidad móvil

Fuente principal: los criterios de Apple para las etiquetas de accesibilidad de la App Store. [Overview](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/overview-of-accessibility-nutrition-labels)

- **Texto grande al 200 % como mínimo sin romperse.** [Larger Text](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/larger-text-evaluation-criteria)
  - El texto pasa a varias líneas en lugar de cortarse.
  - **Lo que va en fila pasa a columna** con tamaños grandes: `useWindowDimensions().fontScale > 1.3` → `flexDirection: 'column'`.
  - Los botones principales pasan a ancho completo.
  - Las pestañas, que no escalan, muestran una **vista ampliada al mantener pulsado** (`accessibilityShowsLargeContentViewer` + `accessibilityLargeContentTitle`).
  - `maxFontSizeMultiplier` **solo** en elementos repetidos y predecibles (pestañas, badges), nunca en el texto principal.
- **Android 14 escala el texto de forma no lineal hasta el 200 %:** el texto grande crece menos que el pequeño. No fijes alturas en contenedores con texto y no calcules tamaños con `fontScale`. [Android 14](https://developer.android.com/about/versions/14/features)
- **Tarjeta leída como un solo elemento** (`accessible={true}` + `accessibilityLabel` que la resume), con sus acciones como acciones personalizadas en lugar de gestos: [VoiceOver criteria](https://developer.apple.com/help/app-store-connect/manage-app-accessibility/voiceover-evaluation-criteria)
  ```tsx
  <Pressable
    accessible
    accessibilityRole="button"
    accessibilityLabel="Spinning, hoy 18:00, 3 plazas libres"
    accessibilityActions={[{ name: 'book', label: 'Reservar' }, { name: 'share', label: 'Compartir' }]}
    onAccessibilityAction={e => handle(e.nativeEvent.actionName)}
  />
  ```
- **`accessibilityState`** (`selected`, `disabled`, `checked`, `busy`) en lugar de meter el estado en la etiqueta. La etiqueta no incluye el tipo de control ("botón").
- **Anunciar cambios:** `aria-live` / `accessibilityLiveRegion` **solo funciona en Android**. En iOS, `AccessibilityInfo.announceForAccessibility()` o `announceForAccessibilityWithOptions(msg, { queue: true })`. Mover el foco con `sendAccessibilityEvent(ref, 'focus')`; `setAccessibilityFocus` está deprecado.
- **Recargar contenido no mueve el cursor del lector de pantalla.**
- **Control por voz:** la etiqueta accesible coincide con el texto visible. En nativo se pueden añadir sinónimos (`accessibilityInputLabels`).
- **Ajustes del sistema a respetar:** Reducir movimiento, Reducir transparencia, Texto en negrita, Aumentar contraste (`AccessibilityInfo.isBoldTextEnabled`, `isDarkerSystemColorsEnabled`) y Diferenciar sin color.
- **Fotos y avatares no se invierten** con Invertir colores: `accessibilityIgnoresInvertColors`.
- **Login:** `autoComplete="password"` / `textContentType="password"` (y `"newPassword"` / `"oneTimeCode"`), pegar permitido y etiqueta visible.
- **No bloquear el zoom** ni la rotación sin motivo (BBC).
- **Espectro de personas:** usar la app con una mano, con sudor, con guantes o al sol. Objetivos grandes y contraste alto ayudan a todos.

## 10. Revisión rápida (móvil)

- [ ] ¿Los botones responden al tocar y se cancelan si el dedo se arrastra?
- [ ] ¿Animaciones con muelle, interrumpibles y con la velocidad del gesto? ¿Sin rebote en los toques?
- [ ] ¿Alguna acción muy frecuente animada? → quitar la animación.
- [ ] ¿Acciones dentro de la barra de pestañas? ¿Un historial por pestaña? ¿Pulsar la pestaña activa vuelve arriba?
- [ ] ¿Toda subpantalla tiene la flecha de volver arriba a la izquierda, fija al hacer scroll? ¿La primera pantalla de un modal lleva X y no flecha? ¿El gesto pregunta lo mismo que la flecha?
- [ ] ¿Algún panel encima de otro? ¿El CTA al alcance del pulgar y dentro del contenido?
- [ ] ¿Zonas táctiles ≥ 44 pt? ¿`borderCurve: 'continuous'`? ¿Cifras tabulares?
- [ ] ¿Rellenos, márgenes, radios y alturas salen de la escala? ¿El mismo papel lleva el mismo valor en todas las pantallas? (`SKILL.md` § Medidas)
- [ ] ¿Reserva o pago optimista sin marcha atrás, o sobre un recurso escaso?
- [ ] ¿Hápticos solo en umbrales y resultados, nunca en el scroll?
- [ ] ¿Permisos pedidos en contexto? ¿Registro diferido?
- [ ] ¿Probado con el texto al máximo (AX5 en iOS, 200 % en Android), VoiceOver, TalkBack y Reducir movimiento?
