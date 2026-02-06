const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");


buttons.forEach(function (button){
button.addEventListener("click",function (e){
    // console.log(e);
    // console.log(e.target);
    
    if(e.target.id == "black"){
        body.style.backgroundColor = e.target.id;
        body.style.color = "white";
        button.style.border = "2px solid white";
      }
    
    if(e.target.id == "brown"){
        body.style.backgroundColor = e.target.id;    
      }
    
    if(e.target.id == "yellow"){
        body.style.backgroundColor = e.target.id;    
      }
    if(e.target.id == "blue"){
        body.style.backgroundColor = e.target.id;    
      }
  })
  });

   

