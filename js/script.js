function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  var slideIndex = [1,1,1,1];
  var slideId = ["666Slides", "ParSlides", "606Slides", "flameSlides"]
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);
  
  function plusDivs(n, index) {
    showDivs(slideIndex[index] += n, index);
  }
  
  function showDivs(n, index) {
    var i;
    var x = document.getElementsByClassName(slideId[index]);
    if (n > x.length) {slideIndex[index] = 1}
    if (n < 1) {slideIndex[index] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[index]-1].style.display = "block";  
  }