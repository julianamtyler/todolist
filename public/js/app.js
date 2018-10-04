$(function(){



const newTodo = function(){
    $.ajax({url: '/api/todoItems', method: 'GET'})
    .then(function(todoItems){
console.log(todoItems)
    });
}

newTodo();
const postItem = function(newtodo){
    $.ajax({url: '/api/todoItems', method: 'POST', data: newtodo})
    .then(function(todoItems){
        $('#todoItems').append($(`<div><input type="checkbox"/>,{newtodo},<i class="fas fa-times"></i></div>`)
        // $('#todoItems').append($(`<input type="checkbox"/>`))
        // .append($(`<li>` ,{text: $('#todo').val()}, ))
        // .append(`<i class="fas fa-times"></i>`)
        // ;
    )})
   

    $('#todoItems')
}

const remove = function(remove){
    $.ajax({url: '/api/todoItems', method: 'DELETE', data: remove})
    .then(function(){
        // $('fa-times').on('click', function(){
        //     $(this).remove()})
        })
}
$('#submit').on('click',function(){

   const val =  {todoname: $('#todo').val(),done: false}
    postItem(val)

//  remove();   
});
});


/* <i class=
    "fas fa-times"></i> delete */