# Repositorio Docencia

Portal único (GitHub Pages) para consolidar los dashboards, simuladores y HTML interactivos usados en clase.

## Estructura

```
index.html              <- portal principal (Simuladores, Apps, Prompts y Caja de Herramientas)
recursos/                <- aplicaciones web interactivas
  <curso>/<nombre-recurso>/index.html
prompts/                 <- biblioteca de prompts pedagógicos
  <curso>/<nombre-prompt>.md
herramientas/             <- system prompts de Tools, GEMs o GPTs propios
  <plataforma>/<nombre-herramienta>.md
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

## Cómo agregar una herramienta nueva a la Caja de Herramientas

1. Guarda el system prompt limpio (sin la conversación de la IA que lo generó) en `herramientas/<plataforma>/<nombre-herramienta>.md`.
2. Abre `index.html` (raíz del repo) y agrega un objeto al array `HERRAMIENTAS`:

```js
{
  id: "identificador-unico",
  titulo: "Nombre de la Tool/GEM/GPT",
  categoria: "Plataforma (ej. Google Flow, GPTs, Gemini Gems)",
  tipo: "Tool" | "GEM" | "GPT",
  descripcion: "Qué hace y cómo funciona.",
  textoPrompt: `...system prompt completo...`
}
```

3. Si la plataforma es nueva, agrega su color en `CATEGORIA_STYLES`.

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
- **Uso Personal / ¡Hebi-Chan! - Anime Snake Adventure** — juego de la serpiente (Snake) con estética anime en Canvas, efectos y multiplicadores de velocidad.
- **Uso Personal / Misión Espacial - Arcade de Supervivencia** — juego arcade de combate espacial 2D, esquiva de meteoritos, recolección de energía y mejoras.
- **Uso Personal / Super Mario Bros Canvas** — recreación retro completa en HTML5 Canvas con salto calibrado, bloques interactivos, sonido 8-bit, Goombas y meta final.
- **Uso Personal / Calculadora de Notas Universitarias** — simulador de promedios ponderados y nota requerida para aprobación académica.
- **Introducción a las Finanzas / Calculadora Financiera Estudiantil** — gestión de presupuestos personales, categorización de gastos y metas de ahorro para universitarios.
- **Introducción a las Finanzas / Simulador de Anualidades Vencidas y Anticipadas** — calculadora interactiva de valor futuro y presente con tablas de evolución y comparación de regímenes.
- **Matemática Básica para Ciencias Políticas 1 / La Función de Producción: Fenómenos Económicos y Sociales** — Cobb-Douglas, giro conceptual hacia bienestar e inversión pública, estimación econométrica MCO en modelos log-log y simulador de elasticidades de pobreza.
- **Uso Personal / VelociRead — Lector de Lectura Veloz (RSVP)** — entrenamiento visual serial con fijación en el punto óptimo de reconocimiento (ORP), control de ritmo PPM y evaluación de comprensión con opción de IA / motor heurístico.
- **Recurso de Maestría / Simulador de 4 Reinas con Look-Back (Backjumping CSP)** — laboratorio interactivo de satisfacción de restricciones con tracking de Conflict Sets, depuración paso a paso y poda eficiente frente al backtracking tradicional.
- **[Prompt] IA para Negocios / Fotografía de Producto & Escenas Hiperrealistas** — directivas fotográficas avanzadas para Midjourney v6, Imagen 3 y DALL-E 3 con control de iluminación, óptica y textura.
- **[Prompt] Diseño de Negocios Digitales / Tutor Analista de Propuesta de Valor** — asistente socrático para análisis del *Value Proposition Canvas* en Claude 3.5 y GPT-4o.
- **[Herramienta] Google Flow / Comunicado Pro — Generador de Avisos para Administradores de Edificios** — system prompt de una Tool de dos columnas que convierte un formulario en un flyer terminado y un mensaje de WhatsApp, con adherencia estricta al formato y a la imagen de referencia.
