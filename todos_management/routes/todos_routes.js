const express = require('express');

const router = express.Router();

module.exports = (db) => {
  // Getting the list of todos => /todos
  router.get('/', (req, res) => {
    // query to get the list of todos

    const textQuery = {
      text: `SELECT * FROM todos`,
    };

    db.query(textQuery)
      .then((result) => {
        const todosArr = result.rows;

        const templateVars = { todosArr: todosArr };

        res.render('todos', templateVars);
      })
      .catch((err) => console.log(err));
  });

  // Getting all the todos and all the categories
  router.get('/categories', (req, res) => {
    const textQueryTodos = {
      text: `SELECT * FROM todos`,
    };

    const textQueryCat = {
      text: `SELECT * FROM categories`,
    };

    const output = {};

    Promise.all([db.query(textQueryCat), db.query(textQueryTodos)])
      .then((results) => {

        output.categories = results[0].rows;
        output.todos = results[1].rows;

        res.json(output);

      })
      .catch((err) => console.log(err));
  });

  return router;
};
