---
name: influencer-realista
description: Usa esta skill cuando el usuario quiera crear prompts para fotografías realistas, hiperrealistas o espontáneas de influencers digitales, creadores de contenido, profesionales o personajes humanos para redes sociales. También debe activarse cuando el usuario quiera mantener la identidad visual de un personaje en diferentes escenas, crear selfies, fotografías lifestyle, editoriales, documentales, corporativas o imágenes que parezcan tomadas con un celular.
metadata:
  author: Santiago
  version: "1.0"
---

# Influencer Realista

## Objetivo

Crear prompts profesionales para generar fotografías convincentes de influencers digitales, evitando la apariencia de render 3D, piel plástica, iluminación artificial, poses rígidas y composiciones excesivamente perfectas.

La imagen debe parecer una fotografía real capturada por una cámara o teléfono, no una ilustración creada por inteligencia artificial.

## Principio central

El realismo no se consigue acumulando palabras como:

- ultrarrealista
- 8K
- obra maestra
- alta calidad
- perfecta

El realismo se consigue mediante coherencia entre:

1. identidad del personaje;
2. comportamiento de la cámara;
3. física del lente;
4. dirección de la luz;
5. acción del personaje;
6. lógica del entorno;
7. imperfecciones fotográficas plausibles;
8. sensación de momento real.

Antes de escribir el prompt, define cómo debe comportarse la fotografía. Después describe el personaje y la escena.

---

# Flujo de trabajo

## Paso 1. Identificar el tipo de solicitud

Determina cuál de estas situaciones corresponde:

### A. Creación inicial del influencer

El usuario todavía no tiene un personaje definido.

En este caso, solicita o propone:

- edad aproximada;
- género o apariencia;
- nacionalidad o contexto cultural;
- actividad profesional;
- personalidad;
- características físicas;
- estilo de ropa;
- público al que se dirige;
- plataforma principal;
- estilo visual deseado.

Después crea una Ficha Maestra del Personaje.

### B. Personaje existente descrito por texto

El usuario ya ha definido al influencer anteriormente.

Conserva todos los rasgos permanentes y modifica solamente:

- actividad;
- escenario;
- vestimenta, cuando sea solicitado;
- expresión;
- iluminación;
- composición.

### C. Personaje basado en una imagen de referencia

Cuando el usuario adjunte una fotografía, úsala como referencia principal de identidad.

Indica en el prompt:

- conservar la estructura facial;
- conservar la edad aparente;
- conservar el tono y textura natural de piel;
- conservar las proporciones corporales;
- evitar embellecimiento automático;
- evitar cambios de identidad.

No afirmes que la consistencia será perfecta. Recomienda reutilizar siempre la misma imagen de referencia.

### D. Fotografía individual

Genera un prompt completo para una escena.

### E. Serie de fotografías

Primero fija el bloque permanente de identidad. Después crea un prompt por escena, manteniendo constantes los rasgos del personaje.

---

# Paso 2. Crear la Ficha Maestra del Personaje

Cuando sea necesario crear al influencer desde cero, entrega una ficha con esta estructura:

## Identidad

- nombre ficticio;
- edad aparente;
- nacionalidad o contexto cultural;
- profesión o nicho;
- personalidad visual.

## Rasgos faciales permanentes

- forma del rostro;
- tono de piel;
- textura de piel;
- color y forma de ojos;
- forma de cejas;
- nariz;
- labios;
- cabello;
- barba, cuando corresponda;
- rasgo distintivo.

## Rasgos corporales

- contextura;
- altura aparente;
- postura habitual;
- proporciones generales.

## Estilo personal

- tipo de ropa;
- colores habituales;
- accesorios;
- nivel de formalidad.

## Rasgos que nunca deben cambiar

Resume en una sola línea los elementos que deben mantenerse en todas las escenas.

No cambies estos rasgos salvo que el usuario lo solicite expresamente.

---

# Paso 3. Seleccionar el tipo de realismo

Clasifica la imagen en uno de estos modos:

## Modo 1. Editorial realista

Usar cuando la imagen debe ser profesional, elegante o publicitaria.

Características:

- composición intencional;
- iluminación controlada;
- lente profesional;
- textura natural de piel;
- retoque mínimo;
- imperfecciones sutiles;
- fondo cuidadosamente diseñado;
- apariencia de sesión fotográfica real.

## Modo 2. Lifestyle natural

Usar para fotografías de redes sociales, cafeterías, oficinas, viajes y actividades cotidianas.

Características:

- composición relajada;
- luz natural;
- postura no rígida;
- fondo con objetos cotidianos;
- expresión espontánea;
- fotografía aparentemente tomada por otra persona.

## Modo 3. Smartphone espontáneo

Usar cuando la imagen debe parecer tomada rápidamente con un teléfono.

Características:

- encuadre imperfecto;
- perspectiva ligeramente angular;
- exposición desigual;
- detalle moderado;
- objetos parcialmente cortados;
- fotografía casual;
- ligera textura digital;
- sensación improvisada.

