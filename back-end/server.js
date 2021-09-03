//database
require('./config/database').connect();
const mongoose = require('mongoose');
require('dotenv').config();

const TaskModel = require('./model/TaskModel');
const UserModel = require('./model/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//app
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const auth = require('./middleware/auth')

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(bodyParser());
// app.use(express.json);

app.get('/', (req, res) =>{

    res.send('Home');
});

app.get('/checkUserAuthentication', auth, (req, res) =>{

    res.json({auth:true}); 
});

app.post('/login', (req, res) =>{
    
    const {username, password} = req.body;

    try{
        UserModel.findOne({
            username: username
        }, (err, user) =>{
            if(user){
                
                bcrypt.compare(password, user.password).then( (correctPassword) =>{
    
                    if (correctPassword){
    
                        const token = jwt.sign(
                            {user_id: user._id, username},
                            process.env.TOKEN_KEY,
                            {
                                expiresIn: '2h',
                            }
                        );  
                        
                        user.token = token;
                        res.json({auth: true});
                    }
                    else{
                        res.json({auth: false});
                    }
                });
            }else{
                res.json({auth: false});

            }
        })
    }
    
    catch(err){
        console.log(err);
    }

});

app.post('/createTask', (req, res) =>{

    var taskId = new Date().getTime().toString();
    var taskName = req.body.taskName;

    try{

        TaskModel.create({
            taskId: taskId,
            taskName: taskName
        })

    }catch(err){

        console.log(err);
    }

    res.send("Task Created!");
})

app.delete('/deleteTask', (req, res) =>{

    var taskId = req.body.taskId;

    try{
        TaskModel.collection.deleteOne({taskId: taskId});

    }catch(err){
        console.log(err);
    }
    
    res.send("Task Deleted!");

})

app.get('/getAllTasks', (req, res) =>{

    try{
        TaskModel.find({}, function(err, tasks){
            if (err){
                console.log(err);
            }
            res.send(tasks);
        });
    }catch (err){
        console.log(err);
    }
})

module.exports = app;


/* Create Users **/

// async function createUser(){

//     const encryptPassword = await bcrypt.hash('toor', 10);

//     const username = 'root';
    
//     const user = await UserModel.create({
//         username: username,
//         password: encryptPassword
//     });

//     const token = jwt.sign(
//         {user_id: user._id, username},
//         process.env.TOKEN_KEY,
//         {
//             expiresIn: '2h',
//         }
//     )
    
//     user.token = token;
//     user.save();
//     console.log('user created!');
    
// }

// createUser();




