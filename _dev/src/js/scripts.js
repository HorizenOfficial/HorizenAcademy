$(function () {

    // ONLY for desktop
    enquire.register("screen and (min-width: 992px)", function () {

        $(".site-nav").headroom({
            "tolerance": 5,
            "offset": 40,
            "classes": {
                "initial": "animated",
                "pinned": "slideDown",
                "unpinned": "slideUp",
                "top": "headroom--top",
                "notTop": "headroom--not-top"
            }
        });


        $("#article-nav").niceScroll({
            cursorcolor: "#000",
            cursoropacitymin: 0,
            cursoropacitymax: 0.5,
            cursorwidth: "8px",
            cursorborder: "none"
        });

        $(".chapter-articles, .one-level-topic-articles")
            .on('shown.bs.collapse', function () {
                $("#article-nav").getNiceScroll().resize();
            })
            .on('hidden.bs.collapse', function () {
                $("#article-nav").getNiceScroll().resize();
            });

    });


    // ONLY for mobile
    enquire.register("screen and (max-width: 991px)", function () {

        $("#mobile-left-menu-toggler").click(function () {
            $("#left-menu").toggleClass("open");
            $(this).toggleClass("open");
        });

    });


    // update menu icon, always run on init
    $("#article-nav .chapter-articles").each(function (_, chapter) {
        chapter = $(chapter);

        if (chapter.children().length === 0) {
            chapter.closest(".topic-articles").addClass("one-article");
        }
    });


    var activeLevel, activeTopic;

    function updateListArticles() {
        if (!activeTopic) return;

        // if (!activeLevel) {
        //     // pre-selected Beginner level when user selects a topic
        //     $(".js-SelectLevel[data-level='beginner']").click();
        //     return;
        // }

        // $(".topic-articles.open .collapse").collapse('hide');

        var articleNav = $("#article-nav");

        articleNav.find(".topic-articles.show").removeClass("show");
        $("#list-" + activeTopic + "-articles .topic-articles.level-" + activeLevel).addClass("show");
        // articleNav.find(".topic-articles.level-" + activeLevel + ".topic-" + activeTopic).addClass("show");

        articleNav.find("#list-" + activeTopic + "-articles").addClass("show");
    }

    $(".js-SelectLevel").click(function (e) {
        e.preventDefault();
        var btn = $(this);

        if (activeLevel === btn.data("level")) {
            return;
        }

        btn.closest(".levels").find(".js-SelectLevel.active").removeClass("active");
        btn.addClass("active");
        activeLevel = btn.data("level");

        $(".js-SelectTopic").each(function (_, linkTopic) {
            linkTopic = $(linkTopic);

            if (linkTopic.data("url-" + activeLevel)) {
                linkTopic.attr("href", linkTopic.data("url-" + activeLevel));
            }
        });

        var oldActiveChapter = $(".chapter-articles.collapse.show");

        updateListArticles();

        if (oldActiveChapter.length) {
            var title = oldActiveChapter.closest(".topic-articles").find(".chapter-link").text().trim();

            $("#article-nav .topic-articles.show").each(function (_, topic) {
                topic = $(topic);
                var t = topic.find(".chapter-link").text().trim();
                if (t === title) {
                    topic.find(".chapter-articles.collapse").collapse('show');
                }
            });
        }
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
        });


    var postContent = $(".js-PostContent");
    if (postContent.length) {
        // browsing article content

        activeLevel = postContent.data("level");
        activeTopic = postContent.data("topic");

        updateListArticles();

        $(".js-SelectLevel[data-level='" + postContent.data("level") + "']").addClass("active");
        $(".js-SelectTopic[data-topic='" + postContent.data("topic") + "']").addClass("active");

        $(".js-SelectTopic").each(function (_, linkTopic) {
            linkTopic = $(linkTopic);
            linkTopic.attr("href", linkTopic.data("url-" + activeLevel));
        });

        var articleLink = $("#article-nav a[href='" + postContent.data("url") + "']");
        if (articleLink.hasClass("article-link")) {
            articleLink.addClass("active").closest(".collapse").collapse('show');
        } else if (articleLink.hasClass("chapter-link")) {
            articleLink.next().collapse('show');
        }
    }


    // home lading page
    if ($("#homepage").length) {
        $(".js-SelectLevel").addClass("active"); // highlight all levels by default
        $(".js-SelectTopic").addClass("active"); // highlight all topics by default

        $(".js-Home-SelectLevel").click(function (e) {
            e.preventDefault();
            var btn = $(this);

            btn.closest(".skill-levels").find(".js-Home-SelectLevel.active").removeClass("active");
            btn.addClass("active");

            $(".js-SelectLevel[data-level='" + btn.data("level") + "']").click();
        });
    }


    // Technology lading page
    if ($("#page-technology").length) {
        $("#list-technology-articles .topic-articles.level-beginner").addClass("show");
    }


    // Privacy lading page
    if ($("#page-privacy").length) {
        $("#list-privacy-articles .topic-articles.level-beginner").addClass("show");
    }

});



