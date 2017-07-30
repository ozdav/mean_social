'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  app.route('/api/getsocials').get(core.getSocials);
  app.route('/api/db').put(core.setDb);
};
