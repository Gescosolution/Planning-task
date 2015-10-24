# Planning-task
Submodulo software del proyecto publicado bajo la licencia de GNU GENERAL PUBLIC LICENSE Version 2 llamado Gesco para la gestión de proyectos.

El proyecto Gesco participa en el Certamen de Proyectos Libres de la Universidad de Granada 2015-2016. Las bases del mismo se encuentran [aqui](href="https://docs.google.com/document/d/16UsdUV_XXuPUh-Imz4PSgh-2ES_YaAJpZ8fNrbTVpMA/edit")

# Miembro
 - Roberto Morcillo Jiménez: [@robermorji](https://github.com/robermorji)

# Enlaces
- [Web del submodulo] ()
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

Para el modelo he pensado en utilizar una tecnología nueva para mí y esa tecnología es [mongoDB](https://www.mongodb.org/)

Para la vista vamos a utilizar [JADE](http://jade-lang.com/) el cuál podemos generar  los templates de forma rápida y eficaz.

Para el controlador vamos a utilzar el maravilloso [NODEJS](https://nodejs.org/en/) el cual es otra tecnología nueva para mí pero vamos agarrar el toro por los cuernos y vamos ha conseguir manejar esta tecnología ya que está en ahuge.
Todo esto lo voy a controlar con un maravilloso Framework para nodejs llamado [EXPRESS](http://expressjs.com/es/)

Con toda la estructura ya preparada del módulo voy a seguir un control de versiones como lo hemos hecho hasta ahora como es el caso de github y como vamos  a seguir una metodología de desarrollo continuo como es **DevOps**; esto implica que el desarrollo principal del modulo del proyecto debe ser una desarrollo basado en pruebas, por lo que desarrollaremos pruebas unitarias para cada una de las funcionalidades de la aplicación, pero también basándonos en el funcionamiento de dichas pruebas incorporar un sistema de integración continua que verifique a cada cambio que la estabilidad del programa sigue siendo la que debe ser y que no se han introducido errores que derivarían en problemas durante la ejecución de la aplicación.

Las pruebas unitarias se pueden realizar con **[PHPUNIT](https://github.com/sebastianbergmann/phpunit)** y la integración continua usaremos **[Travis CI](https://github.com/travis-ci/travis-ci)**.

Según vayamos consiguiendo que la aplicación sea funcional, solo quedará desplegarla en un PaaS como puede ser Azure (aprovechando que tenemos acceso a cuentas durante 6 meses), pero antes de desplegar la aplicación en el servidor tendremos que provisionarlo con todos los recursos software necesarios. 

El provisionamiento se puede hacer con **[Ansible](https://github.com/ansible/ansible)** mientras que el despliegue automático se puede hacer con **[Rocketeer](https://github.com/rocketeers/rocketeer)**.

Todo lo anterior debe estar relacionado con todos lo demás módulos para conseguir la integración continua.

# Relación con la asignatura
Con  relación a la asignatura  este submodulo abarca todos los aspectos de la asignatura ya que  haremos desarrollo basado en pruebas, integración continua, provisionamiento software y despliegue automático.

¡Qué la fuerza nos acompañe! ;)




