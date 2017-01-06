requirejs.config({
  paths: {
    jquery: "jquery-3.1.1",
    dataHandler: "dataHandler"
  }
});

requirejs(["jquery", "dataHandler"], function ($, dataHandler){
    var handler = new dataHandler.dataHandler;
    var storage = window.localStorage;
    var num = location.search
              .substring(5, location.search.length);
    var ddataJSON = storage.getItem('data' + num);
    var ddata = JSON.parse(ddataJSON);
    ObjLength = function(obj) {
        var count = 0;
        for(var i in obj){
            count ++;
        }
        return count;
    };
    for (var i = 1; i <= ObjLength(ddata.question); i++) {
    	if (ddata.question["Q" + i]["type"] === "radio") {
            handler.radio(i - 1);
        };
    };
});