function initSliderTop() {

    $('.slider-top').slick({
        infinite: false,
        dots: true,
        vertical: true,
        customPaging : function(slider, i) {
            var targetImage = slider.$slides.eq(i).find('img').data("image");
            return '<img src="'+targetImage+'"/>';
        },  
    });

}

function initSliderPopular() {
    $('.slider-popular').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        variableWidth: true,
        centerPadding: '60px',
    });
}

function initShadowColor() {
    
    let images = $('.slider-popular__image');
    $.each(images, function () {
        let shadowColor = $(this).attr('data-shadow');
        $(this).css('color', shadowColor);
    })
   
}

export default function initSliders() {
    initSliderTop();
    initSliderPopular();
    initShadowColor();
  }
  