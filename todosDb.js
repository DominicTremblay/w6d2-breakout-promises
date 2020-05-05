const faker = require('faker');

const todosDb = {};

const usersDb = {};

const generateData = () => {

  for (let i=0; i < 5; i++ ) {

    // Generate user
    const userId = faker.random.uuid().substring(0,6);
    const user = {
      id: userId,
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      catchPhrase: faker.company.catchPhrase(),
    };
    usersDb[userId] = user;

    // Generate the todos
    for (let j=0; j < 5; j++) {
      const todoId = faker.random.uuid().substring(0,6); 

      const newTodo = {
        id: todoId,
        task: `${faker.hacker.verb()} ${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        completed: false,
        userId: userId
      }
  
      todosDb[todoId] = newTodo;
    }

  }
}
generateData();

module.exports = {
  todosDb,
  usersDb
}
