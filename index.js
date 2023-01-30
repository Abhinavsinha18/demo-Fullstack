const express = require('express');
const app = express();
const {connect} = require('./db');
const {routeUser} = require('./Routes/user.route')
const {noteroute} = require('./Routes/notes.route')
const {authenticate} = require('./Middleware/middleware')
const cors = require('cors')

app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/user", routeUser)
app.use(authenticate)
app.use('/notes',noteroute)




app.listen(4000,async ()=>{
try {
    await connect;
    console.log("connected")
} catch (error) {
    console.log(error)
}

    console.log("Listing at port 4000");
})