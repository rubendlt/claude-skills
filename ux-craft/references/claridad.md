# Claridad: jerarquía, legibilidad e intuición

La IA falla en claridad por dos motivos: sin dirección elige lo genérico y nadie decide qué manda, y se juzga mal a sí misma. Por eso se decide **antes del código** (§ 1) y se juzga **sobre la pantalla renderizada, no sobre el código** (§ 8). Toda pantalla responde sin esfuerzo a **¿dónde estoy?, ¿qué puedo hacer?, ¿a dónde puedo ir?** (Apple).

Entre paréntesis va la fuente principal de cada regla; los enlaces están en `fuentes-claridad.md`, que no hace falta leer para aplicarlas.

## 1. Antes del código

- **Contexto:** quién usa la pantalla, cuándo, qué hace en ella casi siempre y qué datos y acciones tiene. Si no se sabe cuál es la tarea principal, se pregunta al usuario; no se adivina.
- **La pregunta de la pantalla y su acción principal, en una línea.** "¿Tengo clase hoy y a qué hora?" → "Reservar". La pregunta decide qué es lo más grande y qué va primero. Cada bloque responde a la siguiente pregunta del usuario; el que no responde a ninguna se quita.
- **Si es un flujo, primero el mapa en palabras:** qué pantallas hay, qué acciones tiene cada una y a dónde lleva cada acción (Shape Up).
- **Estructura en texto antes del código:** un wireframe ASCII o una lista con qué lidera, qué apoya, qué va junto y qué queda en un segundo nivel.
- **Del centro hacia fuera:** primero el contenido principal con datos reales; cabecera, navegación y pie, al final (Getting Real). La jerarquía se resuelve en grises; el color va al final y con un propósito (Kennedy, Linear).
- **Datos reales y su peor caso** (nombres largos, listas vacías, cifras grandes; `break-ui`), con los estados normal, vacío y error.
- **En flujos y formularios, una cosa por pantalla:** una información, una decisión o una pregunta (GOV.UK).

## 2. Jerarquía visual

- **Un elemento principal, 2–3 secundarios y el resto atenuado.** Todo lo que hay en pantalla compite por la atención.
- **Tamaño, peso y color, juntos.** Lo principal, más grande o con más contraste (Apple). Dentro de la interfaz, el peso y el color hacen casi todo el trabajo; agrandarlo todo da pantallas infladas y planas (Refactoring UI). En landings, el salto de tamaño del titular sí es la herramienta principal.
- **Pocos estilos de texto:** unos 3 tamaños, 2 pesos (400–500 y 600–700) y 2–3 colores de texto, como tokens sólidos y no con opacidad (Material 3).
- **Destacar es atenuar lo que compite**, no agrandar: acercarlo al color del fondo (gris sobre blanco; sobre un fondo de color, un tono del mismo matiz).
- **El aire también marca importancia:** lo que tiene más espacio alrededor se percibe como más importante (Fluent, Material).
- **Acciones en pirámide:** la primaria rellena, las secundarias con contorno o tonales, las terciarias como texto.
  - **Un solo primario por vista o sección** (GOV.UK, Material, Fluent, Carbon, Atlassian, Polaris; Apple admite dos). Cabecera, modal y panel lateral pueden tener el suyo.
  - Si hay más de dos acciones con la misma prioridad, ninguna es primaria (Fluent).
  - Si sobran botones, los menores van a un menú de desbordamiento. "Más" vale en una barra llena, no dentro del contenido.
  - Lo destructivo nunca es el primario ni la acción por defecto de Intro, tampoco en su diálogo de confirmación, donde puede ir en rojo (Apple).
  - Un botón activo nunca se parece al desactivado de otro.
  - El primario va donde lo pone la plataforma, y siempre junto al contenido al que afecta.
