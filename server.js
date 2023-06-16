const app = require('./app');
const mongoose = require("mongoose");

const {MONGO_DB, PORT=4000} = process.env

mongoose.connect(MONGO_DB)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => { console.log("Server running. Use our API on port: 4000") });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


