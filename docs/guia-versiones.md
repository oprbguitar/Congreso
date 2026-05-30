# Guía local de versiones

## Versión 1

La V1 construyó una visualización offline del Congreso Bicameral Perú 2026 con React + Vite. Usó `busqueda.md` como fuente principal, mostró 60 senadores y 130 diputados en hemiciclos interactivos, barras por partido, filtros y una sección normativa con enlaces a ONPE, Ley 31988 y reglamentos bicamerales.

## Versión 2

La V2 rediseña la experiencia siguiendo los prototipos `proto 1.png` y `proto 2.png`.

Cambios principales:

- Pantalla inicial más parecida a un tablero electoral: métricas superiores, filtros compactos, hemiciclos grandes y panel de candidato destacado.
- Vista de facultades detalladas del Senado y la Cámara de Diputados.
- Fotos locales de candidatos tomadas desde Revisa Tu Candidato/JNE.
- Fichas ampliadas con información de `detalle nuevo congreso.md`.
- Pestañas de hoja de vida extraídas desde la ficha individual de Revisa Tu Candidato: educación y títulos, trayectoria política, contratos con el Estado, propiedades declaradas, deudas y obligaciones, sanciones y experiencia profesional.
- Documentación de imágenes faltantes y discrepancias entre fuentes.

## Tecnología

- React 19
- Vite 7
- TypeScript
- Lucide React
- GitHub Actions para publicar en GitHub Pages

## Fuentes

- `busqueda.md`: nómina local prioritaria para la visualización persona por persona.
- `detalle nuevo congreso.md`: perfiles, lectura analítica y límites de trazabilidad.
- Revisa Tu Candidato: fotografías, datos tabulados de hoja de vida y distribución provisional al 17 de mayo de 2026.
- ONPE, Congreso y Ley 31988: estructura bicameral y marco normativo.

## Datos tabulados V2

La capa `src/data/candidateDetails.ts` contiene 188 fichas vinculadas con seguridad. Cada ficha guarda el enlace RTC, DNI, edad cuando aparece en el modal, postulación y las siete secciones tabuladas. Los dos registros sin coincidencia segura se mantienen con avatar y sin ficha RTC ampliada; ver `docs/imagenes-faltantes-v2.md`.

La información se almacena localmente para que GitHub Pages y el servidor casero carguen la visualización sin depender de peticiones externas durante la navegación.

## Discrepancias documentadas

La app conserva la nómina local de 190 representantes como fuente principal. Revisa Tu Candidato muestra una distribución provisional distinta en algunos partidos de Diputados, por ejemplo Fuerza Popular y Ahora Nación. Esa diferencia queda documentada y no se mezcla silenciosamente en los datos locales.

## Publicación

El sitio se publica en:

https://oprbguitar.github.io/TestApp/

El workflow `.github/workflows/pages.yml` valida datos, compila con base `/TestApp/` y despliega en GitHub Pages.
