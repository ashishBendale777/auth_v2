
// const router = require("express").Router()
module.exports=(app)=>{

const userController = require("../Controller/user")
const { verifyusertoken, IsUser, IsAdmin } = require("../middleware/Auth")
//const verify = require("../middleware/Auth")

app.post("/register", userController.register)
app.get("/all", userController.all)
// router.get("/varifyuser", verify.verifyusertoken)
app.post("/login", userController.login)

app.get("/evts", verifyusertoken, IsUser, userController.userEvent)
app.get("/isadmin", verifyusertoken, IsAdmin, userController.adminEvent)
}
// module.exports = router