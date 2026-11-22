---
name: crawford
description: >-
  Criterio de diseño web orientado a conversión de Sam Crawford (canal @bycrawford, agencia «by Crawford», más de 800
  webs de servicios y B2B en Squarespace): qué decisión tiene que tomar el visitante y qué necesita entender antes, la
  hero como «mini web» (titular, contexto, prueba y CTA), un solo camino de CTA con textos que dicen qué pasa, prueba
  social colocada en el punto de duda, cuánta información enseñar según lo que arriesga el comprador, por qué una web
  parece cara o barata (contención, microdetalle, activos propios), empresas «aburridas» con catálogo grande, el
  «uniforme» de las webs hechas con IA, cómo revisar y medir antes de rediseñar, y más de 20 casos de clientes con su
  antes y después. USAR al construir, revisar o rediseñar la home, una landing o una página de servicio de una web de empresa
  o de servicios, al auditar por qué una web «no convierte» o «parece barata», al evaluar una home hecha con IA, o
  cuando el usuario mencione a Crawford. Criterio de un diseñador que vende su agencia, no evidencia. NO usar en
  ajustes menores ni para decidir movimiento, accesibilidad o medidas (skills movimiento, hig, m3, govuk).
---

# Crawford: webs de servicios que convierten y parecen caras

Criterio de Sam Crawford (@bycrawford), leído entero por subtítulos: **los 40 vídeos** del canal (22/11/2026). Detalle por vídeo en `references/fuentes.md`; los rediseños con su antes y después, en `conversion/references/casos-crawford.md`. Agrupado **por problema, no por vídeo**.

**Cómo leerlo:**
- **Es criterio, no investigación.** Todos los vídeos acaban vendiendo su agencia o su comunidad, y las cifras casi nunca tienen fuente («casi la mitad se va con más de 3 s», «30-50 % más leads», «-7 % por segundo»). Sus resultados (su hero con formulario: de ~2 a ~10 consultas al día; Home Builder AI: de 1 a 39 consultas de alto valor) son anécdotas suyas, y él mismo avisa de que no se pueden atribuir solo al diseño. Con fuente reconocible: primera impresión en ~50 ms (Lindgaard 2006), pico-final (Kahneman), ley de Fitts, efecto pratfall, búsquedas sin clic ~60 % (SEMrush 2025), Ley Europea de Accesibilidad desde el 28/06/2025. Para evidencia, skill `nng`.
- **Se repite mucho.** Las mismas 20 ideas vuelven con otro título. Lo que más vale: los **casos de clientes**, la **autocrítica de su propia web**, su página «contrátanos» desmontada y la **prueba de webs hechas con IA**.
- **Su terreno:** webs de servicios y B2B que buscan contactos (energía, SaaS, consultoría, inmobiliarias, salud, eventos, suministro industrial). No e-commerce puro.
- **Fuera:** negocio de agencia (precios, captar clientes, contratar, rutina, llamadas de venta), elegir plataforma y anuncios de herramientas.

## Qué aporta y qué no (para no pisar a los demás)

| Para esto | Aquí | En otro sitio |
|---|---|---|
| Qué decisión toma el visitante, qué secciones se ganan su sitio | § 1, § 10 | — |
| Qué tiene que llevar la hero | § 2 | Anatomía y medidas: `fuentes/selfmade` § 5 |
| Camino de CTA y textos de botón | § 3 | Color único de botón, botón fantasma: `selfmade` § 5; `timgabe` |
| Qué prueba social, dónde, cuánta información según el riesgo | § 4 | Prueba «en bruto»: `selfmade` § 5 |
| Por qué parece cara o barata; empresas «aburridas» | § 5 | Pulido: `kolejain`; slop: `ux-craft/references/slop.md` |
| Tics de las webs hechas con IA y rúbrica | § 9 | Escáner de slop: `ux-craft` |
| Revisar, probar y medir antes de rediseñar | § 11 | Revisión de usabilidad: `selfmade` § 7; `nng` |
| Ejemplos concretos para justificar un cambio | `conversion/references/casos-crawford.md` | — |
| Cómo animar, medidas, contraste, objetivos táctiles | — | `movimiento`, `hig`, `m3`, `govuk` |

