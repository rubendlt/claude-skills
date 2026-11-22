---
name: selfmade-web
description: >-
  Criterio de diseño web de Chris (canal @SelfMadeWebDesigner, 11 años haciendo webs para clientes): biblioteca de
  layouts por número de columnas (1 a 5+) con cuándo usar cada uno y cómo pasa a móvil; jerarquía, variación y
  equilibrio entre secciones; los 6 estilos de web según lo que pide el cliente; proceso de proyecto (moodboard,
  stylescape, primer borrador rápido, la home como plano del resto); y recursos para que una web no parezca de
  plantilla (protagonista, rima visual, fuentes poco usadas). Criterio de un diseñador, no evidencia.
---

# Self-Made Web Designer: layout, estilo y proceso de webs de cliente

Consejos de @SelfMadeWebDesigner (Chris, ex pastor y músico, diseñador web autodidacta que ahora trabaja en Showit), leídos por subtítulos: 29 vídeos de diseño enteros (más 2 leídos sin nada de diseño). El resto del canal es de negocio (clientes, precios, Upwork, freelancing) y tutoriales de herramientas: fuera. Detalle en `references/fuentes.md`. Agrupado **por problema, no por vídeo**.

Es **criterio**, no investigación. Las cifras que da («el 85 % solo ve la primera pantalla», «solo el 20 % pasa del pliegue», «el 90 % del tráfico es móvil, pero no en mis clientes») no tienen fuente: no citarlas como dato. Para evidencia, `nng`; para las «leyes» populares, `ux-craft/references/mitos.md`.

## Qué aporta y qué no (para no pisar a los demás)

| Para esto | Aquí | En otro sitio |
|---|---|---|
| Elegir el layout de una sección según cuántas ideas lleva (1, 2, 3, 4, 5+ columnas) y cómo pasa a móvil | **`references/layouts.md`** | — |
| Decidir la personalidad de una web a partir de lo que dice el cliente («algo limpio», «que impresione») | **`references/estilos.md`** | Cuánto avanzar una función sin perder al usuario: skill `maya` |
| Proceso de un proyecto de cliente: moodboard, stylescape, borrador, revisiones, de la home al resto | **`references/proceso.md`** | Fase de referentes con evidencia: `investigar`; arnés creativo: `diseno-libre` |
| Que la web no parezca de plantilla: protagonista, rima visual, profundidad, fuentes | § 3 de este archivo | Marcas de slop: `ux-craft/references/slop.md`; tips de pulido: `kolejain` |
| Escala tipográfica, interlineado, espaciado de 8, 60-30-10 | § 4, solo lo que añade | Más completo en `timgabe` (visual-web) y `kolejain` |
| Conversión, CTA, formularios | § 5, solo lo que añade | `timgabe` (conversion-web) y `uxpeak` |
| Saber de qué vídeo sale algo | `references/fuentes.md` | — |

**Manda el proyecto.** Si el `CLAUDE.md` fija reglas (sin movimiento, sin texturas, un solo color, sin testimonios…), ganan. Las tendencias, las animaciones de scroll, el sonido, el WebGL o el «anti-UX» solo si el proyecto los admite.

## 1. Las cuatro cosas que importan (y el orden)

1. **Layout, color, tipografía e imágenes.** Si esas cuatro están bien, no hace falta lo llamativo. Una animación sobre una base floja «es hortera»: hacer webs aburridas primero entrena el ojo para saber cuándo una animación suma.
2. **El texto pesa más que el diseño.** «El diseño importa, pero las palabras cierran ventas» (cita de otra diseñadora). Parte del trabajo es que se lean las palabras, no distraer de ellas.
3. **Lo caro es hacer menos, mejor.** Apple: una tipografía, una paleta que casi no es paleta (negro, grises, blanco y un azul) y aire. Si quieres que una web parezca cara, simplifica antes de añadir nada.
4. **Estás haciendo demasiado.** Ni ocho colores ni diez recursos ni algo nuevo cada 100 px. Quitar primero, y volver a añadir solo lo que el proyecto pida.
5. **Diseñar es decidir qué suena alto y hacer callar al resto.** Si en la home todo es importante, nada lo es: titular, subtítulo y botón no pueden competir.
6. **Cada web es un reparto de prioridades** (SEO, UX, conversión, rendimiento, accesibilidad, marca): no se puede maximizar todo; decidir qué manda en este proyecto, y a veces en cada sección.
7. **Las reglas (proporción áurea, tercios, 60-30-10) son un punto de partida.** «Si se ve bien, está bien», pero solo después de saber las reglas.
8. **Diseñar para el contexto, no «mobile first» por dogma.** Cada tamaño de pantalla tiene problemas distintos: resolver cada uno, no encoger el escritorio.

