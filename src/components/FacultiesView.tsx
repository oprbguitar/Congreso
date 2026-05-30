import {
  BadgeCheck,
  FileCheck2,
  FileSearch,
  Gavel,
  Landmark,
  ListChecks,
  Plane,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const legalSources = [
  {
    name: "Constitución Política del Perú de 1993",
    detail:
      "Base del Poder Legislativo, de la función de legislar, del control político y de las relaciones Congreso-Ejecutivo. La reforma de bicameralidad reordena el Congreso en Senado y Cámara de Diputados.",
    href: "https://www.congreso.gob.pe/Docs/constitucion/constitucion/index.html",
  },
  {
    name: "Ley N.° 31988",
    detail:
      "Reforma constitucional que restituye la bicameralidad, define 60 senadores y 130 diputados, y organiza el retorno del Senado y de la Cámara de Diputados.",
    href: "https://busquedas.elperuano.pe/dispositivo/NL/2272076-2",
  },
  {
    name: "Ley N.° 32245",
    detail:
      "Regula reglas electorales aplicables a la postulación en el proceso 2026, incluida la participación de candidatos vinculados a fórmulas presidenciales y cargos parlamentarios.",
    href: "https://busquedas.elperuano.pe/dispositivo/NL/2362500-1",
  },
  {
    name: "Decreto Supremo N.° 039-2025-PCM",
    detail:
      "Convoca oficialmente a Elecciones Generales 2026 y activa el calendario para elegir Presidencia, Senado, Cámara de Diputados y Parlamento Andino.",
    href: "https://busquedas.elperuano.pe/api/visor_html/2384222-1",
  },
  {
    name: "Resolución Legislativa del Congreso N.° 004-2025-2026-CR",
    detail:
      "Norma complementaria de implementación y organización parlamentaria del retorno bicameral.",
    href: "https://busquedas.elperuano.pe/",
  },
  {
    name: "Reglamento del Congreso, Cámara de Diputados y Senado",
    detail:
      "Desarrolla procedimientos internos, debates, comisiones, control político, trámite legislativo y reglas de coordinación entre cámaras.",
    href: "https://comunicaciones.congreso.gob.pe/noticias/pleno-aprueba-reglamentos-del-congreso-de-camara-de-diputados-y-del-senado/",
  },
];

const senatePowers = [
  {
    icon: FileSearch,
    title: "Cámara revisora y de segunda evaluación",
    items: [
      "Revisa los proyectos de ley aprobados por la Cámara de Diputados.",
      "Puede aprobar, modificar, observar, devolver o rechazar textos dentro del procedimiento bicameral.",
      "Eleva el estándar de deliberación legislativa con una segunda lectura institucional.",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Designación y ratificación de altos funcionarios",
    items: [
      "Participa en el nombramiento o separación de altas autoridades cuando la Constitución o el reglamento lo establecen.",
      "Comprende autoridades como Defensoría del Pueblo, Contraloría, Tribunal Constitucional, BCR y SBS, según el caso normativo aplicable.",
      "Cumple una función de contrapeso para cargos con impacto nacional.",
    ],
  },
  {
    icon: Plane,
    title: "Autorizaciones y relaciones exteriores",
    items: [
      "Interviene en autorizaciones vinculadas a viajes presidenciales al exterior.",
      "Puede intervenir en ingreso de tropas extranjeras y tratados internacionales conforme al marco constitucional.",
      "Revisa decisiones de alta trascendencia estatal y diplomática.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Control de normas del Ejecutivo",
    items: [
      "Controla decretos legislativos, decretos de urgencia y medidas de régimen de excepción cuando corresponda.",
      "Verifica que el ejercicio normativo del Ejecutivo se mantenga dentro de los límites constitucionales.",
      "Aporta estabilidad y revisión sobre decisiones excepcionales.",
    ],
  },
];

const deputyPowers = [
  {
    icon: ListChecks,
    title: "Cámara iniciadora del debate legislativo",
    items: [
      "Recibe, debate y aprueba en primera instancia proyectos de ley y resoluciones legislativas.",
      "Canaliza iniciativas vinculadas a demandas poblacionales, territoriales y sectoriales.",
      "Remite los textos aprobados al Senado para revisión.",
    ],
  },
  {
    icon: Gavel,
    title: "Control político del Ejecutivo",
    items: [
      "Interpela al Presidente del Consejo de Ministros y a ministros.",
      "Puede censurar ministros o negar confianza conforme al procedimiento constitucional y reglamentario.",
      "Participa en la investidura y seguimiento político del Consejo de Ministros.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Fiscalización y seguimiento público",
    items: [
      "Supervisa el uso de bienes y recursos públicos.",
      "Revisa decretos de urgencia, delegación de facultades y ejecución de políticas públicas.",
      "Promueve investigaciones sobre asuntos de interés público.",
    ],
  },
  {
    icon: Users,
    title: "Representación ciudadana y distrital",
    items: [
      "Representa a la población mediante distritos electorales múltiples.",
      "Funciona como cámara de cercanía con regiones, Lima, Callao, Lima Provincias y peruanos en el exterior.",
      "Traslada demandas ciudadanas a agenda legislativa y control político.",
    ],
  },
];

const sharedPowers = [
  "Aprobar el Presupuesto General de la República y revisar la Cuenta General.",
  "Reformar la Constitución según el procedimiento previsto.",
  "Ejercer derecho de amnistía cuando corresponda.",
  "Aprobar demarcación territorial propuesta por el Ejecutivo.",
  "Autorizar guerra o paz, conforme a competencias constitucionales.",
];

const legislativeFlow = [
  "Iniciativa legislativa",
  "Debate y aprobación en Diputados",
  "Remisión al Senado",
  "Revisión, modificación u observación",
  "Texto final, insistencia o archivo",
];

const controlFlow = [
  "Hecho político o gestión cuestionada",
  "Interpelación o pedido de información",
  "Debate en Cámara de Diputados",
  "Censura, confianza o recomendación",
  "Seguimiento y responsabilidad política",
];

export function FacultiesView() {
  return (
    <section className="faculties-view" id="facultades">
      <div className="faculties-grid">
        <PowerColumn accent="red" title="Senado" subtitle="Cámara alta revisora" items={senatePowers} />
        <PowerColumn
          accent="blue"
          title="Cámara de Diputados"
          subtitle="Cámara baja iniciadora"
          items={deputyPowers}
        />
      </div>

      <section className="comparison-panel legal-matrix">
        <h2>Estructura, requisitos y rol institucional</h2>
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
              <td>Integrantes</td>
              <td>60 senadores</td>
              <td>130 diputados</td>
            </tr>
            <tr>
              <td>Edad mínima</td>
              <td>45 años o haber sido congresista/diputado</td>
              <td>25 años</td>
            </tr>
            <tr>
              <td>Representación</td>
              <td>30 nacionales y 30 regionales</td>
              <td>Distritos electorales múltiples</td>
            </tr>
            <tr>
              <td>Ubicación legislativa</td>
              <td>Revisión y segunda decisión</td>
              <td>Inicio, debate y aprobación inicial</td>
            </tr>
            <tr>
              <td>Control político</td>
              <td>Control institucional y revisión de normas especiales</td>
              <td>Interpelación, censura, confianza y fiscalización directa</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flow-panel">
        <h2>Flujo legislativo bicameral</h2>
        <FlowSteps items={legislativeFlow} />
      </section>

      <section className="flow-panel control-flow">
        <h2>Flujo de control político</h2>
        <FlowSteps items={controlFlow} />
      </section>

      <section className="shared-panel">
        <div>
          <Landmark size={40} />
          <h2>Facultades comunes del Congreso</h2>
        </div>
        <ul>
          {sharedPowers.map((power) => (
            <li key={power}>{power}</li>
          ))}
        </ul>
      </section>

      <section className="law-grid">
        <div className="law-grid-title">
          <Scale size={36} />
          <div>
            <h2>Leyes y normas citadas</h2>
            <p>Base normativa usada para explicar competencias, elección e implementación bicameral.</p>
          </div>
        </div>
        {legalSources.map((source) => (
          <a href={source.href} key={source.name} rel="noreferrer" target="_blank">
            <strong>{source.name}</strong>
            <span>{source.detail}</span>
          </a>
        ))}
      </section>

      <div className="quick-panels">
        <article>
          <h3>Lectura rápida</h3>
          <p>
            Diputados inicia, representa y ejerce control político directo. Senado revisa, equilibra,
            participa en altas designaciones y controla decisiones especiales del Estado.
          </p>
        </article>
        <article>
          <h3>Alcance referencial</h3>
          <p>
            Esta vista resume el modelo bicameral con fines informativos. La aplicación jurídica final debe
            verificarse en la Constitución, la Ley N.° 31988, las normas electorales y los reglamentos vigentes.
          </p>
        </article>
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

function FlowSteps({ items }: { items: string[] }) {
  return (
    <div className="flow-steps">
      {items.map((step, index) => (
        <div className="flow-step" key={step}>
          <strong>{index + 1}</strong>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
}
