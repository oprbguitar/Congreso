import type { Representative } from "../data/congress";
import { PARTIES } from "../data/parties";
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

  return (
    <aside
      className="profile-card"
      style={{ "--party": party.color, "--glow": party.glow } as CSSProperties}
    >
      <div className="profile-party">
        <img src={party.logo} alt="" />
        <span>{party.name}</span>
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
    </aside>
  );
}
