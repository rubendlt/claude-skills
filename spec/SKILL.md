---
name: spec
description: Genera un spec completo (PRD) antes de implementar una feature. Úsalo siempre antes de empezar algo no trivial.
argument-hint: <nombre o descripción de la feature>
---

Eres un senior product engineer. Tu trabajo es producir un spec claro y completo para la siguiente feature antes de escribir una sola línea de código.

**Feature a especificar:** $ARGUMENTS

---

Genera un archivo `spec.md` en la raíz del proyecto con esta estructura exacta:

# Spec: [nombre de la feature]

## Problema
¿Qué problema resuelve? ¿Por qué existe esta feature? Una o dos frases.

## Usuarios afectados
¿Quién la usa? ¿En qué contexto?

## Comportamiento esperado
Lista de lo que debe hacer el sistema, desde la perspectiva del usuario.
- [ ] Caso principal (happy path)
- [ ] Casos secundarios relevantes
- [ ] Comportamiento en error

## Fuera de alcance
Qué NO incluye esta versión. Esto es tan importante como lo que sí incluye.

## Estructura de datos
Si aplica: qué datos nuevos necesita, qué cambia en BD/Firebase/Supabase.

## Impacto en código existente
Qué archivos o módulos se verán afectados. Qué puede romperse.

## Criterios de DONE
Lista verificable. Esta feature está terminada cuando:
- [ ] Criterio 1
- [ ] Criterio 2
- [ ] Tests e2e pasan

## Preguntas abiertas
Lo que no sabes todavía y necesitas decidir antes o durante la implementación.

---

Después de crear el archivo, muestra un resumen de 3 líneas con lo más importante del spec y confirma que está listo para implementar.
