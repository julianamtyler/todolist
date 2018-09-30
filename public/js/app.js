const render = function () {
    todoList()
}

const todoList = function (outputElement) {
    const output = $(outputElement)

    const todoItem = $("<li class='todoItem'>")

    todoItem.append(
        // $("<button class='fa-square'>"),
        $("<p>").text(''),
        // $("<button class='fa-times' id='deleteBtn'>").text('')
    )
    output.append(todoItem);

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
        console.log(todoItems)
    })
    
    
}
$('#submit').on('click',function(){

   const val =  {todoname: $('#todo').val(),done: false}
    postItem(val)
})
// render();
    


    // <i class="far fa-square"></i> incomplete
    // <i class="fas fa-check-square"></i> complete
    // <i class="fas fa-times"></i> delete