const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://abhinav:abhinav@cluster0.hgu8oko.mongodb.net/app?retryWrites=true&w=majority');


module.exports ={
    connect
}