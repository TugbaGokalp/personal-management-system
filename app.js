import express from 'express';
import dotenv from "dotenv";
import conn from "./db.js" // db.js olmak zorunda yoksa ecmaScript calismiyor.

dotenv.config();

//connection to the database
conn();

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
});





app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
});