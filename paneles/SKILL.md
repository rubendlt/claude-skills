---
name: paneles
description: >-
  Criterio con evidencia para paneles y aplicaciones de trabajo en web (SaaS, paneles de administración, back-office,
  CMS para que el cliente edite su web, herramientas internas): tablas de datos (buscar, comparar, editar, actuar sobre
  filas; cabeceras fijas, columnas, filtros visibles), dashboards y gráficos que se leen de un vistazo, formularios densos
  y edición, guardar, deshacer e historial, estados vacío/carga/error y esperas largas, navegación de una app compleja,
  usuarios expertos frente a ocasionales y tablas en móvil. Junta NN/g (investigación con usuarios), los sistemas de
  diseño de GitHub (Primer), IBM (Carbon) y Atlassian, y los consejos de Kole Jain y UX Peak. USAR al diseñar o revisar un panel, una tabla, un dashboard, un /admin o cualquier pantalla de
  trabajo con datos, también en preguntas cortas (leer solo la sección). Apps móviles de consumo: apps-moviles; medidas
  y componentes: normas. NO usar en webs públicas de captación (conversion) ni en cambios de código triviales.
argument-hint: "[panel, tabla, dashboard o pantalla]"
---

# Paneles: pantallas de trabajo con datos

Tres tipos de fuente, marcadas en cada punto: **NN/g** = evidencia (tests con usuarios; fichas en `~/.claude/skills/nng/fichas/`); **sistemas de diseño** de GitHub (Primer), IBM (Carbon) y Atlassian = cómo lo resuelven productos de trabajo usados por millones (§ 7); diseñadores (Jain, UX Peak) = **criterio**. Si chocan, pesa más lo medido y luego lo que hacen esos sistemas. Manda el proyecto; medidas y componentes, `normas`.

## 0. Antes de diseñar: quién lo usa y cuánto

- **¿Experto diario u ocasional?** Un panel de analista que se usa 8 h al día admite densidad, atajos y personalización; un `/admin` que el cliente abre una vez al mes necesita lo contrario: pocas opciones, etiquetas claras, vista previa y que nada se rompa (NN/g, *complex apps*; UX Peak § 12: interfaz según la madurez).
- **Estudiar el trabajo, no solo la pantalla:** qué hace el usuario fuera del sistema, con qué otras herramientas y quién más interviene (NN/g, *strategies-complex-application-design*, 2025).
- **Pensar en flujos, no en pantallas:** tras crear algo, ¿qué necesita ahora? Planificar el flujo en cajas antes de dibujar: aparecen búsquedas, «saltar», estados ocultos (Jain § 6).

## 1. Ocho reglas de las aplicaciones complejas (NN/g)

1. **Aprender haciendo:** la gente empieza a usarlo sin leer tutoriales (paradoja del usuario activo). Que probar no rompa nada: resultado visible al momento (vista previa en vivo), deshacer, versiones.
2. **Llevar a métodos más eficientes:** casi todos se quedan en un uso mediocre. Pistas en contexto (tooltip que sugiere el atajo), no manuales.
3. **Caminos flexibles:** nada de asistentes rígidos sin salida; poder saltar, volver y moverse entre pasos sin perder lo hecho.
4. **Ayudar a retomar:** notas, historial y estado guardado para volver tras una interrupción.
5. **Coordinar herramientas y espacios de trabajo:** pasar datos entre vistas sin copiar a mano.
6. **Quitar ruido sin quitar capacidad:** lo frecuente visible, lo raro un nivel más abajo (divulgación progresiva).
7. **Pasar fácil de lo principal a lo secundario:** detalle en panel lateral o expandible sin perder el contexto.
8. **Lo importante, visualmente destacado:** alertas, cambios y excepciones saltan a la vista.

Y las 10 heurísticas aplicadas a apps complejas (NN/g): estado del sistema siempre visible; palabras del dominio del usuario, no internas (el icono de café que significaba «disponible» confundía a quien lo usaba a diario desde hacía años); salida y deshacer en todo; coherencia; prevenir errores antes que explicarlos.

## 2. Tablas de datos

**Cuatro tareas que la tabla tiene que permitir** (NN/g, *data-tables*): encontrar registros, comparar, ver/editar una fila, actuar sobre registros.

