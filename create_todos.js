const faker = require('faker');

const todosDb = {};

const usersDb = {};

let currentUserId = null;

const getUser = () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    catchPhrase: faker.company.catchPhrase(),
  };
  // Executor Function
  // promiseObj = new Promise(executorFct)
  const promiseObj = new Promise((resolve, reject) => {
    const error = null;

    setTimeout(() => {
      if (!error) {
        resolve(user);
      } else {
        reject(error);
      }
    }, 1000);
  });
  return promiseObj;
};

const registerUser = (user) => {
  return new Promise((resolve, reject) => {
    const error = null;

    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        // generating the user id
        const id = faker.random.uuid().substring(0,6);

        // Adding the user id to the user object
        user.id = id;

        // inserting the user in the db
        usersDb[id] = user;

        // Sending back the user with the id
        resolve(user);
      }
    }, 1000);
  });
};

const createTodo = (userId) => {

  return new Promise((resolve, reject)=>{

    const error = null;

    setTimeout(()=>{

      if (error) {
        resolve(error);
      } else {
        
        const id = faker.random.uuid().substring(0,6); 

        const newTodo = {
          id: id,
          task: `${faker.hacker.verb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}`,
          completed: false,
          userId: userId
        }

        todosDb[id] = newTodo;

        resolve(newTodo);

      }
        
    }, 1000);


  })

}

getUser()
  .then((user) => {
    // Success
    return registerUser(user);
  })
  .then(savedUser => {

    console.log("The user has been saved to the db");

    // logging in the current user using its id
    currentUserId = savedUser.id

    return createTodo(currentUserId);

  })
  .then(todo => {

    console.log(todo);

  })
  // Will catch any error by any of the async calls
  .catch((err) => console.log(err));
