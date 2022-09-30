/**** FOR NAVIGATION BAR ON SCROLLING ****/
var nav = document.querySelector('.nav-home');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.remove('bg-transparent');
    nav.classList.add('bg-green__dark', 'shadow');
  } else {
    nav.classList.remove('bg-green__dark', 'shadow');
    nav.classList.add('bg-transparent');
  }
});


/**** FOR TOURIST SPOT SLIDER ****/
var carouselWidth = $(".carousel-inner__tourism")[0].scrollWidth;
var cardWidth = $(".carousel-item__tourism").width();
var scrollPosition__tourism = 0;


//for next
$(".carousel-control-next__tourism").on("click", function () {
  if (scrollPosition__tourism < (carouselWidth - cardWidth * 4)) { //check if you can go any further
    scrollPosition__tourism += cardWidth;  //update scroll position
    $(".carousel-inner__tourism").animate({ scrollLeft: scrollPosition__tourism },600); //scroll left
  }
});

//for previous
$(".carousel-control-prev__tourism").on("click", function () {
  if (scrollPosition__tourism > 0) {
    scrollPosition__tourism -= cardWidth;
    $(".carousel-inner__tourism").animate(
      { scrollLeft: scrollPosition__tourism },
      600
    );
  }
});

//TO STOP AUTO CYCLING
var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}


/************************************************************************** */

/**** FOR EVENTS SPOT SLIDER ****/
var carouselWidth__events = $(".carousel-inner__events")[0].scrollWidth;
var cardWidth__events = $(".carousel-item__events").width();
var scrollPosition__events = 0;

//for next
$(".carousel-control-next__events").on("click", function () {
  if (scrollPosition__events < (carouselWidth__events - cardWidth__events * 4)) { //check if you can go any further
    scrollPosition__events += cardWidth__events;  //update scroll position
    $(".carousel-inner__events").animate({ scrollLeft: scrollPosition__events },600); //scroll left
  }
});

//for previous
$(".carousel-control-prev__events").on("click", function () {
  if (scrollPosition__events > 0) {
    scrollPosition__events -= cardWidth__events;
    $(".carousel-inner__events").animate(
      { scrollLeft: scrollPosition__events },
      600
    );
  }
});

//TO STOP AUTO CYCLING
var multipleCardCarousel__events = document.querySelector(
  "#carouselExampleControls__events"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  //rest of the code
  var carousel = new bootstrap.Carousel(multipleCardCarousel__events, {
    interval: false
  });
} else {
  $(multipleCardCarousel__events).addClass("slide");
}