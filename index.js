$(function() {
  $.scrollify({
      section : ".divider",
      sectionName : "section-name",
      interstitialSection : ".footer",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      setHeights: false,
      overflowScroll: true,
      updateHash: true,
      touchScroll: true,
    });

    $('#link-1').click((e) => {
      e.preventDefault();
      $.scrollify.move("#home");
    })

    $('#link-2').click((e) => {
      e.preventDefault();
      $.scrollify.move("#about");

    })

    $('#link-3').click((e) => {
      e.preventDefault();
      $.scrollify.move("#projects");
    })

    $('.link-4').click((e) => {
      e.preventDefault();
      $.scrollify.move("#contact");
    })

    const typed = new Typed('#typing-prompt', {
      strings: ["", "full-stack developer ^1000", "lifelong learner ^1000", "UI|UX enthusiast ^1000", "health specialist ^1000", "sports fanatic ^1000", "adventure seeker"],
      typeSpeed: 60,
      smartBackspace: true,
      loop: true,
    });



  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $('#top-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#top-nav').removeClass('scrolled-nav');
    }
});





});
