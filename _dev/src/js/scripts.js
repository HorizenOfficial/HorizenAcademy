
// plugins
$(function () {
    $('.js-Select2').select2();
});

$(function () {

    var articleNav = $("#article-nav");

    // ONLY for desktop
    enquire.register("screen and (min-width: 992px)", function () {

        articleNav.niceScroll({
            cursorcolor: "#000",
            cursoropacitymin: 0,
            cursoropacitymax: 0.5,
            cursorwidth: "8px",
            cursorborder: "none"
        });

        $(".chapter-articles, .one-level-topic-articles")
            .on('shown.bs.collapse', function () {
                articleNav.getNiceScroll().resize();
            })
            .on('hidden.bs.collapse', function () {
                articleNav.getNiceScroll().resize();
            });

    });


    // ONLY for mobile
    enquire.register("screen and (max-width: 991px)", function () {

        $("#mobile-left-menu-toggler").click(function () {
            $("#left-menu").toggleClass("open");
            $(this).toggleClass("open");
        });

        $("#left-menu-overlay").click(function () {
            $("#left-menu").removeClass("open");
            $("#mobile-left-menu-toggler").removeClass("open");
        });

        // zoom image on mobile
        var fullZoom = $("#full-screen-image-zoom");
        fullZoom.find('.panzoom').panzoom({
            $zoomIn: fullZoom.find(".zoom-in"),
            $zoomOut: fullZoom.find(".zoom-out")
        });
        $(".post-content img").click(function (e) {
            fullZoom.show();
            fullZoom.find("img").attr("src", $(this).attr("src"));
        });
        fullZoom.find(".zoom-close").click(function (e) {
            fullZoom.hide();
        });
        fullZoom.find("img").click(function (e) {
            e.stopPropagation();
        });

    });



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

    $(".toggle-languages").click(function (e) {
        e.preventDefault();
        $(".language-select").toggleClass("show");
    });


    // update menu icon, always run on init
    articleNav.find(".chapter-articles").each(function (_, chapter) {
        chapter = $(chapter);

        if (chapter.children().length === 0) {
            chapter.closest(".topic-articles").addClass("one-article");
        }
    });


    var $SelectLevel = $(".js-SelectLevel"), $SelectTopic = $(".js-SelectTopic"), $PostContent = $(".js-PostContent");

    var activeLevel, activeTopic;

    function updateListArticles() {
        if (!activeTopic) return;

        // if (!activeLevel) {
        //     // pre-selected Beginner level when user selects a topic
        //     $(".js-SelectLevel[data-level='beginner']").click();
        //     return;
        // }

        // $(".topic-articles.open .collapse").collapse('hide');

        articleNav.find(".topic-articles.show").removeClass("show");
        $("#list-" + activeTopic + "-articles .topic-articles.level-" + activeLevel).addClass("show");
        // articleNav.find(".topic-articles.level-" + activeLevel + ".topic-" + activeTopic).addClass("show");

        articleNav.find("#list-" + activeTopic + "-articles").addClass("show");
    }

    $SelectLevel.click(function (e) {
        var btn = $(this);

        if (btn.attr("href").length > 1) {
            return;
        }

        e.preventDefault();

        if (activeLevel === btn.data("level")) {
            return;
        }

        btn.closest(".levels").find(".js-SelectLevel.active").removeClass("active");
        btn.addClass("active");
        activeLevel = btn.data("level");

        $SelectTopic.each(function (_, linkTopic) {
            linkTopic = $(linkTopic);

            if (linkTopic.data("url-" + activeLevel)) {
                linkTopic.attr("href", linkTopic.data("url-" + activeLevel));
            }
        });

        var oldActiveChapter = $(".chapter-articles.collapse.show");

        updateListArticles();

        if (oldActiveChapter.length) {
            var title = oldActiveChapter.closest(".topic-articles").find(".chapter-link").text().trim();

            articleNav.find(".topic-articles.show").each(function (_, topic) {
                topic = $(topic);
                var t = topic.find(".chapter-link").text().trim();
                if (t === title) {
                    topic.find(".chapter-articles.collapse").collapse('show');
                }
            });
        }
    });

    $SelectTopic.click(function (e) {
        var btn = $(this);

        if ($PostContent.length && btn.attr("href") === $PostContent.data("url")) {
            e.preventDefault();
            $("#list-" + btn.data("topic") + "-articles").collapse('toggle');
        }
    });
    articleNav.find(".chapter-link").click(function (e) {
        var btn = $(this);

        if ($PostContent.length && btn.attr("href") === $PostContent.data("url")) {
            e.preventDefault();
            btn.closest(".topic-articles").find(".chapter-articles.collapse").collapse('toggle');
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

    $(".one-level-topic-articles")
        .on('show.bs.collapse', function () {
            $(this).prev().find(".js-SelectTopic").addClass("active");
        })
        .on('hide.bs.collapse', function () {
            $(this).prev().find(".js-SelectTopic").removeClass("active");
        });



    if ($PostContent.length) {
        // browsing article content

        activeLevel = $PostContent.data("level");
        activeTopic = $PostContent.data("topic");

        updateListArticles();

        $(".js-SelectLevel[data-level='" + $PostContent.data("level") + "']").addClass("active");
        $(".js-SelectTopic[data-topic='" + $PostContent.data("topic") + "']").addClass("active");

        $SelectTopic.each(function (_, linkTopic) {
            linkTopic = $(linkTopic);
            linkTopic.attr("href", linkTopic.data("url-" + activeLevel));
        });

        var articleLink = articleNav.find("a[href='" + $PostContent.data("url") + "']");

        var menuCollapseOpen = false;
        // open list articles in chapter/topic
        if (articleLink.hasClass("article-link")) {
            articleLink.addClass("active").closest(".collapse").collapse('show');

            menuCollapseOpen = true;
        } else if (articleLink.hasClass("chapter-link")) {
            articleLink.next().collapse('show');

            menuCollapseOpen = true;
        }

        // scroll
        // articleLink.offset().top - articleNav.offset().top;
        // articleNav.height();
        // articleLink.offset().top - articleNav.height() - articleNav.offset().top;
        // articleNav.animate({scrollTop: 0});

        // auto scroll
        if (menuCollapseOpen) {

            // run on desktop version only
            enquire.register("screen and (min-width: 992px)", function () {

                setTimeout(function () {
                    var viewBuff = 80;
                    var offsetTop = Math.round(articleLink.offset().top - articleNav.height() - articleNav.offset().top + viewBuff);
                    if (offsetTop > 0) {
                        articleNav.animate({scrollTop: offsetTop});
                    }
                }, 1000); // wait collap open

            });

        }


        // post bottom nav
        function updateNavLink(navLink, desLink) {
            navLink.attr("href", desLink.attr("href")).removeClass("disabled");

            navLink.find(".article-title").html(desLink.hasClass("js-SelectTopic") ? desLink.find(".topic-name").html() : desLink.html());
        }
        function linkNavNextChapter() {
            var nextChapter = articleLink.closest(".topic-articles").next();
            if (nextChapter.length && nextChapter.hasClass("show")) {
                updateNavLink(nextNav, nextChapter.find(".chapter-link"));
            }
        }
        function linkNavPrevChapter() {
            var prevChapter = articleLink.closest(".topic-articles").prev();
            if (prevChapter.length && prevChapter.hasClass("show")) {
                updateNavLink(prevNav, prevChapter.find(".chapter-link"));
            }
        }

        var bottomNav =  $(".post-bottom-nav");
        var prevNav =  bottomNav.find(".link-prev-article");
        var nextNav =  bottomNav.find(".link-next-article");
        var nextArticle;

        if (articleLink.hasClass("article-link")) {

            var prevArticle = articleLink.prev();
            if (prevArticle.length) {
                if (prevArticle.attr("href")) {
                    updateNavLink(prevNav, prevArticle);
                }
            } else {
                var currentChapter = articleLink.closest(".topic-articles").find(".chapter-link");
                if (currentChapter.length) {
                    updateNavLink(prevNav, currentChapter.find(".chapter-link"));
                } else {
                    // updateNavLink(prevNav, $(".js-SelectTopic.active"));
                }
            }


            nextArticle = articleLink.next();
            if (nextArticle.length && nextArticle.attr("href")) {
                updateNavLink(nextNav, nextArticle);
            } else {
                linkNavNextChapter();
            }

        } else if (articleLink.hasClass("chapter-link")) {

            linkNavPrevChapter();

            nextArticle = articleLink.closest(".topic-articles").find(".chapter-articles").find("a:first-child");
            if (nextArticle.length) {
                updateNavLink(nextNav, nextArticle);
            } else {
                linkNavNextChapter();
            }

        } else if (articleLink.hasClass("js-SelectTopic")) {

            var topic = $("#list-"+articleLink.data("topic")+"-articles");
            // no preview article
            var articles = topic.find(".show .article-link");
            if (articles.length) {
                updateNavLink(nextNav, articles.first());
            } else {
                updateNavLink(nextNav, topic.find(".article-link").first());
            }

        }


        // update level links
        // bottomNav.find(".skill-levels .link-" + $PostContent.data("level")).addClass("active").attr("href", $PostContent.data("url"));
        var articleTitle;

        if (articleLink.hasClass("article-link")) {

            articleTitle = articleLink.text().trim();

            ["beginner", "advanced", "expert"].forEach(function (level) {
                if ($PostContent.data("level") === level) {
                    bottomNav.find(".skill-levels .link-" + level).addClass("active").attr("href", $PostContent.data("url")).removeClass("disabled");
                    $(".js-SelectLevel[data-level='" + level + "']").attr("href", $PostContent.data("url"));
                    return;
                }

                articleLink.closest(".list-topic-articles").find(".topic-articles.level-" + level + " .article-link").each(function (_, article) {
                    article = $(article);
                    var t = article.text().trim();
                    if (t === articleTitle) {
                        bottomNav.find(".skill-levels .link-" + level).attr("href", article.attr("href")).removeClass("disabled");
                        $(".js-SelectLevel[data-level='" + level + "']").attr("href", article.attr("href"));
                    }
                });

            });

        } else if (articleLink.hasClass("chapter-link")) {

            articleTitle = articleLink.closest(".topic-articles").find(".chapter-link").text().trim();

            ["beginner", "advanced", "expert"].forEach(function (level) {
                if ($PostContent.data("level") === level) {
                    bottomNav.find(".skill-levels .link-" + level).addClass("active").attr("href", $PostContent.data("url")).removeClass("disabled");
                    $(".js-SelectLevel[data-level='" + level + "']").attr("href", $PostContent.data("url"));
                    return;
                }

                articleLink.closest(".list-topic-articles").find(".topic-articles.level-" + level).each(function (_, topic) {
                    topic = $(topic);
                    var chapter = topic.find(".chapter-link");
                    var t = chapter.text().trim();
                    if (t === articleTitle) {
                        bottomNav.find(".skill-levels .link-" + level).attr("href", chapter.attr("href")).removeClass("disabled");
                        $(".js-SelectLevel[data-level='" + level + "']").attr("href", chapter.attr("href"));
                    }
                });

            });

        } else if (articleLink.hasClass("js-SelectTopic")) {

            ["beginner", "advanced", "expert"].forEach(function (level) {
                if (articleLink.data("url-" + level)) {

                    if ($PostContent.data("level") === level) {
                        bottomNav.find(".skill-levels .link-" + level).addClass("active").attr("href", $PostContent.data("url")).removeClass("disabled");
                        $(".js-SelectLevel[data-level='" + level + "']").attr("href", $PostContent.data("url"));
                        return;
                    }

                    bottomNav.find(".skill-levels .link-" + level).attr("href", articleLink.data("url-" + level)).removeClass("disabled");
                    $(".js-SelectLevel[data-level='" + level + "']").attr("href", articleLink.data("url-" + level));
                }
            });

        }

    }


    // home lading page
    if ($("#homepage").length) {
        // highlight all levels and all topics by default
        $SelectLevel.addClass("active");
        $SelectTopic.addClass("pre-active");

        $(".js-Home-SelectLevel").click(function (e) {
            e.preventDefault();
            var btn = $(this);

            btn.closest(".skill-levels").find(".js-Home-SelectLevel.active").removeClass("active");
            btn.addClass("active");

            $(".js-SelectLevel[data-level='" + btn.data("level") + "']").click();
        });

        // open nav on mobile
        enquire.register("screen and (max-width: 991px)", function () {
            $(".js-Home-SelectLevel").click(function (e) {
                $("#left-menu").addClass("open");
                $("#mobile-left-menu-toggler").addClass("open");
            });
        });

        // show button on desktop
        enquire.register("screen and (min-width: 992px)", function () {
            $(".js-Home-SelectLevel").click(function (e) {
                var btnLevel = $(this);

                $(".js-Home-SelectTopic").each(function (_, topic) {
                    topic = $(topic);
                    topic.attr("href", topic.data("url-" + btnLevel.data("level")));
                });
            });
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


    // Horizen lading page
    if ($("#page-horizen").length) {
        $("#list-horizen-articles .topic-articles.level-beginner").addClass("show");
    }

});


// Search function
$(function () {
    var algoliaData = $("#algolia-data");
    var client = algoliasearch(algoliaData.data("app-id"), algoliaData.data("api-key"));
    var index = client.initIndex(algoliaData.data("index-name"));

    var searchBox = $("#search-box");
    var searchResult = searchBox.find(".search-results");
    var activeTimer;

    searchBox.hover(
        function () {
            // Over
            if (activeTimer) {
                clearTimeout(activeTimer);
            }
            if (!searchBox.hasClass("active")) {
                searchBox.addClass("active");
            }
        }, function () {
            // Out
            activeTimer = setTimeout(function () {
                searchBox.removeClass("active");
            }, 1000 * 3); // 3s
        }
    );

    var index_search = function(keyword) {
        index.search(keyword, function (err, content) {
            searchResult.empty();

            if (!content.hits.length) {
                searchResult.append("<p class='no-result'>We didn't find any result for \"" + keyword + "\". Sorry!</p>");
                return;
            }

            content.hits.forEach(function (hit) {
                var html = "";
                html += "<h5>" + hit._highlightResult.title.value + "</h5>";

                html += "<div>";
                if (hit.topic) {
                    html += "<span class='badge badge-primary badge-topic'>" + hit.topic + "</span>"
                }
                if (hit.level) {
                    html += "<span class='badge badge-success badge-level'>" + hit.level + "</span>"
                }
                html += "</div>";

                html += "<p>" + hit._highlightResult.content.value.split(" ").splice(0, 24).join(" ") + " ...</p>";

                searchResult.append("<a href='/" + hit.url + "'>" + html + "</a>");
            });

        });
    };

    var searchTimer;
    searchBox.find(".input-search").on('input', function () {

        var keyword = $(this).val().trim();

        if (!keyword) return;

        if (searchTimer) {
            clearTimeout(searchTimer);
        }

        searchResult.show().empty().append("<p class='searching'>Searching...</p>");

        searchTimer = setTimeout(index_search, 250, keyword);
    });

});



// subscribe form
$(function () {
    var mcWrapper = $(".footer-subscribe");
    var mcForm = $("#mc-footer-subscribe-form");

    var failCb = function (response) {
        // mailchimp ajax submit error
        mcForm.fadeOut();
        mcWrapper.find(".email-fail").fadeIn();
    };

    var successCb = function (response) {
        mcForm.fadeOut();
        mcWrapper.find(".email-success").fadeIn();
    };

    var errorCb = function (response) {
        var errorMap = [
            {"message": "is already subscribed", "response": "Looks like you're already subscribed."},
            {"message": "Please enter a value", "response": "Please enter an email address."},
            {"message": "Too many subscribe attempts", "response": "Please wait 5 mintutes and try again."},
            {"message": "must contain a single @", "response": "Please enter a valid email address."},
            {"message": "domain portion of the email address is invalid", "response": "Please enter a valid email address."}
        ];

        mcForm.find(".form-group").addClass('has-warning');
        var errorMsg = "Something went wrong when submitting the form. Please check the information you provided and try again."; // default

        for (var i = 0; i < errorMap.length; i++) {
            if (response.msg.indexOf(errorMap[i].message) >= 0) {
                errorMsg = errorMap[i].response;
                break;
            }
        }

        mcWrapper.find(".email-feedback").text(errorMsg);
    };

    var fnCallback = function(response) {
        if (response.status == '404') {
            return failCb(response);
        }

        if (response.result === 'success') {
            return successCb(response);
        }

        if (response.result === 'error') {
            return errorCb(response);
        }
    };

    mcForm.ajaxChimp({
        url: mcForm.attr('action'),
        callback: fnCallback
    });
});


