var assert = require('assert');
var project = require('../module/module_task.js');
var should = require('should');

describe('TDD',function(){
  it("Test Create Project",function(){
      var instancia = project.CreateProject("Project New");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create User",function(){
      var instancia = project.CreateUser("New User");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create Task",function(){
      var instancia = project.CreateTask("New Task");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
  it("Test Create SubTask",function(){
      var instancia = project.CreateSubTask("New SubTask");
      assert.notEqual(instancia,'undefined',"El objeto debe ser creado");
  });
  
});