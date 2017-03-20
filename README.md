# sessions-y-autenticacion-en-expressjs-alexandra-angel-nicolangelo-35l2

## Práctica 5: Sessions y Autenticación en ExpressJS

### Enlace a la Práctica
[Práctica 5: Sessions y Autenticación en ExpressJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicasessions.html)


### Aceptar Tarea 

* Aceptar asignación de la tarea
* Use el repo de GitHub dado por la asignación de esta tarea
* Cree un servidor que use para proveer autenticación a los HTML generados a partir de un libro de prueba
* Encripte los passwords en un fichero users.json (puede usar bcrypt-nodejs) en el que se guardan las parejas usuario: password
* Puede escribir un programa auxiliar que le genere el fichero de claves users.json
* Use un formulario form para obtener el usuario y la clave
* Use vistas en ejs o pug para el programa
* Deberá tener rutas y vistas para logout y para cambiar la password
* Despliegue la aplicación en Heroku y en la máquina virtual del iaas


### Recursos

* [Repositorio con ejemplos de uso de cookies en express](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples)
* El ejemplo [staticauth.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/staticauth.js) es similar a lo que se pide
    * En este ejemplo el [directorio gbookexample](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/tree/master/gbookexample) contiene los markdown fuente para el libro
    * El libro es compilado con: `gitbook build gbookexample/ public/`
    * De manera que los HTML se montan en la ruta content y se sirven desde el directorio `public`
* Tiene un ejemplo de formulario en la vista [login.ejs](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/views/login.ejs) que es usada por el ejemplo [auth-example.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/auth-example.js#L99-L101)
* [Descripción de la Práctica: Evaluar Manejo de Rutas en ExpressJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicalearningcookies.html)
* [Apuntes sobre Cookies y Sessions](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/cookies/)


### Asignatura
* [Desarrollo de Sistemas Informáticos](https://campusvirtual.ull.es/1617/course/view.php?id=1136) de La Universidad de La Laguna.
* Curso: 2016-2017
* Itinerario: Tecnologías de la Información \(3º\)

### Profesor
Casiano Rodríguez León

### Autores
[Ángel Luis Morales Hernández](https://alu0100888157.github.io)
* [GitHub](https://github.com/alu0100888157)

[Alexandra Esplugas Sabina](https://alu0100762006.github.io)
* [GitHub](https://github.com/alu0100762006)

[Nicolangelo Famiglietti](https://alu0100912005.github.io)
* [GitHub](https://github.com/alu0100912005)


## Despliegue del libro
* [Despliegue del libro en Iaas de Alexandra]()
* [Despliegue del libro en Iaas de Ángel](http://10.6.128.52:8080/)
* [Despliegue del libro en Iaas de Nicolangelo](http://10.6.128.226:8080/)

## Enlace del grupo
[Enlace al grupo en GitHub](https://github.com/ULL-ESIT-DSI-1617/sessions-y-autenticacion-en-expressjs-alexandra-angel-nicolangelo-35l2)
