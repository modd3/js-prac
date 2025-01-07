$("h1").click(function () {
    alert('jquery working');
    $('h1').addClass('big-heading');
})

$(document).keypress(function (event) {
    console.log(event.key);
    if (event.key === 'n') {
        $('img').addClass("img_rotate");
        $('img').removeClass('img_unrotate');
    }
    else if (event.key === 'p') {
        setTimeout(function () {
            $("img").fadeIn(100).fadeOut(200).fadeIn(100).fadeIn(200).fadeOut(100).fadeIn(100);
            $('img').removeClass('img_rotate');
            $('img').removeClass('img_unrotate');
        }, 1000)
    }
    else {
        $("img").addClass("img_unrotate");
    }
})