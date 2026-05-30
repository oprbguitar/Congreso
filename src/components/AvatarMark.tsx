import type { Representative } from "../data/congress";

type AvatarMarkProps = {
  person: Representative;
  color: string;
};

export function AvatarMark({ person, color }: AvatarMarkProps) {
  const isFemale = person.gender === "female";

  return (
    <svg className="avatar-mark" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`avatar-${person.id}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,.08)" />
      <circle cx="32" cy="24" r={isFemale ? 9 : 8} fill={`url(#avatar-${person.id})`} />
      {isFemale ? (
        <path
          d="M18 50c2.2-10.5 8.2-15.8 14-15.8S44 39.5 46 50c-7.1 3.6-20.9 3.6-28 0Z"
          fill={color}
          opacity=".82"
        />
      ) : (
        <path
          d="M19 50c2-9.4 7.2-14.5 13-14.5S43 40.6 45 50c-6.6 3.2-19.4 3.2-26 0Z"
          fill={color}
          opacity=".82"
        />
      )}
    </svg>
  );
}
