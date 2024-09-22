export const verifiedWebsites = [
  "www.google.com",
  "www.google.com.ua",
  "www.youtube.com",
  "www.wikipedia.org",
  "en.wikipedia.org", // TODO: зробити робочим будь-який піддомен
  "uk.wikipedia.org",
  "ru.wikipedia.org",
  "pl.wikipedia.org",
];

export function isVerifiedWebsite(hostname: string): boolean {
  return verifiedWebsites.includes(hostname);
}
