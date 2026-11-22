---
name: maya
description: "Principio MAYA (Most Advanced Yet Acceptable, Raymond Loewy): cuánto innovar y dónde sin que el usuario deje de reconocer lo que ve. USAR cuando haya que decidir entre algo convencional y algo distintivo en UI, una web, una marca o un producto; cuando un diseño parezca «demasiado raro», «a plantilla» o «igual que todos»; antes de un rediseño sobre usuarios que ya usan el producto; cuando diseno-libre, ux-craft o investigar tengan que medir la dosis de novedad de una propuesta; o cuando el usuario mencione MAYA o Loewy. NO usar en ajustes menores (un margen, una palabra), dudas técnicas ni decisiones ya tomadas en el proyecto."
argument-hint: "[propuesta o pantalla a evaluar]"
---

# MAYA: lo más avanzado que aún se acepta

Raymond Loewy (diseñador industrial, años 50) lo resumió así: la gente quiere lo nuevo, pero rechaza lo que no reconoce. Un diseño tiene que innovar lo justo para que el usuario lo siga entendiendo. Derek Thompson (*The Atlantic*, *Hit Makers*) lo dice al revés: «para vender algo sorprendente, hazlo familiar; para vender algo familiar, hazlo sorprendente».

Esta skill da la **dosis**: qué se queda convencional, qué puede ser distinto y cuánto. No da el aspecto, que sale del proyecto (`ux-craft` principio 1), ni sustituye a la ley de Jakob de `ux-craft/references/claridad.md` § 6 («convenciones antes que originalidad»): esa es la mitad «aceptable» de MAYA, y aquí está el principio completo.

## Qué dice la evidencia

