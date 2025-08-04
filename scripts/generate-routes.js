/**
 * Script to generate dynamic routes for static site generation
 * Run this before building the site to ensure all dynamic routes are pre-rendered
 */
const fs = require('fs').promises;
const path = require('path');
const contentDir = path.join(__dirname, '../content');
const routesFile = path.join(__dirname, '../routes.json');

async function getDirectories(source) {
  const items = await fs.readdir(source, { withFileTypes: true });
  return items
    .filter(item => item.isDirectory())
    .map(item => item.name);
}

async function getFiles(source) {
  const items = await fs.readdir(source, { withFileTypes: true });
  return items
    .filter(item => !item.isDirectory())
    .map(item => item.name);
}

async function generateRoutes() {
  const routes = [
    '/',
    '/reviews',
    '/categories',
    '/blog'
  ];

  // Generate category routes
  try {
    const categoryTypes = await getDirectories(path.join(contentDir, 'reviews'));
    for (const category of categoryTypes) {
      routes.push(`/categories/${category}`);
    }
  } catch (err) {
    console.error('Error generating category routes:', err);
  }

  // Generate review routes
  try {
    const categoryTypes = await getDirectories(path.join(contentDir, 'reviews'));
    for (const category of categoryTypes) {
      const reviewFiles = await getFiles(path.join(contentDir, 'reviews', category));
      for (const reviewFile of reviewFiles) {
        if (reviewFile.endsWith('.md')) {
          const slug = reviewFile.replace('.md', '');
          routes.push(`/reviews/${category}/${slug}`);
        }
      }
    }
  } catch (err) {
    console.error('Error generating review routes:', err);
  }

  // Write routes to file
  try {
    await fs.writeFile(routesFile, JSON.stringify(routes, null, 2));
    console.log(`Generated ${routes.length} routes for static site generation`);
  } catch (err) {
    console.error('Error writing routes file:', err);
  }
}

generateRoutes().catch(err => {
  console.error('Failed to generate routes:', err);
  process.exit(1);
});
