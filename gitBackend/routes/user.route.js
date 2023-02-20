const express = require("express");
const { getfetchUsers, deletUsers, UserDetails } = require("../Controllers/user.controller");

const users = express.Router();

users.post('/fetchusers',getfetchUsers)
users.delete('/deleteusers',deletUsers)
users.get('/userdetails',UserDetails)

module.exports = users;

