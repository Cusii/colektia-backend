# :computer: Configuracion del entorno Backend:

- Clonar el repositorio en la carpeta deseada con el comando:
 `git clone https://github.com/Cusii/colektia-backend.git`
- Situarse en la carpeta colektia-backend (donde se encuentra el package.json): `cd colektia-backend`
- Instalar las dependencias: `npm install`
- Revisar la contraseña de la Base de Datos en: `database/config/config.js`
-En la seccion de development asignarle la contraseña de usuario

### Crear la base de datos:
-En el entorno de base de datos pegar lo siguente
```MySQL
    create database db_peliculas;

    create table generos(
        id_genero int not null auto_increment,
        primary key(id_genero),
        genero varchar(15)
	);
    create table peliculas(
        id_pelicula int not null auto_increment,
        primary key(id_pelicula),
        nombre varchar(25),
        descripcion varchar(150),
        foto varchar(100),
        id_genero int,
        foreign key(id_genero) references generos(id_genero)
	);

    insert into generos (genero) values('Comedia');

    insert into generos (genero) values('Terror');

    insert into generos (genero) values('Musical');

    insert into generos (genero) values('Accion');

    insert into generos (genero) values('Infantil');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('La la la','Editar','lalala.png','3');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('Joker 2019','Editar','joker-2019.jpg','4');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('Cars','Editar','cars.jpg','5');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('El Rey Leon','Editar','el-rey-leon-2019.jpg','5');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('Mulan','Editar','mulan.jpg','4');

    insert into peliculas (nombre,descripcion,foto,id_genero) values('Bloodshot','Editar','bloodshot.jpeg','4');

```

### Correr el proyecto:
- En el ambiente de desarrollo, ejecutar `npm run dev`
- El sistema estara corriendo en`http://localhost:3000/`
