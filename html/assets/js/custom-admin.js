$(document).ready(function(){
  
	/******* Head Button Dropdown *******/
	$(".user-head-btn").click(function(){
		$(this).parents('.user-head-main').toggleClass("active");
	});

	/******* Head Button Dropdown *******/
	$(".mob-left-menu").click(function(){
		$('body').find('.dashboard-left').addClass("active");
	});
	$(".horizontal-bar .close").click(function(){
		$('body').find('.dashboard-left').removeClass("active");
	});

	$('.datatable').DataTable({
		responsive: true
	});

});