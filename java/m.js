/*global $*/
var charactercho=[];
var character=["http://24.media.tumblr.com/tumblr_md1a8v4nzF1qgd7tso1_500.gif",
               "https://steamuserimages-a.akamaihd.net/ugc/874126486246040200/6D8CAB9283F1FFFBBA91E024B37CAE1C5DDD02EF/",
               "https://media.giphy.com/media/38NtHuRHQggtq/giphy.gif",
               "https://66.media.tumblr.com/tumblr_maore5pyvZ1rfjowdo1_500.gif"];
function chooscharacter(charactercho){
    
    for(var i=0;i<character.length;i++){
        $(".characterdiv").append("<img class='character' id='cha"+i+"' src='"+character[i]+"'>");
    }
    $("#cha0").click(function(){
        alert("run");
        charactercho.push(character[0]);
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
    });
    $("#cha1").click(function(){
        alert("run");
        charactercho=character[1];
        
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
        
    });
    $("#cha2").click(function(){
        alert("run");
        charactercho=character[2];
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha3").style.visibility = "hidden";
        
    });
    $("#cha3").click(function(){
        alert("run");
        charactercho=character[3];
        
        document.getElementById("cha1").style.visibility = "hidden";
        document.getElementById("cha0").style.visibility = "hidden";
        document.getElementById("cha2").style.visibility = "hidden";
        
    });
}
chooscharacter();
$("#cha0").click(function(){
  console.log(charactercho);  
});
