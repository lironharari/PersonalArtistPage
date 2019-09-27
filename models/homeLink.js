const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema(
    { 
      src:String,
      href: String,
      title: String,
      subtitle: String,
      rank: Number        
    },
    { timestamps: true }
  );

const HomeLink = mongoose.model('HomeLink', DataSchema);


module.exports = HomeLink;