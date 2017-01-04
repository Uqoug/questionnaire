requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery", "moment"], function ($, moment) {
	function QnumReset(){
		var Qnum = $(".q-box:visible .q-num");
		for (var i = 0; i < Qnum.length; i++){
			Qnum[i].innerText = 'Q' + (i+1);
		}
	}
	function radioName(){
		var radioname = $(".radio:visible");
		for (var i = 0; i < radioname.length; i++) {
			$(".radio:visible:eq("+i+") .radioS").attr('name', 'q' + i);
		}
	}


	$(".add-box").on("click", function() {
		$(".btn-wraper1").toggleClass("active");
	});

	$(".choosen").hover(
	function () {
		$(this).next().addClass("hover");
  	},
	function () {
    	$(this).next().removeClass("hover");
	});
	$(".del").hover(
	function () {
		$(this).addClass("hover");
  	},
	function () {
    	$(this).removeClass("hover");
	});




    $(".radio .add-s-btn").on("click", function(){
        $(this).before($(".radio .s-wraper:first").clone(true));
    });
    $(".checkbox .add-s-btn").on("click", function(){
        $(this).before($(".checkbox .s-wraper:first").clone(true));
    });
	$(".del").on("click", function() {
		$(this).parents(".s-wraper").remove();
	});
    


    $(".add-radio").on("click", function(){
        $(".q-contain").append($(".radio:first")
            .clone(true).removeAttr("hidden"));
        QnumReset();
        radioName();
    });
    $(".add-checkbox").on("click", function(){
        $(".q-contain").append($(".checkbox:first")
            .clone(true).removeAttr("hidden"));
		QnumReset();
    });
    $(".add-textbox").on("click", function(){
        $(".q-contain").append($(".textbox:first")
            .clone(true).removeAttr("hidden"));
        QnumReset();
    });



    $(".q-del").on("click", function(){
        $(this).parents(".q-box").remove();
        QnumReset();
    });
    $(".reuse").on("click", function(){
        $(this).parents(".q-box").clone(true)
        .insertBefore($(".addquestion"));
        QnumReset();
    });
    $(".up").on("click", function(){
    	var toplimmit = $(this).parents(".q-box").prev(".q-box").attr("hidden");
        if (toplimmit == undefined) {
        	$(this).parents(".q-box").clone(true)
        	.insertBefore($(this).parents(".q-box").prev(".q-box"));
        	$(this).parents(".q-box").remove();
        }
        QnumReset();
    });
    $(".down").on("click", function(){
    	var bottomlimmit = $(this).parents(".q-box").next(".q-box").attr("class");
        if (!(bottomlimmit == undefined)) {
        	$(this).parents(".q-box").clone(true)
        	.insertAfter($(this).parents(".q-box").next(".q-box"));
        	$(this).parents(".q-box").remove();
        }
        QnumReset();
    });


    $(".publish").on("click", function() {
        $(".submitbox").addClass("active");
        $(".btn-cancel").on("click", function() {
            $(".submitbox").removeClass("active");
            $(".btn-cancel").off();
            $(".btn-submit").off();
        });
        $(".btn-submit").on("click", function() {
            var storage = window.localStorage;
            var i = 0;
            while (storage.getItem("data"+i) != null){
                i++;
            };
            var title = $(".title-input").val().trim();
            var date = moment().format('YYYY-MM-DD HH:mm:ss')
            var Qcontain = $(".q-contain").html();
            var question = function(){
                var question = {};
                for (var i = 0; i < $(".q-box:visible").length; i++) {
                    var d = {};
                    var e = {};
                    var type = $(".q-box:visible:eq("+i+")")
                               .attr('class')
                               .replace("q-box ", "");
                    var Qnum = $(".q-box:visible:eq("+i+") .q-num").text();
                    var Qtitle = $(".q-box:visible:eq("+i+") .q-title").val();
                    var selection = $(".q-box:visible:eq("+i+") .s-wraper");
                    e.type = type;
                    for (var j = 0; j < selection.length; j++) {
                        var Svalue = $(".q-box:visible:eq("+i+") .choosen:eq("+j+")").val();
                        e["s" + (j+1)] = Svalue;
                    };
                    d[Qnum] = {title : Qtitle, choosen: e};
                    $.extend(question, d);
                };
                return question;
            };
            var data = {
                title: title,
                date: date,
                Qcontain: Qcontain,
                question: question()
            };
            var d = JSON.stringify(data);
            storage.setItem("data"+i, d);
            $(".submitbox").removeClass("active");
            $(".btn-submit").off();
            $(".btn-cancel").off();
            window.location.href = "index.html";
        });
    });
}); 