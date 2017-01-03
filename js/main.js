requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery", "delList"], function ($, delList){
    var length = 0;
    var storage = window.localStorage;
    while (storage.getItem("data"+length) != null){
        length++;
    };
    for (var i = 0; i < length; i++) {
        var json = storage.getItem("data" + i);
        if (json == "") {
            continue;
        }
        var jsonObj = JSON.parse(json);
        var newdata = $(".listitem:eq(0)")
        .clone(true)
        .html()
        .replace('这是我的第一份问卷1', jsonObj.title)
        .replace('2016-00-00 00:00:00', jsonObj.date)
        .replace('datanum', i);
        $(".paperlist").append("<li class='listitem'>"
            + newdata + "</li>");
    };
    $(".edit").on("click", function(){
        var datanum = $(this).parents(".btn-wraper").next().text();
        var Url = "reEdit.html" + "?num=" + datanum;
        window.location.href = Url;
    });
    $(".check").on("click", function(){
        var datanum = $(this).parents(".btn-wraper").next().text();
        var Url = "check.html" + "?num=" + datanum;
        window.location.href = Url;
    });

    var del = new delList.delList();
    del.del();
    del.delSelect();
});