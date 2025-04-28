const fs = require('fs');
const { join } = require('path');
const { getMapJSON } = require('dotted-map');

const mapJsonString = getMapJSON({
  height: 224,
  grid: 'diagonal',
});

fs.writeFileSync(join(__dirname, '..', 'map.json'), mapJsonString);
