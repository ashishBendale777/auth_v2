const express = require("express")
const mongoose = require("mongoose")
const body = require("body-parser")

const app = express()
app.use(body.json())
app.use(body.urlencoded({ extended: false }))
mongoose.connect("mongodb://127.0.0.1:27017/myauth", { useNewUrlParser: true })
  .then((result) => {
    console.log("database connected")
  }).catch((err) => {
    console.log("database not connected")
  })


 require("./Route/AuthRouts")(app)

app.listen(5000, () => {
  console.log("server...started..")
})




// const bcrypt=require("bcryptjs")

// const Sepass=async(password)=>{
//     let hashpass=await bcrypt.hash(password,10)
//     console.log(hashpass)
//     const savepass=await bcrypt.compare(password,hashpass)
//     console.log(savepass)
// }

// Sepass("a")