- **Tabla antes que tarjetas para comparar:** en tarjetas hay que reorientarse en cada una y memorizar (NN/g).
- **Primera columna = identificador legible** (nombre), no un ID generado. **Columnas por importancia**, y las relacionadas juntas (NN/g).
- **Filtros visibles, rápidos y con indicación clara de que están activos** (NN/g). Recuento de resultados en cada opción (UX Peak § 9).
- **Cabecera y primera columna fijas** si la tabla no cabe; filetes suaves, cebrado o resaltado al pasar para no perder la fila (NN/g).
- **Ocultar, reordenar y ordenar columnas** con poco esfuerzo y sin depender de arrastrar; se ve qué columnas están ocultas (NN/g).
- **Números a la derecha, chips para valores finitos, truncar lo largo, atenuar filas inactivas** (Jain § 4). Texto a la izquierda y cifras a la derecha, como un ticket (Jain § 11).
- **Acciones:** sobre una fila, a mano en la fila o en un menú; sobre varias, selección + barra de acciones. Demasiadas acciones en cada fila → agruparlas en un menú (Jain § 6).
- **En móvil** (NN/g, *mobile-tables*): columnas legibles aunque quepan menos, cabecera y primera columna fijas, avisar si hay scroll horizontal, dejar elegir qué columnas ver, acordeones para grupos. Girar el móvil, último recurso.

## 3. Dashboards y gráficos

- **Operativo o analítico:** el operativo se mira de un vistazo para actuar (estado, alertas); el analítico se explora. Decidir cuál es antes de diseñar (NN/g, *dashboards-preattentive*).
- **Posición y longitud para cantidades** (barras, líneas): se leen rápido y bien. **Tartas, medidores, radar y 3D**, mal: comparan áreas y ángulos (NN/g).
- **Color, forma y agrupación para categorías**, no para cantidades; un punto rojo entre azules salta solo (NN/g).
- **El dato manda sobre la etiqueta:** la cifra grande, la etiqueta pequeña y atenuada (UX Peak § 6). No repetir los mismos KPIs en tres sitios (Jain § 6).
- **La forma sigue a los datos:** una evolución es una línea, no una tabla (Jain § 6).
- **Gráfico de línea:** cuadrícula y marcadores, sin curvas suavizadas ni degradados que borren el último dato, leyenda, periodo anterior en gris; barras con eje y sin redondear (Jain § 6, § 13).

## 4. Edición, guardar y errores

- **Deshacer mejor que confirmar:** modal solo para lo irreversible (envío masivo, pagos) (Jain § 10; NN/g heurística 3).
- **Guardado explícito por defecto; automático solo en controles de efecto inmediato** (interruptores, controles segmentados). No mezclar los dos en un formulario ni en una página. Al fallar, conservar lo escrito (GitHub Primer, *saving*). Jain propone autoguardado: vale cuando hay historial para deshacer, si no, manda Primer.
- **Historial de versiones** para volver atrás (NN/g: restaurar versiones anteriores).
- **Vista previa de lo que verá el público** antes de publicar, en un CMS de cliente (NN/g regla 1: ver el resultado sin esperar al final).
- **Valores por defecto, chips en vez de texto libre, recientes arriba** (UX Peak § 10).
- **Cada control con sus estados** (normal, hover, pulsado, desactivado; foco, error, aviso) y microfeedback («Guardado», «Copiado») (Jain § 10).
- **Errores que dicen qué pasó y cómo arreglarlo**, junto al campo; nunca perder lo escrito (NN/g heurística 9; comportamiento de campos y errores en `normas`).

## 5. Esperas, estados y progreso

- **Esperas de más de 10 s:** porcentaje o pasos hechos y tiempo restante; una animación en bucle no basta (NN/g, *designing-for-waits*).
- **Procesos largos en segundo plano** y aviso al terminar con contexto de qué terminó (NN/g).
- **Ningún estado vacío muerto:** qué va a haber ahí y el botón que lo llena (UX Peak § 13; Jain § 6; NN/g *empty states*).
- **Cargas que respetan el hueco final** (sin saltos) y aguantar datos reales: nombres largos, listas vacías, miles de filas (UX Peak § 13). Para forzarlo: `break-ui`.

## 6. Navegación de una app

- **Respetar convenciones:** navegación arriba o a la izquierda, acción principal visible (Jain § 6).
- **Cada sustantivo que tiene página es enlace** (proyecto, responsable), con vista previa al pasar el ratón; una IA convierte cada petición en una página suelta colgada del menú lateral (Jain § 9).
- **Submenús tolerantes** al movimiento en diagonal (Jain § 10).
- **Design system = decisiones a las que atenerse**, no cientos de componentes (Jain § 6).

## 7. Cómo lo resuelven GitHub, IBM y Atlassian (sistemas de diseño, leídos el 23/11/2026)

