import { Search, ShieldCheck, Sparkles } from "lucide-react";
import { type CSSProperties, useMemo, useState } from "react";
import { Hemicycle } from "./components/Hemicycle";
import { NormativePanel } from "./components/NormativePanel";
import { PartyBars } from "./components/PartyBars";
import { ProfileCard } from "./components/ProfileCard";
import { REPRESENTATIVES, type Chamber, type Representative } from "./data/congress";
import { PARTIES, PARTY_ORDER } from "./data/parties";
import { normalizeText } from "./utils";

type ChamberFilter = "all" | Chamber;

export function App() {
  const [chamber, setChamber] = useState<ChamberFilter>("all");
  const [party, setParty] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Representative | null>(REPRESENTATIVES[0]);

  const filtered = useMemo(() => {
    const needle = normalizeText(query);

    return REPRESENTATIVES.filter((person) => {
      const chamberMatch = chamber === "all" || person.chamber === chamber;
      const partyMatch = party === "all" || person.partyId === party;
      const textMatch =
        !needle ||
        normalizeText(`${person.name} ${person.party} ${person.district}`).includes(needle);

      return chamberMatch && partyMatch && textMatch;
    });
  }, [chamber, party, query]);

  const senate = filtered.filter((person) => person.chamber === "senate");
  const deputies = filtered.filter((person) => person.chamber === "deputies");
  const fullSenate = REPRESENTATIVES.filter((person) => person.chamber === "senate");
  const fullDeputies = REPRESENTATIVES.filter((person) => person.chamber === "deputies");

  function selectPerson(person: Representative) {
    setSelected(person);
  }

  return (
    <main>
      <section className="hero">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#">
            <span>CB</span>
            Congreso Bicameral Perú 2026
          </a>
          <a href="#normativa">Normativa</a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Congreso Bicameral Perú 2026</h1>
            <p>
              Visualización offline de ganadores proyectados para Senado y Cámara de
              Diputados, organizada por partido, circunscripción y posición de lista.
            </p>
            <div className="hero-stats" aria-label="Resumen de cámaras">
              <span>
                <strong>60</strong> senadores
              </span>
              <span>
                <strong>130</strong> diputados
              </span>
              <span>
                <strong>6</strong> partidos
              </span>
            </div>
          </div>

          <div className="control-deck">
            <div className="search-box">
              <Search size={18} />
              <input
                aria-label="Buscar por nombre, partido o circunscripción"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar persona, región o partido"
                value={query}
              />
            </div>
            <div className="segmented" aria-label="Filtrar por cámara">
              {[
                ["all", "Todo"],
                ["senate", "Senado"],
                ["deputies", "Diputados"],
              ].map(([value, label]) => (
                <button
                  className={chamber === value ? "is-active" : ""}
                  key={value}
                  onClick={() => setChamber(value as ChamberFilter)}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="party-filter" aria-label="Filtrar por partido">
              <button
                className={party === "all" ? "is-active" : ""}
                onClick={() => setParty("all")}
                type="button"
              >
                Todos
              </button>
              {PARTY_ORDER.map((partyId) => (
                <button
                  className={party === partyId ? "is-active" : ""}
                  key={partyId}
                  onClick={() => setParty(partyId)}
                  style={{ "--party": PARTIES[partyId].color } as CSSProperties}
                  type="button"
                >
                  <img src={PARTIES[partyId].logo} alt="" />
                  {PARTIES[partyId].shortName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="visual-shell">
        <div className="chamber-stack">
          {(chamber === "all" || chamber === "senate") && (
            <Hemicycle
              items={senate}
              onSelect={selectPerson}
              selectedId={selected?.id ?? null}
              subtitle="30 nacionales + 30 regionales"
              title="Senado"
            />
          )}
          {(chamber === "all" || chamber === "deputies") && (
            <Hemicycle
              items={deputies}
              onSelect={selectPerson}
              selectedId={selected?.id ?? null}
              subtitle="Representación por distrito electoral múltiple"
              title="Cámara de Diputados"
            />
          )}
        </div>

        <aside className="insight-rail">
          <ProfileCard person={selected} />
          <PartyBars activeParty={party} items={fullSenate} onParty={setParty} title="Senado" />
          <PartyBars
            activeParty={party}
            items={fullDeputies}
            onParty={setParty}
            title="Diputados"
          />
          <div className="notice">
            <ShieldCheck size={18} />
            <p>
              Nómina proyectada/de alta confianza según fuente local. Revisar proclamación
              final del JNE si se actualiza.
            </p>
          </div>
        </aside>
      </section>

      <section className="legend-band" aria-label="Leyenda de partidos">
        <div>
          <Sparkles size={18} />
          <span>Logos descargados para uso offline</span>
        </div>
        {PARTY_ORDER.map((partyId) => (
          <a href={PARTIES[partyId].source} key={partyId} rel="noreferrer" target="_blank">
            <img src={PARTIES[partyId].logo} alt="" />
            <span>{PARTIES[partyId].name}</span>
          </a>
        ))}
      </section>

      <NormativePanel />
    </main>
  );
}
