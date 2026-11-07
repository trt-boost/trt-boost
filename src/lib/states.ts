/** U.S. states where providers are licensed (/treatment-areas/[state]). */

export type State = { name: string; slug: string; abbr: string };

const raw: [string, string][] = [
  ["Colorado", "CO"],
  ["Connecticut", "CT"],
  ["Maryland", "MD"],
  ["Missouri", "MO"],
  ["Virginia", "VA"],
];

export const states: State[] = raw.map(([name, abbr]) => ({
  name,
  abbr,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
}));

export function getState(slug: string): State | undefined {
  return states.find((s) => s.slug === slug);
}
