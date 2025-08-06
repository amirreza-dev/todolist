const Todo = require('../model/todo');
const { getDoneTodos, getReminingTodos } = require('../utils/todos');

exports.getIndex = (req, res) => {
  getDoneTodos((doneTodos) => {
    getReminingTodos((reminingTodos) => {
      Todo.fetchAll((todos) => {
        res.render('index', {
          pageTitle: 'اولین نمونه کار بک اند - اپ کارهای روزمره',
          todos,
          doneTodos,
          reminingTodos,
        });
      });
    });
  });
};