**Su caso de aviso:** rediseñó la web de un cliente, quedó mucho más bonita y las ventas se hundieron, porque cuidó el aspecto y no el recorrido del usuario. Por eso repite que el diseño sin conversión no sirve al cliente.

## 2. Psicología: los «tres amigos» que miran la web

Su modelo (divulgativo, no científico) para ordenar decisiones:

- **El primero solo quiere sentirse a salvo y vota antes.** Llega con un plano mental hecho de todas las webs que ha visto (logo arriba a la izquierda, navegación cerca, pie abajo). Si algo no está donde espera, no lo busca: se va. Ejemplo: una web de videojuegos bajó el menú móvil a la esquina inferior (mejor para el pulgar, en teoría) y tuvo que volver a subirlo porque nadie lo encontraba. → **La estructura, convencional.**
- **El segundo quiere sentir algo.** Si todo es previsible, se aburre. → **Dentro de la estructura previsible, romper patrones pequeños a propósito** (una microinteracción inesperada pero agradable). Si esa ruptura cambia cómo se hace una tarea, cuánto avanzar lo decide la skill `maya`; si solo es estética, no es MAYA.
- **El tercero justifica lo que los otros dos ya decidieron.** Dale razones, pero **agrupadas**: la memoria de trabajo aguanta 3-4 cosas. Envío gratis + devoluciones + garantía + fidelidad sueltos se olvidan antes del final; agrupados en bloques, no. En planes de precio: no repetir la lista entera en cada plan, sino «todo lo del básico, más…».

## 3. Que no parezca de plantilla

- **El protagonista.** Toda web que te para tiene una cosa que ves primero (una fuente, una imagen, un objeto). Elegirla **por la historia del negocio, no porque quede bien**: es la semilla de la que crece el resto. Ejemplo suyo: para un SaaS que convierte datos en paneles simples, una imagen abstracta de degradado con líneas verticales que recuerda a un gráfico.
- **Rima visual.** Repetir detalles del protagonista o del logo por la web (formas, degradados, texturas, un ángulo) para que todo parezca del mismo universo. No es copiar el elemento: es reutilizar sus piezas en iconos, máscaras de foto, botones, tarjetas.
- **Profundidad, siempre sutil.** Textura de fondo, ruido, vidrio, un punto 3D: que se note sin pedir atención y sin competir con el protagonista. Si una textura molesta al texto, un degradado radial suave detrás del texto la aparta.
- **Probar versiones radicalmente distintas.** Truco de productor musical: tocar la canción mucho más rápida, más lenta, en otra tonalidad, para salir de la primera idea. Hizo 12 versiones del protagonista del ejemplo; la primera «habría valido» y habría sido peor. No pulir la primera idea hasta el infinito: probar otra cosa (modo claro, otro layout, otro protagonista).
- **Ser de alguien.** «Haz tu propia música»: la web tiene que poder ser solo de ese negocio. Pensar en el cliente ideal (qué marcas le gustan, qué le echa para atrás) y que el diseño **atraiga a ese y repela al que no es** en cinco segundos. Si no repele a nadie, el dial está bajo. Con la IA, las webs se parecen cada vez más entre sí («el blanqueo de internet»): parecerse a todos es el riesgo nuevo.
- **Referentes fuera de donde mira todo el mundo.** Pinterest y los premios están bien, pero si todos sacan ideas de ahí, sale «copia de una copia». Carteles tipográficos, arquitectura, libros de diseño, museos. Y **buscar el origen de un estilo**: la web que te gusta copió a alguien que copió a un artista; ir a ese artista.
- **No intentar ser original de cero.** «No hay nada nuevo bajo el sol»: tomar lo que funciona de otros y adaptarlo al contexto del proyecto, no copiarlo tal cual.
- **«Si solo usas la IA, compites con un botón».** La IA ha puesto un suelo: lo «suficiente» ya es gratis e instantáneo. Usarla para lo que no harías sin ella (objetos 3D, ampliar las pocas fotos del cliente), no para pensar por ti.
- **Las webs hechas con IA** (su prueba: mismo brief a Figma Make, Lovable, Hostinger y Webflow, puntuadas a ciegas por un diseñador de marca) salían casi idénticas: tres columnas una tras otra y elementos agrupados en viñetas. La suya ganó por **contar una historia** que guía de una sección a la siguiente. Contraste a buscar: narrativa, no componentes.

