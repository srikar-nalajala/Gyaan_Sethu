const fs = require('fs');
const path = require('path');

const wwwDir = path.join(__dirname, 'www');
if (!fs.existsSync(wwwDir)) {
  fs.mkdirSync(wwwDir, { recursive: true });
}

const files = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json',
  'sw.js',
  'favicon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png'
];

files.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(wwwDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> www/`);
  }
});
