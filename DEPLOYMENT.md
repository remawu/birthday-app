# Deploying to GitHub Pages

This guide explains how to deploy your Birthday App to GitHub Pages and integrate it into a full website.

## Option 1: Deploy as Standalone Site (Recommended for Quick Setup)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `your-username.github.io` (replace with your actual GitHub username)
   - This makes it your personal GitHub Pages site
   - Example: `janedoe.github.io`
3. Clone it locally: `git clone https://github.com/your-username/your-username.github.io.git`

### Step 2: Add Your App to the Repository

```bash
# Copy your app files into the cloned repository
cd your-username.github.io
cp -r /path/to/app/* .
git add .
git commit -m "Add birthday app"
git push origin main
```

### Step 3: Build and Deploy

```bash
# Install dependencies
npm install

# Build the app
npm run build

# The dist folder is now ready
# Add dist to GitHub using one of these methods:

# Method A: Push dist folder
git add dist
git commit -m "Add dist build"
git push origin main

# Method B: Use gh-pages package
npm install --save-dev gh-pages
```

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main (or gh-pages)
   - Folder: / (root) or /dist
4. Click Save

Your site will be live at: `https://your-username.github.io`

---

## Option 2: Deploy as Part of Existing Website

If you already have a website and want this app at a specific path (like `yourdomain.com/birthday`):

### Step 1: Clone Your Website Repository

```bash
cd /path/to/your-website
```

### Step 2: Add App as Subdirectory

```bash
# Create a birthday subdirectory
mkdir birthday
cd birthday

# Copy app files
cp -r /path/to/app/src .
cp -r /path/to/app/public .
cp package.json vite.config.ts index.html tailwind.config.js postcss.config.js tsconfig.json ./

# Or initialize as a submodule (recommended)
git submodule add https://github.com/your-username/birthday-app.git birthday
```

### Step 3: Update Vite Config for Subdirectory

If deploying to `yourdomain.com/birthday`, update your deployment environment:

```bash
# Method A: Set environment variable during build
VITE_BASE_URL=/birthday/ npm run build

# Method B: Edit vite.config.ts for deployment
# Change base to:
# base: '/birthday/',
```

### Step 4: Build and Deploy

```bash
npm run build
# The dist folder contains your app at the subpath
```

### Step 5: Configure Web Server

#### For GitHub Pages with Jekyll

Create `.nojekyll` file in your root:
```bash
touch .nojekyll
```

Update your main website's build to copy the birthday app:

```yaml
# If using GitHub Actions workflow
- name: Build birthday app
  run: |
    cd birthday
    npm install
    npm run build
    cp -r dist ../public/birthday
```

---

## Option 3: Using GitHub Actions for Automatic Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
        env:
          VITE_BASE_URL: /
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then commit and push:
```bash
git add .github
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

---

## Option 4: Embedding as iframe in Your Website

If you want to embed this app in an existing page:

### In Your Website HTML:

```html
<iframe 
  src="https://your-username.github.io" 
  style="width: 100%; height: 100vh; border: none;"
  title="Birthday App"
></iframe>
```

### Or Embed Specific Component:

1. Build app as a library
2. Export components from `src/index.ts`
3. Import in your website's package.json

---

## Troubleshooting

### App Shows Blank Page
- Check browser console for errors (F12)
- Verify base URL in vite.config.ts matches deployment path
- Clear browser cache and refresh

### Images Not Loading
- Check public/ folder is included in build
- Verify image paths are relative
- Ensure GitHub Pages settings point to correct branch

### Styles Not Applied
- Run `npm run build` again
- Check for CSS file paths in network tab
- Verify dist/ folder contains css files

### Need Custom Domain?
1. In GitHub Pages settings, add your domain
2. Add DNS records pointing to GitHub Pages
3. Create CNAME file in root with your domain

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview build locally
npm run preview

# Deploy to GitHub Pages (with gh-pages package)
npm run deploy

# Clean build
rm -rf dist && npm run build
```

---

## Files to Keep Updated

- `vite.config.ts` - Configure base URL for your deployment path
- `package.json` - Keep dependencies updated
- `.github/workflows/` - If using GitHub Actions
- Images in `public/` - Update as needed

Good luck with your birthday app! 🎂💕