**Tablas**
- **Cuándo tabla:** comparar datos planos entre muchas filas. No para datos jerárquicos, texto largo ni celdas casi vacías; si se editan celdas como en una hoja de cálculo, es un *data grid* (Primer).
- **Pocas columnas**, cabeceras cortas, un tipo de dato por columna; números a la derecha con cifras tabulares (Primer). Títulos de columna de una o dos palabras, en lenguaje llano (Carbon, Atlassian).
- **Orden por defecto con sentido** (lo más nuevo primero); si es ordenable, siempre una columna ordenada por defecto; solo la columna ordenada enseña icono (Primer, Carbon).
- **Celdas vacías:** en blanco o con un mensaje que explique por qué, no «x» ni «—» (Primer). *Choca con ux-craft, que acepta el guion: decidir por proyecto.*
- **Ajustar el texto antes que truncar;** truncar solo con ancho fijo y el texto completo en tooltip (Primer).
- **Alturas de fila** 24 / 32 / **40 (por defecto)** / 48 / 64 px; la cabecera, la barra de herramientas y la paginación a juego con la fila (Carbon). Tres densidades: compacta, normal y holgada (Primer).
- **Barra de herramientas** solo con acciones globales y hasta 5; el resto, en un menú (Carbon).
- **Selección y acciones por lotes:** casilla por fila y «seleccionar todo» con estado indeterminado; al seleccionar aparece la barra de lotes arriba y se desactivan las acciones de fila (Carbon).
- **Acciones de fila** en la última columna; con menos de 3, iconos en línea; con más, menú «⋯». Nunca más de una como botón suelto (Carbon, Primer). Cada «Editar» con etiqueta única para lector de pantalla («Editar pedido 3»); editar en modal o página, no con campos en la celda; tras borrar, el foco pasa al siguiente elemento (Atlassian).
- **Nada de enlaces ni botones en las cabeceras**, ni tablas para maquetar (Atlassian). Siempre resaltado al pasar por la fila (Carbon); nunca solo el color para indicar selección o foco (Atlassian).
- **Filas expandibles** para información de apoyo; sin «expandir todo» por defecto (Carbon).
- **Paginación** abajo, ~**20 filas por página** como punto de partida y la posición en el total (Primer, Carbon).
- **Carga:** esqueletos con la forma real de la fila, sin que cambie la altura al llegar los datos (Primer, Carbon). **Vacía:** un estado vacío en lugar de la tabla (Primer).

**Carga y espera** (Primer, *loading*)
- **< 1 s:** nada. **1-3 s:** indicador indeterminado. **3-10 s:** determinado si se puede. **> 10 s:** determinado y en segundo plano para seguir trabajando (cuadra con NN/g).
- Cargar por partes, lo importante primero; el indicador en el sitio del contenido y sin saltos. Un solo aviso para lector de pantalla por grupo de esqueletos; tras filtrar, anunciar el recuento.

**Guardar** (Primer, *saving*)
- Un botón de guardar por formulario, **siempre activo** (no desactivarlo si está incompleto: al pulsar, se explica qué falta). Verbo activo y corto («Guardar», «Crear»).
- Lugar: abajo a la izquierda en páginas, abajo a la derecha en diálogos, justo debajo en edición en línea.
- Confirmación antes de lo destructivo; tras un cambio arriesgado, deshacer. Mensaje en línea si no hay redirección; banner si recarga. Tras crear algo, llevar a lo creado.

**Estados vacíos** (Primer, *empty states*)
- Gráfico + texto principal (qué es esto, o por qué está vacío ahora) + texto secundario (qué puedes hacer) + **una** acción principal y, si acaso, un enlace «Saber más».
- En errores: sin tono juguetón, sin códigos técnicos, concreto («No se pudo enviar: faltan campos obligatorios») y con una salida.

**Densidad y tema** (Linear, rediseño de 2024)
- Menos ruido visual y más jerarquía en barra lateral, pestañas y cabeceras; temas desde 3 variables (base, acento, contraste) en LCH, con una variable de contraste para temas de alto contraste.

Fuentes: primer.style/product (components/data-table, ui-patterns/saving, loading, empty-states) · carbondesignsystem.com/components/data-table/usage · atlassian.design/components/dynamic-table/usage · linear.app/now/how-we-redesigned-the-linear-ui. Shopify Polaris movió su documentación a shopify.dev y no se pudo leer; Notion no publica sistema de diseño.

## Antes de dar por bueno un panel

- [ ] ¿Está claro si es para expertos diarios u ocasionales, y la densidad encaja?
- [ ] ¿La tabla deja encontrar, comparar, editar y actuar? ¿Filtros activos visibles?
- [ ] ¿Gráficos de posición/longitud, sin tartas ni 3D para comparar cantidades?
- [ ] ¿Deshacer o historial en lugar de modales de confirmación?
- [ ] ¿Esperas largas con progreso real? ¿Estados vacío, carga y error diseñados?
- [ ] ¿Probado con datos reales y extremos?
