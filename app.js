/*
 * @Author: puck.solo 
 * @Date: 2017-10-25 13:48:29 
 * @Last Modified by: puck.solo
 * @Last Modified time: 2017-10-25 13:52:33
 */

const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config(); //TODO use system environment
const config = require('./config.js');


const indexRoute = require('./routes/index');
// const radgroupreplyRoute = require('./routes/radgroupreply');
// const radcheckRoute = require('./routes/radcheck');
// const radusergroupRoute = require('./routes/radusergroup');
// const employeeRoute = require('./routes/employee');
// const radiusloginRoute = require('./routes/radiuslogin');
const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRoute);
// app.use('/radcheck', radcheckRoute);
// app.use('/radgroupreply', radgroupreplyRoute);
// app.use('/radusergroup', radusergroupRoute);
// app.use('/employee', employeeRoute);
// app.use('/radiuslogin', radiusloginRoute);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
      });
    });
  }
  
  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
    });
  });
  
  module.exports = app;