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
- **Diseño de Negocios Digitales / Explorador del E-commerce en Perú** — plataforma pedagógica con KPIs de mercado, comportamiento del consumidor, tendencias, medios de pago (caso Yape) y cadena logística en Perú.
- **Diseño de Negocios Digitales / CRISP-DM Interactivo** — guía metodológica para minería de datos y proyectos analíticos con casos prácticos y taller de proyectos.
- **Recurso de Maestría / Simulador de Criptoanálisis de Ransomware y Detección con IA** — laboratorio interactivo de cifrado híbrido, cálculo de entropía de Shannon y telemetría defensiva.
- **Uso Personal / FinanceLab - Panel Financiero Interactivo** — dashboard financiero personal con carga de hojas de cálculo (Excel/CSV), desglose de gastos y guía didáctica de fórmulas.
- **Introducción a las Finanzas / InverTest - Test de Perfil de Inversión** — evaluación interactiva de aversión al riesgo y diagnóstico del perfil del inversionista con asignación de activos sugerida.
- **IA para Negocios / Atelier Aurum — Cotizador de Alta Joyería** — simulador de costos, manufactura, gemas y rentabilidad para piezas de lujo con exportación a proforma en PDF.
- **Recurso de Maestría / Laboratorio Visual de Redes Convolucionales (CNN)** — explorador visual de capas de convolución, cálculo matricial paso a paso, ReLU y max pooling interactivo.
- **Matemática Básica para Ciencias Políticas 1 / Simulador de Sistemas de Ecuaciones Lineales** — resolución algebraica determinista con KaTeX, graficación en canvas interactivo y métodos matriciales.
- **Uso Personal / Lanzador de Dados 3D y Estadísticas** — simulación interactiva con físicas y animaciones 3D para tiradas de dados y registro acumulado de resultados.
