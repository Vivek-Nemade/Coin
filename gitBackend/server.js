const express = require("express");
const connectDB = require("./configDb/db");
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
const userRoute = require("./routes/user.route");
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use("/api",userRoute)


// app.get("/", (req, res) =>{
//     res.send("Welcome To CoinTab")
// });
app.listen(PORT, async () => {
    await connectDB();
    console.log(`server started on port ${PORT}`);
  });