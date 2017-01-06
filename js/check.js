requirejs.config({
    paths: {
        jquery: "jquery-3.1.1",
        dataHandler: "dataHandler",
        echart: "echarts"
  }
});

requirejs(["jquery", "dataHandler", "echarts"],
function ($, dataHandler, echarts){
    var handler = new dataHandler.dataHandler;
    var storage = window.localStorage;
    var num = location.search
              .substring(5, location.search.length);
    var ddataJSON = storage.getItem('data' + num);
    var ddata = JSON.parse(ddataJSON);
    console.log(ddata);
    $(".title").text(ddata.title);
    function getRandom() {
        return Math.floor(Math.random() * 100);
    };
    objLength = function(obj) {
        var count = 0;
        for(var i in obj){
            count ++;
        }
        return count;
    };
    for (var i = 1; i <= objLength(ddata.question); i++) {
    	if (ddata.question["Q" + i]["type"] == "radio") {
            handler.radio(i - 1);
        }
        else if (ddata.question["Q" + i]["type"] == "checkbox") {
            handler.checkbox(i - 1);
        };
    };

    
});