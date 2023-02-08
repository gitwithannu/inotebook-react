const mongoose = require('mongoose');
const monoURL = "mongodb://localhost:27017/inotebook";
mongoose.set("strictQuery", false);
const connectToMongo = () => {
     mongoose.connect(monoURL, () => {
          console.log('Successfully Connect to Mongo DB');
     });
}

module.exports = connectToMongo;