- **La acción principal se ve sin hacer scroll:** el 57 % del tiempo de visión ocurre por encima del pliegue (NN/g, escritorio).
- **2–3 bordes de alineación**, no 6.
- **Lo que orienta va en segundo plano:** barra lateral, cabeceras y metadatos más tenues que el contenido (Linear).
- **Sin pasarse.** Quitar la jerarquía (todo gris y pequeño) o esconder lo necesario confunde tanto como el ruido. Una pantalla sobria sin la acción ni los datos clave a la vista pierde frente a una recargada (Taste, Apple). Lo sobrio es el punto de partida, no la meta.

## 3. Agrupación

- **La jerarquía la dan la composición y la agrupación, no la decoración** (Apple).
- **Proximidad primero:** más espacio entre grupos que dentro de ellos. 12 campos en 3 grupos de 4 parecen menos que 12 seguidos (NN/g).
- **Caja o borde solo si el espacio no basta:** las cajas de más recargan y crean falsos finales que cortan el scroll (NN/g, Tufte).
- **La sangría indica subordinación** (Apple).
- **Un símbolo y un texto no comparten contenedor**, porque se leen como un solo botón (Apple).
- **Lo que hace lo mismo se ve y se comporta igual.** Los controles, siempre coherentes; lo que se muestra en cada pantalla puede adaptarse al contexto (Getting Real).
- **Se agrupa por la tarea del usuario, no por la tecnología:** una sección "IA" no le dice nada a nadie (Intercom).

## 4. Escaneo y texto

- **Se escanea, no se lee:** como mucho el 20–28 % de las palabras (NN/g). Nadie lee en orden, así que cada título, etiqueta y botón se entiende solo; en una alerta, los botones bastan para saber qué se elige (Apple).
- **Tarta de capas:** subtítulos que dicen algo y palabras clave visibles. El patrón en F es lo que pasa cuando no hay estructura.
- **Las 2 primeras palabras informan:** "Facturas pendientes", no "Ver todas las facturas pendientes" (NN/g).
- **Lo importante, primero:** "Coste total: 45 €". En una instrucción, primero el objetivo y luego la acción: "Para quitar una foto, arrástrala a la papelera" (Material).
- **La etiqueta dice la consecuencia:** "Mover a la papelera", no "Más opciones". Si un contenido se ha elegido para el usuario, se dice por qué: "Porque añadiste…" (Apple).
- **Botones de 1 a 3 palabras**, verbo y objeto, sin cortar.
- **Cifras en número:** "3 reservas".
- **Frases de menos de 25 palabras**, empezando por el verbo y sin "puedes" ni "hay".
- **Énfasis escaso:** negrita solo en lo que se escanea y nunca junto con cursiva; mayúsculas solo en etiquetas cortas.
- **Prueba de voz alta:** lo que suena raro dicho en voz alta está mal escrito (Apple).
- Cuánto texto poner, errores y estados vacíos: `SKILL.md` § Feedback, copy y errores, y `copy.md`.

## 5. Legibilidad

- **Cuerpo de texto:** 16 px en texto corrido, 14 px en herramientas densas (Material, Fluent, Carbon) y 17 pt en iOS (mínimo 11 pt). Más pequeño, solo en tablas muy densas.
- **Interlineado sin unidades:** ~1,3 en la interfaz (iOS 17/22) y 1,4–1,5 en texto largo. Los contenedores de texto no llevan altura fija (WCAG 1.4.12).
- **Párrafos de unos 50–75 caracteres** (`max-width: 65ch`). Es una preferencia, no una ley, y no se aplica a tablas ni a etiquetas.
- **Contraste por encima del mínimo:** 4,5:1 es el suelo. Los grises por defecto suelen fallar en texto pequeño (Stripe).
- **Nada de gris claro en texto que hay que leer:** cansa, desaparece al escanear y parece desactivado. Si molesta, se quita o se mueve (NN/g).
- **Nada de pesos 100–300 en texto de interfaz.** Un Light, solo en titulares grandes.
- **Texto sobre imagen, con un degradado o un desenfoque detrás** (Apple).
- **Con el texto muy grande, la pantalla se reorganiza:** se apila, hay menos columnas, no se trunca y lo principal sigue arriba (Apple).

