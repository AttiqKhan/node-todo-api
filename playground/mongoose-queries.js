const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
 
// var id = '5abc7bf002b015154005aec9';

// if (!ObjectID.isValid(id)) {
//     console.log('Invalid Id');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id: ', todo);
// }).catch((err) => console.log(err) );

var id = '5abc8d1bc59c8240c80ce01d';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User:', user);
}).catch((e) => console.log(e));