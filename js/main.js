$('.menuBlock').on('click' , function(e){
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active')
    $('.wraps').toggleClass('menu-actives')
})
