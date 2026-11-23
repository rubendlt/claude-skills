---
name: mobbin-producto
description: >-
  Tips de producto y diseño de apps sacados de los vídeos de Mobbin (@mobbindesign), que cuentan cuántas apps de su
  biblioteca hacen cada cosa y entrevistan a quien la ha medido: onboarding (largo o corto, personalizar, momento «ajá»,
  permisos, checklist), paywalls (cuándo, cómo, qué probar, métricas), flujos de cancelación (ofertas, encuesta de baja,
  confirmación, métricas), rachas y hábito, dashboards que se recuerdan y diseñar con IA a partir de referentes reales.
  No es una skill: alimenta a apps-moviles, paneles y conversion.
---

# Mobbin: lo que hacen las apps publicadas y lo que les funcionó

Tips de **8 vídeos** de @mobbindesign, leídos por subtítulos el 23/11/2026 y **agrupados por problema**, no por vídeo. Las abreviaturas (Qsq-, 9ypq…) remiten a `references/fuentes.md`.

## Cómo leerla

1. **Hay tres tipos de dato y no valen lo mismo:**
   - **«En Mobbin, X %»** = cuántas apps de su biblioteca hacen algo. Dice **qué es habitual, no qué funciona**.
   - **«+N %» de una empresa** (Headspace, Blinkist, Duolingo…) = resultado de un test que cuenta la propia empresa. No está verificado, pero es un test real, no una opinión.
   - **Expertos entrevistados** = criterio con mucha práctica: Jonathan (ha diseñado 4.700 paywalls), Daniel de Churnkey (12 millones de intentos de baja) y el fundador de Moonly (más de 1 M$ en tests A/B).
2. **No hay una respuesta universal.** El propio canal lo repite: el paywall más feo ganó a todos en una app y el onboarding más largo es el de algunas de las apps con más éxito. Cada consejo es **algo que probar**, no una regla.
3. **Persuasión sí, trampas no.** Lo marcado con ⚠️ funciona a corto plazo y daña la confianza. Los expertos lo dicen ellos mismos.
4. Los nombres de las apps salen de subtítulos automáticos y alguno puede estar mal escrito.

---

## 1. Onboarding

**El largo no es lo que importa** (Qsq-, GNiL)
- La app media tiene **25 pantallas de onboarding**. Las más largas son de finanzas, salud y fitness y educación (7 de las 10 más largas son de finanzas), y algunas de las más largas son de las apps con más éxito. Entre las más cortas hay productos de IA.
- **Patrón de los mejores:** registro → configuración → **momento «ajá»**, cuando se siente el valor (Airbnb: primera reserva; Netflix: ver una serie; Mobbin: guardar una pantalla). Diseñar hacia ese momento.
- **Un flujo largo puede no sentirse largo:** Duolingo pasa ~60 pantallas antes de pedir la cuenta, porque primero eliges idioma, haces una lección y te sientes bien. BitePal (61 pantallas) tiene una mascota a la que pones nombre y animaciones en cada paso. Bump anima hasta la carga y la verificación, pasos que casi nadie cuida.
- **A veces no hace falta onboarding:** si el producto se explica solo (un chat de IA, donde el valor está en el primer mensaje), dejar entrar rápido.
- **Cultura:** en mercados orientales la gente está más cómoda con interfaces densas. No copiar sin mirar el público.

**Vender el resultado, no la lista de funciones** (Qsq-)
- Enseñar el producto funcionando en la bienvenida (Timehop) o con animación, sin leer nada (Runkeeper).
- **Dejar probar lo principal antes de registrarse** (Elma). Casi ninguna app de IA lo hace.
- Convertir la pantalla de registro en un argumento de venta, con logos de clientes al lado (Superhuman).
- **Toque humano:** nota del fundador con firma a mano (One Year); felicitar el cumpleaños (Tinder); vídeo del CEO justo en el momento «ajá», al publicar el primer alojamiento (Airbnb); nota del CEO al crear la cuenta (Basecamp).

