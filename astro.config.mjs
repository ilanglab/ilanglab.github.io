import { defineConfig } from "astro/config";

const isGitHubPages = process.env.DEPLOY_TARGET === "github";
const repoName = process.env.GITHUB_REPO_NAME || "ilanglab"; // change to your repo name

export default defineConfig({
  // For GitHub Pages: set base to /repo-name/
  // For Cloudflare Pages: base stays as /
  base: isGitHubPages ? `/${repoName}/` : "/",
  trailingSlash: "always",

  // Static output works for GitHub Pages and Cloudflare Pages without an adapter.
  output: "static",

  build: {
    assets: "_assets",
  },
});
