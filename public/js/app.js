$(function () {


    const todoList = function () {
        $('#todoitems').empty();
        $.ajax({ url: '/api/todoItems', method: 'GET' })
            .then(function (todoList) {
                todoList.forEach(e => {$(`#todoItems`).append($(`<li><input class="checkbox" type="checkbox"/><b>${e.todoname}</b><i class="fas fa-times"></li>`))})
                console.log(todoList)
            });
    }

    todoList();
    const postItem = function (newtodo) {
        $.ajax({ url: '/api/todoItems', method: 'POST', data: newtodo })
            .then(function (todoItems) {
                let todoname = $('#todo').val();
                $('#todoItems').append($(`<li><input class="checkbox" type="checkbox"/><b>${todoname}</b><i class="fas fa-times"></i></li>`))
            })


        $('#todoItems')
    }

    // const remove = function () {
    //     $.ajax({ url: '/api/todoItems/:id', method: 'DELETE'})
    //         .then(function () {
    //             $('#todoItems').on('click','', function(){
    //                 $(this).remove()
    //             })
    //         }) 
    //         console.log()
    //         remove();
    // }

    $('#todoItems').on('click', '.fa-times', function () {

        $.ajax({ url: `/api/todoItems/:id`, method: "DELETE" })
            .then(function (data) {
               
            })
            .catch(function (err) {
                res.json(err);
            });
    })

    $('#submit').on('click', function () {
        const val = { todoname: $('#todo').val(), done: false }
        postItem(val)

           
    });
});