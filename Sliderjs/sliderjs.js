var currentIndex = 0;
var imgSource = "Sliderimage/";
var currentSliderImage;
$(document).ready(
	function(){
		currentSliderImage = $("#img1");
		setInterval(function(){setnextImage("right");},2000);
		$("#img2").click(function() {setnextImage("left");})
	
		$("#img3").click(function() {setnextImage("right");})
		
	}
);

function setnextImage(direction) {

	var sliderImage = getnextImage(direction);
	var finalImageSurce = `${imgSource}${sliderImage}.jpg`;
	currentSliderImage.attr("src",finalImageSurce);

}

function getnextImage(direction){
	var imageArray = ["image1","image2","image3","image4","image5"];
	if(direction == "right"){ currentIndex = currentIndex<4?currentIndex+1:0;} else {currentIndex = currentIndex>0?currentIndex-1:4;}
	return imageArray[currentIndex];
}