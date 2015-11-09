var mongoose = require('mongoose');
var assert = require('assert');

/**
 * Conection with datebase
 */
mongoose.connect('mongodb://localhost/my_database');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));	
db.once('open', function (callback) {
console.log("Test Conection: Pasado con éxito");
});

/**
 * title: Modelo de Datos
 * Modelo de Datos de la aplicación
 */

/**
 * title: Modelo de Datos User
 * atributos: 
 * 		name  = { username }
 * 		email = { email user}
 */

var User = new mongoose.Schema({
    name  :  { type: String, default: 'nombre_user' }
  , email :  { type: String, default:'info@gmail.com' }
});

/**
 * title: Modelo de Datos Project
 * atributos: 
 * 		name  = { project name }
 * 		id_user = { user id}
 */

var Project = new mongoose.Schema({
	name: { type:String, default:"nombre_proyecto"}
  , id_user:{type:Number}
});

/**
 * title: Modelo de Datos Task
 * atributos: 
 * 		name  = { task name }
 * 		check = { boolean check}
 */
var Task = new mongoose.Schema({
	 name:{type:String, default:'tarea'}
	,check:{type:Boolean, default:false} 
});
 
 /**
 * title: Modelo de Datos Task
 * atributos: 
 * 		name  = { task name }
 * 		check = { boolean check}
 */
var SubTask = new mongoose.Schema({
	 name:{type:String, default:'tarea'}
	,check:{type:Boolean, default:false} 
});

var Row_Project = mongoose.model('Project', Project);
var Row_User = mongoose.model('User', Project);
var Row_Task = mongoose.model('Task', Task);
var Row_SubTask = mongoose.model('SubTask', SubTask);
/**
 * This are the functions that you use in order to manage Date Base 
 */

var object_task ={
	CreateProject: function(project_name){
		var objeto_new;
		objeto_new = new Row_Project({name:project_name});
		return objeto_new;
	},
	
	ListProject: function(){
		
	},
	
	DeleteProject: function(){
		
	},
	
	CreateTask: function(task_name){
		var objeto_new;
		objeto_new = new Row_Task({name:task_name});
		return objeto_new;
	},
	
	ListTask:function(){
		
	},
	
	DeleteTask:function(){
		
	},
	
	CreateSubTask: function(subtask_name){
		var objeto_new;
		objeto_new = new Row_SubTask({name:subtask_name});
		return objeto_new;
	},
	
	ListSubTask:function(){
		
	},
	
	DeleteSubTask:function(){
		
	},
	
	CreateUser:function(name_user){
		var objeto_new;
		objeto_new = new Row_User({name:name_user});
		return objeto_new;
	},
	
	ListUser:function(){
		
		
	},
	
	DeleteUser:function(){
		
	}
}

if ( typeof module != 'undefined' && module.exports ) {
	module.exports = object_task;
}