# Dónde buscar huecos

Mapa para recorrer una web o app elemento por elemento. Para cada uno: la **convención** que casi siempre se mantiene, dónde suele haber **hueco** y con qué patrón, y la **trampa**, que es pasarse. Las ideas de la columna «hueco» son puntos de partida, no recetas: cada una tiene que pasar el filtro del paso 6 con contenido real del proyecto. Los casos citados están en `casos.md`.

## Inventario de lo propio (antes del mapa)

El hueco más seguro es casi siempre el **P3**: algo que solo tiene este cliente dentro de un formato que el usuario ya conoce (Stripe, Wrapped). Por eso, antes de mirar pantallas, busca en el repo qué tiene el proyecto que no tenga la competencia:

| Qué buscar | Dónde suele estar |
|---|---|
| Cifras comprobables (obras, años, clientes, plazos reales) | `content/`, `data/`, JSON de contenido, `facts.*`, `site.*`, CMS |
| Fotos propias (de obra, de producto, del equipo o del proceso) | `public/`, carpetas de assets, `docs/` sobre imágenes |
| Medidas, fichas técnicas, normas | datos de producto, catálogos |
| Proceso propio (pasos, plazos, cómo se trabaja) | textos de «cómo trabajamos», FAQs, documentos del cliente |
| Casos y clientes reales | proyectos, testimonios permitidos, listas de obras |
| Lugar, oficio, materiales | `CLAUDE.md`, documentos del cliente |
| Activos de marca (logo, color, frase, símbolo) | `brand/`, tokens, `CLAUDE.md` |

Escribe la lista en cinco a diez líneas. Cada hueco P3 que propongas tiene que salir de una línea de esta lista; si no sale de ninguna, es humo.

## Mapa por elemento (web)

| Elemento | Convención que se mantiene | Hueco habitual | Trampa |
|---|---|---|---|
| **Cabecera y navegación** | logo a la izquierda que lleva al inicio, menú visible en escritorio, CTA a la derecha, buscador con lupa | casi nunca hay hueco; como mucho P4 (que vaya mucho más rápido o un buscador mejor que el del sector) | moverla, esconderla o renombrar lo estándar (Snapchat, Windows 8) |
| **Primer pantallazo** | titular, subtítulo, CTA y una imagen o prueba visible | P3: la foto, cifra o demostración propia en lugar de la genérica; P4: escala o recorte fuera de lo normal | que haya que descifrar qué vende la empresa; titular ingenioso en vez de claro |
| **Prueba de confianza** | logos, cifras, casos, en una banda o rejilla | P3: cifras contadas o verificables en lugar de redondas; P2: un formato prestado (ficha técnica, índice, mapa) | cifras inventadas; demasiados formatos a la vez |
| **Listado o catálogo** | rejilla o lista, filtros a la izquierda o arriba, tarjeta con foto, nombre y dato clave | P3: el dato que solo tiene este cliente en la tarjeta; P4: consistencia de foto muy por encima del sector | tarjetas que no parecen pulsables, scroll horizontal, filtros con nombres propios |
| **Ficha (producto, servicio, proyecto)** | galería, nombre, datos clave, CTA visible, relacionados | P2: formatos de otro oficio (plano con cotas, hoja técnica, antes y después); P3: datos o fotos propias de uso real | quitar el CTA o los datos que el usuario busca para meter la novedad |
| **Proceso o «cómo trabajamos»** | 3-5 pasos en orden | sin convención fuerte: margen libre. P3 con fotos o datos reales de cada paso; P2 con un formato conocido (cronograma, albarán, checklist) | numeración decorativa, ilustraciones genéricas |
| **Formulario y contacto** | etiquetas encima, pocos campos, botón con verbo, otros canales visibles | casi nunca hay hueco en el formulario; en lo de alrededor, P3: plazo real de respuesta, quién contesta | campos raros, validación creativa, quitar etiquetas (Material 3 Expressive) |
| **FAQ** | pregunta y respuesta, plegables o lista | P3: preguntas reales con respuestas con datos | formatos de chat o tarjetas que esconden la respuesta |
| **Pie** | contacto, enlaces legales, mapa del sitio | casi nunca hay hueco | esconder datos legales o de contacto |
| **Estados vacíos, errores, 404** | explicar qué ha pasado y dar una salida | P3: un ejemplo o una vía propia del producto; P4: el tono | humor que tapa la salida |
| **Marca (logo, color, símbolo, frase)** | sus propios códigos | P6: simplificar quedándose con lo que la gente recuerda | tirar los códigos (Tropicana, Gap) |

## Mapa por elemento (app)

| Elemento | Convención que se mantiene | Hueco habitual | Trampa |
|---|---|---|---|
| **Navegación** | barra inferior o lateral de la plataforma, atrás estándar | no hay hueco | gestos como única vía |
| **Controles físicos y del sistema** | lo que hacen en todas las apps | P1: que hagan más en contexto (Digital Crown); P5: usar un límite del dispositivo (Dynamic Island) | redefinir lo que el usuario ya hace por reflejo |
| **Contenido del usuario** | listas, tarjetas, detalle | P3 + P2: sus datos en un formato que ya conoce de otra app (Wrapped ← historias) | formatos que hay que aprender |
| **Onboarding** | pocas pantallas, saltable | P3: empezar con datos del usuario ya cargados (Stripe con tu clave) | tutoriales largos para explicar una novedad (Arc) |
| **Rediseño** | la versión anterior | P7: lo nuevo opcional o por pasos | imponerlo de golpe |

## Preguntas que destapan cada patrón

Hazlas sobre cada elemento de la zona libre:

- **P1:** ¿Qué control u objeto conocido podría hacer algo más aquí sin cambiar de forma?
- **P2:** ¿Qué formato usa este usuario en su trabajo o en otras apps (albarán, plano, factura, historias, hoja de cálculo, mapa) que nadie en el sector use para esto?
- **P3:** ¿Qué línea del inventario de lo propio podría ir dentro de este formato estándar?
- **P4:** ¿En qué único eje (velocidad, escala, calidad de foto, precisión del dato) podría estar muy por encima de todo el sector?
- **P5:** ¿Qué limitación (pocas fotos, empresa de una persona, catálogo estrecho, zona pequeña) podría contarse como ventaja o volverse útil?
- **P6:** ¿Qué recordaría alguien que haya visto la marca una vez? ¿Sobra todo lo demás?
- **P7:** ¿Hay usuarios actuales que vayan a notar el cambio? ¿Pueden volver atrás?

## Señal de que el hueco es bueno

Una persona del público lo usa sin pensar y, después, se acuerda de él o sabe decir de quién era. Si solo se cumple lo primero, es convención; si solo se cumple lo segundo, es ruido.
