const app = require('./app');
const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const { MONGO_DB } = process.env;

mongoose.set("strictQuery", true);

mongoose.connect(MONGO_DB)
  .then(() => {
    console.log("Database connection successful");
    app.listen(4000, () => { console.log("Server running. Use our API on port: 4000") });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


