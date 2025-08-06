const { getTodos, saveTodos } = require('../utils/todos');

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    getTodos((todos) => {
      todos.push(this);

      saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }

  static fetchAll(callback) {
    getTodos((todos) => {
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    getTodos((todos) => {
      saveTodos(
        todos.filter((todo) => todo.id != id),
        (err) => {
          callback(err);
        }
      );
    });
  }

  static completedTodo(id, callback) {
    getTodos((todos) => {
      const indexTodo = todos.findIndex((todo) => todo.id == id);

      const todo = todos[indexTodo];
      todo.completed = true;
      todos[indexTodo] = todo;

      saveTodos(todos, (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;