**Personalizar, y que se note** (Qsq-, qK7W)
- Solo el 23 % de las apps personaliza en el onboarding, y las de IA solo el 7 %.
- **Dejar elegir más de un objetivo:** Headspace pasó de uno a varios y la conversión a prueba gratuita subió un 10 %.
- **Copy de conversación en el cuestionario:** Dollar Shave Club, +5 % de suscripciones.
- **Enseñar lo que han desbloqueado las respuestas:** un plan con la fecha exacta en la que llegarás a tu objetivo (BitePal); la home ya llena solo con lo que te interesa (Brilliant); «En 2 meses podrás hablar viajando por Francia», con un gráfico (Speak). Detalle de Speak: las pantallas anteriores ya te hacían hablar en vez de escribir.
- Personalización estética, como elegir el estilo del mapa (Focus Flight), para que la app se sienta tuya antes de empezar.
- **Moonly, en tres pasos:** 1) el problema del usuario (ansiedad, TDAH…), no las funciones; 2) una pequeña revelación útil («cómo afectan los ciclos lunares a tu ánimo»); 3) la función presentada como solución a *ese* problema. Tienen ~10 onboardings distintos según el anuncio del que llegas, con página de App Store a juego: **el LTV se duplicó**. La primera home también se personaliza (tarjeta del día, accesos rápidos según las respuestas): retención del 41 % el día 1 y del 37 % el día 7.

**No soltar toda la teoría al principio** (Qsq-)
- Explicar cada paso cuando llega: copy que tranquiliza y tooltips que dicen qué efecto tiene cada decisión (Cake Equity, que trata temas áridos como participaciones y *vesting*).
- **Contraseña con los requisitos marcándose en vivo** mientras escribes.
- **Ni tours ni pop-ups:** un empujoncito en el sitio justo en vez de un estado vacío en blanco. **Una checklist de 6 pasos** en lugar de pop-ups y banners dio a Mural un +10 % relativo de retención a la semana. La checklist sigue ahí aunque cierres el flujo inicial.

**Permisos, registro y cuenta** (Qsq-, qK7W, E7Rz)
- **Una pantalla propia antes del permiso de notificaciones** que diga para qué es («Te recordaré que aprendas para que se convierta en hábito», Brilliant), o que **enseñe la notificación que vas a recibir**. Sube la aceptación. Por pantallas de permisos y de paywall, el onboarding en iOS es un 21 % más largo que en web.
- **Partir el formulario de registro en varias pantallas** subió la conversión un 15 % (House). Añadir pasos en un sitio puede quitar fricción en otro.
- **Preguntarse para qué se pide la cuenta.** Solo el 12 % de las apps de Mobbin no tiene registro en ningún sitio. Moonly lo quitó porque los datos ya estaban en el llavero de Apple, pedir un email real distrae de lo que el usuario vino a hacer y el email marketing no les salía rentable.
- ¿Cuenta antes o después del paywall? Jonathan no tiene resultados concluyentes. Prefiere la cuenta antes para asociar cada suscripción a un usuario.

---

## 2. Paywalls

**Primero, lo básico** (E7Rz)
- **Primer paywall:** un titular que describe el producto, un par de viñetas con lo que hace y un botón para continuar. Optimizar paywalls al principio importa poco; lo primero es que entre gente.
- **Es un flujo, no una pantalla:** se decide pagar antes de verlo. Puntos de contacto: tras el onboarding (el más usado: **78 % de las apps iOS de Mobbin**), al tocar una función de pago, en ajustes, al intentar cancelar y antes de borrar la app (9ypq, E7Rz).
- **Momento:** un paywall bien diseñado que sale a destiempo sigue siendo malo (9ypq).

**Que no parezca un muro** (9ypq)
- **Vender el resultado antes de pedir dinero:** Opal enseña cuántos años de vida recuperas y las altas a la prueba gratuita pasaron del 7 % al 17 %.
- **Paywalls de varias pantallas** casi siempre ganan a los de una (Jonathan): al final del onboarding, «tu plan está listo» y el resultado emocional («volverás a sentirte tú en 4 semanas»), con la información desplegándose poco a poco (Ahead). Bien hecho, el paywall se siente como el siguiente paso natural.