**Manda el proyecto.** Si el `CLAUDE.md` fija reglas (nada se mueve solo, sin testimonios, sin precios, sin caras, un solo color, sin eyebrows), ganan. Crawford da por buenos los fundidos al hacer scroll, los carruseles de logos automáticos, los contadores que suben, los testimonios con cara y mostrar precios: gusto o contexto suyo, no regla universal.

## 1. Antes de diseñar: qué decisión, qué necesita entender

1. **¿Qué decisión quieres que tome el visitante?** (pedir presupuesto, reservar, comprar). En una frase. «Si no lo sabes decir, la web tampoco.»
2. **¿Quién llega, qué le trajo y qué sabe ya?**
3. **¿Qué necesita entender o creer antes de decidir?** Eso da razón a cada sección, el orden y la jerarquía.

Y para cada decisión: **«¿Ayuda a la persona correcta a hacer la acción correcta?»**, no «¿queda bien?». «Moderno y minimalista» no es un problema de diseño; «no entienden en qué nos diferenciamos de cinco competidores», sí.

- **Escribe la oferta en una frase** y comprueba que hero, menú, ejemplos y CTA defienden esa misma oferta y no cada uno un argumento distinto (caso Designjoy: copiar su maqueta sobre una oferta genérica no salva nada).
- **Posicionamiento concreto.** «Nos importa más» lo dice todo el mundo. ¿Más rápido? ¿Más caro y a mucha honra? ¿El único que hace X?
- **Si el cliente quiere parecerse al competidor**, preguntar qué dice el titular del competidor: copiar el diseño con palabras peores es copiar lo que no vende.
- **Cada página, un trabajo:** inicio = primera impresión; «sobre nosotros» = confianza; servicios = deseo; contacto = quitar fricción. Cuatro páginas bien hechas (inicio, sobre nosotros, servicios, contacto) son una web completa.
- **La home no es una galería de todo lo que hace la empresa:** ayuda al visitante correcto a reconocerse, entender la oferta, ver por qué es creíble y dar el siguiente paso.
- **Ejercicio antes de pagar un rediseño:** por cada sección, escribir qué ayuda a entender o a hacer. Si no se sabe explicar, revisar si sobra. En su propia web descubrió que media home era relleno acumulado.
- **Brief (para uno mismo o el cliente):** qué hace la empresa en 2-3 frases «como en una fiesta»; objetivo principal; páginas; secciones de la home; funciones imprescindibles (reservas, formulario, galería); **tres webs que te gusten y por qué** (el porqué dice más que la lista). Todos los activos (textos, fotos, marca) antes de diseñar. La home primero, aprobada, y luego hace de guía de estilo del resto.

## 2. La hero: una mini web en una pantalla

- **Una pregunta: «¿es para mí?».** En segundos: qué es, para quién, qué gano, qué hago ahora. Mucha gente no baja de la hero: **no guardar lo mejor para el final.**
- **Cuatro piezas a la vista sin scroll:** titular que explica la oferta, contexto debajo (lo que el titular no cubre), **prueba relevante** y CTA claro. Listón: alguien que no viera nada más podría decidir solo con esa pantalla.
- **Titular claro, ni ingenioso ni bonito.** En afirmación, no en pregunta («¿Estás listo para…?» pasa el trabajo al visitante). Contra «soluciones innovadoras para un mañana mejor». **Nombrar la categoría** en vez de una función (Markups: de «revisiones de contratos en tu bandeja en 15 min» a «el primer agente de revisión de contratos solo por email»). Hablar del problema del cliente, no de los premios propios (su autocrítica: su primera pantalla hablaba de sus credenciales).
- **La imagen refuerza el titular, no cuenta otra historia.**
- **Una pizca de prueba debajo** («confían en nosotros» + logos, nota de reseñas) empieza el halo.
- **Que pueda contactar ahí mismo.** Su web puso un formulario corto en la hero y las consultas se multiplicaron (anécdota): había gente interesada que se perdía entre la hero y la página de contacto. La ley no es «formulario en la hero», sino dar el siguiente paso con la menor fricción.
- **El minimalismo no es dogma.** Un cliente pedía hero centrada, poco texto y un CTA; su público pedía más información arriba; con el doble de contenido sobre el pliegue, convirtió casi el doble (anécdota).
- **Prueba de los 5 segundos:** enseñar la primera pantalla 5 s, quitarla y preguntar qué hace la empresa y qué pulsaría. Si duda, ¿qué parte le confundió? Arreglar eso antes que el fondo o los colores.
- «La hero no es para ser creativo, es para ser útil.»

