/*global $*/

$("body").keydown(function(event) {
    //moves left
    
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 4);
    //moves right
    } else if (event.which === 39) {
        $("#blue").css("left", $("#blue").offset().left + 10);
    } 
    else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top -4);
    //moves right
    }
    
});