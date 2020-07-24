
// Scroll wheel design
$("body").niceScroll({
  cursorcolor: "#f1594a",
  cursorwidth: "1.5rem",
  cursorborder: "none",
  cursorborderradius: "0",
  scrollspeed: 70,

});

// slider mechanism
var moviesSlider = document.querySelector('.best-tv-shows');
var tvshowsSlider = document.querySelector('.best-movies');

var sections = document.querySelectorAll('section');
sections.forEach(section => {
  clickslider(section);
});

function clickslider(section) {

  var sliderBtns = section.querySelectorAll('[data-slider-btn]');
  var sliderPages = section.querySelectorAll('.top-picks');

  // Get current slider page index
  var sliderPageIndex;
  sliderPages.forEach((sliderPage, i) => {
    if (sliderPage.classList.contains('ontop')) {
      sliderPageIndex = i;
    }
  });

  sliderBtns.forEach(sliderBtn => {
  sliderBtn.addEventListener('click', () => {
    console.log(event.target);

    var sliderBtnType = sliderBtn.getAttribute('data-slider-btn');
    if (sliderBtnType == 'left') {
        // Decrement Slider Page Index
        if (sliderPageIndex == 0) {
          sliderPageIndex = 2;
        } else {
          sliderPageIndex--;
        }
    }

    if (sliderBtnType == 'right') {
      // Increment Slider Page Index
      if (sliderPageIndex == 2) {
        sliderPageIndex = 0;
      } else {
        sliderPageIndex++;
      }
    }
    // Remove ontop class from all slider pages
    sliderPages.forEach(sliderPage => {
      sliderPage.classList.remove('ontop');
    });
    // Show the slider page with the new index
    sliderPages[sliderPageIndex].classList.add('ontop');
    console.log(sliderPageIndex);

  })
  });

}
