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
        $(".addquestion").before($(".radio:first")
            .clone(true).removeAttr("hidden"));
    });
    $(".add-checkbox").on("click", function(){
        $(".addquestion").before($(".checkbox:first")
            .clone(true).removeAttr("hidden"));
    });
    $(".add-textbox").on("click", function(){
        $(".addquestion").before($(".textbox:first")
            .clone(true).removeAttr("hidden"));
    });



    $(".q-del").on("click", function(){
        $(this).parents(".questionbox").parent().remove();
    });
}); 