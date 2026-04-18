# ilanglab.github.io

ilanglab.github.io

## Project Structure

```
ilanglab/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── CreateSection.astro
│   │   ├── Features.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .github/workflows/
│   ├── deploy-cloudflare.yml
│   └── deploy-gh-pages.yml
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── wrangler.toml
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:4321
```

---

## Deploy to Cloudflare Pages

### Option A — Via Cloudflare Dashboard (Recommended for first deploy)

1. Push this repo to GitHub
2. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create**
3. Select **Pages** → **Connect to Git**
4. Choose your GitHub repo
5. Set build settings:
   - **Framework**: Astro
   - **Build command**: `npm run build`
   - **Build output**: `dist`
   - **Node version** (Environment variable): `NODE_VERSION = 20`
6. Click **Save and Deploy**

Cloudflare auto-deploys on every push to `main`.

---

### Option B — Via GitHub Actions (CI/CD)

1. Get your Cloudflare credentials:
   - **Account ID**: Cloudflare Dashboard → right sidebar
   - **API Token**: https://dash.cloudflare.com/profile/api-tokens
     → Create Token → use "Edit Cloudflare Workers" template
     → add **Cloudflare Pages: Edit** permission

2. Add secrets to GitHub repo:
   - Go to your repo → **Settings** → **Secrets and variables** → **Actions**
   - Add: `CLOUDFLARE_API_TOKEN`
   - Add: `CLOUDFLARE_ACCOUNT_ID`

3. Create the Pages project name first (one time):

   ```bash
   npx wrangler pages project create ilanglab
   ```

4. Push to `main` — the workflow in `.github/workflows/deploy-cloudflare.yml` runs automatically.

---

### Option C — Manual CLI Deploy

```bash
# Install wrangler globally
npm install -g wrangler

# Login
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy dist --project-name=ilanglab
```

---

## Deploy to GitHub Pages

1. Push repo to GitHub

2. Enable GitHub Pages:
   - Repo → **Settings** → **Pages**
   - Source: **GitHub Actions**

3. Set your repo name in `astro.config.mjs`:

   ```js
   const repoName = "ilanglab" // ← change to your actual repo name
   ```

4. Push to `main` — the workflow in `.github/workflows/deploy-gh-pages.yml` deploys automatically.

5. Your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

---

## Build Commands

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start local dev server            |
| `npm run build`     | Build for Cloudflare Pages        |
| `npm run build:gh`  | Build for GitHub Pages            |
| `npm run preview`   | Preview production build locally  |
| `npm run deploy:cf` | Manual deploy to Cloudflare Pages |
