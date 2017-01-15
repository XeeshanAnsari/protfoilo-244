$(document).ready(function(){
   
    
    $("#short-intro").animate({
        right:'25%',
        opacity: 1
    },1000); 
function scroll(){
    
    var ypos = window.pageYOffset;
    
    if(ypos > 1500){
     $("#about-intro").animate({
        opacity: 1
    },3000);    
    }
    if(ypos > 1900){
    $("#col-skill-1").animate({
        left:'5%',
        opacity: 1
    },2000);
    $("#col-skill-2").animate({
        right:'5%',
        opacity: 1
    },2000);    
    }
    
     if(ypos > 2600){
     $("#address").animate({
        right:'10%',
        opacity: 1
    },3000);
    $("#massageBox").animate({
        opacity: 1
    },3000);  
    }
    if(ypos > 3300){
     
    $(".footerColum").animate({
        opacity: 1
    },3000);  
    }
  }
    window.addEventListener("scroll",scroll);
    
  
    
     
    
    
    
    
    // $("#box1").mouseenter(function(){
    //     $("#hiddenLink-1").slideDown(300);
    // });
    //  $("#box1").mouseleave(function(){
    //     $("#hiddenLink-1").slideUp(300);
    // });
    
    
    
});

