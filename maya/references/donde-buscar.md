# Dónde buscar avances

MAYA se busca en tres capas: **aspecto**, **interacción y movimiento**, y **función** (tareas). Primero van las dos primeras, que valen para casi cualquier web o app; después, las tareas típicas por tipo de producto.

## Interacción y movimiento

Cómo construirlo es cosa de la skill `movimiento`; aquí solo se decide si avanzar y cuánto. Si el proyecto prohíbe que algo se mueva solo (por ejemplo, «nada se mueve si no lo mueve el usuario»), solo valen las respuestas a lo que hace el usuario.

| Elemento | Norma del sector (web corporativa típica) | Norma fuera del sector (Apple, Google, Linear, Stripe, Vercel) | Idea avanzada | Ancla | Trampa (se ha pasado) |
|---|---|---|---|---|---|
| Hover de enlace | subrayado o cambio de color | subrayado que aparece con transición corta; flechas que se desplazan un poco | el gesto de siempre (subrayado o flecha), más preciso y rápido | A4 | cursores personalizados, efectos que tapan el texto |
| Hover de tarjeta | nada, o sombra brusca | la imagen se acerca un poco, el borde o el fondo cambian suave, toda la tarjeta responde | la tarjeta entera responde como una unidad, sin moverse de sitio | A4 | inclinación 3D, efectos magnéticos, «lift» con spring de plantilla |
| Pulsación (móvil y botones) | nada | el botón se hunde o se oscurece al instante (iOS, Material) | respuesta inmediata al tocar | A1 | rebotes largos que retrasan la acción |
| Foco de teclado | el anillo del navegador o ninguno | anillo visible y cuidado, del color de la marca | foco claro y coherente en toda la web | A4 | quitarlo por estética (incumple WCAG) |
| Menú y desplegables | aparecen de golpe | se abren desde su origen, en 150-250 ms | se ve de dónde sale y adónde vuelve | A1 | animaciones largas; menús a pantalla completa con coreografía |
| Transiciones entre estados (añadir, enviar, guardar) | recarga o nada | el elemento cambia en el sitio y confirma (contador, check) | el cambio se ve donde ha pasado | A3 | confeti, modales de celebración |
| Carga | spinner o pantalla en blanco | esqueletos con la forma del contenido; carga instantánea | huecos reservados y contenido que aparece sin saltos | A4 | barras falsas, animaciones de espera largas |
| Scroll | nativo; a veces apariciones al hacer scroll | nativo y fluido | nativo; como mucho, cabeceras que se compactan | — | secuestro del scroll, parallax pesado, apariciones en cadena |
| Galería | flechas y miniaturas | deslizar, zoom con pellizco, ampliar desde la miniatura | ampliar desde donde estaba la foto | A1 | carrusel automático |
| Formulario | validación al enviar | validación al salir del campo, ayuda en el sitio, autocompletado | el campo dice qué pasa mientras se rellena, sin interrumpir | A2 | validación mientras se escribe que marca error antes de tiempo |

## Aspecto

| Elemento | Norma del sector | Norma fuera del sector | Idea avanzada | Ancla | Trampa (se ha pasado) |
|---|---|---|---|---|---|
| Estilo general | plantilla de WordPress, fotos de banco de imágenes | sistemas cuidados (Apple, Stripe, Linear): mucho aire, jerarquía clara | el mismo esquema de siempre, ejecutado al nivel de esos productos | A4 | experimentos editoriales que esconden qué se vende |
| Color | el corporativo por todas partes | neutros más un color de acción racionado; modo oscuro | un solo color de acción, el resto neutro | A6 | degradados de moda, paletas que no salen de la marca |
| Tipografía | sans genérica y tamaños sueltos | escala fija, pesos medios, títulos equilibrados | escala y ritmo estrictos | A4 | tipos de exhibición en texto corrido, tamaños gigantes que obligan a hacer scroll |
| Iconos | packs genéricos mezclados | un solo set, un solo trazo; dibujos propios donde aportan | iconos propios con la gramática de los estándares | A1 | iconos sin etiqueta o con metáforas propias |
| Materiales (sombra, desenfoque, profundidad) | sombras fuertes o ninguna | desenfoques y capas (Liquid Glass), sombras suaves con sentido | profundidad solo donde dice qué está encima | A1 (Material: papel y tinta) | transparencias que bajan el contraste (Liquid Glass) |
| Imagen | fotos de banco y recortes | fotos propias tratadas con un mismo criterio | un tratamiento coherente y reconocible | A6 | filtros fuertes que falsean el producto |
| Composición | bloques centrados apilados | rejilla firme, alineaciones exactas | la rejilla de siempre, ejecutada al píxel | A4 | composiciones rotas «editoriales» en una web de servicio |
| Marca (logo, símbolo) | logo en la cabecera | símbolo reconocible y simple | simplificar quedándose con lo que se recuerda | A6 (Instagram) | tirar los códigos (Tropicana, Gap) |

Las columnas «norma del sector» y «norma fuera del sector» son criterio general: confírmalas con capturas, y con los estados (hover, foco) en el caso de la interacción.

## Función (tareas)

