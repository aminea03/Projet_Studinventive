/*initialization*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        duration : 1000,
        dist : 0,
        /*shift : ,*/
        /*padding : ,*/
        numVisible : 4,
        fullWidth : true,

    });
  });

