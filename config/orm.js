// Inside the connection.js file, setup the code to connect Node to MySQL.

// Export the connection.

// Create an orm.js file inside config directory.
// Import (require) connection.js into orm.js

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.
const connection = require('./connection.js');

// orm the abstract way of communicating with the database
// makes the actual SQL queries
const orm = {
  selectAll: function(table, onResult) {
    const query = 'SELECT * FROM ??';
    connection.query(query, [table], function(err, result) {
      // this callback was passed all the way from the controller, through the model
      onResult(err, result);
    })
  },
  insertInto: function(table, columns, values, onResult) {
    const query = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(query, [table, columns, values] , function(err, result) {
      // now we pass the result back in our callback
      console.log(err)
      onResult(err, result);
    })
  },
  update: function(table, column, value, id, onResult) {
    const query = 'UPDATE ?? SET ?? = ? WHERE id = ?'
    connection.query(query, [table, column, value, id], function(err, result) {
      console.log(err)
      onResult(err, result);
    })
  },
  delete: function(table, id, onResult) {
    const query = "DELETE FROM ?? WHERE id = ?"
    connection.query(query, [table, id], function(err, result) {
      onResult(err, result);
    })
  }
}

module.exports = orm;

