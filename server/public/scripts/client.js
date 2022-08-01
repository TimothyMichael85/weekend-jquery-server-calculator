console.log('client.js test')

$(onReady);

function onReady(){
console.log('we are ready!');

// click listeners
$('#submitBtn').on('click', submit);
$('#clearBtn').on('click', clearClick);
$('.arithmetic').on('click', inputsToServer);

}

function submit(){
    // collect inputs and append to DOM
 
    const numInputs =  {
        numOneInput: Number($('#numInputOne').val()),
        numTwoInput: Number($('#numInputTwo').val()),
        operator: numOperator
    }
    console.log(numInputs);
    $.ajax({
        method: 'POST', 
        url: '/calc',
        data: numInputs
        // POST from client to server.
    }).then(function (response){
        console.log(response)

    }).catch(function(error){
        console.log(error)
    });
// calls to functions
    // clearClick();
    // inputsToServer();
    showResults ();
}

// GET requests
function showResults (){
    console.log('Showing Results');
    $.ajax({
        url: '/calc',
        method: 'GET'
    }).then(function(response){
        //console.log(response)
        // response is whatever res.send() sent us.
        // render to DOM 
        render(response);

    }).catch(function(error){
        // catches errors.
        console.log(error);
        alert('error in get /calc')
    })
    // console.log('end of get calc')

}

function render(calculations){
    // empty - no dupes for you!
    $('ul').empty();
    //append to dom
for (let calcObject of calculations){
    let mathAnswer = Math.round(`${calcObject.mathAnswer}`)
    $('.mathAnswer').empty();
    $('.mathAnswer').append(mathAnswer)
    $('ul').append(`<li>${calcObject.numOneInput}  ${calcObject.operator}  ${calcObject.numTwoInput} = ${calcObject.mathAnswer}</li>`)
}

}
function clearClick(){
    $('.mathAnswer').empty();
    $('input').val('')
}

function inputsToServer(){
    // operator
    numOperator = $(this).text()
}