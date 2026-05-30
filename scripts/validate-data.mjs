import fs from "node:fs";

const source = fs.readFileSync("src/data/congress.ts", "utf8");
const match = source.match(/export const REPRESENTATIVES: Representative\[] = ([\s\S]*);/);

if (!match) {
  throw new Error("No se pudo leer REPRESENTATIVES.");
}

const representatives = JSON.parse(match[1]);
const senate = representatives.filter((item) => item.chamber === "senate");
const deputies = representatives.filter((item) => item.chamber === "deputies");

if (senate.length !== 60) {
  throw new Error(`Senado esperado: 60. Encontrado: ${senate.length}`);
}

if (deputies.length !== 130) {
  throw new Error(`Diputados esperado: 130. Encontrado: ${deputies.length}`);
}

console.log("Datos validados: 60 senadores, 130 diputados, 190 representantes.");
