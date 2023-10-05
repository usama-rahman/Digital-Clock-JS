const clock = document.querySelector(".clock")

setInterval(function(){
    let dates = new Date();
    clock.innerHTML = dates.toLocaleTimeString();
},3000)
  