requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($) {
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
        });
        $(".btn-submit").on("click", function() {
            var storage = window.localStorage;
            var i = 0;
            while (storage.getItem("data"+i) != null){
                i++;
            };
            var title = $(".title-input").val().trim();
            var date = new Date();
            var Qcontain = $(".q-contain").html();
            var data = {
                title: title,
                date: date,
                Qcontain: Qcontain
            };
            var d=JSON.stringify(data);
            storage.setItem("data"+i,d);
            var json = storage.getItem("data"+i);
            var jsonObj = JSON.parse(json);
            console.log(jsonObj.title);
            $(".submitbox").removeClass("active");
            $(".btn-submit").off();
        });
    });
}); 