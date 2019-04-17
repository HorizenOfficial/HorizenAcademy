var algoliasearch = require('algoliasearch');

var cheerio = require('cheerio');

var fs = require('fs');

var slugify = require('slugify');
slugify.extend({'/': '-'});

var algolia_config = require("./algolia");

var client = algoliasearch(algolia_config.application_id, algolia_config.api_key);
var index = client.initIndex(algolia_config.index_name);

var basePath = algolia_config.site_path;
var folders = ["eli5", "history", "horizen", "privacy", "resources", "technology"];

// Loop through all the files in the temp directory
var walkSync = function (dir, filelist) {
    var files = fs.readdirSync(basePath + "/" + dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(basePath + "/" + dir + "/" + file).isDirectory()) {
            filelist = walkSync(dir + "/" + file, filelist);
        } else {
            filelist.push({
                path: dir + "/" + file,
                url: dir + "/",
                id: slugify(dir)
            });
        }
    });
    return filelist;
};

var FILE_LIST = [
    {
        path: "index.html",
        url: "/",
        id: 'homepage'
    }
];

folders.forEach(function (f) {
    FILE_LIST = walkSync(f, FILE_LIST);
});


var MAX_LENGTH = 9500; // limit 10KB

var ALGOLIA_OBJECTS = [];

FILE_LIST.forEach(function (f) {
    var $ = cheerio.load(fs.readFileSync(basePath + "/" + f.path));

    var content = $(".post-content").text();
    content = content.replace(/\s\s+/g, ' ');
    if (content.length > MAX_LENGTH) {
        content = content.substr(0, MAX_LENGTH);
    }

    var topic = null, level = null;
    if ($(".js-PostContent").length) {
        topic = $(".js-PostContent").data("topic");
        level = $(".js-PostContent").data("level");
    }

    if (topic === "technology" && level === "expert") {
        // TODO: temporary ignore Technology Expert
        return;
    }

    if (topic === "privacy" && level === "expert") {
        // TODO: temporary ignore Privacy Expert
        return;
    }

    ALGOLIA_OBJECTS.push({
        objectID: f.id,
        url: f.url,
        title: $("title").text(),
        content: content,
        topic: topic,
        level: level
    });
});



// clear index before update
index.clearIndex(function(err, content) {
    if (err) throw err;

    console.log(content);

    // update latest articles
    index.saveObjects(ALGOLIA_OBJECTS, function (err, content) {
        if (err) throw err;

        console.log(content);
    });

});

