/*global $*/
var blocks="https://vignette.wikia.nocookie.net/nintendo/images/6/63/Brick_Block.png/revision/latest?cb=20151206062204&path-prefix=en";
var mistorybox="https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en";

var charactercho=[];
var character=["http://24.media.tumblr.com/tumblr_md1a8v4nzF1qgd7tso1_500.gif",
               "https://steamuserimages-a.akamaihd.net/ugc/874126486246040200/6D8CAB9283F1FFFBBA91E024B37CAE1C5DDD02EF/",
               "https://media.giphy.com/media/38NtHuRHQggtq/giphy.gif",
               "https://66.media.tumblr.com/tumblr_maore5pyvZ1rfjowdo1_500.gif"];
var hasgamestart=false;
function chooscharacter(){
    
    for(var i=0;i<character.length;i++){
        $(".characterdiv").append("<img class='character' id='cha"+i+"' src='"+character[i]+"'>");
        $("cah"+i).css({"position":"absolute"});
    }
    $("#cha0").click(function(){
        
        charactercho.push(character[0]);
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
        $("#startbutton").html("<button id='startbutton'>START</button>");
        $(document).ready(function(){
        $("#cha0").animate({
            position: "absolute",
            left: '45%',
            height: '200px',
            width: '200px'
            });
        });
    });
    $("#cha1").click(function(){
        charactercho.push(character[1]);
        
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
        $("#startbutton").html("<button id='startbutton'>START</button>");
        $(document).ready(function(){
        $("#cha1").animate({
            position: "absolute",
            left: '45%',
            height: '200px',
            width: '200px'
            });
        });
        
    });
    $("#cha2").click(function(){
        charactercho.push(character[2]);
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
        $("#startbutton").html("<button id='startbutton'>START</button>");
        $(document).ready(function(){
        $("#cha2").animate({
            position: "absolute",
            left: '45%',
            height: '200px',
            width: '200px'
            });
        });
    });
    $("#cha3").click(function(){
        charactercho.push(character[3]);
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        $("#startbutton").html("<button id='startbutton'>START</button>");
        $(document).ready(function(){
        $("#cha3").animate({
            position: "absolute",
            left: '45%',
            height: '200px',
            width: '200px'
            });
        
        });
    });
}

chooscharacter();
var startload=["one","two"];
function LoadingPage(){
    
    $("#startbutton").click(function(){
        startload.push("three");
        startload.push("three");
        $("body").html("<body>"+"<button class='test'>"+"test"+"</button>"+"<h1 class='one'></h1>"+"</body>");
            var times=10;
            
            if(startload.length >2 ){
                $("html").css({"cursor":"wait"});
                setInterval(function(){
            if(startload.length > 2 && startload.length <5){
                    var d = new Date();
                    var n = d.getSeconds();
                    $(".one").html("<h1 class='one'>"+times+"<h/1>");
                    
                    if(times ===0){
                        
                        $(".one").html("<h1 class='one'>"+"GO!"+"<h1>");
                        startload.push("three");
                        startload.push("three");
                        $("html").css({"cursor":"context-menu"});
                        hasgamestart=true;
                    }
                    if(times < n){
                        times=times-1;
                        n=n+2;
                        }
                    if(times>n){
                        times=times-1; 
                        }
                    console.log(hasgamestart);
                    console.log(startload.length);
                    
                    }
                    
                }, 1000);
                console.log(hasgamestart);
            }
            
           $(".test").click(function(){
                console.log(hasgamestart);
                console.log("hi there");
                });
            console.log(hasgamestart);
            if(hasgamestart===true){
                console.log("nooooooooo");
                $("body").html("<body>"+"<h1>hi</h1>"+"<body>");
                $("body").keydown(function(event) {
                    if (event.which === 37) {
                        $("#blue").css("left", $("#blue").offset().left - 4);
                    //moves right
                    } else if (event.which === 39) {
                        $("#blue").css("left", $("#blue").offset().left + 10);
                    }else if (event.which === 38) {
                        $("#blue").css("top", $("#blue").offset().top -4);
                    //moves right
                    }
                    
                });
            }
        });
    

            
      

}

LoadingPage();
