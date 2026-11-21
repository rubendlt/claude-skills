---
name: uxpeak-agentic-ux
description: >-
  Expert UI/UX design heuristics, conversion rate optimization (CRO), and behavioral psychology principles
  extracted from UX Peak (@uxpeak). Use this skill when designing, reviewing, auditing, or generating user
  interfaces, frontend components (React, Tailwind, HTML/CSS), mobile layouts, onboarding flows, e-commerce product
  pages, pricing/paywalls, forms, dashboards, or empty states.
---

# UX Peak Agentic Design System

Este skill proporciona un marco de diseño de interfaz de nivel **Staff / Senior** basado en los principios empíricos y análisis de conversión de **UX Peak (@uxpeak)**. Transforma al agente de un simple generador de código visual a un arquitecto de producto centrado en la psicología de la decisión y la reducción del esfuerzo cognitivo.

Para consultar el desglose exhaustivo de los 13 videos analizados y las transcripciones completas, consulta [la guía de referencia](./references/full_guide.md).

---

## ⚡ Checklist de Diagnóstico Rápido (Antes de escribir UI)

Antes de generar o refactorizar cualquier componente visual, valida:
1. **¿Qué está intentando decidir el usuario?** (No preguntes solo *"¿cómo hago esto más bonito o limpio?"*, sino *"¿qué información necesita el usuario en este segundo exacto para decidir sin dudar?"*).
2. **¿Existe un coste de interacción oculto?** (¿Tiene que hacer clic para ver opciones que podrían mostrarse directamente?).
3. **¿Estamos forzando a rellenar campos en blanco?** (Aplica *Smart Defaults* en al menos el 70% de los inputs).
4. **¿Los botones comunican compromiso o seguridad?** (Evita verbos ciegos como `Pagar` o `Confirmar`; usa `Confirmar transferencia de $25.00` o `Iniciar mi prueba en 2 toques`).
5. **¿El texto flota sobre imágenes de contenido dinámico?** (Desacopla metadatos fuera del marco de la foto o aplica contenedores con `backdrop-blur` y bordes de 1 px).

---

## 🏛️ Los 6 Pilares de Diseño UX Peak

### 1. Arquitectura de Decisión y Filtros Multidimensionales
* **Menos UI ≠ Mejor UX:** Aislar cada filtro en una pantalla separada añade fricción y destruye la memoria de trabajo. Mantén los filtros interconectados en un *bottom sheet* o panel lateral superpuesto.
* **Histograma de Densidad en Sliders:** Si usas un control deslizante de rango (precios, salarios, dimensiones), muestra la distribución de frecuencia detrás del track para que el usuario entienda si está en la media o en un extremo sin resultados.
* **Coste de Decisión Visible:** Muestra el número resultante en los propios chips de filtro antes de pulsarlos (ej. `3+ hab (459)` vs `4+ hab (229)`).
* **Filtros orientados al modelo mental:** Pide variables reales del usuario (ej. cuota mensual y ahorros) en lugar de valores abstractos que exijan cálculos mentales.

### 2. Jerarquía Visual y Sistemas de Diseño Rigurosos
* **Métrica > Etiqueta:** En dashboards y tarjetas de datos, el número (`$14,500`) debe ser el elemento heroico (`text-3xl font-bold`); la etiqueta descriptiva (`Ingresos mensuales`) debe ser discreta y atenuada (`text-xs text-muted-foreground uppercase`).
* **Una sola familia tipográfica:** Usa una sola fuente neutra y sólida (Inter, Lato, Geist). Modula la jerarquía exclusivamente con peso, tamaño, espaciado entre letras (*letter-spacing* en mayúsculas) e interlineado (`line-height: 1.5 - 1.6` en párrafos).
* **Sombras Suaves Armonizadas (*Color Matching*):**
  * Prohibidas las sombras negras toscas con poco desenfoque (`rgba(0,0,0,0.5)`).
  * Usa radios de desenfoque grandes y opacidades muy bajas (4% - 8%).
  * Si la superficie tiene color (azul, lavanda, menta), la sombra debe llevar un matiz sutil de ese mismo color, nunca gris sucio.
* **Separación de capas:** Separa barras fijas (bottom navbars, headers) del contenido con un borde de 1 px (`border-gray-100`), un fondo contrastado o una sombra difuminada.

