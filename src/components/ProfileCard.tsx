import type { Representative } from "../data/congress";
import { CANDIDATE_DETAILS, DETAIL_SECTION_ORDER } from "../data/candidateDetails";
import { PARTIES } from "../data/parties";
import { CANDIDATE_PROFILES } from "../data/profiles";
import { useEffect, useState, type CSSProperties } from "react";

type ProfileCardProps = {
  person: Representative | null;
};

export function ProfileCard({ person }: ProfileCardProps) {
  const [activeDetail, setActiveDetail] = useState<(typeof DETAIL_SECTION_ORDER)[number]>("education");

  useEffect(() => {
    setActiveDetail("education");
  }, [person?.id]);

  if (!person) {
    return (
      <aside className="profile-card is-empty">
        <span>Explora el hemiciclo</span>
        <h3>Pasa el mouse o toca un asiento</h3>
        <p>La ficha mostrará persona, partido, circunscripción y posición de lista.</p>
      </aside>
    );
  }

  const party = PARTIES[person.partyId];
  const profile = CANDIDATE_PROFILES[person.id];
  const detail = CANDIDATE_DETAILS[person.id];
  const detailSection = detail?.sections[activeDetail];
  const status =
    profile.verificationStatus === "sin-datos"
      ? "Sin foto verificada"
      : profile.verificationStatus === "verificado"
        ? "Verificado"
        : "Ficha parcial";

  return (
    <aside
      className="profile-card featured-card"
      style={{ "--party": party.color, "--glow": party.glow } as CSSProperties}
    >
      <div className="featured-label">
        <span>★</span>
        Candidato destacado
      </div>
      <div className="featured-body">
        <div className="candidate-photo">
          {profile.photo ? (
            <img src={profile.photo} alt={`Foto de ${person.name}`} />
          ) : (
            <div className="candidate-fallback">{person.name.slice(0, 2).toUpperCase()}</div>
          )}
        </div>
        <div>
          <div className="profile-party">
            <img src={party.logo} alt="" />
            <span>{party.shortName}</span>
          </div>
          <h3>{person.name}</h3>
          <dl>
            <div>
              <dt>Cámara</dt>
              <dd>{person.chamber === "senate" ? "Senado" : "Cámara de Diputados"}</dd>
            </div>
            <div>
              <dt>Circunscripción</dt>
              <dd>{person.district}</dd>
            </div>
            <div>
              <dt>Posición</dt>
              <dd>N.° {person.position}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="candidate-notes">
        <p>{profile.bio}</p>
        <p>
          <strong>Origen:</strong> {profile.origin}
        </p>
        <p>
          <strong>Trayectoria:</strong> {profile.trajectory}
        </p>
        <span>{status}</span>
      </div>
      {detail ? (
        <div className="candidate-detail-tabs">
          <div className="detail-meta">
            <span>DNI: {detail.dni || "No disponible"}</span>
            <span>{detail.age || "Edad no disponible"}</span>
            <a href={detail.sourceUrl} target="_blank" rel="noreferrer">
              Ficha RTC
            </a>
          </div>
          <div className="detail-tab-list" aria-label="Detalle de hoja de vida">
            {DETAIL_SECTION_ORDER.map((key) => {
              const section = detail.sections[key];
              const count = section.countLabel.match(/\d+/)?.[0] ?? "0";

              return (
                <button
                  key={key}
                  className={key === activeDetail ? "is-active" : ""}
                  onClick={() => setActiveDetail(key)}
                  type="button"
                >
                  <span>{shortSectionLabel(section.label)}</span>
                  <strong>{count}</strong>
                </button>
              );
            })}
          </div>
          {detailSection ? (
            <div className="detail-section">
              <div className="detail-section-title">
                <strong>{detailSection.label}</strong>
                <span>{detailSection.countLabel}</span>
              </div>
              {detailSection.source ? <small>{detailSection.source}</small> : null}
              {detailSection.items.length > 0 ? (
                <ul>
                  {detailSection.items.map((item, index) => (
                    <li key={`${activeDetail}-${index}`}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{detailSection.emptyText}</p>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        <div className="candidate-detail-tabs is-missing">
          <p>
            No se pudo vincular esta persona con una ficha individual de Revisa Tu Candidato.
          </p>
        </div>
      )}
    </aside>
  );
}

function shortSectionLabel(label: string) {
  return label
    .replace("Educación y títulos", "Educación")
    .replace("Trayectoria política", "Trayectoria")
    .replace("Contratos con el Estado", "Contratos")
    .replace("Propiedades declaradas", "Propiedades")
    .replace("Deudas y obligaciones", "Deudas")
    .replace("Experiencia profesional", "Experiencia");
}
