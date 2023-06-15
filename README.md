# Meal

API Rest programada en Java con el framework [Spring boot](https://spring.io/projects/spring-boot), cuenta con dos perfiles, desarrollo (con base de datos en H2) y producción (con base de datos en un contenedor de docker con PostgreSQL). Documentación hecha con [OpenApi 3.0 y visualizada con Swagger-ui](https://swagger.io/specification/).

Esta aplicación cuenta con seguridad implementada en spring, es necesario un token de acceso que se puede obtener con el login para la mayoría de las peticiones. Los usuarios cuentan con roles que delimitan las acciones que pueden hacer en la API. El rol de usuario estándar puede acceder a los recursos. El rol de propietario (owner) puede crear, y gestionar los restaurantes que le pertenezcan, asi como los platos que tengan dichos restaurantes.

## FrontEnd

Este repositorio es parte de un proyecto conjunto, cuenta con un front end movil hecho en flutter, disponible en el siguiente repositorio:

- [Repositorio Front End](https://github.com/alvarofmk/meal-front)

## Instrucciones DEV

Tan solo es necesario clonar el repositorio y asegurarse de que la siguiente propiedad esta marcada con el perfil dev:

```
spring.profiles.active=dev
```

## Instrucciones PROD

Es necesario tener instalado docker.
Tras clonar el repositorio, asegurarse de que la siguiente propiedad esta marcada con el perfil prod:

```
spring.profiles.active=prod
```

Navegar hacia la carpeta raiz del proyecto en vuestra terminal y ejecutad el siguiente comando.

```
docker compose up
```

Tras ello es seguro lanzar la aplicación.

## URL base

- http://localhost:8080


## Documentación de la API

- [Visualización de la documentación con SwaggerUI](http://localhost:8080/swagger-ui/index.html)

## Usuarios

Varios usuarios de prueba para testear el funcionamiento, según su rol:

### Clientes

```
Usuario: 'tgerrets0' - Contraseña : 'G18BonYqt'
Usuario: 'zstanhope1' - Contraseña : '1qHxueVX'
Usuario: 'kchatten2' - Contraseña : '9mhyMXfE'
Usuario: 'dstranieri3' - Contraseña : 'tOnF9iQqkxg'
Usuario: 'lchater4' - Contraseña : 'yQoJV6RKZA'
```

### Propietarios

```
Usuario: 'wboshardi' - Contraseña : 'YT1ngMEs' || MANAGER DE GINOS
Usuario: 'dbeinej' - Contraseña : 'aGlKvMfZZX' || MANAGER DE AMBOS MCDONALDS
Usuario: 'owagstaffek' - Contraseña : 'tIArJeoQ' || MANAGER DE DOMINOS
Usuario: 'kfirpil' - Contraseña : 'ny17g0u2vs' || MANAGER DE TELEPIZZA
Usuario: 'atomczynskim' - Contraseña : '0VNyNanRV5jB' || MANAGER DE OSHIRO
Usuario: 'lhurlestonen' - Contraseña : 'RyUGLoDFNI4Q' || MANAGER DE LA MAFIA
Usuario: 'bmancellp' - Contraseña : 'yDI562hyfmEQ' || MANAGER DE TACO BELL
Usuario: 'atomczynskim' - Contraseña : 'fkp7JxleIfU' || MANAGER DE FIVE GUYS
```

### Propietarios sin restaurante

```
Usuario: 'asemeredq' - Contraseña : 'yBx68z8QT'
Usuario: 'jcretneyr' - Contraseña : 'vejTBPcS'
```

## Créditos

- [Álvaro Franco Martínez](https://github.com/alvarofmk)

