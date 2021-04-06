$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });

    $("#offer_pants img").hide();

    // 點02_btn_bra_SMP會連到並"展開"05_offer_bra_SMP
    $('a[href="#offer_bra"]').click(function (e) {
        e.preventDefault();
        // $("#offer_bra img").attr("style", "display:block;");
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

$("#lp_form").ready(function () {
    //購物車下拉選單判斷預購
    $('select[data-name="size-selector"], select[name="color-selector').change(function (e) {
        e.preventDefault();
        var size_selector = document.querySelector('select[data-name="size-selector"]').value;
        var color_selector = document.querySelector('select[name="color-selector"]').value;
        var preorder_text = $('<span>', { text: '(預購)', style: 'color: red;' });
        $('.form-group > span').empty();
        if ((color_selector == "天空藍" && size_selector == "M") || (color_selector == "櫻花粉" && size_selector == "M") || (color_selector == "櫻花粉" && size_selector == "M/L") || (color_selector == "海軍藍" && size_selector == "M") || (color_selector == "薰衣草紫" && size_selector == "M") || (color_selector == "寧靜灰" && size_selector == "S") || (color_selector == "異色黑" && size_selector == "S") || (color_selector == "異色黑" && size_selector == "M/L")) {
            $('select[data-name="size-selector"]').parent().after(preorder_text);
        } else {
            $('.form-group > span').empty();
        }
    });
    // 天空藍：M
    // 櫻花粉：M、M / L
    // 海軍藍：M
    // 薰衣草紫：M
    // 寧靜灰: S
    // 異色黑: S、M / L
});