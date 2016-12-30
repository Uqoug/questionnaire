define(['jquery'], function ($) {
	function delList() {};
	
	delList.prototype.del = function() {
		$(".del").on("click", function() {
			var $el = $(this);
			$(".submitbox1").addClass("active");
			$(".btn-cancel").on("click", function() {
				$(".submitbox1").removeClass("active");
				$(".btn-cancel").off();
				$(".btn-submit").off();
			});
			$(".btn-submit").on("click", function() {
				var datanum = "data" + $el.parents(".btn-wraper").next().text();
				console.log($el.parents(".btn-wraper").next());
				window.localStorage.setItem(datanum, "");
				$el.parents("li").remove();
				$(".submitbox1").removeClass("active");
				$(".btn-cancel").off();
				$(".btn-submit").off();
			});
		});
	};

	delList.prototype.delSelect = function() {
		$("#btn-select-all").on("click", function() {
		    $(":checkbox").prop("checked", function() {
		        if ($("#btn-select-all").prop("checked")) {
		            return true;
		        }
		        else {
		            return false;
		        }
		    });
		    $(":checkbox").prop("value", function() {
		        if ($("#btn-select-all").prop("checked")) {
		            return true;
		        }
		        else {
		            return false;
		        }
		    });
		});
		$(".select").on("click", function() {
		    $(this).prop("value", function() {
		        if ($(this).prop("checked")) {
		            return true;
		        }
		        else {
		            return false;
		        }
		    });
		});
		$(".del-all").on("click", function() {
		    $(".submitbox2").addClass("active");
		    $(".btn-cancel").on("click", function() {
		        $(".submitbox2").removeClass("active");
		        $(".btn-submit").off();
		        $(".btn-cancel").off();
		    });
		    $(".btn-submit").on("click", function() {
		        $(".select[value='true']").parents(".listitem").remove();
		        $(".submitbox2").removeClass("active");
		        $(".btn-submit").off();
		        $(".btn-cancel").off();
		    });
		});
	}

	return {
		delList: delList
	}
})