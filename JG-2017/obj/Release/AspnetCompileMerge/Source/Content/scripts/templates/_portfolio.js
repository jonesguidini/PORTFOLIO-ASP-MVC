$(document).ready(function () {

    //enable fancybox
    $('.fancybox').fancybox();

    $(".btn-listInfo-port").on('click', function () {
        var idPai = $(this).parent().attr('class');

        //close all other menu's content
        $(".list-collapse").each(function (index) {
            var _object = $(this);
            var checkHidden = _object.is(":hidden");
            if (!checkHidden) {
                _object.slideUp("slow");
            }
        });

        //remove the class 'link-selected' from all selected items 
        $(".link-selected").each(function (index) {
            $(this).removeClass("link-selected");
        });

        //change all arrows to up direction
        $(".fa-caret-up").each(function (index) {
            $(this).removeClass("fa-caret-up").addClass("fa-caret-down");
        });

        
        //open or close the div accordingly to the selected item
        var _object = $(this).next(".list-collapse");
        var checkHidden = _object.is(":hidden");

        if (checkHidden) { //if it is true
            _object.slideDown("slow");
            $(this).addClass("link-selected");
            $(this).find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
        } else {
            _object.slideUp("fast");
            $(this).removeClass("link-selected");
            $(this).find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
        }

        //scroll to the base of the selected div
        var top = $('.' + idPai).position().top;
        setTimeout(function () {
            $('html, body').animate({
                scrollTop: top
            }, 300);
        }, 500);
    });

});