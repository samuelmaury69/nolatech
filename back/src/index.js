const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//settings
app.set('port', process.env.PORT || 3001);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//routes
app.use(require('./Login'));

//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})