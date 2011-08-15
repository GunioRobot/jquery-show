$(function() {

	
	var thumb = $("#images-thumb a"),
		thumbCount = $("#images-thumb a").size();
		show = $("#show"),
		showClose = $("#show .close button"),
		showPrev = $("#show .prev"),
		showNext = $("#show .next");
		showPrevBtn = $("#show .prev button"),
		showNextBtn = $("#show .next button");
		
	thumb.click(function(){
		index = $(this).index();
		
		thumb.addClass("opacity");
		thumb.children(".title").hide();
		
		var imageUrl = $(this).attr("href");

		$("<img/>").attr("src", imageUrl).load(function(){
			imageWidth = this.width;
			imageHeight = this.height;
			
			//marginTopBottom = Math.floor(imageHeight / 2);
			marginLeftRight = Math.floor(imageWidth / 2);
			marginTopPrevNext = Math.floor((imageHeight / 2) - (30 / 2));
			
			show.css("width", imageWidth + "px");
			show.css("height", imageHeight + "px");
			show.css("margin-left", "-" + marginLeftRight + "px");
			show.css("margin-right", "-" + marginLeftRight + "px");
			show.css("background", "url("+imageUrl+") no-repeat top center");
			
			showPrevBtn.css("margin-top", marginTopPrevNext + "px");
			showNextBtn.css("margin-top", marginTopPrevNext + "px");
			
			show.show();			
		});
		
		
		if(index == 0){
			showPrev.hide();
		}
		
		if(index == thumbCount-1){
			showNext.hide();
		}
		
		return false;
	});
	
	
	
	thumb.hover(function(){		
		if($(this).hasClass("opacity") == false){
			$(this).children(".title").show();
		}
	},function(){
			$(this).children(".title").hide();
	});
	
	

	showPrev.click(function(){		
		index = index-1;
		
		var imageUrl = thumb.eq(index).attr("href");
		
		$("<img/>").attr("src", imageUrl).load(function(){
			imageWidth = this.width;
			imageHeight = this.height;
			
			//marginTopBottom = Math.floor(imageHeight / 2);
			marginLeftRight = Math.floor(imageWidth / 2);
			marginTopPrevNext = Math.floor((imageHeight / 2) - (30 / 2));
						
			show.animate({
				width: imageWidth + "px",
				height: imageHeight + "px",
				"margin-left": "-"  + marginLeftRight + "px",
				"margin-right": "-"  + marginLeftRight + "px"
			}, 500);

			show.css("background", "url("+imageUrl+") no-repeat top center");
			
			showPrevBtn.css("margin-top", marginTopPrevNext + "px");
			showNextBtn.css("margin-top", marginTopPrevNext + "px");
						
		});
		
		showNext.show();
		if(index == 0){
			showPrev.hide();
		}
	})
	
	
		
	showNext.click(function(){		
		index = index+1;
		
		var imageUrl = thumb.eq(index).attr("href");
		
		$("<img/>").attr("src", imageUrl).load(function(){
			imageWidth = this.width;
			imageHeight = this.height;
			
			//marginTopBottom = Math.floor(imageHeight / 2);
			marginLeftRight = Math.floor(imageWidth / 2);
			marginTopPrevNext = Math.floor((imageHeight / 2) - (30 / 2));
						
			show.animate({
				width: imageWidth + "px",
				height: imageHeight + "px",
				"margin-left": "-"  + marginLeftRight + "px",
				"margin-right": "-"  + marginLeftRight + "px"
			}, 500);

			show.css("background", "url("+imageUrl+") no-repeat top center");
			
			showPrevBtn.css("margin-top", marginTopPrevNext + "px");
			showNextBtn.css("margin-top", marginTopPrevNext + "px");
						
		});
		
		showPrev.show();
		if(index == thumbCount-1){
			showNext.hide();
		}
	})
	
	
	
	showClose.click(function(){
		show.hide();
		showPrev.show();
		showNext.show();
		thumb.removeClass("opacity");
	});
	
});