## Modo 4. Flash nocturno

Usar para fiestas, calles, restaurantes, bares, estaciones de servicio o escenas nocturnas.

Características:

- flash directo de cámara;
- altas luces parcialmente quemadas;
- sombras profundas;
- fondo oscuro;
- grano visible;
- color irregular;
- gesto capturado a medias;
- sensación accidental.

## Modo 5. Documental

Usar cuando la fotografía debe mostrar al influencer trabajando o interactuando con un entorno real.

Características:

- cámara observacional;
- personaje concentrado en una actividad;
- mirada frecuentemente fuera de cámara;
- entorno visible;
- luz disponible;
- mínima intervención estética;
- sensación de momento auténtico.

## Modo 6. Selfie realista

Características:

- cámara frontal o teléfono sostenido en la mano;
- ligera distorsión de lente;
- brazo o mano parcialmente visible;
- encuadre cercano;
- fondo cotidiano;
- expresión relajada;
- procesamiento típico de smartphone sin exceso de belleza.

Selecciona automáticamente el modo más apropiado cuando el usuario no lo indique.

---

# Paso 4. Construir el prompt en bloques

Todos los prompts deben seguir este orden.

## Bloque 1. Cámara y comportamiento fotográfico

Define:

- dispositivo o tipo de cámara;
- lente o perspectiva;
- altura y ángulo;
- distancia al personaje;
- profundidad de campo;
- estabilidad de cámara;
- tipo de encuadre;
- exposición;
- textura fotográfica;
- orientación y relación de aspecto.

Ejemplos:

- raw handheld smartphone photograph;
- eye-level camera;
- slightly wide main-camera perspective;
- 35mm documentary lens;
- 50mm natural perspective;
- 85mm portrait lens;
- shallow but realistic depth of field;
- subtle digital grain;
- slight motion softness;
- imperfect off-center framing.

No combines propiedades incompatibles.

## Bloque 2. Iluminación

La iluminación debe indicar:

- fuente;
- dirección;
- intensidad;
- temperatura;
- sombras;
- reflejos;
- comportamiento sobre la piel;
- relación con el entorno.

Evita descripciones vagas como “luz bonita” o “luz suave”.

Ejemplo:

Soft daylight entering from a window on the left, creating brighter highlights on one side of the face and gentle natural shadows on the opposite cheek.

## Bloque 3. Personaje

Usa esta fórmula:

Personaje + acción o estado + detalle clave.

Describe:

- identidad permanente;
- vestimenta;
- postura;
- acción;
- dirección de la mirada;
- expresión;
- interacción con objetos.

Mantén esta sección clara y literal.

## Bloque 4. Escena

Usa esta fórmula:

Superficie o ubicación + fondo + elementos cotidianos + detalle atmosférico.

Incluye únicamente elementos relevantes para la historia.

Los fondos deben parecer habitados y funcionales. Pueden incluir:

- cables;
- libretas;
- tazas;
- personas desenfocadas;
- mobiliario usado;
- objetos parcialmente visibles;
- reflejos;
- texturas reales;
- pequeños desórdenes.

Evita llenar la escena de objetos innecesarios.

## Bloque 5. Imperfecciones realistas

Selecciona solamente las imperfecciones apropiadas para la escena.

### Imperfecciones humanas

- visible natural skin texture;
- subtle pores;
- slight under-eye shadows;
- small expression lines;
- a few loose strands of hair;
- natural facial asymmetry;
- realistic fabric folds;
- minor variations in skin tone.

### Imperfecciones fotográficas

- slightly uneven exposure;
- subtle sensor noise;
- mild digital grain;
- slight motion blur;
- minor edge softness;
- reflections from nearby surfaces;
- partially cropped objects;
- slight smartphone lens distortion;
- imperfect framing.

### Imperfecciones del momento

- caught mid-smile;
- looking briefly away from the camera;
- shifting body weight;
- adjusting clothing;
- turning toward someone outside the frame;
- expression captured between moments;
- not deliberately posing.

No introduzcas deformaciones anatómicas como una forma de realismo.

## Bloque 6. Sensación final

Describe cómo debe sentirse la fotografía.

Ejemplos:

- feels spontaneous and unplanned;
- feels like a photograph captured by a friend;
- authentic everyday social media photograph;
- intimate documentary moment;
- polished but minimally retouched editorial portrait;
- candid moment captured quickly.

## Bloque 7. Restricciones

Incluye una lista breve y específica.

Usa, cuando corresponda:

- avoid plastic skin;
- avoid excessive beautification;
- avoid perfect facial symmetry;
- avoid artificial glow;
- avoid exaggerated cinematic lighting;
- avoid excessive bokeh;
- avoid overly clean backgrounds;
- avoid 3D-render appearance;
- avoid rigid posing;
- avoid duplicate objects;
- avoid distorted hands;
- avoid unreadable prominent text.

No conviertas el bloque negativo en la parte dominante del prompt.

---

# Paso 5. Preguntas al usuario

No hagas un interrogatorio extenso.

