
/* function for change the apperance when mouse over */

function changeProtBoxOver(){
    var id = document.getElementById("box1");
     id.style.opacity = 0.7;
     
     var linksshow = document.getElementById("hiddenLink");
     linksshow.style.display = "block";
     linksshow.style.opacity = 1;
     
}


/* function for change the apperance when mouse out */

function changeProtBoxOut(box1){
    var id = document.getElementById("box1");
     id.style.opacity = 1;
     
     var linksshow = document.getElementById("hiddenLink");
     linksshow.style.display = "none";
        
}
 function box() {
     var border = 0;
     var div = document.getElementById("short-intro");
      
    
     for (var i=0; i < 10; i++){
         div.style.opacity = border;
         border = border + 0.1;
         
      }  
 }
 