## 3. Un solo camino de CTA

- **Una web, un trabajo.** La home media tiene ~5 CTA rivales (contactar, folleto, newsletter, demo, chat). Con todo igual de alto, lo fácil es no hacer nada. **Puede haber diez botones si todos hacen el mismo trabajo.**
- **Repetir, siempre al mismo destino.** El cambio que más subió las consultas en su web fue dar ocasión de contactar arriba y a lo largo de toda la página, en todo el sitio: quien ya decidió no tiene que leerlo todo; quien duda, tiene enlaces a lo que le falta.
- **Primario en sitios escogidos, secundario discreto en el resto.** Primario en la cabecera, la hero y el cierre; en cada sección, un enlace subrayado al mismo sitio (IBridge: quitaron casi todos los «leer más» y bajaron el peso de los que quedaban). Más abajo, los CTA apoyan la sección («más sobre este sector»).
- **La acción junto a la prueba:** un botón al lado de cada caso, justo cuando la prueba está haciendo efecto.
- **Cerrar con la misma acción del principio**, no con un pie genérico que obliga a volver arriba.
- **El texto dice qué pasa, y el destino coincide.** Orden de preferencia: verbo concreto («Pedir presupuesto», «Reservar demo», «Ver todos los trabajos») > «Hablemos» (cálido, centrado en el visitante) > «Contactar» (transaccional, centrado en la empresa). «Saber más», «Siguiente paso» o «Haz clic aquí», nunca. Cuanta menos ambigüedad, consultas más cualificadas.
- **Misma intención, varias vías:** formulario, teléfono y email (o reservar llamada). «Los que no rellenan formularios se van si es la única opción.» El teléfono, con icono, o se confunde con un enlace del menú.
- **Si de verdad hay varios objetivos** (Flowcorp: comprar, pedir presupuesto, llamar): botones visualmente distintos, mismo tamaño, el primario a la izquierda y dominante.
- **No inventar acciones** que no están en el objetivo.
- **«Una gran página no empuja hacia la decisión: quita todas las razones para no tomarla.»** Se vende contra la inacción y el miedo a equivocarse, no contra el competidor.

## 4. Prueba social y cuánta información enseñar

- **Pesa más que el diseño bonito.** Páginas feas que venden porque apilan testimonios, casos y logos. Antes de rediseñar, contar cuánta prueba hay.
- **Va en el punto de duda, no en una página aparte.** Logos junto a la hero; un caso tras explicar la oferta; testimonio junto al precio; nota de reseñas sobre lo que se decide; elementos de confianza alrededor del CTA. Una página «Testimonios» sola no la abre nadie. «Cada afirmación, con su prueba a un scroll.»
- **Cada prueba responde una pregunta distinta:** logos = con quién; portfolio/obras = cómo es el trabajo; testimonios = cómo fue trabajar y qué resultado. Elegir el testimonio por la objeción que responde («rápido sin agobiar» contra el miedo a que se eternice). «Son muy majos» no resuelve dudas de un proyecto serio.
- **Que se parezca al visitante:** mismo sector, cargo, tamaño de empresa o problema; pesa más que un logo famoso ajeno. Mostrar el trabajo **relevante** para lo que busca, no el más bonito.
- **Caso de estudio > testimonio:** problema, qué se hizo, resultado. Mejor con cifra concreta.
- **Autoridad cerca de la petición:** certificaciones, prensa, clientes reconocibles, años de oficio. **Hueca resta:** un sello sin respaldo parece impostado.
- **Efecto pratfall:** lo perfecto parece falso. Decir para quién no es, enseñar la nota real.
- **Garantía, si existe, concreta** (qué pasa si sale mal), no «satisfacción garantizada».
- **Reorganizar, no borrar.** Información pesada pero necesaria (programas públicos, certificaciones): en su propia sección etiquetada y las afiliaciones en una fila (caso IBridge).
- **«Nadie va a presumir de ti como tú»:** si el trabajo es bueno, ponlo donde lo vea el siguiente cliente.

