define(['jquery', 'echarts'], function ($, echarts) {
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
        $(".radiobox:hidden").clone()
        .removeAttr('hidden').appendTo($(".context"));
        $(".radiobox:visible:eq("+Qnum+") .q-title")
        .text(ddata.question["Q" + (Qnum + 1)]["title"]);
        var question = ddata.question["Q" + (Qnum + 1)];
        var $barbox = $(".radiobox:visible:eq("+Qnum+") .barbox");
        var $Sname = $(".radiobox:visible:eq("+Qnum+") .s-name");
        var Sum = 0;
        var num = [];
        var percent = '';
        var lastRd = $(".radiobox:visible").length - 1;
        for (var a = 1; a <= objLength(question["choosen"]); a++) {
            num[a] = getRandom();
            Sum += num[a];
        };
        for (var i = 1; i <= objLength(question["choosen"]); i++) {
            percent = Math.floor(num[i] / Sum *100) + "%";
            $Sname.text(question["choosen"]['s' + i]);
            $(".radiobox:visible:eq("+lastRd+") .bar:eq(0)")
            .css("width", percent);
            $(".radiobox:visible:eq("+lastRd+") .percent:eq(0)")
            .text(percent);
            $barbox.clone().appendTo($(".radiobox:visible:eq("+lastRd+")"));
        };
    };
    
    dataHandler.prototype.checkbox = function(Qnum) {
        $(".checkbox:hidden").clone().removeAttr("hidden")
        .appendTo($(".context"));
        var cbData = [];
        var question = ddata.question["Q" + (Qnum + 1)];
        var lastCb = $(".checkbox:visible").length;
        $(".checkbox:visible:eq("+(lastCb-1)+") .q-title")
        .text(question["title"]);
        for (var i = 0; i < objLength(question.choosen); i++) {
            var sData = {value: getRandom(),
                        name: question.choosen["s" + (i + 1)]};
            cbData.push(sData);
            $(".checkbox:visible .s-name:eq(0)").clone()
            .appendTo(".checkbox:visible:eq("+(lastCb-1)+") .s-namelist");
            $(".checkbox:visible:eq("+(lastCb-1)+") .s-name:eq("+(i+1)+")")
            .text(question.choosen["s" + (i + 1)]);
        };
        
        var myChart = echarts.init($(".pie").get(lastCb));
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    right: '0px',
                    orient: 'vertical'
                },
                series: [
                    {
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: cbData
                    }
                ]
            };
        myChart.setOption(option);
    };


    dataHandler.prototype.textbox = function(Qnum) {
        var percent = getRandom() + "%";
        var lastTb = $(".textbox:visible").length;
        $(".textbox:hidden").clone()
        .removeAttr("hidden").appendTo($(".context"));
        $(".textbox:visible:eq("+lastTb+") .q-title")
        .text(ddata.question["Q" + Qnum]["title"])
        $(".textbox:visible:eq("+lastTb+") .bar").css("width", percent);
        $(".textbox:visible:eq("+lastTb+") .percent").text(percent);
    };
    return {
        dataHandler: dataHandler
    };
})

