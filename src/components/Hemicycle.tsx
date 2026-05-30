import type { Representative } from "../data/congress";
import { PARTIES } from "../data/parties";
import { AvatarMark } from "./AvatarMark";
import type { CSSProperties } from "react";

type HemicycleProps = {
  title: string;
  subtitle: string;
  items: Representative[];
  selectedId: string | null;
  onSelect: (person: Representative) => void;
};

function seatPosition(index: number, total: number) {
  const rows = total === 60 ? [18, 20, 22] : [28, 32, 34, 36];
  let cursor = 0;

  for (let row = 0; row < rows.length; row += 1) {
    const rowCount = rows[row];
    if (index < cursor + rowCount) {
      const local = index - cursor;
      const progress = rowCount === 1 ? 0.5 : local / (rowCount - 1);
      const angle = -166 + progress * 152;
      const radius = 156 + row * 46;
      const radians = (angle * Math.PI) / 180;
      const x = 300 + Math.cos(radians) * radius;
      const y = 292 + Math.sin(radians) * radius * 0.74;

      return {
        x,
        y,
        row,
        delay: row * 32 + local * 6,
      };
    }
    cursor += rowCount;
  }

  return { x: 300, y: 292, row: 0, delay: 0 };
}

export function Hemicycle({ title, subtitle, items, selectedId, onSelect }: HemicycleProps) {
  return (
    <section className="hemicycle-panel" aria-label={title}>
      <div className="hemicycle-heading">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <strong>{items.length}</strong>
      </div>

      <div className="hemicycle-stage">
        <svg className="hemicycle-rails" viewBox="0 0 600 360" aria-hidden="true">
          <path className="floor-grid" d="M63 304C112 196 200 137 300 137s188 59 237 167" />
          <path className="floor-grid" d="M104 298C143 216 215 171 300 171s157 45 196 127" />
          <path className="floor-grid" d="M145 291c30-58 88-89 155-89s125 31 155 89" />
          <path className="dais" d="M235 287c10-32 32-50 65-50s55 18 65 50c-30 16-100 16-130 0Z" />
        </svg>

        {items.map((person, index) => {
          const party = PARTIES[person.partyId];
          const pos = seatPosition(index, items.length);
          const selected = selectedId === person.id;

          return (
            <button
              className={`seat ${selected ? "is-selected" : ""}`}
              key={person.id}
              onClick={() => onSelect(person)}
              onMouseEnter={() => onSelect(person)}
              style={{
                "--x": `${(pos.x / 600) * 100}%`,
                "--y": `${(pos.y / 360) * 100}%`,
                "--party": party.color,
                "--glow": party.glow,
                "--delay": `${pos.delay}ms`,
              } as CSSProperties}
              type="button"
              title={`${person.name} - ${person.party}`}
            >
              <AvatarMark person={person} color={party.color} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
