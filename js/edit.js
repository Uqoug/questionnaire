requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($) {
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
    });
    $(".add-checkbox").on("click", function(){
        $(".q-contain").append($(".checkbox:first")
            .clone(true).removeAttr("hidden"));
    });
    $(".add-textbox").on("click", function(){
        $(".q-contain").append($(".textbox:first")
            .clone(true).removeAttr("hidden"));
    });



    $(".q-del").on("click", function(){
        $(this).parents(".q-box").remove();
    });
    $(".reuse").on("click", function(){
        $(this).parents(".q-box").clone(true)
        .insertBefore($(".addquestion"));
    });
    $(".up").on("click", function(){
    	var toplimmit = $(this).parents(".q-box").prev(".q-box").attr("hidden");
        if (toplimmit == undefined) {
        	$(this).parents(".q-box").clone(true)
        	.insertBefore($(this).parents(".q-box").prev(".q-box"));
        	$(this).parents(".q-box").remove();
        }
    });
    $(".down").on("click", function(){
    	var bottomlimmit = $(this).parents(".q-box").next(".q-box").attr("class");
        if (!(bottomlimmit == undefined)) {
        	$(this).parents(".q-box").clone(true)
        	.insertAfter($(this).parents(".q-box").next(".q-box"));
        	$(this).parents(".q-box").remove();
        }
    });


    $(".publish").on("click", function() {
        $(".submitbox").addClass("active");
        $(".btn-cancel").on("click", function() {
            $(".submitbox").removeClass("active");
        });
        $(".btn-submit").on("click", function() {
            var storage = window.localStorage;
            var title = $(".title-input").val();
            var date = new Date();
            var Qcontain = $(".q-contain").html();
            var data = {
                title: title,
                date: date,
                Qcontain: Qcontain
            };
            var d=JSON.stringify(data);
            storage.setItem("data",d);
            var json=storage.getItem("data");
            var jsonObj=JSON.parse(json);
            $(".submitbox").removeClass("active");
        });
    });
}); 