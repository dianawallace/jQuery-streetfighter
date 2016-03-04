 $(document).ready(function() {
   $(".ryu").mouseenter(function() {
     $(".ryu-still").hide();
     $(".ryu-ready").show();
    }) 
    
    .mouseleave(function() {
     $(".ryu-ready").hide();
     $(".ryu-still").show();
    })
    
    .mousedown(function() {
        // play hadouken sound
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show()
          .animate(
           {"left": "1020px"},
           500, 
           function() {
               $(this).hide();
               $(this).css("left", "520px")
           });
    })
    
    .mouseup(function() {
        $("ryu.throwing").hide();
        $("ryu.ready").show();
    });
    
});

$(".ryu-ready").on("keydown", function(e){
   var code = e.keyCode;
    if(code == 88){
     $("X Pressed")("ryu-cool").show();
     $("x Pressed")("ryu-ready").hide();
    }
})



function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}

 