# Meal

API Rest programada en Java con el framework [Spring boot](https://spring.io/projects/spring-boot), cuenta con dos perfiles, desarrollo (con base de datos en H2) y producción (con base de datos en un contenedor de docker con PostgreSQL). Documentación hecha con [OpenApi 3.0 y visualizada con Swagger-ui](https://swagger.io/specification/).

Esta aplicación cuenta con seguridad implementada en spring, es necesario un token de acceso que se puede obtener con el login para la mayoría de las peticiones. Los usuarios cuentan con roles que delimitan las acciones que pueden hacer en la API. El rol de usuario estándar puede acceder a los recursos. El rol de propietario (owner) puede crear, y gestionar los restaurantes que le pertenezcan, asi como los platos que tengan dichos restaurantes.

Este proyecto cuenta con dos aplicaciones de frontend. Angular, utilizando material, bootstrap y como front end para administracion. y Flutter como front end movil para la aplicacion destinada a usuarios finales

## Prototipo maquetado en figma

- [Prototipo movil]https://www.figma.com/proto/YKAyFLNJd00dQDEsZNIV26/Meal?type=design&scaling=scale-down&page-id=0%3A1
- [Prototipo web]https://www.figma.com/proto/Tvn6uv6BB6BQ7PwWiuTkLT/Meal-web?type=design&node-id=1-2&scaling=min-zoom&page-id=0%3A1

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

