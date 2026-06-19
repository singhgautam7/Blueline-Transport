import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` on `bun run build`.
  output: "export",
  // The default next/image optimiser needs a server, which a static export
  // does not have — so images are served as-is.
  images: { unoptimized: true },
  // Emit `/services/index.html` style paths so static hosts resolve cleanly.
  trailingSlash: true,
};

export default nextConfig;
