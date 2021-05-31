module.exports=(sequelize,dataTypes)=>{
    let alias = 'Pelicula'
    let cols={
        id_pelicula:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true

        },
        nombre:{
            type:dataTypes.STRING
        },
        descripcion:{
            type:dataTypes.STRING
        },
        foto:{
            type:dataTypes.STRING
        },
        id_genero:{
            type:dataTypes.INTEGER
        }
    }
    let = config={
        tableName:'peliculas',
        timestamps:false
    }
    let modeloPelicula = sequelize.define(alias,cols,config)
    modeloPelicula.associate=(models)=>{
        modeloPelicula.belongsTo(models.Genero,{
            as:'genero',
            foreignKey:'id_genero'
        })
    }
  
    return modeloPelicula
}