**Cuánta información: lo decide lo que arriesga el comprador.** Cuanto más arriesga, más necesita antes de contactar: una página seria reducida a titular y botón parece que **oculta algo** (Attune, gestión patrimonial: enfoque, servicios, quién está detrás, qué pasa al contactar). En compras de poco riesgo, el proceso es ruido. Antes de quitar una sección: **«¿qué tendría que adivinar el visitante si desaparece?»** Si responde una duda real, mejorar cómo se explica; si repite o dice poco, fuera.

## 5. Lo que hace que una web parezca cara (o barata)

- **Contención.** «Lo premium es lo que queda cuando quitas lo que no ayuda al comprador a decidir.» Aire alrededor del titular, menú de 4 elementos y no de 9, cada elemento se gana su sitio. Sobrediseñar es inseguridad. Lujo (Hermès, Rolex, Aesop, Loro Piana): silencio, «no necesito convencerte». **Gusto = contención intencionada.**
- **Aire.** Abarrotar comunica desesperación. Huecos distintos para agrupar (título-texto más cerca que texto-botón); un título pegado a la sección anterior no se sabe a qué pertenece. No llenar un hueco porque exista. Padding de sección fijo, no a ojo.
- **Microdetalle.** La contención decide qué entra; el detalle es el cuidado de lo que se queda. Contenida pero descuidada sigue pareciendo barata. Se nota: botón descentrado, huecos desiguales, gráficos a sangre que no casan. Detalles baratos y con efecto: etiqueta de contexto en el formulario, sellos propios en vez de los del constructor.
- **Contención no es pereza.** Heurística del esfuerzo: juzgamos mejor lo que se nota que costó trabajo. Pereza: fuente por defecto, iconos de stock, la fototeca de todos, blanco y negro sin pensar. La frontera es la **curaduría**.
- **Activos propios.** Lo que abarata no suele ser el layout sino lo genérico: degradados, iconos y fotos de cien webs. **Prueba del logo del competidor:** pon su logo en tu web; si fotos, iconos y textos encajan igual, nada te distingue. Empezar por los activos que se ven primero y los que explican la oferta (un diagrama propio del servicio vale más que 20 ilustraciones). Foto propia arriba e iconos de librería abajo = dos lenguajes.
- **Fotos reales, aunque imperfectas.** El stock despierta «¿qué más no es real?». Si no hay fotógrafo, fotos de móvil bien iluminadas antes que stock. Una maqueta limpia y editorial solo funciona si las fotos son buenas de verdad.
- **El tono visual sigue al comprador.** Asesoría financiera que pedía billetes girando al hacer scroll: no; primera pantalla con el problema del cliente, prueba, contacto y foto nítida del equipo, «gente de fiar y, sin rodeos, agradablemente aburrida».
- **Degradados:** si lo primero que dicen es «qué degradado», sobra.
- **Vídeo:** míralo sin sonido; ¿qué aprende del negocio? Quítalo; ¿la página queda más clara o rápida? Vídeo de ciudad de noche o manos tecleando = decoración; el taller, el producto en uso o el proceso = información.
- **Base de marca:** logo con intención, paleta cohesionada y, lo que más pesa, la fuente: «la que encaje con quién es la marca, no con quién querrías que fuese».
- **Retocar no siempre es rehacer** (Prova: misma fuente, otro interletraje e interlineado).

### Empresas «aburridas» (industria, seguros, instalaciones, suministro)

