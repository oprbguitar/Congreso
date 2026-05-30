import { ExternalLink } from "lucide-react";
import { CHAMBER_FUNCTIONS, NORMATIVE_SOURCES } from "../data/norms";

export function NormativePanel() {
  return (
    <section className="normative-panel" id="normativa">
      <div className="normative-copy">
        <h2>Funciones según la bicameralidad</h2>
        <p>
          La Ley 31988 restablece un Congreso compuesto por Senado y Cámara de Diputados.
          Esta vista resume las funciones para lectura ciudadana y mantiene enlaces a las
          fuentes oficiales.
        </p>
      </div>
      <div className="function-grid">
        <article>
          <span>Senado</span>
          <ul>
            {CHAMBER_FUNCTIONS.senate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <span>Cámara de Diputados</span>
          <ul>
            {CHAMBER_FUNCTIONS.deputies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="source-strip">
        {NORMATIVE_SOURCES.map((source) => (
          <a href={source.url} key={source.url} rel="noreferrer" target="_blank">
            <ExternalLink size={15} />
            <span>{source.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
