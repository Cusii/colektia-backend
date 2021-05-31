let db = require("../database/models");
module.exports = {
  guardar: (req, res) => {

    try {
      db.Pelicula.create({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.files[0].filename,
        id_genero: req.body.id_genero,
      });

      res.status(200).json(req.body);
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },
  listado: (req, res) => {
    try {
      db.Pelicula.findAll().then((peliculas) => {
        res.status(200).json({
          peliculas: peliculas,
        });
      });
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },
  detalle: (req, res) => {
    try {
      db.Pelicula.findByPk(req.params.id, {
        include: [{ association: "genero" }],
      }).then((pelicula) => {
        res.status(200).json({
          pelicula: pelicula,
        });
      });
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },

  actualizar: (req, res) => {
    try {
      db.Pelicula.update(
        {
          titulo: req.body.titulo,
          descripcion: req.body.descripcion,
          foto: req.body.foto,
          id_genero: req.body.id_genero,
        },
        {
          where: {
            id_pelicula: req.params.id,
          },
        }
      );

      res.status(200).json(req.body);
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },
  borrar: (req, res) => {
    try {
      db.Pelicula.destroy({
        where: {
          id_pelicula: req.params.id,
        },
      });
      res.status(200).json("success");
    } catch (error) {
      console.error(error);
      res.status(400).json(error);
    }
  },
};
