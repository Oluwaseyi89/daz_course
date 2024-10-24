const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'daz_course',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

