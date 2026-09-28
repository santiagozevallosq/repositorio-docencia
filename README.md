# Repositorio Docencia

Portal único (GitHub Pages) para consolidar los dashboards, simuladores y HTML interactivos usados en clase.

## Estructura

```
index.html              <- portal principal (lista todos los recursos)
recursos/
  <curso>/
    <nombre-recurso>/
      index.html
      css/, js/, ...
```

## Cómo agregar un recurso nuevo

1. Copia la carpeta del recurso (HTML + sus assets) dentro de `recursos/<curso>/<nombre-recurso>/`.
2. Abre `index.html` (raíz del repo) y agrega un objeto al array `RECURSOS`:

```js
{
  titulo: "Nombre del recurso",
  curso: "Nombre del curso",
  descripcion: "Qué hace, para qué sirve.",
  ruta: "recursos/<curso>/<nombre-recurso>/index.html"
}
```

3. Confirma que el recurso abre bien probando localmente o después de publicar.

## Publicar en GitHub Pages

1. `git init`, crear repo en GitHub, `git push`.
2. En GitHub: Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. El portal queda en `https://<usuario>.github.io/<repo>/`.

## Recursos incluidos

- **Matemáticas / Simulador de Ecuaciones e Inecuaciones Lineales (2x2)** — copiado desde el repo `simulador-inecuaciones` (que sigue publicado por separado en `https://santiagozevallosq.github.io/simulador-inecuaciones/`).
