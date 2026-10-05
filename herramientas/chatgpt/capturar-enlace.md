---
name: capturar-enlace
description: Registra noticias, curiosidades, casos de uso de IA, herramientas y otros enlaces en la hoja Biblioteca de enlaces. Ejecutar únicamente cuando Santiago escriba literalmente «@capturar-enlace» y adjunte al menos un URL en el mismo mensaje. No activar con enlaces sueltos ni con peticiones generales de resumir o analizar.
---

# Capturar enlace

## Activación estricta

- Ejecutar el flujo solo si el mensaje actual contiene literalmente `@capturar-enlace` y uno o más enlaces HTTP/HTTPS.
- Si falta la invocación exacta, no abrir, resumir ni registrar ningún enlace. Indicar brevemente que debe usar `@capturar-enlace <URL>`.
- Tratar el texto adicional del usuario como contexto: curso, uso personal, interés, enfoque o indicación para clasificar.

## Hoja de destino

- Usar siempre esta hoja de Google Sheets: [Biblioteca de enlaces](https://docs.google.com/spreadsheets/d/1-WRtF_lgHnkeUxifdiDY0Me0_Q3pIyUO_2BYZUIClws/edit).
- Registrar una fila por enlace, en la pestaña `Enlaces`, con estas columnas y este orden:
  1. ID
  2. Fecha de captura
  3. Enlace
  4. Título
  5. Fuente
  6. Fecha de publicación
  7. Tipo de contenido
  8. Categoría principal
  9. Etiquetas
  10. Uso previsto
  11. Curso o ámbito
  12. Resumen breve
  13. Idea para aprovecharlo
  14. Estado

## Procedimiento

1. Extraer todos los enlaces HTTP/HTTPS del mensaje. Conservar la URL original. Seguir redirecciones solo para identificar la página de destino; guardar la URL canónica final cuando sea verificable y conservar parámetros que parezcan necesarios para acceder al recurso.
2. Consultar la hoja antes de escribir y comprobar si cada URL ya está registrada. Comparar la URL final y la original, ignorando únicamente diferencias inocuas como una barra final. Si ya existe, no duplicar ni modificar la fila; informar al usuario y continuar con los demás enlaces.
3. Abrir la fuente enlazada y extraer título, organización o sitio fuente, fecha de publicación si aparece, género del contenido y hechos centrales. No inferir una fecha ausente. Resumir la página enlazada, no solo el título ni un fragmento de buscador. Si la página no carga, está bloqueada o es un video sin transcripción, dejar claro el límite en `Resumen breve` y no inventar detalles.
4. Elegir una categoría principal de la lista del catálogo, el tipo de contenido, el uso previsto y el curso o ámbito. Usar el contexto del usuario cuando lo dé. Si no lo da, inferir con prudencia a partir del enlace y de la información disponible; usar `Referencia futura` o `Por definir` cuando la intención no sea clara. Mantener las etiquetas breves y separarlas con punto y coma.
5. Escribir un resumen de 2 a 4 oraciones, claro y neutral. Proponer una idea práctica para una clase, actividad, demostración, discusión o uso personal, según corresponda. Diferenciar hechos de la fuente de la propuesta de uso.
6. Asignar el siguiente identificador correlativo `ENL-0001`, `ENL-0002`, etc., a partir del ID numérico más alto existente. No reutilizar IDs.
7. Usar la fecha actual de `America/Lima` como fecha de captura. Guardar fechas como valores de fecha de Google Sheets cuando la API lo permita; dejar la fecha de publicación vacía si no se puede verificar.
8. Añadir las filas nuevas a la pestaña `Enlaces` sin reemplazar celdas existentes. Usar la herramienta de edición de Google Sheets conectada disponible en la sesión, como `google_drive_batch_update_spreadsheet` con `appendCells` para `sheetId` de la pestaña `Enlaces`. Usar `userEnteredValue` para las celdas y respetar el orden de columnas. Para una celda de fecha, usar el serial de fecha de Sheets y no una frase textual cuando sea posible. Establecer `Estado` como `Por revisar`.
9. Leer de nuevo las filas añadidas para verificar que URL, orden de columnas e ID sean correctos. Si la escritura falla, no afirmar que el enlace quedó guardado; explicar el problema y mostrar la información preparada en la conversación.
10. Confirmar cada enlace registrado con título, categoría y uso previsto, e incluir el enlace a la hoja. Mencionar enlaces repetidos o inaccesibles.

## Catálogo inicial

- **Tipo de contenido:** Noticia; Curiosidad; Caso de uso; Herramienta; Tutorial; Investigación; Opinión; Recurso; Otro.
- **Categoría principal:** IA generativa; IA en educación; Ciencia de datos; Innovación digital y negocios; Economía y políticas públicas; Docencia y aprendizaje; Tecnología y productividad; Cultura y curiosidades; Desarrollo personal; Otro.
- **Uso previsto:** Ejemplo o caso para clase; Actividad o debate; Actualizar contenidos; Investigación o consulta; Contenido para redes; Uso personal; Referencia futura.
- **Estado inicial:** Por revisar. Cambiarlo solo si Santiago indica que revisó, utilizó o archivó el enlace.
- Añadir temas secundarios, herramientas, curso, audiencia, país o formato en `Etiquetas`, sin crear una categoría principal nueva por cada caso.

## Formato de uso

`@capturar-enlace https://sitio.com/articulo — Guárdalo para mi curso de Diseño de Negocios Digitales; podría servir como caso práctico.`

Se pueden enviar varios enlaces después de una sola invocación. Crear una fila por URL y aplicar las mismas reglas a cada una.