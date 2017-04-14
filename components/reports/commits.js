'use strict';

const PropertyReport = require('./property');

module.exports = class extends PropertyReport {

  constructor(options = {}) {
    options.property = 'commitsPushed';
    options.title = 'Commits pushed';
    super(options);
  }
};