## 4. Texto y espacio: lo que añade a los demás

(La base, en `timgabe/references/visual-web.md` y `kolejain`.)

- **Tres niveles de fuente.** Nivel 1: una sola familia. Nivel 2: una superfamilia (sans, serif y a veces mono diseñadas juntas: Source, DM, Tato). Nivel 3: combinar familias de fundiciones distintas.
- **Para combinar, anclar en el titular, no en el cuerpo.** El titular marca la personalidad (técnico, cálido, moderno) y debe salir de la marca; lo demás lo acompaña, del mismo mundo pero con contraste (una condensada con una ancha). Nunca dos casi iguales (Georgia + Times): parece un error. Buscar parejas reales en **Fonts In Use**.
- **Fuentes poco gastadas:** Fontshare (gratis, limpias), uncut.wtf (experimentales). Open Sans y compañía hacen que te parezcas a todos.
- **Elegir fuente** (Oliver Schöndorfer, invitado): primero el uso principal (lectura larga, interfaz o marketing con poco texto), luego el público, luego la sensación. «La fuente sigue al sentimiento y a la función». Display solo para texto corto y grande. Mayúsculas seguidas, siempre con algo de espaciado.
- **Por rol:** display para lo que capta la atención; cualquier texto de más de 7-10 palabras, legibilidad primero.
- **Interlineado:** titulares 1:1, párrafos 1:1,5. **Espaciado entre letras:** display −1 a −3 px; cuerpo 0; texto de botón +1 a +3 px («para que se lea despacio»). Escala de tamaños: tercera mayor (×1,25) desde 16 px, con `rem`; typescale.net la genera.
- **Dos familias suelen bastar; tres, el máximo absoluto.** Al combinar, contraste claro (serif con sans, sans con mono).
- **No decidir tamaños y huecos «a ojo».** Da igual qué escala elijas (él empieza por la áurea porque da tamaños grandes arriba); lo que importa es ceñirse a ella. El cerebro registra la incoherencia como ruido.
- **Opacidad para la jerarquía del texto:** titular al 100 %, subtítulo ~70 % (Material usa 87 / 60 %).
- **Bloques de texto:** 50-75 caracteres por línea (600-700 px) y un salto cada 2-3 frases. Las listas se escanean mejor que el párrafo; con icono, mejor aún.
- **Espaciado de 8:** un valor base dentro de un grupo (p. ej. 16), como mínimo el doble entre grupos (32) y la misma distancia entre bloques grandes (en su ejemplo, 104 entre navegación, texto e imagen).

## 5. Conversión: lo que añade

(La base, en `timgabe` y `uxpeak`.)

- **Un objetivo por página**: comprar, pedir llamada o dejar el email. Se pierden usuarios al pedir varias cosas.
- **CTA visible en segundos:** en la hero, en la navegación y otro cada pocos pantallazos de scroll.
- **Nunca un botón fantasma (solo borde) como acción principal**: no se ve y no se pulsa. Lo repite en varios vídeos.
- **Un solo color para los botones**, y nada más con ese color: el usuario aprende que ese color es acción.
- **El texto del botón dice qué pasa** («Ver precios», «Descargar la guía»), no «¡Vamos!».
- **La primera pantalla hace cuatro cosas:** captar la atención, dejar claro de qué va la web, dar ganas de actuar y enseñar el siguiente paso.
- **Anatomía de la hero:** titular que motiva, subtítulo que aclara (qué, por qué y cómo) y un siguiente paso claro, más algo bonito (imagen o elemento). El titular, con lo que el público quiere y buscaría en Google, no ingenioso.
- **Prueba social «en bruto».** Hay «recesión de confianza»: un testimonio escrito ya no convence (¿lo dijo de verdad?). Por orden: audio o vídeo grabado con el móvil, reseñas en un sitio que el negocio no controla (Google, Clutch), y si no hay nada, afirmaciones concretas («los ingresos subieron un 21 %», no «les ayudamos a crecer»). En oficios visuales, **enseñar el trabajo y el proceso** (detrás de las cámaras) antes de pedir la decisión. Si el proyecto prohíbe testimonios, vale lo último.
- **«Conocer, gustar, confiar… y sentir».** Hablar a la motivación real, explicar qué se llevan y enseñar que no están solos (prueba social).
- **La web es una parada de un recorrido largo** (Google, Instagram, YouTube, Reddit… y luego la web): que cuente lo mismo que el resto de canales.