- **Si el visitante recuerda el diseño, dejó de pensar en la empresa.** Lo premium aquí es que **se relaje sin saber por qué**: sabe dónde está, para quién es y qué hacer. Listón: ¿llegó adonde necesitaba sin notar que le guiaban?
- **Catálogo grande (Flowcorp, instrumentos de medida, 40 años):** la home dejó de ser un muro de referencias y dice quiénes son, a quién sirven y su experiencia; **el catálogo se queda entero** (el ingeniero necesita las especificaciones) pero ordenado. **Todas las fichas en el mismo orden** (especificaciones, aplicaciones, pedir presupuesto): aprendes a leer una y sabes leer todas. Simplificar es dar a cada visitante su ruta, no meter a todos por el mismo embudo: el comprador nuevo necesita presentación; el ingeniero va directo a la ficha.
- **Varios públicos** (Market Fair: visitantes y quienes alquilan puesto): una bifurcación clara para que cada uno encuentre su camino.
- **«¿Esto está aquí para el comprador o para mí?»** «Proveedor líder fundado en 19xx», misión, valores e hitos internos suelen existir para el ego de quien aprueba.
- **Acortar no es descuidar:** lo que queda tiene que ser buen texto de alguien que entiende al comprador; unas frases genéricas de IA son peores que una versión larga y sabia.

## 6. Jerarquía, tipografía, color y convenciones

- **Casi toda «web confusa» es un problema de jerarquía.** Tres palancas: tamaño, contraste, espacio. Decidir qué se ve primero, segundo y tercero. Linear: un punto focal por sección. Stripe: la idea grande primero, el detalle cuando lo pides. **Prueba:** entornar los ojos o ver la página en pequeño; si todo es una mancha, falla.
- **Recorridos F y Z.** Z: logo → CTA de cabecera → titular → CTA abajo a la derecha.
- **Ley de Jakob:** el visitante pasa su tiempo en otras webs. Originalidad en las ideas, **convenciones aburridas** en lo que debe ser invisible (logo que lleva a inicio, menú donde se espera).
- **Ley de Fitts:** el CTA principal, grande, cerca y sin enlaces apiñados; en móvil, abajo, en el arco del pulgar.
- **Tipografía:** 1-2 familias (máx. 3); se puede todo con una jugando tamaño, peso, interlineado y espaciado (Astra). Cuerpo legible, que desaparezca; decorativas solo en titulares cortos. Errores vistos: H1 más pequeño que un subtítulo, mismo peso en todo, espaciado excesivo. Quitar viudas del titular.
- **Color:** 3-5 colores; **un acento solo para CTA** y lo que debe notarse. El CTA es lo de mayor contraste de la página; el resto, paleta tranquila. Monocromo sin acento: no se sabe dónde pulsar (Focus). Un botón fuera de la paleta delata. **Gris claro sobre blanco «parece sobrio, pero cansa»: medir con un comprobador de contraste**, no a ojo.
- **Texto resaltado en color:** solo la palabra de acción; resaltar porque sí es un tic.

## 7. Movimiento: su regla

- **¿La animación ayuda al visitante o a tu ego?** Si ayuda a usar la web, vale; si es para lucirse, fuera.
- **Pruebas:** pausar la animación, ¿la página sigue explicando la oferta? En un dispositivo lento, ¿llegas al CTA sin esperar?
- **Malo:** scroll secuestrado, parallax, transiciones largas, slider rápido con texto. «Impuesto de velocidad y de paciencia.»
- **Bueno, para él:** microinteracciones (hover que responde, campo que confirma), la puerta de coche que cierra con un golpe sólido.
- Sus fundidos al scroll y carruseles automáticos chocan con proyectos sin movimiento: manda el proyecto. Cómo animar: skill `movimiento`.

## 8. Móvil

- **Contexto distinto:** cola, autobús, 15 segundos.
- **Prueba en un móvil real en una mano:** leer sin zoom; pulsar el CTA con el pulgar sin tocar el enlace de al lado; nada se sale; un titular que en móvil ocupa toda la pantalla y empuja lo importante.
- **Reordenar, no encoger:** titular y CTA antes que la imagen; todo alineado a la izquierda; menú en su esquina, nunca centrado; filas del menú no exageradas; no encadenar imagen tras imagen; repasar lo que el constructor descoloca al encoger.
- **No meter lo importante en carrusel** (cifras, servicios): casi nadie desliza. Testimonios, sí.
- **Texto de cuerpo pequeño**: fallo típico, sobre todo de la IA.
- **Probar con mala cobertura**, no en el wifi de la oficina.

