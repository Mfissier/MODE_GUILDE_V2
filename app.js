const website = () => {

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
//const initCron = require('./cron');


const app = express();
const port = 3001;
var hostname = 'localhost';


const ObjectId = require("mongodb").ObjectID;


app.get("/session/:id", (request, response) => {
    collection.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	secret: 'guildemodé',
	resave: false,
	saveUninitialized: true,
	cookie: {}
}))

 app.use('/connect/signup', require('./routes/connect/signup/index'));

app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen( port, () => {
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});

module.exports = app;
   
}

module.exports.website = website;

