$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    $("#offer_bra img,#offer_pants img").hide();

    // 點02_btn_bra_SMP會連到並"展開"05_offer_bra_SMP
    $('a[href="#offer_bra"]').click(function (e) {
        e.preventDefault();
        $("#offer_bra img").attr("style", "display:block;");
        $('html , body').animate({
            scrollTop: $('#offer_bra').offset().top,
        }, 900);
    });
    // 點03_btn_pants_SMP會連到並"展開"07_offer_pants_SMP
    $('a[href="#offer_pants"]').click(function (e) {
        e.preventDefault();
        $("#offer_pants img").attr("style", "display:block;");
        $('html , body').animate({
            scrollTop: $('#offer_pants').offset().top,
        }, 900);
    });
    // 點06_btn_pants_2_SMP會往上連到03_pants_SMP
    $('a[href="#pants"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#pants').offset().top,
        }, 900);
    });
    // 點08_btn_set_SMP會往上連到04_offer_set_SMP
    $('a[href="#offer_set"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#offer_set').offset().top,
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