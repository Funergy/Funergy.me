var main = function(){
    $(".about-link").click(function(){
        $("body").animate({scrollTop: $(".about").offset().top+585},"slow");
    });
    $(".skills-link").click(function(){
        $("body").animate({scrollTop: $(".skills").offset().top+255},"slow");
    });
    $(".projects-link").click(function(){
        $("body").animate({scrollTop: $(".projects").offset().top+525},"slow");
    });
}
$(document).ready(main());