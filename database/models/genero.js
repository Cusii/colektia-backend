module.exports=(sequelize,dataTypes)=>{
    let alias = 'Genero';
    let cols={
        id_genero:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true

        },
        genero:{
            type:dataTypes.STRING
        }
    }
  let config = {
        tableName:'generos',
        timestamps:false
    }
    let modeloGenero = sequelize.define(alias,cols,config)
    modeloGenero.associate=(models)=>{
        modeloGenero.hasMany(models.Pelicula,{
            as:'peliculas',
            foreignKey:'id_genero'
        })
    }

    return modeloGenero
}