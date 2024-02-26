jQuery(document).ready(function ($) {

  /*nice select*/
  $('.select').niceSelect();

  /*slider*/
  var swiperBanner = new Swiper(".banner-slider", {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".banner-pagination",
      clickable: true,
    },
  });

  /*slider*/
  var swiperInfo = new Swiper(".slider-info", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".info-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".info-next",
      prevEl: ".info-prev",
    },
  });

  /*cutt text*/
  $('.slider-info .swiper-slide .text-wrap p').Cuttr({
    truncate: 'words',
    length: 9
  });

  /*slider*/
  var swiperTour = new Swiper(".slider-tour", {
    slidesPerView: "auto",
    spaceBetween: 20,
    autoHeight: true,
    pagination: {
      el: ".tour-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tour-next",
      prevEl: ".tour-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      576: {
        spaceBetween: 20,
      },

    },
  });

  /*slider*/
  var swiperDefault = new Swiper(".default-slider", {
    slidesPerView: "1",
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      576: {
        spaceBetween: 20,
      },
      767:{
        spaceBetween: 30,
      }
    },
  });

  /*code tel*/
  var input = document.querySelector("#tel-popup");
  window.intlTelInput(input, {
    //allowDropdown: true,
    //autoHideDialCode: true,
    // autoPlaceholder: "off",
    // dropdownContainer: document.body,
     excludeCountries: ["ru"],
    // formatOnDisplay: false,
    /*    geoIpLookup: function(callback) {
          $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
          });
        },*/
    // hiddenInput: "full_number",
    //initialCountry: "auto",
    //localizedCountries: { 'de': 'Deutschland' },
    nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    preferredCountries: ['ua'],
    InitialCountry: "",
    separateDialCode: true,

  });

  /*popup*/
  $(".fancybox").fancybox({
    touch:false,
    autoFocus:false,
  });

  /*mask tel*/
  $('.tel').mask('(000) 0000-00-00');

  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();

    $.fancybox.open( $('#menu-responsive'), {
      touch:false,
      autoFocus:false,
      beforeClose: function(e){
        $('body').removeClass('is-active');
        $('header').removeClass('is-active');
        $('html').removeClass('is-menu');
      }
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });


  $(document).on('click', '.fancybox-filter', function (e){
    e.preventDefault();

    $.fancybox.open( $('#filter'), {
      touch:false,
      autoFocus:false,
      beforeClose: function(e){
        $('body').removeClass('is-active');
        $('header').removeClass('is-active');
        $('html').removeClass('is-menu');
      }
    });
    setTimeout(function() {
      $('body').addClass('is-active');
      $('html').addClass('is-menu');
      $('header').addClass('is-active');
    }, 100);

  });

  $(document).on('click', '.close-menu a', function (e){
    e.preventDefault();
    $('body').removeClass('is-active');
    $.fancybox.close();
    $('header').removeClass('is-active');
    $('html').removeClass('is-menu');
  });

 /* mob sub menu*/
  $(document).on('click', '.mob-menu ul .sub-li > a', function (e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('.sub-menu').slideDown();
    }else{
      $(this).siblings('.sub-menu').slideUp();
    }
  });

//RANGE

  var $range = $(".js-range-slider"),
    $from = $(".js-from"),
    $to = $(".js-to"),
    range,
    min = 3,
    max = 30,
    from,
    to;

  var updateValues = function () {
    $from.prop("value", from);
    $to.prop("value", to);
  };

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    skin: "round",
    hide_min_max: true,
    hide_from_to: true,
    prettify_enabled: false,
    onChange: function (data) {
      from = data.from;
      to = data.to;
      updateValues();

    }
  });

  range = $range.data("ionRangeSlider");

  var updateRange = function () {
    range.update({
      from: from,
      to: to
    });

  };

  $from.on("change", function () {

    from = +$(this).prop("value");
    if (from < min) {
      from = min;
    }
    if (from > to) {
      from = to;
    }

    updateValues();
    updateRange();
  });

  $to.on("change", function () {
    to = +$(this).prop("value");
    if (to > max) {
      to = max;
    }
    if (to < from) {
      to = from;
    }

    updateValues();
    updateRange();
  });

  //view product
  $(document).on('click','.catalog .view-item li a', function(e){
    e.preventDefault();
    let item = $(this).parent('li');
    if(!item.hasClass('is-active')){
      $('.catalog .content-product').toggleClass('is-grid');
      $('.catalog .view-item li').toggleClass('is-active');
      $('.product-item .text-wrap .text p').Cuttr({
        truncate: 'words',
        length: 18
      });
    }else{
      $('.product-item .text-wrap .text p').Cuttr({
        truncate: 'words',
        length: 30
      });
    }
  });

  if(window.innerWidth < 576){
    $('.product-item .text-wrap .text p').Cuttr({
      truncate: 'words',
      length: 15
    });
  }

  $('.article .text-wrap p').Cuttr({
    truncate: 'words',
    length: 48
  });

  /*show filter*/
  $(document).on('click','.show-more-filter', function(e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('ul').find('li').show();
    }else{
      $(this).siblings('ul').find('li').hide();
    }
  });

  $(document).on('click','.head-filter', function(e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('div').slideDown();
    }else{
      $(this).siblings('div').slideUp();
    }
  });

  /*show/hide text*/
  $(document).on('click','.show-text', function(e){
    e.preventDefault();
    $(this).toggleClass('is-open');
    if($(this).hasClass('is-open')){
      $(this).siblings('p').show();
    }else{
      $(this).siblings('p').hide();
    }
  });

});