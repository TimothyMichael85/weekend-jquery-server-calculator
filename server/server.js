// imports
const express = require('express');
//const bodyParser = require('body-parser');

// server configuration
const app = express();
const PORT = 5000;



// Make static file
app.use(express.static('server/Public'));
//app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, function(){
    console.log('server listening on port', PORT)
});