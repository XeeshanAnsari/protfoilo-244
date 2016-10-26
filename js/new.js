/* function for slide Bar*/
           var imgCount = 1;
            var total = 7 ;
 window.setInterval(function slideA() {
            
            var image = document.getElementById("img");
            imgCount = imgCount + 1;
            if(imgCount < 1){
                imgCount = total;
            }
            else if(imgCount > total){
                imgCount = 1;
            }
            else{
                 image.src = "./image/img" + imgCount + ".jpg";
            }
              
        },3000);
/* function for change the apperance when mouse over */

function changeProtBoxOver(box1){
    var id = document.getElementById("box1");
     id.style.opacity = 0.4;
     
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