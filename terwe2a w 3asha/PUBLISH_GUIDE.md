# How to Publish Your Website to GitHub

## Option 1: GitHub Desktop (Easiest - No Terminal!)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and sign in with your GitHub account

### Step 2: Create Repository on GitHub
1. Go to https://github.com/new
2. Name your repository (e.g., `terwe2a-menu` or `terwe2a-w-3asha`)
3. Make it **Public** (so GitHub Pages can host it)
4. **Don't** initialize with README, .gitignore, or license
5. Click "Create repository"

### Step 3: Publish with GitHub Desktop
1. Open GitHub Desktop
2. Click **File > Add Local Repository**
3. Browse to: `C:\Users\user\Desktop\terwe2a w 3asha`
4. Click **Publish repository** button
5. Select your repository name
6. Check "Keep this code private" if you want, or leave unchecked for public
7. Click **Publish repository**

### Step 4: Enable GitHub Pages (Free Hosting!)
1. Go to your repository on GitHub.com
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/repository-name`

---

## Option 2: VS Code Built-in Git (No Terminal!)

### Step 1: Install Git
1. Download Git for Windows: https://git-scm.com/download/win
2. Install with default settings

### Step 2: Use VS Code Git
1. Open VS Code in your project folder
2. Click the **Source Control** icon (left sidebar) or press `Ctrl+Shift+G`
3. Click **Initialize Repository**
4. Click the **+** icon to stage all files
5. Type a commit message: "Initial commit - Terwe2a menu website"
6. Click the checkmark to commit
7. Click **...** menu → **Publish Branch**
8. Sign in to GitHub if prompted
9. Choose repository name and click **Publish**

---

## Option 3: Command Line (If you prefer)

```bash
git init
git add .
git commit -m "Initial commit - Terwe2a menu website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## After Publishing

### Update GitHub Pages Settings:
1. Go to repository → **Settings** → **Pages**
2. Source: **main** branch
3. Folder: **/ (root)**
4. Save

Your website will be live in 1-2 minutes at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Files Included in Repository:
- ✅ index.html
- ✅ styles.css
- ✅ script.js
- ✅ README.md
- ✅ package.json
- ✅ server.js
- ✅ .gitignore

## Files NOT Included (via .gitignore):
- ❌ node_modules/ (if you install packages)
- ❌ .vscode/settings.json (personal settings)

---

## Need Help?
- GitHub Desktop Guide: https://docs.github.com/en/desktop
- VS Code Git: https://code.visualstudio.com/docs/sourcecontrol/overview

