const Todo = require('../model/todo');
const { generateId } = require('../utils/todos');

exports.addTodo = (req, res) => {
  if (!req.body.todo) return res.redirect('/');
  const todo = new Todo(generateId, req.body.todo);

  todo.save((err) => {
    if (!err) res.redirect('/');
    else console.log(err);
  });
};

exports.deleteTodo = (req, res) => {
  Todo.deleteTodo(req.params.id, (err) => {
    if (!err) res.redirect('/');
    else console.log(err);
  });
};

exports.completedTodo = (req, res) => {
  Todo.completedTodo(req.params.id, (err) => {
    if (!err) res.redirect('/');
    else console.log(err);
  });
};
