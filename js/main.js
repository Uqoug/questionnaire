requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($) {
    $(".del").on("click", function() {
    	var $el = $(this);
    	console.log($el);
    	$(".submitbox").addClass("active");
    	$(".btn-cancel").on("click", function() {
    		$(".submitbox").removeClass("active");
    	})
    	$(".btn-submit").on("click", function() {
    		console.log($el.parents(".listitem"));
    		$el.parents("li").remove();
    		$(".submitbox").removeClass("active");
    	})
    })
})