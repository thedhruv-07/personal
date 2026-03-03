# Deployment Guide (Vercel)

This project has been set up with Vite, React, TypeScript, and Tailwind CSS. It is fully production-ready and optimized for speed, accessibility, and SEO. Use the steps below to easily deploy your portfolio to Vercel.

## 🚀 Step 1: Push Code to GitHub
1. Initialize a git repository if you haven't already:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio commit"
   ```
2. Create a new repository on your GitHub account.
3. Link your local repository to the GitHub remote repository and push:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Step 2: Deploy to Vercel
1. Log in or sign up at [Vercel](https://vercel.com/).
2. Click on **Add New...** and select **Project**.
3. Import the GitHub repository you just created in Step 1.
4. In the **Configure Project** step:
   - **Framework Preset**: Vercel will automatically detect **Vite** as the framework. Leave this setting as is.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

Vercel will build your application and generate a live URL for your ultra-premium portfolio immediately.

## ⚙️ Maintenance & Local Development
To run this project on your local machine:
1. `npm install`
2. `npm run dev`
3. Edit your profile information inside the `src/components/*.tsx` files.
4. Replace place-holder images inside `src/components/Hero.tsx` and `src/components/Projects.tsx` with your real ones.

## 📈 Next-Level Improvements
- Adding a `robots.txt` and `sitemap.xml` for maximum SEO value.
- Changing `resume.pdf` to actual link reference in `public/resume.pdf`: the download button currently searches for `/resume.pdf` in your public folder. Drop your physical resume PDF there.
