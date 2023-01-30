const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title : String,
    note:String,
    author:String,
    category:String

})

const Notemodel = mongoose.model("notes",noteSchema);

module.exports={
    Notemodel
}