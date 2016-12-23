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

	$(".del").on("click", function() {
		$(this).parents(".s-wraper").remove();
		
	})
}); 