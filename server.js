// Import libraries
const express = require("express");
// Import files
const db = require("./config/db-mongo");
const task = require("./routes/api/tasks");
const job = require("./routes/api/jobs");
// Define functions and variables
const port = process.env.PORT || 5000;
const app = express();

// Define middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/routes/api/jobs", job);
app.use("/routes/api/tasks", task);
// Define routes

// Listen on port 5000
app.listen(port, async () => {
  console.log(`
        ____________________________
        ${await db()}
        ----------------------------
        App running on port ${port}.
        Welcome to Planr
        For further API documentation
        go to http://localhost:${port}/
        ----------------------------
        
              `);
});
