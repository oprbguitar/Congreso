# Imágenes faltantes V2

Fuente usada: https://revisatucandidato.pe/congreso-peru-2026

Se descargaron y mapearon 188 fotos con coincidencia segura. Dos registros de la nómina local `busqueda.md` no aparecieron con coincidencia segura en Revisa Tu Candidato al momento de la sincronización:

Esos mismos 188 registros cuentan con ficha RTC ampliada en `src/data/candidateDetails.ts`. Los dos registros siguientes quedan pendientes también para el cruce de ficha individual:

| ID local | Nombre | Cámara | Partido | Archivo esperado |
|---|---|---|---|---|
| `deputies-48` | Kim Tami Muñoz Yurivilca | Cámara de Diputados | Fuerza Popular | `kim-tami-munoz-yurivilca.jpg` |
| `deputies-73` | Lourdes Marlene Natividad Rivera | Cámara de Diputados | Juntos por el Perú | `lourdes-marlene-natividad-rivera.jpg` |

## Cómo agregar una foto manualmente

1. Guardar la imagen en `public/candidates/`.
2. Usar nombre en minúsculas, sin tildes y con guiones.
3. Actualizar `src/data/profiles.ts` en el campo `photo` del `personId` correspondiente.
4. Ejecutar `npm run build:github` y verificar que la imagen cargue.

Mientras no se agreguen, la app usa un avatar institucional.
