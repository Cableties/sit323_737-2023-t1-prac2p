const express = require("express");
const res = require("express/lib/response");
const app = express();
const bodyParser = require("body-parser");
let jsonParser = bodyParser.json();
let users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Mary" },
	{ id: 3, name: "Peter" },
];

app.get("/users", (req, res) => {
	res.json(users);
});

app.get("/users/:id", (req, res) => {
	let id = +req.params.id;
	console.log(id);
	let user = users.find((u) => u.id === id);
	console.log(user);
	res.send(user);
});

app.post("/users", jsonParser, (req, res) => {
	const newUser = req.body;
	users.push(newUser);
	res.status(201).json(newUser);
});

app.put("/users/:id", jsonParser, (req, res) => {
	const userId = parseInt(req.params.id);
	const updateedUser = req.body;
	users = users.map((user) => (user.id === userId ? updateedUser : user));
	res.status(200).json(updateedUser);
});

app.delete("/users/:id", (req, res) => {
	const userId = parseInt(req.params.id);
	users = users.filter((user) => user.id !== userId);
	res.status(204).send();
});

console.log(users);
const port = 3000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
