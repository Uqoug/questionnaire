requirejs.config({
  paths: {
    jquery: "jquery-3.1.1.min",
    moment: "moment.min"
  }
});

requirejs(["jquery"], function ($) {
    $(".del").on("click", function() {
        $(".box").add(".submitbox").addClass("active1");
        $(".shadow").addClass("active2");
    })
})