## 9. Webs hechas con IA: el uniforme, los fallos y una rúbrica

**El uniforme** (lo que delata una web generada; «los fundadores ya lo detectan en un segundo, y los clientes de tus clientes también»):
- eyebrow o línea diminuta encima de cada título;
- secciones numeradas como diapositivas;
- titular en serif (a menudo cursiva) con una o dos palabras en otro color;
- sombras y tarjetas en todo; seis cajas crema con el mismo peso; líneas encima de todo;
- hovers sin propósito; demasiados tamaños y pesos;
- colores «casi» de marca; logos de clientes sustituidos por nombres escritos;
- stock que no tiene que ver con el texto; «gráficos a medida» que no lo son;
- etiquetas sobre fotos que ya se entienden («la gente no es tonta»);
- sobreexplicar («muerte por mil cortes»); CTA inventados.
Al corregir, no pasarse: quitar texto hasta quedarse sin contexto también falla.

**Fallos que no se ven en una captura:** foto que no casa (perros en una web médica); lo interactivo parece bien pero no funciona; sección vistosa que cuenta otra historia (el ojo cae en una característica, no en la oferta). Un borrador puede **parecer terminado mucho antes de funcionar**, y la IA no discute un brief equivocado.

**Cómo trabaja él con IA:** activos reales (logos, fotos, códigos de color) dados a mano; reglas de diseño escritas; referencias con captura; cambios «quirúrgicos» de uno en uno (si pides cinco, hace dos y rompe algo); revisión humana de espaciado, tipografía, jerarquía, imagen-texto, colores y código muerto.

**Rúbrica para puntuar una home (0-10 cada una, /50):**
1. **Fidelidad al brief y a los activos.**
2. **Jerarquía e historia visual** (¿dónde mirar primero y qué después?, ¿la imagen apoya el texto?).
3. **Camino de conversión** (¿acción obvia y apoyada en toda la página, o enterrada y compitiendo?).
4. **Encaje de marca y huella de IA.**
5. **Calidad de construcción** (navegación, botones, formulario, móvil; nada muerto).
Fijar los criterios antes de mirar la segunda versión, para no cambiarlos porque una «gusta más».

## 10. Texto y estructura

- **Nadie lee: escanean.** Lo que se lee son el H1, los subtítulos, los CTA y la prueba. Titulares que cuenten la historia solos; párrafos cortos.
- **Prueba de la mano:** tapa el diseño y lee solo el texto; si la oferta no se sostiene, el problema es el texto, no el diseño.
- **Cortar a la mitad, y otra vez**, mientras no se pierda contexto ni respuestas a dudas reales.
- **Eres experto, el visitante no:** sin jerga ni siglas; probar el texto con alguien ajeno. «Si no controlas el relato, el usuario se inventa uno.»
- **Vender el resultado, no la característica.** StoryBrand: el cliente es el héroe, tú el guía; las credenciales apoyan, no abren.
- **«Sobre nosotros» con el foco girado:** no «fundada en 2014, apasionados por…», sino «tienes este problema, así lo resolvemos, por esto puedes fiarte». La historia, corta y solo si explica por qué estás cualificado.
- **Proceso:** dónde empieza, qué sigue, cuándo tienes lo que pagas. Tantos pasos como haya de verdad; no estirar a tres por plantilla. Mejor sin numerar, en tiempo («a los 2 min, a las 48 h, en 2 semanas»).
- **FAQ:** las preguntas que se repiten antes de comprar. Fuente: las últimas 10 llamadas o correos de clientes.
- **«Escríbenos si… / no nos escribas si…»:** para que se autoseleccionen antes del formulario, con una salida útil para quien no encaja.
- **Formulario de primer contacto:** nombre, email y una línea (él usa 4 campos en 3 filas: «no una solicitud de hipoteca»). Cada campo extra pierde gente.
- **Precio:** si es fijo, qué incluye; si es a medida, qué hay que hacer para pedirlo.
- **Menú:** cada elemento se entiende sin pensar; más de 7, demasiados; «Más» no significa nada; en una línea.
- **Páginas de servicio (también para buscadores e IA):** el título es el nombre del servicio, no un eslogan; el primer párrafo, para quién es y qué resuelve; ubicación, proceso y requisitos sin buscarlos en cinco páginas; encabezados semánticos; datos estructurados solo si describen lo visible.
- **Qué dejar fuera:** blog y noticias que no vas a mantener; secciones que están porque venían en la plantilla; iconos de redes en lugar de la fuente de confianza real que trajo al visitante.
- **Su orden para una página de captación:** resultado + forma directa de contactar → ¿encajo? → la prueba más relevante → oferta → proceso → la fuente de confianza que les trajo → FAQ → la misma acción. El orden cambia si el comprador lo pide.
- **Un sistema aburrido pero coherente supera a uno ingenioso pero caótico.** Secciones reutilizadas para que todas las páginas del mismo tipo tengan el mismo ritmo.

