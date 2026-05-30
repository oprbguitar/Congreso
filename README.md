# Congreso Bicameral Perú 2026 - Versión 2

Visualización interactiva e informativa del Congreso Bicameral peruano proyectado para 2026-2031.

Demo pública:

https://oprbguitar.github.io/TestApp/

## Qué es

Esta página presenta una lectura visual de los **60 senadores** y **130 diputados** organizados por cámara, partido, circunscripción y posición de lista. La experiencia usa hemiciclos interactivos, fichas de candidatos con fotografía, distribución por partido y una vista explicativa de las facultades del Senado y de la Cámara de Diputados.

## Qué brinda

- Resumen general del Congreso bicameral.
- Composición por cámara y partido.
- Candidato destacado al pasar el mouse o tocar un asiento.
- Foto local del candidato cuando fue encontrada en Revisa Tu Candidato/JNE.
- Ficha con cámara, circunscripción, posición, origen, trayectoria y estado de verificación.
- Pestañas de hoja de vida por candidato: educación, trayectoria política, contratos con el Estado, propiedades, deudas, sanciones y experiencia profesional.
- Vista de facultades detalladas del Senado y la Cámara de Diputados.
- Fuentes normativas: ONPE, Ley 31988 y reglamentos bicamerales.
- Documentación de discrepancias y fotografías faltantes.

## Fuentes

- `busqueda.md`: fuente local principal para la nómina persona por persona.
- `docs/detalle-nuevo-congreso.md`: información ampliada, lectura analítica y límites.
- https://revisatucandidato.pe/congreso-peru-2026: fotografías, fichas de hoja de vida y referencia de composición provisional al 17 de mayo de 2026.
- ONPE, Congreso de la República y Ley 31988 para estructura bicameral y marco normativo.

La app prioriza la nómina local de `busqueda.md`. Cuando una fuente externa presenta una distribución agregada distinta, la diferencia se documenta y no se mezcla silenciosamente con los datos base.

## Tecnología

- React 19
- TypeScript
- Vite 7
- Lucide React
- GitHub Actions
- GitHub Pages

## Uso local

```bash
npm install
npm run dev
```

Abrir:

```text
http://localhost:5173/
```

## Validación

```bash
npm run validate:data
npm run build:github
```

La validación exige:

- 60 senadores.
- 130 diputados.
- 190 representantes en total.

## Fotos faltantes

La sincronización V2 descargó 188 fotos. Dos registros no tuvieron coincidencia segura en Revisa Tu Candidato al momento de la construcción. Ver:

`docs/imagenes-faltantes-v2.md`

## Guía de versiones

Ver:

`docs/guia-versiones.md`

## Despliegue

El workflow `.github/workflows/pages.yml` publica automáticamente en GitHub Pages cuando hay cambios en `main`.

## Política de mantenimiento

Este repositorio es mantenido únicamente por `oprbguitar`. No se aceptan contribuciones externas ni cambios no autorizados. Ver `CONTRIBUTING.md`.
