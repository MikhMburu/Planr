// Import libraries
const express = require("express");
// Import files
const db = require("./config/db-mongo");
// Define functions and variables
const port = process.env.PORT || 5000;
const app = express();

// Define middleware
app.use(express.static("public"));
// Define routes

// Listen on port 5000
app.listen(port, async () => {
  console.log(`
        ____________________________
        ${await db()}
        ----------------------------
        App running on port ${port}.
        Welcome to Planr
        Go to http://127.0.0.1/5000 
        for further API documentation
        ----------------------------


              `);
});
