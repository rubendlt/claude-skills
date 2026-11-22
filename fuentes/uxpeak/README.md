# UX Peak Agentic Design Skill (`uxpeak-agentic-ux`)

> 🧠 **Sistema de heurísticas de UX/UI, optimización de conversión (CRO) y psicología cognitiva para Agentes de IA y desarrolladores de producto.**

Basado en las lecciones, análisis de A/B testing y rediseños de nivel Staff del canal **[@uxpeak](https://www.youtube.com/@uxpeak)**.

---

## 🚀 ¿Qué es esta Skill?

Esta skill dota a cualquier agente de inteligencia artificial (Antigravity, Claude Code, Cursor, Codex, etc.) de un marco de decisión de diseño de alto nivel:
* **Más allá de "hacerlo bonito":** Enfocado en la psicología de la decisión del usuario, reducción de fatiga cognitiva y aumento de la tasa de conversión.
* **Heurísticas aplicadas a código:** Pautas directas para la generación de componentes en React, Vue, Tailwind CSS, layouts móviles y flujos de onboarding.
* **Auditoría de interfaces:** Detección de antipatrones (textos flotando sobre imágenes sin contenedor, rangos de precio ambiguos, estados vacíos sin llamada a la acción, etc.).

---

## 📂 Estructura del Repositorio

```text
├── SKILL.md    # Todos los tips, agrupados por tipo (conversión, confianza, copy, layout, formularios…)
└── README.md
```

---

## 🛠️ Instalación en Antigravity / Tu Proyecto

### Opción 1: Clonar directamente en tu proyecto existente
Para que Antigravity o cualquier agente detecte la skill en tu espacio de trabajo:

```bash
cd /ruta/a/tu/proyecto
git clone https://github.com/rubendlt/uxpeak-agentic-ux.git .claude/skills/uxpeak-agentic-ux
```

### Opción 2: Uso como repositorio raíz
Si abres este repositorio como tu workspace activo, la skill estará disponible de inmediato bajo el nombre `uxpeak-agentic-ux`.

---

## 🌟 Resumen de Heurísticas Clave

1. **Smart Defaults (Valores Predeterminados Inteligentes):** Entre el 70% y el 90% de los usuarios no cambian los valores por defecto. Úsalos como recomendaciones expertas.
2. **Gradiente de Meta (Goal Gradient Effect):** Nunca inicies un onboarding en 0%. Enmarca el registro como un 20% ya completado para crear impulso psicológico.
3. **Métrica > Etiqueta:** En cuadros de mando, el número relevante debe dominar visualmente (`text-3xl font-bold`); la etiqueta debe ser secundaria y pequeña.
4. **Líneas de Tiempo en Paywalls:** Explica con claridad la prueba gratuita (`Hoy -> Día 5 recordatorio -> Día 7 primer cobro`). Disipa el miedo a cobros ocultos.
5. **Ergonomía Móvil (Bottom Navigation):** Máximo 5 pestañas, área de toque mínima de 44x44 px y respeto total a los 34 px de zona segura del *Home Indicator*.
6. **Sombras con Color-Matching:** Armoniza el color de la sombra con el tono de fondo del contenedor, eliminando sombras grises o negras sucias.

---

## 📚 Documentación Completa

Todo está en [`SKILL.md`](./SKILL.md), ordenado por el problema que resuelve cada tip; las fuentes (IDs de los 13 vídeos) van al final.
