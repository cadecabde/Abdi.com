var myImages =["https://cadecabde.github.io/Slideshow/imagees/The_Flash.jpg", "https://cadecabde.github.io/Slideshow/imagees/PB.jpg","https://cadecabde.github.io/Slideshow/imagees/the-100.jpg","https://cadecabde.github.io/Slideshow/imagees/Hawaii_Five.jpg","https://cadecabde.github.io/Slideshow/imagees/the-walking-dead.jpg"];


var captionImages =["The Flash","Prison Break","The 100","Hawaii Five o","The Walking Dead"];

var index=0; 

function updateImage(){
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
  if (myImages.length == index+1)
    index=0;
  else
    index++;
  updateImage();
} 


function back(){
  if (index===0)
    index=myImages.length-1;
  else
    index--;

  updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);
function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}
