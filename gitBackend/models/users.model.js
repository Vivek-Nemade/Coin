const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    picture: {type: "string", required: true},
    email: {type: "string", required: true},
    fname:{type: "string", required: true},
    lname:{type: "string", required: true},
    gender: {type: "string", required: true},
    location: {type: "string", required: true},
    nationality: {type: "string", required: true},
});

const UsersModel = model("Users", usersSchema);

module.exports = UsersModel;