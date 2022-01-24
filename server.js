const express = require('express');
const mongoose = require("mongoose")
const morgan = require('morgan')
const app = express();
const skillsController = require('./controllers/skills')

require('dotenv').config();

const {DATABASE_URL, PORT} = process.env

mongoose.connect(DATABASE_URL)

const db = mongoose.connection
db.on("error", (err) => console.log(err.message + " is mongo not running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))


app.use(express.json())
app.use(morgan('dev'));

app.use('/api/skills', skillsController);



app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));