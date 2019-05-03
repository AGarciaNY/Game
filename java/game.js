/*global $*/
$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 4);
    //moves right
    console.log("1");
    } else if (event.which === 39) {
        $("#blue").css("left", $("#blue").offset().left + 4);
        console.log("2");
    } 
    else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top - 4);
        console.log("3");
    //moves right
    } else if (event.which === 40) {
        $("#blue").css("top", $("#blue").offset().top + 4);
        console.log("4");
    } else {
        return;
    }
    

});

$("#test").click(function(){
    console.log("hi");
})