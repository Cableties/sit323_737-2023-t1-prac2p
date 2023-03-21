const express = require("express");
const winston = require("winston");
const res = require("express/lib/response");
const app = express();

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	defaultMeta: { service: "calculator-microservice" },
	transports: [
		new winston.transports.File({ filename: "logs/error.log", level: "error" }),
		new winston.transports.File({ filename: "logs/combined.log" }),
	],
});

const add = (n1, n2) => {
	return n1 + n2;
};

const subtract = (n1, n2) => {
	return n1 - n2;
};

const multiply = (n1, n2) => {
	return n1 * n2;
};

const divide = (n1, n2) => {
	return n1 / n2;
};

app.get("/add", (req, res) => {
	try {
		const n1 = parseInt(req.query.n1);
		const n2 = parseInt(req.query.n2);
		if (isNaN(n1)) {
			logger.error(`Error occured while adding ${n1} and ${n2}`);
			throw new Error("n1 must be a number");
		}
		if (isNaN(n2)) {
			logger.error(`Error occured while adding ${n1} and ${n2}`);
			throw new Error("n2 must be a number");
		}
		const result = add(n1, n2);
		logger.log({
			level: "info",
			message: `Addition of ${n1} and ${n2} is ${result}`,
		});

		res.status(200).json({ statuscode: 200, result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ statuscode: 500, message: err.toString });
	}
});

app.get("/subtract", (req, res) => {
	try {
		const n1 = parseInt(req.query.n1);
		const n2 = parseInt(req.query.n2);
		if (isNaN(n1)) {
			logger.error(`Error occured while subtracting ${n1} and ${n2}`);
			throw new Error("n1 must be a number");
		}
		if (isNaN(n2)) {
			logger.error(`Error occured while subtracting ${n1} and ${n2}`);
			throw new Error("n2 must be a number");
		}
		const result = subtract(n1, n2);
		logger.log({
			level: "info",
			message: `Subtraction of ${n1} and ${n2} is ${result}`,
		});
		res.status(200).json({ statuscode: 200, result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ statuscode: 500, message: err.toString });
	}
});

app.get("/multiply", (req, res) => {
	try {
		const n1 = parseInt(req.query.n1);
		const n2 = parseInt(req.query.n2);
		if (isNaN(n1)) {
			logger.error(`Error occured while multiplying ${n1} and ${n2}`);
			throw new Error("n1 must be a number");
		}
		if (isNaN(n2)) {
			logger.error(`Error occured while multiplying ${n1} and ${n2}`);
			throw new Error("n2 must be a number");
		}
		const result = multiply(n1, n2);
		logger.log({
			level: "info",
			message: `Multiplication of ${n1} and ${n2} is ${result}`,
		});
		res.status(200).json({ statuscode: 200, result: result });
	} catch (error) {
		console.error(error);
		res.status(500).json({ statuscode: 500, message: err.toString });
	}
});

app.get("/divide", (req, res) => {
	try {
		const n1 = parseInt(req.query.n1);
		const n2 = parseInt(req.query.n2);
		if (isNaN(n1) || n1 == 0) {
			logger.error(`Error occured while dividing ${n1} and ${n2}`);
			throw new Error("n1 must be a number greater than zero");
		}
		if (isNaN(n2) || n2 == 0) {
			logger.error(`Error occured while dividing ${n1} and ${n2}`);
			throw new Error("n2 must be a number greater than zero");
		}
		const result = divide(n1, n2);
		logger.log({
			level: "info",
			message: `Division of ${n1} and ${n2} is ${result}`,
		});
		res.status(200).json({ statuscode: 200, result: result });
	} catch (error) {
		console.error(error);

		res.status(500).json({ statuscode: 500, message: err.toString });
	}
});

const port = 3040;
let a = divide(0, 8);
console.log(a);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
