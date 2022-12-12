const users = [{
    name:"Ramiro",
    lastName: "Rojas",
    role: "admin",
    photo: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png",
    age: 20,
    email: "ramirojasarg@gmail.com",
    password: "ramiro123",
    code: "adminOne",
    verified: false,
    logged: false,
},
{
    name:"Aldana",
    lastName: "Chavez",
    role: "admin",
    photo: "https://cdn-icons-png.flaticon.com/512/711/711769.png",
    age: 25,
    email: "aldanamagali25@gmail.com",
    password: "aldana123",
    code: "adminTwo",
    verified: false,
    logged: false,
},
{
    name:"German",
    lastName: "Pungitore",
    role: "user",
    photo: "https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg",
    age: 24,
    email: "pungitoregerman@gmail.com",
    password: "german123",
    code: "userOne",
    verified: false,
    logged: false,
}]

require("dotenv").config();
require("../../config/database/database");

const User = require('../User')

users.forEach(elemento =>{
    User.create({
    name:elemento.name,
    lastName: elemento.lastName,
    role: elemento.role,
    photo:elemento.photo,
    age:elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
})
})