**Quitar el riesgo** (9ypq, qK7W)
- **Línea de tiempo de la prueba** (hoy, aviso antes del cobro, cobro): Blinkist logró más altas a la prueba, menos quejas y más permisos de notificación, porque el usuario quiere el aviso.
- **Misma oferta, mejor contada:** destacar la prueba gratuita, una etiqueta de descuento y una oferta más fácil de entender casi triplicaron la conversión directa (Tipstop).
- **Una sola acción, «Canjea tu semana gratis»,** en vez de un paywall clásico: +25 % de pruebas iniciadas (Slopes, inspirado en Apple).
- **Subtítulo «Sin compromiso, cancela cuando quieras»:** sube un poco siempre (Jonathan, Moonly). El texto del botón con lo que hace el usuario en vez de «Continuar» unas veces gana y otras no. La mayoría de paywalls ganadores tienen un chevron → en el botón, aunque nadie lo ha probado aislado.
- **Hoja de salida:** si cierra el anual, ofrecerle el mensual.
- ⚠️ **Descuentos agresivos de última hora:** Jonathan los evita salvo en Black Friday. Mejor una **prueba más larga**, que consigue lo mismo sin gastar confianza.

**Más fricción a veces convierte más** (9ypq)
- Pedir la tarjeta para la prueba (Outsider) redujo las altas a menos de la mitad, pero la conversión se multiplicó por 5 y hubo más del doble de clientes de pago: filtra a quien no iba en serio.
- Prueba gratuita solo en el plan anual (Moonly).

**Cómo enmarcar el precio** (9ypq, qK7W)
- Prueba social: reseñas reales y 5 estrellas. Moonly la pone siempre.
- **Enmarcar por lo que le importa al usuario:** cada paywall vende un futuro distinto.
- **Ancla de precio:** desglosar en semanas (Tide); comparar con lo que ya gasta (un café, terapia; Ahead); un **plan vitalicio caro** que hace parecer barato el anual (solo el 4 % de las apps iOS lo tiene, a unas 2 veces el anual; no hace falta venderlo).
- **Estructura:** por defecto el **anual** (mayor LTV) y **solo dos opciones** a la vista; el resto, tras «Ver todos los planes» en una hoja. Headspace probó pruebas de 7, 14 y 30 días y ganó **14 días en el plan anual**: una prueba más larga hace menos arriesgado el plan caro.
- **Tabla gratis frente a pago:** enseña lo que te pierdes (Jonathan es muy fan, aunque cuesta construirla).
- **Paywall con vídeo** de la app funcionando + viñetas + prueba social: el vídeo comunica el valor más rápido que capturas o viñetas.
- **Acabado:** animación, personajes propios y un mundo (Focus Town). Ahora que cualquiera publica una app, el pulido es lo que hace que te elijan a ti.

**Qué probar y en qué orden** (E7Rz, qK7W)
1. **Diseños radicalmente distintos** (vídeo, viñetas, línea de tiempo, formato largo): es lo que más mueve.
2. **Personalización:** su nombre, sus objetivos y una imagen en la que se reconozca.
3. **Precio y planes:** cómo se presenta el pie del paywall (planes en vertical u horizontal, precio semanal con el real debajo…).
4. Al final, y con dudas éticas: precio según el dispositivo.
- **La imagen fue la palanca más grande de Moonly:** una foto realista (una mujer en un atardecer) duplicó la conversión frente al estilo Disney 3D que les gustaba a ellos. Su público de más de 35 años no se reconocía en dibujos. Poner la cara del usuario en ~50 imágenes salió raro e incómodo y lo quitaron.
- **Solo cambiar título y subtítulo** (8 variantes): +12 %.
- **Paywalls por contexto** (uno por función): perdieron en todos los tests de Moonly. Parecía que había que pagar cada función por separado. Volvieron a **un paywall único, «desbloquea todo»**.
- **Blando (se puede cerrar) frente a duro:** en Moonly ganó el blando en el mundo (la X sale a los 5 s) y el duro en EE. UU.
- **Quitar la prueba gratuita** cuando en la prueba ya se recibe casi todo el valor (la carta astral). El **59 % de los paywalls iOS de Mobbin no ofrece prueba**. Moonly la cambió por una oferta única el día 3: +15 % de ingresos entre los días 3 y 30.
- Método: el paywall actual como control contra 4–5 rivales, paciencia hasta tener significancia estadística y mejoras pequeñas casi a diario (Moonly pasó del 10 % al 40 % de conversión en tráfico de pago en 6 años). Con IA (Cursor, Codex) cruzan datos de PostHog y Adapty y deciden si publicar, no publicar o seguir midiendo.

