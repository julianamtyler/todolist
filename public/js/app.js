$(function () {

//adds items in database but does not show it in console until refresh

    const todoList = function () {
        $('#todoitems').empty();
        $.ajax({ url: '/api/todoItems', method: 'GET' })
            .then(function (todoItems) {
                console.log(todoItems)
            });
    }

    todoList();
    const postItem = function (newtodo) {
        $.ajax({ url: '/api/todoItems', method: 'POST', data: newtodo })
            .then(function (todoItems) {
                let todoname = $('#todo').val()
                $('#todoItems').append($(`<div><input class="checkbox" type="checkbox"/>${todoname}<i class="fas fa-times"></i></div>`))
            })


        $('#todoItems')
    }

    const remove = function (remove) {
        $.ajax({ url: '/api/todoItems', method: 'DELETE', data: remove })
            .then(function () {
                // $('#fa-times').on('click', function () {
                //     remove();
                // })
                $('fa-times').on('click', function(){
                    $(this).remove()
                })
            })
    }
    $('#submit').on('click', function () {

        const val = { todoname: $('#todo').val(), done: false }
        postItem(val)

        //  remove();   
    });
});
