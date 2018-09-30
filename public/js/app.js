const render = function () {
    todoList()
}





const newTodo = function(){
    $.ajax({url: '/api/todoItems', method: 'GET'})
    .then(function(todoItems){
console.log(todoItems)
    });
}

// newTodo();

const postItem = function(newtodo){
    $.ajax({url: '/api/todoItems', method: 'POST', data: newtodo})
    .then(function(todoItems){
        //target div todoitems
        let div = $('<div>').addClass('todoItems');
      div.append(`${todo}.val()`);

    })
    
}

const remove = function(remove){
    $.ajax({url: '/api/todoItems', method: 'DELETE', data: remove})
    .then(function(){

    })
}
$('#submit').on('click',function(){

   const val =  {todoname: $('#todo').val(),done: false}
    postItem(val)
})
// render();
    
// <i class="fas fa-times"></i> delete