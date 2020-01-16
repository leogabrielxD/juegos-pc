 

$(".sub-menu").click(function () {
     $(this).children("ul").slideToggle();
 })

 $("ul").click(function (p) {
     p.stopPropagation();
 })


$(".img-menu").click(function() {
    $(".contenedor-menu").fadeToggle("fast");
})
