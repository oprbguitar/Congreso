export type PartyId =
  | "ahora-nacion"
  | "fuerza-popular"
  | "juntos-por-el-peru"
  | "obras"
  | "buen-gobierno"
  | "renovacion-popular";

export type PartyMeta = {
  id: PartyId;
  name: string;
  shortName: string;
  color: string;
  glow: string;
  logo: string;
  source: string;
};

export const PARTIES: Record<PartyId, PartyMeta> = {
  "fuerza-popular": {
    id: "fuerza-popular",
    name: "Fuerza Popular",
    shortName: "FP",
    color: "#f05a28",
    glow: "rgba(240, 90, 40, .42)",
    logo: "/parties/fuerza-popular-official.svg",
    source: "https://commons.wikimedia.org/wiki/File:Logo_of_the_Popular_Force_(2024).svg",
  },
  "juntos-por-el-peru": {
    id: "juntos-por-el-peru",
    name: "Juntos por el Perú",
    shortName: "JP",
    color: "#0fb166",
    glow: "rgba(15, 177, 102, .42)",
    logo: "/parties/juntos-por-el-peru-official.svg",
    source: "https://commons.wikimedia.org/wiki/File:Logo_juntos_por_el_Peru.svg",
  },
  "renovacion-popular": {
    id: "renovacion-popular",
    name: "Renovación Popular",
    shortName: "RP",
    color: "#29b7e8",
    glow: "rgba(41, 183, 232, .42)",
    logo: "/parties/renovacion-popular-official.png",
    source: "https://commons.wikimedia.org/wiki/Category:Renovaci%C3%B3n_Popular",
  },
  "buen-gobierno": {
    id: "buen-gobierno",
    name: "Partido del Buen Gobierno",
    shortName: "PBG",
    color: "#ffd33d",
    glow: "rgba(255, 211, 61, .38)",
    logo: "/parties/buen-gobierno-official.jpg",
    source: "https://commons.wikimedia.org/wiki/File:PBG_Logo.jpg",
  },
  obras: {
    id: "obras",
    name: "Partido Cívico OBRAS",
    shortName: "OBRAS",
    color: "#e23b3f",
    glow: "rgba(226, 59, 63, .42)",
    logo: "/parties/obras-official.png",
    source: "https://commons.wikimedia.org/wiki/File:Logo_of_the_Civic_Party_OBRAS.png",
  },
  "ahora-nacion": {
    id: "ahora-nacion",
    name: "Ahora Nación",
    shortName: "AN",
    color: "#8b5cf6",
    glow: "rgba(139, 92, 246, .42)",
    logo: "/parties/ahora-nacion-official.jpg",
    source: "https://commons.wikimedia.org/wiki/File:Logo_Ahora_Naci%C3%B3n_2026.jpg",
  },
};

export const PARTY_ORDER: PartyId[] = [
  "fuerza-popular",
  "juntos-por-el-peru",
  "buen-gobierno",
  "renovacion-popular",
  "obras",
  "ahora-nacion",
];

export function partyIdFromName(name: string): PartyId {
  const normalized = name.toLowerCase();

  if (normalized.includes("fuerza")) return "fuerza-popular";
  if (normalized.includes("juntos")) return "juntos-por-el-peru";
  if (normalized.includes("renov")) return "renovacion-popular";
  if (normalized.includes("buen")) return "buen-gobierno";
  if (normalized.includes("obras")) return "obras";
  return "ahora-nacion";
}
