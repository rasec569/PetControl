var express = require('express');
var router = express.Router();


var mysql = require('mysql');

var connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'persona'
});

connection.connect();

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'LOGIN' });
});

router.post('/registrar', function (req, res) {
  var data = req.body.data_registrar;
  console.log(data);
  connection.query('insert into usuario(nombre, apellido, direccion, correo, telefono) ' +
    ' values ( "' + data.nombre + '", "' + data.apellido + '", "' + data.direccion + '", "' + data.correo + '", ' + data.telefono + ');', function (err, rows, fields) {
      if (!err) {
        res.send('Se registro la persona!');
      } else {
        res.json({
          message: 'Error'
        });
      }
    });
});


router.get('/traer', function (req, res) {

  console.log('Lo que hay', req.params);
  console.log('body', req.body);
  connection.query('Select * from usuario', function (err, rows, fields) {
    if (!err) {
      res.json(rows);
    } else {
      res.json({
        message: 'Error'
      });
    }
  });

});

router.post('/', function (req, res, next) {
  console.log('Lo que hay', req.params);
  console.log('body', req.body);
  connection.query('Select * from login where User = "' + req.body.usuario + '" and Password ="' + req.body.password + '";', function (err, rows, fields) {
    if (!err) {
      res.render('Menu', {
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
