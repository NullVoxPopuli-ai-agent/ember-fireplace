import fs from 'node:fs';
import {join} from 'node:path';

const recipes = join(import.meta.dirname, '../cookbook/');
const categories = {};

fs.readdirSync(recipes)
  .filter(file => !file.startsWith('_'))
  .map(file => file.replace('.md', ''))
  .forEach(file => {
    const parts = file.split('-');
    const category = parts.shift();

    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push({
      text: parts.join(' '),
      link: `/cookbook/${file}`
    })
  });

const sidebarCookbook = [
  {
    text: 'Cookbook',
    link: '/cookbook',
    items: Object.entries(categories).map(([category, links]) => ({
        text: category,
        items: links
      })
    )
  }
];

export { sidebarCookbook };
