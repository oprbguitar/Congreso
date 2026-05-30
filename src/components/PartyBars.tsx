import type { Representative } from "../data/congress";
import { PARTIES, PARTY_ORDER } from "../data/parties";
import { formatPercent, summarizeByParty } from "../utils";

type PartyBarsProps = {
  title: string;
  items: Representative[];
  activeParty: string;
  onParty: (partyId: string) => void;
};

export function PartyBars({ title, items, activeParty, onParty }: PartyBarsProps) {
  const summary = summarizeByParty(items);
  const max = Math.max(...Object.values(summary));

  return (
    <section className="bars-panel">
      <div className="section-title">
        <span>{title}</span>
        <strong>{items.length}</strong>
      </div>
      <div className="party-bars">
        {PARTY_ORDER.map((partyId) => {
          const party = PARTIES[partyId];
          const value = summary[partyId];
          const isActive = activeParty === partyId;

          return (
            <button
              className={`party-row ${isActive ? "is-active" : ""}`}
              key={partyId}
              onClick={() => onParty(isActive ? "all" : partyId)}
              type="button"
            >
              <img src={party.logo} alt="" />
              <span>{party.shortName}</span>
              <div className="bar-track">
                <i
                  style={{
                    width: `${max ? (value / max) * 100 : 0}%`,
                    background: `linear-gradient(90deg, ${party.color}, rgba(255,255,255,.92))`,
                    boxShadow: `0 0 24px ${party.glow}`,
                  }}
                />
              </div>
              <strong>{value}</strong>
              <em>{formatPercent(value, items.length)}</em>
            </button>
          );
        })}
      </div>
    </section>
  );
}
