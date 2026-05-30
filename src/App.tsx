import {
  Flag,
  Landmark,
  MapPinned,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { type CSSProperties, useMemo, useState } from "react";
import { FacultiesView } from "./components/FacultiesView";
import { Hemicycle } from "./components/Hemicycle";
import { PartyBars } from "./components/PartyBars";
import { ProfileCard } from "./components/ProfileCard";
import { REPRESENTATIVES, type Chamber, type Representative } from "./data/congress";
import { PARTIES, PARTY_ORDER } from "./data/parties";
import { normalizeText } from "./utils";

type ChamberFilter = "all" | Chamber;
type ViewMode = "composicion" | "facultades";

const viewLabels: Record<ViewMode, string> = {
  composicion: "Composición",
  facultades: "Facultades detalladas",
};

export function App() {
  const [activeView, setActiveView] = useState<ViewMode>("composicion");
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
      <section className="v2-hero">
        <nav className="v2-topbar" aria-label="Navegación principal">
          <a className="v2-brand" href="#">
            <span>CB</span>
            Congreso Bicameral Perú
          </a>
          <div className="topbar-meta">
            <span>Autor: Pierre R.</span>
            <a href="mailto:peru.labs.pe@gmail.com">peru.labs.pe@gmail.com</a>
            <span>Normativa: Ley 31988</span>
          </div>
        </nav>

        <div className="v2-hero-grid">
          <div className="v2-title-block">
            <h1>
              Congreso Bicameral
              <span>Perú <em>2026</em></span>
            </h1>
            <p>
              Visualización informativa de candidatos elegidos para Senado y Cámara de
              Diputados, organizada por partido, circunscripción y posición de lista.
            </p>
          </div>

          <div className="v2-nav">
            {(Object.keys(viewLabels) as ViewMode[]).map((view) => (
              <button
                className={activeView === view ? "is-active" : ""}
                key={view}
                onClick={() => setActiveView(view)}
                type="button"
              >
                {view === "composicion" && <Users size={20} />}
                {view === "facultades" && <ShieldCheck size={20} />}
                {viewLabels[view]}
              </button>
            ))}
          </div>
        </div>

        {activeView !== "facultades" && (
          <div className="filter-console">
            <div className="search-box">
              <Search size={18} />
              <input
                aria-label="Buscar por nombre, partido o circunscripción"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar congresista, región o partido"
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
                  <i style={{ backgroundColor: PARTIES[partyId].color }} />
                  {PARTIES[partyId].shortName}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      {activeView === "facultades" ? (
        <FacultiesView />
      ) : (
        <>
          <section className="metrics-grid">
            <MetricCard icon={Landmark} tone="red" value="60" label="senadores" note="Representación nacional y regional." />
            <MetricCard icon={Users} tone="blue" value="130" label="diputados" note="Representación por población y distritos." />
            <MetricCard icon={Flag} tone="purple" value="6" label="partidos" note="Organizaciones con representación." />
            <MetricCard icon={MapPinned} tone="green" value="30" label="distritos senatoriales" note="Representación nacional y regional." />
          </section>

          <section className="visual-shell v2-shell">
            <div className="chamber-stack">
              {(chamber === "all" || chamber === "senate") && (
                <Hemicycle
                  items={senate}
                  onSelect={selectPerson}
                  selectedId={selected?.id ?? null}
                  subtitle="Representación: 30 nacionales + 30 regionales"
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
              <PartyBars activeParty={party} items={fullSenate} onParty={setParty} title="Distribución por partido - Senado" />
              <PartyBars
                activeParty={party}
                items={fullDeputies}
                onParty={setParty}
                title="Distribución por partido - Diputados"
              />
              <div className="notice">
                <ShieldCheck size={18} />
                <p>
                  Fuente principal: nómina local `busqueda.md`. Fotos tomadas de Revisa Tu
                  Candidato/JNE y guardadas para uso offline.
                </p>
              </div>
            </aside>
          </section>

        </>
      )}
    </main>
  );
}

type MetricCardProps = {
  icon: typeof Landmark;
  tone: string;
  value: string;
  label: string;
  note: string;
};

function MetricCard({ icon: Icon, tone, value, label, note }: MetricCardProps) {
  return (
    <article className={`metric-card ${tone}`}>
      <Icon size={42} />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
        <p>{note}</p>
      </div>
    </article>
  );
}
