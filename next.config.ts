import type { NextConfig } from "next";
import { cpSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

// The research case-study lives as a self-contained static doc in /research.
// Sync it (and its assets) into /public at config-load time so Next serves it,
// then rewrite "/" to it below. This runs on every `next build` / `next dev`,
// so Vercel always ships the latest version without committing /public copies.
function syncResearch() {
  const root = process.cwd();
  const pub = join(root, "public");
  const src = join(root, "research");
  try {
    mkdirSync(pub, { recursive: true });
    cpSync(join(src, "research.html"), join(pub, "research.html"));
    cpSync(join(src, "screens"), join(pub, "screens"), { recursive: true });
    for (const md of [
      "competitor-analysis.md",
      "competitor-teardown.md",
      "flexibility-deep-dive.md",
      "portfolio-view-patterns.md",
    ]) {
      if (existsSync(join(src, md))) cpSync(join(src, md), join(pub, md));
    }
  } catch (e) {
    console.warn("[research sync] skipped:", e instanceof Error ? e.message : e);
  }
}

syncResearch();

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // beforeFiles runs before page/public resolution, so this serves the
      // static research doc at the site root while keeping the URL at "/".
      beforeFiles: [{ source: "/", destination: "/research.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
