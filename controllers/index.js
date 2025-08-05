const Todo = require('../model/todo');

exports.getIndex = (req, res) => {
  Todo.fetchAll((todos) => {
    res.render('index', {
      pageTitle: 'اولین نمونه کار بک اند - اپ کارهای روزمره',
      todos,
    });
  });
};
