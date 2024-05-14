const express = require('express')
const app = express()
const port = 3000

let users =[
  {
      id: 1,
      name: "John",
      surname: "Doe",
      age: 30,
      email: "johndoe@example.com",
      username: "johndoe30",
      password: "password123",
      gender: "male",
      image: "https://example.com/profiles/johndoe.jpg"
  },
  {
      id: 2,
      name: "Jane",
      surname: "Smith",
      age: 25,
      email: "janesmith@example.com",
      username: "janesmith25",
      password: "securepass",
      gender: "female",
      image: "https://example.com/profiles/janesmith.jpg"
  },
  {
      id: 3,
      name: "Alice",
      surname: "Johnson",
      age: 35,
      email: "alice.j@example.com",
      username: "alicej",
      password: "strongpassword",
      gender: "female",
      image: "https://example.com/profiles/alicejohnson.jpg"
  },
  {
      id: 4,
      name: "Michael",
      surname: "Brown",
      age: 28,
      email: "mbrown@example.com",
      username: "mikebrown",
      password: "michael28",
      gender: "male",
      image: "https://example.com/profiles/michaelbrown.jpg"
  },
  {
      id: 5,
      name: "Emily",
      surname: "Taylor",
      age: 22,
      email: "emilyt@example.com",
      username: "emtay",
      password: "emily22",
      gender: "female",
      image: "https://example.com/profiles/emilytaylor.jpg"
  },
  {
      id: 6,
      name: "David",
      surname: "Martinez",
      age: 32,
      email: "david.m@example.com",
      username: "davidm32",
      password: "martinez123",
      gender: "male",
      image: "https://example.com/profiles/davidmartinez.jpg"
  }
]



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