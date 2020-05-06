const faker = require('faker');

const todosDb = {};

const usersDb = {};

let currentUserId = null;

// Getting the data of the user
const getUser = () => {

  return new Promise((resolve, reject) => {

    const error = null;

    setTimeout(() =>{

      if(error) {
        reject('Cannot get user');
      } else {

        const user = {
          name: faker.name.findName(),
          email: faker.internet.email(),
          avatar: faker.internet.avatar(),
          catchPhrase: faker.company.catchPhrase(),
        };

        resolve(user);
      }


    }, 1000)


  });










  
};

// Registering the user in the database
const registerUser = (user) => {
};

// Creating a todo for the user
const createTodo = (userId) => {

}

// Creating a promise
const promisedUser = getUser();

promisedUser  
  .then(user => {

    const templateVars = {user: user}
    // sucess

    console.log(user)
  })
  // error 
  .catch(err => console.log(err));




// Consuming the promise
// Using the promise

const promiseObj = new Promise((resolve, reject) => { 

  const error = null;

  setTimeout(() => {

    if (error) {
      reject('Error getting the user');
    } else {
      resolve('Mario');
    }

  }, 1000)

});

promiseObj
  .then(username => {
    // success 
    // console.log(username);
  })
  .catch(err => console.log(err))