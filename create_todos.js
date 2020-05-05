const faker = require('faker');

const todosDb = {};

const usersDb = {};

let currentUserId = null;

// Getting the data of the user
const getUser = () => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
    catchPhrase: faker.company.catchPhrase(),
  };
};

// Registering the user in the database
const registerUser = (user) => {
};

// Creating a todo for the user
const createTodo = (userId) => {

}
