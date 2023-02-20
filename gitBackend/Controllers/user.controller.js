const UsersModel = require("../models/users.model");
const axios = require("axios");

const getfetchUsers =async(req,res)=>{
    try {
        const data = await axios.get("https://randomuser.me/api?results=100");

        const users =  data.data.results.map((el)=>({
            picture: el.picture.large,
            email: el.email,
            fname:el.name.first,
            lname:el.name.last,
            gender: el.gender,
            email: el.email,
            location: el.location.city,
            nationality: el.nat,
        }))

        await UsersModel.insertMany(users);
        res.status(200).send("User fetched and inserted successfully")
        // console.log(data.data.results);
        console.log(users);
      } catch (e) {
        res.status(500).send("Error in Fetching data")
        console.log(e.message)
      }
}
const deletUsers = async(req, res)=>{
    try {
        UsersModel.deleteMany({})
        res.status(200).send("All Users data deleted successfully")
        console.log("All Users data deleted successfully")
    }catch (e){
        res.status(500).send("Error in deleting data")
        console.log(e.message)
    }
}

const UserDetails = async(req, res)=>{
    
    try {
        let count = await UsersModel.count();
        let page = parseInt(req.query.page || 1);
        const gender = req.query.gender
        let data = await UsersModel.find().limit(10).skip(10*page)
        console.log(data)

        if (gender) {
            data = await UsersModel
              .find({ gender: gender })
              .limit(10)
              .skip((page-1) * 10);
              count = await UsersModel.find({ gender: gender }).count();
          }
        res.status(200).send({users:data, totalPages:Math.ceil(count/10)})

    }
    catch (e) {
        res.status(500).send("Error in getting data")
        console.log(e.message)
    }
}
module.exports ={getfetchUsers,deletUsers,UserDetails}
