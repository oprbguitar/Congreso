import fs from "node:fs";

console.log(
  [
    "Script de apoyo V2:",
    "1. Abrir https://revisatucandidato.pe/congreso-peru-2026.",
    "2. Extraer fotos de candidatos desde mpesije.jne.gob.pe/apidocs.",
    "3. Guardarlas en public/candidates/ con nombres sin tildes y guiones.",
    "",
    "La sincronización inicial ya fue realizada para esta versión:",
    "- 188 fotos descargadas.",
    "- 2 candidatos sin coincidencia segura documentados en docs/imagenes-faltantes-v2.md.",
  ].join("\n"),
);

if (!fs.existsSync("public/candidates")) {
  console.log("No existe public/candidates. Crear la carpeta antes de agregar fotos manuales.");
}
