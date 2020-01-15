const express = require('express');
const morgan = require('morgan');
const app = express();
const {mongoose} = require('./database');

//Settings
app.set('port',process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users',require('./routers/users.routes'));
app.use('/api/companies', require('./routers/companies.routes'));
app.use('/api/booking',require('./routers/booking.routes'));

//Starting the server

app.listen(app.get('port'),() =>{
    console.log('Server on port 4000') ;
});