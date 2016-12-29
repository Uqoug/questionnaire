requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery", "delList"], function ($, delList) {
    var del = new delList.delList();
    del.del();
    del.delSelect();

    var length = 0;
    var storage = window.localStorage;
    while (storage.getItem("data"+length) != null){
        length++;
    };
    for (var i = 0; i < length; i++) {
        var json = storage.getItem("data"+i);
        var jsonObj = JSON.parse(json);
        var listitem = document.createElement('li');
        listitem.setAttribute("class", "listitem");
        var newdata = $(".listitem:eq(0)")
        .clone(true)
        .html()
        .replace('这是我的第一份问卷1', jsonObj.title);
        var newele = listitem.appendChild(newdata);
    }
    console.log(listitem);
});