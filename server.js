const app = require('./app');
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Tetiana:quzTACc8SpWCiQ3t@cluster0.zxp2v4i.mongodb.net/db-contacts?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(4000, () => { console.log("Server running. Use our API on port: 4000") });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


