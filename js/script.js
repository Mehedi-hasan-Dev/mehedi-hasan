// counter up

jQuery(document).ready(function($){
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
  });











// slider

$('.test-details').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase:'linear',
    // fade: true,
    dots: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });






  new WOW().init();










  // navbar

  // const bar = document.getElementById('bar')
  // const nav = document.getElementByc('side-nav')

  // if (bar) {
  //   bar.addEventListener('click',() => {
  //     nav.classList.add('active')
  //   })
  // }






  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
const nav = document.getElementById('side-nav');

if (bar) {
  bar.addEventListener('click', function() {
    nav.classList.add('active');
  });
}
if (close) {
  close.addEventListener('click', function() {
    nav.classList.remove('active');
  });
}







// gsap

gsap.from('.banner-details h1',{
  delay:0.7,
  opacity:0,
  duration:1,
  y:-60
})
gsap.from('.banner-left',{
  delay:1,
  opacity:0,
  duration:1,
  x:-60
})
gsap.from('.banner-title',{
  delay:1,
  opacity:0,
  duration:1,
  x:-60
})




// to top

const scrollTop = document.querySelector('.to-top');

window.addEventListener('scroll',function(){
  if (window.pageYOffset > 500){
    $('.to-top').fadeIn(700);
  }
  else{
    $('.to-top').fadeOut(300);
  }
})






// const scrollTop = document.querySelector('.to-top');

// window.addEventListener('scroll',function(){
//   if (window.pageYOffset > 500){
//     scrollTop.style.display = 'block'
//   }
//   else{
//     scrollTop.style.display = 'none'
//   }
// })









// $('.to-top').on("click", function(){
//   $("html, body").animate({scrolltop:0}, 5000, "easeInOutQuart");
// });

// $(window).scroll(function(){
//   var scroll = $(this).scrollTop();
//   if(scroll>500){
//     $('.to-top').fadeIn(700);
//   }
//   else{
//     $('.to-top').fadeOut(500);
//   }
// })


// $(document).ready(function() {
//   var $toTopElement = $('.to-top');
//   $toTopElement.hide();

//   function handleScroll() {
//     var scroll = $(window).scrollTop();

//     if (scroll > 500) {
//       $toTopElement.fadeIn(700);
//     } else {
//       $toTopElement.fadeOut(500);
//     }

//     requestAnimationFrame(handleScroll);
//   }

//   $(window).on('scroll', handleScroll);
// });


// $(document).ready(function() {
//   console.log("Document ready");
  
//   var $toTopElement = $('.to-top');
//   console.log("$toTopElement:", $toTopElement);
  
//   $toTopElement.hide();

//   function handleScroll() {
//     console.log("handleScroll");
    
//     var scroll = $(window).scrollTop();
//     console.log("scroll:", scroll);

//     if (scroll > 500) {
//       $toTopElement.fadeIn(700);
//     } else {
//       $toTopElement.fadeOut(500);
//     }

//     requestAnimationFrame(handleScroll);
//   }

//   $(window).on('scroll', handleScroll);
// });


// preloader


// var loader = document.querySelector(".preloader");

// window.onload = function() {
//   loader.style.display = "none";
// }

$(window).on('load',function(){
  $('.preloader').delay(500).fadeOut(500)
})




// color switch


$('.switch').click(function(){
  $('.color-swich').toggleClass('palette')
})

$('.green').click(function(){
  $('.style').attr('href', 'css/green.css')
})
$('.red').click(function(){
  $('.style').attr('href', 'css/red.css')
})
$('.blue').click(function(){
  $('.style').attr('href', 'css/blue.css')
})
$('.yellow').click(function(){
  $('.style').attr('href', 'css/yellow.css')
})