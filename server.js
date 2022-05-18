// Load express
const express = require('express');

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function(req, res) {
    res.send('<h1>Hello Express!</h1>');
});

app.get('/cars', function(req, res) {
    res.send("Here's a list of my cars...");
});

app.post('/cars', function(req, res) {
    res.send('Thanks for the new car!');
});




// Tell the app to listen on port 3000
// for HTTP requests from clients
/*app.listen(3000, function() {
    console.log('Listening on port 3000');
});
*/

// Tell the app to listen on port 3000
/*app.listen(3000, function() {
    console.log('Listening on port 3000');
});

*/


const express = require('express');

const app = express();

//const port = 3000;


const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

/*

app.listen(3000, () => {
    console.log('listening');
});


app.listen(port, () => {
    console.log('listening on port', port);
});*/



const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)
            // this is an extremely simple view engine we'll be more complex later
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})

app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
})

app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
})

app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
})

app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, () => {
    console.log('listening');
});