**Métricas** (E7Rz)
- **Qué negocio quieres:** sacar ingresos rápido (ARPU, planes semanales) o durar (LTV y retención). Son juegos distintos.
- El ARPU engaña: puede ser alto porque todo son planes semanales con un 90–95 % de bajas al mes.
- **% de instalaciones que ven el paywall:** más del 80 % va bien; más del 90 %, muy bien. Además: conversión de prueba a pago, LTV, retención en D1, D7 y D30 y bajas.

**⚠️ Funciona, pero cuidado** (9ypq, E7Rz, qK7W)
- **Ruleta de descuento** amañada: funciona para planes semanales y hace daño al negocio a largo plazo. Además la usa todo el mundo y los usuarios ya cierran el paywall esperando la oferta siguiente.
- **Urgencia falsa:** cuando todas las apps la usan, nadie se la cree.
- **80 % de descuento nada más acabar el onboarding:** canibaliza ingresos. Los descuentos grandes, mejor para retener a quien se va.
- **Cambiar la unidad y no el número** (8 $/mes → 8 $/semana, Moonly): más ingresos y más bajas.
- **Interruptores de prueba gratuita:** Apple empezó a rechazarlos a principios de 2026 por confusos.
- Moonly cobra por Stripe en EE. UU. (el LTV se duplicó, porque con el pago nativo la mitad cancelaba en 3 minutos). En Android no lo recomiendan.

---

## 3. Flujos de cancelación

Las apps pierden ~39 % de sus clientes de pago al año, y un buen flujo de baja recupera a 1 de cada 3 (MQOf, datos de Churnkey).

**Las cuatro ofertas que más se aceptan** (MQOf)
1. **Descuento:** la más aceptada. Quien lo acepta se queda ~5 meses más y 1 de cada 10 sigue pagando al año. **Hasta el 40 %** es la zona buena (más rescates y mejor LTV); más, y el producto parece valer menos. Mejor **3 meses** de descuento. Segmentar para que nadie encadene cupones o pausas.
2. **Pausa:** +5,5 meses, pero solo el 7 % de las apps la ofrece. Ponerle un **máximo** (3 meses), reanudar sola y **enseñar siempre la fecha de vuelta**. Si la pausa es larga, la gente olvida que está suscrita y el cobro acaba en reclamación.
3. **Plan más barato o distinto:** es lo que más alarga (~7 meses más; casi el 30 % sigue al año). El presupuesto es el motivo de baja más común. Spotify enseña planes más baratos antes del botón de cancelar; Netflix, el plan con anuncios. Ofrecer el anual se acepta casi tanto como un descuento.
4. **Alargar la prueba:** solo el 2 % lo hace. En Memrise, la mitad de las bajas llegan en los 3 primeros minutos de prueba, porque la gente no se fía de acordarse. Avisar 2 días antes (Duolingo) solo retrasa la decisión; **alargar la prueba** deja tiempo para ver el valor.

**Si rechaza todo** (MQOf)
- **Recordar lo que pierde, con sus datos:** cuánto ha ahorrado él (Foodpanda, Wolt; pero no si ha ahorrado cero). La cifra media genérica no convence. ⚠️ Recordar que tiene un precio antiguo más barato (Canva) roza el chantaje.

