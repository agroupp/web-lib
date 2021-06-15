const { copyFileSync } = require('fs');

const source = process.argv.slice(2)[0];
const destination = process.argv.slice(2)[1];
copyFileSync(source, destination);
