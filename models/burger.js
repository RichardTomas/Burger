// Inside burger.js, import orm.js into burger.js
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.
const orm = require('../config/orm.js');

const burger = {

  all: function(callback) {
    orm.selectAll('burgers', callback);
  },

  create: function(planText, callback) {
    orm.insertOne('burgers', 'burger_name', planText, callback);
  },

  update: function(newText, id, callback) {
    orm.updateOne('burgers', 'burger_name', newText, id, callback);
  },

  delete: function(id, callback) {
    orm.delete('burgers', id, callback);
  }

}

module.exports = burger;