**Encuesta de baja** (MQOf)
- El 60 % de los flujos tiene encuesta y 7 de cada 10 **no hacen nada con la respuesta**. **Cada motivo, su oferta:** presupuesto → descuento (o tres tramos de precio y la oferta que encaje); no lo uso ahora → pausa; falta una función → formulario o soporte.
- **Redacción:** «No me cabe en el presupuesto», no «Es demasiado caro» (que dice que el producto no lo vale); solo el 18 % lo enmarca así. «Me tomo un descanso», no «Ya no lo uso» (que suena definitivo).
- **Un solo motivo**, no varios: si marca tres, no sabes qué oferta enseñar.
- **Quitar «Otro»:** es un segundo botón de cancelar. La gente lo marca para salir del paso, y cualquier oferta asociada se acepta menos. 2 de cada 5 encuestas lo tienen.
- **4–5 opciones como máximo, concretas y propias de tu producto**, que hagan pensar al leerlas. Cada pregunta extra tras la primera baja un 6,7 % los rescates. Hay clientes de Churnkey que rescatan al 14 % sin ninguna oferta, solo con una encuesta bien escrita.
- **Una oferta pequeña al principio** (10 % el mes que viene) cambia el chip: «hay más opciones que cancelar».

**Cancelar fácil retiene más** (MQOf)
- **Cancelar tan fácil como suscribirse:** «Gestionar suscripción» donde se espera, en la cuenta, sin escribir a soporte. Quien no llega enfadado acepta más ofertas. En varios estados de EE. UU. ya es ley.
- **Botón de cancelar en cada pantalla del flujo:** los rescates no bajan. ClassPass: menos de 5 pantallas para suscribirse y 17 para darse de baja.
- **Si se va porque ya consiguió lo que buscaba,** celebrarlo y pedirle un caso de éxito.

**Confirmación y vuelta** (MQOf)
- Hasta un 40 % la lee. Con su nombre, gracias, **fecha exacta en la que termina** y «no se te cobrará más». Lo hace el 60 % de las apps.
- **Volver en un toque:** banner de reactivar (Netflix); Skillshare da un 40 % tras cancelar.

**Métricas** (MQOf)
- **Bajas** voluntarias (casi todas) e involuntarias (pago fallido). Con un 5 % al mes, casi la mitad se ha ido al año.
- **Tasa de rescate:** un 20–36 % es bueno. **Rescatar el 50 % o más significa que la oferta es demasiado generosa** y el producto parece valer menos.
- **Reactivación** (de los rescatados, cuántos vuelven a pagar): un 40–70 % es sano; más del 75 %, regalas demasiado.
- **LTV por oferta:** de 150 que aceptaron un descuento, cuántos quedan al año.

---

## 4. Rachas y hábito

**Qué mueve una racha** (ARq1, 859 rachas)
- **Miedo a perder (aversión a la pérdida):** copy más urgente, cuenta atrás, mascota enfadada. ⚠️ Funciona por culpa.
- **Optimismo:** copy positivo; el botón como promesa a uno mismo. Duolingo cambió «Continuar» por **«Me comprometo con mi objetivo»** y fue «una victoria enorme».
- **Coleccionables:** hitos e insignias como prueba de progreso (Opal).
- **Apego:** una mascota con emociones (antropomorfismo) o algo que «te necesita», como un Tamagotchi. Cuanto más apego, más cuesta irse.
- **Patrón visual:** una cadena de días en la que el hueco salta a la vista (efecto Zeigarnik: lo inacabado se queda en la cabeza).

**El bucle** (ARq1)
- La dopamina responde a la **anticipación** del premio, no al premio. Bucle de 4 pasos: señal → deseo → acción → premio. **Ver el número de la racha ya es la señal.** La acción tiene que ser fácil, por ejemplo pasando solo al siguiente paso.

