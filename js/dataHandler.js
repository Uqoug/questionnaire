define(['jquery'], function ($) {
    function dataHandler() {};
    
    var storage = window.localStorage;
    var num = location.search
              .substring(5, location.search.length);
    var ddataJSON = storage.getItem('data' + num);
    var ddata = JSON.parse(ddataJSON);
    $(".title").text(ddata.title);
    
    function getRandom() {
        return Math.floor(Math.random() * 100);
    };


    dataHandler.prototype.radio = function(Qnum) {
        objLength = function(obj) {
            var count = 0;
            for(var i in obj){
                count ++;
            }
            return count;
        };
        $(".databox:hidden").clone()
        .removeAttr('hidden').appendTo($(".context"));
        $(".databox:visible:eq("+Qnum+") .q-title")
        .text(ddata.question["Q" + (Qnum + 1)]["title"]);
        var question = ddata.question["Q" + (Qnum + 1)];
        var $barbox = $(".databox:visible:eq("+Qnum+") .barbox");
        var $Sname = $(".databox:visible:eq("+Qnum+") .s-name");
        var Sum = 0;
        var num = [];
        var percent = '';
        for (var a = 1; a <= objLength(question["choosen"]); a++) {
            num[a] = getRandom();
            Sum += num[a];
        };
        for (var i = 1; i <= objLength(question["choosen"]); i++) {
            percent = Math.floor(num[i] / Sum *100) + "%";
            $Sname.text(question["choosen"]['s' + i]);
            $(".databox:visible:eq("+Qnum+") .bar:eq(0)")
            .css("width", percent);
            $(".databox:visible:eq("+Qnum+") .percent:eq(0)")
            .text(percent);
            $barbox.clone().appendTo($(".databox:visible:eq("+Qnum+")"));
        };
    };
    

    return {
        dataHandler: dataHandler
    };
})