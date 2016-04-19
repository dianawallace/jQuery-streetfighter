 jQuery(document).ready(function($) {
    $(document).keydown(function(event) {
        event.preventDefault();
        if (event.keyCode === 83 && event.ctrlKey) {
            console.log("saved");    
        } 
        console.log(event);
        if (event.keyCode === 88) {
            $(".ryu div").hide();
            $(".ryu-cool").show();
        }
    });    
   
    $(document).keyup(function(event) {
        if (event.keyCode === 88) {
            $(".ryu div").hide();
            $(".ryu-still").show();
        }
    });
   

   $(".ryu").mouseenter(function() {
     $(".ryu div").hide();
     $(".ryu-ready").show();
    }) 
    
    .mouseleave(function() {
     $(".ryu div").hide();
     $(".ryu-still").show();
    })
    
    .mousedown(function() {
        playHadouken();
        $(".ryu div").hide();
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
        $(".ryu div").hide();
        $(".ryu-ready").show();
    });
    
});


function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}

 