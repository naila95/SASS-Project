$(document).ready(function(){




    $('.clientsSlider').slick({
      centerMode: true,
      dots: true,
      initialSlide: 1,
      slidesToShow: 2,
      arrows: false,
      centerPadding: '200px',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '50px',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
          }
        }
      ]
    });


    $('.newsSlider').slick({
        centerMode: true,
        dots: true,
        initialSlide: 1,
        slidesToShow: 2,
        arrows: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerPadding: '50px',
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '50px',
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '30px',
              }
            }
          ]
      });

});