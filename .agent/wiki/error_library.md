# Error library (repo de skills)

## ERR-001 · nng: índice sin temas

- **Síntoma:** `update.py` terminó con «1750 artículos, 0 temas»; `temas.md` vacío.
- **Causa:** buscaba los enlaces `/topic/` antes de `.article-body`, pero NN/g los pinta en la barra lateral «Related Topics», después del cuerpo.
- **Fix:** extraer `a.ga-article-related-topic` de toda la página, más `#gaDataAllTopics` como etiquetas; aviso si ningún artículo trae temas.
- **Regla:** al raspar una web, comprobar el campo sobre la página real (posición en el HTML) y que el script falle en voz alta si un campo sale vacío en todo el lote.
