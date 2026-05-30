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

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const PARTIES: Record<PartyId, PartyMeta> = {
  "fuerza-popular": {
    id: "fuerza-popular",
    name: "Fuerza Popular",
    shortName: "FP",
    color: "#72d66b",
    glow: "rgba(114, 214, 107, .42)",
    logo: assetPath("parties/fuerza-popular-official.svg"),
    source: "https://commons.wikimedia.org/wiki/File:Logo_of_the_Popular_Force_(2024).svg",
  },
  "juntos-por-el-peru": {
    id: "juntos-por-el-peru",
    name: "Juntos por el Perú",
    shortName: "JP",
    color: "#2f81ff",
    glow: "rgba(47, 129, 255, .42)",
    logo: assetPath("parties/juntos-por-el-peru-official.svg"),
    source: "https://commons.wikimedia.org/wiki/File:Logo_juntos_por_el_Peru.svg",
  },
  "renovacion-popular": {
    id: "renovacion-popular",
    name: "Renovación Popular",
    shortName: "RP",
    color: "#45d9ee",
    glow: "rgba(69, 217, 238, .42)",
    logo: assetPath("parties/renovacion-popular-official.png"),
    source: "https://commons.wikimedia.org/wiki/Category:Renovaci%C3%B3n_Popular",
  },
  "buen-gobierno": {
    id: "buen-gobierno",
    name: "Partido del Buen Gobierno",
    shortName: "PBG",
    color: "#f7c948",
    glow: "rgba(247, 201, 72, .38)",
    logo: assetPath("parties/buen-gobierno-official.jpg"),
    source: "https://commons.wikimedia.org/wiki/File:PBG_Logo.jpg",
  },
  obras: {
    id: "obras",
    name: "Partido Cívico OBRAS",
    shortName: "OBRAS",
    color: "#ff4d5a",
    glow: "rgba(255, 77, 90, .42)",
    logo: assetPath("parties/obras-official.png"),
    source: "https://commons.wikimedia.org/wiki/File:Logo_of_the_Civic_Party_OBRAS.png",
  },
  "ahora-nacion": {
    id: "ahora-nacion",
    name: "Ahora Nación",
    shortName: "AN",
    color: "#a66bff",
    glow: "rgba(166, 107, 255, .42)",
    logo: assetPath("parties/ahora-nacion-official.jpg"),
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
