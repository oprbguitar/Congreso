import type { Representative } from "../data/congress";
import { PARTIES } from "../data/parties";
import { CANDIDATE_PROFILES } from "../data/profiles";
import type { CSSProperties } from "react";

type ProfileCardProps = {
  person: Representative | null;
};

export function ProfileCard({ person }: ProfileCardProps) {
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
    </aside>
  );
}
