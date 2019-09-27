const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    {    
      title: String,
      subtitle: String,
      description: String,
      rank: Number,
      src:String,
      year: String,
      keyWords:[String],
      photos:[{ src: String, description: String }]
    },
    { timestamps: true }
  );

const Documentary = mongoose.model('Documentary', DataSchema);


module.exports = Documentary;