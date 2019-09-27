const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {    
      title: String,
      lyrics: String,
      src:String,
      year: String,
      keyWords:[String],
      rank: Number
    },
    { timestamps: true }
  );
  
const Song = mongoose.model('Song', DataSchema);


module.exports = Song;