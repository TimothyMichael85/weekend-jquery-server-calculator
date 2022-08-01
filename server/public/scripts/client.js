console.log('clientjs test')

$(onReady);

function onReady(){
console.log('ready!');

// add click listeners here
$('#submitBtn').on('click', submit);
$('#clearBtn').on('click', clearClick);
$('.arithmetic').on('click', inputsToServer);

}


function submit(){
    // collect inputs and append to DOM
    // let operator = $('.numOperator');
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
        // "POST"-ing data that is from the client to the server.
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
    console.log('showing Results');
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
    // empty - gets rid of dupes
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