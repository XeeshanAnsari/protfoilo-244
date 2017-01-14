
/* function for change the apperance when mouse over */

function changeProtBoxOver(boxId){
    var id = document.getElementById(boxId);
    var hidden = id.childNodes[5];
     hidden.style.display = "block";
    
}


/* function for change the apperance when mouse out */

function changeProtBoxOut(boxId){
    var id = document.getElementById(boxId);
    var hidden = id.childNodes[5];
     hidden.style.display = "none";
        
}
var border = 0;
 window.setInterval(function box() {
     
     var div = document.getElementById("short-intro");
      
    
     for (var i=0; i < 1000; i++){
         div.style.opacity = border;
         border = border + 0.0001;
         
         
      }  
 },300);
 