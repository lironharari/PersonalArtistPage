const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {    
      src: String,    
      title: String,
      description: String,
      category: String,
      subcategory: String,
      location: String,
      year: String,
      keyWords:[String],
      rank: Number,
      width: Number,
      height: Number
    },
    { timestamps: true }
  );
  
  
const Photo = mongoose.model('Photo', DataSchema);


module.exports = Photo;