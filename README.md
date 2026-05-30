# Congreso Bicameral Perú 2026

Visualización interactiva offline de la composición proyectada del Congreso bicameral peruano para el periodo 2026-2031.

La aplicación representa el **Senado** y la **Cámara de Diputados** como hemiciclos interactivos. Cada asiento corresponde a una persona ganadora/proyectada desde la fuente local `busqueda.md`, con color por partido, ficha de detalle, filtros y barras de distribución.

## Demo

Cuando GitHub Pages termine el despliegue, la app estará disponible en:

https://oprbguitar.github.io/TestApp/

## Qué muestra

- 60 senadores y 130 diputados.
- Distribución por partido con cantidades y porcentajes.
- Filtros por cámara, partido, nombre y circunscripción.
- Ficha interactiva por representante.
- Logos de partidos descargados localmente para funcionamiento offline.
- Panel normativo con enlaces a ONPE, Ley 31988 y reglamentos bicamerales.

## Fuente de datos

La fuente inicial es `busqueda.md`. El propio archivo advierte que la nómina debe leerse como **proyectada/de alta confianza** al corte usado, no como proclamación oficial definitiva si el JNE publica cambios posteriores.

## Desarrollo local

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
npm run build
```

## Despliegue

El repositorio incluye un workflow de GitHub Actions en `.github/workflows/pages.yml`.

En cada push a `main`, GitHub:

1. Instala dependencias.
2. Valida que existan 60 senadores y 130 diputados.
3. Construye la app con base `/TestApp/`.
4. Publica `dist/` en GitHub Pages.

Si Pages no estuviera habilitado todavía, activarlo en:

`Settings -> Pages -> Build and deployment -> Source: GitHub Actions`.
