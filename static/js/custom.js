(function($) {

  /* ---------------------------------------------- /*
   * Preloader  
  /* ---------------------------------------------- */

  $(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
  });

  $(document).ready(function() {

    /* ---------------------------------------------- /*
     * Animated scrolling / Scroll Up
    /* ---------------------------------------------- */


    $('a[href*=#]').bind("click", function(e) {
      var anchor = $(this);
      if (anchor.attr('data-toggle') !== 'modal') {
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1000);
      }
      e.preventDefault();
    });


    $(window).scroll(function() {
      if ($(this).scrollTop() > 90) {
        $('.scroll-up').fadeIn();
      } else {
        $('.scroll-up').fadeOut();
      }
    });

    /* ---------------------------------------------- /*
     * Background image
    /* ---------------------------------------------- */



    /* ---------------------------------------------- /*
     * Navbar 
    /* ---------------------------------------------- */

    $('body').scrollspy({
      target: '.navbar-custom',
      offset: 200
    })

    var navbar = $('.navbar');
    var navHeight = navbar.height();


    var logoHeight = $("#intro h1 img").height()

    $(".navbar .navbar-brand img").hide();

    $(window).scroll(function() {
      if ($(this).scrollTop() >= navHeight) {
        navbar.addClass('navbar-color')
        $(".navbar .navbar-brand img").show();
        $("#intro h1 img").attr("style", "opacity: 0.2; filter: alpha(opacity=20);")
      } else {
        navbar.removeClass('navbar-color')
        $(".navbar .navbar-brand img").hide();
        $("#intro h1 img").attr("style", "opacity: 1.0; filter: alpha(opacity=100);")
      }
    });

    $(document).on('click', '.navbar-collapse.in', function(e) {
      if ($(e.target).is('a')) {
        $(this).collapse('hide');
      }
    });


    /* ---------------------------------------------- /*
     * Knob Animation
    /* ---------------------------------------------- */

    $(".custom-knob").knob({
      font: 'Montserrat',
      bgColor: '#C4C4C4',
      fgColor: '#C60404',
      thickness: '0.05',
      readOnly: true,
      max: 100,
      min: 0,
      step: 1,
      value: 0,
      width: 150,
      height: 150
    });

    $('#skill').waypoint(function() {
      $('#skill .custom-knob').each(function() {
        counter = $(this).attr('data-count-to'),
          $(this).animate({
            value: counter
          }, {
            duration: 1500,
            easing: 'swing',
            progress: function() {
              $(this).val(Math.ceil(this.value)).trigger('change');
            }
          })
      });
    }, {
      offset: '70%',
      triggerOnce: true
    });

    /* ---------------------------------------------- /*
     * WOW Animation When You Scroll
    /* ---------------------------------------------- */

    wow = new WOW({
      mobile: false
    });
    wow.init();

    /* ---------------------------------------------- /*
     * Owl slider - (clients, testimonials)
    /* ---------------------------------------------- */

    $("#owl-testimonials").owlCarousel({
      items: 1,
      navigation: true,
      navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: 5000,
      singleItem: true
    });

    $("#owl-clients").owlCarousel({
      items: 5,
      pagination: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: 5000
    });

    /* ---------------------------------------------- /*
     * Rotate
    /* ---------------------------------------------- */

    $(".rotate").textrotator({
      animation: "dissolve",
      separator: "|",
      speed: 3000
    });

    /* ---------------------------------------------- /*
     * Portfolio pop up
    /* ---------------------------------------------- */

    $('#portfolio').magnificPopup({
      delegate: 'a.pop-up',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        titleSrc: 'title',
        tError: 'The image could not be loaded.',
      }
    });

    $('.video-pop-up').magnificPopup({
      type: 'iframe',
    });

    /* ---------------------------------------------- /*
     * A jQuery plugin for fluid width video embeds
    /* ---------------------------------------------- */

    $(".video").fitVids();

    /* ---------------------------------------------- /*
     * E-mail validation 
    /* ---------------------------------------------- */

    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
      return pattern.test(emailAddress);
    };

    /* ---------------------------------------------- /*
     * Contact form ajax
    /* ---------------------------------------------- */

    $("#contact-form").submit(function(e) {

      e.preventDefault();

      var c_name = $("#c_name").val();
      var c_email = $("#c_email").val();
      var c_message = $("#c_message ").val();
      var c_tel = $("#c_tel ").val();
      var responseMessage = $('#contact-form .ajax-response');

      if ((c_name == "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email))) {
        responseMessage.fadeIn(500);
        responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
      } else {
        $.ajax({
          type: "POST",
          url: "http://seitenschmied.at/api/mail/david",
          data: {
            email: c_email,
            name: c_name,
            msg: c_message,
            tel: c_tel
          },
          beforeSend: function(result) {
            $('#contact-form button').empty();
            $('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
          },
          error: function() {
            $('#contact-form button').empty();
            $('#contact-form button').append('<i class="fa fa-retweet"></i> Senden wiederholen.');
            responseMessage.html('Problem beim Senden').fadeIn(1000);
          },
          success: function(_, success) {
            if (success === 'success') {
              $('#contact-form .ajax-hidden').fadeOut(500);
              responseMessage.html('Vielen Dank für Ihre Anfrage.').fadeIn(500);
            } else {
              $('#contact-form button').empty();
              $('#contact-form button').append('<i class="fa fa-retweet"></i> Senden wiederholen.');
              responseMessage.html('Problem beim Senden').fadeIn(1000);
            }
          }
        });
      }

      return false;

    });

    /* ---------------------------------------------- /*
     * Google Map 
    /* ---------------------------------------------- */

    map = new GMaps({
      el: '#map',
      lat: 47.3552297,
      lng: 11.7046988,
      zoom: 16,
      scrollwheel: false,
      zoomControl: false,
      panControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      styles: [{
        "featureType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "gamma": 0.5
        }]
      }]
    });

    var image = new google.maps.MarkerImage('assets/images/map-icon.png',
      new google.maps.Size(60, 60),
      new google.maps.Point(0, 0),
      new google.maps.Point(26, 30)
    );

    map.addMarker({
      lat: 47.3552297,
      lng: 11.7046988,
      icon: image,
      title: 'David Anlagenbetreuung',
      infoWindow: {
        content: '<p><strong>David Anlagenbetreuung</strong><br/> Fiecht Au 15 a <br> 05242/ 66222 <br> office@david-ab.at</p>'
      }
    });

  });

})(jQuery);
