$(function(){
	$('.popup-with-move-anim').magnificPopup({
		type:'inline',
		fixedContentPos:false,
		fixedBgPos:true,
		overflowY:'auto',
		closeBtnInside:true,
		preloader:false,
		midClick:true,
		removalDelay:300,
		mainClass: 'my-mfp-slide-bottom'
	});
	$(".callback").submit(function(){
		var th = $(this);$.ajax({
			type:"POST",
			url: "telegram.php",
			data:th.serialize()
		})
		.done(function(){
			$(".success").addClass("visible");
			setTimeout(function(){
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
	try{
		$.browserSelector();
		if($("html").hasClass("chrome")){
			$.smoothScroll();
		}
	}
	catch(err){};
	$("img, a").on("dragstart", function(event){
		event.preventDefault();
	});
});