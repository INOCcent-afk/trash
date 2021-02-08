$(".hamburger").click(function() { 
    $(".screen-dropdown").addClass("show-flex");
    $(".hamburger").hide()
    $(".close-hamburger").addClass("show-flex")
})
$(".close-hamburger").click(function() { 
  $(".hamburger").show()
  $(".screen-dropdown").removeClass("show-flex");
  $(".close-hamburger").removeClass("show-flex")
})
$(".screen-dropdown-link-container").click(function(e) { 
  e.stopPropagation();
  $(this).find('ul').toggleClass("show-flex");
})
