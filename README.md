# SAFA AL BAHAR TRADING COMPANY - Web Deployment Package

Official website deployment package for **Safa Al Bahar Trading Company** ([www.safaalbahar.com](https://www.safaalbahar.com/)).

## 📋 Overview
- **Domain:** `https://www.safaalbahar.com`
- **Architecture:** React Single Page Application (SPA) with Vite, Tailwind CSS, Radix UI & Supabase client.
- **Hosting Target:** Azure Static Web Apps (SWA) / Azure CDN.

## 🚀 Deployment to Azure Static Web Apps

### 1. Azure DevOps Pipeline (CI/CD)
This repository includes a pre-configured `azure-pipelines.yml`. When connected to Azure DevOps:
1. In Azure DevOps, go to **Pipelines** -> **New Pipeline**.
2. Select your Azure Repos Git repository.
3. Choose the existing `azure-pipelines.yml`.
4. In Azure Portal, retrieve the **Deployment Token** from your Static Web App resource:
   - `Static Web App` -> `Overview` -> `Manage deployment token`.
5. In Azure DevOps, create a pipeline secret variable named `AZURE_STATIC_WEB_APPS_API_TOKEN` and paste the token.
6. Run the pipeline to deploy.

### 2. Manual CLI Deployment
To deploy directly via the Azure Static Web Apps CLI:
```bash
# 1. Install CLI
npm install -g @azure/static-web-apps-cli

# 2. Deploy dist folder
cd e:\safa-updated-deployment
swa deploy ./dist --deployment-token <YOUR_DEPLOYMENT_TOKEN> --env production
```

## 🔒 Security Configuration
The deployment includes `staticwebapp.config.json` configured with:
- **Strict-Transport-Security (HSTS)** to enforce HTTPS at all times.
- **Anti-Clickjacking** (`X-Frame-Options: SAMEORIGIN`).
- **MIME Sniffing Prevention** (`X-Content-Type-Options: nosniff`).
- **XSS Protection** (`X-XSS-Protection: 1; mode=block`).
- **1-Year Immutable Caching** for static assets in `/assets/`.
- **SPA Fallback Routing** preventing 404 errors on page refreshes.

## 📁 Directory Structure
```
├── dist/                          # Production-ready static output
│   ├── assets/                    # Bundled JS, CSS, images, company profile PDF
│   ├── index.html                 # Main entry HTML with optimized SEO & OpenGraph tags
│   ├── manifest.json              # PWA manifest
│   ├── robots.txt                 # Search engine crawler instructions
│   ├── sitemap.xml                # Canonical XML sitemap for www.safaalbahar.com
│   ├── staticwebapp.config.json   # Azure Static Web Apps routing & security headers
│   └── llms.txt                   # LLM/AI crawler discovery file
├── staticwebapp.config.json       # Root Azure config fallback
├── azure-pipelines.yml            # Automated Azure DevOps CI/CD pipeline
└── package.json                   # Project metadata and dependencies
```
