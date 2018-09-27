const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new Schema({
    todoname:{
    type: String,
    }  
});
const todoItems = mongoose.model('todolist',todoSchema);

module.exports = todoItems;