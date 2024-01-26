$(document).ready(function () {

  // Select
  $('select').niceSelect();

  // Header fix
  var headerHieght = $('.header').outerHeight(true);
  $('.wrapper').css('padding-top', headerHieght);
  $('.nav').css('top', headerHieght);

  $(window).resize(function() {
    var headerHieght = $('.header').outerHeight(true);
    $('.wrapper').css('padding-top', headerHieght);
    $('.nav').css('top', headerHieght);
  });

  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 0) {
      $('.header').addClass('header--fix');
    }
    else {
      $('.header').removeClass('header--fix');
    }
  });

  // Show nav mobile
  $('.navbar-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('.nav').slideToggle( "200", function() {});
  });

  // Open search mobile
  $('.search-open').on('click', function() {
    $('.search').fadeIn();
  });

  if($(window).width() < 992) {
    $(document).click(function(event) {
      if ($(event.target).closest('.search-open').length 
        || $(event.target).closest('.search').length ) return;
        $('.search').fadeOut();
        event.stopPropagation();
    });
  };

  // Filter open item
  $('.filter__title').on('click', function() {
    $(this).parent().toggleClass('filter__item--open');
    $(this).next().slideToggle(200);
  });

  // Filter open mob
  $('.filter-open').on('click', function() {
    $('.filter').fadeIn();
    $('body').addClass('no-scroll-fix-mob');
  });

  // Filter close mob
  $('.filter__close').on('click', function() {
    $('.filter').fadeOut();
    $('body').removeClass('no-scroll-fix-mob');
  });

  // Catalog mapping
  $('.mapping__item').on('click', function() {
    $('.mapping__item').removeClass('mapping__item--active');
    $(this).addClass('mapping__item--active');
  });

  $('.mapping__item--tile').on('click', function() {
    $('.catalog__items').removeClass('catalog__items--rows');
  });
  $('.mapping__item--row').on('click', function() {
    $('.catalog__items').addClass('catalog__items--rows');
  });

  // Modal
  $('.open-modal-order').on('click', function(e) {
    e.preventDefault();
    $('.modal--order').fadeIn(200);
  });
  $('.open-modal-bell').on('click', function(e) {
    e.preventDefault();
    $('.modal--bell').fadeIn(200);
  });
  $('.open-modal-credit').on('click', function(e) {
    e.preventDefault();
    $('.modal--credit').fadeIn(200);
  });

  $('.modal__close').on('click', function() {
    $('.modal').fadeOut(200);
  });
  $(document).click(function(event) {
    if ($(event.target).closest('.modal__box').length 
      || $(event.target).closest('.open-modal-order').length
      || $(event.target).closest('.open-modal-bell').length
      || $(event.target).closest('.open-modal-credit').length ) return;
      $('.modal').fadeOut(200);
      event.stopPropagation();
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Tabs card
  $('.tabs__item').not(':first').hide();
  $('.tabs__navItem').click(function() {
    $('.tabs__navItem').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  // Categorie sl
  var swiper = new Swiper('.categories__sl', {
    keyboard: false,
    spaceBetween: 20,
    mousewheel: false,
    slidesPerView: 'auto',
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  // Catalog slider
  var swiper = new Swiper('.catalog__slider', {
    keyboard: false,
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // Viewed sl
  var swiper = new Swiper('.viewed__sl', {
    keyboard: false,
    spaceBetween: 0,
    slidesPerView: 1,
    autoHeight: true,
    mousewheel: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1300: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  // Catalog sl
  var swiper = new Swiper('.catalog__sl', {
    spaceBetween: 0,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

  // Card thumbs
  var swiper3 = new Swiper('.card__thumbs', {
    spaceBetween: 13,
    slidesPerView: 4,
    direction: "vertical",
  });

  // Card sl
  var swiper4 = new Swiper('.card__sl', {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination1",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
    thumbs: {
      swiper: swiper3,
    },
  });

});