## 6. Imágenes

- Cada imagen con propósito: que haga sentir algo o dé confianza. Gente sonriendo a cámara sin motivo hace la web poco intencionada.
- **El color de las fotos, dentro de la paleta**; una foto que desentona delata a un principiante.
- **Todas las fotos como de la misma sesión y el mismo fotógrafo**: misma luz y mismo tratamiento de color.
- **Las personas de las fotos miran hacia el contenido** clave: el ojo sigue la mirada. Si miran fuera, el usuario se pierde lo importante.
- Foto de stock buena = buena luz y expresión natural. Seguir a fotógrafos concretos en Pexels en vez de buscar cada vez.
- Encuadre por tercios; recortar al tamaño final fuera del constructor; WebP; ~300 KB por imagen como techo orientativo.

## 7. Revisar antes de entregar

- **Prueba del vistazo:** ¿dónde cae el ojo primero, qué se ve después, qué pasa desapercibido? Enseñarlo unos segundos a alguien y pedirle que diga qué recuerda, en orden.
- **Prueba de entornar los ojos** (o desenfocar la captura): titular y CTA tienen que seguir destacando; si todo es una mancha, falla la jerarquía. En su ejemplo, el campo de email se perdía y lo arregló dándole fondo.
- **Recorrer la página de abajo arriba** para verla con ojos nuevos.
- **Probar en dispositivos reales**, no solo en el emulador.
- **Prueba con alguien de fuera** (la «maldición del conocimiento»: tú ya sabes dónde está todo). Mejor alguien que no conozca el negocio, no tu madre ni tu amigo diseñador. Que recorra la home **pensando en voz alta** y, al final, haga una tarea real (pedir una llamada, rellenar el formulario). Preguntas: ¿se entiende el titular al instante?, ¿está claro de qué va la web?, ¿sabes qué hacer después?, ¿se ve bien en el móvil?
- **Recorrido al revés:** empezar en la página final (gracias, confirmación) y volver hacia la entrada buscando callejones sin salida, dudas o frenos.
- **Que nada se mueva al cargar** mientras el usuario va a pulsar o leer, y ningún enlace roto (redirección al cambiar o borrar una URL).
- **Justificar cada decisión** al cliente: «hice esto por esto» evita la mitad de los cambios.
- **Accesibilidad mínima:** contraste 4,5:1 (3:1 en texto grande), navegar con Tab, nunca solo el color para un estado (añadir icono o texto), un `h1` por página y `alt` descriptivo.

## Herramientas que cita (por si hacen falta)

- **CSS Overview** (Chrome DevTools → ⋮ → More tools): saca colores, contrastes, fuentes y tamaños de cualquier web de referencia en un clic. Útil para analizar un referente.
- Coolors (paletas y contraste), typescale.net, Fonts In Use, Fontshare, uncut.wtf, Pexels.
- **Inspiración según lo que busques** (de su lista de 38):
  - por secciones sueltas (testimonios, contacto, hero): Landbook, Unsection;
  - por pareja de fuentes: Maxibestof, Fonts In Use;
  - con la interacción en vídeo: Godly; estados de hover: Hover States;
  - comercio en móvil: Commerce Cream, ecom.design; portfolios: Killer Portfolio;
  - por color (hex): Design Inspiration; para romper reglas: Brutalist Websites;
  - generales: muz.li, Land-book, Minimal Gallery, Site of Sites, One Page Love, Awwwards, CSSDA, Savee, Cosmos; fuera de la web: typographicposters.com, Brand New (marcas).
- **Animación** (si el proyecto la admite: skill `movimiento`): Spline, Unicorn Studio, GSAP. Vídeo que avanza con el scroll: GSAP + ScrollyVideo (precarga los fotogramas; el navegador solo da tirones). Si el fondo del vídeo no casa con el de la web (cada pantalla gradúa el color distinto), **máscara degradada en los bordes** con CSS.
- **Imágenes con IA:** dar referencias, un boceto aunque sea malo, primer y último fotograma; cuando una sale cerca, usarla de referencia para el resto; si se atasca, dibujar encima en vez de discutir con palabras.
