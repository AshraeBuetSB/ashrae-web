import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://ashraebuetsb.com';
const TODAY = new Date().toISOString().split('T')[0];

const staticPaths = [
  { path: '', priority: '1.0', changefreq: 'monthly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'activities', priority: '0.8', changefreq: 'weekly' },
  { path: 'members', priority: '0.8', changefreq: 'monthly' },
  { path: 'projects', priority: '0.8', changefreq: 'weekly' },
  { path: 'publications', priority: '0.8', changefreq: 'monthly' },
  { path: 'achievements', priority: '0.8', changefreq: 'weekly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' }
];

// Helper to escape XML special characters
function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function extractSlugs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Strip comments (single-line and multi-line) to avoid matching commented-out slugs
    content = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

    // Match pattern: slug: "value" or slug: 'value' or "slug": "value"
    const regex = /(?:slug|["']slug["'])\s*:\s*["']([^"']+)["']/g;
    const slugs = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      slugs.push(match[1]);
    }
    return slugs;
  } catch (error) {
    console.error(`❌ Critical error reading or parsing ${filePath}:`, error);
    process.exit(1); // Fail build on critical file missing/unreadable
  }
}

function generateSitemap() {
  console.log('Generating sitemap...');

  const projectsFile = path.join(__dirname, '../src/db/projects.ts');
  const activitiesFile = path.join(__dirname, '../src/db/activities.tsx');
  const achievementsFile = path.join(__dirname, '../src/db/achievements.tsx');

  const projectSlugs = extractSlugs(projectsFile);
  const activitySlugs = extractSlugs(activitiesFile);
  const achievementSlugs = extractSlugs(achievementsFile);

  console.log(`Found ${projectSlugs.length} projects, ${activitySlugs.length} activities, and ${achievementSlugs.length} achievements.`);

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Write static paths
  xml += `  <!-- Core Static Pages -->\n`;
  staticPaths.forEach(({ path: p, priority, changefreq }) => {
    xml += `  <url>\n`;
    xml += `    <loc>${escapeXml(`${DOMAIN}/${p}`)}</loc>\n`;
    xml += `    <lastmod>${TODAY}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Write dynamic projects
  if (projectSlugs.length > 0) {
    xml += `\n  <!-- Project Detail Pages -->\n`;
    projectSlugs.forEach(slug => {
      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(`${DOMAIN}/projects/${slug}`)}</loc>\n`;
      xml += `    <lastmod>${TODAY}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });
  }

  // Write dynamic activities
  if (activitySlugs.length > 0) {
    xml += `\n  <!-- Activity Detail Pages -->\n`;
    activitySlugs.forEach(slug => {
      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(`${DOMAIN}/activities/${slug}`)}</loc>\n`;
      xml += `    <lastmod>${TODAY}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });
  }

  // Write dynamic achievements
  if (achievementSlugs.length > 0) {
    xml += `\n  <!-- Achievement Detail Pages -->\n`;
    achievementSlugs.forEach(slug => {
      xml += `  <url>\n`;
      xml += `    <loc>${escapeXml(`${DOMAIN}/achievements/${slug}`)}</loc>\n`;
      xml += `    <lastmod>${TODAY}</lastmod>\n`;
      xml += `    <changefreq>monthly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });
  }

  xml += `</urlset>\n`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  console.log(`Successfully generated sitemap.xml at ${outputPath}`);
}

generateSitemap();
