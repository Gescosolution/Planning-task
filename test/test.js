var assert = require('assert');
var project = require('../module/module_task.js');
var should = require('should');
var mongoose = require('mongoose');
var request = require('supertest'),
app = require('../routes/index.js'); 

describe('TDD simples',function(){
  it("Test Create Project",function(){
      var instancia = project.CreateProject("Proyecto");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create User",function(){
      var instancia = project.CreateUser("Usuario");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create Task",function(){
      var instancia = project.CreateTask("Tarea");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create SubTask",function(){
      var instancia = project.CreateSubTask("Subtarea");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
});

describe('Pruebas de conexión', function(){
  it("Página Principal", function(done){
    request(app)
        .get('/')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Crear proyecto", function(done){
    request(app)
        .get('/crear_proyecto')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Crear tarea", function(done){
    request(app)
        .get('/crear_tarea')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Crear subtarea", function(done){
    request(app)
        .get('/crear_subtarea')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
   it("Página Borrar proyecto", function(done){
    request(app)
        .get('/borrar_proyecto')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Borrar tarea", function(done){
    request(app)
        .get('/borrar_tarea')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Borrar subtarea", function(done){
    request(app)
        .get('/borrar_subtarea')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
   it("Página Listar proyecto", function(done){
    request(app)
        .get('/listar_proyecto')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Listar tarea", function(done){
    request(app)
        .get('/listar_tarea')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
	});
  
  it("Página Listar subtarea", function(done){
    request(app)
        .get('/listar_subtarea')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
	});
  
});
/*
describe('Pruebas de insercion elementos', function(){
    it("Crear nuevo proyecto", function(done,next){
    request(app)
        .get('/crear_proyecto/CloudComputingNuevo')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Crear nueva tarea", function(done,next){
    request(app)
        .get('/crear_tarea/TareaNueva')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
  
  it("Crear nueva subtarea", function(done,next){
    request(app)
        .get('/crear_subtarea/SubTareaNueva')
        .expect('Content-Type',"text/html; charset=utf-8")
        .expect(200,done);
	});
 
});

describe('Pruebas de listar elementos', function(){
    it("Listar proyectos", function(done,next){
    request(app)
        .get('/listar_proyecto')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
	});
  
  it("Listar tareas", function(done,next){
    request(app)
        .get('/listar_tarea')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
	});
  
  it("Listar subtarea", function(done,next){
    request(app)
        .get('/listar_subtarea')
        .expect('Content-Type',"application/json; charset=utf-8")
        .expect(200,done);
  });
  
});*/
