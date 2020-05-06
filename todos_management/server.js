const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const {pool:db} = require('./db/dbConnect');
const todoRoutes = require('./routes/todos_routes');

// enabling the todosRoutes
app.use('/todos', todoRoutes(db));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

res.redirect('/todos');

})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
