const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path')

const { mongoose } = require('./database');

//settings 

app.set('port', process.env.PORT || 3000);


//Middlelewares
app.use(morgan('dev'));
app.use(express.json());




//Routes
app.use('/api/tasks', require('./routes/task.routes'));




//Statisc Files

app.use(express.static(path.join(__dirname, 'public')))


//Starting Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});