$(function () {


const todoList = function () {
    $('#todoitems').empty();
    $.ajax({ url: '/api/todoItems', method: 'GET' })
        .then(function (todoList) {
            todoList.forEach(e => {$(`#todoItems`).append($(`<li class="list"><input class="checkbox" type="checkbox"/><span><b>${e.todoname}</b></span><i class="fas fa-times"></li></div>`))})
            console.log(todoList)
        });
}
todoList();

    const postItem = function (newtodo) {
        $.ajax({ url: '/api/todoItems', method: 'POST', data: newtodo })
            .then(function (todoItems) {
                console.log('hello there')
                let todoname = $('#todo').val();
                $('#todoItems').append($(`<li class="list"><input class="checkbox" type="checkbox"/><span><b>${todoname}</b></span><i class="fas fa-times"></i></li>`))
            })


        $('#todoItems')
    }

    // const remove = function (remove) {
    //     $.ajax({ url: '/api/todoItems', method: 'DELETE', data: remove })
    //         .then(function () {
    //             // $('#fa-times').on('click', function () {
    //             //     remove();
    //             // })
    //             $('fa-times').on('click', function(){
    //                 $(this).remove()
    //             })
    //         })
    // }

    $('#submit').on('click', function (event) {
        event.preventDefault();
        const val = { todoname: $('#todo').val(), done: false }
        postItem(val)

        //  remove();   
    });
});