Cuando falte información esencial, formula como máximo cinco preguntas:

1. ¿Cómo es el influencer o utilizarás una imagen de referencia?
2. ¿Qué está haciendo?
3. ¿Dónde se encuentra?
4. ¿Qué tipo de fotografía buscas?
5. ¿Qué formato necesitas?

Cuando sea posible inferir datos razonables, propón valores predeterminados y continúa.

Si el usuario pide rapidez, crea el prompt usando supuestos explícitos.

---

# Paso 6. Formato de salida

Entrega los resultados de la siguiente manera:

## Concepto visual

Resume la idea en dos o tres líneas.

## Prompt principal

Entrega el prompt final en inglés, porque generalmente ofrece buen control técnico en modelos de imagen.

Usa párrafos separados para:

1. cámara;
2. iluminación;
3. personaje;
4. escena;
5. imperfecciones;
6. sensación;
7. restricciones;
8. formato.

## Versión en español

Inclúyela solamente cuando el usuario la solicite.

## Elementos permanentes

Indica qué elementos deben mantenerse para conservar la identidad.

## Variables modificables

Indica qué puede cambiar sin afectar la identidad:

- ropa;
- ubicación;
- actividad;
- iluminación;
- composición;
- accesorios.

## Recomendación técnica

Añade una recomendación breve relacionada con:

- imagen de referencia;
- relación de aspecto;
- tipo de generación;
- consistencia entre imágenes;
- variable que conviene probar.

---

# Reglas de calidad

Antes de entregar el prompt, comprueba:

1. ¿La cámara es coherente con el tipo de imagen?
2. ¿La luz tiene una fuente identificable?
3. ¿El personaje realiza una acción concreta?
4. ¿La expresión parece natural?
5. ¿El entorno tiene lógica espacial?
6. ¿Las imperfecciones son plausibles?
7. ¿El personaje conserva su identidad?
8. ¿El resultado evita la estética de render?
9. ¿El formato está indicado?
10. ¿El prompt contiene contradicciones?

Si detectas contradicciones, corrígelas antes de responder.

---

# Reglas de consistencia

Cuando se produzca una serie:

- reutiliza literalmente el bloque de identidad;
- conserva edad, rostro, cabello y proporciones;
- modifica una variable principal por prueba;
- usa la misma imagen de referencia cuando esté disponible;
- no cambies simultáneamente lente, luz, ropa, escenario y estilo;
- identifica claramente las variables permanentes y variables de escena.

---

# Casos especiales

## Fotografía corporativa

Mantén una apariencia profesional, pero evita:

- sonrisa exagerada;
- postura rígida;
- oficina futurista genérica;
- luces de neón innecesarias;
- piel excesivamente retocada.

## Fotografía para Instagram

Debe sentirse atractiva pero creíble:

- composición clara;
- actividad cotidiana;
- iluminación natural;
- fondo reconocible;
- edición moderada.

## Fotografía nocturna casual

Prioriza:

- flash directo;
- fondo oscuro;
- exposición irregular;
- grano moderado;
- encuadre impreciso;
- interacción espontánea.

## Imagen publicitaria

Puede ser más controlada, pero debe conservar:

- textura de piel;
- materiales reales;
- sombras coherentes;
- proporciones anatómicas;
- retoque moderado.

## Texto dentro de la imagen

Evita texto salvo que el usuario lo solicite. Cuando lo solicite, mantenlo breve y claramente ubicado.

---

# Ejemplo de uso

## Solicitud

Crea un prompt de un influencer peruano de tecnología trabajando de noche en su departamento. Debe parecer una foto casual para Instagram.

## Resultado esperado

### Concepto visual

Fotografía lifestyle nocturna de un creador de contenido trabajando desde casa, capturada de manera espontánea con un teléfono.

### Prompt principal

Raw handheld smartphone photograph taken at night, slightly wide main-camera perspective, eye-level angle, imperfect off-center framing, mild digital grain and subtle edge softness. Vertical 9:16 composition.

Warm light from a small desk lamp mixes naturally with the cooler light emitted by the laptop screen, creating slight color inconsistency, brighter highlights on one side of the face and soft shadows across the room.

A 28-year-old Peruvian male technology content creator with short textured black hair, warm brown eyes, natural facial asymmetry, visible skin texture and subtle under-eye shadows. He wears a dark green sweatshirt over a white T-shirt and sits at his desk working on a laptop, turning briefly toward someone outside the frame with an unfinished smile rather than deliberately posing.

A lived-in apartment workspace with notebooks, a charging cable, a half-finished coffee and part of the chair cropped by the frame. Ordinary household objects are visible at different depths, with no artificial studio decoration.

Natural pores, minor variations in skin tone, realistic fabric folds, a few loose hairs, slightly uneven exposure and subtle digital noise.

The photograph feels spontaneous, personal and captured quickly by a friend during a real late-night work session.

Avoid plastic skin, excessive beautification, perfect facial symmetry, artificial glow, luxury studio lighting, exaggerated bokeh, overly polished advertising aesthetics and 3D-render appearance.