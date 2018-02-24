// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
const express = require("express");
const burger = require('../models/burger.js')
const router = express.Router();

// Use Handlebars to render the main index.html page with the plans in it.
router.get("/", function(req, res) {

  // call the model method that gets all the plans
  burger.all(function(err, data) {

    if (err) { return res.status(500).end(); }
    
    res.render("index", { burgers: data });
  });
});

// Create a new plan
router.post("/burgers", function(req, res) {

  // call the model method that creates plan
  burger.create(req.body.burger, function(err, data) {

    if (err) { return res.status(500).end(); }

    res.json({ id: data.insertId });

  })
});

// Retrieve all burgers
router.get("/burgers", function(req, res) {

  burger.all(function(err, result) {
    if (err) { return res.status(500).end(); }
    res.json(result);
  });

});

// Update a plan
router.put("/burgers/:id", function(req, res) {
  
  burger.update(req.body.burger, req.params.id, function(err, data) {
    
    if (err) { return res.status(500).end() }

    if (data.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }

    res.status(200).end();
  })
  
});

// Delete a plan
router.delete("/burgers/:id", function(req, res) {
  burger.delete(req.params.id, function(err, data) {
    
    if (err) { return res.status(500).end() }
    
    if (data.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }

    res.status(200).end();
  })
});

// we will use this router in our server.js like so...
// app.use(router);
module.exports = router;

