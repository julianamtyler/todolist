$(function(){



const newTodo = function(event){
    event.preventDefault();
    $.ajax({url: '/api/todoItems', method: 'GET'})
    .then(function(todoItems){
console.log(todoItems)
    });
}


const postItem = function(newtodo){
    $.ajax({url: '/api/todoItems', method: 'POST', data: newtodo})
    .then(function(todoItems){
        //target div todoitems
        let div = $('#submit').on('click',function(){
            $('#todoItems').append($('<li>', {
                 text: $('#todo').val()}
                 ));
        });
        return div
    })

    $('#todoItems')
}

const remove = function(remove){
    $.ajax({url: '/api/todoItems', method: 'DELETE', data: remove})
    .then(function(){

    })
}
$('#submit').on('click',function(){

   const val =  {todoname: $('#todo').val(),done: false}
    postItem(val)
});
});

// newTodo();
// render();
    
/* <i class=
    "fas fa-times"></i> delete */