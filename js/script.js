function myFunction() {
    var x = document.getElementById("myLinks");
    console.log("x:", x);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
        console.log('Link clicked');
        var x = document.getElementById("myLinks");
        x.style.display = "none";
    });
});

  var slideIndex = [1,1,1,1];
  var slideId = ["666Slides", "ParSlides", "606Slides", "flameSlides"]
  showDivs(1, 0);
  showDivs(1, 1);
  showDivs(1, 2);
  showDivs(1, 3);
  
  function plusDivs(n, no) {
    showDivs(slideIndex[no] += n, no);
  }
  
  function showDivs(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    console.log("Selected elements:", x);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }

  document.querySelectorAll('.button-left').forEach(item => {
    item.addEventListener('click', event => {
        console.log('Left button clicked');
        plusDivs(-1, Number(item.getAttribute('data-slideshow-index')));
    });
});

document.querySelectorAll('.button-right').forEach(item => {
    item.addEventListener('click', event => {
        console.log('Right button clicked');
        plusDivs(1, Number(item.getAttribute('data-slideshow-index')));
    });
});