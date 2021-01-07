$(function(){
    $(".nav-jump a").click(function(){
        var divShow = $(".pages").children('.page');
        if (!$(this).hasClass('active')) { 
            var index = $(this).index();
            $(this).addClass('active').siblings('a').removeClass('active');
            $(divShow[index]).show();
            $(divShow[index]).siblings('section').hide();
        }
    });
});

