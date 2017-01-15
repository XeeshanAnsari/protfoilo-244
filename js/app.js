
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

   