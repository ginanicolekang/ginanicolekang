function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



// An index to track the contender image 
var imageIndex = 1;
var candleImage; 

// An event callback for starting the interval
function startInterval() {
 setInterval(displayNextImage, 3000);
}

function displayNextImage() {
  candleImage.src = "candle gif/candle" + imageIndex.toString() + ".gif";
  if(imageIndex === (36)) {
    imageIndex = 1;
  }
  else {
    imageIndex = imageIndex + 1; // It can be replaced with imageIndex ++
  }
}

window.onload=function() {
  candleImage = document.getElementById("responsive");
 startInterval();
}