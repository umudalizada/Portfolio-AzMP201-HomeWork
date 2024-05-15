const mongoose = require("mongoose") 


mongoose
	.connect("mongodb+srv://eumud7777:umud12345@cluster0.gsi66he.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
	.then(() => {
		console.log("db connect");
	}).catch((err)=>console.log(err))