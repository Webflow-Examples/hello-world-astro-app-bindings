/// <reference types="astro/client" />
/// <reference types="@cloudflare/workers-types" />

type Runtime = import("@astrojs/cloudflare").Runtime<{
  DB: D1Database;
  SESSION: KVNamespace;
  FLAGS: KVNamespace;
  MEDIA: R2Bucket;
}>;

declare namespace App {
  interface Locals extends Runtime {}
}
