const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const filePath = path.join(rootDir, 'data', 'todos.json');

class Todo {
  constructor(id, text, completed = false) {
    this.id = id;
    this.text = text;
    this.completed = completed;
  }

  save(callback) {
    fs.readFile(filePath, (err, fileContent) => {
      // if (err) return [];
      const todos = JSON.parse(fileContent);
      todos.push(this);

      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        if (err) callback(err);
        else return callback([]);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) return [];
      const todos = JSON.parse(fileContent);
      callback(todos);
    });
  }

  static deleteTodo(id, callback) {
    fs.readFile(filePath, (err, fileContent) => {
      const todos = JSON.parse(fileContent);
      const filterTodo = todos.filter((todo) => todo.id != id);

      fs.writeFile(filePath, JSON.stringify(filterTodo), (err) => {
        callback(err);
      });
    });
  }

  static completedTodo(id, callback) {
    fs.readFile(filePath, (err, fileContent) => {
      const todos = JSON.parse(fileContent);
      const indexTodo = todos.findIndex((todo) => todo.id == id);

      const todo = todos[indexTodo];
      todo.completed = true;
      todos[indexTodo] = todo;

      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        callback(err);
      });
    });
  }
}

module.exports = Todo;