## 11. Revisar, probar y medir (antes de rediseñar)

- **No rediseñar sin diagnosticar.** Un rediseño completo es la forma más cara de arreglar un problema no identificado. Encontrar dónde abandonan, arreglar esa fuga y después decidir.
- **Recorrer la ruta de cada tipo de cliente** desde su página de entrada hasta la acción: cada enlace dice qué encontrarás y la página lo da.
- **Formulario:** dejar vacío un campo obligatorio (¿dice cuál falta?); enviar una prueba y comprobar que llega a la bandeja que se lee; la confirmación dice que se envió y qué pasa después.
- **Teclado:** Tab por toda la página, ¿se ve el foco?, ¿se llega al CTA? Zoom. Accesibilidad en el brief y en los componentes desde el principio: parchearla al final es caro.
- **Señales de abandono:** «No seguro» (sin HTTPS), © de hace años, noticias con un post viejo, enlaces rotos, páginas que prometen un servicio que ya no hay.
- **Anotar el paso exacto que falla** («el formulario no dice qué campo falta»), no «se siente raro».
- **Medir:** separar «abrió contacto» de «envió»; conversión por visita con definición estable; mirar la **calidad** de las consultas, no solo cuántas; grabaciones (Clarity) para ver dónde se atascan; cambiar una cosa cada vez y anotar qué y cuándo (si a la vez hay anuncios, no atribuirlo todo al diseño). Lo que más mueve, según Hormozi: el titular y la imagen bajo él.
- **Alguien responsable de la web después de lanzarla.** Su home se volvió un «monstruo de Frankenstein» con 18-20 personas añadiendo cosas: cada añadido se revisa contra lo que ya hay (no repetir lo dicho más arriba) y en móvil.
- **Cinco preguntas para cualquier web:** ¿cuál es su único trabajo? / ¿la primera pantalla dice dónde estoy, qué obtengo y por qué me importa? / ¿venden las palabras o el diseño tapa un texto flojo? / ¿parece premium por lo quitado o barata por lo añadido? (si quitas tres elementos de una sección sin perder sentido, la sección pelea consigo misma) / ¿es rápida, encontrable y está mantenida?

## 12. Tensiones dentro del canal (decidir con el proyecto)

- **CTA en cada sección vs primario solo en sitios escogidos.** Conciliado: mismo destino siempre; primario pocas veces, secundario discreto en el resto.
- **Simplificar vs dar información.** Su tesis estable: cortar mucho, pero el riesgo del comprador decide el mínimo.
- **Lujo = silencio vs «maximalismo táctil», anti-rejilla y narrativa con movimiento** (vídeos de tendencias de 2026). Las tendencias son de temporada; en los de 2027 ya va contra las webs guiadas por movimiento.
- **Fundidos al hacer scroll y carruseles automáticos como buenos** vs proyectos sin movimiento: manda el proyecto.
- **«Archival index»:** estética de catálogo de biblioteca o museo (rejilla limpia, etiquetas claras, tipografía) para webs con mucho contenido o catálogos grandes. Tendencia, pero encaja con webs de empresa con muchas obras o productos.
