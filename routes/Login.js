var express = require('express');
var router = express.Router();


var mysql = require('mysql');

var connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'agroesperanza'


  });

  connection.connect();

  /* GET home page. */

  router.get('/', function (req, res, next) {
    res.render('login', { title: 'LOGIN2' });
  });

  router.post('/', function (req, res, next) {
    console.log('Lo que hay', req.params);
    console.log('body', req.body);
    connection.query('Select * from login where User = "' + req.body.usuario + '" and Password ="' + req.body.password + '";', function (err, rows, fields) {
      if (!err) {
        res.render('Menu', {
          datos: rows,
          title: 'Exito'
        });
      } else {
        res.json({
          message: 'Error'
        });
      }
    });
  });


module.exports = router;
