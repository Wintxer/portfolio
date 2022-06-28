$(document).ready(function () {

    var clickDelay = 500,
        clickDelayTimer = null;

    $('.burger-click-region').on('click', function () {

        $("nav").toggleClass('clicked');
        $("li a").toggleClass('navigation');
        
        if (clickDelayTimer === null) {

            let $burger = $(this);
            $burger.toggleClass('active');
            $burger.parent().toggleClass('is-open');

            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
            }

            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    });

    $("a[href='#a-propos'").on("click", function () {
        var targeted = $(this).attr("href");
        var scrollValue = $(targeted).offset().top;
        $("html, body").animate({
            scrollTop: scrollValue
        }, 1000);
    });
    
    $("li a").on("click", function () {
        setTimeout(function () {
            $("nav").toggleClass('clicked');
            $("li a").toggleClass('navigation');
            }, 500);

        let $burger = $('.burger-click-region');
        if (clickDelayTimer === null) {

            $burger.toggleClass('active');
            $burger.parent().toggleClass('is-open');

            if (!$burger.hasClass('active')) {
                $burger.addClass('closing');
            }

            clickDelayTimer = setTimeout(function () {
                $burger.removeClass('closing');
                clearTimeout(clickDelayTimer);
                clickDelayTimer = null;
            }, clickDelay);
        }
    });
});