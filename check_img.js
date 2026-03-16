const probe = require('probe-image-size');
const fs = require('fs');

async function check() {
  try {
    const data = fs.readFileSync('d:/Desktop/portfolio/public/profil.png');
    const result = probe.sync(data);
    console.log(result);
  } catch (e) {
    console.log('Error:', e.message);
  }
}
check();
