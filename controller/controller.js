const shorid = require('shortid');
const moment = require('moment');

const db = require('../db');
const key = 'tasks';

module.exports.indexTask = (req, res) => {
    res.render('tasks/task', {
        tasks: db.get(key).value()
    })
};

module.exports.createPost = (req, res) => {
    req.body.id = shorid.generate();
    req.body.time = moment().format('MMMM Do YYYY, h:mm:ss a');
    db.get(key).push(req.body).write();
    res.redirect('/tasks')
}

module.exports.update = (req, res) => {
    let id = req.params.id;
    
    let task =  db.get(key).find({id: id}).value();

    res.render('tasks/update', {
        task: task
    });
}

module.exports.updatePost = (req, res) => {
    let id = req.params.id
    req.body.id = id;
    db.get(key).find({id: id}).assign(req.body).write();
    res.redirect('/tasks');
}

module.exports.delete = (req, res) => {
    let id = req.params.id;

    db.get('tasks').remove({id: id}).write();
    res.redirect('/tasks')
}

module.exports.complete = (req, res) => {
    let id = req.params.id;
    let task = db.get('tasks').find({id: id}).value();

    res.render('tasks/complete', {
        id: id
    });

}

module.exports.completePost = (req, res) => {
    console.log(req.body);
}