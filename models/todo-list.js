const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const todoSchema = new mongoose.Schema({
    todoname:{
    type: String,
    },
    done: {
        type: Boolean
    }},
{ collection: 'todoItems'}
)
module.exports = mongoose.model('todolist',todoSchema);
