const todoUtils = require('../utils/todos');

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    todoUtils.getTodos((todos) => {
      todos.push(this);

      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    todoUtils.getTodos((todos) => {
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      todoUtils.saveTodos(
        todos.filter((todo) => todo.id != id),
        (err) => {
          callback(err);
        }
      );
    });
  }

  static completedTodo(id, callback) {
    todoUtils.getTodos((todos) => {
      const indexTodo = todos.findIndex((todo) => todo.id == id);

      const todo = todos[indexTodo];
      todo.completed = true;
      todos[indexTodo] = todo;

      todoUtils.saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;
