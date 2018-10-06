const db = require('../models');

module.exports = function (app) {

  app.get('/api/todoItems', function (req, res) {
    db.todoItems.find({})
      .then(function (dbTodo) {
        res.json(dbTodo);
      })
      .catch(function (errors) {
        res.json(errors);
      });
  });


  app.post('/api/todoItems', function (req, res) {
    db.todoItems.create(req.body)
      .then(function (dbTodo) {
        res.json(dbTodo);
      });

  });

  app.put('/api/todoItems', function(req, res) {
    db.todoItems.findOneAndUpdate({ todoname: req.body.todoname }, { $set: { todoname: req.body.todoname } })
      .then(function (dbTodo) {
        res.json(dbTodo);
      })
      .catch(function (errors) {
        res.json(errors);
      });
  });

  // app.delete('api/todoItems', function(req,res){
  //   let id = req.params.id;
  //   let todoItems = db.get().todoItems('todoItems');
  //   todoItems.deleteOne({_id: new mongo.ObjectId(id)}, function(err,results){

  //   })
   
      // res.json(success: id)
}
