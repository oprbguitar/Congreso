import type { Representative } from "./data/congress";
import type { PartyId } from "./data/parties";

export function summarizeByParty(items: Representative[]) {
  return items.reduce<Record<PartyId, number>>(
    (summary, item) => {
      summary[item.partyId] += 1;
      return summary;
    },
    {
      "ahora-nacion": 0,
      "fuerza-popular": 0,
      "juntos-por-el-peru": 0,
      obras: 0,
      "buen-gobierno": 0,
      "renovacion-popular": 0,
    },
  );
}

export function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function formatPercent(value: number, total: number) {
  return `${((value / total) * 100).toFixed(1)}%`;
}
