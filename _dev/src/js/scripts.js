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

    $("#article-nav").niceScroll({
        cursorcolor:"#000",
        cursoropacitymin: 0,
        cursoropacitymax: 0.5,
        cursorwidth: "8px",
        cursorborder: "none"
    });


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

        listArticles.find(".topic-articles.level-all" + ".topic-" + activeTopic).addClass("show");
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

        $(".js-SelectTopic").each(function (_, linkTopic) {
            linkTopic = $(linkTopic);
            linkTopic.attr("href", linkTopic.data("url-" + activeLevel));
        });

        updateListArticles();
    });

    // $(".js-SelectTopic").click(function (e) {
    //     e.preventDefault();
    //     var btn = $(this);
    //
    //     if (btn.hasClass("active")) {
    //         return;
    //     }
    //
    //     btn.closest(".topics").find(".js-SelectTopic.active").removeClass("active");
    //     btn.addClass("active");
    //     activeTopic = btn.data("topic");
    //
    //     updateListArticles();
    // });

    $(".chapter-articles")
        .on('show.bs.collapse', function () {
            $(this).closest(".topic-articles").addClass("open");
        })
        .on('hide.bs.collapse', function () {
            $(this).closest(".topic-articles").removeClass("open");
        })
        .on('shown.bs.collapse', function () {
            $("#article-nav").getNiceScroll().resize();
        })
        .on('hidden.bs.collapse', function () {
            $("#article-nav").getNiceScroll().resize();
        });

    var postContent = $(".js-PostContent");
    if (postContent.length) {
        activeLevel = postContent.data("level");
        activeTopic = postContent.data("topic");

        updateListArticles();

        $(".js-SelectLevel[data-level='" + postContent.data("level") + "']").addClass("active");
        $(".js-SelectTopic[data-topic='" + postContent.data("topic") + "']").addClass("active");

        var articleLink = $("#list-articles a[href='" + postContent.data("url") + "']");
        console.log(articleLink);
        if (articleLink.hasClass("chapter")) {
            articleLink.next().collapse('show');
        } else {
            articleLink.addClass("active").closest(".collapse").collapse('show');
        }
    }

});
