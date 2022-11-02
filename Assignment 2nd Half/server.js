const express = require('express');
const app = express();

app.listen(3000);

// Middelware and Static Files
app.use(express.static('public'));

// Register View Engine
app.set('view engine', 'ejs')

// Home
app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

// About
app.get('/About', (req, res) => {
    res.render('About', { title: 'About'});
});

// Contact
app.get('/Contact', (req, res) => {
    res.render('Contact', { title: 'Contract'});
});