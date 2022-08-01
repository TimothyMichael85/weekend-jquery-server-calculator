console.log('clientjs test')

$(onReady);

function onReady(){
console.log('ready!');

// add click listeners here
$('#submitBtn').on('click', submitclicks);
$('#clearBtn').on('click', clearClick);
$('.numOperator').on('click', inputsToServer);

}