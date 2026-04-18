import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const repoName = process.env.GITHUB_REPO_NAME || "swift-site"; // change to your repo name

export default defineConfig({
  // For GitHub Pages: set base to /repo-name/
  // For Cloudflare Pages: base stays as /
  base: isGitHubPages ? `/${repoName}/` : "/",
  trailingSlash: "always",

  // Use Cloudflare adapter only when deploying to Cloudflare
  ...(isGitHubPages
    ? { output: "static" }
    : {
        output: "static", // static works for both; swap to "server" for SSR on CF
        adapter: cloudflare(),
      }),

  build: {
    assets: "_assets",
  },
});
