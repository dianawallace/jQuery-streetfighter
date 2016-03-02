 $(document).ready(function() {
   $(".ryu").mouseenter(function() {
     $(".ryu-still").hide();
     $(".ryu-ready").show();
    }) 
    
    .mouseleave(function() {
      alert("mouse left");
    });
});