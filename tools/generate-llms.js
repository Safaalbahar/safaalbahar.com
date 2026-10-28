#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {
  PRODUCT_CATEGORIES,
  ROUTES,
  getProductCategoryPath,
  getShopCategoryPath
} from '../src/config/routes.js';

const siteUrl = 'https://safa.safaalbahar.net';
const outputDir = path.join(process.cwd(), 'public');

const pages = [
  { path: ROUTES.home, title: 'Safa Al Bahar | Professional Food Service Solutions', description: 'Direct food importer and distribution partner for HORECA, retail, and wholesale across Saudi Arabia.' },
  { path: ROUTES.products, title: 'Frozen Food Solutions | Safa Al Bahar Products', description: 'Explore premium frozen, chilled, and dry food categories for food-service businesses.' },
  { path: ROUTES.shop, title: 'Shop Premium Products | Safa Al Bahar', description: 'Browse premium chilled meat, frozen seafood, vegetables, rice, and food-service products.' },
  { path: ROUTES.services, title: 'Food Supply Services | Safa Al Bahar', description: 'HORECA, retail, wholesale, and cold-chain food distribution services across Saudi Arabia.' },
  { path: ROUTES.industries, title: 'Industries We Serve | Safa Al Bahar', description: 'Food supply solutions for HORECA, retail, supermarkets, and wholesale industries.' },
  { path: ROUTES.about, title: 'About Safa Al Bahar', description: 'Learn about Safa Al Bahar, a direct food importer and distribution partner in Saudi Arabia.' },
  { path: ROUTES.contact, title: 'Contact Safa Al Bahar', description: 'Contact the Safa Al Bahar sales and customer care team.' },
  { path: ROUTES.requestQuote, title: 'Request a Food Supply Quote | Safa Al Bahar', description: 'Request a tailored food supply quote for your business.' },
  { path: ROUTES.branches, title: 'Safa Al Bahar Branch Locations', description: 'Find Safa Al Bahar branches and distribution centers in Saudi Arabia.' },
  { path: ROUTES.distributionPartner, title: 'Distribution Partner | Safa Al Bahar', description: 'Partner with Safa Al Bahar to distribute food brands across Saudi Arabia.' },
  ...PRODUCT_CATEGORIES.flatMap(category => [
    {
      path: getProductCategoryPath(category.id),
      title: `${category.label} Products | Safa Al Bahar`,
      description: `Explore premium ${category.label.toLowerCase()} for HORECA, retail, and wholesale supply.`
    },
    {
      path: getShopCategoryPath(category.id),
      title: `Shop ${category.label} | Safa Al Bahar`,
      description: `Browse available ${category.label.toLowerCase()} from Safa Al Bahar.`
    }
  ])
];

const llmsContent = `## Pages\n${pages
  .map(page => `- [${page.title}](${page.path}): ${page.description}`)
  .join('\n')}\n`;

const lastModified = new Date().toISOString().slice(0, 10);
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path: routePath }, index) => `  <url>
    <loc>${siteUrl}${routePath}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${routePath.startsWith(ROUTES.shop) ? 'daily' : 'weekly'}</changefreq>
    <priority>${index < 3 ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'llms.txt'), llmsContent, 'utf8');
fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemapContent, 'utf8');