- **Estudio de origen** ([Hekkert, Snelders y van Wieringen, *British Journal of Psychology* 2003](https://research.vu.nl/en/publications/most-advanced-yet-acceptable-typicality-and-novelty-as-joint-pred/); [resumen](https://www.jimdavies.org/summaries/HekkertSneldersVanwieringen2003.html)). En tres estudios con productos de consumo, lo típico (lo que más se parece a lo que la gente espera de esa cosa) y lo novedoso explican el gusto más o menos por igual, pero **se frenan entre sí**: se prefiere lo nuevo mientras no deje de parecer típico. El peso cambia según el producto: en teléfonos y lijadoras pesó más la novedad; en hervidores, lo típico. **A los expertos lo típico les da igual y premian la novedad.**
- **Matiz.** Una réplica con ropa ([ITAA](https://iastatedigitalpress.com/itaa/article/1593/galley/1466/view)) volvió a encontrar que lo típico predice el gusto (en pantalones y chaquetas), pero no ese freno mutuo. MAYA es una tendencia, no una ley con un punto exacto.
- **Primera impresión web** ([Google Research, 2012](https://research.google/blog/users-love-simple-and-familiar-designs-why-websites-need-to-make-a-great-first-impression/), ya citado en `ux-craft/references/fuentes-claridad.md`): las webs que gustan nada más verlas son las simples y las que se parecen a lo que el usuario espera de ese tipo de web.
- **Qué pasa si te pasas: Snapchat, 2018.** Rediseño impuesto pese a los avisos internos ([Android Headlines](https://www.androidheadlines.com/2018/05/ceo-pushed-snapchat-redesign-despite-internal-warnings-report.html)), recogida de firmas con más de 1,2 millones ([Android Authority](https://androidauthority.com/snapchat-update-redesign-roll-back-old-version-petition-837317)) y de 191 a 188 millones de usuarios diarios, que la propia empresa atribuyó al rediseño ([MacRumors](https://www.macrumors.com/2018/08/07/snapchat-redesign-millions-of-lost-users/)). Spiegel, en un memorando interno: «We rushed our redesign, solving one problem but creating many others» ([Engadget](https://www.engadget.com/2018-10-05-snap-evan-spiegel-app-redesign-rushed.html)). Dio marcha atrás en parte ([TechCrunch](https://techcrunch.com/2018/05/01/Snapchat-reredesign)).
- **Qué pasa si te pasas: Microsoft, Windows 8.** Quitó el menú Inicio. Windows 8.1 devolvió el botón, que solo abría la pantalla nueva ([Windows Central](https://www.windowscentral.com/start-button-returns-windows-81-sort)), y Windows 10 devolvió el menú tras las críticas; Microsoft dice que, por eso, cambió su forma de trabajar para escuchar más a los usuarios ([Microsoft](https://learn.microsoft.com/en-us/archive/blogs/microsoft_on_the_issues_africa/the-start-of-something-new), [TechRadar](https://techradar.com/news/computing/how-the-windows-start-menu-has-changed-in-the-last-20-years-1302723)). Matiz: después, parte de los usuarios pidió conservar la pantalla Inicio ([Softpedia](https://news.softpedia.com/news/how-about-that-windows-10-users-really-like-the-windows-8-1-start-screen-489643.shtml)). La costumbre también se crea.
- **Rechazo al cambio** ([Google, Sedley y Müller, CHI'13](https://research.google/pubs/minimizing-change-aversion-for-the-google-drive-launch/)): es la reacción negativa a corto plazo ante un cambio en un producto. En el paso de Docs List a Google Drive, Google describe las acciones que le permitieron «a launch with no aversion». No he podido leer el texto completo ni el artículo de GV: las tácticas concretas no están comprobadas aquí. Contrapunto de Jared Spool ([UIE](https://archive.uie.com/brainsparks/2012/07/16/googles-take-on-change-aversion-misses-the-point/)): la gente no odia el cambio, odia un cambio mal hecho.

Casi todo lo demás que circula sobre MAYA (iPod → iPhone, Google Glass, Newton, Apple Watch) es comentario sin datos: vale como ejemplo, no como prueba.

## Cómo se aplica

1. **Separa estructura y ejecución.** La estructura y la interacción son convencionales: navegación, formularios, iconos, dónde está cada cosa y cómo se pulsa. Lo distintivo va en la ejecución: fotos, escala, tipografía, ritmo, copy, detalle. *(Evidencia: Google 2012, ley de Jakob; el reparto es criterio.)*
2. **Un solo eje nuevo por pantalla.** Si dos cosas son nuevas a la vez, una sobra. *(Criterio, coherente con el freno mutuo de Hekkert.)*
3. **La dosis depende del usuario.** Cuanto menos experto en el tema y cuanto menos a menudo use el producto, más cerca de la convención. Los expertos y los usuarios diarios aguantan y premian más novedad. *(Evidencia: Hekkert, expertos frente a no expertos.)*
4. **La dosis depende del tipo de cosa.** Hay categorías donde lo típico pesa más (lo práctico, lo que se usa sin pensar) y otras donde pesa más la novedad. En una web de servicio B2B que se usa de tarde en tarde, manda lo típico. *(Evidencia: Hekkert, por categoría; la aplicación a webs es criterio.)*
5. **Lo nuevo se ancla en algo conocido.** Una forma conocida con función nueva o una función conocida con forma nueva; nunca las dos. *(Criterio: Loewy, Thompson.)*
6. **Rediseñar con usuarios que ya usan el producto es otro caso.** Hazlo por pasos, sin imponerlo de golpe; mide antes y después; separa el rechazo al cambio (pasa con el tiempo) del empeoramiento real (no pasa). «Es aversión al cambio» no sirve de excusa. Para tácticas de rediseño sin perder usuarios: `ux-craft/references/expertos/timgabe`. *(Evidencia: Snapchat, Windows 8, Spool. Las tácticas de Google no están comprobadas.)*

## Prueba rápida

Sobre capturas reales, no sobre el código:

- **¿Te has pasado?** Una persona nueva no sabe en unos segundos qué es la página y qué tiene que pulsar, o busca un control donde suele estar y no lo encuentra.
- **¿Te has quedado corto?** Con otro logo, la pantalla sería la de cualquier competidor o la de una plantilla (`ux-craft/references/slop.md`).
- **Bien:** se entiende sin pensar, y aun así se reconoce de quién es.

Los segundos de la primera prueba son criterio, no un umbral medido.

## Cómo encaja con las demás skills

- `diseno-libre`: al filtrar las ideas y antes de recomendar una, di de cada idea qué parte es convencional y cuál es su eje nuevo (reglas 1-2 de arriba).
- `ux-craft`: claridad § 6 cubre la mitad aceptable; esta skill decide cuánto se puede salir de ahí.
- `investigar`: la evidencia de arriba ya está recogida; para un caso concreto, mira los referentes del sector y mide dónde está su convención antes de decidir cuánto alejarse.
- `nng`: `mental-models`, `aesthetic-usability-effect` y la heurística 4 (consistencia y estándares) para respaldar la parte de convención.
- El `CLAUDE.md` del proyecto manda: si fija una convención o una marca, eso no se reabre con MAYA.
