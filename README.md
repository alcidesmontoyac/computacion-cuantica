# Introducción a la computación cuántica

Sitio de estudio en español del curso y el libro **Introducción a la computación
cuántica**, del **Centro de Excelencia en Computación Cuántica e Inteligencia
Artificial**, Departamento de Física — **Universidad Nacional de Colombia, Sede
Medellín**.

Aquí se reúnen, semana a semana: diapositivas, videos de YouTube, códigos de las
prácticas y ejercicios.

## Ver el sitio en línea

Una vez publicado: **https://alcidesmontoyac.github.io/computacion-cuantica/**
(cambia `alcidesmontoyac` por tu usuario si es otro).

## Editar y previsualizar en local

```bash
pip install -r requirements.txt
mkdocs serve        # abre http://127.0.0.1:8000
```

## Publicar

El sitio se publica solo: cada vez que haces `git push` a la rama `main`, el flujo
de GitHub Actions (`.github/workflows/deploy.yml`) reconstruye y publica en
GitHub Pages. La primera vez, en **Settings → Pages**, elige *Deploy from a
branch → gh-pages*.

## Cómo agregar una clase nueva (cada semana)

1. Copia `docs/curso/semana-02.md` como `docs/curso/semana-03.md` y edítala.
2. Sube el PDF de las diapositivas a `docs/assets/slides/`.
3. Pon el enlace del video de YouTube y del notebook de la práctica.
4. Agrega la línea de la semana en `mkdocs.yml` (sección `nav → Curso`).
5. `git add . && git commit -m "Semana 3" && git push`.

## Licencia

Contenido: CC BY-SA 4.0 · Código: MIT. Ver `LICENSE-CONTENIDO`.
