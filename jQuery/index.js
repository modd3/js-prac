$(document).ready(function (){
    $('h1').click(function() {
        alert("jQuery working!!");
    });
});

$('h1').addClass('big-title');

$(document).keypress(function(event) {
    $('h1').text(event.key);
})