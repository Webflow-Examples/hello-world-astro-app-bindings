# hello-world-astro-app-bindings

An **Astro 5** starter for [**Webflow Cloud**](https://webflow.com/cloud) with Cloudflare bindings (D1, R2, KV) wired in.

At deploy time, Webflow Cloud provisions the configured services and injects them into your app as typed bindings — no API keys, no connection strings.

> Looking for the plain vanilla variant (no bindings)?
> See [`hello-world-astro-app`](https://github.com/Webflow-Examples/hello-world-astro-app).

[![Deploy to Webflow](https://webflow.com/img/deploy-dark.svg)](https://webflow.com/dashboard/cloud/deploy?repo=https://github.com/Webflow-Examples/hello-world-astro-app-bindings)

## What's included

- Astro 5 with `@astrojs/cloudflare` adapter (SSR mode)
- Tailwind CSS v3
- `wrangler.json` with **D1**, **R2**, **KV · Sessions**, **KV · Flags**
- `src/pages/api/binding-status.ts` — live health check for every binding
- Branded landing page that renders real-time binding status

## Quickstart

```bash
npm install

# Run locally (no bindings)
npm run dev

# Build + preview against real bindings (wrangler)
npm run dev:cf
```

## Deploy to Webflow Cloud

1. Fork this repo.
2. In your Webflow site, open **Apps → Webflow Cloud → Create new app** and select this repo.
3. Webflow Cloud reads `wrangler.json` and provisions D1, R2, and KV automatically.
4. Pick a mount path and click **Deploy**.

Full walkthrough: <https://developers.webflow.com/webflow-cloud/quickstart>.

## Bindings map

| Binding    | Type | Declared in     | Docs                                                                         |
| ---------- | ---- | --------------- | ---------------------------------------------------------------------------- |
| `DB`       | D1   | `wrangler.json` | [D1](https://developers.webflow.com/webflow-cloud/storing-data/sqlite)               |
| `MEDIA`    | R2   | `wrangler.json` | [R2](https://developers.webflow.com/webflow-cloud/storing-data/object-storage)               |
| `SESSIONS` | KV   | `wrangler.json` | [KV](https://developers.webflow.com/webflow-cloud/storing-data/key-value-store)               |
| `FLAGS`    | KV   | `wrangler.json` | [KV Flags](https://developers.webflow.com/webflow-cloud/storing-data/key-value-store)   |

Access them from any API route via `locals.runtime.env`:

```ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ locals }) => {
  const env = locals.runtime?.env;
  const row = await env?.DB.prepare('SELECT 1').first();
  return new Response(JSON.stringify({ row }));
};
```

See `src/pages/api/binding-status.ts` for a full working example.

## Learn more

- [Webflow Cloud docs](https://developers.webflow.com/webflow-cloud)
- [Bindings guide](https://developers.webflow.com/webflow-cloud/storing-data/overview)
- [Astro on Webflow Cloud](https://developers.webflow.com/webflow-cloud/frameworks/astro)

---

Built with Astro · Deployed on Webflow Cloud.
