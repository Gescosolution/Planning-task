var express = require('express');
var router = express.Router();
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var mongo = require("mongodb").MongoClient;

var proyectos = new Array();
var tareas = new Array();
var subtareas = new Array();
/* GET home page. */
app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var listarProyectos = function(db, callback) {
   proyectos = [];
   var cursor = db.collection('proyectos').find();
   cursor.each(function(err, doc) {
	 if (doc != null) {
        proyectos.push(doc.nombre);
      } else {
         callback();
      }
   });
  
};

var listarTareas = function(db, callback) {
   tareas = [];
   var cursor = db.collection('tareas').find();
   cursor.each(function(err, doc) {
	 if (doc != null) {
        tareas.push(doc.nombre);
      } else {
         callback();
      }
   });
  
};

var listarSubTareas = function(db, callback) {
   subtareas = [];
   var cursor = db.collection('subtareas').find();
   cursor.each(function(err, doc) {
	 if (doc != null) {
        subtareas.push(doc.nombre);
      } else {
         callback();
      }
   });
  
};


app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/crear_proyecto',function(req, res){
  res.render('crear_proyecto');
});

app.get('/crear_tarea',function(req, res){
   res.render('crear_tarea');
});

app.get('/crear_subtarea',function(req, res){
   res.render('crear_subtarea');
});

app.get('/borrar_proyecto',function(req, res){
  res.render('borrar_proyecto');
});

app.get('/borrar_tarea',function(req, res){
   res.render('borrar_tarea');
});

app.get('/borrar_subtarea',function(req, res){
  res.render('borrar_subtarea');
});



app.get('/listar_proyecto',function(req, response){
   mongo.connect("mongodb://localhost:27017/planningtaskDb",function(err, db){
		if (err){
			console.log("Fallo en la conexión");
		}
		else{
			listarProyectos(db, function() {
					db.close();
			});
		}
	});
	response.send(proyectos);
});

app.get('/listar_tarea',function(req, response){
   mongo.connect("mongodb://localhost:27017/planningtaskDb",function(err, db){
		if (err){
			console.log("Fallo en la conexión");
		}
		else{
			listarTareas(db, function() {
					db.close();
			});
		}
	});
	response.send(tareas);
});

app.get('/listar_subtarea',function(req, response){
  mongo.connect("mongodb://localhost:27017/planningtaskDb",function(err, db){
		if (err){
			console.log("Fallo en la conexión");
		}
		else{
			listarSubTareas(db, function() {
					db.close();
			});
		}
	});
	response.send(subtareas);
});

app.get('/crear_proyecto/:nombre',function(req, response){
	mongo.connect("mongodb://localhost:27017/planningtaskDb", function(err, db) {
				var nombre_proyecto = req.params.nombre;
				if(err) {
					console.log("We doesn't  connected");
				}
				else{
					var collection = db.collection('proyectos');
					nombre_proyecto = {"nombre":req.params.nombre };
					collection.insert(nombre_proyecto);
				}
			});
			response.send("Ok");
});

app.get('/crear_tarea/:nombre',function(req, response){
	mongo.connect("mongodb://localhost:27017/planningtaskDb", function(err, db) {
				var nombre_tarea = req.params.nombre;
				if(err) {
					console.log("We doesn't  connected");
				}
				else{
					var collection = db.collection('tareas');
					nombre_tarea = {"nombre":req.params.nombre };
					collection.insert(nombre_tarea);
				}
			});
			response.send("Ok");
});

app.get('/crear_subtarea/:nombre',function(req, response){
	mongo.connect("mongodb://localhost:27017/planningtaskDb", function(err, db) {
				var nombre_subtarea = req.params.nombre;
				if(err) {
					console.log("We doesn't  connected");
				}
				else{
					var collection = db.collection('subtareas');
					nombre_subtarea = {"nombre":req.params.nombre };
					collection.insert(nombre_subtarea);
				}
			});
			response.send("Ok");
});




module.exports = app;
