$(document).ready(function () {

    // <--  header  -->

    // <--  nav  -->

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });
    
    // Or with jQuery
    
    $(document).ready(function(){
        $('.sidenav').sidenav();
    });

    // <--  /nav  -->

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, options);
    });
    
    // Or with jQuery
    
    $(document).ready(function(){
        $('.modal').modal();
    });

    // <--  /header  -->


    // <--  main  -->

    // <--  category-box  -->

    $(".owl-carousel").owlCarousel({
        rtl: true,
        margin: 25,
        autoWidth: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true,
            },
            600: {
                items: 3,
                nav: false
            },
            900: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: false
            }
        }
    });

    // <--  /category-box  -->

    // <--  new-homes  -->

$(window).on('resize',function(e){

    if($(window).width() < 920){
        changeNewHomez();
    }else{
        $(".new-homes").owlCarousel('destroy')
    }
})
if($(window).width() < 920){
    changeNewHomez();
}else{
    $(".new-homes").owlCarousel('destroy')
}
function changeNewHomez(){
    $(".new-homes").owlCarousel({
        rtl: true,
        margin: 25,
        autoWidth: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            400: {
                items: 2,
                nav: false,
            },
            600:{
                items: 3,

            }
        }
    });
}

    // <--  /new-homes  -->


    let slideCount = $(".homes-carousle-items .items").length;
    $(".homes-carousle-items .counter").html(`${slideCount} / <span>1</span>`)
    function nextSlide() {
        let $activeSlide = $(".homes-carousle-items .items.active");
        let numCount = $(".homes-carousle-items .counter span").text();
        let slide;
        $activeSlide.removeClass("active");
        if($activeSlide.next(".homes-carousle-items .items").length !=0){
        slide = $activeSlide.next(".homes-carousle-items .items")
            numCount++;
        }else{
            slide =  $(".homes-carousle-items .items:nth-child(2)")
            numCount = 1;
        }
        let count = $(".homes-carousle-items .counter").html(`${slideCount} / <span>${numCount}</span>  `) 
        slide.addClass("active")
    }

    function prevSlide() {
        let $activeSlide = $(".homes-carousle-items .items.active");
        let numCount = $(".homes-carousle-items .counter span").text();
        let slide;
        $activeSlide.removeClass("active");
        if($activeSlide.prev(".homes-carousle-items .items").length !=0){
            slide = $activeSlide.prev(".homes-carousle-items .items")
            numCount--;
        }else{
            slide = $(".homes-carousle-items .items:last-child")
            numCount = slideCount;
        }
        let count = $(".homes-carousle-items .counter").html(`${slideCount} / <span>${numCount}</span>  `) 
        slide.addClass("active")
    }


    $(".homes-carousle-description .next").on('click',function(e){
        nextSlide()
    })
    $(".homes-carousle-description .back").on("click",function(e){
        prevSlide();
    })

    $(".owl-carousles").owlCarousel({
        rtl: true,
        margin: 25,
        autoWidth: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            400: {
                items: 4,
                nav: true,
            },
            600: {
                items: 6,
                nav: true
            },
        }
    });

// <--  /main  -->


});    