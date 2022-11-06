//Showhide next, prev buttons on mouseenter/leave
window.onload = function()
{
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var img = document.getElementsByClassName('img');
  var i = 0;
  for (i; i < img.length; i++)
  {
    //Handles mouse enter
    img[i].addEventListener('mouseover', function(){
        prev.style.display = 'block';
        next.style.display = 'block';
        prev.addEventListener('mouseover', function(){
          this.style.display = 'block';
          //Also show the next button
          next.style.display = 'block';
        });
        next.addEventListener('mouseover', function(){
          this.style.display = 'block';
          //Also show the prev button
          prev.style.display = 'block';
        });
    });
    // Handles mouse leave
    img[i].addEventListener('mouseout', function()
    {
        prev.style.display = 'none';
        next.style.display = 'none';
        prev.addEventListener('mouseout', function()
        {
          this.style.display = 'none';
        });
        next.addEventListener('mouseout', function()
        {
          this.style.display = 'none';
        });
    });
  };
};
//Handles the carousel items
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(a) {
  showSlides(slideIndex += a);
}

// Thumbnail image controls
function currentSlide(a) {
  showSlides(slideIndex = a);
}

function showSlides(a) 
{
  let i;
  let slides = document.getElementsByClassName("img");
  if (a > slides.length) 
  {
    slideIndex = 1
  }
  if (a < 1) 
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}