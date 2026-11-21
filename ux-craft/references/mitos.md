# Mitos y falsos positivos de UX

No los cites como reglas. Léelo antes de citar una cifra o una "ley" de UX en un informe, o si alguien te la pide aplicar.

| Afirmación | Realidad |
|---|---|
| Umbral de Doherty de 400 ms | El principio (más rápido, más interacción) vale; la cifra mágica no tiene base sólida. Usa 0,1 / 1 / 10 s. |
| Regla de los 3 clics | Sin respaldo. NN/g no ve más abandono tras el tercer clic. |
| "Los usuarios deciden en 50 ms" | El estudio medía atractivo visual en escritorio, no usabilidad. |
| 7±2 elementos por menú | Miller habla de memoria de trabajo; un menú se reconoce, no se memoriza. |
| Mapa de la "zona del pulgar" | Su autor (Hoober) pidió en 2017 dejar de usarlo como estándar: la gente cambia de agarre. |
| "Skeleton siempre mejor que spinner" | Evidencia mixta. Su valor es evitar saltos de layout. |
| Spotify: "+30 % al quitar el hamburguesa" | Nunca publicado por Spotify. El dato era +30 % de clics *en elementos del menú*, contado a TechCrunch. |
| "El hamburguesa siempre es malo" | Esconder la navegación empeora los resultados (NN/g), pero no es una prohibición absoluta; GitHub lo usa para su menú global. |
| "Apple dice 3–5 pestañas" | La HIG no da número. El límite de 5 es de Android. |
| "Las pérdidas duelen el doble" | La aversión a la pérdida existe; el 2:1 no es universal. |
| "Diseña para el patrón en F" | NN/g lo describe como un fallo de las páginas sin estructura, no como una plantilla. Se diseña para la "tarta de capas": subtítulos y palabras clave visibles (`claridad.md` § 4). |
| "Leemos por la forma de la palabra" | Ya no es un modelo válido: leemos reconociendo letras en paralelo (Kevin Larson, Microsoft). Los párrafos en mayúsculas se siguen evitando, pero por falta de costumbre lectora. |
| "45–75 caracteres por línea está demostrado" | Es preferencia, no rendimiento. En pantalla, 100 caracteres no se leyeron más despacio que 55 (Dyson y Kipping 1998), aunque en otro estudio 55 dio mejor comprensión (Dyson y Haselgrove 2001). ~65ch es un buen punto de partida, no una ley. |
| "16 px es el mínimo oficial" | Ninguna norma fija 16 px: WCAG no pone mínimo, ISO 9241-303 lo da en ángulo visual y Apple fija 11 pt. Es una convención para texto corrido, que además evita el zoom de iOS en los campos; en herramientas de producto el cuerpo estándar es 14 px (Material, Fluent, Carbon). |
| "WCAG exige interlineado 1,5" | Solo en AAA (1.4.8). En AA (1.4.12) se exige que el texto aguante ese espaciado sin romperse. |
| "Más opciones paralizan" (estudio de la mermelada) | El meta-análisis de Scheibehenne et al. (2010) da un efecto medio prácticamente nulo; Chernev et al. (2015) solo lo encuentran en decisiones difíciles. Se agrupa y se ordena en vez de recortar. |
| "Ley de Hick: menos opciones en el menú" | El tiempo crece de forma logarítmica, no lineal. Los menús largos funcionan con agrupación y etiquetas claras (NN/g). |
| "Los usuarios no hacen scroll" | NN/g (2018, escritorio): 57 % del tiempo por encima del pliegue y 74 % en las dos primeras pantallas; el resto, más abajo. La atención cae con la distancia, pero se hace scroll. |
| "87 % de éxito si el primer clic es correcto" | Varía mucho: en tree tests la ventaja fue de más de 6 veces; en webs reales, 78 % frente a 70 % (MeasuringU). El principio vale; la cifra no es universal. |
| "Un solo botón primario, siempre" | GOV.UK, Atlassian, Polaris, Material, Fluent y Carbon piden uno por vista o sección; Apple acepta uno o dos. Cabecera, modal y panel lateral pueden tener el suyo (Carbon). |
| Widgets u overlays de accesibilidad | No garantizan el cumplimiento; la FTC multó a accessiBe con 1 M$ (2025). |
| "WCAG 3 ya está" o "APCA es la norma" | WCAG 3 es borrador. La norma sigue siendo WCAG 2.2 AA. |
| `scale(0.97)` al pulsar como "norma de Apple" | Es una convención de la comunidad; Apple pide responder al tocar, sin cifra. |
| "Linear/Figma usan CRDTs" | No: el servidor es la autoridad. Figma dice "inspirado en". |
| `-webkit-font-smoothing` y `hanging-punctuation` como detalle pro | El primero apenas hace nada hoy; el segundo solo funciona en Safari. |
| "Modal/sheet encima de otro" | Apple lo desaconseja expresamente. |
