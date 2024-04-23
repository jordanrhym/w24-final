// JavaScript for the navigation bar dropdown menu:
function myFunction() {
  // myFunction is an established function used to toggle between displays. x is set to the element with the id of myLinks
  var x = document.getElementById("myLinks");
  console.log("dropdown clicked"); // Shows tha the the drop down was clicked
  if (x.style.display === "block") {
      x.style.display = "none";
      // If the display is block, the display is set to none.
  } else {
      x.style.display = "block";
      // If the display is not block, the display is set to block.
  }
}
// This event listener pays attention to the clicks on the myLinks a class.
// When a link is clicked, the display is set to none.
document.querySelectorAll('#myLinks a').forEach(item => {
  item.addEventListener('click', function() {
      console.log('Link clicked');
      var x = document.getElementById("myLinks");
      x.style.display = "none";
  });
});

// Java Script for Club Establishment Slideshows and slideshow buttons:
// Java Script and CSS learned from w3w at (https://www.w3schools.com/w3css/w3css_slideshow.asp)

// Each individual slide show (4 total) needs an index of 1 to make sure that the slide show starts with the first image. 
// Then their IDs from the html code is set to the SlideID variable.
  var slideIndex = [1,1,1,1];
  var slideId = ["666Slides", "ParSlides", "606Slides", "flameSlides"]
  // showDivs is a function where the first parameter corresponds to showing thrst slide of each slide show and the second parameter is an id array from the slideId variables list set earlier.
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);
  
  // 'n' calls to the number of slides needed to be added or subtracted from the slideshow order
  // showDivs is a call to display the corresponding slide to the plus or minus slide number
  function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
  }
  // This function displays the current slide and hides the rest.
  function showDivs(n, no) {
    // x equals the class  of the slideId array variable
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    // console log to check if the correct elements are selected
    console.log("Selected elements:", x);
    // if the slide count is > the length of the array, the slide index is set to 1. This makes the slideshow startover from the first image.
    if (n > x.length) {slideIndex[no] = 1}
    // if the slide count is < 1, the slide index is set to the length of the array to make the slideshow go to the last image. So you can more in reverse/backwards order.
    if (n < 1) {slideIndex[no] = x.length}
    // For statement loops through all slides and sets the display to none.
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    // Only the current slide is displayed with the block display.
    x[slideIndex[no]-1].style.display = "block";  
  }
  // Event listeners for the left and right buttons for each slideshow.
  // document.querySelectorAll('.button-left') selects all elements with the class name button-left
  document.querySelectorAll('.button-left').forEach(item => {
    // item.addEventListener('click', function() looks out for clicks on the button-left class
    item.addEventListener('click', function() {
        console.log('Left button clicked');
        // PlusDivs calls for the slideshow to go back one slide
        plusDivs(-1, Number(item.getAttribute('data-slideshow-index')));
    });
});

document.querySelectorAll('.button-right').forEach(item => {
    item.addEventListener('click', function()  {
        console.log('Right button clicked');
        plusDivs(1, Number(item.getAttribute('data-slideshow-index')));
    });
});