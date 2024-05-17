const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000
var bodyParser = require("body-parser");
require("./src/config/db")
const routes=require("./src/routes/userRoute")


app.use(cors())
app.use(bodyParser.json());

app.use("/api", routes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})