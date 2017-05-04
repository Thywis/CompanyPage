$(function () {
    
    //
    $(window).scroll(function () {
        
    });
    
    $("#page-nav a").click(function () {
        var sec = $(this).attr("data-href");
        console.log(sec);
        $("body").animate({
            scrollTop: $(sec).offset().top
        }, 500);
    });
});
