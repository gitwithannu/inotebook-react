const mongoose = require('mongoose');
const { Schema } = mongoose;
const BannersSchema = new Schema({
     image: {
          type: String,
          required:true
     },
     path: {
          type: String,   
     },
     date: {
          type: Date,
          default: Date.now
     }
});

module.exports = mongoose.model('banners', BannersSchema);