## 6. Intuición

Algo parece intuitivo si el usuario ya sabe lo que necesita para usarlo, o si se le enseña sin que lo note (Spool). Por cada concepto nuevo de la pantalla: ¿el usuario ya lo conoce? Si no, se explica en ese mismo sitio.

- **Lo pulsable parece pulsable, y lo demás no:** el botón tiene forma, el color de enlace no se usa para nada más y la tarjeta entera es clicable si parece una unidad. Con señales débiles se tarda un 22 % más en encontrar dónde pulsar (NN/g).
- **Se ponen a propósito las señales que lo físico daba gratis:** progreso, cuánto queda, en qué estado está algo (Norman).
- **Los controles imitan lo que controlan.** Si hacen falta etiquetas para explicar un control, falla esa correspondencia (Apple).
- **Iconos con etiqueta visible.** Sin texto, solo los glifos estándar: casa, lupa, carrito, impresora y hamburguesa (mejor con "Menú"). El corazón y la estrella son ambiguos. El tooltip no cuenta. Si cuesta más de 5 s pensar un icono para algo, va con texto (NN/g).
- **Palabras del usuario, no del sistema:** nada de "Sincronizar entidad". Si una etiqueta necesita explicación, se cambia la etiqueta.
- **Convenciones antes que originalidad** (ley de Jakob): el logo lleva al inicio, la lupa busca y la navegación está donde la ponen las demás apps. Si una tarea puede resolverse de forma más avanzada que la convención, cuánto avance aguanta el usuario lo decide la skill `maya`.
- **X o "Cancelar":** la X solo si no se ha introducido nada. Con datos, "Cancelar" y un verbo que diga qué se guarda (Apple).
- **Reconocer mejor que recordar:** opciones a la vista, recientes y valores ya rellenados. Nada que haya que recordar de otra pantalla.
- **Lo que se usa a diario no se esconde**, aunque la pantalla quede menos limpia (Nielsen, Wroblewski). La navegación, visible en escritorio, y en móvil a la vista si hay 4 destinos o menos. Excepción: en una pantalla de tarea (redactar, pagar) se quita la navegación y solo queda la salida.
- **Clics sin pensar antes que pocos clics:** no se ahorra un paso a cambio de una elección ambigua (Krug).
- **Divulgación progresiva de 2 niveles como mucho**, con un acceso que dice qué hay detrás ("Opciones de envío", no "Más"). Nada importante escondido y ningún desplegable dentro de otro.
- **Nada en blanco sin pista:** un campo o una búsqueda vacíos llevan ejemplos. Una caja de chat vacía no es simple: traslada el trabajo al usuario (Nielsen).
- **El gesto es un atajo, nunca la única vía** (Apple).
- **Ayuda en contexto:** breve, junto a lo que explica, solo para quien aún no ha descubierto la función y de una en una. Desaparece al hacer la acción y nunca es promoción (Apple, Krug).
- **Valores por defecto con el caso más probable** (NN/g).
- **Respuesta proporcional:** toda acción produce un cambio de estado visible; la confirmación explícita se reserva para lo importante (Apple).

## 7. Densidad, listas, tablas y formularios

- **El problema es el ruido, no la cantidad.** Se quita decoración, no datos (NN/g). Pero los componentes compactos no se aplican por defecto (mejor que el usuario lo elija), ni en tareas que piden concentración, ni por debajo de 48×48 de área táctil. A más densidad, márgenes más amplios (Material).
- **Para comparar, lista o tabla, no tarjetas.** Las tarjetas, para elementos variados o muy visuales (NN/g).
- **Tablas:**
  - primera columna con un nombre legible, no el ID;
  - columnas ordenadas por importancia;
  - cabecera fija y títulos de columna de 1–2 palabras;
  - filas de 40 px por defecto;
  - como mucho 5 acciones en la barra;
  - números alineados a la derecha y con cifras tabulares (Carbon, GOV.UK, NN/g).
