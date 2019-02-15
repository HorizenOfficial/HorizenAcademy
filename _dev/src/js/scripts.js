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


    var activeLevel, activeTopic;

    function updateListArticles() {
        if (!activeTopic) return;

        if (!activeLevel) {
            // pre-selected Beginner level when user selects a topic
            $(".js-SelectLevel[data-level='beginner']").click();
            return;
        }

        $(".topic-articles.open .collapse").collapse('hide');

        var listArticles = $("#list-articles");

        listArticles.find(".topic-articles.show").removeClass("show");
        listArticles.find(".topic-articles.level-" + activeLevel + ".topic-" + activeTopic).addClass("show");
    }

    $(".js-SelectLevel").click(function (e) {
        e.preventDefault();
        var btn = $(this);

        if (btn.hasClass("active")) {
            return;
        }

        btn.closest(".levels").find(".js-SelectLevel.active").removeClass("active");
        btn.addClass("active");
        activeLevel = btn.data("level");

        updateListArticles();
    });

    $(".js-SelectTopic").click(function (e) {
        e.preventDefault();
        var btn = $(this);

        if (btn.hasClass("active")) {
            return;
        }

        btn.closest(".topics").find(".js-SelectTopic.active").removeClass("active");
        btn.addClass("active");
        activeTopic = btn.data("topic");

        updateListArticles();
    });

    $(".chapter-articles")
        .on('show.bs.collapse', function () {
            $(this).closest(".topic-articles").addClass("open");
        })
        .on('hide.bs.collapse', function () {
            $(this).closest(".topic-articles").removeClass("open");
        });

    var postContent = $(".js-PostContent");
    if (postContent.length) {
        activeLevel = postContent.data("level");
        activeTopic = postContent.data("topic");

        updateListArticles();

        $(".js-SelectLevel[data-level='" + postContent.data("level") + "']").addClass("active");
        $(".js-SelectTopic[data-topic='" + postContent.data("topic") + "']").addClass("active");
        $("a[href='" + postContent.data("url") + "']").addClass("active").closest(".collapse").collapse('show');
    }

});
