// @ts-check

/** @type {Record<string, string>} */
const PATHS = {
  sofa: `<path d="M1.5 9.5V7a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2.5M1.5 9.5h13M2.5 9.5V12M13.5 9.5V12M1.5 7.5h13" />`,
  table: `<path d="M2 6h12M4 6v6M12 6v6M3 12h10" />`,
  chair: `<path d="M5 13V8M11 13V8M4 8h8v3H4zM6 8V5.5A1.5 1.5 0 0 1 7.5 4h1A1.5 1.5 0 0 1 10 5.5V8" />`,
  tvboard: `<path d="M2 5.5h12v6H2zM5 11.5v1.5M11 11.5v1.5M6.5 8h3" />`,
  storage: `<path d="M3 4h10v9H3zM3 7.5h10M8 4v9M5.5 5.5v1M10.5 5.5v1M5.5 9v1M10.5 9v1" />`,
  kitchen: `<path d="M2 5h12M2 8.5h12M2 12h8M5 5v7M11 5v4" />`,
  clothing: `<path d="M8 3.5 5.5 5.5h5L8 3.5zM4 5.5 3 13h10l-1-7.5" />`,
  kotatsu: `<path d="M2 7h12v4H2zM4 11v2M12 11v2M5 7V5.5h6V7" />`,
  bed: `<path d="M2 10h12v3H2zM3 10V7.5a1 1 0 0 1 1-1h2.5M13 10V7.5a1 1 0 0 0-1-1H9" />`,
  lighting: `<path d="M8 2.5v1M8 11v2.5M6 13h4M6.5 4.5A3.5 3.5 0 0 1 8 11a3.5 3.5 0 0 1 1.5-6.5" />`,
  rug: `<path d="M3 5.5h10v5H3zM5 7.5h6M5 9.5h6" />`,
  goods: `<path d="M6 5.5c0-1.5 1-2.5 2-2.5s2 1 2 2.5v5.5c0 1-1 1.5-2 1.5s-2-.5-2-1.5V5.5zM8 13v.5" />`,
};

/**
 * @param {string} slug
 * @returns {string}
 */
export function categoryIconSvg(slug) {
  const path = PATHS[slug] ?? `<circle cx="8" cy="8" r="2" />`;
  return `<svg class="category-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}
