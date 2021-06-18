$(document).ready(function () {
    // 立即訂購btn動態
    $('a[href="#buy"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#buy').offset().top,
        }, 900);
    });
        
    var edmhref = location.href;
    if(edmhref.includes("#friends")){
        $("#friends").attr({
            style: "display: block;"
        });
    }

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

// $("#lp_form").ready(function () {
//     //購物車下拉選單判斷缺貨中
//     $('select[data-name="size-selector"], select[name="color-selector').change(function (e) {
//         e.preventDefault();
//         var size_selector = document.querySelector('select[data-name="size-selector"]').value;
//         var color_selector = document.querySelector('select[name="color-selector"]').value;
//         var preorder_text = $('<span>', { text: '(缺貨中)', style: 'color: red;' });
//         $('.form-group > span').empty();
//         if ( (color_selector == "薰衣草紫" && size_selector == "M")) {
//             $('select[data-name="size-selector"]').parent().after(preorder_text);
//         } else {
//             $('.form-group > span').empty();
//         }
//     });
    
//     // 薰衣草紫：M
// });
