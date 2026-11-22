# Casos de empresas grandes

Cada caso dice qué se quedó **típico** (el ancla), qué **cambió** (la sorpresa), qué **patrón** de `SKILL.md` ilustra y de dónde sale. **Fuente:** *primaria* = la propia empresa o su gente; *prensa* = medio que la cita; *comentario* = interpretación de terceros. Recopilado el 22/11/2026: lo marcado como primaria se leyó entero; el resto, a partir de resúmenes de búsqueda.

## Aciertos

### Apple: Digital Crown (Apple Watch, 2015) · P1
- **Típico:** la corona de un reloj de toda la vida, en el mismo sitio y con el mismo giro.
- **Cambia:** ya no da cuerda: hace scroll, zoom y navega. Desde watchOS 10 es la forma principal de moverse entre apps.
- **Fuente:** [Apple HIG, Digital Crown](https://developer.apple.com/design/human-interface-guidelines/digital-crown) (primaria); [Gear Patrol](https://www.gearpatrol.com/watches/a36097909/digital-crown-apple-watch) (prensa).

### Apple: Dynamic Island (iPhone 14 Pro, 2022) · P5 + P1
- **Típico:** la barra de estado y las notificaciones, arriba, donde ya se miraba.
- **Cambia:** el hueco de la cámara, que era un estorbo, pasa a ser una pieza viva de la interfaz. Alan Dye: tenía que sentirse como un objeto, para que el usuario no pensara en la cámara de debajo.
- **Fuente:** entrevista a Federighi y Dye en Axis, contada por [MacRumors](https://www.macrumors.com/2022/10/02/iphone-14-pro-dynamic-island-interview/) e [iMore](https://www.imore.com/apple/apple-execs-craig-federighi-and-alan-dye-discuss-dynamic-island-in-new-interview) (prensa).

### Google: Material Design (2014) · P1
- **Típico:** papel y tinta: superficies con sombra que se apilan como hojas, y por eso se entiende qué está encima y qué se puede tocar.
- **Cambia:** ese «papel» se mueve, crece y se transforma de formas imposibles en el mundo físico, pero sin romper sus reglas.
- **Fuente:** [especificación de Material de 2014, archivada](https://webarchive.library.unt.edu/web/20160706101945mp_/http://www.google.com/design/spec/material-design/introduction.html) (primaria); [Android Developers Blog](https://android-developers.googleblog.com/2014/10/implementing-material-design-in-your.html) (primaria).

### Google: Material 3 Expressive (2025) · P4, con sus límites
- **Típico:** los patrones de siempre: botones, barras, etiquetas, sitio de cada acción.
- **Cambia:** tamaño, color, forma y movimiento mucho más marcados en las acciones clave.
- **Resultado:** 46 estudios y más de 18.000 participantes. Los elementos clave se encontraban hasta 4 veces más rápido, y los mayores de 45 años los localizaban tan rápido como los jóvenes.
- **Límites que pone Google:** «Product makers need to respect well-established UI patterns and standards». Quitar las etiquetas de texto a las acciones del correo empeoró la usabilidad; la lista de reproducción con carátulas sin estructura puntuó peor; la banca aparece como contexto donde puede no encajar. Una minoría fuerte prefirió las versiones tranquilas.
- **Fuente:** [Google Design, «Better, Easier, Emotional UX»](https://design.google/library/expressive-material-design-google-research) (primaria; son datos de Google sobre su propio sistema, sin réplica independiente).

### Instagram: icono nuevo (2016) · P6
- **Técnica:** pidieron a empleados que dibujaran de memoria el icono antiguo en 5 segundos. Casi todos dibujaron el iris y el visor, y la mayoría el arcoíris.
- **Típico:** se conservó exactamente eso: iris, visor y arcoíris (ahora como degradado).
- **Cambia:** se quitó todo lo demás (la textura de cámara retro) para que el glifo escalara.
- **Crítica:** Brand New: tiene lo mínimo para reconocerse como cámara, pero no lo mínimo para reconocerse como Instagram.
- **Fuente:** Ian Spalter, [«Designing a New Look for Instagram»](https://medium.com/p/84530eb355e3) (primaria, no leída: Medium bloquea la descarga); [Fast Company](https://www.fastcompany.com/3059740/an-exclusive-look-at-instagrams-new-app-icon), [Instagram](https://about.instagram.com/blog/announcements/a-new-look-for-instagram) (prensa y primaria).

### Stripe: documentación con tus claves · P3
- **Típico:** la documentación de API de siempre: texto a un lado, ejemplos de código al otro.
- **Cambia:** si has iniciado sesión, los ejemplos llevan tu propia clave de prueba. Lo que copias funciona tal cual.
- **Fuente:** [Stripe Docs, API keys](https://docs.stripe.com/keys) (primaria: «our documentation populates code examples with your test API keys»). Stripe no publica el porqué; lo de quitar fricción es comentario.

### Spotify: Wrapped en formato historias (2019-2020) · P2 + P3
- **Típico:** las historias de Instagram: pantallas verticales que se pasan con un toque.
- **Cambia:** el contenido son tus propios datos de escucha del año.
- **Fuente:** [Engadget](https://www.engadget.com/spotify-wrapped-2020-050142508.html) (prensa). Hay discrepancia sobre si fue en 2019 o en 2020.

### Figma (2016) · P2
- **Típico:** las herramientas de un programa de diseño (lienzo, capas, plumas) y, de Google Docs, la idea de editar a la vez viendo a los demás.
- **Cambia:** las dos cosas juntas, en el navegador. La gente lo entendió como «un Google Docs para diseño».
- **Fuente:** [Figma, multiplayer editing](https://www.figma.com/blog/multiplayer-editing-in-figma/) (primaria; deja claro que la técnica interna no es la de Google Docs, solo la experiencia); [TechCrunch](https://techcrunch.com/?p=1393498) (prensa).

### Linear · P4
- **Típico:** un gestor de incidencias normal: listas, estados, asignaciones.
- **Cambia:** la ejecución: velocidad («never slow»), teclado y menú ⌘K.
- **Fuente:** [First Round Review](https://review.firstround.com/linears-path-to-product-market-fit/) (entrevista); [Linear, «Why is quality so rare»](https://linear.app/now/why-is-quality-so-rare) (primaria).

### Vercel: Web Interface Guidelines · lista de lo intocable
No es un caso de novedad, sino lo contrario: lo que Vercel no deja tocar a sus propios diseñadores. Sirve como lista de la zona intocable en web: «Use `<a>` or `<Link>` for navigation so standard browser behaviors work», «Persist state in the URL so share, refresh, Back/Forward navigation work», «Back/Forward restores prior scroll», «Never disable paste», «Never disable browser zoom».
- **Fuente:** [vercel.com/design/guidelines](https://vercel.com/design/guidelines) (primaria). Rauno Freiberg, diseñador de Vercel, explica por qué el gesto horizontal pasa páginas: «that's how we've intuitively interfaced with books for thousands of years» ([rauno.me](https://rauno.me/craft/interaction-design), primaria).

### The Browser Company: de Arc a Dia (2025) · el principio dicho por la empresa
- «New interfaces start from familiar ones», con Cursor (un editor de código de siempre con IA dentro) como ejemplo. La consigna para Dia: «hide complexity behind familiar interfaces» y «simplicity over novelty». Scott Forstall les dijo que Arc era un saxofón, potente pero difícil de aprender, y que construyeran un piano.
- **Fuente:** Josh Miller, [«Letter to Arc members 2025»](https://browsercompany.substack.com/p/letter-to-arc-members-2025) (primaria).

### Liquid Death · P2 (fuera del software)
- **Típico:** los códigos visuales de la cerveza y las bebidas energéticas: lata alta, estética de metal.
- **Cambia:** dentro hay agua. Rompe los códigos de su categoría (pureza, naturaleza, minimalismo) con los de otra que su público ya conoce.
- **Fuente:** [Fortune](https://fortune.com/2024/03/14/liquid-death-ceo-mike-cessario-gen-z-beer-water/) (prensa).

### Nike: Nike Fit (2019) · P1, débil
- Medición del pie con la cámara, metida dentro de la app de siempre y no como app aparte: la función nueva entra por un sitio conocido. Es el único caso de Nike documentado que he encontrado, y viene de prensa ([MacRumors](https://www.macrumors.com/2019/05/09/nike-ar-feature-shoe-size/)). No hay un artículo de Nike sobre su web o app que hable de este equilibrio.

## Cuando se pasaron

### Arc (2025): el «impuesto de la novedad»
«For most people, Arc was simply too different, with too many new things to learn, for too little reward». Las métricas parecían las de una herramienta profesional especializada, no las de un producto de masas. Dejaron de desarrollarlo. **Señal:** muchas cosas nuevas a la vez y poca recompensa por aprenderlas. [Fuente primaria](https://browsercompany.substack.com/p/letter-to-arc-members-2025).

### Snapchat (2018)
Rediseño impuesto pese a avisos internos. Más de 1,2 millones de firmas y de 191 a 188 millones de usuarios diarios, que la empresa atribuyó al rediseño. Spiegel: «We rushed our redesign». [Engadget](https://www.engadget.com/2018-10-05-snap-evan-spiegel-app-redesign-rushed.html), [MacRumors](https://www.macrumors.com/2018/08/07/snapchat-redesign-millions-of-lost-users/). **Señal:** se movió de sitio lo que se usaba a diario.

### Microsoft: Windows 8 (2012-2015)
Quitó el menú Inicio. 8.1 devolvió el botón y 10, el menú. [Microsoft](https://learn.microsoft.com/en-us/archive/blogs/microsoft_on_the_issues_africa/the-start-of-something-new), [Windows Central](https://www.windowscentral.com/start-button-returns-windows-81-sort). **Señal:** se quitó el punto de entrada que todos conocían.

### Tropicana: envase nuevo (2009)
Quitó la naranja con la pajita y el logo de siempre. Las ventas en unidades cayeron un 20 % en menos de dos meses (unos 30 millones de dólares, según la fuente) y volvió al envase antiguo. La competencia subió a dos dígitos. [CBS News](https://www.cbsnews.com/news/in-blow-to-arnell-tropicana-drops-package-redesign), [Bloomberg](https://www.bloomberg.com/news/articles/2009-04-02/tropicana-fiasco-from-arnell-is-gift-that-keeps-giving). **Señal:** se tiró lo que la gente usaba para reconocer la marca en el estante.

### Gap: logo (2010)
Helvetica con un cuadrado azul pequeño en lugar de la caja azul. Volvieron al antiguo en menos de una semana. [CNN Money](https://money.cnn.com/2010/10/12/news/companies/gap_logo/index.htm). **Señal:** el código distintivo (la caja azul) pasó a ser un detalle.

### Apple: Liquid Glass (iOS 26, 2025)
Mantuvo la estructura y cambió el material: transparencias por todas partes. Hubo quejas de legibilidad, Apple lo hizo más esmerilado durante las betas y, en iOS 26.1, añadió la opción «Tintado» con más opacidad y contraste. [TechCrunch](https://techcrunch.com/2025/10/20/apple-will-let-users-roll-back-the-liquid-glass-look-with-new-tinted-option), [9to5Mac](https://9to5mac.com/2025/10/21/ios-26-1s-new-liquid-glass-setting-is-a-win-for-apple-and-users-alike/). **Señal:** la novedad de ejecución tocó la legibilidad, que es intocable. **Salida:** una opción para volver.

## Contexto: lo nuevo también caduca

El esqueuomorfismo de iOS (2007-2012) sirvió para que la gente entendiera una pantalla táctil, y en 2013 ya era más tradición que ayuda: Apple lo quitó en iOS 7 ([AppleInsider](https://appleinsider.com/articles/22/08/23/what-apple-learned-from-skeuomorphism-and-why-it-still-matters), comentario). El ancla se puede soltar cuando el usuario ya ha aprendido. Y al revés: en Windows 10 parte de los usuarios pidió conservar la pantalla Inicio de Windows 8. La costumbre también se crea.
