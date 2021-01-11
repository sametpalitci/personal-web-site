require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT, () => {
    console.log(`App is running`)
});