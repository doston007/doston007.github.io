var smallGallery = new Swiper('.article__gallery-small-container .swiper-container', {
  navigation: {
    prevEl: '.article__gallery-button-prev',
    nextEl: '.article__gallery-button-next',
  },
  spaceBetween: 10,
  slidesPerColumn: 2,
  slidesPerView: 5,
  // slidesPerColumnFill: 'row',
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 4,      
    },
    768: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
    },
  }
})

var bigGallery = new Swiper('.article__gallery-big-container .swiper-container', {
  slidesPerView: 1,
  allowTouchMove: false,  
  centeredSlides: true
})

Array.from(document.querySelectorAll('.article__gallery-small-container .swiper-slide'))
.forEach(function (item) {
  item.addEventListener('click', function (e) {
    // console.log(smallGallery.clickedIndex)
    // smallGallery.slideTo(smallGallery.clickedIndex)
    document.querySelector('.article__gallery-small-container .swiper-slide.active').classList.remove('active');
    item.classList.add('active');
    
    bigGallery.slideTo(smallGallery.clickedIndex);
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var slides = Array.from(document.querySelectorAll('.article__gallery-big-container .swiper-slide img'))
  slides.forEach(function (item) {
    var src = item.getAttribute('src');
    item.parentNode.setAttribute('data-fancybox', 'gallery');
    item.parentNode.setAttribute('href', src);
  })
})