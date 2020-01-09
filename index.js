const express = require('express');
const app = express();

const tasks = require('./routes/task.route')

const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//pug
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/tasks', tasks);

app.use(express.static('public'));

app.listen(port, ()=> {
    console.log('Server Listening start with port: ' + port);
})