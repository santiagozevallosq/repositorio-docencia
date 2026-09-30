---
name: visualizador-docente-interactivo
description: "Activar cuando el usuario quiera conversar, diseñar, construir o publicar un recurso docente interactivo a partir de un concepto, sección, ejemplo, fórmula, gráfico, proceso o ejercicio de los materiales de clase."
---

# Visualizador Docente Interactivo

Convierte una idea docente concreta en una experiencia web interactiva lista para clase y, cuando el usuario lo indique, la publica en su repositorio de GitHub Pages.

## Principio central

El flujo empieza con una **conversación de diseño**, no con código. El usuario suele detectar personalmente qué parte de una PPT o material merece una visualización. Respeta esa decisión y úsala como punto de partida.

No conviertas toda una PPT en una app salvo que el usuario lo pida. No programes mientras todavía están explorando la idea, excepto si el usuario dice explícitamente que avances de frente.

## Flujo de trabajo

### 1. Ubicar y entender el material
- Usa el material adjunto o búscalo en las fuentes conectadas que el usuario haya autorizado.
- Lee solo lo necesario para comprender fielmente el concepto elegido.
- Si el usuario aún no eligió el concepto y pide ayuda, propón como máximo 3 oportunidades de visualización bien justificadas.
- No inventes cifras, fórmulas, resultados o afirmaciones que no estén en la fuente.

### 2. Conversar la idea
Antes de programar, ayuda a aterrizar qué experiencia tendría sentido.

Explica brevemente:
- qué vería el estudiante al abrir el recurso;
- qué podría manipular o explorar;
- qué gráficos, paneles, controles o escenas aparecerían;
- qué insight debería descubrir;
- si sería mejor un dashboard, simulador, explorador, comparación, reto, recorrido guiado u otro formato.

Cuando haya varias alternativas razonables, presenta 2 o 3 opciones claramente distintas. Si el usuario ya tiene una idea fuerte, profundiza esa idea en vez de desviarlo.

### 3. Mostrar una propuesta de estructura visual
Antes del código, cuando aporte valor, describe una maqueta conceptual sencilla del recurso. Ejemplo:
- encabezado o pregunta central;
- panel principal;
- controles;
- visualización reactiva;
- bloque de interpretación;
- takeaway final.

La meta es que el usuario pueda imaginar **cómo se armará** el dashboard, visualizador o simulador antes de generarlo.

### 4. System prompt: opcional, no obligatorio
El usuario a veces quiere ver el system prompt y a veces no.

- Si lo pide explícitamente, muéstralo antes de construir.
- Si el recurso es complejo, novedoso, tiene varias reglas pedagógicas o depende de una lógica delicada, sugiere brevemente que puede ser útil revisar el system prompt y muéstralo si el usuario acepta o si ya pidió verlo.
- Para recursos simples, no añadas un system prompt innecesario.
- Si se muestra, debe ser limpio, reutilizable y orientado a la construcción del recurso; no incluyas conversación sobrante.
- No conviertas el system prompt en un requisito para continuar.

### 5. Punto de transición a construcción
Cuando la idea esté suficientemente definida, haz explícito el cambio de etapa con una frase natural, por ejemplo:
“Con esta estructura ya definida, ahora sí voy a construir el recurso completo y dejarlo listo para publicar.”

Si el usuario ya pidió “genera y publica”, no vuelvas a pedir aprobación.

### 6. Construir el recurso final
- Entrega una miniaplicación web real, no solo un prompt ni una maqueta.
- Prefiere un único `index.html` con HTML, CSS y JavaScript embebidos cuando sea suficiente.
- Separa archivos solo si mejora claramente la mantenibilidad.
- Usa dependencias externas únicamente cuando aporten valor real. Plotly es apropiado para gráficos interactivos cuando haga falta.
- No uses Gemini Canvas como paso obligatorio: genera directamente el recurso web final.

### 7. Estilo docente del usuario
- Diseño claro, limpio, didáctico y contemporáneo.
- Poco texto por pantalla.
- Jerarquía visual evidente.
- Controles grandes y legibles al proyectarse.
- Responsive, priorizando laptop/proyector.
- Colores con función pedagógica.
- Interacciones que expliquen, no animaciones decorativas.
- Lenguaje accesible para estudiantes universitarios no especialistas cuando corresponda.

### 8. Interacción pedagógica real
Siempre que encaje, estructura la experiencia como:
**observa → manipula → compara → interpreta → concluye**.

Escoge un patrón apropiado, como exploración guiada, comparación, simulación o reto, según el concepto y el aprendizaje esperado.

### 9. Validación antes de publicar
Comprueba:
- carga sin errores;
- controles, sliders, filtros y botones funcionan;
- cálculos correctos;
- contenido fiel al material;
- interfaz legible;
- takeaway claro;
- no hay inferencias pedagógicas engañosas ni causalidad atribuida sin sustento.

## Publicación en GitHub

El repositorio docente principal es:
`santiagozevallosq/repositorio-docencia`

Es un repositorio público con GitHub Pages habilitado y rama principal `main`.

### Convención real del repositorio
Los recursos web se guardan en:
`recursos/<curso>/<nombre-recurso>/index.html`

El portal principal está en:
`index.html` de la raíz.

Al publicar un recurso nuevo:
1. Revisa la estructura existente del curso dentro de `recursos/`.
2. Elige un slug breve y consistente para `<nombre-recurso>`.
3. Crea el recurso en `recursos/<curso>/<nombre-recurso>/index.html`.
4. Actualiza el array `RECURSOS` del `index.html` raíz agregando:
   - `titulo`
   - `curso`
   - `descripcion`
   - `ruta`
5. Verifica que la ruta y el recurso creado existan.
6. Si GitHub Pages refleja el cambio, devuelve el enlace público verificable.

Publica únicamente en el repositorio docente que el usuario indique.

### System prompts y prompts reutilizables
Si el usuario pide guardar un system prompt como artefacto reusable del portal, usa:
- `prompts/<curso>/<nombre-prompt>.md` para prompts pedagógicos;
- `herramientas/<plataforma>/<nombre-herramienta>.md` para system prompts de Tools, GEMs o GPTs.
No guardes estos archivos por defecto; solo cuando él lo pida o cuando sea parte explícita del recurso.

### Política de despliegue
- Si el usuario pide solo discutir o diseñar, no escribas en GitHub.
- Si pide “genera”, crea el recurso pero no publiques si no se solicitó despliegue.
- Si pide “genera y publica”, continúa hasta escribir en GitHub, actualizar el portal y verificar los cambios.
- Si pide actualizar un recurso existente, modifica ese recurso y conserva su ruta cuando sea razonable.
- No sobrescribas recursos ajenos.

## Entrega según etapa
- **Ideación:** ideas y estructura, sin código.
- **Diseño:** explicación de cómo se verá y funcionará; system prompt solo si corresponde.
- **Construcción:** recurso HTML funcional.
- **Publicación:** recurso + actualización del portal + enlace de GitHub Pages verificable cuando esté disponible.

## Ejemplos
- “Quiero trabajar correlación vs. causalidad de la clase 7. Veamos una idea.”
- “Muéstrame cómo se vería antes de programarlo.”
- “Este sí es complejo: enséñame el system prompt.”
- “Ya está claro; genera el HTML.”
- “Genera y publícalo en mi repositorio docente.”
