// Settings for the carousel

var slider = tns({
    container: '.my-slider',
    items: 1,
    controls: false,
    nav: false,
    arrowKeys: true,
    responsive: {
        600: {
            items: 2,
            gutter: 20,
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 3
        },
        900: {
          items: 5
        },
        1600: {
            items: 6
        }
    },
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    mouseDrag: true
  });