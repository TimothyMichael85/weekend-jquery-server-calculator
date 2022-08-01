// imports
const express = require('express');
const bodyParser = require('body-parser');

// server configuration
const app = express();
const PORT = 5000;



// Make static file
app.use(express.static('server/Public'));
app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, function(){
    console.log('server listening on port', PORT)
});

app.post('/calc', (req, res) =>{
    console.log('POST /calc', req.body);
    // push to array
    // calculations.push(req.body)
    numInputs=req.body
    // send back response
    res.sendStatus(200);
    myEquation();
    })
    app.get('/calc', (req,res) =>{
        console.log('in get calc');
        res.send(calculations);
    })

const calculations = [];

let numInputs;
let answer;

function myEquation(){
    switch (numInputs.operator) {
        case '+':
            answer = Number(numInputs.numOneInput) + Number(numInputs.numTwoInput)
            break;
        case '-':
            answer = Number(numInputs.numOneInput) - Number(numInputs.numTwoInput)
            break;
        case '*':
            answer = Number(numInputs.numOneInput) * Number(numInputs.numTwoInput)
            break;
        case '/':
            answer = Number(numInputs.numOneInput) / Number(numInputs.numTwoInput)
            break;
    }

let finalAnswer={
    numOneInput: numInputs.numOneInput,
    operator: numInputs.operator,
    numTwoInput: numInputs.numTwoInput,
    mathAnswer: answer
}
calculations.push(finalAnswer)
    console.log(calculations)
}