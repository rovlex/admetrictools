export const SITE = {
  name: 'Ad Metric Tools',
  url: 'https://admetrictools.com',
  description: 'Free PPC calculators for ROAS, CPC, CTR, and CPM.'
} as const;

export function getCanonicalUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.url}${normalizedPath}`;
}
