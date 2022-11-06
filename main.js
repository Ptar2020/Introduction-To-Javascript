//Show next, prev buttons on hover
window.onload = function()
{
  var item = document.getElementsByClassName('butt');
  var img = document.getElementsByClassName('img');
  var i = 0;
  var j = 0;
  for (i; i < img.length; i++)
  {
    //Handles mouse enter
    img[i].addEventListener('mouseover', function(){
      for (j; j < item.length; j++){
        item[j].style.display = 'block';
        this.addEventListener('mouseover', function(){
          this.style.display = 'block';
        });
      };
    });
    // Handles mouse leave
    img[i].addEventListener('mouseout', function()
    {
      for (j; j < item.length; j++)
      {
        item[j].style.display = 'none';
        item[j].addEventListener('mouseout', function()
        {
          item[j].style.display = 'none';
        });
      };
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