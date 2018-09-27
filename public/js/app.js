$(function () {

    const render = function () {
        $('#todoitems').empty();
        $.ajax({ url: '/api/todolist', method: 'GET' })
            .then(function (data) {
                let htmlstr = '';
                data.forEach(item => { htmlstr += `<li class= "newtodo">${item.name}</li>` });
                $('#todoitem').html(htmlstr);
            })
            .catch(function (errors) {
                console.log(errors);
            });
    }

    $('#submit').on('click',function(event){
        event.preventDefault();

        const newTodo = {
            todoname: $('#new').val().trim()
            };
            
            for (let key in newTodo){
                if (newTodo[key]===''){
                alert('please enter your new todo item');
                return;
            }}

        
render()
        });
    });