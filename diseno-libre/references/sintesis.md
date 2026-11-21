# Síntesis: de referentes a direcciones

## 1. Tabla de mecanismos

Antes de idear, pon en una tabla cada problema del brief y cómo lo resuelve cada referente:

| Problema | Peloton | Fitbod | Strava | Duolingo (vecino) | … |
|---|---|---|---|---|---|
| No sabe qué entrenar hoy | semana + reto | rutina generada por músculo recuperado | — | «lección de hoy» única | |

Con la tabla delante:

- **Convención**: el mismo mecanismo en ≥ la mitad de los referentes del sector. El usuario ya lo ha aprendido. Se mantiene salvo una razón escrita (y esa razón se dice al usuario).
- **Hueco**: un problema que nadie resuelve bien, donde todos hacen lo mismo y nada destaca, o donde un vecino lo resuelve mejor y el sector no lo ha copiado.
- **Dato del producto**: lo que este proyecto tiene y los referentes no (su contenido, su usuario, su marca, una restricción). La diferencia suele salir de aquí, no de la estética.

## 2. Ideas o direcciones (mínimo 3; más si vale la pena)

Tienen que ser **distintas en estructura o en mecanismo**. Tres paletas sobre el mismo layout son una dirección, no tres.

Plantilla, por dirección:

```markdown
## Dirección A · «Hoy, una sola cosa»
**Idea:** la home responde solo a «qué hago hoy» con una sesión y su porqué; el catálogo pasa a segundo plano.
**Toma:** la sesión única de Duolingo (duolingo-hoy.png); la recuperación por músculo de Fitbod (fitbod-musculos.png).
**Hace distinto:** explica por qué esa sesión hoy, con datos del usuario (dato del producto: ya registramos RPE).
**Mantiene (convenciones):** barra inferior de 4 destinos; progreso semanal.
**Estructura:**
┌───────────────────────────┐
│ Hola, Ana · L M X ● ○ ○ ○ │  semana en una línea
│                           │
│ HOY                       │
│ Pierna · 35 min           │  lo principal: lo más grande
│ Tus cuádriceps ya han     │
│ descansado 72 h           │  el porqué
│ [      Empezar      ]     │  único primario
│ Cambiar                   │
│                           │
│ Si tienes poco tiempo     │
│ Movilidad · 12 min      › │
│ ───────────────────────── │
│ Últimos: Torso · Cardio   │
└───────────────────────────┘
**Riesgo:** quien quiere elegir se siente dirigido → «Cambiar» visible junto a la sesión.
**Punto débil:** si el usuario no registra esfuerzo, el porqué queda vacío; hay que diseñar ese estado.
```

El boceto ASCII es obligatorio: obliga a decidir jerarquía y contenido real antes que estilo, y el usuario ve la diferencia entre direcciones de un vistazo.

Si hay más de 3 enfoques de fondo que merecen verse, ponlos: cada idea extra tiene que ser otro enfoque, no una variante. Ordena las direcciones de más segura a más arriesgada y **recomienda una con tu porqué y lo que descartarías**, como lo haría un diseñador que firma el trabajo. No es una carta para que el usuario elija sin criterio.

## 3. Filtro anti-slop (cada dirección)

Descártala o corrígela si falla alguna:

- **Test del logo:** si quitas nombre y logo, ¿se sabe de qué producto es? Si podría ser cualquier app del sector, es la media.
- **Test de la tabla:** ¿cada bloque de la estructura viene de un problema del brief? Un bloque sin problema es relleno.
- **Kit premium y plantillas:** ¿cae en `ux-craft/references/slop.md` § 4–5 (hero centrado, tres tarjetas, bento, glow, gradiente)?
- **Cliché por cliché:** ¿has cambiado lo genérico por el anti-cliché de moda (crema + serif, brutalismo, grano, lift con spring) sin que lo pida la marca? (ux-craft, principio 3).
- **Calco:** ¿se parece tanto a un referente que podría confundirse con él? Se toman mecanismos; si se nota de quién viene, sobra.
- **Estética del referente:** ¿has heredado colores, fuente o ilustraciones de un referente en lugar de los del proyecto?

## 4. Presentar las ideas en un artifact

Las ideas se enseñan en una página, no en el chat: se ven las capturas, los bocetos y las ideas lado a lado, y se puede compartir.

1. **Antes de escribir la página**, llama a la herramienta Artifact con `action: "quickstart"` e `intent: "other"` (o carga la skill `artifact-design`). La página de ideas también tiene que estar bien diseñada: nada de slop en la presentación de un trabajo anti-slop.
2. Escribe `<carpeta>/ideas.html` con, en este orden:
   - **Encargo** en dos líneas: la pregunta de la pantalla y los problemas del brief.
   - **Qué hace el sector:** convenciones en 2–3 líneas y las capturas clave (no todas: las que justifican algo).
   - **Huecos** en 2–3 líneas.
   - **Las ideas, la recomendada primero**, una por bloque: nombre, idea en una frase, **boceto en gris** de la pantalla principal hecho en HTML (cajas grises, una fuente, texto real del producto, a 390 px si es móvil), qué toma de qué referente (con su miniatura), qué hace distinto, riesgo y punto débil.
   - **Tu recomendación** con su porqué y lo que descartarías.
   - **La pregunta:** cuál, o qué mezcla.
3. Publica con la herramienta Artifact (`file_path` = `ideas.html`) y pasa las capturas que uses en `files`, con las mismas rutas relativas que el HTML (`{"referentes/peloton-home.png": "<carpeta>/referentes/peloton-home.png"}`).
4. Da al usuario el enlace y un resumen de 3–4 líneas: cuántas ideas, cuál recomiendas y por qué. Si el usuario pide cambios, edita y vuelve a publicar el mismo archivo, así la URL no cambia.

Si la herramienta Artifact no está disponible, abre `ideas.html` en el navegador (`open <ruta>`) y escribe en `decision.md` `Artifact: no disponible (<motivo>)`.

Su respuesta va tal cual a `decision.md`:

```markdown
Dirección elegida: A, con el historial de C
Artifact: https://claude.ai/…
Ajustes del usuario: «menos texto en la sesión de hoy»
Mecanismos a implementar:
- [ ] sesión única con su porqué (duolingo-hoy.png, fitbod-musculos.png)
- [ ] semana en una línea (peloton-home.png)
- [ ] …
```

La lista de mecanismos es lo que se verifica en la fase 4.
