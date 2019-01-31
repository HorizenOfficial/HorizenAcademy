$(function () {

    // $(".site-nav").headroom({
    //     "tolerance": 5,
    //     "offset": 40,
    //     "classes": {
    //         "initial": "animated",
    //         "pinned": "slideDown",
    //         "unpinned": "slideUp",
    //         "top": "headroom--top",
    //         "notTop": "headroom--not-top"
    //     }
    // });


    $(".js-SelectLevel").click(function (e) {
        e.preventDefault();
        var btn = $(this);

        btn.closest(".levels").find(".js-SelectLevel.active").removeClass("active");
        btn.addClass("active");
    });

    $(".js-SelectCategory").click(function (e) {
        e.preventDefault();
        var btn = $(this);

        btn.closest(".categories").find(".js-SelectCategory.active").removeClass("active");
        btn.addClass("active");
    });

});
