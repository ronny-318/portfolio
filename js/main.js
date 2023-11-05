$(function(){
    $('.top1').mouseover(function(){
        $(this).children('.sub').stop().show();
    });
    $('.top1').mouseleave(function(){
        $(this).children('.sub').stop().hide();
    });
});

$(function(){
    $('.m_top dd:not(:first)').hide();
    $('.m_top dt').click(function(){
        if ($('+dd' ,this).css('display')=='none')
        $('.m_top dd').slideUp(300); 
        $('+dd', this).slideDown(300);
    });
});

$(function(){
    $('.m_menu').click(function(){
        $(this).toggleClass('on');
        $('header .m_top').toggleClass('on');
        $('.shadow').toggleClass('on');
    });
});

$(function(){
    var windowobj = $(window);
    var windowst = windowobj.scrollTop();
    var headerOT = $('header').offset().top;
    var header = $('header');

    windowobj.on('scroll', function(){
        windowst = windowobj.scrollTop();
        if(windowst > headerOT){
            header.addClass('fixed');
        }
        else {
                header.removeClass('fixed');
        }
    });
});