### 3. Psicología Cognitiva de Conversión (Persuasión Ética)
* **Smart Defaults:** Preselecciona el valor más habitual. El 70-90% de los usuarios confían en el default como una recomendación experta.
* **Efecto de Gradiente de Meta:** Nunca comiences al usuario en el 0% de progreso. Enmarca el registro o el primer paso como un 20% ya completado.
* **Principio de Reciprocidad:** Entrega valor real antes de pedir nada (un informe inicial útil con fallos identificados) antes de solicitar email o pago.
* **Efecto IKEA y Dotación:** Permite personalizar avatares, roles o completar una acción antes del registro (estrategia Duolingo). Salir de la app se sentirá como abandonar algo propio.
* **Aversión a la Pérdida:** El dolor de perder es el doble de potente que el placer de ganar. En retención, muestra lo que el usuario está a punto de perder con nombres específicos y una cuenta atrás.
* **Efecto de Contraste y Anclaje:** No presentes costes secundarios en solitario. Un seguro de \$50/mes presentado junto a un portátil de \$1,900 como *"Solo un 2.6%"* se percibe como insignificante.

### 4. Microcopia y Eliminación de Incertidumbre
* **Línea de tiempo en Paywalls:** No vendas características abstractas; explica cómo funciona la prueba:
  * `Hoy: Acceso total`
  * `Día 5: Te enviaremos un recordatorio antes del cobro`
  * `Día 7: Comienza el cobro (cancela cuando quieras)`
* **Transparencia en el Botón (CTA):** Incorpora el importe total y la frecuencia dentro del botón principal: `Añadir al carrito - $14.50` o `Reservar - 445€ total`.
* **Certeza Numérica:** `"Comienza en 2 toques"` vence a `"Registro rápido"`.
* **Elimina objeciones antes de que se formulen:** Añade micro-reaseguros directamente bajo la acción: *"Cancelación gratuita antes del 26 de marzo"*, *"Terceros testados"*, *"Sin compromiso"*.

### 5. Ergonomía Móvil y Zonas Seguras (Bottom Navigation)
* **Regla de 3 a 5 pestañas:** Nunca superes 5 o 6 destinos estructurales en la barra inferior.
* **Tap Target mínimo:** **44 × 44 px** para interacción táctil con el pulgar.
* **Respeto a la Safe Area:** Mantén siempre libres los **34 px inferiores** del *Home Indicator* (`pb-[env(safe-area-inset-bottom)]`).
* **Doble señal de estado activo:** Cambia al menos dos propiedades (icono de línea a relleno + color de acento + texto en negrita).
* **Badges de notificación:** Siempre con un borde de 1-2 px del color de fondo para separar el badge del icono.

### 6. Formularios, Entradas y Estados Vacíos
* **Momento vs. Dato:**
  * *Sliders / Ruedas táctiles:* Para configuraciones esporádicas de rangos cualitativos o estimaciones rápidas (edad, peso, radio de búsqueda).
  * *Inputs numéricos directos:* Para tareas repetitivas o valores de precisión contable/técnica (transferencias, macros nutricionales, puertos).
* **Reconocimiento sobre Recuerdo:** Usa avatares de contactos, logos de proveedores y chips seleccionables en lugar de exigir que el usuario escriba cadenas de texto de memoria.
* **Cero Estados Muertos (*Empty States*):** Nunca muestres `"No hay datos"`. Un estado vacío debe contener:
  1. Ilustración o icono contextual suave.
  2. Mensaje de valor positivo (`Comienza a organizar tus tareas`).
  3. Pauta formativa (`Invita a tu primer colaborador`).
  4. Botón de acción principal primario (`Crear nuevo elemento`).

---

## 🛠️ Flujo de Trabajo Operativo para el Agente

Cuando se te pida generar o revisar una pantalla:

1. **Fase de Inferencia:** Identifica el modelo mental del usuario (¿es compra por impulso, comparación analítica o tarea repetitiva?).
2. **Fase de Arquitectura:** Define la jerarquía visual respetando la malla de 8 pt/24 px y desacoplando el texto de las imágenes dinámicas.
3. **Fase de Componentes:** Genera componentes defensivos con Tailwind:
   * Estados de carga (Skeleton).
   * Estados vacíos accionables.
   * Botones enriquecidos con importes calculados en tiempo real.
   * Sombras teñidas suaves (`shadow-[0_10px_25px_-5px_rgba(...,0.08)]`).
4. **Fase de Revisión de Fricción:** Audita si algún paso puede eliminarse mediante un *Smart Default* o exponiendo el contenido directamente sin banners intermedios.