**Flexibilidad mejor que dureza** (ARq1)
- **Congelar la racha:** con hasta dos congelaciones equipadas, Duolingo sumó un 0,38 % de usuarios activos diarios (más de 200.000 al día).
- **Mantener la racha con una lección en vez de con el objetivo diario completo:** un 40 % más mantuvo la racha de 7 días.
- Diseñar para **recuperarse**, no para la perfección: reparar, congelar, pausar, días de gracia.

**Aviso** (ARq1)
- Lo que se sabe de las rachas habla de **volver a la app, no de cambiar hábitos**. Un estudio con hábitos reales vio que saltarse un día casi no afecta a que el hábito se automatice. Cuando todo se vuelve predecible, la dopamina baja y las apps fabrican sorpresas (animaciones, hitos, XP extra). Optimizar la vuelta tras fallar, no la racha más larga.

---

## 5. Dashboards que se recuerdan

(kdRk, 2.108 dashboards; casi 1 de cada 5 productos de Mobbin usa el dashboard como pantalla de inicio)
- **Jerarquía, espaciado y buenos gráficos son lo mínimo**; con eso nadie lo recuerda.
- **Un paso por delante:** junto al gráfico, la conclusión y **qué hacer** (Faith); resumen semanal y nota diaria con lo importante (Origin); tras correr, tus datos empaquetados como logros (Runner).
- **Una visualización propia de esos datos,** no la de plantilla: visitantes en directo sobre un globo, cada punto una persona (Shopify Live View); un mapa de calor de horas con más trabajo (Front); una tarta dentro del gráfico de participaciones (Cake); un juego en vez de una tabla vacía cuando ya has pagado todas las facturas (Mercury). Un dashboard muy limpio destaca entre tantos cargados (Visitors).
- **El dashboard vende el producto:** entre 10 plataformas parecidas, convence la captura que dice qué hace, cómo vas y qué hacer después.
- **En móvil:** datos personales en formato historia de Instagram, que se pasan con el dedo y se comparten (Opal).
- **Métricas con nombre propio:** racha (Duolingo), *readiness* (Oura), «cerrar los anillos» (Apple). Cuando el usuario habla con tus palabras, es muy difícil que se cambie.
- **IA para el «¿por qué?»:** una pregunta sugerida bajo el gráfico o un chat junto a los datos. Los dashboards con IA se guardan el doble en Mobbin.
- **Prueba final:** «¿Le haría una captura? ¿Por qué?». Los mejores no son los más bonitos, sino los que saben qué dejar fuera.

---

## 6. Crecer (Moonly, qK7W)

- **Compartir en un toque:** al detectar una captura, ofrecer un flujo para compartir ya preparado. La gente no comparte funciones; **comparte cosas sobre sí misma**. Comparte el 23 %.
- **Salir como «App del día»** atrae tráfico que no encaja y empeora la conversión. Solo ayuda a apps genéricas (calculadora, linterna), no a las de nicho.
- **Extras además de la suscripción** (informes en profundidad), ofrecidos solo cuando ayudan en ese momento.
- **Validar con un embudo web antes de construir la app:** más libertad, señal inmediata del mercado y mucho más barato.

---

## 7. Diseñar con IA a partir de referentes (YbLF)

- **Una IA sin referentes da un flujo genérico;** con referentes reales, uno pensado para su sector (un onboarding de fintech incluye verificación de identidad y requisitos legales).
- **Investigar antes de construir:** pedir los mejores ejemplos, los patrones comunes, los compromisos y los puntos ciegos, en un informe. Luego construir con ese informe + el sistema de diseño + un brief, y pedir **«marca dónde te desvías a propósito de los patrones que encontraste»**.
- **No hacerlo de una tirada:** investigar primero y usar referentes para problemas concretos: comparar dos competidores cara a cara (el checkout de DoorDash frente al de Uber Eats), 10 estados vacíos de apps de productividad, copy con su fuente, ideas de otros sectores, casos límite.
- **Qué priorizar, qué quedarse y qué cortar sigue siendo trabajo de la persona.**
- Es el método de la skill `diseno-libre` (referentes → ideas → construir). Mobbin MCP es de pago; aquí los referentes salen de Lazyweb y de capturas.
