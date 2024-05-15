const express = require('express')
const cors=require('cors')
const app = express()
const port = 3000
var bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.json());
let users = [
  {
      id: 1,
      name: "Aysel",
      surname: "Quliyeva",
      age: 25,
      email: "ayselq@example.com",
      username: "ayselq",
      password: "güvenlişifre123",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
      id: 2,
      name: "Elvin",
      surname: "Mammadov",
      age: 32,
      email: "elvinm@example.com",
      username: "elvinm",
      password: "gizlisifre456",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
      id: 3,
      name: "Nigar",
      surname: "Huseynova",
      age: 28,
      email: "nigarh@example.com",
      username: "nigarh",
      password: "gizemlisifre789",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
      id: 4,
      name: "Rauf",
      surname: "Rzayev",
      age: 29,
      email: "raufr@example.com",
      username: "raufr",
      password: "sifregizle321",
      gender: "male",
      image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
      id: 5,
      name: "Aytac",
      surname: "Safarov",
      age: 23,
      email: "aytacs@example.com",
      username: "aytacs",
      password: "guvenlisifrem123",
      gender: "female",
      image: "https://randomuser.me/api/portraits/women/5.jpg"
  },
];


app.get('/', (req, res) => {
  res.send(users)
})
app.get("/:id", (req, res) => {
    let findElem = users.find((elem) => elem.id == req.params.id);
    res.send(findElem);
  });
  
  app.delete("/:id", (req, res) => {
    let findElems = users.filter((elem) => elem.id != req.params.id);
    res.send(findElems);
  });
  
  app.post("/", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send("posted");
  });
  
  app.put("/:id", (req, res) => {
    let id = req.params.id;
    let obj = req.body;
    let elem = users.findIndex((el) => el.id == id);
    users[elem] = { id: id, ...obj };
    res.send(users);
  });
  
  app.patch("/:id", (req, res) => {
    let id = req.params.id;
    let obj = req.body;
    let elemIndex = users.findIndex((el) => el.id == id);
    let elem = users.find((el) => el.id == id);
    users[elemIndex] = { ...elem, ...obj };
    res.send(users);
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})