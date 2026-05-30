import {
  BadgeInfo,
  CalendarCheck,
  FileSearch,
  Landmark,
  ListChecks,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const senatePowers = [
  {
    icon: FileSearch,
    title: "Revisión legislativa",
    items: [
      "Revisa los proyectos de ley aprobados por la Cámara de Diputados.",
      "Puede aprobar, modificar, observar o devolver propuestas dentro del trámite legislativo.",
      "Aporta una segunda evaluación para fortalecer la calidad normativa.",
    ],
  },
  {
    icon: Landmark,
    title: "Control político e institucional",
    items: [
      "Participa en decisiones de alta responsabilidad política e institucional.",
      "Interviene en funciones de control previstas por la Constitución y el reglamento.",
      "Contribuye al equilibrio entre poderes y a la supervisión del Estado.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Representación territorial y nacional",
    items: [
      "Expresa representación nacional y regional dentro del sistema bicameral.",
      "Incorpora una mirada de equilibrio entre territorio, Estado y gobernabilidad.",
    ],
  },
  {
    icon: BadgeInfo,
    title: "Decisiones especiales",
    items: [
      "Puede intervenir en procedimientos o acuerdos de especial trascendencia institucional.",
      "Ejerce competencias específicas definidas por la normativa vigente.",
    ],
  },
];

const deputyPowers = [
  {
    icon: ListChecks,
    title: "Iniciativa y debate legislativo",
    items: [
      "Inicia, formula y debate proyectos de ley en primera instancia.",
      "Discute propuestas vinculadas con las necesidades de la población.",
      "Puede aprobar textos para su remisión al Senado.",
    ],
  },
  {
    icon: Users,
    title: "Representación ciudadana",
    items: [
      "Representa a la población y a los distritos electorales múltiples.",
      "Canaliza demandas ciudadanas e iniciativas legislativas.",
      "Cumple una función de cercanía con la representación poblacional.",
    ],
  },
  {
    icon: FileSearch,
    title: "Fiscalización e investigación",
    items: [
      "Puede promover investigaciones sobre asuntos de interés público.",
      "Participa en el control político y en la fiscalización parlamentaria.",
      "Interviene en el seguimiento de políticas y gestión pública.",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Agenda y debate nacional",
    items: [
      "Participa en el debate presupuestal y en la agenda legislativa.",
      "Formula, evalúa y aprueba propuestas que luego pasan al Senado para revisión.",
    ],
  },
];

const flow = [
  "Iniciativa o propuesta",
  "Debate en Diputados",
  "Aprobación y remisión",
  "Revisión en Senado",
  "Aprobación final u observación",
];

export function FacultiesView() {
  return (
    <section className="faculties-view" id="facultades">
      <div className="faculties-grid">
        <PowerColumn accent="red" title="Senado" subtitle="Facultades del Senado" items={senatePowers} />
        <PowerColumn
          accent="blue"
          title="Cámara de Diputados"
          subtitle="Facultades de la Cámara de Diputados"
          items={deputyPowers}
        />
      </div>

      <section className="comparison-panel">
        <h2>Diferencia funcional entre ambas cámaras</h2>
        <table>
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Senado</th>
              <th>Cámara de Diputados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Enfoque principal</td>
              <td>Revisión, equilibrio y control institucional</td>
              <td>Iniciativa, representación y debate inicial</td>
            </tr>
            <tr>
              <td>Tipo de representación</td>
              <td>Nacional y regional</td>
              <td>Poblacional y distrital</td>
            </tr>
            <tr>
              <td>Ubicación en el trámite legislativo</td>
              <td>Revisión o segunda evaluación</td>
              <td>Primera discusión o iniciativa</td>
            </tr>
            <tr>
              <td>Valor dentro del sistema</td>
              <td>Contrapeso y revisión</td>
              <td>Voz directa de la ciudadanía</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flow-panel">
        <h2>Cómo se relacionan en el trámite legislativo</h2>
        <div className="flow-steps">
          {flow.map((step, index) => (
            <div className="flow-step" key={step}>
              <strong>{index + 1}</strong>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="quick-panels">
        <article>
          <h3>Lectura rápida</h3>
          <p>Diputados inicia y representa. Senado revisa y equilibra. Ambas cámaras se complementan.</p>
        </article>
        <article>
          <h3>Alcance referencial</h3>
          <p>
            Esta visualización resume funciones generales del modelo bicameral. La interpretación jurídica
            específica debe contrastarse con la Constitución, la Ley 31988 y los reglamentos del Congreso.
          </p>
        </article>
      </div>

      <div className="source-strip v2-sources">
        <a href="https://eg2026.onpe.gob.pe/bicameralidad/" rel="noreferrer" target="_blank">
          ONPE - Bicameralidad EG 2026
        </a>
        <a
          href="https://www.leyes.congreso.gob.pe/Documentos/2021_2026/ADLP/Texto_Consolidado/31988-TXM.pdf"
          rel="noreferrer"
          target="_blank"
        >
          Ley 31988
        </a>
        <a
          href="https://comunicaciones.congreso.gob.pe/noticias/pleno-aprueba-reglamentos-del-congreso-de-camara-de-diputados-y-del-senado/"
          rel="noreferrer"
          target="_blank"
        >
          Reglamentos bicamerales
        </a>
      </div>
    </section>
  );
}

type PowerColumnProps = {
  accent: "red" | "blue";
  title: string;
  subtitle: string;
  items: typeof senatePowers;
};

function PowerColumn({ accent, title, subtitle, items }: PowerColumnProps) {
  return (
    <article className={`power-column ${accent}`}>
      <div className="power-title">
        <Landmark size={42} />
        <div>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
      </div>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <section className="power-card" key={item.title}>
            <Icon size={34} />
            <div>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </article>
  );
}
