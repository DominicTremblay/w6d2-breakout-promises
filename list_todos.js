const { usersDb, todosDb } = require('./todosDb');


const getUsers = () => {
  return new Promise((resolve, reject) => {
    const error = null;

    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(Object.values(usersDb));
      }
    }, 1000);
  });
};


const getTodos = () => {
  return new Promise((resolve, reject) => {
    const error = null;

    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(Object.values(todosDb));
      }
    }, 1000);
  });
};

const getUserTodos = () => {
  return Promise
    .all([getUsers(), getTodos()])
    .then(results => {

      console.log(results[0]);
      console.log(results[1]);

    })
    .catch(err => console.log(err));

};

getUserTodos();