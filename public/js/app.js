$(function () {
    const state ={
        todoList: []
    }

    const render = function () {
        $('#todoitems').empty();
        $.ajax({ url: '/api/todolist', method: 'GET' })
            .then(function () {
                let htmlstr = '';
                state.todoList.forEach(item => { htmlstr += `<li class= "newtodo">${item.name}</li>` });
                $('#todoitem').html(htmlstr);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    $('#submit').on('click',function(event){
        event.preventDefault();

        const newTodo = {
            todoname: $('#new').val()
            };
            
            for (let key in newTodo){
                if (newTodo[key]===''){
                alert('please enter your new todo item');
                return;
            }}

        
render()
        });
    });