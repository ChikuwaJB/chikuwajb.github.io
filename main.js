jQuery(function ($){
  $(window).load(function (){
      $(".loader").fadeOut(1000,function (){
          $(".loader-w").append("<div class='loader-text' style='display:none;'></div>");
            $(".loader-text").fadeIn(500,function (){
                $(".loader-text").typed({
                    strings: ["Welcome to my world!","Thank you for coming today!","Thanks, always as ever.","$ exec ./chikuwajb.github.io"],
                    typeSpeed: 80,
                    showCursor: false,
                    startDelay: 1000,
                    callback: function() {
                        setTimeout(function (){
                            $(".loader-w").animate({
                                backgroundColor:"#fff"
                            },500,function(){
                                $(".loader-w").slideUp(500);
                            });
                        },500);
                    }
                });
            });
      });
  });
}); 
