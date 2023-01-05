const express = require('express');
const hbs = require('express-handlebars')
const morgan = require('morgan');
const app = express();
const port = 3002;

// HTTP Logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))



// Home
app.get('/', (req, res) => {
    res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})