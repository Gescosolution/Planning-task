[![Build Status](https://travis-ci.org/robermorji/Planning-task.svg?branch=master)](https://travis-ci.org/robermorji/Planning-task)
[ ![Codeship Status for Gescosolution/Planning-task](https://codeship.com/projects/dce545b0-7abd-0133-c294-526c8ce37475/status?branch=master)](https://codeship.com/projects/119268)
![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)
![Docker](https://dl.dropboxusercontent.com/s/v55niw0mwq5glvm/dockericon_zpswj3ifwrw.PNG?dl=0)
# Planning-task
Submodulo software del proyecto publicado bajo la licencia de GNU GENERAL PUBLIC LICENSE Version 2 llamado Gesco para la gestión de proyectos.

El proyecto Gesco participa en el Certamen de Proyectos Libres de la Universidad de Granada 2015-2016. Las bases del mismo se encuentran [aqui](href="https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit")

# Miembro
 - Roberto Morcillo Jiménez: [@robermorji](https://github.com/robermorji)

# Enlaces
- [Web de la aplicación](http://gescosolution.github.io/Gesco/)
- [Twitter](https://twitter.com/gescosolutionCC) 

# Descripción

Este submodulo trata en sí en conseguir la organización de tareas de una determinada empresa que se encarga de realizar grandes proyectos informáticos. A continuación voy a explicar en que va consisitir la aplicación:

El objetivo de este submodulo es la organización de todas las tareas de un determinado proyecto a los distintos miembros de un equipo de trabajo, existirá un jefe de proyectos el cuál asignará las distintas tareas a cada uno de los miembros del equipo. 

Los miembros del equipo se le notificara mediante un correo electrónico la asignación de esa tarea. 

Las tareas se podran asignar comentarios y esos comentarios serán accesibles tanto para el jefe de equipo como para los demás miembros del equipo.

Tendrá una opción en la cuál se podrá controlar el tiempo de durabilidad de la tarea así como el tiempo utilizado para su realización.

Siempre se podrá dividir una tarea grande en distintas subtareas.

Cada miembro poseerá dos tablones en uno se le mostrará todas las taras de los distintos proyectos que se le han asignado a él y otro todas las tareas especificadas por el jefe de equipo para un determinado proyecto.

# Motivación
La principal motivación de esto es conseguir llegar a comprender con exactitud y verdaderamente lo que significa el cloud computing, en realidad no llegar a terminar la aplicación no me preocupa en sí lo que debo de comprender exactemente es como poder crear una estructura virtual y poder hacer integración continua con las distintas herramientas que existen ya que el terminar o no terminar la aplicación es cuestión de tiempo. 

# Procedimiento de realización
El módulo a realizar es el de gestión de tareas.

Para este módulo lo voy a realizar siguiendo el patrón por excelencia y ese patrón es el patrón modelo/vista/controlador.

Para el modelo he pensado en utilizar una tecnología nueva para mí y esa tecnología es [voltDB](https://voltdb.com/) que utiliza accesos en tiempo real.

Para la vista vamos a utilizar [JADE](http://jade-lang.com/) el cuál podemos generar  los templates de forma rápida y eficaz.

Para el controlador vamos a utilzar el maravilloso [NODEJS](https://nodejs.org/en/) el cual es otra tecnología nueva para mí pero vamos agarrar el toro por los cuernos y vamos ha conseguir manejar esta tecnología ya que está en ahuge.
Todo esto lo voy a controlar con un maravilloso Framework para nodejs llamado [EXPRESS](http://expressjs.com/es/)

Con toda la estructura ya preparada del módulo voy a seguir un control de versiones como lo hemos hecho hasta ahora como es el caso de github y como vamos  a seguir una metodología de desarrollo continuo como es **DevOps**; esto implica que el desarrollo principal del modulo del proyecto debe ser una desarrollo basado en pruebas, por lo que desarrollaremos pruebas unitarias para cada una de las funcionalidades de la aplicación, pero también basándonos en el funcionamiento de dichas pruebas incorporar un sistema de integración continua que verifique a cada cambio que la estabilidad del programa sigue siendo la que debe ser y que no se han introducido errores que derivarían en problemas durante la ejecución de la aplicación.

Las pruebas unitarias se pueden realizar con **[MOCHA](https://mochajs.org/)** y la integración continua usaremos **[FLIGHTPLAN](https://www.npmjs.com/package/flightplan)**.

Según vayamos consiguiendo que la aplicación sea funcional, solo quedará desplegarla en un PaaS como puede ser Azure (aprovechando que tenemos acceso a cuentas durante 6 meses), pero antes de desplegar la aplicación en el servidor tendremos que provisionarlo con todos los recursos software necesarios. 

El provisionamiento se puede hacer con **[Ansible](https://github.com/ansible/ansible)** mientras que el despliegue automático se puede hacer con **[Rocketeer](https://github.com/rocketeers/rocketeer)**.

Todo lo anterior debe estar relacionado con todos lo demás módulos para conseguir la integración continua.

# Relación con la asignatura
Con  relación a la asignatura  este submodulo abarca todos los aspectos de la asignatura ya que  haremos desarrollo basado en pruebas, integración continua, provisionamiento software y despliegue automático.

¡Qué la fuerza nos acompañe! ;)


Hemos empezado por realizar primero los test antes que implementar la aplicación, estamos siguiendo esta práctica debido 
a que es la ue debe de llevar a cabo primeramente un buen programador:
	
1.- Realizar los test

2.- Comprobar que han pasado los test

3.- Integración continua con travis

4.- Implementación

Hemos integrado los test con mocha y hemos hecho integración continua con travis, como vemos en el badget hemos conseguido 
pasar la integracion continua de Travis-CI  en los distintas versiones de nodejs.

Para poder instalar la aplicación tan solo necesitamos las siguientes ordenes
		npm install 
		npm start

Si queremos pasar los test
		npm test
	
#Integración continua con Travis

En lo que se refiere a integración continua hemos seleccionado  la aplicación web por autonomasia como es Travis. Lo hemos eleguido por la facilidad que nos dá a la hora de enlazarla con nuestra aplicación ya que nada más haciendo un push él automaticamente nos sube el commit y nos pasa los test para que no tengamos problema a la de conseguir ver que todo va integrandose de forma correcta.

#Despliegue con Heroku

Para el despliegue de nuestra aplicación en la nube hemos eleguido Heroku, debido a que se compenetra muy bien con travis pero para ello necesitamos realizar una serie de pasos que a continuación vamos a explicar:

1º Instalamos las herramientas travis en nuestra consola: 
Nota: Debemos de tener como mínimo la versión de ruby de 1.9.3 para ello podemos hacer la instalación normal de ruby.


```sh
$ sudo apt-get install ruby-full
$ sudo gem install travis
```


2º Ejecutamos travis que nos proporcionará en el travis.yml los parametros necesarios para enlazar travis automáticamente con Heroku.


```sh
$ deploy:
  provider: heroku
  api_key:
    secure: gs+BySvPV......
  app: planningtask
  on:
    repo: robermorji/Planning-task
```
![imagen_heroku](https://dl.dropboxusercontent.com/s/5w5u5cqu3i7raed/deploy_heroku.png?dl=0)

3º Después de esto la aplicación debe pasar los test a través de Travis y seguidamente lo desplegará en Heroku.

planning-task


[planning-task]: <https://planningtask.herokuapp.com/>

![imagen_heroku_1](https://dl.dropboxusercontent.com/s/jqbg7f9r50nslep/deploy_app.png?dl=0)

Demostración de que heroku despliega el proyecto:


![imagen_heroku_2](https://dl.dropboxusercontent.com/s/h70a29p3r7d3osa/deploy_app_2.png?dl=0)

#Add-on Codeship
El Add-on seleccionado para que Heroku pase continuamente los test cada vez que hacemos un commit es codeship, lo hemos eleguido porque es uno de los add-on que mejor van con heroku lo único malo que tiene es que debemos de utilizar una tarjeta de crédito para poder instalarlo pero es muy fácil configurarlo, con los siguientes parámetros:

```sh
vrm install 4.2.2
npm install 
mocha
```
![imagen_codeShip](https://dl.dropboxusercontent.com/s/bltj9kuifh4myug/codeship.png?dl=0)


#Repositorio Docker

Una vez dado de alta en docker_hub y preparar nuestro repositorio quedaría más o menos de esta manera:

![imagen_docker](https://dl.dropboxusercontent.com/s/mf2rb7dh5qrien4/Docker_1.png?dl=0)


Nuestra aplicación la puedes descargar e instalar directamente a través del repositorio docker, tan solo debes ejecutar los siguientes comandos en la terminal:

```sh
$ sudo docker pull robermorji/planning-task
```

Le debe aparacer lo siguiente:

![imagen](https://dl.dropboxusercontent.com/s/rat3gcdgvsxe4q3/Docker_2.png?dl=0)


Para ello hemos tenido que crear en nuestro repositorio el siguiente Dockerfile, lo escribo aquí para que sirva de ayuda a otros compañeros que estén realizando proyectos con nodejs:
```sh
FROM ubuntu:latest

#Autor
MAINTAINER Roberto Morcillo Jiménez <robermorji@gmail.com>

#Actualizar Sistema Base
RUN sudo apt-get -y update

#Descargar app
RUN sudo apt-get install -y git
RUN git clone https://github.com/robermorji/Planning-task

# Enable Extra Packages for Enterprise Linux (EPEL) for Ubuntu
RUN     sudo apt-get install -y epel-release
# Install Node.js and npm
RUN     sudo apt-get  install -y nodejs npm

# Install app dependencies
COPY package.json /src/package.json
RUN cd /src; npm install

# Bundle app source
COPY . /src

EXPOSE  8080
CMD ["node", "/src/app.js"]

```

Este archivo lo debemos de definir como DockerFile.

Ya solo quedaría despolegarlo en nuestro entorno y porfin tendrás la aplicación totalmente instalada y tan solo en un solo paso.

Aquí mostramos como un compañero la ha realizado en su máquina y funciona correctamente, tan solo siguiendo estos fáciles pasos tendrás tú contenedor con la aplicación totalmente funiconando.

![imagen_extra](https://dl.dropboxusercontent.com/s/1a6bznuazenn0lr/2016-01-30.png?dl=0)


Continuamos desarrollando.
