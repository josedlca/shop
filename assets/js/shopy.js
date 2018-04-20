var deployMore = document.querySelector("#deployMore");
var more = document.querySelector('#more');
var saleSlider = document.querySelector('#saleSlider');

// ==================================================
                // deplymore
// =================================================//
deployMore.addEventListener('click',function(){
    more.classList.toggle('desapear');
}); 


// ==================================================
                // saleSlider
// =================================================//
$(function(){
    $("#saleSlider").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:400,
        loop:true,
        autoplayHoverPause:true,
        nav:true,
        center:true,
        dots:false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});