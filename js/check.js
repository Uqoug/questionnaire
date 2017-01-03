requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($){
    var storage = window.localStorage;
    var num = location.search
              .substring(5,location.search.length);
    var ddataJSON = storage.getItem('data' + num);
    var ddata = JSON.parse(ddataJSON);
    $(".title").text(ddata.title);
});