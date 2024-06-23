const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('User',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'},
})

const Posts = sequelize.define('Posts',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING},
    author: {type: DataTypes.STRING, unique: true},
})

const Img = sequelize.define('Img',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: true},
})

Posts.hasMany(Img)
Img.belongsTo(Posts)

module.exports ={
    User,
    Posts,
    Img
}