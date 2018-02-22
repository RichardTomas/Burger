// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.
const orm = require('../config/orm.js');

const burger = {

  all: function(callback) {
    orm.selectAll('plans', callback);
  },

  create: function(planText, callback) {
    orm.insertInto('plans', 'plan', planText, callback);
  },

  update: function(newText, id, callback) {
    orm.update('plans', 'plan', newText, id, callback);
  },

  delete: function(id, callback) {
    orm.delete('plans', id, callback);
  }

}

module.exports = burger;