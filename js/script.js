const $html = document.querySelector('#html');
const $check = document.querySelector('#switch');
const $sun = document.querySelector('#sun');
const $moon = document.querySelector('#moon');


$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin:5,
    dots:false,
    nav:false,

    responsive:{
        0:{
            items:3,
        },
        800:{
            items:4,
        },
        1000:{
            items:13,
        }
    }
})

$check.addEventListener("change", function(e) {
    $html.classList.toggle("light")
    if ($html.classList.contains("light")) {
        $moon.classList.remove("light")
        $sun.classList.add("light")
    } else {
        $sun.classList.remove("light")
        $moon.classList.add("light")
    }
})