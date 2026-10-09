const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });

  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);

    if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

try {
  console.log('Syncing static export from out/ to repository root for cPanel direct hosting...');
  copyFolderSync(path.join(__dirname, 'out'), __dirname);
  console.log('✓ Successfully synchronized static build to root for cPanel instant deployment!');
} catch (err) {
  console.error('Error syncing export:', err);
}
