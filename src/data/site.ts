export const SITE = {
  name: 'Ad Metric Tools',
  url: 'https://admetrictools.com',
  description: 'Free ad metric calculators for ROAS, CPC, CTR, CPM and other PPC metrics.'
} as const;

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalizedPath}`;
}
