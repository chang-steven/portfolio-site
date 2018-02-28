$(function() {
  $.scrollify({
      section : ".divider",
      sectionName : "section-name",
      interstitialSection : ".footer",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      // standardScrollElements: "",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      // before:function() {},
      // after:function() {},
      // afterResize:function() {},
      // afterRender:function() {}
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

    var typed = new Typed('.element', {
      stringsElement: '#typed-strings'
 });

});


// function moveToAbout() {
//   console.log('move to about');
//   // $.scrollify.move("#about");
// }
