const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI0NTA3NSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGUxQ2VEODk2NzM4MmQzRkMzMzI4MzkzN2QzMTA5Njc0MmJCNjQzMEYifQ",
    payload: "eyJkb21haW4iOiJuZXctbWluaS1hcHAtcXVpY2tzdGFydC10YXdueS10aHJlZS52ZXJjZWwuYXBwIn0",
    signature: "MHhjMmM5ZDA1NWM3YTRlMGRlOGMyZjVmZmNjMDg1ZWNjMWFkZGU1NDRiOGNhZTVkMGEyZTZjNGM5ZmU3ODQ2OWI2NDY4NThiYjdlZjM2NDJkNDNlMzYwNDhhYjRkYzgzODlmOGYxNDE1MGJmMzhhNDI3NGI1NzQ5ZDNlMjIxNzk2MzFi"
  },
  miniapp: {
    version: "1",
    name: "My First Mini App", 
    subtitle: "A simple Base mini app", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
  baseBuilder: {
    allowedAddresses: ["0x4B83Dd00A2bBf93CAA9A65E8bCeB4eB38397FD62"],
  }
} as const;

