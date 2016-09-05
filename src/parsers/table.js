'use strict';

const moment = require('moment');
const time = require('./time');

module.exports = data => {
  return [[
    'Title'
  ]].concat(
      data.map(item => {
        return [
          `${item.title}`
        ];
      })
    );
};
