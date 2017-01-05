requirejs.config({
  paths: {
    jquery: "jquery-3.1.1",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($){
    var storage = window.localStorage;
    var num = location.search
              .substring(5, location.search.length);
    var ddataJSON = storage.getItem('data' + num);
    var ddata = JSON.parse(ddataJSON);
    $(".title").text(ddata.title);
    objLength = function(obj) {
        var count = -1;
        for(var i in obj){
            count ++;
        }
        return count;
    };
    function getRandom() {
        return Math.floor(Math.random() * 100);
    };
    
    


    $(".databox:hidden").clone()
    .removeAttr('hidden').appendTo($(".context"));
    $(".databox:visible:eq(0) .q-title")
    .text(ddata.question.Q1.title);
    var question = ddata.question.Q1;
    var $barbox = $(".databox:visible:eq(0) .barbox");
    var $Sname = $(".databox:visible:eq(0) .s-name");
    var Sum = 0;
    var num = [];
    var percent = '';
    for (var a = 1; a <= objLength(question.choosen); a++) {
        num[a] = getRandom();
        Sum += num[a];
    };
    console.log($(".databox:visible:eq(0) .bar:eq(0)"));
    
    for (var i = 1; i <= objLength(question.choosen); i++) {
        percent = Math.floor(num[i] / Sum *100) + "%";
        $Sname.text(question.choosen['s' + i]);
        $(".databox:visible:eq(0) .bar:eq(0)")
        .css("width", percent);
        $(".databox:visible:eq(0) .percent:eq(0)")
        .text(percent);
        $barbox.clone().appendTo($(".databox:visible:eq(0)"));
    };
    
});