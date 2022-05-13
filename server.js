const fs = require('fs');
const express = require('express');
const { Server } = require('http');
const app = express();
const port = 3000;



const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter", ];


/*app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});
*/


/*app.get('/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
});
*/

/*app.get('/oops/:indexOfPlantsArray', (req, res) => {
    res.send(plants[req.params.indexOfPlantsArray]);
    // error cannot send more than one response!
    res.send('this is the index: ' + req.params.indexOfPlantsArray);
});*/


/*app.get('/:indexOfPlantsArray', (req, res) => {
    if (plants[req.params.index]) {
        res.send(plants[req.params.indexOfPlantsArray]);
    } else {
        res.send('cannot find anything at this index: ' + req.params.indexOfPlantsArray);
    }

});*/

app.get('/:indexOfPlantsArray', (req, res) => { //:indexOfPlantsArray can be anything, even awesome
    res.send(plants[req.params.indexOfPlantsArray]);
});

app.get('/awesome', (req, res) => { //this will never be reached
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});


//make server run


app.listen(port, () => {
    console.log('listening on port', port);
});
/*app.listen(3000, function() {
    console.log('Listening on port 3000')
});*/