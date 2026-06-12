/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

type Runtime = import("@astrojs/cloudflare").Runtime<{
  DB: D1Database;
  SESSIONS: KVNamespace;
  FLAGS: KVNamespace;
  MEDIA: R2Bucket;
  SENTRY_DSN?: string;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
