console.log('clientjs test')

$(onReady);

function onReady(){
console.log('ready!');

// add click listeners here
$('#submitBtn').on('click', submit);
$('#clearBtn').on('click', clearClick);
$('.numOperator').on('click', inputsToServer);

}

function submit(){
    // collect inputs and append to DOM
    // let operator = $('.numOperator');
    const numInputs =  {
        numOneInput: Number($('#numInputOne').val()),
        numTwoInput: Number($('#numInputTwo').val()),
        operator: numOperator
    }
}
    console.log(numInputs);