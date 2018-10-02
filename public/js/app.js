$(function(){



const newTodo = function(event){
    event.preventDefault();
    $.ajax({url: '/api/todoItems', method: 'GET'})
    .then(function(todoItems){
console.log(todoItems)
    });
}

// newTodo(add);
const postItem = function(newtodo){
    $.ajax({url: '/api/todoItems', method: 'POST', data: newtodo})
    .then(function(todoItems){
        //target div todoitems
        let add = $('#submit').on('click',function(){
            $('#todoItems').append($('<li>', {
                 text: $('#todo').val()}
                 ));
        });
    //adding item the times i clicked on submit
    })

    $('#todoItems')
}

const remove = function(remove){
    $.ajax({url: '/api/todoItems', method: 'DELETE', data: remove})
    // .then(function(){
    //     $('fa-times').on('click', function(){
    //         $('li').remove(this)
    //     })})
}
$('#submit').on('click',function(){

   const val =  {todoname: $('#todo').val(),done: false}
    postItem(val)
});
});


// render();
    
/* <i class=
    "fas fa-times"></i> delete */