- **Formularios:**
  - en una columna; solo comparten fila los datos que forman una unidad, como código postal y ciudad;
  - etiqueta encima del campo, y a la izquierda solo en formularios largos de escritorio con datos poco familiares;
  - etiquetas de 1–3 palabras, sin dos puntos;
  - "(opcional)" en la minoría y sin asteriscos;
  - lo que hay que saber, en un texto de ayuda visible y no en el placeholder (Carbon, Baymard, Wroblewski, GOV.UK);
  - el resto, en `web.md` § 5.

## 8. Revisar sobre la pantalla

Quien escribió el código lee en él sus intenciones: la claridad se juzga sobre la pantalla renderizada, y la juzga otro. El revisor de IA también se equivoca (bastantes falsos positivos y mal criterio para la gravedad), así que sus hallazgos son hipótesis que hay que comprobar (Anthropic, Nielsen).

1. **Capturas** a 1440 px, 1920 px y 390 px, con datos reales, en los estados normal, vacío, cargando y error. Si el cambio es de estilo o de sistema, en todas las vistas que lo usan (Linear).
2. **Un subagente nuevo, sin el historial**, recibe solo las capturas, la pregunta y la acción principal de § 1 y las pruebas de abajo; ni el código ni el razonamiento. Devuelve cada hallazgo con su gravedad: bloquea la tarea, la entorpece o es cosmético. Si el cambio es grande, dos revisores, porque encuentran problemas distintos.
3. **Pruebas:**
   - **Primer vistazo (1 s y 5 s):** ¿qué se ve primero y coincide con la pregunta de la pantalla? Para alguien que no conoce el producto, ¿de qué va la pantalla y qué se puede hacer en ella?
   - **Desenfoque de 5–10 px:** se siguen distinguiendo lo principal, lo secundario y los grupos.
   - **Primer clic:** para la tarea principal, ¿dónde pulsaría alguien?
   - **Orientación:** ¿dónde estoy, qué puedo hacer, a dónde puedo ir y cómo salgo?
   - **Qué sobra y qué falta:** quitar al menos una cosa o justificar por qué no, y comprobar que no haya nada de uso diario escondido.
4. **En cada ronda, los 3 problemas más graves**, por este orden: jerarquía; agrupación y composición; texto, color y detalle; motion. Como mucho 2–3 rondas: a veces la intermedia es la mejor.
5. **Si no se puede renderizar, dilo.** La claridad no se da por buena leyendo JSX.

## 9. Revisión rápida

- [ ] ¿Están escritas la pregunta de la pantalla y su acción principal? ¿Hay algún bloque que no responda a nada?
- [ ] ¿Un solo elemento principal y un solo botón primario visible sin scroll? ¿Nada destructivo como primario?
- [ ] ¿Unos 3 tamaños, 2 pesos y 2–3 colores de texto? ¿Se destaca atenuando lo que compite?
- [ ] ¿Más aire entre grupos que dentro de ellos? ¿Cajas donde bastaba el espacio?
- [ ] ¿Títulos, etiquetas y botones que se entienden solos y empiezan por la palabra que informa?
- [ ] ¿Cuerpo e interlineado según § 5? ¿Gris claro o pesos finos en texto que hay que leer?
- [ ] ¿Todo lo pulsable lo parece? ¿Iconos sin etiqueta que no son glifos estándar?
- [ ] ¿Jerga interna, algo que haya que recordar o conceptos sin explicar? ¿Algo de uso diario escondido?
- [ ] ¿Campos vacíos sin ejemplo? ¿Una X que no deja claro si se guarda?
- [ ] ¿Tarjetas donde había que comparar? ¿Formulario en varias columnas?
- [ ] ¿Revisado sobre capturas por un subagente sin historial, con los hallazgos comprobados?
