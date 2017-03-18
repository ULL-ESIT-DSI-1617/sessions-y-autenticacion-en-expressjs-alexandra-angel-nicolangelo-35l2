# sessions-y-autenticacion-en-expressjs-alexandra-angel-nicolangelo-35l2
## Práctica: Sessions y Autenticación en ExpressJS

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


## Recursos

* [Repositorio con ejemplos de uso de cookies en express](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples)
* El ejemplo [staticauth.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/staticauth.js) es similar a lo que se pide
    * En este ejemplo el [directorio gbookexample](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/tree/master/gbookexample) contiene los markdown fuente para el libro
    * El libro es compilado con: `gitbook build gbookexample/ public/`
    * De manera que los HTML se montan en la ruta content y se sirven desde el directorio `public`
* Tiene un ejemplo de formulario en la vista [login.ejs](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/views/login.ejs) que es usada por el ejemplo [auth-example.js](https://github.com/ULL-ESIT-DSI-1617/express-cookies-examples/blob/master/auth-example.js#L99-L101)
* [Descripción de la Práctica: Evaluar Manejo de Rutas en ExpressJS](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicalearningcookies.html)
* [Apuntes sobre Cookies y Sessions](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/cookies/)