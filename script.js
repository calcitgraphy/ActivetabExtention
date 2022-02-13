function search() {
    var Blah = document.getElementById("search").value;
    location.replace("https://www.google.com/search?q=" + Blah + "");
    }
  
  document.addEventListener("keypress",function(e){
  
    // console.log(e.keyCode);
  
    if(e.keyCode == 13){
  
  
      search();
  
    }
  
  });

  document.querySelector('.searchbutton').addEventListener('click',function(){


            search();

  })

  document.querySelector('.button').addEventListener('click',function(){


    search();

})



      function clock() {
      let date = new Date();
      let hrs = date.getHours();
      let mins = date.getMinutes();
      let period = "AM";
    
      if (hrs == 0) hrs = 12;
      if (hrs > 12) {
        hrs = hrs - 12;
        period = "PM";
      }
    
      hrs = hrs < 10 ? `0${hrs}` : hrs;
      mins = mins < 10 ? `0${mins}` : mins;
    
      let time = `${hrs}:${mins} ${period}`;
      setInterval(clock, 1000);
      document.getElementById("clock").innerText = time;
    }
    
    clock();