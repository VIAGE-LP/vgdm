$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    $('a[href="#buy_pants"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy_pants').offset().top,
        }, 900);
    });
        
    var edmhref = location.href;
    if(edmhref.includes("#friends")){
        $("#friends").attr({
            style: "display: block;"
        });
    }

    // 點08_btn_set_SMP會連到並"展開"id="offer_pants"
    $('.btn_pants_2').click(function (e) {
        e.preventDefault();
        $(".offer_pants").attr("style", "display:block;");
        $('html , body').animate({
            scrollTop: $('#offer_pants').offset().top,
        }, 900);
    });

    // $("#wh-call-to-action").removeAttr("wh-click");
    $("#wh-call-to-action").removeClass("wh-animation-in");
    //聊天機器人
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var formTop = $('#lp_form').position().top;
        var width = $(window).width();

        if ((formTop <= (scrollPos + windowHeight / 2)) && (width <= 768)) {
            $("#fb-root").attr({
                style: "display: none;"
            });
            $("#wrapper img#line").attr({
                style: "display: block;"
            });
            $(".line_alert").attr({
                style: "display: block;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#fb-root").attr({
                style: "display: block;"
            });
        }
    });
});