Abajo están las tareas típicas por tipo de producto. De cada una: la **norma del sector** habitual, la **norma fuera del sector** (lo que el usuario ya hace en productos que usa a diario), una **idea avanzada** de partida, el **ancla** que la hace aceptable y la **trampa**.

Las ideas avanzadas son puntos de partida para el paso 4 (retroceder hasta lo aceptable), no recetas. Comprueba siempre la norma del sector con capturas: lo de esta tabla es criterio general.

## Web de empresa de servicios o B2B

| Tarea | Norma del sector | Norma fuera del sector | Idea avanzada | Ancla | Trampa |
|---|---|---|---|---|---|
| Pedir presupuesto | formulario largo y esperar | carrito o lista de la compra; seguir un pedido | ir añadiendo lo que interesa mientras se navega y enviarlo de una vez; saber en qué estado está la petición | A2: carrito o lista (sin precios si no es tienda) | parecer una tienda; pedir datos de más |
| Saber si algo le sirve o le cabe | texto con medidas | probar en casa (IKEA Kreativ), simular | medidas que se comparan con las del espacio del usuario | A1: la cota de un plano o una regla | realidad aumentada o configuradores que hay que aprender o mantener |
| Decidir si fiarse | logos y frases genéricas | reseñas verificadas, historial visible (Wallapop, Google) | pruebas comprobables que el usuario puede verificar por su cuenta | A2: ficha o registro público | testimonios inventados (además, prohibidos en muchos proyectos) |
| Saber plazo o disponibilidad | «consúltanos» | plazos de entrega concretos (Amazon), calendarios | un plazo concreto según lo que pide | A3: formato de siempre con sus datos | prometer plazos que no se cumplen |
| Contactar | formulario y teléfono | WhatsApp, reservar cita (Calendly), devolución de llamada | elegir canal y momento; saber cuándo le contestarán | A2: el canal que ya usa | chat de IA o bots que esconden a la persona |
| Volver a encontrar algo | nada | favoritos, historial, búsqueda instantánea | lo visto o lo guardado sigue ahí al volver | A2: favoritos o historial | obligar a crear una cuenta |
| Justificar la compra ante otros (comprador público o de empresa) | PDF del catálogo | exportar, compartir enlace, imprimir | un documento con lo elegido, listo para el expediente | A2: hoja de pedido o memoria | formatos propios que nadie reconoce |

## Tienda online

| Tarea | Norma del sector | Norma fuera del sector | Idea avanzada | Ancla | Trampa |
|---|---|---|---|---|---|
| Encontrar | menú y filtros | búsqueda instantánea con tolerancia a errores | resultados mientras se escribe | A4: el mismo buscador, más rápido | buscadores conversacionales que esconden los filtros |
| Elegir talla o versión | tabla de tallas | recomendación según compras anteriores (Nike Fit) | la talla recomendada para él | A3 | pedir datos sin explicar para qué |
| Pagar | formulario de tarjeta | Apple Pay, Google Pay, Bizum | pagar en un toque | A2 | métodos de pago propios |
| Seguir el pedido | email de confirmación | seguimiento en directo | estado y hora en la misma página | A2 | apps obligatorias |

## App

| Tarea | Norma del sector | Norma fuera del sector | Idea avanzada | Ancla | Trampa |
|---|---|---|---|---|---|
| Empezar a usarla | tutorial de pantallas | abrir y que ya funcione con datos de ejemplo o propios | primer uso con sus datos ya cargados (Stripe) | A3 | tutoriales largos para explicar una novedad (Arc) |
| Navegar | barra estándar | la de la plataforma | sin cambios | A4 | gestos como única vía |
| Acciones frecuentes | menús | controles físicos, atajos, widgets | hacerlo sin abrir la app o con el control que ya tiene a mano | A1 (Digital Crown), A5 (Dynamic Island) | redefinir lo que el usuario hace por reflejo |
| Ver su actividad | listas y gráficos | historias, resúmenes | su actividad contada en un formato que ya consume | A2 (Wrapped) | formatos que hay que aprender |
| Rediseño | la versión anterior | | lo nuevo, opcional o por pasos | A7 | imponerlo de golpe (Snapchat) |

## Preguntas que destapan avances

Hazlas sobre cada tarea:

- **¿Qué hace hoy el usuario en otra app para algo parecido?** Si aquí se resuelve peor, el avance ya es aceptable porque lo conoce (estado «por detrás»).
- **¿Cuál es la solución ideal si no hubiera costumbres?** Escríbela sin límites y retrocede después.
- **¿Qué paso, espera o duda se podría quitar?** Avanzar suele ser quitar, no añadir.
- **¿Qué dato del propio usuario haría que viniera hecho para él?** (A3)
- **¿Qué limitación del producto o del negocio podría volverse útil?** (A5)
- **¿Hay usuarios actuales que vayan a notar el cambio?** Si los hay, por pasos y con vuelta atrás (A7).

## Señal de que el avance está en su punto

El usuario lo usa sin pensar, como si siempre hubiera estado ahí, y aun así la tarea le cuesta menos que en la competencia. Si nota la novedad antes que la ventaja, se ha pasado. Si no nota ninguna ventaja, no es un avance.
