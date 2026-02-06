const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");


buttons.forEach(function (button){   // for each button we are adding event listener
button.addEventListener("click",function (e){   // here click is the event and e is the event object which is passed to the function when the event occurs
    // console.log(e);
    // console.log(e.target.id);  // here we are getting the id of the button which is clicked
    
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

   

