'use strict';

// create App function
    module.exports = function(app) {
        var todoList = require('../Controller/Controller');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/")
        .get(todoList.listAllTodos)
        .post(todoList.createNewTodo);
        
    app
        .route("/todo/:id")
        .put(todoList.updateTodo)
        // .delete(todoList.deleteTodo);
    };

    