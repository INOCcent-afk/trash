$(".desktop-dropdown").click(function(e) { 
    e.stopPropagation();
    $(this).find('ul').toggle();
})
$(".hero").click(function() { 
    $(".desktop-dropdown ul").hide()
})

