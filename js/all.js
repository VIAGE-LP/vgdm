$(document).ready(function () {
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

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
            $("#wh-widget-send-button").attr({
                style: "display: block;width: 261px;height: 94px;"
            });
        } else if ((formTop <= (scrollPos + windowHeight / 2)) && (width > 768)) {
            $("#wh-widget-send-button").attr({
                style: "display: none ;width: 0px;height: 0px;"
            });
            $("#fb-root").attr({
                style: "display: block;"
            });
        } 
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw=$(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://line.me/R/oaMessage/@fhl1857j/?%E7%B4%A2%E5%8F%96%E6%9C%80%E6%96%B0%E5%84%AA%E6%83%A0");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }
});

